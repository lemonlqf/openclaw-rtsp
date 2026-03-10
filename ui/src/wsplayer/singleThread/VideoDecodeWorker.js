let SDKModule;

const VIDEO_FRAME_SUB_TYPE_I = 0; //I帧
const VIDEO_FRAME_SUB_TYPE_P = 1; //P帧
const VIDEO_FRAME_SUB_TYPE_B = 2; //B帧
const VIDEO_FRAME_SUB_TYPE_SMART_I = 18; //智能I帧
const VIDEO_FRAME_SUB_TYPE_SMART_P = 19; //智能P帧
const VIDEO_FRAME_SUB_TYPE_SMART_I_NORENDER = 20; //智能I帧，但不显示

const ENCODE_TYPE_VIDEO_HI_H264 = 2; //海思H.264编码格式
const ENCODE_TYPE_VIDEO_MY_H264 = 4; //公司H.264编码格式
const ENCODE_TYPE_VIDEO_STD_H264 = 8; //标准H.264编码格式
const ENCODE_TYPE_VIDEO_H265 = 12; //H.265编码格式

const DATA_RECORD_MP4 = 5; //录制MP4格式

const SP_STREAM_TYPE_DHSTD = 8; //dav编码格式
const STREAM_TYPE_SVC = 13; //H.264 SVC编码格式
const SP_STREAM_TYPE_FLV = 18; //flv编码格式

const ENCRYPT_UNKOWN = 0; //未知加密类型
const ENCRYPT_AES = 1;
const ENCRYPT_AES256 = 2;
const ENCRYPT_AES256_GDPR2 = 3;
const ENCRYPT_AES_STRING_FORMAT = 16;

const CACHE_MODE_OFF = 0; //关闭实时流自适应缓冲模式
const ADAPTIVE_CACHE = 1; //自适应缓冲
const REALTIME_FIRST = 2; //实时优先
const FLUENCY_FIRST = 3; //流畅优先
const FRAME_SCENE_POINTS_INFOR_SIZE = 144; // 景物点信息单组信息长度
/* IVS类型 */
var IVS_TYPE = {
  IVSINFOTYPE_PRESETPOS: 1,
  IVSINFOTYPE_MOTINTRKS: 2,
  IVSINFOTYPE_MOTINTRKS_EX: 3,
  IVSINFOTYPE_LIGHT: 4, // 光照
  IVSINFOTYPE_RAWDATA: 5, // jason数据
  IVSINFOTYPE_TRACK: 6, // 智能分析信息
  IVSINFOTYPE_TRACK_EX_B0: 7, // 智能结构化数据信息
  IVSINFOTYPE_MOTIONFRAME: 9,
  IVSINFOTYPE_VIDEO_CONCENTRATION: 10,
  IVSINFOTYPE_OVERLAY_PIC: 11, // 叠加图片帧
  IVSINFOTYPE_OSD_INFO: 12, // OSD辅助帧
  IVSINFOTYPE_GPS_INFO: 13, // GPS辅助帧
  IVSINFOTYPE_TAGGING_INFO: 14, // 景物点信息标注帧，辅助帧(0x13)
  IVSINFOTYPE_TRACK_A1: 15, // NVR浓缩信息轨迹点
  IVSINFOTYPE_DATA_WITH_LARGE_AMOUNT: 16,
  IVSINFOTYPE_TRACK_A1_EX: 17, // NVR浓缩信息轨迹点(扩展)
  IVSINFOTYPE_DATA_WITH_WATER_LEVEL_MONITOR: 18, //水位检测水位尺信息帧(0x17)
  IVSINFOTYPE_INTELFLOW: 19, // 智能客流量
  IVSINFOTYPE_DATA_WITH_SOUND_DECIBEL: 20, //声音警报分贝值信息帧(0x18)
  IVSINFOTYPE_DATA_WITH_SMART_MOTION: 21, //智能动检信息帧(0x19)
  IVSINFOTYPE_DHOP_SMART: 22, //开放平台智能帧(0x14)
  IVSINFOTYPE_TRAFFIC_LIGHT: 23, //交通信号灯(红绿灯)辅助帧(0x1D)
  IVSINFOTYPE_PTZ_LOCATION: 24, //云台位置帧(0x21)
};

var DRAW_TYPE = {
  DRAW_JSON: 0,
  DRAW_TRACK: 1,
  DRAW_ALARM: 2,
  DRAW_RULE: 3,
  DRAW_MOVE_CHECK: 7,
  DRAW_TEST: 9,
  DRAW_WEB_RULE: 11,
  DRAW_WEB_ALARM: 12,
  DRAW_FLOW_INFO: 13,
  DRAW_TRACKEX2: 14,
  DRAW_WUXI235_TRACKEX2: 15,
  DRAW_TRACKEXA1: 16,
  DRAW_TRACKEX2_TYPE_HUMAN: 17,
  DRAW_TRACKEX2_TYPE_VEHICLE: 18,
  DRAW_TRACKEX2_TYPE_NONMOTOR: 19,
  DRAW_TRACKEX2_TYPE_SHOPPRESENCE: 20,
  DRAW_TRACKEX2_TYPE_FLOWBUSINESS: 21,
  DRAW_INTELFLOW: 22,
  DRAW_SMARTMOTION: 23,
  DRAW_DHOPSMART: 24,
  DRAW_DATA_WITH_LARGE_AMOUNT: 25, //大数据量帧
  DRAW_TRACKEX2_TYPE_BAG: 26,
  DRAW_RULE_HIGHWAY_LANES: 27, //高速车道线
  DRAW_WATER_LEVEL_MONITOR: 28, //水位尺
  DRAW_END: 29,
};

//DHOP元素类型
var IVS_DHOP_ElEMENT_TYPE = {
  EM_DHOP_CIRCLE: 1,
  EM_DHOP_BrokenLine: 2,
  EM_DHOP_POLYGON: 3,
  EM_DHOP_TEXT: 4,
};

importScripts("libplay.js");

addEventListener("message", receiveMessage, false);

Module.onRuntimeInitialized = function () {
  m_bLoadSuccess = true;
  var msgType = "LoadSuccess";
  sendMessage(m_nPlayPort, msgType, null);
};

var m_bPlayback = 0;
var m_bSupportH264MSE = false;
var m_bSupportH265MSE = false;
var m_nCanvasWidth = 1920;
var m_nCanvasHeight = 1080;
var m_nPlayPort = 0;

var jsInputData = null;
var jsInputDataAry = null;

var jsFrameBuf = null;
var jsFrameInfo = null;
let dataView = null;

var jsBuf = null;
var jsFrameBodyData = null;

var jsBufY = null;
var jsBufU = null;
var jsBufV = null;
var jsYuvDataY = null;
var jsYuvDataU = null;
var jsYuvDataV = null;

var jsRecordFrameBuf = null;
var jsRecordFrameInfo = null;
var dataViewRecord = null;

let ivsBuf = null;
let ivsDataArray = null;
let ivsDataView = null;

let m_arrayDemuxBuf = null;
let m_uintDemuxInfo = null;
let m_dvDemuxInfo = null;

var m_nWidth = 0;
var m_nHeight = 0;
var m_nPreWidth = 0;
var m_nPreHeight = 0;

var m_bSmartEncode = 0;
var m_nVideoEncodeType = 0;

var m_bLoadSuccess = false;

var m_bDecryptionResult = false;
let m_nCurAudioChannel = 0;
var m_fisheyeOptParam = null;
let m_feArg4 = {}; // 存储每个窗口的arg4值（角度信息，用于手动模式）
let m_feArg5 = {}; // 存储每个窗口的arg5值（角度信息，用于手动模式）
let m_feArg3 = 0; // 存储当前检测结果：0=未检测到，1=在子窗口点链内

function receiveMessage(event) {
  if (!m_bLoadSuccess) {
    return;
  }
  var message = event.data;
  switch (message.nType) {
    //初始化
    case "Init":
      m_bPlayback = message.option.bPlayback;
      m_bSupportH264MSE = message.option.bSupportH264MSE;
      m_bSupportH265MSE = message.option.bSupportH265MSE;
      m_nCanvasWidth = message.option.nCanvasWidth;
      m_nCanvasHeight = message.option.nCanvasHeight;
      Init();
      break;
    //送流
    case "InputData":
      InputData(message.pData);
      break;
    //打开智能绘制
    case "OpenIVSDraw":
      OpenIVSDraw();
      break;
    //关闭智能绘制
    case "CloseIVSDraw":
      CloseIVSDraw();
      break;
    //开始码流录制
    case "StartRecord":
      StartRecord(
        message.nRecordType,
        message.nFileSize,
        message.bSegment,
        message.bNeedResizeRecord,
      );
      break;
    //停止码流录制
    case "StopRecord":
    case "CancelRecord":
      StopRecord(message.bNeedResizeRecord);
      break;
    //设置播放速度
    case "SetPlaySpeed":
      SetPlaySpeed(message.nSpeed);
      break;
    //设置OSD叠加
    case "SetYUVOSDInfoEx":
      SetYUVOSDInfoEx(message.OSDInfo);
      break;
    case "GetOriginalKeyCallBack":
      GetOriginalKey(message.playToken, message.playTokenKey, message.deviceID);
    case "SetPlayTokenToDecrypt":
      SetPlayTokenToDecrypt(
        message.playToken,
        message.keySalt,
        message.deviceID,
        message.bGetPlayInfo,
      );
      break;
    case "SetWebSecurityKey":
      SetWebSecurityKey(
        message.nDecryptType,
        message.nFrameType,
        message.strKey,
        message.stStreamInfo,
      );
      break;
    //设置解密秘钥
    case "SetSecurityKey":
      SetSecurityKey(
        message.nEncryptType,
        message.szKey,
        message.nKeyLen,
        message.szKeyId,
        message.nKeyIdLen,
      );
      break;
    //设置解密秘钥
    case "SetSecurityKeyEx":
      SetSecurityKeyEx(message.nEncryptType, message.stDecryptKey);
      break;
    //设置是否支持硬解码标记
    case "SetSupportWebMSE":
      m_bSupportH264MSE = message.bSupportH264MSE;
      m_bSupportH265MSE = message.bSupportH265MSE;
      SetSupportWebMSE(m_bSupportH264MSE, m_bSupportH265MSE);
    //暂停播放
    case "Pause":
      Pause(message.bPause);
      break;
    //抓图
    case "CatchPic":
      CatchPic(message.bWithWaterMask, message.waterMaskBitmap);
      break;
    //停止播放
    case "Stop":
      Stop();
      break;
    case "setPrintLogLevel":
      SetPrintLogLevel(message.nLogLevel);
      break;
    case "SetInt32":
      SetInt32(message.nSetType, message.nValue);
      break;
    case "InputAudioData":
      InputAudioData(message.audioData);
      break;
    case "SetPrivacyRecover":
      SetPrivacyRecover(message.bRecover);
      break;
    case "ChooseAudioChannel":
      ChooseAudioChannel(message.nChannelID, message.bFlag);
      break;
    case "PackageAudioData":
      PackageAudioData(message.stuFrameInfo);
      break;
    case "PackageVideoData":
      PackageVideoData(
        message.width,
        message.height,
        message.framerate,
        message.frameInfo,
        message.result,
      );
      break;
    //开启鱼眼功能
    case "StartFisheye":
      StartFisheye();
      break;
    //关闭鱼眼功能
    case "StopFisheye":
      StopFisheye();
      break;
    //设置鱼眼模式
    case "SetFishEyeMode":
      SetFishEyeMode(message.fisheyeOptParam);
      break;
    //获取鱼眼区域点数据
    case "GetFishEyeRegionPoints":
      var points = fetchFishEyeRegionPoints(message.winId, message.subRegionFlag);
      var msgType = "FishEyeRegionPointsCallback";
      var msgData = {
        winId: message.winId,
        subRegionFlag: message.subRegionFlag,
        points: points,
        arg4: m_feArg4[message.winId] || 0,
        arg5: m_feArg5[message.winId] || 0,
      };
      sendMessage(m_nPlayPort, msgType, msgData);
      break;
    //鱼眼云台更新
    case "FisheyeEptzUpdate":
      FisheyeEptzUpdate(message.eptzParams);
      var msgType = "FisheyeEptzUpdateCallback";
      var msgData = {
        arg3: m_feArg3 || 0,
      };
      sendMessage(m_nPlayPort, msgType, msgData);
      break;
    default:
      break;
  }
}

