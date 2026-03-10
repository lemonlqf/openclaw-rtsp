import { html, nothing } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import type { AssistantIdentity } from "../assistant-identity.ts";
import { toSanitizedMarkdownHtml } from "../markdown.ts";
import { openExternalUrlSafe } from "../open-external-url.ts";
import { detectTextDirection } from "../text-direction.ts";
import type { MessageGroup } from "../types/chat-types.ts";
import { renderCopyAsMarkdownButton } from "./copy-as-markdown.ts";
import {
  extractTextCached,
  extractThinkingCached,
  formatReasoningMarkdown,
} from "./message-extract.ts";
import { isToolResultMessage, normalizeRoleForGrouping } from "./message-normalizer.ts";
import { extractToolCards, renderToolCardSidebar } from "./tool-cards.ts";

type ImageBlock = {
  url: string;
  alt?: string;
};

type VideoBlock = {
  rtspUrl: string;
  wsUrl: string;
  id: string;
  title?: string;
};

const DEFAULT_VIDEO_WS_URL = "ws://localhost:8888";

function sanitizeVideoUrl(url: string): string {
  return url.trim().replace(/^[`"'<(\[]+|[`"'>)\],.;:!?]+$/g, "");
}

function extractRtspInfoFromText(text: string): { rtspUrl: string; wsUrl: string; title?: string } | null {
  try {
    const parsed = text.startsWith("{") ? JSON.parse(text) as Record<string, unknown> : {};
    // Support multiple formats: resource+wsResource, rtsp+ws, rtsp_url+ws_url
    const rtspUrl = parsed.resource ?? parsed.rtsp ?? parsed.rtsp_url;
    const wsUrl = parsed.wsResource ?? parsed.ws ?? parsed.ws_url;
    const title = parsed.title;
    if (
      typeof rtspUrl === "string" &&
      sanitizeVideoUrl(rtspUrl).toLowerCase().startsWith("rtsp")
    ) {
      return {
        rtspUrl: sanitizeVideoUrl(rtspUrl),
        wsUrl:
          typeof wsUrl === "string" && wsUrl
            ? sanitizeVideoUrl(wsUrl)
            : DEFAULT_VIDEO_WS_URL,
        title: typeof title === "string" ? title : undefined,
      };
    }
  } catch {
    // Not JSON, fall through to plain-text matching.
  }

  const rtspMatch = text.match(/rtsp:\/\/[^\s"'`>]*/i);
  if (!rtspMatch) {
    return null;
  }

  const wsMatch = text.match(/wss?:\/\/[^\s"'`>]*/i);
  return {
    rtspUrl: sanitizeVideoUrl(rtspMatch[0]),
    wsUrl: wsMatch ? sanitizeVideoUrl(wsMatch[0]) : DEFAULT_VIDEO_WS_URL,
  };
}

function extractRtspFromMessage(message: unknown): { rtspUrl: string; wsUrl: string } | null {
  const msg = message as Record<string, unknown>;
  const content = msg.content;
  if (typeof content === "string") {
    return extractRtspInfoFromText(content);
  }

  if (Array.isArray(content)) {
    for (const block of content) {
      if (typeof block !== "object" || block === null) {
        continue;
      }
      const b = block as Record<string, unknown>;
      if (b.type === "text" && typeof b.text === "string") {
        const info = extractRtspInfoFromText(b.text);
        if (info) {
          return info;
        }
      }
    }
  }

  return null;
}

function extractImages(message: unknown): ImageBlock[] {
  const m = message as Record<string, unknown>;
  const content = m.content;
  const images: ImageBlock[] = [];

  if (Array.isArray(content)) {
    for (const block of content) {
      if (typeof block !== "object" || block === null) {
        continue;
      }
      const b = block as Record<string, unknown>;

      if (b.type === "image") {
        // Handle source object format (from sendChatMessage)
        const source = b.source as Record<string, unknown> | undefined;
        if (source?.type === "base64" && typeof source.data === "string") {
          const data = source.data;
          const mediaType = (source.media_type as string) || "image/png";
          // If data is already a data URL, use it directly
          const url = data.startsWith("data:") ? data : `data:${mediaType};base64,${data}`;
          images.push({ url });
        } else if (typeof b.url === "string") {
          images.push({ url: b.url });
        }
      } else if (b.type === "image_url") {
        // OpenAI format
        const imageUrl = b.image_url as Record<string, unknown> | undefined;
        if (typeof imageUrl?.url === "string") {
          images.push({ url: imageUrl.url });
        }
      }
    }
  }

  return images;
}

function extractVideos(message: unknown): VideoBlock[] {
  const m = message as Record<string, unknown>;
  const videos: VideoBlock[] = [];
  const content = m.content;
  const messageKey =
    typeof m.timestamp === "number" || typeof m.timestamp === "string"
      ? String(m.timestamp)
      : typeof m.id === "string"
        ? m.id
        : `${Date.now()}`;

  if (typeof content === "string") {
    const info = extractRtspInfoFromText(content);
    if (info) {
      videos.push({ ...info, id: `${messageKey}-0` });
    }
    return videos;
  }

  if (!Array.isArray(content)) {
    return videos;
  }

  for (let i = 0; i < content.length; i++) {
    const block = content[i];
    if (typeof block !== "object" || block === null) {
      continue;
    }
    const b = block as Record<string, unknown>;

    if (b.type === "video") {
      const rtspUrl = typeof (b.rtsp_url ?? b.rtspUrl ?? b.rtsp) === "string" ? sanitizeVideoUrl(String(b.rtsp_url ?? b.rtspUrl ?? b.rtsp)) : "";
      const wsUrlCandidate = b.ws_url ?? b.wsUrl ?? b.ws;
      const wsUrl = typeof wsUrlCandidate === "string" && wsUrlCandidate ? sanitizeVideoUrl(wsUrlCandidate) : DEFAULT_VIDEO_WS_URL;
      const id = typeof b.id === "string" && b.id ? `${messageKey}-${b.id}` : `${messageKey}-${i}`;
      const title = typeof b.title === "string" ? b.title : undefined;

      if (rtspUrl) {
        videos.push({ rtspUrl, wsUrl, id, title });
      }
      continue;
    }

    if (b.type === "text" && typeof b.text === "string") {
      const info = extractRtspInfoFromText(b.text);
      if (info) {
        videos.push({ ...info, id: `${messageKey}-${i}` });
      }
    }
  }

  return videos;
}

export function renderReadingIndicatorGroup(assistant?: AssistantIdentity) {
  return html`
    <div class="chat-group assistant">
      ${renderAvatar("assistant", assistant)}
      <div class="chat-group-messages">
        <div class="chat-bubble chat-reading-indicator" aria-hidden="true">
          <span class="chat-reading-indicator__dots">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </div>
  `;
}

export function renderStreamingGroup(
  text: string,
  startedAt: number,
  onOpenSidebar?: (content: string) => void,
  assistant?: AssistantIdentity,
) {
  const timestamp = new Date(startedAt).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  const name = assistant?.name ?? "Assistant";

  return html`
    <div class="chat-group assistant">
      ${renderAvatar("assistant", assistant)}
      <div class="chat-group-messages">
        ${renderGroupedMessage(
    {
      role: "assistant",
      content: [{ type: "text", text }],
      timestamp: startedAt,
    },
    { isStreaming: true, showReasoning: false, rtspInfo: null },
    onOpenSidebar,
  )}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${name}</span>
          <span class="chat-group-timestamp">${timestamp}</span>
        </div>
      </div>
    </div>
  `;
}

export function renderMessageGroup(
  group: MessageGroup,
  opts: {
    onOpenSidebar?: (content: string) => void;
    showReasoning: boolean;
    assistantName?: string;
    assistantAvatar?: string | null;
  },
) {
  const normalizedRole = normalizeRoleForGrouping(group.role);
  const assistantName = opts.assistantName ?? "Assistant";
  const who =
    normalizedRole === "user"
      ? "You"
      : normalizedRole === "assistant"
        ? assistantName
        : normalizedRole;
  const roleClass =
    normalizedRole === "user" ? "user" : normalizedRole === "assistant" ? "assistant" : "other";
  const timestamp = new Date(group.timestamp).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  function hasRtspString(message: unknown): boolean {
    return extractRtspFromMessage(message) !== null;
  }

  const userRtspInfo = (() => {
    for (const item of group.messages) {
      const msg = item.message as Record<string, unknown>;
      if (msg.role === "user") {
        const info = extractRtspFromMessage(item.message);
        if (info) return info;
      }
    }
    return null;
  })();

  const userHasRtsp = userRtspInfo !== null;

  return html`
    <div class="chat-group ${roleClass}">
      ${renderAvatar(group.role, {
    name: assistantName,
    avatar: opts.assistantAvatar ?? null,
  })}
      <div class="chat-group-messages">
        ${group.messages.map((item, index) => {
    const msg = item.message as Record<string, unknown>;
    const isAssistant = msg.role === "assistant";
    const showVideo = isAssistant && userHasRtsp;
    return renderGroupedMessage(
      item.message,
      {
        isStreaming: group.isStreaming && index === group.messages.length - 1,
        showReasoning: opts.showReasoning,
        showVideo,
        rtspInfo: showVideo ? userRtspInfo : null,
      },
      opts.onOpenSidebar,
    );
  })}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${who}</span>
          <span class="chat-group-timestamp">${timestamp}</span>
        </div>
      </div>
    </div>
  `;
}

function renderAvatar(role: string, assistant?: Pick<AssistantIdentity, "name" | "avatar">) {
  const normalized = normalizeRoleForGrouping(role);
  const assistantName = assistant?.name?.trim() || "Assistant";
  const assistantAvatar = assistant?.avatar?.trim() || "";
  const initial =
    normalized === "user"
      ? "U"
      : normalized === "assistant"
        ? assistantName.charAt(0).toUpperCase() || "A"
        : normalized === "tool"
          ? "⚙"
          : "?";
  const className =
    normalized === "user"
      ? "user"
      : normalized === "assistant"
        ? "assistant"
        : normalized === "tool"
          ? "tool"
          : "other";

  if (assistantAvatar && normalized === "assistant") {
    if (isAvatarUrl(assistantAvatar)) {
      return html`<img
        class="chat-avatar ${className}"
        src="${assistantAvatar}"
        alt="${assistantName}"
      />`;
    }
    return html`<div class="chat-avatar ${className}">${assistantAvatar}</div>`;
  }

  return html`<div class="chat-avatar ${className}">${initial}</div>`;
}

function isAvatarUrl(value: string): boolean {
  return (
    /^https?:\/\//i.test(value) || /^data:image\//i.test(value) || value.startsWith("/") // Relative paths from avatar endpoint
  );
}

function renderMessageImages(images: ImageBlock[]) {
  if (images.length === 0) {
    return nothing;
  }

  const openImage = (url: string) => {
    openExternalUrlSafe(url, { allowDataImage: true });
  };

  return html`
    <div class="chat-message-images">
      ${images.map(
    (img) => html`
          <img
            src=${img.url}
            alt=${img.alt ?? "Attached image"}
            class="chat-message-image"
            @click=${() => openImage(img.url)}
          />
        `,
  )}
    </div>
  `;
}

function renderMessageVideos(videos: VideoBlock[]) {
  if (videos.length === 0) {
    return nothing;
  }

  return html`
    <div class="chat-message-videos">
      ${videos.map(
    (video) => html`
          <div 
            class="chat-message-video" 
            id="video-${video.id}" 
            width="500"
            height="350"
            data-video-id="video-${video.id}" 
            data-rtsp=${video.rtspUrl} 
            data-ws=${video.wsUrl}
            style="width: 500px; height: 350px;"
          ></div>
        `,
  )}
    </div>
  `;
}

function renderGroupedMessage(
  message: unknown,
  opts: { isStreaming: boolean; showReasoning: boolean; showVideo?: boolean; rtspInfo?: { rtspUrl: string; wsUrl: string } | null },
  onOpenSidebar?: (content: string) => void,
) {
  const m = message as Record<string, unknown>;
  const role = typeof m.role === "string" ? m.role : "unknown";
  const isToolResult =
    isToolResultMessage(message) ||
    role.toLowerCase() === "toolresult" ||
    role.toLowerCase() === "tool_result" ||
    typeof m.toolCallId === "string" ||
    typeof m.tool_call_id === "string";

  const toolCards = extractToolCards(message);
  const hasToolCards = toolCards.length > 0;
  const images = extractImages(message);
  const hasImages = images.length > 0;
  let videos = extractVideos(message);
  const hasVideos = videos.length > 0;

  // For assistant messages, always show video player (if no video content, use placeholder)
  let showVideo = role === "assistant";
  // if (showVideo) {
  //   videos = [{
  //     rtspUrl: "rtsp://placeholder",
  //     wsUrl: "ws://placeholder",
  //     id: `video-${Date.now()}`,
  //   }];
  // }
  const shouldShowVideo = showVideo;

  const extractedText = extractTextCached(message);
  const extractedThinking =
    opts.showReasoning && role === "assistant" ? extractThinkingCached(message) : null;
  const markdownBase = extractedText?.trim() ? extractedText : null;
  const reasoningMarkdown = extractedThinking ? formatReasoningMarkdown(extractedThinking) : null;
  const markdown = markdownBase;
  const canCopyMarkdown = role === "assistant" && Boolean(markdown?.trim());

  const bubbleClasses = [
    "chat-bubble",
    canCopyMarkdown ? "has-copy" : "",
    opts.isStreaming ? "streaming" : "",
    "fade-in",
  ]
    .filter(Boolean)
    .join(" ");

  if (!markdown && hasToolCards && isToolResult) {
    return html`${toolCards.map((card) => renderToolCardSidebar(card, onOpenSidebar))}`;
  }

  if (!markdown && !hasToolCards && !hasImages && !hasVideos) {
    return nothing;
  }

  return html`
    <div class="${bubbleClasses}">
      ${canCopyMarkdown ? renderCopyAsMarkdownButton(markdown!) : nothing}
      ${shouldShowVideo ? renderMessageVideos(videos) : nothing}
      ${renderMessageImages(images)}
      ${reasoningMarkdown
      ? html`<div class="chat-thinking">${unsafeHTML(
        toSanitizedMarkdownHtml(reasoningMarkdown),
      )}</div>`
      : nothing
    }
      ${markdown
      ? html`<div class="chat-text" dir="${detectTextDirection(markdown)}">${unsafeHTML(toSanitizedMarkdownHtml(markdown))}</div>`
      : nothing
    }
      ${toolCards.map((card) => renderToolCardSidebar(card, onOpenSidebar))}
    </div>
  `;
}
