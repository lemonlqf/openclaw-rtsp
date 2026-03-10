import { inferBasePath } from "./app-settings.ts";

declare global {
  interface Window {
    WSPlayer:
    | WSPlayerConstructor
    | {
      WSPlayer?: WSPlayerConstructor;
      default?: WSPlayerConstructor;
    };
  }
}

interface WSPlayerOptions {
  type: "real" | "realmonitor" | "record" | "playback";
  el: string;
  config?: {
    division?: number;
    num?: number;
    showControl?: boolean;
    showIcons?: Record<string, boolean>;
    openIvs?: boolean;
    useH265MSE?: boolean;
    picCapCb?: boolean;
    showRecordProgressBar?: boolean;
    autoplay?: boolean;
    muted?: boolean;
    isDynamicLoadLib?: boolean;
  };
  protocol?: "ws" | "wss";
  isIntranet?: boolean;
  prefixUrl?: string;
  getRealRtsp?: (params?: unknown) => Promise<string>;
  getRecords?: () => Promise<unknown[]>;
  getRecordRtspByTime?: (params: unknown) => Promise<string>;
  getRecordRtspByFile?: (params: unknown) => Promise<string>;
  getTalkRtsp?: () => Promise<string>;
  stopTalk?: () => void;
  receiveMessageFromWSPlayer?: (type: string, data?: unknown, err?: unknown) => void;
  getChannelAuthority?: (channelId: string) => Promise<boolean>;
  transportData?: unknown;
}

interface WSPlayerInstance {
  realByUrl: (options: {
    rtspURL: string;
    wsURL: string;
    selectIndex?: number;
    streamType?: string;
    channelId?: string;
    playerAdapter?: string;
    channelData?: Record<string, unknown>;
    isRTPStream?: boolean;
  }) => void;
  close?: (index?: number, reason?: string) => void;
  destroy: () => void;
}

type WSPlayerConstructor = new (options: WSPlayerOptions) => WSPlayerInstance;

const playerInstances = new Map<string, WSPlayerInstance>();

function sanitizeVideoUrl(url: string): string {
  return url.trim().replace(/^[`"'<(\[]+|[`"'>)\],.;:!?]+$/g, "");
}

function resolveWSPlayerConstructor(value: Window["WSPlayer"]): WSPlayerConstructor | null {
  if (typeof value === "function") {
    return value;
  }

  if (value && typeof value === "object") {
    if (typeof value.WSPlayer === "function") {
      return value.WSPlayer;
    }
    if (typeof value.default === "function") {
      return value.default;
    }
  }

  return null;
}

export function initVideoPlayer(
  containerId: string,
  rtspUrl: string,
  wsUrl: string,
  playerId: string,
): WSPlayerInstance | null {
  console.log("[VideoPlayer] initVideoPlayer called, containerId:", containerId);
  const basePath = inferBasePath();
  const prefixUrl = basePath ? `${basePath}/wsplayer` : "wsplayer";
  const normalizedRtspUrl = sanitizeVideoUrl(rtspUrl);
  const normalizedWsUrl = sanitizeVideoUrl(wsUrl);

  if (!window.WSPlayer) {
    console.error("WSPlayer not loaded");
    return null;
  }

  if (playerInstances.has(playerId)) {
    return playerInstances.get(playerId)!;
  }

  const WSPlayerCtor = resolveWSPlayerConstructor(window.WSPlayer);
  if (!WSPlayerCtor) {
    console.error("WSPlayer constructor not found", window.WSPlayer);
    return null;
  }

  try {
    const player = new WSPlayerCtor({
      type: "real",
      el: containerId,
      prefixUrl,
      protocol: normalizedWsUrl.startsWith("wss") ? "wss" : "ws",
      config: {
        division: 1,
        num: 1,
        showControl: true,
        showIcons: {
          streamChangeSelect: true,
          replayIcon: true,
          ivsIcon: false,
          talkIcon: false,
          localRecordIcon: false,
          audioIcon: true,
          snapshotIcon: true,
          closeIcon: true,
        },
        openIvs: false,
        useH265MSE: true,
        autoplay: true,
        muted: true,
        isDynamicLoadLib: false,
      },
      receiveMessageFromWSPlayer: (method: string, data?: unknown, err?: unknown) => {
        console.log(`[VideoPlayer] Player ${playerId} message:`, method, data, err);
      },
    });

    player.realByUrl({
      rtspURL: normalizedRtspUrl,
      wsURL: normalizedWsUrl,
      selectIndex: 0,
    });

    playerInstances.set(playerId, player);
    console.log("[VideoPlayer] Player created and started:", player);

    return player;
  } catch (err) {
    console.error(`Failed to create player ${playerId}:`, err);
    return null;
  }
}

export function destroyVideoPlayer(playerId: string): void {
  const player = playerInstances.get(playerId);
  if (player) {
    try {
      player.close?.();
      player.destroy();
    } catch (err) {
      console.error(`Failed to destroy player ${playerId}:`, err);
    }
    playerInstances.delete(playerId);
  }
}

export function destroyAllPlayers(): void {
  playerInstances.forEach((player, id) => {
    try {
      player.close?.();
      player.destroy();
    } catch (err) {
      console.error(`Failed to destroy player ${id}:`, err);
    }
  });
  playerInstances.clear();
}

export function initAllVideoPlayers(): void {
  const videoContainers = document.querySelectorAll<HTMLElement>(".chat-message-video");
  console.log("[VideoPlayer] Found video containers:", videoContainers.length);
  videoContainers.forEach((container) => {
    const rtspUrl = container.getAttribute("data-rtsp");
    const wsUrl = container.getAttribute("data-ws");
    const playerId = container.getAttribute("data-video-id");

    if (rtspUrl && wsUrl && playerId && !playerInstances.has(playerId)) {
      initVideoPlayer(container.id, rtspUrl, wsUrl, playerId);
    }
  });
}