function Init() {
  //获取PlaySDK空闲端口号
  var jsPort = Module._malloc(1);
  var jsPortAry = new Uint8Array(Module.HEAPU8.buffer, jsPort, 1);
  Module._PLAY_GetFreePort(jsPortAry.byteOffset);
  m_nPlayPort = jsPortAry[0];
  jsPortAry = null;
  Module._free(jsPort);

  //设置播放窗口宽高属性
  Module._PLAY_ViewResolutionChanged(m_nPlayPort, m_nCanvasWidth, m_nCanvasHeight, 0);

  //设置实时流模式
  var nRet = Module._PLAY_SetStreamOpenMode(m_nPlayPort, m_bPlayback);
  nRet = Module._PLAY_OpenStream(m_nPlayPort, 0, 0, 10 * 1024 * 1024);

  nRet = Module._PLAY_SetSupportWebMSE(m_nPlayPort, m_bSupportH264MSE, m_bSupportH265MSE);

  nRet = Module._PLAY_Play(m_nPlayPort, 1);
  if (nRet) {
    //向C++层申请一块wasm内存，用于接收码流
    jsInputData = Module._malloc(5 * 1024 * 1024);
    jsInputDataAry = new Uint8Array(Module.HEAPU8.buffer, jsInputData, 5 * 1024 * 1024);

    var msgType = "InitSuccess";
    sendMessage(m_nPlayPort, msgType, null);
  }
}

function InputData(data) {
  if (jsInputDataAry) {
    jsInputDataAry.set(data);
    var nRet = Module._PLAY_InputData(m_nPlayPort, jsInputDataAry.byteOffset, data.length);
    var i = 0;
  }

  var msgType = "WorkerReceivedData";
  var msgData = {
    nLength: data.length,
  };

  sendMessage(m_nPlayPort, msgType, msgData);
}

function OpenIVSDraw() {
  Module._PLAY_RenderPrivateData(m_nPlayPort, 1, 0);
}

function CloseIVSDraw() {
  Module._PLAY_RenderPrivateData(m_nPlayPort, 0, 0);
}

function StartRecord(nRecordType, nFileSize, bSegment, bNeedResizeRecord) {
  if (bNeedResizeRecord) {
    //重新编码
    Module._PLAY_CreatePackageRecorder(m_nPlayPort, nRecordType, 0);
  } else {
    if (bSegment) {
      Module._PLAY_SetSegmentRecordData(m_nPlayPort, nFileSize, null, null);
    }
    Module._PLAY_StartDataRecord(m_nPlayPort, 0, nRecordType);
  }
}

function StopRecord(bNeedResizeRecord) {
  if (bNeedResizeRecord) {
    Module._PLAY_ClosePackageRecorder(m_nPlayPort);
  } else {
    Module._PLAY_StopDataRecord(m_nPlayPort);
  }
}

function SetPlaySpeed(nSpeed) {
  Module._PLAY_SetPlaySpeed(m_nPlayPort, nSpeed);
}

function StartFisheye() {
  Module._PLAY_StartFisheye(m_nPlayPort);
}

function StopFisheye() {
  Module._PLAY_StopFisheye(m_nPlayPort);
}

function SetFishEyeMode(fisheyeOptParam) {
  if (!fisheyeOptParam || m_nPlayPort <= 0) {
    return;
  }
  m_fisheyeOptParam = fisheyeOptParam;
  var ptrs = allocFisheyeOptParam(fisheyeOptParam);
  if (ptrs.optParamPtr) {
    var nRet = Module._PLAY_OptFisheyeParams(m_nPlayPort, 0, ptrs.optParamPtr); // 0 = FISHEYE_SETPARAM
    if (!nRet) {
      var nError = Module._PLAY_GetLastError(m_nPlayPort);
      var msgType = "SetFishEyeModeFailed";
      var msgData = { nError: nError };
      sendMessage(m_nPlayPort, msgType, msgData);
    }

    //释放内存
    if (ptrs.subModePtr) {
      Module._free(ptrs.subModePtr);
    }
    if (ptrs.outputFormatPtr) {
      Module._free(ptrs.outputFormatPtr);
    }
    Module._free(ptrs.optParamPtr);
  }
}

function allocFisheyeSubMode(subMode) {
  if (!subMode) {
    return 0;
  }

  var subModePtr = Module._malloc(32);
  var heap32 = Module.HEAP32;
  var heap16 = Module.HEAP16;
  var base32 = subModePtr >> 2;
  var base16 = subModePtr >> 1;

  heap32[base32 + 0] = subMode.subMountMode || 0;
  heap32[base32 + 1] = subMode.subCalibrateMode || 0;
  heap32[base32 + 2] = subMode.imgOutput ? subMode.imgOutput.w : 0;
  heap32[base32 + 3] = subMode.imgOutput ? subMode.imgOutput.h : 0;

  heap16[base16 + 8] = subMode.upperLeft ? subMode.upperLeft.x : 0;
  heap16[base16 + 9] = subMode.upperLeft ? subMode.upperLeft.y : 0;

  var reserved = subMode.reserved || [];
  heap32[base32 + 5] = reserved[0] || 0;
  heap32[base32 + 6] = reserved[1] || 0;
  heap32[base32 + 7] = reserved[2] || 0;

  return subModePtr;
}

function allocFisheyeOutputFormat(outputFormat) {
  if (!outputFormat) {
    return { outputFormatPtr: 0, subModePtr: 0 };
  }

  var heap32 = Module.HEAP32;
  var outputFormatPtr = Module._malloc(40);
  var offset = outputFormatPtr >> 2;
  var subModePtr = allocFisheyeSubMode(outputFormat.subMode);

  heap32[offset++] = outputFormat.mainShowSize ? outputFormat.mainShowSize.w : 0;
  heap32[offset++] = outputFormat.mainShowSize ? outputFormat.mainShowSize.h : 0;
  heap32[offset++] = outputFormat.floatMainShowSize ? outputFormat.floatMainShowSize.w : 0;
  heap32[offset++] = outputFormat.floatMainShowSize ? outputFormat.floatMainShowSize.h : 0;
  heap32[offset++] = outputFormat.imgOutput ? outputFormat.imgOutput.w : 0;
  heap32[offset++] = outputFormat.imgOutput ? outputFormat.imgOutput.h : 0;

  heap32[offset++] = subModePtr;

  heap32[offset++] = outputFormat.subModeNum || 0;
  heap32[offset++] = outputFormat.outputSizeRatio || 256;
  heap32[offset++] = (outputFormat.reserved && outputFormat.reserved[0]) || 0;

  return { outputFormatPtr: outputFormatPtr, subModePtr: subModePtr };
}

function allocFisheyeOptParam(optParam) {
  if (!optParam) {
    return { optParamPtr: 0, outputFormatPtr: 0, subModePtr: 0 };
  }

  var outputAllocation = allocFisheyeOutputFormat(optParam.outputFormat);
  var outputFormatPtr = outputAllocation.outputFormatPtr;
  var subModePtr = outputAllocation.subModePtr;

  var optParamPtr = Module._malloc(372);
  var heap32 = Module.HEAP32;
  var offset = optParamPtr >> 2;

  heap32[offset++] = optParam.mainStreamSize ? optParam.mainStreamSize.w : 0;
  heap32[offset++] = optParam.mainStreamSize ? optParam.mainStreamSize.h : 0;
  heap32[offset++] = optParam.originX || 0;
  heap32[offset++] = optParam.originY || 0;
  heap32[offset++] = optParam.radius || 0;
  heap32[offset++] = optParam.lensDirection || 0;
  heap32[offset++] = optParam.mainMountMode || 0;
  heap32[offset++] = optParam.mainCalibrateMode || 0;

  var regionParam = optParam.modeInitParam ? optParam.modeInitParam.regionParam || [] : [];
  for (var i = 0; i < 9; i++) {
    var region = regionParam[i] || {};
    heap32[offset++] = region.x || 0;
    heap32[offset++] = region.y || 0;
    heap32[offset++] = region.hAngle || 0;
    heap32[offset++] = region.vAngle || 0;
    heap32[offset++] = region.available || 0;
    var reserved = region.reserved || [];
    heap32[offset++] = reserved[0] || 0;
    heap32[offset++] = reserved[1] || 0;
    heap32[offset++] = reserved[2] || 0;
  }

  heap32[offset++] = (optParam.modeInitParam && optParam.modeInitParam.circularOffset) || 0;
  heap32[offset++] = (optParam.modeInitParam && optParam.modeInitParam.panoramaOffset) || 0;
  heap32[offset++] = (optParam.modeInitParam && optParam.modeInitParam.useRegionParam) || 0;
  var modeReserved = (optParam.modeInitParam && optParam.modeInitParam.reserved) || [];
  heap32[offset++] = modeReserved[0] || 0;

  heap32[offset++] = outputFormatPtr;

  heap32[offset++] = 0;
  heap32[offset++] = optParam.enableAutoContrast || 0;
  heap32[offset++] = optParam.alphaHistogram || 128;
  heap32[offset++] = optParam.alphaGray || 245;
  heap32[offset++] = optParam.captureSize ? optParam.captureSize.w : 0;
  heap32[offset++] = optParam.captureSize ? optParam.captureSize.h : 0;
  heap32[offset++] = optParam.mhfptzIndex || 0;
  var optReserved = optParam.reserved || [];
  heap32[offset++] = optReserved[0] || 0;

  return { optParamPtr: optParamPtr, outputFormatPtr: outputFormatPtr, subModePtr: subModePtr };
}

function SetYUVOSDInfoEx(OSDInfo) {
  if (0 == m_nCanvasWidth || 0 == m_nCanvasHeight) {
    return;
  }

  let nOsdCount = OSDInfo.osdCount;
  let nStuOsdInfoSize = 18376; //单个YUV_OSD_INFO_EX结构体18376字节
  const OsdDataInfoPtr = Module._malloc(nStuOsdInfoSize);
  let arrayFormat = new Uint8Array(Module.HEAPU8.buffer);
  for (let i = 0; i < nStuOsdInfoSize; i++) {
    arrayFormat[OsdDataInfoPtr + i] = 0;
  }

  Module.HEAPU8[OsdDataInfoPtr + 0] = 1; //是否是私有字体
  let strFontPath = "Font.bin";
  let nSequence = 0;
  strFontPath.split("").forEach((char, nIndex) => {
    let nValue = char.charCodeAt(0);
    arrayFormat[OsdDataInfoPtr + nSequence + 1] = nValue;
    nSequence++;
  });

  Module.HEAP32[OsdDataInfoPtr / 4 + 65] = nOsdCount;
  for (let i = 0; i < nOsdCount; i++) {
    let nPointX = (OSDInfo.osdList[i].pointX / m_nCanvasWidth) * m_nWidth;
    let nPointY = (OSDInfo.osdList[i].pointY / m_nCanvasHeight) * m_nHeight;

    Module.HEAP32[OsdDataInfoPtr / 4 + 66 + (564 / 4) * i] = nPointX; // 旋转点像素x位置
    Module.HEAP32[OsdDataInfoPtr / 4 + 67 + (564 / 4) * i] = nPointY; // 旋转点像素y位置
    Module.HEAP32[OsdDataInfoPtr / 4 + 68 + (564 / 4) * i] = OSDInfo.osdList[i].colorR; // osd叠加颜色r，范围0-255
    Module.HEAP32[OsdDataInfoPtr / 4 + 69 + (564 / 4) * i] = OSDInfo.osdList[i].colorG; // osd叠加颜色g，范围0-255
    Module.HEAP32[OsdDataInfoPtr / 4 + 70 + (564 / 4) * i] = OSDInfo.osdList[i].colorB; // osd叠加颜色b，范围0-255
    Module.HEAP32[OsdDataInfoPtr / 4 + 71 + (564 / 4) * i] = OSDInfo.osdList[i].colorA; // osd叠加透明度，范围0-255

    nSequence = 0;
    //JS默认采用UTF-16编码，需要先转为UTF-8编码
    let UTF8Array = UTF16ToUTF8(OSDInfo.osdList[i].strOsdData);
    for (let j = 0; j < UTF8Array.length; j++) {
      arrayFormat[(OsdDataInfoPtr + nSequence + 288 + 564 * i) >> 0] = UTF8Array[j]; // osd数据，使用utf-8编码
      nSequence++;
    }

    Module.HEAP32[OsdDataInfoPtr / 4 + 200 + (564 / 4) * i] = OSDInfo.osdList[i].fontX; // 字体宽度, 使用私有字体时无效
    Module.HEAP32[OsdDataInfoPtr / 4 + 201 + (564 / 4) * i] = OSDInfo.osdList[i].fontY; // 字体高度, 最大512
    Module.HEAP32[OsdDataInfoPtr / 4 + 202 + (564 / 4) * i] = OSDInfo.osdList[i].rotateAngle; // 旋转角度，范围0-359度
    Module.HEAPU8[OsdDataInfoPtr + 812 + 564 * i] = OSDInfo.osdList[i].coordinate8192; // 8192坐标系, 0表示像素坐标x,y基于码流分辨率, 1表示基于8192坐标系
  }
  Module._PLAY_SetYUVOSDInfoEx(m_nPlayPort, OsdDataInfoPtr);

  Module._free(OsdDataInfoPtr);
}

function GetOriginalKey(playToken, playTokenKey, deviceID) {
  var arrPlayToken = Module.intArrayFromString(playToken).concat(0); //add '\0'
  var playTokenPtr = Module._malloc(arrPlayToken.length); //采用声明的c函数 _malloc
  Module.HEAPU8.set(arrPlayToken, playTokenPtr); //复制字符串内容

  var arrPlayTokenKey = Module.intArrayFromString(playTokenKey).concat(0);
  var playTokenKeyPtr = Module._malloc(arrPlayTokenKey.length);
  Module.HEAPU8.set(arrPlayTokenKey, playTokenKeyPtr);

  var arrDeviceID = Module.intArrayFromString(deviceID).concat(0);
  var deviceIDPtr = Module._malloc(arrDeviceID.length);
  Module.HEAPU8.set(arrDeviceID, deviceIDPtr);

  var outKeyPtr = Module._malloc(256);
  var outKeyLengthPtr = Module._malloc(4);

  var nRet = Module._PLAY_GetOriginalKey(
    m_nPlayPort,
    playTokenPtr,
    playTokenKeyPtr,
    deviceIDPtr,
    outKeyPtr,
    outKeyLengthPtr,
  );

  var outKeyLength = Module.HEAP32[outKeyLengthPtr >> 2];
  var outKeyTmp = "";

  if (1 == nRet && outKeyLength <= 256) {
    var jsKeyBuf = new ArrayBuffer(outKeyLength);
    var jsKeyData = new Uint8Array(jsKeyBuf);
    jsKeyData.set(Module.HEAPU8.subarray(outKeyPtr, outKeyPtr + outKeyLength));
    outKeyTmp = ArrayBufferToString(jsKeyBuf);
  }

  Module._free(playTokenPtr); //释放内存
  Module._free(playTokenKeyPtr);
  Module._free(deviceIDPtr);
  Module._free(outKeyPtr);
  Module._free(outKeyLengthPtr);

  var outKeyParam = {
    nRet: nRet,
    outKey: outKeyTmp,
  };

  var msgType = "GetOriginalKeyCallBack";
  var msgData = {
    nRet: nRet,
    outKey: outKeyTmp,
  };

  sendMessage(m_nPlayPort, msgType, msgData);
}

function SetPlayTokenToDecrypt(playToken, keySalt, deviceID, bGetPlayInfo) {
  //playToken
  var arrPlayToken = Module.intArrayFromString(playToken).concat(0);
  var playTokenPtr = Module._malloc(arrPlayToken.length);
  Module.HEAPU8.set(arrPlayToken, playTokenPtr);

  //playtoken key盐值
  var arrKeySalt = Module.intArrayFromString(keySalt).concat(0);
  var keySaltPtr = Module._malloc(arrKeySalt.length);
  Module.HEAPU8.set(arrKeySalt, keySaltPtr);

  //设备序列号
  var arrDeviceID = Module.intArrayFromString(deviceID).concat(0);
  var deviceIDPtr = Module._malloc(arrDeviceID.length);
  Module.HEAPU8.set(arrDeviceID, deviceIDPtr);

  var playInfoPtr = null;
  var stuPlayInfoPtr = null;
  if (bGetPlayInfo) {
    //playToekn信息获取
    playInfoPtr = Module._malloc(4096);

    stuPlayInfoPtr = Module._malloc(8);
    Module.HEAP32[stuPlayInfoPtr / 4 + 0] = playInfoPtr;
  }

  var nRet = Module._PLAY_SetPlayTokenToDecrypt(
    m_nPlayPort,
    playTokenPtr,
    keySaltPtr,
    deviceIDPtr,
    bGetPlayInfo,
    stuPlayInfoPtr,
  );

  if (bGetPlayInfo) {
    //读取playInfo
    var nPlayInfoLen = Module.HEAP32[stuPlayInfoPtr / 4 + 1];
    var PlayInfoArrBuf = new ArrayBuffer(nPlayInfoLen);
    var PlayInfoArr = new Uint8Array(PlayInfoArrBuf);
    PlayInfoArr.set(Module.HEAPU8.subarray(playInfoPtr, playInfoPtr + nPlayInfoLen));
    var strPlayInfo = ArrayBufferToString(PlayInfoArrBuf);

    //释放wasm内存
    Module._free(playInfoPtr);
    Module._free(stuPlayInfoPtr);

    var msgType = "PlayTokenInfoCallBack";
    var msgData = {
      strPlayInfo: strPlayInfo,
    };

    sendMessage(m_nPlayPort, msgType, msgData);
  } else {
    var msgType = "PlayTokenDecryptResult";
    var msgData = nRet;

    sendMessage(m_nPlayPort, msgType, msgData);
  }

  //释放wasm内存
  Module._free(playTokenPtr);
  Module._free(keySaltPtr);
  Module._free(deviceIDPtr);
}

function SetWebSecurityKey(nDecryptType, nFrameType, strKey, stStreamInfo) {
  var arrStrKey = Module.intArrayFromString(strKey).concat(0);
  var strKeyPtr = Module._malloc(arrStrKey.length);
  Module.HEAPU8.set(arrStrKey, strKeyPtr);

  var arrSdpInfo = Module.intArrayFromString(stStreamInfo.sdpInfo).concat(0);
  var sdpInfoPtr = Module._malloc(arrSdpInfo.length);
  Module.HEAPU8.set(arrSdpInfo, sdpInfoPtr);

  var arrUserName = Module.intArrayFromString(stStreamInfo.strUserName).concat(0);
  var userNamePtr = Module._malloc(arrUserName.length);
  Module.HEAPU8.set(arrUserName, userNamePtr);

  var arrPassWord = Module.intArrayFromString(stStreamInfo.strPassWord).concat(0);
  var passWordPtr = Module._malloc(arrPassWord.length);
  Module.HEAPU8.set(arrPassWord, passWordPtr);

  const stStreamInfoPtr = Module._malloc(16); //4:uint32的字节大小
  Module.HEAP32[stStreamInfoPtr / 4 + 0] = sdpInfoPtr;
  Module.HEAP32[stStreamInfoPtr / 4 + 1] = userNamePtr;
  Module.HEAP32[stStreamInfoPtr / 4 + 2] = passWordPtr;
  Module.HEAP32[stStreamInfoPtr / 4 + 3] = stStreamInfo.nSsrc;

  Module._PLAY_SetWebSecurityKey(m_nPlayPort, nDecryptType, nFrameType, strKeyPtr, stStreamInfoPtr);

  Module._free(strKeyPtr); //释放内存
  Module._free(sdpInfoPtr);
  Module._free(userNamePtr);
  Module._free(passWordPtr);
  Module._free(stStreamInfoPtr);
}

function SetSecurityKey(nEncryptType, szKey, nKeyLen, szKeyId, nKeyIdLen) {
  var nRet = 1;

  var strKey = Module._malloc(49);
  var arrayKey = new Uint8Array(Module.HEAPU8.buffer);
  var nSequence = 0;

  if (ENCRYPT_AES == nEncryptType) {
    //逐字节的形式去内存中设置值，直接修改wasm内存数据
    szKey.forEach((value, nIndex) => {
      arrayKey[(strKey + nSequence) >> 0] = value;
      nSequence++;
    });
  } else if (ENCRYPT_AES256 == nEncryptType) {
    var szKeyIdTmp = new Uint8Array(16);

    //协议规定ENCRYPT_AES256对应的枚举值为1
    arrayKey[(strKey + nSequence) >> 0] = 1;
    nSequence++;
    if (0 == nKeyIdLen) {
      for (var i = 0; i < 16; i++) {
        szKeyIdTmp[i] = 0x00;
      }
      nKeyIdLen = 16;
      szKeyId = szKeyIdTmp;
    }

    //拼接上key ID，逐字节的形式去内存中设置值，直接修改wasm内存数据
    szKeyId.forEach((value, nIndex) => {
      arrayKey[(strKey + nSequence) >> 0] = value;
      nSequence++;
    });

    //拼接上key，逐字节的形式去内存中设置值，直接修改wasm内存数据
    szKey.forEach((value, nIndex) => {
      arrayKey[strKey + nSequence] = value;
      nSequence++;
    });

    nKeyLen = 1 + nKeyLen + nKeyIdLen;
    szKeyIdTmp = null;
  } else if (ENCRYPT_AES_STRING_FORMAT == nEncryptType) {
    szKey.split("").forEach((char, nIndex) => {
      arrayKey[(strKey + nSequence) >> 0] = char.charCodeAt(0);
      nSequence++;
    });
  }
  nRet = Module._PLAY_SetSecurityKey(m_nPlayPort, strKey, nKeyLen);

  Module._free(strKey);

  return nRet;
}

function SetSecurityKeyEx(nEncryptType, stDecryptKey) {
  var nRet = 1;
  const stDecryptKeyPtr = Module._malloc(96);

  var nSequence = 0;
  const keyPtr = Module._malloc(stDecryptKey.KeyLen);
  var arrayKey = new Uint8Array(Module.HEAPU8.buffer);

  stDecryptKey.Key.split("").forEach((char, nIndex) => {
    arrayKey[(keyPtr + nSequence) >> 0] = char.charCodeAt(0);
    nSequence++;
  });

  nSequence = 0;
  const keyIdPtr = Module._malloc(stDecryptKey.KeyIdLen);
  stDecryptKey.KeyId.split("").forEach((char, nIndex) => {
    arrayKey[(keyIdPtr + nSequence) >> 0] = char.charCodeAt(0);
    nSequence++;
  });

  Module.HEAP32[stDecryptKeyPtr / 4 + 0] = keyPtr;
  Module.HEAP32[stDecryptKeyPtr / 4 + 1] = stDecryptKey.KeyLen;
  Module.HEAP32[stDecryptKeyPtr / 4 + 2] = keyIdPtr;
  Module.HEAP32[stDecryptKeyPtr / 4 + 3] = stDecryptKey.KeyIdLen;
  nRet = Module._PLAY_SetSecurityKeyEx(
    m_nPlayPort,
    nEncryptType,
    stDecryptKeyPtr,
    stDecryptKey.KeyLen,
  );

  Module._free(keyPtr);
  Module._free(keyIdPtr);
  Module._free(stDecryptKeyPtr);

  return nRet;
}

function SetSupportWebMSE(bSupportH264MSE, bSupportH265MSE) {
  Module._PLAY_SetSupportWebMSE(m_nPlayPort, bSupportH264MSE, bSupportH265MSE);
}

function Pause(bPause) {
  Module._PLAY_Pause(m_nPlayPort, bPause);
}

function CatchPic(bWithWaterMask, waterMaskBitmap) {
  var nSize = (m_nWidth * m_nHeight * 3) / 2;
  var pJpegBuf = Module._malloc(nSize);
  var pJpegBufArr = new Uint8Array(Module.HEAPU8.buffer, pJpegBuf, nSize);

  var pJpegSize = Module._malloc(4);
  var pJpegSizeArr = new Uint8Array(Module.HEAPU8.buffer, pJpegSize, 4);

  //获取当前图像编码后的jpeg图片数据
  Module._PLAY_GetPicJPEG(m_nPlayPort, pJpegBufArr.byteOffset, nSize, pJpegSizeArr.byteOffset, 100);

  //C++内存数据拷贝至JS内存
  var nDataSize =
    (pJpegSizeArr[3] << 24) + (pJpegSizeArr[2] << 16) + (pJpegSizeArr[1] << 8) + pJpegSizeArr[0];
  var pOutJpegBuf = new ArrayBuffer(nDataSize);
  var pOutJpegBufArr = new Uint8Array(pOutJpegBuf);
  pOutJpegBufArr.set(
    Module.HEAPU8.subarray(pJpegBufArr.byteOffset, pJpegBufArr.byteOffset + nDataSize),
  );

  if (bWithWaterMask) {
    catchPicWithWaterMask(pOutJpegBufArr, waterMaskBitmap);
  } else {
    var msgType = "CatchPicCallBack";
    var msgData = {
      buffer: pOutJpegBufArr,
    };
    sendMessage(m_nPlayPort, msgType, msgData);
  }
  Module._free(pJpegBuf);
  Module._free(pJpegSize);
  pJpegBufArr = null;
  pJpegSizeArr = null;
  pOutJpegBuf = null;
  pOutJpegBufArr = null;
}

function Stop() {
  var nRet = Module._PLAY_Stop(m_nPlayPort);
  if (0 == nRet) {
    return;
  }
  nRet = Module._PLAY_CloseStream(m_nPlayPort);

  jsInputDataAry = null;
  Module._free(jsInputData);

  jsFrameBuf = null;
  jsFrameInfo = null;
  dataView = null;

  jsBufY = null;
  jsBufU = null;
  jsBufV = null;
  jsYuvDataY = null;
  jsYuvDataU = null;
  jsYuvDataV = null;

  jsRecordFrameBuf = null;
  jsRecordFrameInfo = null;
  dataViewRecord = null;
}

function SetPrintLogLevel(nLogLevel) {
  Module._PLAY_SetPrintLogLevel(nLogLevel);
}

function SetInt32(nSetType, nValue) {
  Module._PLAY_SetInt32(m_nPlayPort, nSetType, nValue);
}

function InputAudioData(audioData) {
  var jsAudioData = Module._malloc(audioData.length);
  var jsAudioDataAry = new Uint8Array(Module.HEAPU8.buffer, jsAudioData, audioData.length);

  jsAudioDataAry.set(audioData);
  Module._PLAY_InputAudioData(m_nPlayPort, jsAudioDataAry.byteOffset, audioData.length, 16, 8000);
  Module._free(jsAudioData);
}

function SetPrivacyRecover(bRecover) {
  Module._PLAY_SetPrivacyRecover(m_nPlayPort, bRecover);
}

function ChooseAudioChannel(nChannelID, bFlag) {
  Module._PLAY_ChooseAudio(m_nPlayPort, nChannelID, bFlag);
}

function PackageAudioData(stuFrameInfo) {
  let encodeDataInfoPtr = Module._malloc(88);
  let dataPtr = Module._malloc(stuFrameInfo.nSize);
  Module.writeArrayToMemory(stuFrameInfo.audioData, dataPtr);

  //参数赋值
  Module.HEAP32[encodeDataInfoPtr / 4 + 0] = dataPtr;
  Module.HEAP32[encodeDataInfoPtr / 4 + 1] = stuFrameInfo.nSize;
  Module.HEAP32[encodeDataInfoPtr / 4 + 2] = stuFrameInfo.nFrameType;
  Module.HEAP32[encodeDataInfoPtr / 4 + 3] = stuFrameInfo.nFrameSubType;
  Module.HEAP32[encodeDataInfoPtr / 4 + 4] = 0;
  Module.HEAP32[encodeDataInfoPtr / 4 + 5] = stuFrameInfo.nFrameID;
  Module.HEAP32[encodeDataInfoPtr / 4 + 6] = stuFrameInfo.nSamples;
  Module.HEAP32[encodeDataInfoPtr / 4 + 7] = stuFrameInfo.nBits;
  Module.HEAP32[encodeDataInfoPtr / 4 + 8] = stuFrameInfo.nAudioChnNum;
  Module.HEAP32[encodeDataInfoPtr / 4 + 9] = stuFrameInfo.nYear;
  Module.HEAP32[encodeDataInfoPtr / 4 + 10] = stuFrameInfo.nMonth;
  Module.HEAP32[encodeDataInfoPtr / 4 + 11] = stuFrameInfo.nDay;
  Module.HEAP32[encodeDataInfoPtr / 4 + 12] = stuFrameInfo.nHour;
  Module.HEAP32[encodeDataInfoPtr / 4 + 13] = stuFrameInfo.nMinute;
  Module.HEAP32[encodeDataInfoPtr / 4 + 14] = stuFrameInfo.nSecond;
  Module.HEAP32[encodeDataInfoPtr / 4 + 15] = 0;
  // reserved字段保持为0（正确范围：15-19，共5个32位整数=20字节）
  for (let i = 16; i < 21; i++) {
    Module.HEAP32[encodeDataInfoPtr / 4 + i] = 0;
  }
  Module._PLAY_InputAudioDataToPackage(m_nPlayPort, encodeDataInfoPtr);
  Module._free(dataPtr);
  Module._free(encodeDataInfoPtr);
}

function PackageVideoData(width, height, framerate, frameInfo, result) {
  let encodeDataInfoPtr = Module._malloc(96); // 新结构体大小为96字节
  let dataPtr = Module._malloc(result.byteLength);
  Module.writeArrayToMemory(result, dataPtr);

  //参数赋值
  Module.HEAP32[encodeDataInfoPtr / 4 + 0] = dataPtr;
  Module.HEAP32[encodeDataInfoPtr / 4 + 1] = result.byteLength;
  Module.HEAP32[encodeDataInfoPtr / 4 + 2] = frameInfo.nFrameType;
  Module.HEAP32[encodeDataInfoPtr / 4 + 3] = frameInfo.nFrameSubType;
  Module.HEAP32[encodeDataInfoPtr / 4 + 4] = 4; // nEncodeType
  Module.HEAP32[encodeDataInfoPtr / 4 + 5] = frameInfo.nFrameID; // nFrameID
  Module.HEAP32[encodeDataInfoPtr / 4 + 6] = width;
  Module.HEAP32[encodeDataInfoPtr / 4 + 7] = height;
  Module.HEAP32[encodeDataInfoPtr / 4 + 8] = framerate;
  Module.HEAP32[encodeDataInfoPtr / 4 + 9] = 2; // nDeinterlace
  Module.HEAP32[encodeDataInfoPtr / 4 + 10] = frameInfo.nYear;
  Module.HEAP32[encodeDataInfoPtr / 4 + 11] = frameInfo.nMonth;
  Module.HEAP32[encodeDataInfoPtr / 4 + 12] = frameInfo.nDay;
  Module.HEAP32[encodeDataInfoPtr / 4 + 13] = frameInfo.nHour;
  Module.HEAP32[encodeDataInfoPtr / 4 + 14] = frameInfo.nMinute;
  Module.HEAP32[encodeDataInfoPtr / 4 + 15] = frameInfo.nSecond;
  Module.HEAP32[encodeDataInfoPtr / 4 + 16] = frameInfo.nTimeStamp; // nTimeStamp

  // reserved字段保持为0（正确范围：17-21，共5个32位整数=20字节）
  for (let i = 17; i < 22; i++) {
    Module.HEAP32[encodeDataInfoPtr / 4 + i] = 0;
  }

  Module._PLAY_InputVideoDataToPackage(this.m_nPlayPort, encodeDataInfoPtr);

  Module._free(dataPtr);
  Module._free(encodeDataInfoPtr);
}

function cPlusVisibleDecCallBack(nPort, pBufY, pBufU, pBufV, nSize, pFrameInfo) {
  var stuFrameInfo = {};
  if (!jsFrameInfo) {
    jsFrameBuf = new ArrayBuffer(292); //通过二进制对象分配一块连续内存
    jsFrameInfo = new Uint8Array(jsFrameBuf); //二进制对象绑定到视图，通过视图对内存进行读写操作
    dataView = new DataView(jsFrameBuf);
  }
  jsFrameInfo.set(Module.HEAPU8.subarray(pFrameInfo, pFrameInfo + 292)); //c中的内存拷贝到刚分配的js内存中
  //帧类型
  stuFrameInfo.nFrameType = dataView.getInt32(0, true);
  //帧序号
  stuFrameInfo.nFrameID = dataView.getInt32(4, true);
  //帧子类型
  stuFrameInfo.nFrameSubType = dataView.getInt32(56, true);

  //帧时间
  stuFrameInfo.nYear = dataView.getUint16(40, true);
  stuFrameInfo.nMonth = dataView.getUint16(42, true);
  stuFrameInfo.nDay = dataView.getUint16(46, true);
  stuFrameInfo.nHour = dataView.getUint16(48, true);
  stuFrameInfo.nMinute = dataView.getUint16(50, true);
  stuFrameInfo.nSecond = dataView.getUint16(52, true);

  var msgData = {};
  //视频
  if (1 == stuFrameInfo.nFrameType) {
    //剩余缓冲数据量
    stuFrameInfo.nRemainData = dataView.getInt32(36, true);
    //抽帧标记
    stuFrameInfo.bThrowFrame = dataView.getUint8(120, true);
    if (0 == stuFrameInfo.bThrowFrame) {
      //编码类型
      stuFrameInfo.nEncodeType = dataView.getInt32(108, true);
      //码流类型
      stuFrameInfo.nStreamType = dataView.getInt32(112, true);
      //时间戳
      stuFrameInfo.nTimeStamp = dataView.getUint32(8, true);
      //图像宽度
      stuFrameInfo.nWidth = dataView.getInt32(12, true);
      m_nWidth = stuFrameInfo.nWidth;
      //图像高度
      stuFrameInfo.nHeight =
        dataView.getInt32(128, true) > 0
          ? dataView.getInt32(128, true)
          : dataView.getInt32(16, true);
      m_nHeight = stuFrameInfo.nHeight;
      //视频帧率
      stuFrameInfo.nFrameRate = dataView.getInt32(20, true);
      //图像跨距
      stuFrameInfo.nStride = dataView.getInt32(116, true);
      //旋转角度类型
      stuFrameInfo.nRotateType = dataView.getUint8(122, true);
      //vui句法中视频三原色
      stuFrameInfo.nColorPrimaries = dataView.getUint8(124, true);
      //vui句法中视频信号转换函数
      stuFrameInfo.nColorTransfer = dataView.getUint8(125, true);
      //vui中视频颜色空间
      stuFrameInfo.nColorSpace = dataView.getUint8(126, true);
      //颜色范围 0:yuv范围16-235,对应 TV; 1:yuv范围0-255, 对应 PC
      stuFrameInfo.bColorFull = dataView.getUint8(127, true);
      stuFrameInfo.nheightStride = dataView.getInt32(128, true);

      if (
        ENCODE_TYPE_VIDEO_HI_H264 == stuFrameInfo.nEncodeType ||
        ENCODE_TYPE_VIDEO_MY_H264 == stuFrameInfo.nEncodeType ||
        ENCODE_TYPE_VIDEO_STD_H264 == stuFrameInfo.nEncodeType
      ) {
        //H.264编码类型
        m_nVideoEncodeType = 1;
      } else if (12 == stuFrameInfo.nEncodeType) {
        //H.265编码类型
        m_nVideoEncodeType = 2;
      }

      //智能I/P帧
      if (
        VIDEO_FRAME_SUB_TYPE_SMART_I == stuFrameInfo.nFrameSubType ||
        VIDEO_FRAME_SUB_TYPE_SMART_P == stuFrameInfo.nFrameSubType ||
        VIDEO_FRAME_SUB_TYPE_SMART_I_NORENDER == stuFrameInfo.nFrameSubType
      ) {
        //Smart H.264或者Smart H.265
        m_bSmartEncode = 1;
      } else if (0 == stuFrameInfo.nFrameSubType) {
        m_bSmartEncode = 0;
      }

      //硬解
      if (0 !== pBufY && 0 === pBufU && 0 === pBufV) {
        //读取码流裸数据
        jsBuf = new ArrayBuffer(nSize); //通过二进制对象分配一块连续内存
        jsFrameBodyData = new Uint8Array(jsBuf); //二进制对象绑定到视图，通过视图对内存进行读写操作
        jsFrameBodyData.set(Module.HEAPU8.subarray(pBufY, pBufY + nSize)); //c中的内存拷贝到刚分配的js内存中

        msgData = {
          pBufY: jsFrameBodyData,
          pBufU: 0,
          pBufV: 0,
          nSize: nSize,
          stuFrameInfo: stuFrameInfo,
        };
      } else //软解
      {
        if (0 == pBufY || 0 == pBufU || 0 == pBufV) {
          return;
        }

        if (m_nWidth != m_nPreWidth || m_nHeight != m_nPreHeight) {
          m_nPreWidth = m_nWidth;
          m_nPreHeight = m_nHeight;

          jsBufY = null;
          jsBufU = null;
          jsBufV = null;
          jsYuvDataY = null;
          jsYuvDataU = null;
          jsYuvDataV = null;

          jsBufY = new ArrayBuffer(m_nWidth * m_nHeight); //通过二进制对象分配一块连续内存
          jsYuvDataY = new Uint8Array(jsBufY); //二进制对象绑定到视图，通过视图对内存进行读写操作

          jsBufU = new ArrayBuffer((m_nWidth * m_nHeight) / 4);
          jsYuvDataU = new Uint8Array(jsBufU);

          jsBufV = new ArrayBuffer((m_nWidth * m_nHeight) / 4);
          jsYuvDataV = new Uint8Array(jsBufV);
        }

        var h = 0;
        //将C++层YUV解码数据Y分量数据拷贝至JS层内存中
        for (h = 0; h < stuFrameInfo.nheightStride; h++) {
          jsYuvDataY.set(
            Module.HEAPU8.subarray(
              pBufY + h * stuFrameInfo.nStride,
              pBufY + h * stuFrameInfo.nStride + stuFrameInfo.nWidth,
            ),
            h * stuFrameInfo.nWidth,
          ); //c中的内存拷贝到刚分配的js内存中
        }
        //将C++层YUV解码数据U分量数据拷贝至JS层内存中
        for (h = 0; h < stuFrameInfo.nheightStride / 2; h++) {
          jsYuvDataU.set(
            Module.HEAPU8.subarray(
              pBufU + (h * stuFrameInfo.nStride) / 2,
              pBufU + (h * stuFrameInfo.nStride) / 2 + stuFrameInfo.nWidth / 2,
            ),
            (h * stuFrameInfo.nWidth) / 2,
          ); //c中的内存拷贝到刚分配的js内存中
        }
        //将C++层YUV解码数据V分量数据拷贝至JS层内存中
        for (h = 0; h < stuFrameInfo.nheightStride / 2; h++) {
          jsYuvDataV.set(
            Module.HEAPU8.subarray(
              pBufV + (h * stuFrameInfo.nStride) / 2,
              pBufV + (h * stuFrameInfo.nStride) / 2 + stuFrameInfo.nWidth / 2,
            ),
            (h * stuFrameInfo.nWidth) / 2,
          ); //c中的内存拷贝到刚分配的js内存中
        }

        msgData = {
          pBufY: jsYuvDataY,
          pBufU: jsYuvDataU,
          pBufV: jsYuvDataV,
          nSize: nSize,
          stuFrameInfo: stuFrameInfo,
        };
      }
    } else {
      msgData = {
        pBufY: 0,
        pBufU: 0,
        pBufV: 0,
        nSize: 0,
        stuFrameInfo: stuFrameInfo,
      };
    }
  } else if (2 == stuFrameInfo.nFrameType) //音频帧
  {
    //总通道数
    stuFrameInfo.nTotalChannel = dataView.getInt32(68, true);
    //当前通道
    stuFrameInfo.nCurChannel = dataView.getInt32(72, true);
    //采样位数
    stuFrameInfo.nBits = dataView.getInt32(28, true);
    //采样率
    stuFrameInfo.nSamples = dataView.getInt32(32, true);
    //声道数
    stuFrameInfo.nAudioChnNum = dataView.getInt32(24, true);

    var AudioBuf = new ArrayBuffer(nSize);
    var UI8AudioData = new Uint8Array(AudioBuf);
    //将C++层解码后的pcm音频数据拷贝至JS层内存
    UI8AudioData.set(Module.HEAPU8.subarray(pBufY, pBufY + nSize));

    msgData = {
      pBufY: UI8AudioData,
      pBufU: 0,
      pBufV: 0,
      nSize: nSize,
      stuFrameInfo: stuFrameInfo,
    };
  }

  var msgType = "VisibleDecCallBack";

  sendMessage(nPort, msgType, msgData);

  jsBuf = null;
  jsFrameBodyData = null;
}

/*
 * C++层AES解密回调。
 *
 * @param[in] nPort 端口号
 * @param[in] nFrameID 视频帧序号
 * @param[in] bSuccess 是否解密成功
 */
function cDigitalSignCallBack(nPort, nFrameID, bSuccess) {
  m_bDecryptionResult = bSuccess;
  var msgType = "DecryptionResultCallBack";
  var msgData = {
    bSuccess: bSuccess,
  };

  sendMessage(nPort, msgType, msgData);
}

/*
 * C++层码流录制回调，回调至JS层进行数据存储
 *
 * @param[in] nPort 端口号
 * @param[in] pData 码流数据
 * @param[in] nDataLen 数据长度
 * @param[in] nOffset 偏移量
 * @param[in] pFrameInfo 码流信息
 */
function cRecordDataCallBack(nPort, pData, nDataLen, nOffset, pFrameInfo) {
  var stuFrameInfo = {};
  if (!jsRecordFrameInfo) {
    jsRecordFrameBuf = new ArrayBuffer(292); //通过二进制对象分配一块连续内存
    jsRecordFrameInfo = new Uint8Array(jsRecordFrameBuf); //二进制对象绑定到视图，通过视图对内存进行读写操作
    dataViewRecord = new DataView(jsRecordFrameBuf);
  }
  jsRecordFrameInfo.set(Module.HEAPU8.subarray(pFrameInfo, pFrameInfo + 292)); //c中的内存拷贝到刚分配的js内存中

  //帧类型
  stuFrameInfo.nFrameType = dataViewRecord.getInt32(0, true);
  //帧序号
  stuFrameInfo.nFrameID = dataViewRecord.getInt32(4, true);
  //帧子类型
  stuFrameInfo.nFrameSubType = dataViewRecord.getInt32(56, true);

  //视频帧
  if (1 == stuFrameInfo.nFrameType) {
    //编码类型
    stuFrameInfo.nEncodeType = dataViewRecord.getInt32(68, true);
    //码流类型
    stuFrameInfo.nStreamType = dataViewRecord.getInt32(72, true);

    //时间戳
    stuFrameInfo.nTimeStamp = dataViewRecord.getUint32(8, true);
    //帧时间
    stuFrameInfo.nYear = dataViewRecord.getUint16(40, true);
    stuFrameInfo.nMonth = dataViewRecord.getUint16(42, true);
    stuFrameInfo.nDay = dataViewRecord.getUint16(46, true);
    stuFrameInfo.nHour = dataViewRecord.getUint16(48, true);
    stuFrameInfo.nMinute = dataViewRecord.getUint16(50, true);
    stuFrameInfo.nSecond = dataViewRecord.getUint16(52, true);
  }

  var bufRecord = new ArrayBuffer(nDataLen);
  var arrayRecord = new Uint8Array(bufRecord);
  arrayRecord.set(Module.HEAPU8.subarray(pData, pData + nDataLen));

  var msgType = "RecordDataCallBack";
  var msgData = {
    pRecordData: arrayRecord,
    nLen: nDataLen,
    Offset: nOffset,
    stuFrameInfo: stuFrameInfo,
  };
  sendMessage(nPort, msgType, msgData);

  bufRecord = null;
  arrayRecord = null;
}

function cIVSDrawDataCallBack(nPort, pBuf, nType, nLen, nReallen) {
  //帧序号为-1时不绘制
  if (-1 == nReallen) {
    return;
  }

  var pParseredBuf = null;

  ivsBuf = new ArrayBuffer(nLen); //通过二进制对象分配一块连续内存
  ivsDataArray = new Uint8Array(ivsBuf); //二进制对象绑定到视图，通过视图对内存进行读写操作
  ivsDataArray.set(Module.HEAPU8.subarray(pBuf, pBuf + nLen));
  ivsDataView = new DataView(ivsDataArray.buffer);

  if (IVS_TYPE.IVSINFOTYPE_INTELFLOW == nType) {
    //智能客流量
    var stuIntelflowInfo = {};
    stuIntelflowInfo.NumberStat = ivsDataView.getUint16(0, true); //大类业务方案
    stuIntelflowInfo.nIntelFlowPlanNum = ivsDataView.getUint16(2, true); //智能客流规则数量(最大不会超过32个)

    var pIntelFlowPlan = ivsDataView.getUint32(4, true);
    let IntelFlowPlanBuf = new ArrayBuffer(12);
    let IntelFlowPlanArray = new Uint8Array(IntelFlowPlanBuf);
    let IntelFlowPlanView = new DataView(IntelFlowPlanBuf);

    stuIntelflowInfo.pIntelFlowPlan = new Array(stuIntelflowInfo.nIntelFlowPlanNum);
    for (let i = 0; i < stuIntelflowInfo.nIntelFlowPlanNum; i++) {
      IntelFlowPlanArray.set(
        Module.HEAPU8.subarray(pIntelFlowPlan + i * 12, pIntelFlowPlan + i * 12 + 12),
      );
      //解析智能客流规则
      stuIntelflowInfo.pIntelFlowPlan[i] = {};
      stuIntelflowInfo.pIntelFlowPlan[i].PlanId = IntelFlowPlanView.getUint16(0, true); //规则ID
      stuIntelflowInfo.pIntelFlowPlan[i].RuleType = IntelFlowPlanView.getUint16(2, true); //规则类型
      stuIntelflowInfo.pIntelFlowPlan[i].RegionNum = IntelFlowPlanView.getUint16(8, true); //区域数目
      var pRegion = IntelFlowPlanView.getUint32(4, true);
      let RegionBuf = new ArrayBuffer(12);
      let RegionArray = new Uint8Array(RegionBuf);
      let RegionView = new DataView(RegionBuf);

      stuIntelflowInfo.pIntelFlowPlan[i].pRegion = new Array(
        stuIntelflowInfo.pIntelFlowPlan[i].RegionNum,
      );
      for (let j = 0; j < stuIntelflowInfo.pIntelFlowPlan[i].RegionNum; j++) {
        RegionArray.set(Module.HEAPU8.subarray(pRegion + j * 12, pRegion + j * 12 + 12));

        stuIntelflowInfo.pIntelFlowPlan[i].pRegion[j] = {};
        stuIntelflowInfo.pIntelFlowPlan[i].pRegion[j].RegionId = RegionView.getUint16(0, true); //区域ID
        stuIntelflowInfo.pIntelFlowPlan[i].pRegion[j].State = RegionView.getUint16(2, true); //状态:离开or进入
        stuIntelflowInfo.pIntelFlowPlan[i].pRegion[j].PeopleNum = RegionView.getUint32(4, true); //人数
      }
    }

    pParseredBuf = stuIntelflowInfo;
  } else if (IVS_TYPE.IVSINFOTYPE_DHOP_SMART == nType) {
    //DHOP开放平台智能帧
    var stuObjDHOP = {};
    stuObjDHOP.nId = ivsDataView.getUint32(0, true); //对象ID
    stuObjDHOP.wCustom = ivsDataView.getUint16(4, true); //自定义值
    stuObjDHOP.chState = ivsDataView.getUint8(6, true); //对象状态
    stuObjDHOP.chCount = ivsDataView.getUint8(7, true); //元素个数

    //解析DHOP元素
    var pElement = ivsDataView.getUint32(8, true);
    let elementBuf = new ArrayBuffer(12);
    let elementDataArray = new Uint8Array(elementBuf);
    let elementDataView = new DataView(elementBuf);

    stuObjDHOP.pElement = new Array(stuObjDHOP.chCount);
    for (var i = 0; i < stuObjDHOP.chCount; i++) {
      elementDataArray.set(Module.HEAPU8.subarray(pElement + i * 12, pElement + i * 12 + 12));
      //解析DHOP元素类型
      stuObjDHOP.pElement[i] = {};
      stuObjDHOP.pElement[i].nStructType = elementDataView.getUint32(0, true);
      stuObjDHOP.pElement[i].nStructLength = elementDataView.getUint32(4, true);
      var pStruct = elementDataView.getUint32(8, true);

      var nBufLength = stuObjDHOP.pElement[i].nStructLength;
      if (IVS_DHOP_ElEMENT_TYPE.EM_DHOP_TEXT === stuObjDHOP.pElement[i].nStructType) {
        nBufLength = 20;
      }

      let structBuf = new ArrayBuffer(nBufLength);
      let structArray = new Uint8Array(structBuf);
      let structDataView = new DataView(structBuf);
      structArray.set(Module.HEAPU8.subarray(pStruct, pStruct + nBufLength));

      stuObjDHOP.pElement[i].pStruct = {};
      if (IVS_DHOP_ElEMENT_TYPE.EM_DHOP_CIRCLE == stuObjDHOP.pElement[i].nStructType) {
        stuObjDHOP.pElement[i].pStruct.chType = structDataView.getUint8(0, true); //子类型0x3
        stuObjDHOP.pElement[i].pStruct.chWidth = structDataView.getUint8(1, true); //线宽，单位px
        stuObjDHOP.pElement[i].pStruct.chStyle = structDataView.getUint8(2, true); //样式

        stuObjDHOP.pElement[i].pStruct.wRadius = structDataView.getUint16(4, true); //半径
        stuObjDHOP.pElement[i].pStruct.positionCircle = {}; //圆心坐标
        stuObjDHOP.pElement[i].pStruct.positionCircle.x = structDataView.getUint16(8, true);
        stuObjDHOP.pElement[i].pStruct.positionCircle.y = structDataView.getUint16(10, true);

        stuObjDHOP.pElement[i].pStruct.chLineA = structDataView.getUint8(12, true); //边框线条颜色(ARGB)
        stuObjDHOP.pElement[i].pStruct.chLineR = structDataView.getUint8(13, true);
        stuObjDHOP.pElement[i].pStruct.chLineG = structDataView.getUint8(14, true);
        stuObjDHOP.pElement[i].pStruct.chLineB = structDataView.getUint8(15, true);
        stuObjDHOP.pElement[i].pStruct.chRegA = structDataView.getUint8(16, true); //区域填充颜色(ARGB)
        stuObjDHOP.pElement[i].pStruct.chRegR = structDataView.getUint8(17, true);
        stuObjDHOP.pElement[i].pStruct.chRegG = structDataView.getUint8(18, true);
        stuObjDHOP.pElement[i].pStruct.chRegB = structDataView.getUint8(19, true);
      } else if (IVS_DHOP_ElEMENT_TYPE.EM_DHOP_BrokenLine == stuObjDHOP.pElement[i].nStructType) {
        stuObjDHOP.pElement[i].pStruct.chType = structDataView.getUint8(0, true); //子类型0x2
        stuObjDHOP.pElement[i].pStruct.chCount = structDataView.getUint8(1, true); //端点个数
        stuObjDHOP.pElement[i].pStruct.chWidth = structDataView.getUint8(2, true); //线宽，单位px
        stuObjDHOP.pElement[i].pStruct.chStyle = structDataView.getUint8(3, true); //样式
        stuObjDHOP.pElement[i].pStruct.chLineA = structDataView.getUint8(4, true); //边框线条颜色(ARGB)
        stuObjDHOP.pElement[i].pStruct.chLineR = structDataView.getUint8(5, true);
        stuObjDHOP.pElement[i].pStruct.chLineG = structDataView.getUint8(6, true);
        stuObjDHOP.pElement[i].pStruct.chLineB = structDataView.getUint8(7, true);
        //端点坐标
        var pPoints = null;
        let pointsBuf = null;
        let pointsDataArray = null;
        let pointsDataView = null;

        if (stuObjDHOP.pElement[i].pStruct.chCount > 0) {
          stuObjDHOP.pElement[i].pStruct.pPoints = new Array(
            stuObjDHOP.pElement[i].pStruct.chCount,
          );
          pPoints = structDataView.getUint32(8, true);
          pointsBuf = new ArrayBuffer(4);
          pointsDataArray = new Uint8Array(pointsBuf);
          pointsDataView = new DataView(pointsBuf);
        }

        for (var j = 0; j < stuObjDHOP.pElement[i].pStruct.chCount; j++) {
          pointsDataArray.set(Module.HEAPU8.subarray(pPoints + j * 4, pPoints + j * 4 + 4));
          stuObjDHOP.pElement[i].pStruct.pPoints[j] = {};
          stuObjDHOP.pElement[i].pStruct.pPoints[j].x = pointsDataView.getUint16(0, true);
          stuObjDHOP.pElement[i].pStruct.pPoints[j].y = pointsDataView.getUint16(2, true);
        }
      } else if (IVS_DHOP_ElEMENT_TYPE.EM_DHOP_POLYGON == stuObjDHOP.pElement[i].nStructType) {
        stuObjDHOP.pElement[i].pStruct.chType = structDataView.getUint8(0, true); //子类型0x3
        stuObjDHOP.pElement[i].pStruct.chCount = structDataView.getUint8(1, true); //端点个数
        stuObjDHOP.pElement[i].pStruct.chWidth = structDataView.getUint8(2, true); //线宽，单位px
        stuObjDHOP.pElement[i].pStruct.chStyle = structDataView.getUint8(3, true); //样式
        stuObjDHOP.pElement[i].pStruct.chLineA = structDataView.getUint8(4, true); //边框线条颜色(ARGB)
        stuObjDHOP.pElement[i].pStruct.chLineR = structDataView.getUint8(5, true);
        stuObjDHOP.pElement[i].pStruct.chLineG = structDataView.getUint8(6, true);
        stuObjDHOP.pElement[i].pStruct.chLineB = structDataView.getUint8(7, true);
        stuObjDHOP.pElement[i].pStruct.chRegA = structDataView.getUint8(8, true); //区域填充颜色(ARGB)
        stuObjDHOP.pElement[i].pStruct.chRegR = structDataView.getUint8(9, true);
        stuObjDHOP.pElement[i].pStruct.chRegG = structDataView.getUint8(10, true);
        stuObjDHOP.pElement[i].pStruct.chRegB = structDataView.getUint8(11, true);
        //端点坐标
        var pPoints = null;
        let pointsBuf = null;
        let pointsDataArray = null;
        let pointsDataView = null;

        if (stuObjDHOP.pElement[i].pStruct.chCount > 0) {
          stuObjDHOP.pElement[i].pStruct.pPoints = new Array(
            stuObjDHOP.pElement[i].pStruct.chCount,
          );
          pPoints = structDataView.getUint32(12, true);
          pointsBuf = new ArrayBuffer(4);
          pointsDataArray = new Uint8Array(pointsBuf);
          pointsDataView = new DataView(pointsBuf);
        }

        for (var j = 0; j < stuObjDHOP.pElement[i].pStruct.chCount; j++) {
          pointsDataArray.set(Module.HEAPU8.subarray(pPoints + j * 4, pPoints + j * 4 + 4));
          stuObjDHOP.pElement[i].pStruct.pPoints[j] = {};
          stuObjDHOP.pElement[i].pStruct.pPoints[j].x = pointsDataView.getUint16(0, true);
          stuObjDHOP.pElement[i].pStruct.pPoints[j].y = pointsDataView.getUint16(2, true);
        }
      } else if (IVS_DHOP_ElEMENT_TYPE.EM_DHOP_TEXT == stuObjDHOP.pElement[i].nStructType) {
        stuObjDHOP.pElement[i].pStruct.chType = structDataView.getUint8(0, true); //子类型0x4
        stuObjDHOP.pElement[i].pStruct.chCharset = structDataView.getUint8(1, true); //编码方式
        stuObjDHOP.pElement[i].pStruct.stringPos = {}; //字符坐标
        stuObjDHOP.pElement[i].pStruct.stringPos.x = structDataView.getUint16(4, true);
        stuObjDHOP.pElement[i].pStruct.stringPos.y = structDataView.getUint16(6, true);
        stuObjDHOP.pElement[i].pStruct.chLineA = structDataView.getUint8(8, true); //字体颜色(ARGB)
        stuObjDHOP.pElement[i].pStruct.chLineR = structDataView.getUint8(9, true);
        stuObjDHOP.pElement[i].pStruct.chLineG = structDataView.getUint8(10, true);
        stuObjDHOP.pElement[i].pStruct.chLineB = structDataView.getUint8(11, true);
        stuObjDHOP.pElement[i].pStruct.chFontSize = structDataView.getUint8(12, true); //字体大小，单位px
        stuObjDHOP.pElement[i].pStruct.chFontAlign = structDataView.getUint8(13, true); //对齐方式
        stuObjDHOP.pElement[i].pStruct.wTxtLen = structDataView.getUint16(14, true); //字符长度

        if (stuObjDHOP.pElement[i].pStruct.wTxtLen > 0) {
          var pString = structDataView.getUint32(16, true);
          var stringBuf = new ArrayBuffer(stuObjDHOP.pElement[i].pStruct.wTxtLen);
          var stringDataArray = new Uint8Array(stringBuf);
          var stringDataView = new DataView(stringBuf);
          stringDataArray.set(
            Module.HEAPU8.subarray(pString, pString + stuObjDHOP.pElement[i].pStruct.wTxtLen),
          );
          stuObjDHOP.pElement[i].pStruct.stringDataArray = stringDataArray;
        }
      }
    }

    //解析DHOP信息内容
    stuObjDHOP.nInfoLen = ivsDataView.getUint16(12, true); //信息长度
    if (stuObjDHOP.nInfoLen > 0) {
      var pInfo = ivsDataView.getUint32(16, true);
      let infoBuf = new ArrayBuffer(stuObjDHOP.nInfoLen);
      let infoDataArray = new Uint8Array(infoBuf);
      infoDataArray.set(Module.HEAPU8.subarray(pInfo, pInfo + stuObjDHOP.nInfoLen));
      stuObjDHOP.pInfo = infoDataArray;
    }

    pParseredBuf = stuObjDHOP;
  } else if (IVS_TYPE.IVSINFOTYPE_TAGGING_INFO == nType) //景物点信息标注帧
  {
    let dataView = new DataView(ivsBuf);

    let tagInfoNum = nLen / FRAME_SCENE_POINTS_INFOR_SIZE;

    let tagInfos = [];
    for (let tagInfoIndex = 0; tagInfoIndex < tagInfoNum; tagInfoIndex++) {
      var tagInfo = {};
      let Stride = FRAME_SCENE_POINTS_INFOR_SIZE * tagInfoIndex;
      //编号
      tagInfo.nIndex = dataView.getInt32(Stride + 0, true);
      //景物点x坐标
      tagInfo.xPoint = dataView.getUint16(Stride + 4, true);
      //景物点y坐标
      tagInfo.yPoint = dataView.getUint16(Stride + 6, true);

      //一级名称
      var jsNameBuf = new ArrayBuffer(64);
      jsNameBuf = ivsBuf.slice(Stride + 8);
      tagInfo.strName = ArrayBufferToStringAutoClip(jsNameBuf);

      //使能标记
      tagInfo.enable = dataView.getInt8(Stride + 72, true);
      //标签类型
      tagInfo.titleType = dataView.getInt8(Stride + 73, true);
      //标签属性
      tagInfo.titleAttribute = dataView.getInt8(Stride + 74, true);
      tagInfo.sharpType = dataView.getInt8(Stride + 75, true);
      tagInfo.polygonNum = dataView.getInt8(Stride + 76, true);
      tagInfo.polygon = [];
      //与上一个中间空了三字节
      for (let i = 0; i < tagInfo.polygonNum * 2; i += 2) {
        tagInfo.polygon[i] = {
          x: dataView.getInt8(Stride + 79 + 2 * i, true),
          y: dataView.getInt8(Stride + 79 + 2 * (i + 1), true),
        };
      }

      tagInfos[tagInfoIndex] = tagInfo;
      jsNameBuf = null;
    }

    var msgType = "ARTagInfoCallback";
    var msgData = {
      tagInfo: tagInfos,
    };

    sendMessage(nPort, msgType, msgData);

    pParseredBuf = tagInfos;
    dataView = null;
  } else if (IVS_TYPE.IVSINFOTYPE_GPS_INFO == nType) //GPS信息帧
  {
    let nUtcLen = nLen == 136 ? 8 : 4; //协议中utc类型为ulong
    let ivsGPSBuf = new ArrayBuffer(nLen - nUtcLen); //通过二进制对象分配一块连续内存
    let ivsGPSDataArray = new Uint8Array(ivsGPSBuf); //二进制对象绑定到视图，通过视图对内存进行读写操作
    ivsGPSDataArray.set(Module.HEAPU8.subarray(pBuf + nUtcLen, pBuf + nLen));
    let ivsGPSDataView = new DataView(ivsGPSDataArray.buffer);

    let GPSInfos = [];
    GPSInfos.longitude = ivsGPSDataView.getInt32(0, true) / 1000.0 / 3600.0;
    GPSInfos.latitude = ivsGPSDataView.getInt32(4, true) / 1000.0 / 3600.0;
    GPSInfos.yaw = ivsGPSDataView.getFloat32(20, true);
    GPSInfos.pitch = ivsGPSDataView.getFloat32(24, true);
    GPSInfos.roll = ivsGPSDataView.getFloat32(28, true);
    GPSInfos.absoluteAltitude = ivsGPSDataView.getFloat32(32, true);
    GPSInfos.zoom = ivsGPSDataView.getFloat32(36, true);

    var msgType = "GPSInfoCallback";
    var msgData = {
      GPSInfos: GPSInfos,
    };

    sendMessage(nPort, msgType, msgData);
    ivsGPSDataView = null;

    pParseredBuf = GPSInfos;
  } else {
    pParseredBuf = ivsDataArray;
  }

  var msgType = "IVSDataCallBack";
  var msgData = {
    pBuf: pParseredBuf,
    nType: nType,
    nLen: nLen,
    nReallen: nReallen,
  };

  sendMessage(nPort, msgType, msgData);
}

function cDemuxDecCBFun(nPort, pBuf, nSize, pMutexInfo) {
  var stuDemuxInfo = {};
  if (!m_uintDemuxInfo) {
    m_arrayDemuxBuf = new ArrayBuffer(72); //通过二进制对象分配一块连续内存
    m_uintDemuxInfo = new Uint8Array(m_arrayDemuxBuf); //二进制对象绑定到视图，通过视图对内存进行读写操作
    m_dvDemuxInfo = new DataView(m_arrayDemuxBuf);
  }
  m_uintDemuxInfo.set(Module.HEAPU8.subarray(pMutexInfo, pMutexInfo + 72)); //c中的内存拷贝到刚分配的js内存中
  //帧类型
  stuDemuxInfo.nFrameType = m_dvDemuxInfo.getInt32(0, true);
  //帧子类型
  stuDemuxInfo.nFrameSubType = m_dvDemuxInfo.getInt32(4, true);
  //编码类型
  stuDemuxInfo.nEncodeType = m_dvDemuxInfo.getInt32(8, true);
  //帧序号
  stuDemuxInfo.nFrameID = m_dvDemuxInfo.getInt32(12, true);
  //图像宽度
  stuDemuxInfo.nWidth = m_dvDemuxInfo.getInt32(16, true);
  //图像高度
  stuDemuxInfo.nHeight = m_dvDemuxInfo.getInt32(20, true);
  //视频帧率
  stuDemuxInfo.nFrameRate = m_dvDemuxInfo.getInt32(24, true);
  //帧时间
  stuDemuxInfo.nYear = m_dvDemuxInfo.getUint16(28, true);
  stuDemuxInfo.nMonth = m_dvDemuxInfo.getUint16(32, true);
  stuDemuxInfo.nDay = m_dvDemuxInfo.getUint16(36, true);
  stuDemuxInfo.nHour = m_dvDemuxInfo.getUint16(40, true);
  stuDemuxInfo.nMinute = m_dvDemuxInfo.getUint16(44, true);
  stuDemuxInfo.nSecond = m_dvDemuxInfo.getUint16(48, true);
  //时间戳
  stuDemuxInfo.nTimeStamp = m_dvDemuxInfo.getUint32(52, true);
  //总通道数
  stuDemuxInfo.nTotalChannel = m_dvDemuxInfo.getInt32(56, true);
  //采样深度
  stuDemuxInfo.nBits = m_dvDemuxInfo.getInt32(60, true);
  //采样率
  stuDemuxInfo.nSamples = m_dvDemuxInfo.getInt32(64, true);
  //绝对时间毫秒
  stuDemuxInfo.nMillisecond = m_dvDemuxInfo.getInt32(68, true);

  var msgType = "DemuxdataCallBack";
  var msgData = {
    pBuf: pBuf,
    nSize: nSize,
    pMutexInfo: stuDemuxInfo,
  };

  sendMessage(nPort, msgType, msgData);
}

function sendMessage(nPort, msgType, msgData) {
  var event = {
    nPort: nPort,
    msgType: msgType,
    msgData: msgData,
  };

  postMessage(event);
}

function ArrayBufferToString(buffer, encoding = "utf-8") {
  const decoder = new TextDecoder(encoding);
  return decoder.decode(buffer);
}

function ArrayBufferToStringAutoClip(buffer, encoding = "utf-8") {
  const decoder = new TextDecoder(encoding);
  const uint8Array = new Uint8Array(buffer);

  let i = 0;

  while (i < uint8Array.length) {
    if (uint8Array[i] === 0) {
      break;
    }
    i++;
  }

  return decoder.decode(buffer.slice(0, i));
}

function UTF16ToUTF8(UTF16Str) {
  var UTF8Arr = [];
  var byteSize = 0;
  for (var i = 0; i < UTF16Str.length; i++) {
    //获取字符Unicode码值
    var code = UTF16Str.charCodeAt(i);

    //如果码值是1个字节的范围，则直接写入
    if (code >= 0x00 && code <= 0x7f) {
      byteSize += 1;
      UTF8Arr.push(code);

      //如果码值是2个字节以上的范围，则按规则进行填充补码转换
    } else if (code >= 0x80 && code <= 0x7ff) {
      byteSize += 2;
      UTF8Arr.push(192 | (31 & (code >> 6)));
      UTF8Arr.push(128 | (63 & code));
    } else if ((code >= 0x800 && code <= 0xd7ff) || (code >= 0xe000 && code <= 0xffff)) {
      byteSize += 3;
      UTF8Arr.push(224 | (15 & (code >> 12)));
      UTF8Arr.push(128 | (63 & (code >> 6)));
      UTF8Arr.push(128 | (63 & code));
    } else if (code >= 0x10000 && code <= 0x10ffff) {
      byteSize += 4;
      UTF8Arr.push(240 | (7 & (code >> 18)));
      UTF8Arr.push(128 | (63 & (code >> 12)));
      UTF8Arr.push(128 | (63 & (code >> 6)));
      UTF8Arr.push(128 | (63 & code));
    }
  }

  return UTF8Arr;
}

async function catchPicWithWaterMask(pOutJpegBufArr, waterMaskBitmap) {
  var blob = new Blob([pOutJpegBufArr.buffer], { type: "image/jpg" });
  var imageBitmap = await createImageBitmap(blob);

  var offscreenCanvas = new OffscreenCanvas(m_nWidth, m_nHeight);

  const ctx = offscreenCanvas.getContext("2d");
  // 清空画布
  ctx.clearRect(0, 0, m_nWidth, m_nHeight);
  //绘制视频画面
  ctx.drawImage(imageBitmap, 0, 0, m_nWidth, m_nHeight);
  //绘制水印画面
  ctx.drawImage(waterMaskBitmap, 0, 0, m_nWidth, m_nHeight);
  imageBitmap.close(); // 释放ImageBitmap内存
  waterMaskBitmap.close();
  var finalblob = await offscreenCanvas.convertToBlob({ type: "image/jpeg" });
  const reader = new FileReader();
  reader.onload = function (e) {
    const arrayBuffer = e.target.result;
    const uint8Array = new Uint8Array(arrayBuffer); // 转换为 Uint8Array
    var msgType = "CatchPicCallBack";
    var msgData = {
      buffer: uint8Array,
    };
    sendMessage(m_nPlayPort, msgType, msgData);
  };
  reader.onerror = function (err) {
    console.error("Blob To Uint8Array failed:", err);
  };
  reader.readAsArrayBuffer(finalblob);
  blob = null;
}

// Worker中定义EPTZ相关常量
const FISHEYE_POINT_CHAIN_COUNT = 160;
const FISHEYE_EPTZCMD = {
  FISHEYEEPTZ_CMD_GET_CUR_REGION: 0x21,
};

// Worker中分配EPTZ参数内存
function allocFisheyeEptzParams(eptzParams) {
  if (!eptzParams) {
    return 0;
  }
  // FISHEYE_EPTZPARAM 结构体大小: 96 bytes
  var eptzParamsPtr = Module._malloc(96);
  var heap32 = Module.HEAP32;
  var base32 = eptzParamsPtr >> 2;

  heap32[base32 + 0] = eptzParams.ePtzCmd || 0;
  heap32[base32 + 1] = eptzParams.winId || 0;
  heap32[base32 + 2] = eptzParams.arg1 || 0;
  heap32[base32 + 3] = eptzParams.arg2 || 0;
  heap32[base32 + 4] = eptzParams.arg3 || 0;
  heap32[base32 + 5] = eptzParams.arg4 || 0;
  heap32[base32 + 6] = eptzParams.arg5 || 0;
  heap32[base32 + 7] = eptzParams.arg6 || 0;

  var reserved0 = eptzParams.reserved0 || [0, 0, 0, 0, 0, 0];
  heap32[base32 + 8] = reserved0[0] || 0;
  heap32[base32 + 9] = reserved0[1] || 0;
  heap32[base32 + 10] = reserved0[2] || 0;
  heap32[base32 + 11] = reserved0[3] || 0;
  heap32[base32 + 12] = reserved0[4] || 0;
  heap32[base32 + 13] = reserved0[5] || 0;

  heap32[base32 + 14] = eptzParams.pParam || 0;
  heap32[base32 + 15] = eptzParams.pResult || 0;
  heap32[base32 + 16] = eptzParams.pArg || 0;

  var reserved1 = eptzParams.reserved1 || [0, 0, 0, 0, 0, 0, 0];
  heap32[base32 + 17] = reserved1[0] || 0;
  heap32[base32 + 18] = reserved1[1] || 0;
  heap32[base32 + 19] = reserved1[2] || 0;
  heap32[base32 + 20] = reserved1[3] || 0;
  heap32[base32 + 21] = reserved1[4] || 0;
  heap32[base32 + 22] = reserved1[5] || 0;
  heap32[base32 + 23] = reserved1[6] || 0;

  return eptzParamsPtr;
}

// Worker中读取EPTZ参数
function readFisheyeEptzParams(eptzParamsPtr) {
  if (!eptzParamsPtr) {
    return null;
  }

  var heap32 = Module.HEAP32;
  var base32 = eptzParamsPtr >> 2;

  var eptzParams = {
    ePtzCmd: heap32[base32 + 0],
    winId: heap32[base32 + 1],
    arg1: heap32[base32 + 2],
    arg2: heap32[base32 + 3],
    arg3: heap32[base32 + 4],
    arg4: heap32[base32 + 5],
    arg5: heap32[base32 + 6],
    arg6: heap32[base32 + 7],
    reserved0: [
      heap32[base32 + 8],
      heap32[base32 + 9],
      heap32[base32 + 10],
      heap32[base32 + 11],
      heap32[base32 + 12],
      heap32[base32 + 13],
    ],
    pParam: heap32[base32 + 14],
    pResult: heap32[base32 + 15],
    pArg: heap32[base32 + 16],
    reserved1: [
      heap32[base32 + 17],
      heap32[base32 + 18],
      heap32[base32 + 19],
      heap32[base32 + 20],
      heap32[base32 + 21],
      heap32[base32 + 22],
      heap32[base32 + 23],
    ],
  };

  return eptzParams;
}

function fetchFishEyeRegionPoints(winId, subRegionFlag) {
  if (m_nPlayPort <= 0 || !Module || !Module._PLAY_FisheyeEptzUpdate) {
    return [];
  }
  // 共 160 * 2 个元素
  var pointCount = FISHEYE_POINT_CHAIN_COUNT * 2;
  var pointBufSize = pointCount * 2;

  var eptzParam = {
    ePtzCmd: FISHEYE_EPTZCMD.FISHEYEEPTZ_CMD_GET_CUR_REGION,
    winId: winId || 0,
    arg1: subRegionFlag || 0,
    arg2: 0,
    arg3: 0,
    arg4: 0,
    arg5: 0,
    arg6: 0,
    reserved0: [0, 0, 0, 0, 0, 0],
    pParam: 0,
    pResult: 0,
    pArg: 0,
    reserved1: [0, 0, 0, 0, 0, 0, 0],
  };
  var eptzPtr = allocFisheyeEptzParams(eptzParam);
  var points = [];
  var pointBufPtr = 0;

  if (eptzPtr) {
    var nRet = Module._PLAY_FisheyeEptzUpdate(m_nPlayPort, eptzPtr, 0);
    if (nRet) {
      var eptzParams = readFisheyeEptzParams(eptzPtr);
      if (eptzParams) {
        if (winId && winId > 0) {
          m_feArg4[winId] = eptzParams.arg4 || 0;
          m_feArg5[winId] = eptzParams.arg5 || 0;
        }

        pointBufPtr = eptzParams.pArg;

        if (pointBufPtr && pointBufPtr !== 0) {
          var copiedBuf = new ArrayBuffer(pointBufSize);
          var copiedU8 = new Uint8Array(copiedBuf);
          copiedU8.set(Module.HEAPU8.subarray(pointBufPtr, pointBufPtr + pointBufSize));
          var dataView = new DataView(copiedBuf);
          for (var i = 0; i < pointCount; i += 2) {
            var px = dataView.getInt16(i * 2, true);
            var py = dataView.getInt16((i + 1) * 2, true);
            if (px < 0 || py < 0) {
              continue;
            }
            points.push({ x: px, y: py });
          }
        }
      }
    }
    Module._free(eptzPtr);
  }
  return points;
}

// Worker中实现鱼眼云台更新
function FisheyeEptzUpdate(eptzParams) {
  if (m_nPlayPort <= 0 || !Module || !Module._PLAY_FisheyeEptzUpdate) {
    return;
  }

  if (!eptzParams) {
    return;
  }

  // 分配EPTZ参数内存并调用接口
  var eptzParamsPtr = allocFisheyeEptzParams(eptzParams);
  if (eptzParamsPtr !== 0) {
    var nRet = Module._PLAY_FisheyeEptzUpdate(m_nPlayPort, eptzParamsPtr, 0);
    if (nRet) {
      var eptzParams = readFisheyeEptzParams(eptzParamsPtr);
      if (eptzParams && eptzParams.arg3 === 1) {
        Module._free(eptzParamsPtr);
        m_feArg3 = 1; // 在子窗口i的点链内
        return;
      }
    }

    Module._free(eptzParamsPtr);
  }
}
