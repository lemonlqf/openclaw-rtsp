!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
        ? (exports.PlaySDKInterface = t())
        : (e.PlaySDKInterface = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return (e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports);
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        ("undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o),
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return (n.d(t, "a", t), t);
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 0))
    );
  })([
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a,
                i,
                l = [],
                u = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (; !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
              } catch (e) {
                ((s = !0), (o = e));
              } finally {
                try {
                  if (!u && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                } finally {
                  if (s) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return o(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? o(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var a;
      n.r(t);
      function i() {
        return (a = window.SCModule)._RTSP_InitSession();
      }
      function l(e, t, n, r, o) {
        return a._RTSP_PlayControl(e, t, n, r, o);
      }
      function u(e, t, n, r) {
        return a._RTSP_PutStream(e, t, n, r);
      }
      function s() {
        return (a = window.SCModule)._RTSV_InitSession();
      }
      function c(e, t, n, r, o) {
        return a._RTSV_PlayControl(e, t, n, r, o);
      }
      function f(e, t, n, r) {
        return a._RTSV_PutStream(e, t, n, r);
      }
      var d = function () {
          var e = null,
            t = 0,
            n = !1,
            o = null,
            d = null,
            p = null,
            m = null,
            h = null;
          function g() {}
          return (
            (g.prototype = {
              SetLogLevel: function (e) {
                var t;
                ((t = e),
                  void 0 !== window.SCModule && (a = window.SCModule)._GLOBAL_SetLogLevel(t));
              },
              StartStream: function (r, u) {
                if (
                  (null == r.strDeviceID && (r.strDeviceID = 0),
                  void 0 === r.bStandardPack && (r.bStandardPack = !1),
                  0 == (t = u))
                ) {
                  if ((null === e && (e = i()), void 0 !== r.nStartNpt)) {
                    var f = 1;
                    1 === r.nDirection && (f = -1);
                    var h = -1;
                    (void 0 !== r.nEndNpt && (h = r.nEndNpt), l(e, r.nStartNpt, h, f, !1));
                  }
                  !(function (e, t, n, r, o, i) {
                    var l = a.intArrayFromString(t).concat(0),
                      u = a._malloc(l.length);
                    a.HEAPU8.set(l, u);
                    var s = a.intArrayFromString(n).concat(0),
                      c = a._malloc(s.length);
                    a.HEAPU8.set(s, c);
                    var f = a.intArrayFromString(r).concat(0),
                      d = a._malloc(f.length);
                    a.HEAPU8.set(f, d);
                    var p = a._RTSP_StartStream(e, u, c, d, o, i);
                    (a._free(u), a._free(c), a._free(d));
                  })(
                    e,
                    r.strRtspvUrl,
                    r.strRtspvUri,
                    r.strDeviceID,
                    r.bTalkService,
                    r.bStandardPack,
                  );
                } else
                  1 == t
                    ? ((null != r.nAudioType && null != r.nFrequency && null != r.nChannelNum) ||
                        ((r.nAudioType = 14), (r.nFrequency = 8e3), (r.nChannelNum = 1)),
                      null === e && (e = s()),
                      void 0 !== r.nStartNpt && c(e, r.nStartNpt, -1, 1, !1),
                      (function (e, t, n, r, o, i, l, u, s, c, f) {
                        var d = a.intArrayFromString(t).concat(0),
                          p = a._malloc(d.length);
                        a.HEAPU8.set(d, p);
                        var m = a.intArrayFromString(n).concat(0),
                          h = a._malloc(m.length);
                        a.HEAPU8.set(m, h);
                        var g = a.intArrayFromString(r).concat(0),
                          y = a._malloc(g.length);
                        if ((a.HEAPU8.set(g, y), o && a._RTSV_InitTalkInfo(e, i, l, u), s)) {
                          var _ = a.intArrayFromString(c).concat(0),
                            v = a._malloc(_.length);
                          a.HEAPU8.set(_, v);
                          var S = a.intArrayFromString(f).concat(0),
                            P = a._malloc(S.length);
                          (a.HEAPU8.set(S, P),
                            a._RTSV_SetWSSEInfo(e, s, v, P),
                            a._free(v),
                            a._free(P));
                        }
                        var b = a._RTSV_StartStream(e, p, h, y);
                        (a._free(p), a._free(h), a._free(y));
                      })(
                        e,
                        r.strRtspvUrl,
                        r.strRtspvUri,
                        r.strDeviceID,
                        r.bTalkService,
                        r.nAudioType,
                        r.nFrequency,
                        r.nChannelNum,
                        !1,
                        null,
                        null,
                      ))
                    : 2 == t &&
                      e &&
                      (function (e, t, n) {
                        var r = a.intArrayFromString(t).concat(0),
                          o = a._malloc(r.length);
                        a.HEAPU8.set(r, o);
                        var i = a._VNSP_StartStream(e, o, n);
                        a._free(o);
                      })(e, r.strRtspvUri, r.nStreamType);
                return (
                  (n = r.bTalkService) &&
                    ((o = a._malloc(10240)),
                    (d = new Uint8Array(a.HEAPU8.buffer, o, 10240)),
                    (p = a._malloc(1048576)),
                    (m = new Uint8Array(a.HEAPU8.buffer, p, 1048576))),
                  e
                );
              },
              SetLoginParam: function (t) {
                return (
                  (function (e, t, n, r, o, i) {
                    var l = a.intArrayFromString(n).concat(0),
                      u = a._malloc(l.length);
                    a.HEAPU8.set(l, u);
                    var s = a.intArrayFromString(r).concat(0),
                      c = a._malloc(s.length);
                    a.HEAPU8.set(s, c);
                    var f = a.intArrayFromString(o).concat(0),
                      d = a._malloc(f.length);
                    a.HEAPU8.set(f, d);
                    var p = a.intArrayFromString(i).concat(0),
                      m = a._malloc(p.length);
                    a.HEAPU8.set(p, m);
                    var h = a._VNSP_SetLoginParam(e, t, u, c, d, m);
                    (a._free(u), a._free(c), a._free(d), a._free(m));
                  })(
                    (e = (a = window.SCModule)._VNSP_InitSession()),
                    t.playerType,
                    t.deviceId,
                    t.vnspType,
                    t.clientMac,
                    t.vnspVersion,
                  ),
                  e
                );
              },
              StopStream: function () {
                var r;
                (0 == t
                  ? ((r = e), a._RTSP_StopStream(r))
                  : 1 == t
                    ? (function (e) {
                        a._RTSV_StopStream(e);
                      })(e)
                    : 2 == t &&
                      (function (e) {
                        a._VNSP_StopStream(e);
                      })(e),
                  (e = null),
                  n && ((d = null), a._free(o), (m = null), a._free(p)));
              },
              PauseStream: function (n) {
                var r;
                n
                  ? 0 == t
                    ? ((r = e), a._RTSP_PauseStream(r))
                    : 1 == t
                      ? (function (e) {
                          a._RTSV_PauseStream(e);
                        })(e)
                      : 2 == t &&
                        (function (e) {
                          a._VNSP_PauseStream(e);
                        })(e)
                  : 0 == t
                    ? (function (e) {
                        a._RTSP_ResumeStream(e);
                      })(e)
                    : 1 == t
                      ? (function (e) {
                          a._RTSV_ResumeStream(e);
                        })(e)
                      : 2 == t &&
                        (function (e) {
                          a._VNSP_ResumeStream(e);
                        })(e);
              },
              PlayControl: function (n, r, o, i, u) {
                var s, f;
                (void 0 === i && (i = -1),
                  0 == t
                    ? l(e, n, r, o, u)
                    : 1 == t
                      ? c(e, n, r, o, u)
                      : 2 == t &&
                        (-1 == n
                          ? ((s = e), (f = o), a._VNSP_FastPlay(s, f))
                          : (function (e, t, n, r) {
                              var o = a.intArrayFromString(n).concat(0),
                                i = a._malloc(o.length);
                              a.HEAPU8.set(o, i);
                              var l = a.intArrayFromString(r).concat(0),
                                u = a._malloc(l.length);
                              a.HEAPU8.set(l, u);
                              var s = a._VNSP_SetPlayRange(e, t, i, u);
                              (a._free(i), a._free(u));
                            })(e, i, n, r)));
              },
              PlayControlUtc: function (n, r, o, i, l) {
                (void 0 === i && (i = -1),
                  0 == t &&
                    (function (e, t, n, r, o) {
                      var i = a.intArrayFromString(t).concat(0),
                        l = a._malloc(i.length);
                      a.HEAPU8.set(i, l);
                      var u = a.intArrayFromString(n).concat(0),
                        s = a._malloc(u.length);
                      a.HEAPU8.set(u, s);
                      var c = a._RTSP_PlayControlUtc(e, l, s, r, o);
                      (a._free(l), a._free(s));
                    })(e, n, r, o, l));
              },
              PutStream: function (n, r) {
                if (null != d) {
                  var o = n.subarray(6);
                  if (5 == r)
                    (d.set(o),
                      0 == t
                        ? u(e, d.byteOffset, o.length, r)
                        : 1 == t
                          ? f(e, d.byteOffset, o.length, r)
                          : 2 == t &&
                            (function (e, t, n) {
                              a._VNSP_PutStream(e, t, n);
                            })(e, d.byteOffset, o.length));
                  else {
                    if (o.length > 1048576)
                      return void console.warn(
                        "StreamClient buffer not enough, DataLen:" + o.length,
                      );
                    (m.set(o),
                      0 == t
                        ? u(e, m.byteOffset, o.length, r)
                        : 1 == t && f(e, m.byteOffset, o.length, r));
                  }
                }
              },
              GetPlayInfo: function () {
                var n = 0;
                if (0 == t) {
                  var o = r(
                      (function (e) {
                        var t = a._malloc(8),
                          n = a._malloc(8);
                        a._RTSP_GetPlayInfo(e, t, n);
                        var r = a.HEAPF64[t >> 3],
                          o = a.HEAPF64[n >> 3];
                        return (a._free(t), a._free(n), [r, o]);
                      })(e),
                      2,
                    ),
                    i = o[0];
                  n = o[1] - i;
                }
                return n;
              },
              SetMsgWaitTimeout: function (n) {
                0 == t
                  ? (function (e, t) {
                      a._RTSP_SetMsgTimeout(e, t);
                    })(e, n)
                  : 1 == t &&
                    (function (e, t) {
                      a._RTSV_SetMsgTimeout(e, t);
                    })(e, n);
              },
              SetStreamTimeout: function (n) {
                0 == t &&
                  (function (e, t) {
                    a._RTSP_SetStreamTimeout(e, t);
                  })(e, n);
              },
              SetOriginalKey: function (t, n, r, o, l, u) {
                return 0 == l
                  ? (null === e && (e = i()),
                    (function (e, t, n, r, o, i) {
                      var l = a.intArrayFromString(n).concat(0),
                        u = a._malloc(l.length);
                      a.HEAPU8.set(l, u);
                      var s = a.intArrayFromString(r).concat(0),
                        c = a._malloc(s.length);
                      a.HEAPU8.set(s, c);
                      var f = a.intArrayFromString(o).concat(0),
                        d = a._malloc(f.length);
                      a.HEAPU8.set(f, d);
                      var p = a._RTSP_SetOriginalKey(e, t, u, c, d, i);
                      return (a._free(u), a._free(c), a._free(d), p);
                    })(e, t, n, r, o, u))
                  : 1 == l
                    ? (null === e && (e = s()),
                      (function (e, t, n, r, o) {
                        var i = a.intArrayFromString(t).concat(0),
                          l = a._malloc(i.length);
                        a.HEAPU8.set(i, l);
                        var u = a.intArrayFromString(n).concat(0),
                          s = a._malloc(u.length);
                        a.HEAPU8.set(u, s);
                        var c = a.intArrayFromString(r).concat(0),
                          f = a._malloc(c.length);
                        a.HEAPU8.set(c, f);
                        var d = a._RTSV_SetOriginalKey(e, l, s, f, o);
                        return (a._free(l), a._free(s), a._free(f), d);
                      })(e, n, r, o, u))
                    : -1;
              },
              SetCallback: function (e, t) {
                switch (e) {
                  case "Error":
                    h = t;
                }
              },
              SetStreamFailedMsg: function (e, t) {
                if (null !== h) {
                  switch (e) {
                    case 285868033:
                      h({ errorCode: 210, description: "Parse failed." });
                      break;
                    case 285868034:
                      h({ errorCode: 202, description: "WebSocket error." });
                      break;
                    case 285868035:
                      h({ errorCode: 211, description: "Inter error." });
                      break;
                    case 285868036:
                    case 6500424:
                      h({ errorCode: 408, description: "Short request timeout." });
                      break;
                    case 269025680:
                      h({ errorCode: 223, description: "Bad request." });
                      break;
                    case 269025681:
                      h({ errorCode: 224, description: "Unauthorized." });
                      break;
                    case 269025683:
                      h({ errorCode: 226, description: "Access forbidden." });
                      break;
                    case 269025684:
                      h({ errorCode: 227, description: "Resources not found." });
                      break;
                    case 269025741:
                      h({ errorCode: 248, description: "Unsupported transport." });
                      break;
                    case 269025780:
                      h({ errorCode: 250, description: "Internal server error." });
                      break;
                    case 269025781:
                      h({ errorCode: 251, description: "Not implemented." });
                      break;
                    case 269025783:
                      h({ errorCode: 253, description: "Service unavailable." });
                      break;
                    case 269025784:
                      h({ errorCode: 254, description: "Gateway timeout." });
                      break;
                    case 269025833:
                      h({ errorCode: 258, description: "Account block." });
                      break;
                    case 32993289:
                      h({ errorCode: 205, description: "Device busy." });
                  }
                  void 0 !== t &&
                    16391 == t &&
                    h({ errorCode: 206, description: "Device stop talk." });
                }
              },
            }),
            new g()
          );
        },
        p = "Opera",
        m = "Chrome",
        h = "Firefox",
        g = "Edge",
        y = "Edg",
        _ = "IE",
        v = "Safari";
      function S() {
        var e = navigator.userAgent;
        return e.includes("Edge")
          ? g
          : e.includes("Edg")
            ? y
            : e.includes("Firefox")
              ? h
              : e.includes("Chrome")
                ? m
                : e.includes("Safari")
                  ? v
                  : e.includes("compatible") && e.includes("MSIE") && e.includes("Opera")
                    ? _
                    : e.includes("Opera")
                      ? p
                      : "";
      }
      function P(e) {
        return navigator.userAgent.split(e)[1].split(".")[0].slice(1);
      }
      var b = function () {
        var e = 2;
        function t() {}
        return (
          (t.prototype = {
            setPrintLogLevel: function (t) {
              e = t;
            },
            fatal: function (t) {
              e >= 1 && console.error(t);
            },
            error: function (t) {
              e >= 2 && console.error(t);
            },
            warn: function (t) {
              e >= 3 && console.warn(t);
            },
            info: function (t) {
              e >= 4 && console.info(t);
            },
            trace: function (t) {
              e >= 5 && console.log(t);
            },
            log: function (t) {
              e >= 6 && console.log(t);
            },
          }),
          new t()
        );
      };
      function w() {
        var e = navigator.userAgent.toLowerCase(),
          t = navigator.appName,
          n = null;
        return (
          "Microsoft Internet Explorer" === t ||
          e.indexOf("trident") > -1 ||
          e.indexOf("edge/") > -1
            ? ((n = "ie"),
              "Microsoft Internet Explorer" === t
                ? ((e = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(e)), (n += parseInt(e[1])))
                : e.indexOf("trident") > -1
                  ? (n += 11)
                  : e.indexOf("edge/") > -1 && (n = "edge"))
            : e.indexOf("safari") > -1
              ? (n = e.indexOf("chrome") > -1 ? "chrome" : "safari")
              : e.indexOf("firefox") > -1 && (n = "firefox"),
          n
        );
      }
      ((function () {
        function e() {}
        ((e.createFromElementId = function (t) {
          for (var n = document.getElementById(t), r = "", o = n.firstChild; o; )
            (3 === o.nodeType && (r += o.textContent), (o = o.nextSibling));
          var a = new e();
          return ((a.type = n.type), (a.source = r), a);
        }),
          (e.createFromSource = function (t, n) {
            var r = new e();
            return ((r.type = t), (r.source = n), r);
          }));
      })(),
        (function () {
          function e(e) {
            ((this.gl = e), (this.program = this.gl.createProgram()));
          }
          e.prototype = {
            attach: function (e) {
              this.gl.attachShader(this.program, e.shader);
            },
            link: function () {
              this.gl.linkProgram(this.program);
            },
            use: function () {
              this.gl.useProgram(this.program);
            },
            getAttributeLocation: function (e) {
              return this.gl.getAttribLocation(this.program, e);
            },
            setMatrixUniform: function (e, t) {
              var n = this.gl.getUniformLocation(this.program, e);
              this.gl.uniformMatrix4fv(n, !1, t);
            },
          };
        })(),
        (function () {
          var e = null;
          function t(e, t, n) {
            ((this.gl = e),
              (this.size = t),
              (this.texture = e.createTexture()),
              e.bindTexture(e.TEXTURE_2D, this.texture),
              (this.format = n || e.LUMINANCE),
              e.texImage2D(
                e.TEXTURE_2D,
                0,
                this.format,
                t.w,
                t.h,
                0,
                this.format,
                e.UNSIGNED_BYTE,
                null,
              ),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE));
          }
          t.prototype = {
            fill: function (e, t) {
              var n = this.gl;
              (n.bindTexture(n.TEXTURE_2D, this.texture),
                t
                  ? n.texSubImage2D(
                      n.TEXTURE_2D,
                      0,
                      0,
                      0,
                      this.size.w,
                      this.size.h,
                      this.format,
                      n.UNSIGNED_BYTE,
                      e,
                    )
                  : n.texImage2D(
                      n.TEXTURE_2D,
                      0,
                      this.format,
                      this.size.w,
                      this.size.h,
                      0,
                      this.format,
                      n.UNSIGNED_BYTE,
                      e,
                    ));
            },
            bind: function (t, n, r) {
              var o = this.gl;
              (e || (e = [o.TEXTURE0, o.TEXTURE1, o.TEXTURE2]),
                o.activeTexture(e[t]),
                o.bindTexture(o.TEXTURE_2D, this.texture),
                o.uniform1i(o.getUniformLocation(n.program, r), t));
            },
          };
        })());
      function A(e) {
        ((this.buffer = e), (this.previous = null), (this.next = null));
      }
      var E = function (e) {
        A.call(this, e);
      };
      function M(e) {
        var t = e || 25;
        function n() {
          ((this.first = null), (this.size = 0));
        }
        return (
          (n.prototype = {
            enqueue: function (e) {
              this.size >= t && this.clear();
              var n = new E(e);
              if (null === this.first) this.first = n;
              else {
                for (var r = this.first; null !== r.next; ) r = r.next;
                r.next = n;
              }
              return ((this.size += 1), n);
            },
            dequeue: function () {
              var e = null;
              return (
                null !== this.first &&
                  ((e = this.first), (this.first = this.first.next), (this.size -= 1)),
                e
              );
            },
            clear: function () {
              for (var e = null; null !== this.first; )
                ((e = this.first),
                  (this.first = this.first.next),
                  (this.size -= 1),
                  (e.buffer = null),
                  (e = null));
              ((this.size = 0), (this.first = null));
            },
            reverse: function () {
              if (0 !== this.size) {
                for (var e = []; this.size > 0; ) e.push(this.dequeue());
                for (; e.length > 0; ) {
                  var t = e.pop();
                  this.enqueue(t.buffer);
                }
              }
            },
          }),
          new n()
        );
      }
      var T = function (e) {
        var t = [],
          n = {},
          r = -1,
          o = Math.pow(2, 32) - 1,
          a = e;
        function i() {
          for (var e in t)
            t[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)];
          (0,
            1 == a
              ? (n.FTYP = new Uint8Array([
                  105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49,
                ]))
              : 2 == a &&
                (n.FTYP = new Uint8Array([
                  105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 97, 118,
                  99, 49, 109, 112, 52, 49,
                ])),
            (n.STSD_PREFIX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1])),
            (n.STTS = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
            (n.STSC = n.STCO = n.STTS),
            (n.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
            (n.HDLR_VIDEO = new Uint8Array([
              0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86,
              105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0,
            ])),
            (n.HDLR_AUDIO = new Uint8Array([
              0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83,
              111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0,
            ])),
            (n.DREF = new Uint8Array([
              0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1,
            ])),
            (n.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
            (n.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])));
        }
        t = {
          avc1: [],
          avcC: [],
          btrt: [],
          dinf: [],
          dref: [],
          esds: [],
          ftyp: [],
          hdlr: [],
          mdat: [],
          mdhd: [],
          mdia: [],
          mfhd: [],
          minf: [],
          moof: [],
          moov: [],
          mp4a: [],
          mvex: [],
          mvhd: [],
          sdtp: [],
          stbl: [],
          stco: [],
          stsc: [],
          stsd: [],
          stsz: [],
          stts: [],
          tfdt: [],
          tfhd: [],
          traf: [],
          trak: [],
          trun: [],
          trex: [],
          tkhd: [],
          vmhd: [],
          smhd: [],
          hev1: [],
          hvcC: [],
        };
        var l = function (e) {
            for (var t = 8, n = Array.prototype.slice.call(arguments, 1), r = 0; r < n.length; r++)
              t += n[r].byteLength;
            var o = new Uint8Array(t),
              a = 0;
            ((o[a++] = (t >>> 24) & 255),
              (o[a++] = (t >>> 16) & 255),
              (o[a++] = (t >>> 8) & 255),
              (o[a++] = 255 & t),
              o.set(e, a),
              (a += 4));
            for (r = 0; r < n.length; r++) (o.set(n[r], a), (a += n[r].byteLength));
            return o;
          },
          u = function (e) {
            return l(
              t.mp4a,
              new Uint8Array([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                (65280 & e.channelcount) >> 8,
                255 & e.channelcount,
                (65280 & e.samplesize) >> 8,
                255 & e.samplesize,
                0,
                0,
                0,
                0,
                (65280 & e.samplerate) >> 8,
                255 & e.samplerate,
                0,
                0,
              ]),
              ((n = e.config),
              (r = n.length),
              (o = new Uint8Array(
                [
                  0,
                  0,
                  0,
                  0,
                  3,
                  23 + r,
                  0,
                  1,
                  0,
                  4,
                  15 + r,
                  64,
                  21,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  5,
                ]
                  .concat([r])
                  .concat(n)
                  .concat([6, 1, 2]),
              )),
              l(t.esds, o)),
            );
            var n, r, o;
          },
          s = function (e) {
            return "audio" === e.type
              ? l(t.stsd, n.STSD_PREFIX, u(e))
              : l(
                  t.stsd,
                  n.STSD_PREFIX,
                  (function (e) {
                    var n = e.vps || [],
                      r = e.sps || [],
                      o = e.pps || [],
                      i = [],
                      u = [],
                      s = [],
                      c = 0;
                    for (c = 0; c < n.length; c++)
                      (i.push((65280 & n[c].byteLength) >>> 8),
                        i.push(255 & n[c].byteLength),
                        (i = i.concat(Array.prototype.slice.call(n[c]))));
                    for (c = 0; c < r.length; c++)
                      (u.push((65280 & r[c].byteLength) >>> 8),
                        u.push(255 & r[c].byteLength),
                        (u = u.concat(Array.prototype.slice.call(r[c]))));
                    for (c = 0; c < o.length; c++)
                      (s.push((65280 & o[c].byteLength) >>> 8),
                        s.push(255 & o[c].byteLength),
                        (s = s.concat(Array.prototype.slice.call(o[c]))));
                    return 1 == a
                      ? l(
                          t.avc1,
                          new Uint8Array([
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            (65280 & e.width) >> 8,
                            255 & e.width,
                            (65280 & e.height) >> 8,
                            255 & e.height,
                            0,
                            72,
                            0,
                            0,
                            0,
                            72,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            19,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            24,
                            17,
                            17,
                          ]),
                          l(
                            t.avcC,
                            new Uint8Array(
                              [1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255]
                                .concat([r.length])
                                .concat(u)
                                .concat([o.length])
                                .concat(s),
                            ),
                          ),
                        )
                      : 2 == a
                        ? l(
                            t.hev1,
                            new Uint8Array([
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              1,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              (65280 & e.width) >> 8,
                              255 & e.width,
                              (65280 & e.height) >> 8,
                              255 & e.height,
                              0,
                              72,
                              0,
                              0,
                              0,
                              72,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              1,
                              19,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              24,
                              17,
                              17,
                            ]),
                            l(
                              t.hvcC,
                              new Uint8Array(
                                [
                                  1,
                                  e.general_profile_flag,
                                  (4278190080 & e.general_profile_compatibility_flags) >>> 24,
                                  (16711680 & e.general_profile_compatibility_flags) >>> 16,
                                  (65280 & e.general_profile_compatibility_flags) >>> 8,
                                  255 & e.general_profile_compatibility_flags,
                                  (0xff0000000000 & e.general_constraint_indicator_flags) >>> 40,
                                  (0xff00000000 & e.general_constraint_indicator_flags) >>> 32,
                                  (4278190080 & e.general_constraint_indicator_flags) >>> 24,
                                  (16711680 & e.general_constraint_indicator_flags) >>> 16,
                                  (65280 & e.general_constraint_indicator_flags) >>> 8,
                                  255 & e.general_constraint_indicator_flags,
                                  e.general_level_idc,
                                  240,
                                  0,
                                  252,
                                  252 | e.chroma_format_idc,
                                  248 | e.bitDepthLumaMinus8,
                                  248 | e.bitDepthChromaMinus8,
                                  0,
                                  0,
                                  e.rate_layers_nested_length,
                                  3,
                                ]
                                  .concat([32, 0, 1])
                                  .concat(i)
                                  .concat([33, 0, 1])
                                  .concat(u)
                                  .concat([34, 0, 1])
                                  .concat(s),
                              ),
                            ),
                          )
                        : void 0;
                  })(e),
                );
          },
          c = function (e) {
            var r = null;
            return (
              (r = "audio" === e.type ? l(t.smhd, n.SMHD) : l(t.vmhd, n.VMHD)),
              l(
                t.minf,
                r,
                l(t.dinf, l(t.dref, n.DREF)),
                (function (e) {
                  return l(
                    t.stbl,
                    s(e),
                    l(t.stts, n.STTS),
                    l(t.stsc, n.STSC),
                    l(t.stsz, n.STSZ),
                    l(t.stco, n.STCO),
                  );
                })(e),
              )
            );
          },
          f = function (e) {
            return l(
              t.mdia,
              (function (e) {
                var n = e.timescale,
                  r = e.duration * n,
                  a = Math.floor(r / (o + 1)),
                  i = Math.floor(r % (o + 1));
                return l(
                  t.mdhd,
                  new Uint8Array([
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    3,
                    (n >>> 24) & 255,
                    (n >>> 16) & 255,
                    (n >>> 8) & 255,
                    255 & n,
                    a >> 24,
                    (a >> 16) & 255,
                    (a >> 8) & 255,
                    255 & a,
                    i >> 24,
                    (i >> 16) & 255,
                    (i >> 8) & 255,
                    255 & i,
                    85,
                    196,
                    0,
                    0,
                  ]),
                );
              })(e),
              (function (e) {
                var r = null;
                return ((r = "audio" === e.type ? n.HDLR_AUDIO : n.HDLR_VIDEO), l(t.hdlr, r));
              })(e),
              c(e),
            );
          },
          d = function (e) {
            return l(
              t.trak,
              (function (e) {
                for (var n = [], a = 0; a < 9; a++) n[a] = 0;
                if (((n[0] = n[4] = 65536), (n[8] = 1 << 30), r >= 0)) {
                  var i = 0;
                  switch (r) {
                    case 1:
                      i = 90;
                      break;
                    case 2:
                      i = 180;
                      break;
                    case 3:
                      i = 270;
                      break;
                    default:
                      i = 0;
                  }
                  var u = (-3.141592653589793 * i) / 180,
                    s = Math.cos(u),
                    c = Math.sin(u);
                  ((n[0] = 65536 * s), (n[1] = 65536 * -c), (n[3] = 65536 * c), (n[4] = 65536 * s));
                }
                var f = e.id,
                  d = e.duration * e.timescale,
                  p = e.width,
                  m = e.height,
                  h = Math.floor(d / (o + 1)),
                  g = Math.floor(d % (o + 1));
                return l(
                  t.tkhd,
                  new Uint8Array([
                    1,
                    0,
                    0,
                    7,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    3,
                    (f >>> 24) & 255,
                    (f >>> 16) & 255,
                    (f >>> 8) & 255,
                    255 & f,
                    0,
                    0,
                    0,
                    0,
                    h >> 24,
                    (h >> 16) & 255,
                    (h >> 8) & 255,
                    255 & h,
                    g >> 24,
                    (g >> 16) & 255,
                    (g >> 8) & 255,
                    255 & g,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    (n[0] >>> 24) & 255,
                    (n[0] >>> 16) & 255,
                    (n[0] >>> 8) & 255,
                    255 & n[0],
                    (n[1] >>> 24) & 255,
                    (n[1] >>> 16) & 255,
                    (n[1] >>> 8) & 255,
                    255 & n[1],
                    0,
                    0,
                    0,
                    0,
                    (n[3] >>> 24) & 255,
                    (n[3] >>> 16) & 255,
                    (n[3] >>> 8) & 255,
                    255 & n[3],
                    (n[4] >>> 24) & 255,
                    (n[4] >>> 16) & 255,
                    (n[4] >>> 8) & 255,
                    255 & n[4],
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    64,
                    0,
                    0,
                    0,
                    (p >>> 8) & 255,
                    255 & p,
                    0,
                    0,
                    (m >>> 8) & 255,
                    255 & m,
                    0,
                    0,
                  ]),
                );
              })(e),
              f(e),
            );
          },
          p = function (e) {
            return l(
              t.mvex,
              (function (e) {
                var n = e.id,
                  r = new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    (n >>> 24) & 255,
                    (n >>> 16) & 255,
                    (n >>> 8) & 255,
                    255 & n,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    1,
                  ]);
                return l(t.trex, r);
              })(e),
            );
          },
          m = function (e) {
            var n = (function (e, n) {
                n *= e;
                var r = Math.floor(n / (o + 1)),
                  a = Math.floor(n % (o + 1));
                return l(
                  t.mvhd,
                  new Uint8Array([
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    3,
                    (e >>> 24) & 255,
                    (e >>> 16) & 255,
                    (e >>> 8) & 255,
                    255 & e,
                    r >> 24,
                    (r >> 16) & 255,
                    (r >> 8) & 255,
                    255 & r,
                    a >> 24,
                    (a >> 16) & 255,
                    (a >> 8) & 255,
                    255 & a,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    64,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    255,
                    255,
                    255,
                    255,
                  ]),
                );
              })(e.timescale, e.duration),
              r = d(e),
              a = p(e);
            return l(t.moov, n, r, a);
          },
          h = function (e, n) {
            return "audio" === e.type
              ? audioTrun(e, n)
              : (function (e, n) {
                  var r,
                    o = null,
                    a = null,
                    i = 0,
                    u = n;
                  if (null === (r = e.samples || [])[0].frameDuration)
                    for (u += 24 + 4 * r.length, o = trunHeader(r, u), i = 0; i < r.length; i++)
                      ((a = r[i]),
                        (o = o.concat([
                          (4278190080 & a.size) >>> 24,
                          (16711680 & a.size) >>> 16,
                          (65280 & a.size) >>> 8,
                          255 & a.size,
                        ])));
                  else
                    for (
                      o = (function (e, t) {
                        return [
                          0,
                          0,
                          3,
                          5,
                          (4278190080 & e.length) >>> 24,
                          (16711680 & e.length) >>> 16,
                          (65280 & e.length) >>> 8,
                          255 & e.length,
                          (4278190080 & t) >>> 24,
                          (16711680 & t) >>> 16,
                          (65280 & t) >>> 8,
                          255 & t,
                          0,
                          0,
                          0,
                          0,
                        ];
                      })(r, (u += 24 + 4 * r.length + 4 * r.length)),
                        i = 0;
                      i < r.length;
                      i++
                    )
                      ((a = r[i]),
                        (o = o.concat([
                          (4278190080 & a.frameDuration) >>> 24,
                          (16711680 & a.frameDuration) >>> 16,
                          (65280 & a.frameDuration) >>> 8,
                          255 & a.frameDuration,
                          (4278190080 & a.size) >>> 24,
                          (16711680 & a.size) >>> 16,
                          (65280 & a.size) >>> 8,
                          255 & a.size,
                        ])));
                  return l(t.trun, new Uint8Array(o));
                })(e, n);
          },
          g = function (e) {
            var n,
              r,
              a,
              i,
              u = (function (e) {
                for (
                  var n = e.samples || [], r = n.length, o = new Uint8Array(4 + r), a = 0;
                  a < r;
                  a++
                ) {
                  var i = n[a].flags;
                  ((i = {}),
                    0 === a
                      ? ((i.degradPrio = 0),
                        (i.dependsOn = 2),
                        (i.hasRedundancy = 0),
                        (i.isDependedOn = 0),
                        (i.isLeading = 0),
                        (i.isNonSync = 0))
                      : ((i.degradPrio = 0),
                        (i.dependsOn = 1),
                        (i.hasRedundancy = 0),
                        (i.isDependedOn = 0),
                        (i.isLeading = 0),
                        (i.isNonSync = 1)),
                    (o[a + 4] =
                      (i.isLeading << 6) |
                      (i.dependsOn << 4) |
                      (i.isDependedOn << 2) |
                      i.hasRedundancy));
                }
                return l(t.sdtp, o);
              })(e),
              s = Math.floor(e.baseMediaDecodeTime / (o + 1)),
              c = Math.floor(e.baseMediaDecodeTime % (o + 1));
            return (
              (n = l(t.tfhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]))),
              (r = l(
                t.tfdt,
                new Uint8Array([
                  1,
                  0,
                  0,
                  0,
                  s >> 24,
                  (s >> 16) & 255,
                  (s >> 8) & 255,
                  255 & s,
                  c >> 24,
                  (c >> 16) & 255,
                  (c >> 8) & 255,
                  255 & c,
                ]),
              )),
              (i = u.length + 16 + 20 + 8 + 16 + 8 + 8),
              (a = h(e, i)),
              l(t.traf, n, r, a, u)
            );
          },
          y = function (e, n) {
            return l(
              t.moof,
              (function (e) {
                var n = new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  (e >>> 24) & 255,
                  (e >>> 16) & 255,
                  (e >>> 8) & 255,
                  255 & e,
                ]);
                return l(t.mfhd, n);
              })(e),
              g(n),
            );
          };
        return (
          (i.prototype = {
            initSegment: function (e) {
              var r = l(t.ftyp, n.FTYP),
                o = m(e),
                a = new Uint8Array(r.byteLength + o.byteLength);
              return (a.set(r, 0), a.set(o, r.byteLength), a);
            },
            mediaSegment: function (e, n, r, o) {
              var a = y(e, n),
                i = (function (e) {
                  return l(t.mdat, e);
                })(r),
                u = null;
              return (
                (u = new Uint8Array(a.byteLength + i.byteLength)).set(a), u.set(i, a.byteLength), u
              );
            },
            SetRotateType: function (e) {
              r = e;
            },
          }),
          new i()
        );
      };
      function C(e) {
        var t = 0,
          n = null,
          r = e;
        function o() {
          ((t = 0), (n = new I()));
        }
        function a(e, n) {
          var r = n,
            o = (t + r) >> 3;
          return ((r = (t + n) & 7), (e[o] >> (7 - (7 & r))) & 1);
        }
        function i(e, n) {
          var r = t >> 3,
            o = 8 * (r + 1) - t;
          if (o < 8)
            for (var a = 0; a < 3; a++) {
              var i = e[r + a];
              ((i = 0 == a ? (i >> o) << o : 2 == a ? (i & (255 >> (8 - o))) | (1 << o) : 0),
                e.set([i], r + a));
            }
          else (e.set([0], r), e.set([1], r + 1));
        }
        function l(e, t) {
          if (t <= 25) var n = u(e, t);
          else n = (u(e, 16) << (t - 16)) | u(e, t - 16);
          return n;
        }
        function u(e, n) {
          var r = 0;
          if (1 === n) r = a(e, 0);
          else for (var o = 0; o < n; o++) r = (r << 1) + a(e, o);
          return ((t += n), r);
        }
        function s(e, n) {
          for (var r = 0, o = 0, i = n; t + i < 8 * e.length && !a(e, i++); ) r++;
          if (0 === r) return ((t += 1), 0);
          o = 1 << r;
          for (var l = r - 1; l >= 0; l--, i++) o |= a(e, i) << l;
          return ((t += 2 * r + 1), o - 1);
        }
        function c(e, t) {
          var n = s(e, t);
          return 1 & n ? (n + 1) / 2 : -n / 2;
        }
        function f(e) {
          (n.put("cpb_cnt_minus1", s(e, 0)),
            n.put("bit_rate_scale", u(e, 4)),
            n.put("cpb_size_scale", u(e, 4)));
          for (
            var t = n.get("cpb_cnt_minus1"),
              r = new Array(t),
              o = new Array(t),
              a = new Array(t),
              i = 0;
            i <= t;
            i++
          )
            ((r[i] = s(e, 0)), (o[i] = s(e, 0)), (a[i] = u(e, 1)));
          (n.put("bit_rate_value_minus1", r),
            n.put("cpb_size_value_minus1", o),
            n.put("cbr_flag", a),
            n.put("initial_cpb_removal_delay_length_minus1", u(e, 5)),
            n.put("cpb_removal_delay_length_minus1", u(e, 5)),
            n.put("dpb_output_delay_length_minus1", u(e, 5)),
            n.put("time_offset_length", u(e, 5)));
        }
        function d(e, t) {
          var n = Number(e).toString(16);
          for (t = null == t ? (t = 2) : t; n.length < t; ) n = "0" + n;
          return n;
        }
        return (
          (o.prototype = {
            parse: function (e) {
              if (((t = 0), n.clear(), 1 == r)) {
                (n.put("forbidden_zero_bit", u(e, 1)),
                  n.put("nal_ref_idc", u(e, 2)),
                  n.put("nal_unit_type", u(e, 5)),
                  n.put("profile_idc", u(e, 8)),
                  n.put("profile_compatibility", u(e, 8)),
                  n.put("level_idc", u(e, 8)),
                  n.put("seq_parameter_set_id", s(e, 0)));
                var o = n.get("profile_idc");
                if (
                  (100 === o ||
                    110 === o ||
                    122 === o ||
                    244 === o ||
                    44 === o ||
                    83 === o ||
                    86 === o ||
                    118 === o ||
                    128 === o ||
                    138 === o ||
                    139 === o ||
                    134 === o) &&
                  (n.put("chroma_format_idc", s(e, 0)),
                  3 === n.get("chroma_format_idc") && n.put("separate_colour_plane_flag", u(e, 1)),
                  n.put("bit_depth_luma_minus8", s(e, 0)),
                  n.put("bit_depth_chroma_minus8", s(e, 0)),
                  n.put("qpprime_y_zero_transform_bypass_flag", u(e, 1)),
                  n.put("seq_scaling_matrix_present_flag", u(e, 1)),
                  n.get("seq_scaling_matrix_present_flag"))
                ) {
                  for (
                    var a = 3 !== n.get("chroma_format_idc") ? 8 : 12, d = new Array(a), p = 0;
                    p < a;
                    p++
                  )
                    if (((d[p] = u(e, 1)), d[p]))
                      for (var m = p < 6 ? 16 : 64, h = 8, g = 8, y = 0; y < m; y++)
                        (g && (g = (h + c(e, 0) + 256) % 256), (h = 0 === g ? h : g));
                  n.put("seq_scaling_list_present_flag", d);
                }
                if (
                  (n.put("log2_max_frame_num_minus4", s(e, 0)),
                  n.put("pic_order_cnt_type", s(e, 0)),
                  0 === n.get("pic_order_cnt_type"))
                )
                  n.put("log2_max_pic_order_cnt_lsb_minus4", s(e, 0));
                else if (1 === n.get("pic_order_cnt_type")) {
                  (n.put("delta_pic_order_always_zero_flag", u(e, 1)),
                    n.put("offset_for_non_ref_pic", c(e, 0)),
                    n.put("offset_for_top_to_bottom_field", c(e, 0)),
                    n.put("num_ref_frames_in_pic_order_cnt_cycle", s(e, 0)));
                  for (var _ = 0; _ < n.get("num_ref_frames_in_pic_order_cnt_cycle"); _++)
                    n.put("num_ref_frames_in_pic_order_cnt_cycle", c(e, 0));
                }
                (n.put("num_ref_frames", s(e, 0)),
                  n.put("gaps_in_frame_num_value_allowed_flag", u(e, 1)),
                  n.put("pic_width_in_mbs_minus1", s(e, 0)),
                  n.put("pic_height_in_map_units_minus1", s(e, 0)),
                  n.put("frame_mbs_only_flag", u(e, 1)),
                  0 === n.get("frame_mbs_only_flag") &&
                    n.put("mb_adaptive_frame_field_flag", u(e, 1)),
                  n.put("direct_8x8_interence_flag", u(e, 1)),
                  n.put("frame_cropping_flag", u(e, 1)),
                  1 === n.get("frame_cropping_flag") &&
                    (n.put("frame_cropping_rect_left_offset", s(e, 0)),
                    n.put("frame_cropping_rect_right_offset", s(e, 0)),
                    n.put("frame_cropping_rect_top_offset", s(e, 0)),
                    n.put("frame_cropping_rect_bottom_offset", s(e, 0))),
                  n.put("vui_parameters_present_flag", u(e, 1)),
                  n.get("vui_parameters_present_flag") &&
                    (function (e) {
                      (n.put("aspect_ratio_info_present_flag", u(e, 1)),
                        n.get("aspect_ratio_info_present_flag") &&
                          (n.put("aspect_ratio_idc", u(e, 8)),
                          255 === n.get("aspect_ratio_idc") &&
                            (i(e),
                            n.put("sar_width", u(e, 16)),
                            i(e),
                            n.put("sar_height", u(e, 16)))),
                        n.put("overscan_info_present_flag", u(e, 1)),
                        n.get("overscan_info_present_flag") &&
                          n.put("overscan_appropriate_flag", u(e, 1)),
                        n.put("video_signal_type_present_flag", u(e, 1)),
                        n.get("video_signal_type_present_flag") &&
                          (n.put("video_format", u(e, 3)),
                          n.put("video_full_range_flag", u(e, 1)),
                          n.put("colour_description_present_flag", u(e, 1)),
                          n.get("colour_description_present_flag") &&
                            (n.put("colour_primaries", u(e, 8)),
                            n.put("transfer_characteristics", u(e, 8)),
                            n.put("matrix_coefficients", u(e, 8)))),
                        n.put("chroma_loc_info_present_flag", u(e, 1)),
                        n.get("chroma_loc_info_present_flag") &&
                          (n.put("chroma_sample_loc_type_top_field", s(e, 0)),
                          n.put("chroma_sample_loc_type_bottom_field", s(e, 0))),
                        n.put("timing_info_present_flag", u(e, 1)),
                        n.get("timing_info_present_flag") &&
                          (n.put("num_units_in_tick", u(e, 32)),
                          n.put("time_scale", u(e, 32)),
                          n.put("fixed_frame_rate_flag", u(e, 1))),
                        n.put("nal_hrd_parameters_present_flag", u(e, 1)),
                        n.get("nal_hrd_parameters_present_flag") && f(e),
                        n.put("vcl_hrd_parameters_present_flag", u(e, 1)),
                        n.get("vcl_hrd_parameters_present_flag") && f(e),
                        (n.get("nal_hrd_parameters_present_flag") ||
                          n.get("vcl_hrd_parameters_present_flag")) &&
                          n.put("low_delay_hrd_flag", u(e, 1)),
                        n.put("pic_struct_present_flag", u(e, 1)),
                        n.put("bitstream_restriction_flag", u(e, 1)),
                        n.get("bitstream_restriction_flag") &&
                          (n.put("motion_vectors_over_pic_boundaries_flag", u(e, 1)),
                          n.put("max_bytes_per_pic_denom", s(e, 0)),
                          n.put("max_bits_per_mb_denom", s(e, 0))));
                    })(e));
              } else if (2 == r) {
                var v = new ArrayBuffer(256),
                  S = new Uint8Array(v);
                !(function (e, t, n, r) {
                  for (var o = 0, a = 0; o + 2 < t && a + 2 < r; ++o)
                    0 == e[o] && 0 == e[o + 1] && 3 == e[o + 2]
                      ? ((n[a++] = e[o++]), (n[a++] = e[o++]))
                      : (n[a++] = e[o]);
                  for (; o < t && a < r; ) n[a++] = e[o++];
                })(e, e.length, S, 256);
                var P = [],
                  b = [];
                u(S, 4);
                var w = u(S, 3);
                for (
                  n.put("temporalIdNested", u(S, 1)),
                    n.put("general_profile_space", u(S, 2)),
                    n.put("general_tier_flag", u(S, 1)),
                    n.put("general_profile_idc", u(S, 5)),
                    n.put("general_profile_compatibility_flags", l(S, 32)),
                    n.put(
                      "general_constraint_indicator_flags",
                      ((A = S), (E = 48) <= 32 ? l(A, E) : (l(A, E - 32) << 32) | l(A, 32)),
                    ),
                    n.put("general_level_idc", u(S, 8)),
                    p = 0;
                  p < w && p < 6;
                  p++
                )
                  ((P[p] = u(S, 1)), (b[p] = u(S, 1)));
                if (w > 0) for (p = w; p < 8; p++) u(S, 2);
                for (p = 0; p < w && p < 6; p++) b[p] && u(S, 8);
                s(S, 0);
                n.put("chroma_format_idc", s(S, 0));
                (s(S, 0), s(S, 0));
                (u(S, 1),
                  s(S, 0),
                  s(S, 0),
                  s(S, 0),
                  s(S, 0),
                  n.put("bitDepthLumaMinus8", s(S, 0) + 8),
                  n.put("bitDepthChromaMinus8", s(S, 0) + 8),
                  (v = null),
                  (S = null));
              }
              var A, E;
              return !0;
            },
            getSizeInfo: function () {
              var e = 0,
                t = 0;
              0 === n.get("chroma_format_idc")
                ? (e = t = 0)
                : 1 === n.get("chroma_format_idc")
                  ? (e = t = 2)
                  : 2 === n.get("chroma_format_idc")
                    ? ((e = 2), (t = 1))
                    : 3 === n.get("chroma_format_idc") &&
                      (0 === n.get("separate_colour_plane_flag")
                        ? (e = t = 1)
                        : 1 === n.get("separate_colour_plane_flag") && (e = t = 0));
              var r = n.get("pic_width_in_mbs_minus1") + 1,
                o = n.get("pic_height_in_map_units_minus1") + 1,
                a = (2 - n.get("frame_mbs_only_flag")) * o,
                i = 0,
                l = 0,
                u = 0,
                s = 0;
              1 === n.get("frame_cropping_flag") &&
                ((i = n.get("frame_cropping_rect_left_offset")),
                (l = n.get("frame_cropping_rect_right_offset")),
                (u = n.get("frame_cropping_rect_top_offset")),
                (s = n.get("frame_cropping_rect_bottom_offset")));
              var c = 16 * r * (16 * a);
              return {
                width: 16 * r - e * (i + l),
                height: 16 * a - t * (2 - n.get("frame_mbs_only_flag")) * (u + s),
                decodeSize: c,
              };
            },
            getSpsValue: function (e) {
              return n.get(e);
            },
            getCodecInfo: function () {
              if (1 == r)
                return (
                  "avc1." +
                  n.get("profile_idc").toString(16) +
                  (n.get("profile_compatibility") < 15
                    ? "0" + n.get("profile_compatibility").toString(16)
                    : n.get("profile_compatibility").toString(16)) +
                  n.get("level_idc").toString(16)
                );
              if (2 == r) {
                var e = "hev1.";
                switch (n.get("general_profile_space")) {
                  case 0:
                    e += "";
                    break;
                  case 1:
                    e += "A";
                    break;
                  case 2:
                    e += "B";
                    break;
                  case 3:
                    e += "C";
                }
                ((e += n.get("general_profile_idc")), (e += "."));
                for (
                  var t = n.get("general_profile_compatibility_flags"), o = 0, a = 0;
                  a < 32 && ((o |= 1 & t), 31 != a);
                  a++
                )
                  ((o <<= 1), (t >>= 1));
                ((e += d(o, 0)),
                  (e += "."),
                  0 === n.get("general_tier_flag") ? (e += "L") : (e += "H"),
                  (e += n.get("general_level_idc")));
                var i = n.get("general_constraint_indicator_flags"),
                  l = [
                    (65280 & i) >>> 8,
                    (16711680 & i) >>> 16,
                    (4278190080 & i) >>> 24,
                    (0xff00000000 & i) >>> 32,
                    (0xff0000000000 & i) >>> 40,
                  ],
                  u = !1,
                  s = "";
                for (a = 5; 0 <= a; a--) (l[a] || u) && ((s = "." + d(l[a], 0) + s), (u = !0));
                return (e += s);
              }
            },
          }),
          new o()
        );
      }
      var k,
        I = function () {
          this.map = {};
        };
      function D(e, t, n, r) {
        e.HEAPU8[t + n] = void 0 !== r ? r : 0;
      }
      function R(e, t, n, r) {
        e.HEAPU16[t / 2 + n / 2] = void 0 !== r ? r : 0;
      }
      function U(e, t, n, r) {
        e.HEAP32[t / 4 + n / 4] = void 0 !== r ? r : 0;
      }
      function F(e, t, n, r) {
        e.HEAPU32[t / 4 + n / 4] = void 0 !== r ? r : 0;
      }
      function x(e, t, n, r) {
        e.HEAPF32[t / 4 + n / 4] = void 0 !== r ? r : 0;
      }
      I.prototype = {
        put: function (e, t) {
          this.map[e] = t;
        },
        get: function (e) {
          return this.map[e];
        },
        containsKey: function (e) {
          return e in this.map;
        },
        containsValue: function (e) {
          for (var t in this.map) if (this.map[t] === e) return !0;
          return !1;
        },
        isEmpty: function (e) {
          return 0 === this.size();
        },
        clear: function () {
          for (var e in this.map) delete this.map[e];
        },
        remove: function (e) {
          delete this.map[e];
        },
        keys: function () {
          var e = new Array();
          for (var t in this.map) e.push(t);
          return e;
        },
        values: function () {
          var e = new Array();
          for (var t in this.map) e.push(this.map[t]);
          return e;
        },
        size: function () {
          var e = 0;
          for (var t in this.map) e++;
          return e;
        },
      };
      function H(e) {
        return k._RENDER_Destroy(e);
      }
      var L;
      function O(e, t, n) {
        return k._RENDER_AlgoCommand(e, t, n);
      }
      var B = 5,
        V = 6,
        G = 7,
        z = 16,
        N = 18,
        W = 19,
        j = 21,
        Y = 22,
        K = 3,
        q = 14,
        X = 23,
        J = 25,
        $ = 28,
        Q = 40,
        Z = 41,
        ee = 1,
        te = 2,
        ne = 3,
        re = 4,
        oe = 6,
        ae = 8;
      function ie(e) {
        L._DRAW_SetLanguageEnvi(e);
      }
      function le(e, t) {
        (L._DRAW_CleanScreen(e), L._DRAW_DrawByRenderHandle(e, 0, t));
      }
      function ue(e) {
        ((this.buffer = e), (this.previous = null), (this.next = null));
      }
      var se = function (e, t, n, r, o, a, i) {
        a = a;
        var l = i,
          u = n,
          s = e,
          c = r,
          f = null,
          d = 0,
          p = 0,
          m = 0,
          h = !1,
          g = null,
          y = null,
          _ = 0,
          v = 0,
          S = !1,
          P = !1,
          b = 1,
          w = !1,
          A = 0,
          E = 0,
          T = 0,
          C = 0,
          I = o,
          se = -1,
          ce = 0,
          fe = !1,
          de = null,
          pe = !1,
          me = !1,
          he = {},
          ge = 120,
          ye = 80,
          _e = 240,
          ve = null,
          Se = -1,
          Pe = !1,
          be = null,
          we = null,
          Ae = null,
          Ee = null,
          Me = !1,
          Te = !1,
          Ce = !1,
          ke = null,
          Ie = !1,
          De = 0,
          Re = function (e) {
            var t = 3;
            switch (e.primaries) {
              case "bt709":
                t = 3;
                break;
              case "bt470bg":
                t = 1;
                break;
              case "smpte170m":
                t = 2;
                break;
              case "bt2020":
                t = 4;
                break;
              case "smpte432":
                t = 5;
                break;
              default:
                t = 3;
            }
            return t;
          },
          Ue = function (e) {
            var t = 5;
            switch (e.transfer) {
              case "bt709":
              case "smpte170m":
                t = 5;
                break;
              case "iec61966-2-1":
                t = 2;
                break;
              case "linear":
                t = 1;
                break;
              case "pq":
                t = 6;
                break;
              case "hlg":
                t = 8;
                break;
              default:
                t = 5;
            }
            return t;
          },
          Fe = function (e) {
            var t = 2;
            switch (e.matrix) {
              case "rgb":
              case "bt709":
                t = 2;
                break;
              case "bt470bg":
                t = 1;
                break;
              case "bt2020-ncl":
                t = 3;
                break;
              default:
                t = 2;
            }
            return t;
          };
        function xe() {
          ((g = new M(u)), (y = new M(u)), (h = !1));
        }
        var He = function (e) {
            if (
              ((se = e.buffer.stuFrameInfo.nFrameID),
              we(e.buffer.stuFrameInfo),
              a.log("drawFrame, m_nCurRenderFrameID:" + se + ", m_bMSEDecode:" + Te),
              Te)
            )
              return (
                l.PlayMSE(e.buffer.stuFrameInfo, e.buffer.Image.DataY),
                delete e.buffer,
                (e.buffer = null),
                (e.previous = null),
                (e.next = null),
                (e = null),
                !0
              );
            if (null !== f) {
              var t = -1 == Se ? e.buffer.stuFrameInfo.nRotateType : Se;
              if (
                (t >= 0 && ((r = f), (o = t) < 0 || o > 3 || k._RENDER_Rotate(r, o)),
                (function (e, t, n, r) {
                  var o,
                    a = k._malloc(80),
                    i = 0,
                    l = null,
                    u = 0,
                    s = null,
                    c = 0,
                    f = null;
                  (9 != t.ImageFormat &&
                    ((i = t.width0 * t.height0),
                    (l = k._malloc(i)),
                    k.writeArrayToMemory(t.DataY, l),
                    (u = t.width1 * t.height1),
                    (s = k._malloc(u)),
                    k.writeArrayToMemory(t.DataU, s),
                    (c = t.width2 * t.height2),
                    (f = k._malloc(c)),
                    k.writeArrayToMemory(t.DataV, f)),
                    (k.HEAP32[a / 4 + 0] = 0),
                    (k.HEAP32[a / 4 + 1] = t.ImageFormat),
                    (k.HEAP32[a / 4 + 2] = 0),
                    (k.HEAP32[a / 4 + 3] = 0),
                    9 != t.ImageFormat
                      ? ((k.HEAP32[a / 4 + 4] = l),
                        (k.HEAP32[a / 4 + 5] = s),
                        (k.HEAP32[a / 4 + 6] = f))
                      : ((k.HEAP32[a / 4 + 4] = t.DataY),
                        (k.HEAP32[a / 4 + 5] = 0),
                        (k.HEAP32[a / 4 + 6] = 0)),
                    (k.HEAP32[a / 4 + 7] = t.width0),
                    (k.HEAP32[a / 4 + 8] = t.width1),
                    (k.HEAP32[a / 4 + 9] = t.width2),
                    (k.HEAP32[a / 4 + 10] = t.height0),
                    (k.HEAP32[a / 4 + 11] = t.height1),
                    (k.HEAP32[a / 4 + 12] = t.height2),
                    (k.HEAP32[a / 4 + 13] = t.width0),
                    (k.HEAP32[a / 4 + 14] = t.width1),
                    (k.HEAP32[a / 4 + 15] = t.width2),
                    (k.HEAP32[a / 4 + 16] = t.height0),
                    (k.HEAP32[a / 4 + 17] = t.height1),
                    (k.HEAP32[a / 4 + 18] = t.height2),
                    (k.HEAP32[a / 4 + 19] = 0),
                    (k.HEAPU8[a + 80] = t.nColorPrimaries),
                    (k.HEAPU8[a + 81] = t.nColorTransfer),
                    (k.HEAPU8[a + 82] = t.nColorSpace),
                    (k.HEAPU8[a + 83] = t.bColorFull));
                  var d = 0,
                    p = 0;
                  if (0 !== n && null != n) {
                    ((d = k._malloc(16)),
                      (k.HEAP32[d / 4 + 0] = n.left),
                      (k.HEAP32[d / 4 + 1] = n.top),
                      (k.HEAP32[d / 4 + 2] = n.right),
                      (k.HEAP32[d / 4 + 3] = n.bottom));
                  }
                  if (0 !== r && null != r) {
                    ((p = k._malloc(16)),
                      (k.HEAP32[p / 4 + 0] = r.left),
                      (k.HEAP32[p / 4 + 1] = r.top),
                      (k.HEAP32[p / 4 + 2] = r.right),
                      (k.HEAP32[p / 4 + 3] = r.bottom));
                  }
                  ((o = k._RENDER_DrawImage(e, a, d, p)),
                    9 != t.ImageFormat && (k._free(l), k._free(s), k._free(f)),
                    k._free(a),
                    0 !== d && k._free(d),
                    0 !== p && k._free(p));
                })(f, e.buffer.Image, ve, null),
                l.DrawWaterMask(),
                w && le(T, e.buffer.stuFrameInfo.nFrameID),
                delete e.buffer,
                (e.buffer = null),
                (e.previous = null),
                (e.next = null),
                (e = null),
                pe &&
                  !me &&
                  (0 == O(f, 1, !0) &&
                  0 ==
                    (function (e, t) {
                      var n = k._malloc(20),
                        r = null;
                      (null !== t.PanoARCustomParams &&
                        ((r = k._malloc(12)),
                        (k.HEAPF32[r / 4 + 0] = t.PanoARCustomParams.VerFieldViewAngle),
                        (k.HEAPF32[r / 4 + 1] = t.PanoARCustomParams.HoriFieldViewAngle),
                        (k.HEAPF32[r / 4 + 2] = t.PanoARCustomParams.DownPressAngle)),
                        (k.HEAP32[n / 4 + 0] = t.PanoARMode),
                        (k.HEAP32[n / 4 + 1] = t.ImageStride),
                        (k.HEAP32[n / 4 + 2] = t.ImageWidth),
                        (k.HEAP32[n / 4 + 3] = t.ImageHeight),
                        (k.HEAP32[n / 4 + 4] = r));
                      var o = k._RENDER_SetAlgoParams(e, n);
                      return (k._free(n), null !== r && k._free(r), o);
                    })(f, he)
                    ? a.log("[Trace]RENDER_AlgoCommand and RENDER_SetAlgoParams success!")
                    : a.log("[Error]RENDER_AlgoCommand or RENDER_SetAlgoParams failed!"),
                  (me = !0)),
                (function (e) {
                  k._RENDER_Present(e);
                })(f),
                !fe)
              ) {
                fe = !0;
                var n = {};
                (Me
                  ? ((n.decodeMode = "webCodec"), a.trace("Single webCodec Play Start."))
                  : ((n.decodeMode = "canvas"), a.trace("Single SW Play Start.")),
                  (n.width = A),
                  (n.height = E),
                  1 == ce ? (n.encodeMode = "H264") : 2 == ce && (n.encodeMode = "H265"),
                  de && de(n),
                  l.GetOneByOneState() &&
                    setTimeout(function () {
                      l.Pause(!0);
                    }));
              }
              return !0;
            }
            return !1;
            var r, o;
          },
          Le = function (e) {
            if (!Ce)
              if (c) {
                Ae();
                var t = 40;
                if (h && g && 0 !== g.size)
                  (0 === p && (p = e),
                    (_ = (n = e - p) - m),
                    a.log(
                      "drawingInTime, timestamp:" +
                        e +
                        ", m_nPreTimestamp:" +
                        p +
                        ", nDifTimestamp:" +
                        n,
                    ),
                    null !== (r = g.dequeue()) &&
                      null !== r.buffer &&
                      null !== r.buffer.Image.DataY &&
                      ((t = r.buffer.nCostTime - _),
                      He(r),
                      Pe && 0 === g.size && (a.trace("PlayMethod StreamPlayOverCallback"), Ee())));
                ((m = t),
                  (p = e),
                  t < 0 && (t = 0),
                  a.log(
                    "drawingInTime, nCostTime:" +
                      t +
                      ", m_nPreCostTime:" +
                      m +
                      ", m_nDifferenceTime:" +
                      _,
                  ),
                  setTimeout(
                    function () {
                      Le(Date.now());
                    },
                    t,
                  ));
              } else {
                if (h && g && 0 !== g.size) {
                  if (!Te && (0 === d || e - d < ge)) {
                    if ((0 === d && (d = e), !S))
                      null !== (r = g.dequeue()) &&
                        null !== r.buffer &&
                        null !== r.buffer.dataY &&
                        ((S = !0), He(r));
                    return void window.requestAnimationFrame(Le);
                  }
                  var n, r;
                  if ((0 === p && (p = e), (n = e - p) >= v))
                    null !== (r = g.dequeue()) &&
                      null !== r.buffer &&
                      null !== r.buffer.Image.DataY &&
                      (P && (_ = n - v),
                      (v = r.buffer.nCostTime),
                      a.log(
                        "timestamp:" +
                          e +
                          "-m_nPreTimestamp:" +
                          p +
                          "-nDifTimestamp:" +
                          n +
                          "--m_nDifferenceTime:" +
                          _ +
                          "--m_nNextPlayTime:" +
                          v +
                          "--videoDataQueue.size:" +
                          g.size,
                      ),
                      (v -= _),
                      He(r),
                      (p = e),
                      (P = !0));
                }
                window.requestAnimationFrame(Le);
              }
          };
        return (
          (xe.prototype = {
            draw: function (e, t, n, r, o) {
              if (null !== g)
                if (document.hidden && g.size >= 25) g.clear();
                else {
                  var a = {};
                  ((a.Image = Te
                    ? { DataY: e }
                    : {
                        ImageFormat: 0,
                        DataY: e,
                        DataU: t,
                        DataV: n,
                        width0: A,
                        width1: A / 2,
                        width2: A / 2,
                        height0: E,
                        height1: E / 2,
                        height2: E / 2,
                        nColorPrimaries: r.nColorPrimaries,
                        nColorTransfer: r.nColorTransfer,
                        nColorSpace: r.nColorSpace,
                        bColorFull: r.bColorFull,
                      }),
                    (a.stuFrameInfo = r),
                    0 == o && (o = 25));
                  var i = 1e3 / o,
                    u = g.size * i;
                  if (
                    (c || ((b = u > _e ? 1.2 : u < ye ? 0.8 : 1), Te && l.SetMSEPlaySpeed(b)),
                    (a.nCostTime = 1e3 / o / b),
                    !c && a.nCostTime < 20 && (a.nCostTime = 20),
                    c && 1 === De)
                  ) {
                    if (
                      0 == (f = a.stuFrameInfo).nFrameSubType ||
                      18 == f.nFrameSubType ||
                      20 == f.nFrameSubType ||
                      33 == f.nFrameSubType ||
                      19 === a.stuFrameInfo.nFrameSubType
                    )
                      for (y.reverse(); y.size > 0; ) {
                        var s = y.dequeue();
                        g.enqueue(s.buffer);
                      }
                    y.enqueue(a);
                  } else g.enqueue(a);
                }
              var f;
            },
            drawWebCodecs: function (e, t, n, r, o, i) {
              if (h)
                if (((Me = !0), I)) {
                  if (
                    (((u = {}).Image = {
                      ImageFormat: 9,
                      DataY: e,
                      DataU: 0,
                      DataV: 0,
                      width0: r,
                      width1: 0,
                      width2: 0,
                      height0: o,
                      height1: 0,
                      height2: 0,
                      nColorPrimaries: Re(i),
                      nColorTransfer: Ue(i),
                      nColorSpace: Fe(i),
                      bColorFull: i.fullRange,
                    }),
                    (u.stuFrameInfo = {}),
                    (u.stuFrameInfo.nFrameID = t),
                    He(new ue(u)),
                    !fe)
                  ) {
                    fe = !0;
                    var l = { decodeMode: "webCodec" };
                    (a.trace("Multi webCodec Play Start."),
                      (l.width = A),
                      (l.height = E),
                      1 == ce ? (l.encodeMode = "H264") : 2 == ce && (l.encodeMode = "H265"),
                      de && de(l));
                  }
                } else if (null !== g)
                  if (document.hidden && g.size >= 25) g.clear();
                  else {
                    var u;
                    (((u = {}).Image = {
                      ImageFormat: 9,
                      DataY: e,
                      DataU: 0,
                      DataV: 0,
                      width0: r,
                      width1: 0,
                      width2: 0,
                      height0: o,
                      height1: 0,
                      height2: 0,
                      nColorPrimaries: Re(i),
                      nColorTransfer: Ue(i),
                      nColorSpace: Fe(i),
                      bColorFull: i.fullRange,
                    }),
                      (u.stuFrameInfo = {}),
                      (u.stuFrameInfo.nFrameID = t),
                      0 == n && (n = 25));
                    var s = 1e3 / n,
                      f = g.size * s;
                    (c || (b = f > _e ? 1.2 : f < ye ? 0.8 : 1),
                      (u.nCostTime = 1e3 / n / b),
                      u.nCostTime < 20 && (u.nCostTime = 20),
                      g.enqueue(u));
                  }
            },
            resize: function (e, t) {
              (this.stopRendering(),
              null !== g && (g.clear(), (g = null)),
              null !== y && (y.clear(), (y = null)),
              null !== f) && (0 === H(f) && window.nSWDecodeNum--, (f = null));
              if (!Te && s && null === f) {
                if (
                  !(function () {
                    if (window.nSWDecodeNum >= 10)
                      return (
                        a.warn("Insufficient webGL resources."),
                        be && be({ errorCode: 100, description: "Insufficient webGL resources." }),
                        !1
                      );
                    return !0;
                  })()
                )
                  return;
                (f = (function (e) {
                  var t = (k = window.REModule)._malloc(12),
                    n = k.allocateUTF8(e);
                  ((k.HEAP32[t / 4 + 0] = 12),
                    (k.HEAP32[t / 4 + 1] = n),
                    (k.HEAP32[t / 4 + 2] = 0));
                  var r = k._RENDER_Create(t);
                  return (k._free(n), k._free(t), r);
                })(s.id)) && window.nSWDecodeNum++;
              }
              ((g = new M(u)), (y = new M(u)), this.startRendering(), (A = e), (E = t));
            },
            initStartTime: function () {
              0 === d && this.startRendering();
            },
            startRendering: function () {
              ((Ce = !1),
                0 === d &&
                  ((h = !0),
                  c
                    ? setTimeout(
                        function () {
                          Le(Date.now());
                        },
                        0,
                      )
                    : window.requestAnimationFrame(Le)));
            },
            pause: function (e) {
              ((h = !e), a.log("Play method pause, isRendering:" + h));
            },
            play: function () {
              h = !0;
            },
            stopRendering: function () {
              ((h = !1), (d = 0));
            },
            setPlaySpeed: function (e) {
              b = e;
            },
            getPlaySpeed: function () {
              return b;
            },
            setEncodeType: function (e) {
              ce = e;
            },
            SetBeginDrawCallback: function (e) {
              de = e;
            },
            terminate: function () {
              ((h = !1),
              (d = 0),
              (fe = !1),
              (Me = !1),
              (Te = !1),
              null !== g && (g.clear(), (g = null)),
              null !== y && (y.clear(), (y = null)),
              null !== f) && (0 === H(f) && window.nSWDecodeNum--, (f = null));
              ((se = -1), (Se = -1), (Ce = !0));
            },
            GetVideoBufferSize: function () {
              return null !== g ? g.size : 0;
            },
            OpenIVS: function (e, t) {
              ((function (e) {
                (L = window.IVSModule)._DRAW_Open(e);
              })((T = e)),
                (function (e, t) {
                  var n = L.allocateUTF8(t);
                  (L._DRAW_SetWebCanvas(e, n), L._free(n));
                })(T, t),
                ie(C),
                (w = !0));
            },
            CloseIVS: function () {
              var e;
              w &&
                ((w = !1),
                (e = T),
                L._DRAW_Clean(e),
                (function (e) {
                  L._DRAW_Close(e);
                })(T));
            },
            SetIvsEnable: function (e, t) {
              w &&
                (function (e, t, n) {
                  L._DRAW_SetEnable(e, t, n);
                })(T, e, t);
            },
            IVSSetViewProportion: function (e, t) {
              w &&
                (function (e, t, n) {
                  L._DRAW_SetViewProportion(e, t, n);
                })(T, e, t);
            },
            IVSIoctl: function (e, t) {
              w &&
                (function (e, t, n) {
                  var r = -1;
                  if ((oe === t || ae === t) && void 0 !== n.nX && void 0 !== n.nY) {
                    var o = L._malloc(128);
                    if (
                      (U(L, o, 0, n.nX), U(L, o, 4, n.nY), 0 === (r = L._DRAW_Ioctl(e, t, o, 128)))
                    ) {
                      var a = new ArrayBuffer(128),
                        i = new Uint8Array(a),
                        l = new DataView(a);
                      (i.set(L.HEAPU8.subarray(o, o + 128)),
                        (n.nObjectID = l.getInt32(0, !0)),
                        (n.nClassID = l.getInt32(112, !0)),
                        (n.nObjectType = l.getUint8(116, !0)));
                    }
                    L._free(o);
                  }
                })(T, e, t);
            },
            IVSGeneralConfig: function (e, t) {
              w &&
                (function (e, t, n) {
                  var r = -1;
                  if (K === t) {
                    var o = L._malloc(276);
                    (F(L, o, 0, 276),
                      F(L, o, 4, n.cfgFlag),
                      F(L, o, 8, n.ruleType),
                      void 0 !== n.ruleName &&
                        n.ruleName <= 128 &&
                        L.writeArrayToMemory(n.ruleName, o + 12),
                      D(L, o, 140, n.lineDisable),
                      D(L, o, 141, n.cfgReset),
                      0 === n.lineDisable &&
                        void 0 !== n.lineAttr &&
                        (F(L, o, 144, n.lineAttr.attrFlag),
                        x(L, o, 148, n.lineAttr.lineColor.cgred),
                        x(L, o, 152, n.lineAttr.lineColor.cggreen),
                        x(L, o, 156, n.lineAttr.lineColor.cgblue),
                        U(L, o, 160, n.lineAttr.lineWidth),
                        U(L, o, 164, n.lineAttr.lineStyle),
                        U(L, o, 168, n.lineAttr.boxStyle),
                        D(L, o, 172, n.lineAttr.boxTail),
                        D(L, o, 173, n.lineAttr.hideTail),
                        D(L, o, 174, n.lineAttr.fillTransparency)),
                      F(L, o, 188, n.textAttrScope),
                      D(L, o, 192, n.textDisable),
                      D(L, o, 193, n.textDrawOnLine),
                      0 === n.textDisable &&
                        void 0 !== n.textAttr &&
                        (F(L, o, 196, n.textAttr.attrFlag),
                        x(L, o, 200, n.textAttr.textColor.cgred),
                        x(L, o, 204, n.textAttr.textColor.cggreen),
                        x(L, o, 208, n.textAttr.textColor.cgblue),
                        D(L, o, 212, n.textAttr.textFont.fontSize),
                        D(L, o, 216, n.textAttr.textPos.posFlag),
                        D(L, o, 217, n.textAttr.textPos.refPos),
                        U(L, o, 220, n.textAttr.textPos.absPos.x),
                        U(L, o, 224, n.textAttr.textPos.absPos.y)),
                      (r = L._DRAW_IVSGeneralConfig(e, t, o, 276)),
                      L._free(o));
                  } else if (q === t || X === t) {
                    var a = L._malloc(152);
                    (F(L, a, 0, 152),
                      F(L, a, 4, n.cfgFlag),
                      F(L, a, 8, n.objID),
                      R(L, a, 12, n.objClass),
                      R(L, a, 14, n.objType),
                      D(L, a, 16, n.lineDisable),
                      D(L, a, 17, n.cfgReset),
                      D(L, a, 18, n.algorithmID),
                      D(L, a, 19, n.adaptionID),
                      0 === n.lineDisable &&
                        void 0 !== n.lineAttr &&
                        (F(L, a, 20, n.lineAttr.attrFlag),
                        x(L, a, 24, n.lineAttr.lineColor.cgred),
                        x(L, a, 28, n.lineAttr.lineColor.cggreen),
                        x(L, a, 32, n.lineAttr.lineColor.cgblue),
                        U(L, a, 36, n.lineAttr.lineWidth),
                        U(L, a, 40, n.lineAttr.lineStyle),
                        U(L, a, 44, n.lineAttr.boxStyle),
                        D(L, a, 48, n.lineAttr.boxTail),
                        D(L, a, 49, n.lineAttr.hideTail),
                        D(L, a, 50, n.lineAttr.fillTransparency)),
                      0 === n.textDisable &&
                        void 0 !== n.textAttr &&
                        (F(L, a, 64, n.textAttr.attrFlag),
                        x(L, a, 68, n.textAttr.textColor.cgred),
                        x(L, a, 72, n.textAttr.textColor.cggreen),
                        x(L, a, 76, n.textAttr.textColor.cgblue),
                        D(L, a, 80, n.textAttr.textFont.fontSize),
                        D(L, a, 84, n.textAttr.textPos.posFlag),
                        D(L, a, 85, n.textAttr.textPos.refPos),
                        U(L, a, 88, n.textAttr.textPos.absPos.x),
                        U(L, a, 92, n.textAttr.textPos.absPos.y)),
                      F(L, a, 112, n.textSwitchOn),
                      F(L, a, 116, n.textSwitch),
                      (r = L._DRAW_IVSGeneralConfig(e, t, a, 152)),
                      L._free(a));
                  } else r = -1;
                })(T, e, t);
            },
            SetIvsIotBoxParas: function (e, t, n) {
              w &&
                (function (e, t, n, r) {
                  var o = L._malloc(48),
                    a = new DataView(L.HEAPU8.buffer);
                  L.HEAPU8[o] = t ? 1 : 0;
                  for (var i = L._malloc(n.length + 1), l = 0; l < n.length; l++)
                    L.HEAPU8[i + l] = n.charCodeAt(l);
                  ((L.HEAPU8[i + n.length] = 0), a.setUint32(o + 4, i, !0), (L.HEAPU8[o + 12] = r));
                  var u = L._DRAW_IVSGeneralConfig(e, Q, o, 1);
                  (L._free(i), L._free(o));
                })(T, e, t, n);
            },
            SetIvsIotBoxDisplay: function (e, t, n) {
              w &&
                (function (e, t, n, r) {
                  var o = L._malloc(44),
                    a = new DataView(L.HEAPU8.buffer);
                  L.HEAPU8[o] = 1;
                  var i = L._malloc(8);
                  (a.setInt32(i, t, !0),
                    a.setInt32(i + 4, n, !0),
                    t < 0 || n < 0 ? a.setUint32(o + 4, 0, !0) : a.setUint32(o + 4, i, !0),
                    -1 == r
                      ? a.setUint32(o + 8, 1, !0)
                      : (a.setUint32(o + 8, 0, !0), a.setUint8(o + 9, r, !0)));
                  var l = L._DRAW_IVSGeneralConfig(e, Z, o, 1);
                  (L._free(i), L._free(o));
                })(T, e, t, n);
            },
            SetIvsLanguageEnvi: function (e) {
              ((C = e), w && ie(e));
            },
            CleanScreen: function (e, t, n, r) {
              null != f &&
                (g.clear(),
                (function (e, t, n, r, o) {
                  var a = k._malloc(16);
                  ((k.HEAP32[a / 4 + 0] = t),
                    (k.HEAP32[a / 4 + 1] = n),
                    (k.HEAP32[a / 4 + 2] = r),
                    (k.HEAP32[a / 4 + 3] = o));
                  var i = k._RENDER_ClearScreen(e, a);
                  k._free(a);
                })(f, e, t, n, r));
            },
            DrawIVS: function (e, t, n, r) {
              if (w) {
                var o = (function (e) {
                    var t = 0,
                      n = 0;
                    switch (e) {
                      case z:
                        ((t = J), (n = 1));
                        break;
                      case N:
                        ((t = $), (n = 1));
                    }
                    return { bDeal: n, nIvsDrawType: t };
                  })(t),
                  a = o.bDeal,
                  i = o.nIvsDrawType;
                if (a)
                  !(function (e, t, n, r, o) {
                    var a = L._malloc(r);
                    L.writeArrayToMemory(n, a);
                    var i = L._DRAW_InputIVSData(e, t, a, r, o);
                    L._free(a);
                  })(T, i, e, n, r);
                else
                  switch (t) {
                    case B:
                      !(function (e, t, n, r) {
                        var o = L._malloc(n);
                        L.writeArrayToMemory(t, o);
                        var a = L._DRAW_InputJsonData(e, o, n, r);
                        L._free(o);
                      })(T, e, n, r);
                      break;
                    case V:
                      !(function (e, t, n, r, o) {
                        var a = L._malloc(r);
                        L.writeArrayToMemory(n, a);
                        var i = L._DRAW_InputTrackData(e, t, a, r, o);
                        L._free(a);
                      })(T, 0, e, n, r);
                      break;
                    case G:
                    case W:
                    case j:
                    case Y:
                      !(function (e, t, n, r, o) {
                        var a = !1,
                          i = L._malloc(r);
                        if (W == t) {
                          var l = 0,
                            u = new Array(512);
                          ((L.HEAPU16[i / 2 + 0] = n.NumberStat),
                            (L.HEAPU16[i / 2 + 1] = n.nIntelFlowPlanNum));
                          for (
                            var s = L._malloc(12 * n.nIntelFlowPlanNum), c = s, f = 0;
                            f < n.nIntelFlowPlanNum;
                            f++
                          ) {
                            ((L.HEAPU16[c / 2 + 0] = n.pIntelFlowPlan[f].PlanId),
                              (L.HEAPU16[c / 2 + 1] = n.pIntelFlowPlan[f].RuleType),
                              (L.HEAPU16[c / 2 + 4] = n.pIntelFlowPlan[f].RegionNum),
                              (u[l] = L._malloc(12 * n.pIntelFlowPlan[f].RegionNum)));
                            for (var d = u[l], p = 0; p < n.pIntelFlowPlan[f].RegionNum; p++)
                              ((L.HEAPU16[d / 2 + 0] = n.pIntelFlowPlan[f].pRegion[p].RegionId),
                                (L.HEAPU16[d / 2 + 1] = n.pIntelFlowPlan[f].pRegion[p].State),
                                (L.HEAP32[d / 4 + 1] = n.pIntelFlowPlan[f].pRegion[p].PeopleNum),
                                (d += 12));
                            if (((L.HEAP32[c / 4 + 1] = u[l]), ++l >= 512)) break;
                            c += 12;
                          }
                          ((L.HEAP32[i / 4 + 1] = s),
                            (a = L._DRAW_InputTrackDataEx2(e, t, i, r, o)));
                          for (var m = 0; m < l; m++) L._free(u[l]);
                          L._free(s);
                        } else if (Y == t) {
                          ((L.HEAP32[i / 4 + 0] = n.nId),
                            (L.HEAP16[i / 2 + 2] = n.wCustom),
                            (L.HEAPU8[i + 6] = n.chState),
                            (L.HEAPU8[i + 7] = n.chCount));
                          for (
                            var h = L._malloc(12 * n.chCount),
                              g = h,
                              y = new Array(n.chCount),
                              _ = new Array(n.chCount),
                              v = new Array(n.chCount),
                              S = 0;
                            S < n.chCount;
                            S++
                          ) {
                            if (
                              ((L.HEAP32[g / 4 + 0] = n.pElement[S].nStructType),
                              (L.HEAP32[g / 4 + 1] = n.pElement[S].nStructLength),
                              (v[S] = L._malloc(n.pElement[S].nStructLength)),
                              ee == n.pElement[S].nStructType)
                            )
                              ((L.HEAPU8[v[S] + 0] = n.pElement[S].pStruct.chType),
                                (L.HEAPU8[v[S] + 1] = n.pElement[S].pStruct.chWidth),
                                (L.HEAPU8[v[S] + 2] = n.pElement[S].pStruct.chStyle),
                                (L.HEAP16[v[S] / 2 + 2] = n.pElement[S].pStruct.wRadius),
                                (L.HEAP16[v[S] / 2 + 4] = n.pElement[S].pStruct.positionCircle.x),
                                (L.HEAP16[v[S] / 2 + 5] = n.pElement[S].pStruct.positionCircle.y),
                                (L.HEAPU8[v[S] + 12] = n.pElement[S].pStruct.chLineA),
                                (L.HEAPU8[v[S] + 13] = n.pElement[S].pStruct.chLineR),
                                (L.HEAPU8[v[S] + 14] = n.pElement[S].pStruct.chLineG),
                                (L.HEAPU8[v[S] + 15] = n.pElement[S].pStruct.chLineB),
                                (L.HEAPU8[v[S] + 16] = n.pElement[S].pStruct.chRegA),
                                (L.HEAPU8[v[S] + 17] = n.pElement[S].pStruct.chRegR),
                                (L.HEAPU8[v[S] + 18] = n.pElement[S].pStruct.chRegG),
                                (L.HEAPU8[v[S] + 19] = n.pElement[S].pStruct.chRegB));
                            else if (te == n.pElement[S].nStructType) {
                              if (
                                ((L.HEAPU8[v[S] + 0] = n.pElement[S].pStruct.chType),
                                (L.HEAPU8[v[S] + 1] = n.pElement[S].pStruct.chCount),
                                (L.HEAPU8[v[S] + 2] = n.pElement[S].pStruct.chWidth),
                                (L.HEAPU8[v[S] + 3] = n.pElement[S].pStruct.chStyle),
                                (L.HEAPU8[v[S] + 4] = n.pElement[S].pStruct.chLineA),
                                (L.HEAPU8[v[S] + 5] = n.pElement[S].pStruct.chLineR),
                                (L.HEAPU8[v[S] + 6] = n.pElement[S].pStruct.chLineG),
                                (L.HEAPU8[v[S] + 7] = n.pElement[S].pStruct.chLineB),
                                n.pElement[S].pStruct.chCount > 0)
                              ) {
                                y[S] = L._malloc(4 * n.pElement[S].pStruct.chCount);
                                for (var P = 0; P < n.pElement[S].pStruct.chCount; P++)
                                  ((L.HEAPU16[y[S] / 2 + 2 * P] =
                                    n.pElement[S].pStruct.pPoints[P].x),
                                    (L.HEAPU16[y[S] / 2 + 2 * P + 1] =
                                      n.pElement[S].pStruct.pPoints[P].y));
                                L.HEAPU32[v[S] / 4 + 2] = y[S];
                              }
                            } else if (ne == n.pElement[S].nStructType) {
                              if (
                                ((L.HEAPU8[v[S] + 0] = n.pElement[S].pStruct.chType),
                                (L.HEAPU8[v[S] + 1] = n.pElement[S].pStruct.chCount),
                                (L.HEAPU8[v[S] + 2] = n.pElement[S].pStruct.chWidth),
                                (L.HEAPU8[v[S] + 3] = n.pElement[S].pStruct.chStyle),
                                (L.HEAPU8[v[S] + 4] = n.pElement[S].pStruct.chLineA),
                                (L.HEAPU8[v[S] + 5] = n.pElement[S].pStruct.chLineR),
                                (L.HEAPU8[v[S] + 6] = n.pElement[S].pStruct.chLineG),
                                (L.HEAPU8[v[S] + 7] = n.pElement[S].pStruct.chLineB),
                                (L.HEAPU8[v[S] + 8] = n.pElement[S].pStruct.chRegA),
                                (L.HEAPU8[v[S] + 9] = n.pElement[S].pStruct.chRegR),
                                (L.HEAPU8[v[S] + 10] = n.pElement[S].pStruct.chRegG),
                                (L.HEAPU8[v[S] + 11] = n.pElement[S].pStruct.chRegB),
                                n.pElement[S].pStruct.chCount > 0)
                              ) {
                                y[S] = L._malloc(4 * n.pElement[S].pStruct.chCount);
                                for (P = 0; P < n.pElement[S].pStruct.chCount; P++)
                                  ((L.HEAPU16[y[S] / 2 + 2 * P] =
                                    n.pElement[S].pStruct.pPoints[P].x),
                                    (L.HEAPU16[y[S] / 2 + 2 * P + 1] =
                                      n.pElement[S].pStruct.pPoints[P].y));
                                L.HEAPU32[v[S] / 4 + 3] = y[S];
                              }
                            } else
                              re == n.pElement[S].nStructType &&
                                ((L.HEAPU8[v[S] + 0] = n.pElement[S].pStruct.chType),
                                (L.HEAPU8[v[S] + 1] = n.pElement[S].pStruct.chCharset),
                                (L.HEAPU16[v[S] / 2 + 2] = n.pElement[S].pStruct.stringPos.x),
                                (L.HEAPU16[v[S] / 2 + 3] = n.pElement[S].pStruct.stringPos.y),
                                (L.HEAPU8[v[S] + 8] = n.pElement[S].pStruct.chLineA),
                                (L.HEAPU8[v[S] + 9] = n.pElement[S].pStruct.chLineR),
                                (L.HEAPU8[v[S] + 10] = n.pElement[S].pStruct.chLineG),
                                (L.HEAPU8[v[S] + 11] = n.pElement[S].pStruct.chLineB),
                                (L.HEAPU8[v[S] + 12] = n.pElement[S].pStruct.chFontSize),
                                (L.HEAPU8[v[S] + 13] = n.pElement[S].pStruct.chFontAlign),
                                (L.HEAPU16[v[S] / 2 + 7] = n.pElement[S].pStruct.wTxtLen),
                                n.pElement[S].pStruct.wTxtLen > 0 &&
                                  ((_[S] = L._malloc(n.pElement[S].pStruct.wTxtLen)),
                                  L.writeArrayToMemory(n.pElement[S].pStruct.stringDataArray, _[S]),
                                  (L.HEAPU32[v[S] / 4 + 4] = _[S])));
                            ((L.HEAP32[g / 4 + 2] = v[S]), (g += 12));
                          }
                          if (
                            ((L.HEAP32[i / 4 + 2] = h),
                            (L.HEAP16[i / 2 + 6] = n.wInfoLen),
                            n.wInfoLen > 0)
                          ) {
                            var b = L._malloc(n.wInfoLen);
                            (L.writeArrayToMemory(n.pInfo, b), (L.HEAP32[i / 4 + 4] = b));
                          }
                          a = L._DRAW_InputTrackDataEx2(e, t, i, r, o);
                          for (S = 0; S < n.chCount; S++)
                            (ee == n.pElement[S].nStructType ||
                              (te == n.pElement[S].nStructType || ne == n.pElement[S].nStructType
                                ? n.pElement[S].pStruct.chCount > 0 && L._free(y[S])
                                : re == n.pElement[S].nStructType &&
                                  n.pElement[S].pStruct.wTxtLen > 0 &&
                                  L._free(_[S])),
                              L._free(v[S]));
                          (L._free(h), n.wInfoLen > 0 && L._free(InfoPtr));
                        } else
                          (L.writeArrayToMemory(n, i),
                            (a = L._DRAW_InputTrackDataEx2(e, t, i, r, o)));
                        L._free(i);
                      })(T, t, e, n, r);
                  }
              }
            },
            SetLifeCount: function (e) {
              w &&
                (function (e, t) {
                  L._DRAW_SetLifeCount(e, 2, t);
                })(T, e);
            },
            DrawDrawIVS: function (e) {
              w && le(T, e);
            },
            SetPanoVRMode: function (e, t, n, r) {
              return (
                0 === e
                  ? O(f, 1, !1)
                  : ((pe = !0),
                    (me = !1),
                    (he = {
                      PanoARMode: e,
                      ImageStride: n,
                      ImageWidth: n,
                      ImageHeight: r,
                      PanoARCustomParams: t,
                    })),
                !0
              );
            },
            GetModelRotate: function () {
              return (function (e) {
                var t = k._malloc(4),
                  n = k._malloc(4),
                  r = k._malloc(4);
                k._RENDER_3DGetModelRotate(e, t, n, r);
                var o = k.HEAPF32[t / 4],
                  a = k.HEAPF32[n / 4],
                  i = k.HEAPF32[r / 4];
                return (k._free(t), k._free(n), k._free(r), { x: o, y: a, z: i });
              })(f);
            },
            SetModelRotate: function (e, t, n) {
              return (function (e, t, n, r) {
                return k._RENDER_3DSetModelRotate(e, t, n, r);
              })(f, e, t, n);
            },
            SetStereoPerspectiveFovy: function (e) {
              return (function (e, t) {
                return k._RENDER_3DSetPerspectiveFovy(e, t);
              })(f, e);
            },
            GetVRCoord2DTrans: function (e, t) {
              return (function (e, t, n) {
                if (null == k) return { x: -1, y: -1 };
                var r = k._malloc(4),
                  o = k._malloc(4);
                k._RENDER_GetPanoARCoord2DTrans(e, t, n, r, o);
                var a = k.HEAPF32[r / 4],
                  i = k.HEAPF32[o / 4];
                return (k._free(r), k._free(o), { x: a, y: i });
              })(f, e, t);
            },
            GetVRCoord3DTrans: function (e, t) {
              return (function (e, t, n) {
                if (null == k) return { x: -1, y: -1 };
                var r = k._malloc(4),
                  o = k._malloc(4);
                k._RENDER_GetPanoARCoord3DTrans(e, t, n, r, o);
                var a = k.HEAP32[r / 4],
                  i = k.HEAP32[o / 4];
                return (k._free(r), k._free(o), { x: a, y: i });
              })(f, e, t);
            },
            ResetPlayState: function () {
              fe = !1;
            },
            GetCurrentFrameID: function () {
              return se;
            },
            SetPrintLogLevel: function (e) {
              (!(function (e) {
                void 0 !== window.REModule && (k = window.REModule)._RENDER_SetPrintLogLevel(e);
              })(e),
                (function (e) {
                  void 0 !== window.IVSModule && (L = window.IVSModule)._DRAW_SetPrintLogLevel(e);
                })(e));
            },
            SetPlayMethod: function (e, t, n) {
              ((ge = e),
                (ye = t),
                (_e = n),
                a.log(
                  "SetPlayMethod, m_nStartTime:" +
                    ge +
                    ", m_nSlowTime:" +
                    ye +
                    ", m_nFastTime:" +
                    _e,
                ));
            },
            SetColor: function (e, t, n, r) {
              return (function (e, t, n, r, o) {
                k._RENDER_ColorAdjust(e, 4 * t - 256, 2 * n, r, (45 * o) / 16 - 180);
              })(f, e, t, n, r);
            },
            SetDisplayRegion: function (e, t) {
              ve = t ? e : null;
            },
            SetRotateType: function (e) {
              Se = e;
            },
            SetErrorCallback: function (e) {
              be = e;
            },
            SetDecodeMode: function (e) {
              Te = e;
            },
            SetVideoFrameInfoCallback: function (e) {
              we = e;
            },
            SetSTFrameCallback: function (e) {
              Ae = e;
            },
            SetStreamOverCallback: function (e) {
              Ee = e;
            },
            SetStreamOver: function (e) {
              (a.trace("PlayMethod SetStreamOver, bOver:" + e), (Pe = e));
            },
            SetRenderOSDInfoEx: function (e) {
              if (null == ke || null == e) ((Ie = !0), (ke = e));
              else {
                var t = !1;
                if (
                  ke.screenFilled !== e.screenFilled ||
                  ke.horizontalSpacing !== e.horizontalSpacing ||
                  ke.verticalSpacing !== e.verticalSpacing ||
                  ke.osdCount !== e.osdCount
                )
                  t = !0;
                else
                  for (var n = 0; n < e.osdCount; n++) {
                    var r = ke.osdList[n],
                      o = e.osdList[n];
                    if (!r || !o) {
                      t = !0;
                      break;
                    }
                    if (
                      r.font !== o.font ||
                      r.fontStyle !== o.fontStyle ||
                      r.fontSize !== o.fontSize ||
                      r.fontHeight !== o.fontHeight ||
                      r.rotateAngle !== o.rotateAngle ||
                      r.pointX !== o.pointX ||
                      r.pointY !== o.pointY ||
                      r.colorR !== o.colorR ||
                      r.colorG !== o.colorG ||
                      r.colorB !== o.colorB ||
                      r.colorA !== o.colorA ||
                      r.szOsdData !== o.szOsdData
                    ) {
                      t = !0;
                      break;
                    }
                  }
                t && ((Ie = !0), (ke = e));
              }
            },
            DrawWaterMask: function (e, t, n) {
              if (ke && e && ke.osdCount && !(ke.osdCount <= 0) && ke.osdList && Ie) {
                var r = e.getContext("2d"),
                  o = e.width,
                  a = e.height;
                (r.clearRect(0, 0, o, a),
                  ke.screenFilled
                    ? (function (e, t, n, r, o, a) {
                        var i = o || n,
                          l = a || r,
                          u = n / i,
                          s = r / l,
                          c = Math.min(u, s),
                          f = (e.horizontalSpacing || 10) * c,
                          d = (e.verticalSpacing || 10) * c;
                        if (e.osdList && 0 !== e.osdList.length) {
                          var p = e.osdList[0];
                          if (p && p.szOsdData) {
                            var m = p.font || "sans-serif",
                              h = p.fontStyle || "normal",
                              g = (p.fontSize || 12) * (Math.min(n, r) / Math.min(i, l)),
                              y = (p.fontHeight || g) * c;
                            t.font = "".concat(h, " ").concat(g, "px ").concat(m);
                            var _ = t.measureText("A"),
                              v = _.actualBoundingBoxAscent + _.actualBoundingBoxDescent,
                              S = Math.max(y, 1.2 * v);
                            ((t.font = "".concat(h, " ").concat(g, "px ").concat(m)),
                              (t.fillStyle = "rgba("
                                .concat(p.colorR, ", ")
                                .concat(p.colorG, ", ")
                                .concat(p.colorB, ", ")
                                .concat(p.colorA / 255, ")")),
                              (t.textAlign = "left"),
                              (t.textBaseline = "top"));
                            for (
                              var P = p.szOsdData.split("\n"), b = 0, w = [], A = 0;
                              A < P.length;
                              A++
                            ) {
                              var E = t.measureText(P[A]).width;
                              (w.push(E), E > b && (b = E));
                            }
                            var M = 0;
                            if (P.length > 0) {
                              var T = t.measureText(P[0]);
                              (T.actualBoundingBoxAscent, T.actualBoundingBoxDescent);
                              M = P.length * S;
                            } else M = S;
                            for (
                              var C = b + f,
                                k = M + d,
                                I = Math.ceil((n + f) / C),
                                D = (I + 1) * (Math.ceil((r + d) / k) + 1),
                                R = 0;
                              R < D;
                              R++
                            ) {
                              var U = (R % (I + 1)) * C - f,
                                F = Math.floor(R / (I + 1)) * k - d;
                              if ((t.save(), p.rotateAngle)) {
                                (t.translate(U, F), t.rotate((p.rotateAngle * Math.PI) / 180));
                                for (var x = 0; x < P.length; x++) {
                                  var H = x * S;
                                  t.fillText(P[x], 0, H);
                                }
                              } else
                                for (var L = 0; L < P.length; L++) {
                                  var O = F + L * S;
                                  t.fillText(P[L], U, O);
                                }
                              t.restore();
                            }
                          }
                        }
                      })(ke, r, o, a, t, n)
                    : (function (e, t, n, r, o, a) {
                        for (
                          var i = o || n, l = a || r, u = n / i, s = r / l, c = (Math.min(u, s), 0);
                          c < e.osdCount;
                          c++
                        ) {
                          var f = e.osdList[c];
                          if (f && f.szOsdData) {
                            var d = f.font || "sans-serif",
                              p = f.fontStyle || "normal",
                              m = (f.fontSize || 12) * (Math.min(n, r) / Math.min(i, l)),
                              h = f.fontHeight || m;
                            t.font = "".concat(p, " ").concat(m, "px ").concat(d);
                            var g = t.measureText("A"),
                              y = g.actualBoundingBoxAscent + g.actualBoundingBoxDescent,
                              _ = Math.max(h, 1.2 * y);
                            ((t.font = "".concat(p, " ").concat(m, "px ").concat(d)),
                              (t.fillStyle = "rgba("
                                .concat(f.colorR, ", ")
                                .concat(f.colorG, ", ")
                                .concat(f.colorB, ", ")
                                .concat(f.colorA / 255, ")")),
                              (t.textAlign = "left"),
                              (t.textBaseline = "top"));
                            var v = f.szOsdData.split("\n"),
                              S = (f.pointX / 8192) * n,
                              P = (f.pointY / 8192) * r;
                            if ((t.save(), f.rotateAngle)) {
                              (t.translate(S, P), t.rotate((f.rotateAngle * Math.PI) / 180));
                              for (var b = 0; b < v.length; b++) {
                                var w = b * _;
                                t.fillText(v[b], 0, w);
                              }
                            } else
                              for (var A = 0; A < v.length; A++) {
                                var E = P + A * _;
                                t.fillText(v[A], S, E);
                              }
                            t.restore();
                          }
                        }
                      })(ke, r, o, a, t, n),
                  (Ie = !1));
              }
            },
            SetPlayDirection: function (e) {
              e !== De && ((De = e), g && g.clear(), y && y.clear());
            },
            ResetBuffer: function () {
              (g && g.clear(), y && y.clear());
            },
            OneByOne: function () {
              if (((h = !1), g && 0 !== g.size)) {
                var e = g.dequeue();
                null !== e && null !== e.buffer && null !== e.buffer.dataY && He(e);
              }
            },
          }),
          new xe()
        );
      };
      var ce = function () {
        var e = null,
          t = null,
          n = null,
          r = 0,
          o = 0,
          a = !1,
          i = 0,
          l = null,
          u = !1,
          s = new Float32Array(8e4),
          c = 0,
          f = null,
          d = !1,
          p = 0,
          m = 0,
          h = null,
          g = !1,
          y = !1,
          _ = 2,
          v = !1,
          S = null,
          P = !1,
          b = 0,
          w = 1;
        function A(t) {
          if (d) {
            o - e.currentTime < 0 && (o = 0);
            var r = null,
              a = new Int16Array(
                t.buffer,
                t.byteOffset,
                t.byteLength / Int16Array.BYTES_PER_ELEMENT,
              ),
              i = null;
            if (1 == w) {
              for (var u = new Float32Array(a.length), g = 0; g < a.length; g++)
                u[g] = a[g] / Math.pow(2, 15);
              if (
                ((s = (function (e, t, n) {
                  var r = e;
                  n + t.length >= r.length && (r = new Float32Array(r.length + 8e4)).set(r, 0);
                  return (r.set(t, n), r);
                })(s, u, c)),
                0 === (c += u.length))
              )
                return;
              var y = 0;
              if (c / u.length > 1 && (null !== l && (y = l * p), y >= c || null === l))
                return void (c = 0);
              ((r = e.createBuffer(w, c - y, p)).getChannelData(0).set(s.subarray(y, c)), (i = u));
            } else if (2 == w) {
              for (
                var _ = a.length / 2, v = new Float32Array(_), S = new Float32Array(_), P = 0;
                P < _;
                P++
              )
                16 === m
                  ? ((v[P] = a[2 * P] / 32768), (S[P] = a[2 * P + 1] / 32768))
                  : ((v[P] = (a[2 * P] - 128) / 128), (S[P] = (a[2 * P + 1] - 128) / 128));
              if (0 === v.length) return;
              ((r = e.createBuffer(w, v.length, p)).getChannelData(0).set(v),
                r.getChannelData(1).set(S),
                (i = v));
            }
            (h && h.InputPlayData(i),
              (c = 0),
              (f = null),
              ((f = e.createBufferSource()).buffer = r),
              f.connect(n),
              o || (o = e.currentTime + 0.01),
              f.start(o),
              (o += r.duration),
              (b += r.duration));
          } else o = 0;
        }
        function E() {}
        return (
          (E.prototype = {
            audioInit: function (r) {
              if (((o = 0), null !== e));
              else
                try {
                  return (
                    (window.AudioContext =
                      window.AudioContext ||
                      window.webkitAudioContext ||
                      window.mozAudioContext ||
                      window.oAudioContext ||
                      window.msAudioContext),
                    ((e = new AudioContext({ sampleRate: p })).onstatechange = function () {
                      if (e && "running" === e.state) {
                        if (y)
                          for (; null !== S && S.size > 0; ) {
                            A(S.dequeue().buffer);
                          }
                        a = !0;
                      }
                    }),
                    (S = new M(500)),
                    (t = e.createGain()),
                    (n = e.createBiquadFilter()).connect(t),
                    (n.type = "lowshelf"),
                    (n.frequency.value = 500),
                    (n.gain.value = -5),
                    t.connect(e.destination),
                    this.setVolume(r),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
            },
            play: function () {
              this.setVolume(r);
            },
            pause: function (t) {
              t
                ? e && "running" === e.state && e.suspend()
                : e && "suspended" === e.state && e.resume();
            },
            stop: function () {
              ((r = 0), t && (t.gain.value = 0), (o = 0), (e = null));
            },
            bufferAudio: function (t, n) {
              if ((void 0 !== n.nAudioChnNum && (w = n.nAudioChnNum), (!y || g) && null !== e)) {
                var i = o - e.currentTime;
                ((g && i > _) || i > 10) && (this.terminate(), this.audioInit(r));
              }
              if (!P && !y && null !== S && S.size < 31) S.enqueue(t);
              else if (a) {
                for (; null !== S && S.size > 0; ) {
                  A(S.dequeue().buffer);
                }
                A(t);
              } else null !== S && S.size < 500 && S.enqueue(t);
            },
            setSoundState: function (e) {
              d = e;
            },
            setVolume: function (e) {
              r = e;
              var n = e / 1;
              t && (n <= 0 ? ((t.gain.value = 0), (o = 0)) : (t.gain.value = n >= 1 ? 1 : n));
            },
            setPureAudioFlag: function (e) {
              y = e;
            },
            setTalkFlag: function (e) {
              g = e;
            },
            setVideoStartPlay: function (e) {
              P = e;
            },
            getVolume: function () {
              return r;
            },
            Mute: function (e) {
              if (e) ((t.gain.value = 0), (o = 0));
              else {
                var n = r / 1;
                n <= 0 ? ((t.gain.value = 0), (o = 0)) : (t.gain.value = n >= 1 ? 1 : n);
              }
            },
            terminate: function () {
              ((c = 0),
                (o = 0),
                (a = !1),
                (y = !1),
                (b = 0),
                (w = 1),
                e &&
                  "closed" !== e.state &&
                  ((f = null), (n = null), (t = null), e.close(), (e = null)),
                null !== S && (S.clear(), (S = null)));
            },
            setBufferingFlag: function (e, t) {
              "init" === t
                ? (i = e)
                : u && (0 === e || null == e ? (l = null) : ((l = e - i), (i = 0)), (u = !1));
            },
            getBufferingFlag: function () {
              return u;
            },
            setInitVideoTimeStamp: function (e) {
              i = e;
            },
            getInitVideoTimeStamp: function () {
              return i;
            },
            setSampleBits: function (e, t) {
              (p !== e && ((p = e), this.terminate(), this.audioInit(r)),
                (m = t),
                h && h.SetPlayParam(p, m));
            },
            getAudioBufTime: function () {
              if (null !== e) {
                var t = o - e.currentTime;
                return (t > 0 ? (t *= 1e3) : (t = 0), t);
              }
              return 0;
            },
            getAudioPlayedTime: function () {
              return null !== e ? (e.currentTime > b ? b : e.currentTime) : -1;
            },
            setAudioProcesser: function (e) {
              (h = e) && h.SetPlayParam(p, m);
            },
            setFrameRate: function (e) {
              !v && e < 5 && e > 0 && (_ = 2e3 / e / 1e3);
            },
            SetAudioPlayMethod: function (e) {
              ((v = !0), (_ = e));
            },
          }),
          new E()
        );
      };
      var fe = function (e, t) {
        e = e;
        var n = t,
          r = null,
          o = "",
          a = null,
          i = null,
          l = null,
          u = null,
          s = null,
          c = null,
          f = null,
          d = null,
          p = 1,
          m = { timestamp: 0, timestamp_usec: 0, timezone: 0 },
          h = { timestamp: 0, timestamp_usec: 0, timezone: 0 },
          g = !1,
          y = null,
          _ = null,
          v = null,
          S = !1,
          P = !0,
          b = !1,
          A = [],
          E = 0.5,
          M = null,
          T = null,
          C = null,
          k = 0,
          I = 0,
          D = !1,
          R = null,
          U = "png",
          F = 1,
          x = w(),
          H = null,
          L = 0,
          O = 0,
          B = 0,
          V = null,
          G = !1,
          z = !1,
          N = [],
          W = {},
          j = 25,
          Y = 0.5,
          K = !1,
          q = !1;
        function X() {}
        function J() {
          (Q(), (q = !0));
        }
        function $() {
          var e = 0;
          if (null !== y)
            for (e = 0; e < y.length; e++)
              C.updating || C.removeEventListener(y[e].type, y[e].function);
          if (null !== v)
            for (e = 0; e < v.length; e++) T.removeEventListener(v[e].type, v[e].function);
          if (null !== _)
            for (e = 0; e < _.length; e++) M.removeEventListener(_[e].type, _[e].function);
        }
        function Q() {
          if (null === T || "ended" === T.readyState)
            return (
              (function (e) {
                ((v = []).push({ type: "sourceopen", function: J }),
                  v.push({ type: "error", function: ae }));
                for (var t = 0; t < v.length; t++) e.addEventListener(v[t].type, v[t].function);
              })((T = new MediaSource())),
              (M.src = window.URL.createObjectURL(T)),
              e.log("videoMediaSource::appendInitSegment new MediaSource()"),
              !1
            );
          if ((e.log("videoMediaSource::appendInitSegment start"), 0 === T.sourceBuffers.length)) {
            T.duration = 0;
            var t = 'video/mp4; codecs="' + o + '"';
            if (0 == o.length) return !1;
            if (!MediaSource.isTypeSupported(t))
              return (e.log("not support" + t), f && f("InitError"), !1);
            !(function (e) {
              ((y = []).push({ type: "error", function: ie }),
                y.push({ type: "updateend", function: re }),
                y.push({ type: "update", function: oe }));
              for (var t = 0; t < y.length; t++)
                e.updating || e.addEventListener(y[t].type, y[t].function);
            })((C = T.addSourceBuffer(t)));
          }
          var n = r();
          return null === n
            ? (T.endOfStream("network"), !1)
            : (C.updating || 0 !== A.length ? A.push(n) : C.appendBuffer(n),
              e.log("videoMediaSource::appendInitSegment end, codecInfo = " + o),
              !0);
        }
        function Z() {
          M.paused && (l(), S || G || M.play());
        }
        function ee() {
          M.paused || P || (e.log("pause"), M.pause());
        }
        function te() {
          N.length &&
            (function (t) {
              if (
                (!K && q && (K = Q()),
                null !== C && "closed" !== T.readyState && "ended" !== T.readyState)
              )
                try {
                  if (A.length > 0)
                    return (e.log("segmentWaitDecode.length: " + A.length), void A.push(t));
                  C.updating
                    ? (e.log("updating.........."), A.push(t))
                    : (C.appendBuffer(t), G && (W.buffer = t));
                } catch (t) {
                  (e.log("videoMediaSource::appendNextMediaSegment error >> initVideo"),
                    (A.length = 0),
                    V && V({ errorCode: 102 }));
                }
            })(N.shift());
        }
        function ne() {
          if (null !== T)
            try {
              if (C && C.buffered.length > 0) {
                if (
                  ((function () {
                    var e = 1 * C.buffered.start(C.buffered.length - 1),
                      t = 1 * C.buffered.end(C.buffered.length - 1);
                    t - e > 60 && C.remove(e, t - 10);
                  })(),
                  (z && !G) ||
                    (M.duration > Y &&
                      ((M.currentTime = (M.duration - Y).toFixed(3)), (Y += j < 10 ? 0.5 : 0.1))),
                  !n && M && M.duration - M.currentTime > 8)
                ) {
                  if ((V && V({ errorCode: 103 }), C.updating)) return;
                  var t = M.duration - 0.1;
                  M.currentTime = t.toFixed(3);
                }
                var r = 1 * C.buffered.start(C.buffered.length - 1),
                  o = 1 * C.buffered.end(C.buffered.length - 1);
                if ((0 === M.currentTime ? o - r : o - M.currentTime) >= Y + 0.2) {
                  if ((e.log("跳秒"), C.updating)) return;
                  var a = o - 0.1;
                  M.currentTime = a.toFixed(3);
                }
              }
            } catch (e) {}
        }
        function re() {
          A.length > 0 && C && !C.updating && (C.appendBuffer(A[0]), A.shift());
        }
        function oe() {}
        function ae() {
          (console.log("videoMediaSource::onSourceError"), f && f("SourceError"));
        }
        function ie() {
          (console.log("videoMediaSource::onSourceBufferErrormsg"), f && f("SourceBufferError"));
        }
        function le() {
          (console.log("videoMediaSource::onError"), ee(), f && f("Error"));
        }
        function ue() {
          if (((S = !0), (P = !1), (z = !0), !D)) {
            (e.log("HW Play Start."), (D = !0));
            var t = { decodeMode: "video" };
            ((t.width = M.videoWidth),
              (t.height = M.videoHeight),
              1 == a ? (t.encodeMode = "H264") : 2 == a && (t.encodeMode = "H265"),
              s && s(t));
          }
        }
        function se() {
          ((S = !1), (P = !0), e.log("硬解码暂停播放"));
        }
        function ce() {}
        function fe() {
          null != C && ne();
        }
        function de() {
          l();
        }
        function pe() {
          Z();
        }
        function me() {
          if ((e.log("需要缓冲下一帧"), (b = !1), 0 == I)) ((k = Date.now()), I++);
          else {
            I++;
            var t = Date.now() - k;
            (e.log("diffTime: " + t + "  Count: " + I),
              I >= 5 &&
                t < 6e4 &&
                E <= 1 &&
                ((E += 0.1), (I = 0), (k = 0), e.log("delay + 0.1 = " + E)));
          }
        }
        function he() {
          e.log("Can play !");
        }
        function ge() {
          (e.log("Can play without waiting"), (b = !0));
        }
        function ye() {
          e.log("loadedmetadata");
        }
        function _e(e, t) {
          var n = document.createElement("canvas");
          ((n.width = M.videoWidth), (n.height = M.videoHeight));
          var r = n.getContext("2d");
          r.drawImage(M, 0, 0, n.width, n.height);
          for (var o = 0; o < e.length; o++) e[o] && r.drawImage(e[o], 0, 0, n.width, n.height);
          for (
            var a = n.toDataURL("image/jpeg", 1),
              i = atob(a.substring("data:image/jpeg;base64,".length)),
              l = new Uint8Array(i.length),
              u = 0,
              s = i.length;
            u < s;
            ++u
          )
            l[u] = i.charCodeAt(u);
          c && c(l);
          var f = new Blob([l.buffer], { type: "image/jpeg" });
          (De(f, t), (f = null));
        }
        X.prototype = {
          init: function (t) {
            ((d = w()),
              e.log("videoMediaSource::init browserType = " + d),
              ((M = t).autoplay = "safari" !== d),
              (M.controls = !1),
              (M.preload = "auto"),
              (function (e) {
                ((_ = []).push({ type: "durationchange", function: fe }),
                  _.push({ type: "playing", function: ue }),
                  _.push({ type: "error", function: le }),
                  _.push({ type: "pause", function: se }),
                  _.push({ type: "timeupdate", function: ce }),
                  _.push({ type: "resize", function: de }),
                  _.push({ type: "seeked", function: pe }),
                  _.push({ type: "waiting", function: me }),
                  _.push({ type: "canplaythrough", function: ge }),
                  _.push({ type: "canplay", function: he }),
                  _.push({ type: "loadedmetadata", function: ye }));
                for (var t = 0; t < _.length; t++) e.addEventListener(_[t].type, _[t].function);
              })(M),
              Q());
          },
          setInitSegmentFunc: function (e) {
            r = e;
          },
          getVideoElement: function () {
            return M;
          },
          setCodecInfo: function (e) {
            o = e;
          },
          setMediaSegment: function (e) {
            (N.push(e), G || te());
          },
          capturePic: function (e, t) {
            (R && clearInterval(R),
              b || "edge" === x
                ? _e(e, t)
                : (R = setInterval(
                    function () {
                      b && (_e(e, t), clearInterval(R));
                    },
                    200,
                  )));
          },
          getCapture: function (e, t, n) {
            (R && clearInterval(R),
              (F = n || 1),
              (U = "png"),
              ("jpg" !== t && "jpeg" !== t) || (U = "jpeg"));
            var r = document.createElement("canvas"),
              o = null;
            return (
              (r.width = M.videoWidth),
              (r.height = M.videoHeight),
              (b || "edge" === x || b) &&
                (r.getContext("2d").drawImage(M, 0, 0, r.width, r.height),
                (o = r.toDataURL("image/" + U, F))),
              o
            );
          },
          setInitSegment: function () {
            Q();
          },
          ResetInitSegmentFlag: function () {
            K = !1;
          },
          setTimeStamp: function (e, t) {
            i = e;
          },
          setVideoSizeCallback: function (e) {
            l = e;
          },
          setAudioStartCallback: function (e) {
            u = e;
          },
          setMseErrorCallback: function (e) {
            f = e;
          },
          getPlaybackTimeStamp: function () {
            return i;
          },
          setPlaySpeed: function (e) {
            p != e && ((p = e), (M.playbackRate = e));
          },
          setvideoTimeStamp: function (e) {
            var t = Math.abs(m.timestamp - e.timestamp) > 3;
            (h.timestamp,
              !0 === t &&
                (0,
                u((h = e).timestamp, "init"),
                0 !== m.timestamp && g && (M.currentTime = T.duration - 0.1),
                null),
              (m = e));
          },
          pause: function (e) {
            ((G = e), e ? ee() : Z());
          },
          play: function () {
            G = !1;
          },
          setPlaybackFlag: function (e) {
            g = e;
          },
          setTimeStampInit: function () {
            (null, (h = { timestamp: 0, timestamp_usec: 0, timezone: 0 }));
          },
          close: function () {
            ($(), ee());
          },
          setBeginDrawCallback: function (e) {
            s = e;
          },
          setCapturePicDataCallBack: function (e) {
            c = e;
          },
          setErrorCallback: function (e) {
            V = e;
          },
          terminate: function () {
            null !== M &&
              ($(),
              "open" === T.readyState && (C && T.removeSourceBuffer(C), T.endOfStream()),
              (C = null),
              (T = null),
              (M = null),
              R && (clearInterval(R), (R = null)),
              H && (clearInterval(H), (H = null)),
              (B = 0),
              (O = 0),
              (L = 0),
              (K = !1),
              (q = !1),
              (D = !1));
          },
          getDuration: function () {
            return M.duration - M.currentTime;
          },
          setFPS: function (e) {
            e && (j = e);
          },
          setRtspOver: function () {
            M.duration.toFixed(4) - 0 == M.currentTime.toFixed(4) - 0 ||
              ((L = parseInt(M.currentTime)),
              (O = parseInt(M.duration)),
              (H = setInterval(
                function () {
                  L === parseInt(M.currentTime) && O === parseInt(M.duration)
                    ? B++ > 10 && (H && clearInterval(H), (H = null))
                    : parseInt(M.currentTime) >= parseInt(M.duration)
                      ? (H && clearInterval(H), (H = null))
                      : ((L = parseInt(M.currentTime)), (O = parseInt(M.duration)), (B = 0));
                },
                150,
              )));
          },
          getVideoBufferQueueSize: function () {
            return N.length;
          },
          playNextFrame: function () {
            te();
          },
          getCurFrameInfo: function () {
            var e;
            return (
              (W.src =
                (((e = document.createElement("canvas")).width = M.videoWidth),
                (e.height = M.videoHeight),
                e.getContext("2d").drawImage(M, 0, 0, e.width, e.height),
                e.toDataURL())),
              W
            );
          },
          setDecodeType: function (e) {
            a = e;
          },
          ResetPlayState: function () {
            D = !1;
          },
        };
        var ve,
          Se,
          Pe,
          be,
          we,
          Ae,
          Ee,
          Me,
          Te,
          Ce,
          ke,
          Ie,
          De =
            ((ve = window),
            (Se = ve.document),
            (Pe = function () {
              return ve.URL || ve.webkitURL || ve;
            }),
            (be = Se.createElementNS("http://www.w3.org/1999/xhtml", "a")),
            (we = "download" in be),
            (Ae = /constructor/i.test(ve.HTMLElement)),
            (Ee = /CriOS\/[\d]+/.test(navigator.userAgent)),
            (Me = function (e) {
              (ve.setImmediate || ve.setTimeout)(
                function () {
                  throw e;
                },
                0,
              );
            }),
            (Te = function (e) {
              setTimeout(
                function () {
                  "string" == typeof e ? Pe().revokeObjectURL(e) : e.remove();
                },
                4e4,
              );
            }),
            (Ce = function (e) {
              return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                e.type,
              )
                ? new Blob([String.fromCharCode(65279), e], { type: e.type })
                : e;
            }),
            (Ie = (ke = function (e, t, n) {
              n || (e = Ce(e));
              var r,
                o = this,
                a = "application/octet-stream" === e.type,
                i = function () {
                  !(function (e, t, n) {
                    for (var r = (t = [].concat(t)).length; r--; ) {
                      var o = e["on" + t[r]];
                      if ("function" == typeof o)
                        try {
                          o.call(e, n || e);
                        } catch (e) {
                          Me(e);
                        }
                    }
                  })(o, "writestart progress write writeend".split(" "));
                };
              if (((o.readyState = o.INIT), we))
                return (
                  (r = Pe().createObjectURL(e)),
                  void setTimeout(function () {
                    var e, n;
                    ((be.href = r),
                      (be.download = t),
                      (e = be),
                      (n = new MouseEvent("click")),
                      e.dispatchEvent(n),
                      i(),
                      Te(r),
                      (o.readyState = o.DONE));
                  })
                );
              !(function () {
                if ((Ee || (a && Ae)) && ve.FileReader) {
                  var t = new FileReader();
                  return (
                    (t.onloadend = function () {
                      var e = Ee
                        ? t.result
                        : t.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                      (ve.open(e, "_blank") || (ve.location.href = e),
                        (e = void 0),
                        (o.readyState = o.DONE),
                        i());
                    }),
                    t.readAsDataURL(e),
                    void (o.readyState = o.INIT)
                  );
                }
                (r || (r = Pe().createObjectURL(e)),
                  a ? (ve.location.href = r) : ve.open(r, "_blank") || (ve.location.href = r),
                  (o.readyState = o.DONE),
                  i(),
                  Te(r));
              })();
            }).prototype),
            "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
              ? function (e, t, n) {
                  return (
                    (t = t || e.name || "download"),
                    n || (e = Ce(e)),
                    navigator.msSaveOrOpenBlob(e, t)
                  );
                }
              : ((Ie.readyState = Ie.INIT = 0),
                (Ie.WRITING = 1),
                (Ie.DONE = 2),
                (Ie.error =
                  Ie.onwritestart =
                  Ie.onprogress =
                  Ie.onwrite =
                  Ie.onabort =
                  Ie.onerror =
                  Ie.onwriteend =
                    null),
                function (e, t, n) {
                  return null == t || null == t ? null : new ke(e, t || e.name || "download", n);
                }));
        return new X();
      };
      function de(e) {
        return (de =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function pe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          (t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
        }
        return n;
      }
      function me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? pe(Object(n), !0).forEach(function (t) {
                he(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : pe(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      function he(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != de(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != de(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == de(t) ? t : t + "";
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ge(e, t) {
        return (
          (t = (t = t.toLowerCase())[0].toUpperCase() + t.substr(1)),
          Object.prototype.toString.call(e) === "[object " + t + "]"
        );
      }
      function ye(e, t, n) {
        if ((void 0 === n && (n = 2), void 0 === t && (t = 0), (e = e.toString()).length >= n))
          return e;
        var r = n - e.length;
        return new Array(r).fill(String(t)).join("") + e;
      }
      function _e(e, t) {
        return void 0 !== e && e
          ? ((t = t || new Date()),
            (e = (e = (e = (e = (e = (e = e.replace(/y/gi, ye(t.getFullYear()), 0)).replace(
              /m/gi,
              ye(t.getMonth() + 1),
              0,
            )).replace(/d/gi, ye(t.getDate()), 0)).replace(/h/gi, ye(t.getHours()), 0)).replace(
              /i/gi,
              ye(t.getMinutes()),
              0,
            )).replace(/s/gi, ye(t.getSeconds()), 0)))
          : "";
      }
      function ve(e, t) {
        var n = (e = e || {}).nameFormat || ["ymd_his"];
        t = t || new Date();
        var r = "";
        if (ge(n, "string")) n = [n, {}];
        else {
          if (!ge(n, "array"))
            return void (function (e) {
              throw new Error(e);
            })("name format must be string or array");
          (ge(n[0], "string") || (n[0] = "ymd_his"), ge(n[1], "object") || (n[1] = {}));
        }
        var o = n[0].split(/\{(?:[^{}]+)\}/),
          a = n[1];
        n[0].replace(/\{([^{}]*)\}/g, function (e, t, n) {
          o.shift();
          ((r += _e()), (r += t in a ? a[t] : e));
        });
        var i = o.shift();
        return (r += _e(i, t));
      }
      function Se(e, t) {
        ((this.name = e),
          (this.allowUpDateName = !0),
          (this.byteLength = 0),
          (this.options = t),
          (this.startTime = new Date().toLocaleString()));
      }
      ((Se.prototype.setEndTime = function () {
        this.endTime = new Date().toLocaleString();
      }),
        (Se.prototype.updateNameByStream = function (e, t) {
          if (this.allowUpDateName) {
            var n = new Uint8Array(t),
              r = ((n[19] << 24) + (n[18] << 16) + (n[17] << 8) + n[16]) >>> 0,
              o =
                "20" +
                (r >> 26) +
                "/" +
                ((r >> 22) & 15) +
                "/" +
                ((r >> 17) & 31) +
                " " +
                ((r >> 12) & 31) +
                ":" +
                ((r >> 6) & 63) +
                ":" +
                (63 & r);
            ((this.name = ve(e, new Date(o))), (this.allowUpDateName = !1), (n = null));
          }
          t = null;
        }));
      var Pe = new (function () {
        var e = { count: 0, total: 0, group: [] },
          t = function () {};
        return (
          (t.prototype.add = function (t) {
            (e.count++, (e.total += t.byteLength), e.group.push(t));
          }),
          (t.prototype.get = function (t) {
            return t in e ? e[t] : e;
          }),
          new t()
        );
      })();
      var be = function (e) {
        var t = 1048576,
          n = null,
          r = null,
          o = 0,
          a = void 0,
          i = null,
          l = 0,
          u = null,
          s = !1,
          c = e;
        function f() {
          ((this.onMessage = function () {}),
            (this.postMessage = function (e) {
              this.__onMessage(e);
            }),
            (this.__postMessage = function (e) {
              this.onMessage(e);
            }));
        }
        return (
          (f.prototype.__onMessage = function (e) {
            if ("init" === e.type || null !== u) {
              var t = e;
              switch (t.type) {
                case "init":
                  this.init(t.options);
                  break;
                case "addBuffer":
                  this.addBuffer(t);
                  break;
                case "close":
                  this.close();
                  break;
                case "cancel":
                  this.cancel();
              }
            }
          }),
          (f.prototype.init = function (e) {
            null !== e.recordName &&
              void 0 !== e.recordName &&
              ((this.fullSize = e.fullSize || 1 / 0),
              (this.singleSize = e.singleSize + 20 * t || 520 * t),
              (a = "init"),
              (s = !1),
              (u = e.recordName),
              (this.limitOptions = Object.assign({ limitBy: "fullSize" }, e.limitOptions)),
              (this.nameOptions = Object.assign(
                { namedBy: "date", nameFormat: ["ymd_his", {}] },
                e.nameOptions,
              )));
          }),
          (f.prototype._malloc = function (e) {
            (n && r && ((r = null), (n = null)), (n = new ArrayBuffer(e)), (r = new DataView(n)));
            var t = this.nameOptions,
              o = "";
            if (null != u) o = u;
            else
              switch (this.nameOptions.namedBy.toLowerCase()) {
                case "date":
                  o = ve(t);
                  break;
                default:
                  o = ve();
              }
            i = new Se(o);
          }),
          (f.prototype._initVideoMem = function () {
            !n && this.singleSize && this._malloc(this.singleSize);
          }),
          (f.prototype.appendVideoBuf = function (e, n, a) {
            var i = e.byteLength,
              u = 0;
            if (5 == l || 6 == l) {
              u = n + i;
              for (var f = n; f < u; f++) r.setUint8(f, e[f - n]);
              u > o && (o = u);
            } else {
              u = o + i;
              for (f = o; f < u; f++) r.setUint8(f, e[f - o]);
              o = u;
            }
            (this.__postMessage({ type: "pendding", size: o, total: this.singleSize }),
              u > this.singleSize - 20 * t &&
                !s &&
                !c &&
                ((s = !0), this.__postMessage({ type: "close" })));
          }),
          (f.prototype.addBuffer = function (e) {
            if ("closed" !== a) {
              var t = e.buffer,
                n = e.offset;
              ((l = e.recordType), this._initVideoMem(), (a = "addBuffer"));
              var r = t.length,
                i = 0;
              ((i = 5 == l || 6 == l ? n + r : o + r),
                Pe.get("total") + i > this.fullSize ? this.close() : this.appendVideoBuf(t, n));
            }
          }),
          (f.prototype.inNodePlace = function () {
            if ("addBuffer" === a) {
              ((a = "download"),
                i.updateNameByStream(this.nameOptions, n.slice(0, 20)),
                (i.byteLength = o),
                i.setEndTime(),
                Pe.add(i));
              var e = n.slice(0, o);
              if (
                (this.reset(),
                this.__postMessage({ type: "download", data: me(me({}, i), {}, { buffer: e }) }),
                (e = null),
                "count" === this.limitOptions.limitBy)
              ) {
                var t = this.limitOptions.count;
                t && t === Pe.get("count") && this.close();
              }
            }
          }),
          (f.prototype.reset = function () {
            ((o = 0), this._malloc(this.singleSize));
          }),
          (f.prototype.close = function () {
            (this.inNodePlace(),
              "closed" !== a &&
                void 0 !== a &&
                ((a = "closed"),
                this.__postMessage({ type: "closed", message: "record was closed" }),
                (n = null),
                (r = null),
                (i = null)));
          }),
          (f.prototype.cancel = function () {
            "closed" !== a && void 0 !== a && ((a = "closed"), (n = null), (r = null), (i = null));
          }),
          new f()
        );
      };
      function we(e, t, n) {
        return n && e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
      }
      function Ae(e, t) {
        ((this.canvas = e), (this.ctx = t));
      }
      ((Ae.prototype.DrawRect = function (e, t, n, r) {
        this.ctx &&
          (this.ctx.save(),
          (this.ctx.strokeStyle = "rgb(".concat(t, ",").concat(n, ",").concat(r, ")")),
          (this.ctx.lineWidth = 2),
          this.ctx.strokeRect(e.left, e.top, e.right - e.left, e.bottom - e.top),
          this.ctx.restore());
      }),
        (Ae.prototype.DrawLine = function (e, t, n, r, o) {
          this.ctx &&
            (this.ctx.save(),
            (this.ctx.strokeStyle = "rgb(".concat(n, ",").concat(r, ",").concat(o, ")")),
            this.ctx.beginPath(),
            this.ctx.moveTo(e.x, e.y),
            this.ctx.lineTo(t.x, t.y),
            this.ctx.stroke(),
            this.ctx.restore());
        }));
      var Ee = function () {
        ((this.m_showMode = 1),
          (this.m_frames = []),
          (this.m_panoFrame = { left: 0, top: 0, right: 0, bottom: 0 }),
          (this.m_pointChains = {}));
      };
      ((Ee.prototype.SetShowMode = function (e) {
        this.m_showMode = e;
      }),
        (Ee.prototype.SplitWindow = function (e) {
          if (!e) return !1;
          var t = e.width,
            n = e.height;
          this.m_frames = [];
          var r = { left: 0, top: 0, right: 0, bottom: 0 };
          switch (this.m_showMode) {
            case 1:
            case 5:
              ((this.m_panoFrame.left = 0),
                (this.m_panoFrame.top = 0),
                (this.m_panoFrame.right = t >> 1),
                (this.m_panoFrame.bottom = n >> 1));
              for (var o = 1; o <= 3; o++)
                (((r = { left: 0, top: 0, right: 0, bottom: 0 }).left = (o % 2) * (t >> 1)),
                  (r.top = (o >> 1) * (n >> 1)),
                  (r.right = r.left + (t >> 1)),
                  (r.bottom = r.top + (n >> 1)),
                  this.m_frames.push(r));
              break;
            case 2:
              for (var a = (0.704 * n) >> 0, i = 0; i < 6; i++)
                (((r = { left: 0, top: 0, right: 0, bottom: 0 }).left = ((i % 3) * (t / 3)) >> 0),
                  (r.top = ((i / 3) >> 0) * (a >> 1)),
                  (r.right = r.left + ((t / 3) >> 0)),
                  (r.bottom = r.top + (a >> 1)),
                  this.m_frames.push(r));
              ((this.m_panoFrame.left = 0),
                (this.m_panoFrame.top = a),
                (this.m_panoFrame.right = t),
                (this.m_panoFrame.bottom = n));
              break;
            case 3:
            case 4:
              var l = 0.36 * t,
                u = 0.68 * t,
                s = 0.5 * n;
              ((this.m_panoFrame.left = 0),
                (this.m_panoFrame.top = 0),
                (this.m_panoFrame.right = l),
                (this.m_panoFrame.bottom = n));
              for (var c = 0; c < 4; c++) {
                var f = c % 2,
                  d = (c / 2) >> 0;
                (((r = { left: 0, top: 0, right: 0, bottom: 0 }).left = 0 === f ? l : u),
                  (r.top = d * s),
                  (r.right = 0 === f ? u : t),
                  (r.bottom = 0 === d ? s : n),
                  this.m_frames.push(r));
              }
              break;
            case 6:
            case 7:
              ((l = t / 3), (u = (2 * t) / 3), (s = n / 3));
              var p = (2 * n) / 3;
              ((this.m_panoFrame.left = l),
                (this.m_panoFrame.top = s),
                (this.m_panoFrame.right = u),
                (this.m_panoFrame.bottom = p));
              for (
                var m = [
                    { left: 0, top: 0, right: l, bottom: s },
                    { left: l, top: 0, right: u, bottom: s },
                    { left: u, top: 0, right: t, bottom: s },
                    { left: 0, top: s, right: l, bottom: p },
                    { left: u, top: s, right: t, bottom: p },
                    { left: 0, top: p, right: l, bottom: n },
                    { left: l, top: p, right: u, bottom: n },
                    { left: u, top: p, right: t, bottom: n },
                  ],
                  h = 0;
                h < 8;
                h++
              )
                (((r = { left: 0, top: 0, right: 0, bottom: 0 }).left = m[h].left),
                  (r.top = m[h].top),
                  (r.right = m[h].right),
                  (r.bottom = m[h].bottom),
                  this.m_frames.push(r));
              break;
            case 8:
            case 9:
              ((l = 0.36 * t), (u = 0.68 * t));
              ((this.m_panoFrame.left = 0),
                (this.m_panoFrame.top = 0),
                (this.m_panoFrame.right = l),
                (this.m_panoFrame.bottom = n),
                ((r = { left: 0, top: 0, right: 0, bottom: 0 }).left = l),
                (r.top = 0),
                (r.right = u),
                (r.bottom = n),
                this.m_frames.push(r),
                ((r = { left: 0, top: 0, right: 0, bottom: 0 }).left = u),
                (r.top = 0),
                (r.right = t),
                (r.bottom = n),
                this.m_frames.push(r));
              break;
            default:
              return !1;
          }
          return !0;
        }),
        (Ee.prototype.Draw = function (e, t, n) {
          if (e && t) {
            this.SplitWindow(e);
            var r = new Ae(e, t);
            if (1 === this.m_showMode || 5 === this.m_showMode)
              for (var o = 0; o < this.m_frames.length; o++) {
                var a = [255, 0, 0];
                (1 === o && (a = [0, 255, 0]),
                  2 === o && (a = [0, 0, 255]),
                  r.DrawRect(this.m_frames[o], a[0], a[1], a[2]),
                  this.DrawPointChain(r, this.m_panoFrame, o + 1, n, a));
              }
            else if (2 === this.m_showMode) {
              for (var i = 0; i < this.m_frames.length; i++) {
                var l = [255, 0, 0];
                (1 === i && (l = [0, 255, 0]),
                  2 === i && (l = [0, 0, 255]),
                  3 === i && (l = [218, 112, 214]),
                  4 === i && (l = [0, 204, 255]),
                  5 === i && (l = [225, 216, 0]),
                  r.DrawRect(this.m_frames[i], l[0], l[1], l[2]));
              }
              for (
                var u = [
                    [255, 0, 0],
                    [0, 255, 0],
                    [0, 0, 255],
                    [218, 112, 214],
                    [0, 204, 255],
                    [225, 216, 0],
                  ],
                  s = 0;
                s < this.m_frames.length;
                s++
              )
                this.DrawPointChain(r, this.m_panoFrame, s, n, u[s % u.length]);
            } else if (3 === this.m_showMode || 4 === this.m_showMode) {
              r.DrawRect(this.m_panoFrame, 255, 0, 0);
              u = [
                [0, 255, 0],
                [0, 0, 255],
                [218, 112, 214],
                [255, 165, 0],
              ];
              for (var c = 0; c < this.m_frames.length; c++)
                (r.DrawRect(this.m_frames[c], u[c][0], u[c][1], u[c][2]),
                  this.DrawPointChain(r, this.m_panoFrame, c + 1, n, u[c]));
            } else if (6 === this.m_showMode || 7 === this.m_showMode) {
              r.DrawRect(this.m_panoFrame, 255, 0, 0);
              u = [
                [0, 255, 0],
                [0, 0, 255],
                [255, 255, 0],
                [218, 112, 214],
                [0, 204, 255],
                [139, 0, 0],
                [255, 165, 0],
                [144, 238, 144],
              ];
              for (var f = 0; f < this.m_frames.length; f++)
                (r.DrawRect(this.m_frames[f], u[f][0], u[f][1], u[f][2]),
                  f < 4
                    ? this.DrawPointChain(r, this.m_panoFrame, f, n, u[f])
                    : this.DrawPointChain(r, this.m_panoFrame, f + 1, n, u[f]));
            } else if (8 === this.m_showMode || 9 === this.m_showMode) {
              r.DrawRect(this.m_panoFrame, 255, 0, 0);
              u = [
                [0, 255, 0],
                [0, 0, 255],
              ];
              for (var d = 0; d < this.m_frames.length; d++)
                (r.DrawRect(this.m_frames[d], u[d][0], u[d][1], u[d][2]),
                  this.DrawPointChain(r, this.m_panoFrame, d + 1, n, u[d]));
            }
          }
        }),
        (Ee.prototype.DrawPointChain = function (e, t, n, r, o) {
          if (r) {
            var a = 0;
            (2 !== this.m_showMode &&
              7 !== this.m_showMode &&
              5 !== this.m_showMode &&
              4 !== this.m_showMode) ||
              (a = 1);
            var i = r(n, a);
            if (i && i.length) {
              this.m_pointChains[n] = i;
              for (
                var l = t.right - t.left || 1, u = t.bottom - t.top || 1, s = [], c = 0;
                c < i.length;
                c++
              ) {
                var f = i[c].x,
                  d = i[c].y;
                (-1 === f && -1 === d) || (0 === f && 0 === d)
                  ? s.push({ x: 0, y: 0 })
                  : s.push({
                      x: (((f * l) / 8191) >> 0) + t.left,
                      y: (((d * u) / 8191) >> 0) + t.top,
                    });
              }
              for (var p = 0; p < s.length - 1; p++) {
                var m = s[p],
                  h = s[p + 1];
                (0 === m.x && 0 === m.y) ||
                  (0 === h.x && 0 === h.y) ||
                  (m.x === this.m_panoFrame.left && h.x === this.m_panoFrame.right) ||
                  (m.x === this.m_panoFrame.right && h.x === this.m_panoFrame.left) ||
                  e.DrawLine(m, h, o[0], o[1], o[2]);
              }
            }
          }
        }),
        (Ee.prototype.GetWinIdByPosition = function (e, t, n) {
          if (!e) return -1;
          if (1 === this.m_showMode || 5 === this.m_showMode) {
            for (var r = 0; r < this.m_frames.length; r++)
              if (we(t, n, this.m_frames[r])) return r + 1;
            return we(t, n, this.m_panoFrame) ? 0 : -1;
          }
          if (2 === this.m_showMode) {
            for (var o = 0; o < this.m_frames.length; o++) if (we(t, n, this.m_frames[o])) return o;
            return we(t, n, this.m_panoFrame) ? 6 : -1;
          }
          if (3 === this.m_showMode || 4 === this.m_showMode) {
            if (we(t, n, this.m_panoFrame)) return 0;
            for (var a = 0; a < this.m_frames.length; a++)
              if (we(t, n, this.m_frames[a])) return a + 1;
            return -1;
          }
          if (6 === this.m_showMode || 7 === this.m_showMode) {
            if (we(t, n, this.m_panoFrame)) return 4;
            for (var i = 0; i < this.m_frames.length; i++)
              if (we(t, n, this.m_frames[i])) return i < 4 ? i : i + 1;
            return -1;
          }
          if (8 === this.m_showMode || 9 === this.m_showMode) {
            if (we(t, n, this.m_panoFrame)) return 0;
            for (var l = 0; l < this.m_frames.length; l++)
              if (we(t, n, this.m_frames[l])) return l + 1;
            return -1;
          }
          return -1;
        }),
        (Ee.prototype.GetPointChain = function (e) {
          return this.m_pointChains[e] || null;
        }),
        (Ee.prototype.ClearPointChains = function () {
          this.m_pointChains = {};
        }));
      var Me = Ee,
        Te = function (e) {
          var t = e;
          function n() {}
          function r(e) {
            var t, n;
            if ((t = e < 0 ? ~e >> 4 : e >> 4) > 15) {
              for (n = 1; t > 31; ) ((t >>= 1), n++);
              ((t -= 16), (t += n << 4));
            }
            return (e >= 0 && (t |= 128), 85 ^ t);
          }
          function o(e) {
            var t, n, r;
            for (
              (n = e < 0 ? 33 + (~e >> 2) : 33 + (e >> 2)) > 8191 && (n = 8191), t = n >> 6, r = 1;
              0 != t;
            )
              (r++, (t >>= 1));
            var o = ((8 - r) << 4) | (15 - ((n >> r) & 15));
            return (e >= 0 && (o |= 128), o);
          }
          return (
            (n.prototype = {
              SetSampleRate: function (e) {
                e;
              },
              Encode: function (e) {
                for (
                  var n = new Int16Array(e.buffer), a = new Uint8Array(n.length), i = 0;
                  i < n.length;
                  i++
                )
                  a[i] = 0 == t ? r(n[i]) : o(n[i]);
                return a;
              },
            }),
            new n()
          );
        },
        Ce = 0,
        ke = 1,
        Ie = 6,
        De = 7,
        Re = 8,
        Ue = 9,
        Fe = 10,
        xe = 0,
        He = 2,
        Le = 6,
        Oe = 64;
      function Be(e, t, n) {
        if (null === e || null === n) return -1;
        ((AudioCodecModule.HEAP32[n / 4 + 0] = t.nType),
          (AudioCodecModule.HEAPU32[n / 4 + 1] = t.nFrequency),
          (AudioCodecModule.HEAPU32[n / 4 + 2] = t.nChannels),
          (AudioCodecModule.HEAPU32[n / 4 + 3] = t.nDepth),
          (AudioCodecModule.HEAPU32[n / 4 + 4] = t.nOffset));
        var r = t.nBitrate;
        return (
          Oe === t.nType && (r = 2 * t.nFrequency),
          (AudioCodecModule.HEAPU32[n / 4 + 5] = r),
          (AudioCodecModule.HEAPU32[n / 4 + 6] = 0),
          (AudioCodecModule.HEAPU32[n / 4 + 8] = t.nInbufLen),
          (AudioCodecModule.HEAPU32[n / 4 + 19] = 2),
          (AudioCodecModule.HEAPU32[n / 4 + 28] = 0),
          (AudioCodecModule.HEAPU32[n / 4 + 31] = 0),
          AudioCodecModule._Audio_Codecs_Config(e, n)
        );
      }
      var Ve = function (e, t) {
        var n = e,
          r = null,
          o = 0,
          a = t,
          i = 2 * t,
          l = null,
          u = null,
          s = null,
          c = null,
          f = null;
        function d() {
          AudioCodecModule = window.AudioCodecModule;
        }
        return (
          (d.prototype = {
            Init: function () {
              if (
                ((r = AudioCodecModule._malloc(4)),
                (l = AudioCodecModule._malloc(152)),
                (u = AudioCodecModule._malloc(4096)),
                (s = AudioCodecModule._malloc(116)),
                (c = AudioCodecModule._malloc(4096)),
                (f = AudioCodecModule._malloc(920)),
                null !== r && null !== l)
              ) {
                var e;
                ((e = r),
                  AudioCodecModule._Audio_Codecs_Init(e),
                  (function (e) {
                    var t = !0;
                    switch (e) {
                      case Ce:
                        o = xe;
                        break;
                      case ke:
                        o = He;
                        break;
                      case Fe:
                        o = Oe;
                        break;
                      case Ie:
                        ((i = 4e4), (o = Le));
                        break;
                      case De:
                        ((i = 32e3), (o = Le));
                        break;
                      case Re:
                        ((i = 24e3), (o = Le));
                        break;
                      case Ue:
                        ((i = 16e3), (o = Le));
                        break;
                      default:
                        t = !1;
                    }
                  })(n));
                var t = {};
                ((t.nType = o),
                  (t.nFrequency = a),
                  (t.nDepth = 16),
                  (t.nChannels = 1),
                  (t.nOffset = 2 * t.nChannels),
                  (t.nBitrate = i),
                  (t.nInbufLen = 1024),
                  Be(r, t, l));
              }
            },
            Config: function (e) {
              return Be(r, e, l);
            },
            Encode: function (e) {
              if (null === r || null === u || null === s || null === c || null === f) return -1;
              var t = {};
              ((t.pData = e),
                (t.inDataPtr = u),
                (t.datalen = e.length),
                (t.fs = a),
                (t.depth = 16),
                (t.channels = 1),
                (t.offset = 2 * t.channels));
              var n = {};
              return (
                (n.outDataPtr = c),
                (function (e, t, n, r, o) {
                  if (null === e) return -1;
                  (AudioCodecModule.writeArrayToMemory(t.pData, t.inDataPtr),
                    (AudioCodecModule.HEAP32[r / 4 + 0] = t.inDataPtr),
                    (AudioCodecModule.HEAP32[r / 4 + 1] = t.fs),
                    (AudioCodecModule.HEAP32[r / 4 + 2] = t.datalen),
                    (AudioCodecModule.HEAP32[r / 4 + 3] = t.depth),
                    (AudioCodecModule.HEAP32[r / 4 + 4] = t.offset),
                    (AudioCodecModule.HEAP32[r / 4 + 5] = t.channels),
                    (AudioCodecModule.HEAP32[o / 4 + 0] = n.outDataPtr));
                  var a = null,
                    i = AudioCodecModule._Audio_Codecs_Main(e, r, o);
                  if (0 === i) {
                    var l = new ArrayBuffer(920),
                      u = new Uint8Array(l),
                      s = new DataView(l);
                    u.set(AudioCodecModule.HEAPU8.subarray(o, o + 920));
                    var c = s.getInt32(8, !0);
                    0 === c
                      ? (i = -1)
                      : (a = new Uint8Array(c)).set(
                          AudioCodecModule.HEAPU8.subarray(n.outDataPtr, n.outDataPtr + c),
                        );
                  }
                  return [i, a];
                })(r, t, n, s, f)
              );
            },
            Close: function () {
              var e;
              (null === (e = r) || AudioCodecModule._Audio_Codecs_DeInit(e), (o = 0));
              ((i = 0),
                AudioCodecModule._free(r),
                (r = null),
                AudioCodecModule._free(l),
                (l = null),
                AudioCodecModule._free(u),
                (u = null),
                AudioCodecModule._free(s),
                (s = null),
                AudioCodecModule._free(c),
                (c = null),
                AudioCodecModule._free(f),
                (f = null));
            },
          }),
          new d()
        );
      };
      function Ge(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a,
                i,
                l = [],
                u = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (; !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
              } catch (e) {
                ((s = !0), (o = e));
              } finally {
                try {
                  if (!u && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                } finally {
                  if (s) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return ze(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ze(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ze(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Ne,
        We = 0,
        je = 1,
        Ye = 3,
        Ke = 6,
        qe = 7,
        Xe = 8,
        Je = 9,
        $e = 10,
        Qe = function (e, t, n) {
          var r = e,
            o = t,
            a = null,
            i = null,
            l = n,
            u = [36, r, 0, 0, 0, 0],
            s = [68, 72, 65, 86],
            c = [100, 104, 97, 118],
            f = 245,
            d = 0,
            p = null;
          function m(e, t, n) {
            var r = [],
              o = t || 4;
            if (!0 === n) for (var a = 0; a < o; a++) r[a] = (e >>> (8 * (o - 1 - a))) & 255;
            else for (var i = 0; i < o; i++) r[i] = (e >>> (8 * i)) & 255;
            return r;
          }
          function h() {
            0 === o || 1 === o
              ? (i = new Te(o)).SetSampleRate(n)
              : 3 !== o && (i = new Ve(o, n)).Init();
          }
          return (
            (h.prototype = {
              setSampleRate: function (e) {
                ((l = e), i.SetSampleRate(e));
              },
              setRtpInterlevedID: function (e) {
                r = e;
              },
              getRTPPacket: function (e) {
                var t = null;
                if (0 === o || 1 === o) t = i.Encode(e);
                else if (3 === o) t = e;
                else {
                  var n,
                    h = Ge(i.Encode(e), 2);
                  if (((n = h[0]), (t = h[1]), 0 !== n)) return null;
                }
                var g = 0;
                ((a = new Uint8Array(u.length + 40 + t.length + 8)).set([36, r], g),
                  (g += 2),
                  a.set(m(40 + t.length + 8, 4, !0), g),
                  (g += 4),
                  a.set(s, g),
                  (g += 4),
                  a.set([240], g),
                  (g += 1),
                  a.set([0], g),
                  (g += 1),
                  a.set([1], g),
                  (g += 1),
                  a.set([0], g),
                  (g += 1),
                  f > 65535 && (f = 240),
                  a.set(m(f), g),
                  (g += 4),
                  f++);
                var y = m(40 + t.length + 8);
                (a.set(y, g), (g += 4));
                var _ = new Date(),
                  v =
                    ((_.getFullYear() - 2e3) << 26) +
                    ((_.getMonth() + 1) << 22) +
                    (_.getDate() << 17) +
                    (_.getHours() << 12) +
                    (_.getMinutes() << 6) +
                    _.getSeconds(),
                  S = _.getTime(),
                  P = null === p ? 0 : S - p;
                ((p = S),
                  (d += P) > 65535 && (d = 65535 - d),
                  a.set(m(v), g),
                  (g += 4),
                  a.set(m(d, 2), g),
                  (g += 2),
                  a.set([16], g),
                  (g += 1));
                var b = (function (e, t) {
                  for (var n = 0, r = t; r < e.length; r++) n += e[r];
                  return n;
                })(a, 6);
                (a.set([b], g), (g += 1));
                var w = (function (e) {
                    var t = 0;
                    switch (e) {
                      case We:
                        t = 14;
                        break;
                      case je:
                        t = 10;
                        break;
                      case Ye:
                        t = 16;
                        break;
                      case $e:
                        t = 26;
                        break;
                      case Ke:
                        t = 27;
                        break;
                      case qe:
                        t = 28;
                        break;
                      case Xe:
                        t = 29;
                        break;
                      case Je:
                        t = 30;
                    }
                    return t;
                  })(o),
                  A = 2;
                16e3 == l && (A = 4);
                var E = [131, 1, w, A];
                (a.set(E, g), (g += 4));
                (a.set([150, 1, 0, 0], g), (g += 4));
                var M = (function (e, t) {
                  for (var n = 0, r = 0; r < t; r++) n += e[r] << ((r % 4) * 8);
                  return n;
                })(t, t.length);
                return (
                  a.set([136], g),
                  (g += 1),
                  a.set(m(M), g),
                  (g += 4),
                  a.set([0, 0, 0], g),
                  (g += 3),
                  a.set(t, g),
                  (g += t.length),
                  a.set(c, g),
                  (g += 4),
                  a.set(y, g),
                  a
                );
              },
              terminate: function () {
                i = null;
              },
            }),
            new h(e)
          );
        };
      function Ze(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a,
                i,
                l = [],
                u = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (; !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
              } catch (e) {
                ((s = !0), (o = e));
              } finally {
                try {
                  if (!u && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                } finally {
                  if (s) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return et(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? et(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function et(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var tt = function (e, t) {
          var n = e,
            r = null,
            o = null,
            a = null,
            i = t,
            l = 16,
            u = 0,
            s = 0,
            c = null,
            f = null,
            d = null,
            p = {};
          ((p.pBuffer = new Uint8Array(320)), (p.nByteOffset = 0));
          var m = {};
          ((m.pBuffer = new Uint8Array(320)), (m.nByteOffset = 0));
          var h = null,
            g = null,
            y = null,
            _ = null,
            v = null,
            S = !1,
            P = !1;
          function b() {
            ((d = new M(20)), (f = new M(20)));
          }
          function w(e) {
            var t = new ArrayBuffer(2 * e.length);
            return (
              (function (e, t, n) {
                for (var r = 0; r < n.length; r++, t += 2) {
                  var o = Math.max(-1, Math.min(1, n[r])),
                    a = o < 0 ? 32768 * o : 32767 * o;
                  e.setInt16(t, a, !0);
                }
              })(new DataView(t), 0, e),
              t
            );
          }
          function A(e, t, n) {
            var r = Ze(
              (function (e, t, n) {
                var r = null;
                if (n === t) return [e, r];
                if (n > t)
                  return (console.error("The dstRate show be smaller than srcRate"), [e, r]);
                for (
                  var o = t / n,
                    a = Math.floor(e.length / o),
                    i = new Float32Array(a),
                    l = 0,
                    u = 0;
                  l < i.length;
                ) {
                  for (
                    var s = Math.round((l + 1) * o), c = 0, f = 0, d = u, p = e.length;
                    d < s && d < p;
                    d++
                  )
                    ((c += e[d]), f++);
                  ((i[l] = c / f), l++, (u = s));
                }
                if (Math.round(l * o) !== e.length) {
                  var m = Math.round(l * o);
                  r = new Float32Array(e.subarray(m, e.length));
                }
                return [i, r];
              })(e, t, n),
              2,
            );
            return [r[0], r[1]];
          }
          return (
            (b.prototype = {
              SetPlayParam: function (e, t) {
                0 != e &&
                  0 != t &&
                  8e3 === i &&
                  ((u = e),
                  (s = t),
                  r && this.StopProcess(),
                  this.Init(),
                  this.Config(i, l, u, s),
                  this.StartProcess());
              },
              SetCaptureParam: function (e, t) {
                ((i = e), (l = t));
              },
              Init: function () {
                var e;
                return (
                  (e = (Ne = window.ASPLiteModule)._malloc(4)),
                  0 != Ne._Audio_Framework_Init(e) && (Ne._free(e), (e = null)),
                  null != (r = e)
                );
              },
              Config: function (e, t, n, i) {
                var l = Ze(
                  (function (e, t, n, r, o) {
                    if (null == e) return [null, null];
                    var a = Ne._malloc(96),
                      i = Ne._malloc(668),
                      l = new Uint8Array(Ne.HEAPU8.buffer),
                      u = 0;
                    "ASPLite.cfg".split("").forEach(function (e, t) {
                      ((l[(i + u + 4) >> 0] = e.charCodeAt(0)), u++);
                    });
                    var s = t;
                    return (
                      t > r && (s = r),
                      (Ne.HEAP32[i / 4 + 129] = 2),
                      (Ne.HEAP32[i / 4 + 130] = s),
                      (Ne.HEAP32[i / 4 + 132] = 1),
                      (Ne.HEAP32[i / 4 + 133] = 16),
                      (Ne.HEAP32[i / 4 + 138] = 1),
                      (Ne.HEAP32[i / 4 + 140] = 0),
                      (Ne.HEAP32[i / 4 + 141] = 0),
                      0 != Ne._Audio_Framework_Config(e, i) &&
                        (Ne._free(i), (i = null), Ne._free(a), (a = null)),
                      [i, a]
                    );
                  })(r, e, 0, n),
                  2,
                );
                ((o = l[0]), (a = l[1]));
              },
              DeInit: function () {
                var e, t, n;
                ((t = o),
                  (n = a),
                  null != (e = r) &&
                    (Ne._Audio_Framework_DeInit(e, t, n), Ne._free(e), Ne._free(t), Ne._free(n)),
                  (r = null),
                  (o = null),
                  (a = null),
                  (S = !1));
              },
              InputCaptureData: function (e, t) {
                var o = null;
                null !== h
                  ? ((o = new Float32Array(e.length + h.length)).set(h, 0), o.set(e, h.length))
                  : (o = e);
                var a = Ze(A(o, t, i), 2),
                  l = a[0],
                  u = a[1];
                h = u;
                new Uint8Array(l.buffer);
                var s = w(l),
                  c = new Uint8Array(s);
                null != r && n && 8e3 === i
                  ? (function e(t, n) {
                      if (n <= 0) return;
                      var r = 320 - p.nByteOffset,
                        o = n > r ? r : n,
                        a = null;
                      a =
                        n >= 320 && 0 == p.nByteOffset
                          ? t.slice(0, 320)
                          : p.nByteOffset > 0
                            ? t.slice(0, 320 - p.nByteOffset)
                            : t;
                      if (
                        (p.pBuffer.set(a, p.nByteOffset),
                        (p.nByteOffset += o),
                        320 == p.nByteOffset)
                      ) {
                        var i = new Uint8Array(320);
                        (i.set(p.pBuffer), f.enqueue(i), p.pBuffer.fill(0), (p.nByteOffset = 0));
                      }
                      ((y = t.slice(o)), (n -= o), e(y, y.length));
                    })(c, c.length)
                  : v && v(c);
              },
              InputPlayData: function (e) {
                if (P) {
                  var t = null;
                  null !== g
                    ? ((t = new Float32Array(e.length + g.length)).set(g, 0), t.set(e, g.length))
                    : (t = e);
                  var n = Ze(A(t, u, i), 2),
                    r = n[0],
                    o = n[1];
                  g = o;
                  new Uint8Array(r.buffer);
                  var a = w(r),
                    l = new Uint8Array(a);
                  !(function e(t, n) {
                    if (n <= 0) return;
                    var r = 320 - m.nByteOffset,
                      o = n > r ? r : n,
                      a = null;
                    a =
                      n >= 320 && 0 == m.nByteOffset
                        ? t.slice(0, 320)
                        : m.nByteOffset > 0
                          ? t.slice(0, 320 - m.nByteOffset)
                          : t;
                    if (
                      (m.pBuffer.set(a, m.nByteOffset), (m.nByteOffset += o), 320 == m.nByteOffset)
                    ) {
                      var i = new Uint8Array(320);
                      (i.set(m.pBuffer), d.enqueue(i), m.pBuffer.fill(0), (m.nByteOffset = 0));
                    }
                    ((_ = t.slice(o)), (n -= o), e(_, _.length));
                  })(l, l.length);
                } else d.clear();
              },
              StartProcess: function () {
                ((P = !0),
                  (c = setInterval(
                    function () {
                      !(function () {
                        if (null !== f && 0 == f.size) return;
                        if (!S && d.size > 5) {
                          S = !0;
                          for (var e = 0; e < d.size - 1; e++) d.dequeue();
                        }
                        var t = {};
                        if (d.size > 0) t = d.dequeue();
                        else {
                          if (!(f.size > 5)) return;
                          t.buffer = new Uint8Array(320);
                        }
                        var n = f.dequeue(),
                          o = {};
                        ((o.data = n.buffer),
                          (o.fs = 8e3),
                          (o.datalen = 320),
                          (o.depth = 16),
                          (o.offset = 2),
                          (o.channels = 1),
                          (o.buflen = 320));
                        var i = {};
                        ((i.data = t.buffer),
                          (i.fs = 8e3),
                          (i.datalen = 320),
                          (i.depth = 16),
                          (i.offset = 2),
                          (i.channels = 1),
                          (i.buflen = 320));
                        var l = {},
                          u = new ArrayBuffer(o.datalen),
                          s = new Uint8Array(u);
                        ((l.data = s),
                          0 ==
                            (function (e, t, n, r, o) {
                              if (null == e) return -1;
                              var a = Ne._malloc(232),
                                i = Ne._malloc(116),
                                l = Ne._malloc(t.datalen);
                              Ne.writeArrayToMemory(t.data, l);
                              var u = Ne._malloc(n.datalen);
                              Ne.writeArrayToMemory(n.data, u);
                              var s = Ne._malloc(t.datalen);
                              ((Ne.HEAP32[a / 4 + 0] = l),
                                (Ne.HEAP32[a / 4 + 1] = t.fs),
                                (Ne.HEAP32[a / 4 + 2] = t.datalen),
                                (Ne.HEAP32[a / 4 + 3] = t.depth),
                                (Ne.HEAP32[a / 4 + 4] = t.offset),
                                (Ne.HEAP32[a / 4 + 5] = t.channels),
                                (Ne.HEAP32[a / 4 + 6] = t.buflen),
                                (Ne.HEAP32[a / 4 + 29] = u),
                                (Ne.HEAP32[a / 4 + 30] = n.fs),
                                (Ne.HEAP32[a / 4 + 31] = n.datalen),
                                (Ne.HEAP32[a / 4 + 32] = n.depth),
                                (Ne.HEAP32[a / 4 + 33] = n.offset),
                                (Ne.HEAP32[a / 4 + 34] = n.channels),
                                (Ne.HEAP32[a / 4 + 35] = n.buflen),
                                (Ne.HEAP32[i / 4 + 0] = s));
                              var c = Ne._Audio_Framework_Main(e, a, i, o);
                              return (
                                0 == c && r.data.set(Ne.HEAPU8.subarray(s, s + t.datalen)),
                                Ne._free(a),
                                Ne._free(i),
                                Ne._free(l),
                                Ne._free(u),
                                Ne._free(s),
                                c
                              );
                            })(r, o, i, l, a) &&
                            v &&
                            v(l.data));
                      })();
                    },
                    10,
                  )));
              },
              StopProcess: function () {
                (this.DeInit(),
                  c && (clearInterval(c), (c = null)),
                  f.clear(),
                  d.clear(),
                  (h = null),
                  (g = null),
                  (P = !1));
              },
              SetProcessedDataCallback: function (e) {
                v = e;
              },
            }),
            new b()
          );
        },
        nt = function (e, t) {
          var n = e,
            r = null,
            o = null,
            a = null,
            i = null,
            l = null,
            u = !1,
            s = null,
            c = t,
            f = { audio: !0, video: !1 },
            d = null,
            p = null;
          function m() {}
          function h(e) {
            p(e);
            var t = r.getRTPPacket(e);
            null !== t && d(t, 5);
          }
          return (
            (m.prototype = {
              initAudioOut: function (e, t) {
                if (null == o)
                  try {
                    ((window.AudioContext =
                      window.AudioContext ||
                      window.webkitAudioContext ||
                      window.mozAudioContext ||
                      window.oAudioContext ||
                      window.msAudioContext),
                      ((o = new AudioContext()).onstatechange = function () {}));
                  } catch (e) {
                    return;
                  }
                if (
                  (n.SetProcessedDataCallback(h),
                  (null !== a && null !== i) ||
                    ((a = o.createGain()),
                    ((i = o.createScriptProcessor(1024, 1, 1)).onaudioprocess = function (e) {
                      if (null !== s) {
                        var t = e.inputBuffer.getChannelData(0);
                        null !== d && !0 === u && n.InputCaptureData(t, o.sampleRate);
                      }
                    }),
                    a.connect(i),
                    i.connect(o.destination),
                    (l = o.sampleRate),
                    (a.gain.value = 1)),
                  void 0 === navigator.mediaDevices && (navigator.mediaDevices = {}),
                  void 0 === navigator.mediaDevices.getUserMedia &&
                    (navigator.mediaDevices.getUserMedia = function (e, t, n) {
                      var r =
                        navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia;
                      return r
                        ? new Promise(function (t, n) {
                            r.call(navigator, e, t, n);
                          })
                        : (n(),
                          Promise.reject(
                            new Error("getUserMedia is not implemented in this browser"),
                          ));
                    }),
                  navigator.mediaDevices.getUserMedia)
                )
                  return (
                    navigator.mediaDevices
                      .getUserMedia(f)
                      .then(function (e) {
                        ((s = e), o.createMediaStreamSource(e).connect(a));
                      })
                      .catch(function (e) {}),
                    (u = !0),
                    r || (r = new Qe(c, e, t)),
                    l
                  );
              },
              controlVolumnOut: function (e) {
                var t = (e / 20) * 2;
                a.gain.value = t <= 0 ? 0 : t >= 10 ? 10 : t;
              },
              stopAudioOut: function () {
                if (null !== s && u)
                  try {
                    for (var e = s.getAudioTracks(), t = 0, n = e.length; t < n; t++) e[t].stop();
                    ((u = !1), (s = null));
                  } catch (e) {}
              },
              terminate: function () {
                (this.stopAudioOut(),
                  o.close(),
                  (a = null),
                  (i = null),
                  r && (r.terminate(), (r = null)));
              },
              setSendAudioTalkBufferCallback: function (e) {
                d = e;
              },
              setRtpInterlevedID: function (e) {
                ((c = e), r && r.setRtpInterlevedID(e));
              },
              setCapturePcmDataCallback: function (e) {
                p = e;
              },
            }),
            new m()
          );
        },
        rt = function (e) {
          var t = 0,
            n = [],
            r = null,
            o = null,
            a = window.H264EncModule,
            i = document.getElementById("video-capture"),
            l = {
              audio: !1,
              video: e || { width: 320, height: 240, frameRate: 15, facingMode: "user" },
            };
          window.cPlusH264EncCallBack = function (n, r, i) {
            var l = new ArrayBuffer(r),
              h = new Uint8Array(l);
            if ((h.set(a.HEAPU8.subarray(n, n + r)), o)) {
              var g = (function (n, r) {
                var o = n,
                  a = new Uint8Array(u.length + 44 + o.length + 8),
                  i = 0;
                (a.set([36, t], i),
                  (i += 2),
                  a.set(m(44 + o.length + 8, 4, !0), i),
                  (i += 4),
                  a.set(s, i),
                  (i += 4),
                  1 == r ? (a.set([253], i), (i += 1)) : (a.set([252], i), (i += 1)));
                (a.set([0], i),
                  (i += 1),
                  a.set([0], i),
                  (i += 1),
                  a.set([0], i),
                  (i += 1),
                  f > 65535 && (f = 240));
                (a.set(m(f), i), (i += 4), f++);
                var l = m(44 + o.length + 8);
                (a.set(l, i), (i += 4));
                var h = new Date(),
                  g = h.getFullYear() - 2e3,
                  y = h.getMonth() + 1,
                  _ = h.getDate(),
                  v = h.getHours(),
                  S = h.getMinutes(),
                  P = h.getSeconds(),
                  b = (g << 26) + (y << 22) + (_ << 17) + (v << 12) + (S << 6) + P,
                  w = h.getTime(),
                  A = null === p ? 0 : w - p;
                ((p = w), (d += A) > 65535 && (d = 65535 - d));
                (a.set(m(b), i), (i += 4), a.set(m(d, 2), i), (i += 2), a.set([20], i), (i += 1));
                var E = (function (e, t) {
                  for (var n = 0, r = t; r < e.length; r++) n += e[r];
                  return n;
                })(a, 6);
                (a.set([E], i), (i += 1));
                var M = [129, 30, 8, e.frameRate];
                (a.set(M, i), (i += 4));
                (a.set([130, 0, 0, 0], i),
                  (i += 4),
                  a.set(m(e.height, 2), i),
                  (i += 2),
                  a.set(m(e.width, 2), i),
                  (i += 2));
                var T = (function (e, t) {
                  for (var n = 0, r = 0; r < t; r++) n += e[r] << ((r % 4) * 8);
                  return n;
                })(o, o.length);
                return (
                  a.set([136], i),
                  (i += 1),
                  a.set(m(T), i),
                  (i += 4),
                  a.set([0, 0, 0], i),
                  (i += 3),
                  a.set(o, i),
                  (i += o.length),
                  a.set(c, i),
                  (i += 4),
                  a.set(l, i),
                  a
                );
              })(h, i);
              o(g, 7);
            }
          };
          var u = [36, t, 0, 0, 0, 0],
            s = [68, 72, 65, 86],
            c = [100, 104, 97, 118],
            f = 245,
            d = 0,
            p = null;
          function m(e, t, n) {
            var r = [],
              o = t || 4;
            if (!0 === n) for (var a = 0; a < o; a++) r[a] = (e >>> (8 * (o - 1 - a))) & 255;
            else for (var i = 0; i < o; i++) r[i] = (e >>> (8 * i)) & 255;
            return r;
          }
          function h() {
            var t = document.createElement("canvas");
            ((t.height = e.width), (t.width = e.height));
            var n = Math.floor(1e3 / e.frameRate),
              o = 0,
              u = 0,
              s = t.getContext("2d");
            !(function e() {
              if (!i.paused && !i.ended) {
                var c,
                  f,
                  d,
                  p,
                  m,
                  h = Date.now();
                if (0 == o || h - o >= n + u) {
                  (0 != o && (u += n - (h - o)), (o = h), s.drawImage(i, 0, 0, t.width, t.height));
                  var g = s.getImageData(0, 0, t.width, t.height),
                    y = new Uint8Array(g.data),
                    _ =
                      ((c = y),
                      (f = y.length),
                      (d = g.width),
                      (p = g.height),
                      (m = l.video.frameRate),
                      null == r && (r = a._malloc(f)),
                      a.HEAPU8.set(c, r),
                      a._h264Enc(r, f, d, p, m));
                  if (0 != _) return void console.error("H264Encode initial failed, ret:" + _);
                }
                requestAnimationFrame(e);
              }
            })();
          }
          function g() {}
          return (
            (g.prototype = {
              initVideoCapture: function (e, n) {
                ((t = e),
                  void 0 === navigator.mediaDevices && (navigator.mediaDevices = {}),
                  void 0 === navigator.mediaDevices.getUserMedia &&
                    (navigator.mediaDevices.getUserMedia = function (e, t, n) {
                      var r =
                        navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia;
                      return r
                        ? new Promise(function (t, n) {
                            r.call(navigator, e, t, n);
                          })
                        : Promise.reject(
                            new Error("getUserMedia is not implemented on this browser"),
                          );
                    }),
                  navigator.mediaDevices.getUserMedia
                    ? navigator.mediaDevices
                        .getUserMedia(l)
                        .then(function (e) {
                          ((i.srcObject = e), (i.currentTime = 0), i.addEventListener("play", h));
                        })
                        .catch(function (e) {
                          console.error("Cannot get User Media" + e);
                        })
                    : console.error(
                        "Cannot open local media stream! :: navigator.mediaDevices.getUserMedia is not defined!",
                      ));
              },
              stopVideoPlay: function () {
                if (null != i) {
                  (i.pause(), i.removeAttribute("src"), i.removeEventListener("play", h));
                  var e = a._h264EncClose();
                  0 != e && console.error("H264EncodeClose failed, ret:" + e);
                }
                r && (a._free(r), (r = null));
              },
              writeDataOut: function () {
                var e = new Blob(n, { type: "video/webm" }),
                  t = document.createElement("a");
                console.warn("initial downloadElem: " + t);
                var r = window.URL.createObjectURL(e);
                ((t.href = r),
                  (t.download = "download.dav"),
                  document.body.appendChild(t),
                  t.click(),
                  document.body.removeChild(t),
                  window.URL.revokeObjectURL(r));
              },
              terminate: function () {
                this.stopVideoPlay();
              },
              setBufferCallBack: function (e) {
                o = e;
              },
            }),
            new g()
          );
        };
      function ot(e) {
        return (ot =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function at() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function a(n, r, o, a) {
          var u = r && r.prototype instanceof l ? r : l,
            s = Object.create(u.prototype);
          return (
            it(
              s,
              "_invoke",
              (function (n, r, o) {
                var a,
                  l,
                  u,
                  s = 0,
                  c = o || [],
                  f = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: p,
                    f: p.bind(e, 4),
                    d: function (t, n) {
                      return ((a = t), (l = 0), (u = e), (d.n = n), i);
                    },
                  };
                function p(n, r) {
                  for (l = n, u = r, t = 0; !f && s && !o && t < c.length; t++) {
                    var o,
                      a = c[t],
                      p = d.p,
                      m = a[2];
                    n > 3
                      ? (o = m === r) && ((u = a[(l = a[4]) ? 5 : ((l = 3), 3)]), (a[4] = a[5] = e))
                      : a[0] <= p &&
                        ((o = n < 2 && p < a[1])
                          ? ((l = 0), (d.v = r), (d.n = a[1]))
                          : p < m &&
                            (o = n < 3 || a[0] > r || r > m) &&
                            ((a[4] = n), (a[5] = r), (d.n = m), (l = 0)));
                  }
                  if (o || n > 1) return i;
                  throw ((f = !0), r);
                }
                return function (o, c, m) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (f && 1 === c && p(c, m), l = c, u = m; (t = l < 2 ? e : u) || !f; ) {
                    a || (l ? (l < 3 ? (l > 1 && (d.n = -1), p(l, u)) : (d.n = u)) : (d.v = u));
                    try {
                      if (((s = 2), a)) {
                        if ((l || (o = "next"), (t = a[o]))) {
                          if (!(t = t.call(a, u)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((u = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = a.return) && t.call(a),
                            l < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" + o + "' method",
                              )),
                              (l = 1)));
                        a = e;
                      } else if ((t = (f = d.n < 0) ? u : n.call(r, d)) !== i) break;
                    } catch (t) {
                      ((a = e), (l = 1), (u = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: t, done: f };
                };
              })(n, o, a),
              !0,
            ),
            s
          );
        }
        var i = {};
        function l() {}
        function u() {}
        function s() {}
        t = Object.getPrototypeOf;
        var c = [][r]
            ? t(t([][r]()))
            : (it((t = {}), r, function () {
                return this;
              }),
              t),
          f = (s.prototype = l.prototype = Object.create(c));
        function d(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), it(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (u.prototype = s),
          it(f, "constructor", s),
          it(s, "constructor", u),
          (u.displayName = "GeneratorFunction"),
          it(s, o, "GeneratorFunction"),
          it(f),
          it(f, o, "Generator"),
          it(f, r, function () {
            return this;
          }),
          it(f, "toString", function () {
            return "[object Generator]";
          }),
          (at = function () {
            return { w: a, m: d };
          })()
        );
      }
      function it(e, t, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        (it = function (e, t, n, r) {
          if (t)
            o ? o(e, t, { value: n, enumerable: !r, configurable: !r, writable: !r }) : (e[t] = n);
          else {
            var a = function (t, n) {
              it(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (a("next", 0), a("throw", 1), a("return", 2));
          }
        })(e, t, n, r);
      }
      function lt(e, t, n, r, o, a, i) {
        try {
          var l = e[a](i),
            u = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function ut(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function st(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, ft(r.key), r));
        }
      }
      function ct(e, t, n) {
        return (
          t && st(e.prototype, t),
          n && st(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function ft(e) {
        var t = (function (e, t) {
          if ("object" != ot(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != ot(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == ot(t) ? t : t + "";
      }
      window.WebCodecsVideoFrameMap = new Map();
      var dt = 0,
        pt = (function () {
          return ct(
            function e(t, n, r) {
              (ut(this, e),
                (this.m_VideoFrameIndex = 0),
                (this.m_WebCodecsDecoder = null),
                (this.m_playMethod = t),
                (this.m_imageWidth = 0),
                (this.m_imageHeight = 0),
                (this.m_nFrameRate = 25),
                (this.m_bIFrameComming = !1),
                (this.m_WebCodecsVideoFrameScope = dt++),
                (this.m_SPSParser = new C(n)),
                (this.m_nVideoEncodeType = n),
                (this.errCallback = r));
            },
            [
              {
                key: "decode",
                value: function (e, t) {
                  if (e.nWidth !== this.m_imageWidth || e.nHeight !== this.m_imageHeight) {
                    (this.close(), this.init());
                    var n;
                    if (null === this.m_WebCodecsDecoder)
                      return (console.log("[Error]the WebCodecsDecoder Create Failed!"), !1);
                    if (null === (n = this.GetCodecString(t)))
                      return (console.log("[Warn]GetCodecString failed!"), !1);
                    (this.m_WebCodecsDecoder.configure({
                      codec: n,
                      codeWidth: e.nWidth,
                      codeHeight: e.nHeight,
                      hardwareAcceleration: "prefer-hardware",
                    }),
                      (this.m_imageWidth = e.nWidth),
                      (this.m_imageHeight = e.nHeight),
                      (this.m_bIFrameComming = !1));
                  }
                  return this.m_playMethod
                    ? null !== this.m_WebCodecsDecoder
                      ? this.m_bIFrameComming || 0 === e.nFrameSubType
                        ? ((this.m_bIFrameComming = !0),
                          this.m_WebCodecsDecoder.decode(
                            new EncodedVideoChunk({
                              type: 0 === e.nFrameSubType ? "key" : "delta",
                              timestamp: 0,
                              duration: 0,
                              data: t,
                            }),
                          ),
                          !0)
                        : (console.log("[Error]The first frame is not I in WebCodecsDecoder!"), !1)
                      : (console.log("[Error]the WebCodecsDecoder is null!"), !1)
                    : (console.log("[Error] the  m_playMethod is null!"), !1);
                },
              },
              {
                key: "flush",
                value: function () {
                  this.m_WebCodecsDecoder && this.m_WebCodecsDecoder.flush();
                },
              },
              {
                key: "close",
                value: function () {
                  (this.m_WebCodecsDecoder && this.m_WebCodecsDecoder.close(),
                    (this.m_WebCodecsDecoder = null),
                    console.log("[Warn] Decode Closed!"));
                },
              },
              {
                key: "init",
                value: function () {
                  this.m_WebCodecsDecoder = new VideoDecoder({
                    output: this.OnOutput.bind(this),
                    error: this.OnError.bind(this),
                  });
                },
              },
              {
                key: "OnOutput",
                value: function (e) {
                  this.m_VideoFrameIndex++ > 999 && (this.m_VideoFrameIndex = 0);
                  var t = this.m_WebCodecsVideoFrameScope + this.m_VideoFrameIndex;
                  (window.WebCodecsVideoFrameMap.set(t, e),
                    this.m_playMethod &&
                      this.m_playMethod.drawWebCodecs(
                        t,
                        0,
                        this.m_nFrameRate,
                        e.codedWidth,
                        e.codedHeight,
                        e.colorSpace,
                      ));
                },
              },
              {
                key: "OnError",
                value: function (e) {
                  (console.log("[Error]HW Decode Failed!"),
                    (this.m_WebCodecsDecoder = null),
                    this.errCallback(e));
                },
              },
              {
                key: "GetCodecString",
                value: function (e) {
                  for (var t = null, n = e.length, r = [], o = 0; o <= n; )
                    if (0 == e[o])
                      if (0 == e[o + 1])
                        if (1 == e[o + 2]) {
                          if ((r.push(o), (o += 3), 1 == this.m_nVideoEncodeType)) {
                            if (5 == (31 & e[o]) || 1 == (31 & e[o])) break;
                          } else if (
                            2 == this.m_nVideoEncodeType &&
                            (38 == (255 & e[o]) || 2 == (255 & e[o]))
                          )
                            break;
                        } else 0 == e[o + 2] ? o++ : (o += 3);
                      else o += 2;
                    else o += 1;
                  if (1 == this.m_nVideoEncodeType) {
                    var a = !1;
                    for (o = 0; o < r.length; o++)
                      if (((t = e.subarray(r[o] + 3, r[o + 1])), 7 == (31 & e[r[o] + 3]))) {
                        (this.m_SPSParser.parse(t), (a = !0));
                        break;
                      }
                    return a
                      ? "avc1." +
                          this.decimalToHex(this.m_SPSParser.getSpsValue("profile_idc")) +
                          this.decimalToHex(this.m_SPSParser.getSpsValue("profile_compatibility")) +
                          this.decimalToHex(this.m_SPSParser.getSpsValue("level_idc"))
                      : null;
                  }
                  if (2 == this.m_nVideoEncodeType) {
                    var i = !1;
                    for (o = 0; o < r.length; o++)
                      if (((t = e.subarray(r[o] + 3, r[o + 1] - 1)), 66 === (255 & e[r[o] + 3]))) {
                        var l = e.subarray(r[o] + 5, r[o + 1] - 1);
                        (this.m_SPSParser.parse(l), (i = !0));
                        break;
                      }
                    return i ? this.m_SPSParser.getCodecInfo() : null;
                  }
                  return null;
                },
              },
              {
                key: "decimalToHex",
                value: function (e, t) {
                  var n = Number(e).toString(16);
                  for (t = null == t ? (t = 2) : t; n.length < t; ) n = "0" + n;
                  return n;
                },
              },
            ],
          );
        })(),
        mt = (function () {
          return ct(
            function e(t, n, r, o, a, i, l, u) {
              (ut(this, e),
                (this.m_nPlayPort = t),
                (this.codec = n),
                (this.width = r),
                (this.height = o),
                (this.bitrate = a),
                (this.framerate = i),
                (this.encoder = null),
                (this.isConfigured = !1),
                (this.timestamp = 0),
                (this.frameDuration = Math.round(1e6 / this.framerate)),
                (this.FrameInfoArray = []),
                (this.sps = null),
                (this.pps = null),
                (this.m_bSupportMultiThread = l),
                (this.m_videoDecodeWorker = u),
                (this.m_bFirstFrame = !0));
            },
            [
              {
                key: "init",
                value: function () {
                  this.isConfigured ||
                    ((this.encoder = new VideoEncoder({
                      output: this.onChunk.bind(this),
                      error: function (e) {
                        console.error("VideoEncoder 错误:", e.message);
                      },
                    })),
                    this.encoder.configure({
                      width: this.width,
                      height: this.height,
                      codec: this.codec,
                      bitrate: this.bitrate,
                      framerate: this.framerate,
                      lowLatency: !0,
                    }),
                    (this.isConfigured = !0));
                },
              },
              {
                key: "encode",
                value: function (e, t) {
                  if (!this.isConfigured) throw new Error("编码器未初始化，请先调用 init()");
                  if (this.encoder.encodeQueueFull)
                    return (console.warn("编码队列已满，跳过一帧"), void e.close());
                  var n = new VideoFrame(e, {
                    timestamp: this.timestamp,
                    duration: this.frameDuration,
                  });
                  (0 == t.nFrameSubType || 18 == t.nFrameSubType || this.m_bFirstFrame
                    ? this.encoder.encode(n, { keyFrame: !0 })
                    : this.encoder.encode(n, { keyFrame: !1 }),
                    (this.timestamp += this.frameDuration),
                    n.close(),
                    this.FrameInfoArray.push(t),
                    (this.m_bFirstFrame = !1));
                },
              },
              {
                key: "onChunk",
                value: function (e, t) {
                  var n = null,
                    r = [],
                    o = new Uint8Array([0, 0, 0, 1]);
                  if (e.byteLength > 0) {
                    var a = new ArrayBuffer(e.byteLength);
                    (e.copyTo(a), (n = new Uint8Array(a)));
                  }
                  if (
                    "key" == e.type &&
                    t &&
                    t.decoderConfig &&
                    "description" in t.decoderConfig &&
                    t.decoderConfig.description.byteLength > 0
                  ) {
                    var i = new Uint8Array(t.decoderConfig.description),
                      l = 5,
                      u = 31 & i[l];
                    if ((l++, u > 0)) {
                      var s = (i[l] << 8) | i[l + 1];
                      ((l += 2), (this.sps = i.subarray(l, l + s)), (l += s));
                    }
                    var c = i[l];
                    if ((l++, c > 0)) {
                      var f = (i[l] << 8) | i[l + 1];
                      ((l += 2), (this.pps = i.subarray(l, l + f)), (l += f));
                    }
                  }
                  "key" == e.type &&
                    (null != this.sps && (r.push(o), r.push(this.sps)),
                    null != this.pps && (r.push(o), r.push(this.pps)));
                  for (
                    var d = 0, p = new DataView(n.buffer, n.byteOffset, n.byteLength);
                    d + 4 <= n.length;
                  ) {
                    var m = p.getUint32(d);
                    if ((d += 4) + m > n.length) {
                      console.warn("NALU size exceeds available data");
                      break;
                    }
                    (r.push(new Uint8Array([0, 0, 0, 1])), r.push(n.subarray(d, d + m)), (d += m));
                  }
                  for (
                    var h = r.reduce(
                        function (e, t) {
                          return e + t.length;
                        },
                        0,
                      ),
                      g = new Uint8Array(h),
                      y = 0,
                      _ = 0,
                      v = r;
                    _ < v.length;
                    _++
                  ) {
                    var S = v[_];
                    (g.set(S, y), (y += S.length));
                  }
                  var P = this.FrameInfoArray.shift();
                  if (
                    ("key" == e.type ? (P.nFrameSubType = 0) : (P.nFrameSubType = 1),
                    this.m_bSupportMultiThread)
                  ) {
                    var b = Module._malloc(96),
                      w = Module._malloc(g.byteLength);
                    (Module.writeArrayToMemory(g, w),
                      (Module.HEAP32[b / 4 + 0] = w),
                      (Module.HEAP32[b / 4 + 1] = g.byteLength),
                      (Module.HEAP32[b / 4 + 2] = P.nFrameType),
                      (Module.HEAP32[b / 4 + 3] = P.nFrameSubType),
                      (Module.HEAP32[b / 4 + 4] = 4),
                      (Module.HEAP32[b / 4 + 5] = P.nFrameID),
                      (Module.HEAP32[b / 4 + 6] = this.width),
                      (Module.HEAP32[b / 4 + 7] = this.height),
                      (Module.HEAP32[b / 4 + 8] = this.framerate),
                      (Module.HEAP32[b / 4 + 9] = 2),
                      (Module.HEAP32[b / 4 + 10] = P.nYear),
                      (Module.HEAP32[b / 4 + 11] = P.nMonth),
                      (Module.HEAP32[b / 4 + 12] = P.nDay),
                      (Module.HEAP32[b / 4 + 13] = P.nHour),
                      (Module.HEAP32[b / 4 + 14] = P.nMinute),
                      (Module.HEAP32[b / 4 + 15] = P.nSecond),
                      (Module.HEAP32[b / 4 + 16] = P.nTimeStamp));
                    for (var A = 17; A < 22; A++) Module.HEAP32[b / 4 + A] = 0;
                    (Module._PLAY_InputVideoDataToPackage(this.m_nPlayPort, b),
                      Module._free(w),
                      Module._free(b));
                  } else {
                    var E = {
                      nType: "PackageVideoData",
                      width: this.width,
                      height: this.height,
                      framerate: this.framerate,
                      frameInfo: P,
                      result: g,
                    };
                    this.m_videoDecodeWorker && this.m_videoDecodeWorker.postMessage(E);
                  }
                },
              },
              {
                key: "close",
                value:
                  ((e = at().m(function e() {
                    var t;
                    return at().w(
                      function (e) {
                        for (;;)
                          switch (e.n) {
                            case 0:
                              if (!this.encoder || !this.isConfigured) {
                                e.n = 4;
                                break;
                              }
                              return ((e.p = 1), (e.n = 2), this.encoder.flush());
                            case 2:
                              (this.encoder.close(),
                                console.log(
                                  "webcodec encoder safe closed, all remaining frames have been output.",
                                ),
                                (this.isConfigured = !1),
                                (this.FrameInfoArray = []),
                                (e.n = 4));
                              break;
                            case 3:
                              ((e.p = 3),
                                (t = e.v),
                                console.log("[ERROR]webcodec encoder flush error:" + t),
                                this.encoder.close(),
                                (this.isConfigured = !1),
                                (this.FrameInfoArray = []));
                            case 4:
                              return e.a(2);
                          }
                      },
                      e,
                      this,
                      [[1, 3]],
                    );
                  })),
                  (t = function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (r, o) {
                      var a = e.apply(t, n);
                      function i(e) {
                        lt(a, r, o, i, l, "next", e);
                      }
                      function l(e) {
                        lt(a, r, o, i, l, "throw", e);
                      }
                      i(void 0);
                    });
                  }),
                  function () {
                    return t.apply(this, arguments);
                  }),
              },
            ],
          );
          var e, t;
        })();
      function ht() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function a(n, r, o, a) {
          var u = r && r.prototype instanceof l ? r : l,
            s = Object.create(u.prototype);
          return (
            gt(
              s,
              "_invoke",
              (function (n, r, o) {
                var a,
                  l,
                  u,
                  s = 0,
                  c = o || [],
                  f = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: p,
                    f: p.bind(e, 4),
                    d: function (t, n) {
                      return ((a = t), (l = 0), (u = e), (d.n = n), i);
                    },
                  };
                function p(n, r) {
                  for (l = n, u = r, t = 0; !f && s && !o && t < c.length; t++) {
                    var o,
                      a = c[t],
                      p = d.p,
                      m = a[2];
                    n > 3
                      ? (o = m === r) && ((u = a[(l = a[4]) ? 5 : ((l = 3), 3)]), (a[4] = a[5] = e))
                      : a[0] <= p &&
                        ((o = n < 2 && p < a[1])
                          ? ((l = 0), (d.v = r), (d.n = a[1]))
                          : p < m &&
                            (o = n < 3 || a[0] > r || r > m) &&
                            ((a[4] = n), (a[5] = r), (d.n = m), (l = 0)));
                  }
                  if (o || n > 1) return i;
                  throw ((f = !0), r);
                }
                return function (o, c, m) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (f && 1 === c && p(c, m), l = c, u = m; (t = l < 2 ? e : u) || !f; ) {
                    a || (l ? (l < 3 ? (l > 1 && (d.n = -1), p(l, u)) : (d.n = u)) : (d.v = u));
                    try {
                      if (((s = 2), a)) {
                        if ((l || (o = "next"), (t = a[o]))) {
                          if (!(t = t.call(a, u)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((u = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = a.return) && t.call(a),
                            l < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" + o + "' method",
                              )),
                              (l = 1)));
                        a = e;
                      } else if ((t = (f = d.n < 0) ? u : n.call(r, d)) !== i) break;
                    } catch (t) {
                      ((a = e), (l = 1), (u = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: t, done: f };
                };
              })(n, o, a),
              !0,
            ),
            s
          );
        }
        var i = {};
        function l() {}
        function u() {}
        function s() {}
        t = Object.getPrototypeOf;
        var c = [][r]
            ? t(t([][r]()))
            : (gt((t = {}), r, function () {
                return this;
              }),
              t),
          f = (s.prototype = l.prototype = Object.create(c));
        function d(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), gt(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (u.prototype = s),
          gt(f, "constructor", s),
          gt(s, "constructor", u),
          (u.displayName = "GeneratorFunction"),
          gt(s, o, "GeneratorFunction"),
          gt(f),
          gt(f, o, "Generator"),
          gt(f, r, function () {
            return this;
          }),
          gt(f, "toString", function () {
            return "[object Generator]";
          }),
          (ht = function () {
            return { w: a, m: d };
          })()
        );
      }
      function gt(e, t, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        (gt = function (e, t, n, r) {
          if (t)
            o ? o(e, t, { value: n, enumerable: !r, configurable: !r, writable: !r }) : (e[t] = n);
          else {
            var a = function (t, n) {
              gt(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (a("next", 0), a("throw", 1), a("return", 2));
          }
        })(e, t, n, r);
      }
      function yt(e, t, n, r, o, a, i) {
        try {
          var l = e[a](i),
            u = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function _t(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = e.apply(t, n);
            function i(e) {
              yt(a, r, o, i, l, "next", e);
            }
            function l(e) {
              yt(a, r, o, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      var vt = 5,
        St = 13,
        Pt = 14,
        bt = 19,
        wt = 22,
        At = 1,
        Et = 2,
        Mt = 3,
        Tt = 4,
        Ct = 7,
        kt = 8,
        It = 9,
        Dt = 10,
        Rt = 11,
        Ut = 12,
        Ft = 13,
        xt = 14,
        Ht = 0,
        Lt = 5,
        Ot = 6,
        Bt = 13,
        Vt = 32,
        Gt = 33,
        zt = 34,
        Nt = 0;
      window.nSWDecodeNum = 0;
      var Wt = function (e, t) {
        t = t;
        var n = 0,
          r = { timestamp: 0, timestamp_usec: 0 },
          o = null,
          a = null,
          i = null,
          l = null,
          u = null,
          s = !1,
          c = !1,
          f = null,
          d = null,
          p = null,
          h = null,
          g = null,
          y = null,
          _ = 1,
          v = "",
          b = !1,
          w = null,
          A = 0,
          E = 0,
          k = { id: 1, samples: null, baseMediaDecodeTime: 0 },
          I = 0,
          D = null,
          R = 2,
          U = 0,
          F = 0,
          x = 0,
          H = 1,
          L = null,
          O = 0,
          B = null,
          V = null,
          G = null,
          z = null,
          N = null,
          W = null,
          j = null,
          Y = null,
          K = null,
          q = null,
          X = null,
          J = null,
          $ = null,
          Q = null,
          Z = null,
          ee = null,
          te = null,
          ne = null,
          re = null,
          oe = null,
          ae = null,
          ie = null,
          le = null,
          ue = null,
          de = null,
          pe = null,
          me = null,
          he = 0,
          ge = 0,
          ye = 0,
          _e = 0,
          ve = 0,
          Se = 0,
          Pe = null,
          we = null,
          Ae = null,
          Ee = null,
          Te = null,
          Ce = null,
          ke = null,
          Ie = null,
          De = null,
          Re = null,
          Ue = null,
          Fe = null,
          xe = null,
          He = null,
          Le = !1,
          Oe = 0,
          Be = 0,
          Ve = null,
          Ge = 0,
          ze = 0,
          Ne = e,
          We = !0,
          je = !1,
          Ye = !1,
          Ke = !1,
          qe = 0,
          Xe = 0,
          Je = 0,
          $e = !1,
          Qe = !1,
          Ze = 0,
          et = null,
          ot = null,
          at = null,
          it = null,
          lt = 0,
          ut = 0,
          st = !1,
          ct = 0,
          ft = null,
          dt = !1,
          gt = 0,
          yt = -1,
          Wt = -1,
          jt = !1,
          Yt = !1,
          Kt = "",
          qt = null,
          Xt = null,
          Jt = null,
          $t = null,
          Qt = 10,
          Zt = 0,
          en = !1,
          tn = !1,
          nn = 0,
          rn = {
            ePtzCmd: Ht,
            winId: 0,
            arg1: 0,
            arg2: 0,
            arg3: 0,
            arg4: 0,
            arg5: 0,
            arg6: 0,
            reserved0: [0, 0, 0, 0, 0, 0],
            pParam: null,
            pResult: null,
            pArg: null,
            reserved1: [0, 0, 0, 0, 0, 0, 0],
          },
          on = {
            mainStreamSize: { w: 2048, h: 2048 },
            originX: 4096,
            originY: 4096,
            radius: 4096,
            lensDirection: 0,
            mainMountMode: 1,
            mainCalibrateMode: 0,
            modeInitParam: null,
            outputFormat: {
              mainShowSize: { w: window.screen.width, h: window.screen.height },
              floatMainShowSize: { w: 0, h: 0 },
              imgOutput: { w: 0, h: 0 },
              subMode: {
                subMountMode: 0,
                subCalibrateMode: 0,
                imgOutput: { w: 0, h: 0 },
                upperLeft: { x: 0, y: 0 },
                reserved: [0, 0, 0],
              },
              subModeNum: 0,
              outputSizeRatio: 0,
              reserved: [0],
            },
            configParam: null,
            enableAutoContrast: 0,
            alphaHistogram: 0,
            alphaGray: 0,
            captureSize: { w: 0, h: 0 },
            mhfptzIndex: 0,
            reserved: [0],
          },
          an = -1,
          ln = !1,
          un = 0,
          sn = { x: 0, y: 0 },
          cn = { x: 0, y: 0 },
          fn = { left: 0, top: 0, right: 0, bottom: 0 },
          dn = 0,
          pn = {},
          mn = {},
          hn = -1,
          gn = !1,
          yn = !1,
          _n = null,
          vn = null,
          Sn = null,
          Pn = {},
          bn = 0,
          wn = !0,
          An = 0,
          En = 0,
          Mn = 0,
          Tn = 0,
          Cn = 45,
          kn = !1,
          In = !1,
          Dn = !1,
          Rn = !1,
          Un = "",
          Fn = "",
          xn = "",
          Hn = "",
          Ln = !1,
          On = !1,
          Bn = 0,
          Vn = [{}, {}, {}],
          Gn = null,
          zn = 0,
          Nn = [],
          Wn = 0,
          jn = 0,
          Yn = null,
          Kn = !1,
          qn = null,
          Xn = null,
          Jn = 0,
          $n = -1,
          Qn = !1,
          Zn = null,
          er = !1,
          tr = null,
          nr = !1,
          rr = !1,
          or = 0,
          ar = 0,
          ir = !1,
          lr = !0,
          ur = !1;
        function sr() {}
        function cr(e) {
          (t.trace("Pause, PlayPort:" + n + ", bPause:" + e), e || (ir = !1));
          var r = 1;
          if (Ne) r = Module._PLAY_Pause(n, e);
          else {
            var o = { nType: "Pause", bPause: e };
            qt && qt.postMessage(o);
          }
          return (Ve && Ve.pause(e), He && He.pause(e), r);
        }
        function fr(e, r) {
          return 0 == r || 18 == r || 20 == r
            ? ((yt = e), !0)
            : (19 == r && -1 !== yt) ||
                -1 == Wt ||
                e == Wt + 1 ||
                (t.info(
                  "checkFrame failed, PlayPort:" + n + ", nFrameID:" + e + ", m_nLastFrameID:" + Wt,
                ),
                !1);
        }
        function dr() {
          return (Ve && Ve.CleanScreen(0, 0, 0, 0), 1);
        }
        function pr() {
          null != f &&
            (f.setDecodeType(ze),
            f.setCodecInfo(v),
            f.setInitSegmentFunc(_r),
            f.setPlaySpeed(_),
            f.setFPS(A));
        }
        function mr() {
          null != f &&
            (f.setBeginDrawCallback(V),
            f.setVideoSizeCallback(vr),
            f.setErrorCallback(re),
            f.setAudioStartCallback(hr),
            f.setMseErrorCallback(Sr),
            f.setCapturePicDataCallBack(te));
        }
        function hr(e, t) {}
        function gr(e, t) {
          for (var n = null, r = e.length, o = [], a = 0; a <= r; )
            if (0 == e[a])
              if (0 == e[a + 1])
                if (1 == e[a + 2]) {
                  if ((o.push(a), (a += 3), 1 == ze)) {
                    if (5 == (31 & e[a]) || 1 == (31 & e[a])) break;
                  } else if (
                    2 == ze &&
                    (38 == (255 & e[a]) ||
                      40 == (255 & e[a]) ||
                      42 == (255 & e[a]) ||
                      2 == (255 & e[a]))
                  )
                    break;
                } else 0 == e[a + 2] ? a++ : (a += 3);
              else a += 2;
            else a += 1;
          var i = 0;
          if (1 == ze) {
            for (a = 0; a < o.length; a++)
              switch (((n = e.subarray(o[a] + 3, o[a + 1])), 31 & e[o[a] + 3])) {
                case 1:
                  ((i = o[a] - 1), (B = e.subarray(i, e.length)));
                  break;
                case 5:
                  ((i = o[a] - 1), (B = e.subarray(i, e.length)), (b = !1));
                  break;
                case 7:
                  (d.parse(n), (g = n), (c = !0));
                  break;
                case 8:
                  y = n;
              }
            if (!b && c) {
              b = !0;
              var l = {
                id: 1,
                width: he,
                height: ge,
                type: "video",
                profileIdc: d.getSpsValue("profile_idc"),
                profileCompatibility: 0,
                levelIdc: d.getSpsValue("level_idc"),
                sps: [g],
                pps: [y],
                timescale: 9e4,
                fps: A,
                duration: Math.round(9e4 / A),
              };
              w = p.initSegment(l);
              var u = -1 == $n ? t.nRotateType : $n;
              (u, f && f.ResetInitSegmentFlag());
            }
          } else if (2 == ze) {
            for (a = 0; a < o.length; a++)
              switch (((n = e.subarray(o[a] + 3, o[a + 1] - 1)), 255 & e[o[a] + 3])) {
                case 2:
                  ((i = o[a] - 1), (B = e.subarray(i, e.length)));
                  break;
                case 38:
                case 40:
                case 42:
                  ((i = o[a] - 1), (B = e.subarray(i, e.length)), (b = !1));
                  break;
                case 64:
                  h = n;
                  break;
                case 66:
                  var s = e.subarray(o[a] + 5, o[a + 1] - 1);
                  (d.parse(s), (g = n), (c = !0));
                  break;
                case 68:
                  y = n;
              }
            if (!b && c) {
              b = !0;
              var m = d.getSpsValue("general_profile_space"),
                _ = d.getSpsValue("general_tier_flag"),
                S = d.getSpsValue("general_profile_idc"),
                P = d.getSpsValue("temporalIdNested");
              l = {
                id: 1,
                width: he,
                height: ge,
                type: "video",
                general_profile_flag: (m << 6) | (_ << 5) | S,
                general_profile_compatibility_flags: d.getSpsValue(
                  "general_profile_compatibility_flags",
                ),
                general_constraint_indicator_flags: d.getSpsValue(
                  "general_constraint_indicator_flags",
                ),
                general_level_idc: d.getSpsValue("general_level_idc"),
                chroma_format_idc: d.getSpsValue("chroma_format_idc"),
                bitDepthLumaMinus8: d.getSpsValue("bitDepthLumaMinus8"),
                bitDepthChromaMinus8: d.getSpsValue("bitDepthChromaMinus8"),
                rate_layers_nested_length: 11 | ((1 & P) << 2),
                vps: [h],
                sps: [g],
                pps: [y],
                timescale: 9e4,
                fps: A,
                duration: Math.round(9e4 / A),
              };
              w = p.initSegment(l);
              var E = -1 == $n ? t.nRotateType : $n;
              (E, f && f.ResetInitSegmentFlag());
            }
          }
          c && ((v = d.getCodecInfo()), f && f.setCodecInfo(v));
        }
        function yr() {
          if (null != B) {
            if (!s && Ne) {
              var e = Module._PLAY_GetPlaySpeed(n);
              f && f.setPlaySpeed(e);
            }
            var t = {
              duration: Math.round(9e4 / A),
              size: B.length,
              frame_time_stamp: null,
              frameDuration: null,
            };
            ((t.frameDuration = t.duration),
              null == k.samples && (k.samples = new Array(R)),
              (k.samples[U] = t),
              U++,
              (F += t.frameDuration),
              (x += t.frameDuration));
            var r = B.length - 4;
            ((B[0] = (4278190080 & r) >>> 24),
              (B[1] = (16711680 & r) >>> 16),
              (B[2] = (65280 & r) >>> 8),
              (B[3] = 255 & r));
            var o = new Uint8Array(B.length + I);
            if ((0 !== I && o.set(D), o.set(B, I), (I = (D = o).length), U % R == 0 && 0 !== U)) {
              if (
                (null !== k.samples[0].frameDuration &&
                  ((k.baseMediaDecodeTime = 1 === H ? 0 : O), (O = F)),
                1 == _)
              )
                for (var a = k.samples.length, i = x / R, l = 0; l < a; l++)
                  k.samples[l].frameDuration = i;
              ((x = 0),
                (L = p.mediaSegment(H, k, D, k.baseMediaDecodeTime)),
                H++,
                (U = 0),
                (D = null),
                (I = 0),
                null !== f ? (f.setMediaSegment(L), !1) : !1 === b && pr(),
                2 == R && ((R = 1), (k.samples = null), (k.samples = new Array(R))));
            }
          }
        }
        function _r() {
          return w;
        }
        function vr() {
          null !== Q && Q(!1);
        }
        function Sr(e) {
          switch (e) {
            case "InitError":
              br();
              break;
            case "Error":
            case "SourceError":
            case "SourceBufferError":
              (($e = !0), (++Je > 2 || ve) && ((Je = 0), br()));
          }
        }
        function Pr(e) {
          t.log(
            "error name: ".concat(e.name, " detail: ").concat(e.message, " code: ").concat(e.code),
          );
        }
        function br() {
          if ((1 == ze ? (We = !1) : (je = !1), Ne)) Module._PLAY_SetSupportWebMSE(n, We, je);
          else {
            var e = { nType: "SetSupportWebMSE", bSupportH264MSE: We, bSupportH265MSE: je };
            qt && qt.postMessage(e);
          }
        }
        function wr() {
          (f && (f.close(), f.terminate(), (f = null)),
            (c = !1),
            (w = null),
            (d = null),
            (p = null),
            (b = !1),
            (Qe = !1),
            (U = 0),
            (k = { id: 1, samples: null, baseMediaDecodeTime: 0 }),
            (I = 0),
            (H = 1),
            (x = 0),
            (O = 0),
            (F = 0),
            1 == R && (R = 2),
            (yt = -1));
        }
        function Ar() {
          return Er.apply(this, arguments);
        }
        function Er() {
          return (Er = _t(
            ht().m(function e() {
              var t, r;
              return ht().w(
                function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        if (((st = !1), (dt = !1), (nr = !1), (t = 1), !tr)) {
                          e.n = 2;
                          break;
                        }
                        return ((e.n = 1), tr.close());
                      case 1:
                        tr = null;
                      case 2:
                        return (
                          Ne
                            ? er
                              ? ((er = !1), (t = Module._PLAY_ClosePackageRecorder(n)))
                              : (t = Module._PLAY_StopDataRecord(n))
                            : ((r = { nType: "StopRecord", bNeedResizeRecord: er }),
                              qt && qt.postMessage(r),
                              (er = !1)),
                          (Ne || (5 != lt && 6 != lt)) &&
                            et &&
                            (et.postMessage({ type: "close" }), (et = null), Y && Y()),
                          (ut = 0),
                          (Ze = 0),
                          e.a(2, t)
                        );
                    }
                },
                e,
              );
            }),
          )).apply(this, arguments);
        }
        function Mr(e, t) {
          var n = parseInt(e) || 500;
          (et.postMessage({
            type: "init",
            options: {
              recordName: t,
              singleSize: 1048576 * n,
              nameOptions: { namedBy: "date", nameFormat: ["ymd_his"] },
              limitOptions: { limitBy: "count", count: 10 },
            },
          }),
            (et.onMessage = function (e) {
              switch (e.type) {
                case "pendding":
                  break;
                case "download":
                  ((t = e.data.name),
                    (n = e.data.buffer),
                    (r = new Blob([n])),
                    ((o = document.createElement("a")).href = URL.createObjectURL(r)),
                    (o.download = t),
                    o.click(),
                    URL.revokeObjectURL(o.href),
                    (o = null),
                    (n = null));
                  break;
                case "close":
                  setTimeout(function () {
                    Ar();
                  });
              }
              var t, n, r, o;
            }));
        }
        function Tr(e, t) {
          return Cr.apply(this, arguments);
        }
        function Cr() {
          return (Cr = _t(
            ht().m(function e(r, o) {
              var i, u;
              return ht().w(
                function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        if (0 !== A) {
                          e.n = 1;
                          break;
                        }
                        return e.a(2);
                      case 1:
                        if ((1 != Ye && ((Ye = !0), dr()), fr(r.nFrameID, r.nFrameSubType))) {
                          e.n = 2;
                          break;
                        }
                        return e.a(2);
                      case 2:
                        if (
                          ((Wt = r.nFrameID),
                          (he == ye && ge == _e && r.nEncodeType == Ge) ||
                            (0 != ye && ($e = !0), (ye = he), (_e = ge), (Ge = r.nEncodeType)),
                          A != E &&
                            (!0,
                            t.info(
                              "MSE FrameRate change, PlayPort:" +
                                n +
                                ", m_nFrameRate:" +
                                A +
                                ", m_nPreFrameRate:" +
                                E,
                            ),
                            (E = A)),
                          $e && (wr(), ($e = !1)),
                          0 != Qe)
                        ) {
                          e.n = 3;
                          break;
                        }
                        if (
                          0 == r.nFrameSubType ||
                          18 == r.nFrameSubType ||
                          20 == r.nFrameSubType
                        ) {
                          e.n = 3;
                          break;
                        }
                        return e.a(2);
                      case 3:
                        if (
                          (null == d && (d = new C(ze)),
                          null == p &&
                            ((i = -1 == $n ? r.nRotateType : $n), (p = new T(ze)).SetRotateType(i)),
                          gr(o, r),
                          0 == Qe &&
                            (null == f && null != a && void 0 !== a && (f = new fe(t, s)).init(a),
                            ((u = {}).decodeMode = "video"),
                            (u.width = he),
                            (u.height = ge),
                            [2, 4, 8].includes(r.nEncodeType)
                              ? (u.encodeMode = "H264")
                              : 12 === r.nEncodeType && (u.encodeMode = "H265"),
                            G && G(u),
                            mr(),
                            pr(),
                            (Qe = !0)),
                          Yt && ((Yt = !1), f && f.capturePic([a, l], Kt)),
                          yr(),
                          to(),
                          !Ye)
                        ) {
                          e.n = 4;
                          break;
                        }
                        return ((e.n = 4), no(r));
                      case 4:
                        Ve && Ve.DrawDrawIVS(r.nFrameID);
                      case 5:
                        return e.a(2);
                    }
                },
                e,
              );
            }),
          )).apply(this, arguments);
        }
        function kr(e, o, a, i, l) {
          var u = Date.UTC(l.nYear, l.nMonth, l.nDay, l.nHour, l.nMinute, l.nSecond) / 1e3;
          if (1 == l.nFrameType) {
            if (
              (t.log(
                "PlayFrameData, PlayPort:" +
                  n +
                  ", nFrameID:" +
                  l.nFrameID +
                  ", nRemainData:" +
                  l.nRemainData,
              ),
              (Se = l.nRemainData),
              Ne && Ke && 0 == Se && (t.trace("PlayFrameData, StreamPlayOverCallback"), $()),
              l.bThrowFrame)
            )
              return;
            if (
              (8 == l.nStreamType ? (r.timestamp = u) : (r.timestamp = l.nTimeStamp / 1e3),
              (r.timestamp_usec = 0),
              2 == l.nEncodeType || 4 == l.nEncodeType || 8 == l.nEncodeType
                ? (ze = 1)
                : 12 == l.nEncodeType && (ze = 2),
              Ve && Ve.setEncodeType(ze),
              (he = l.nWidth),
              (ge = l.nHeight),
              0 == he || 0 == ge)
            )
              return;
            if (
              (A != l.nFrameRate && He && He.setFrameRate(l.nFrameRate),
              (A = l.nFrameRate),
              qe <= 5 && qe++,
              18 == l.nFrameSubType || 19 == l.nFrameSubType || 20 == l.nFrameSubType
                ? (ve = 1)
                : 0 == l.nFrameSubType && (ve = 0),
              2 == l.nFrameSubType && !en)
            ) {
              if (((en = !0), 1 == ze ? (We = !1) : 2 == ze && (je = !1), Ne))
                Module._PLAY_SetSupportWebMSE(n, We, je);
              else {
                var s = { nType: "SetSupportWebMSE", bSupportH264MSE: We, bSupportH265MSE: je };
                qt && qt.postMessage(s);
              }
              return;
            }
            if ((Ve && Ve.SetLifeCount(3 * l.nFrameRate), 0 !== e && 0 === o && 0 === a))
              (Kn || ((Kn = !0), (qn = l)),
                (Xn = l),
                0 !== bn || ur
                  ? (null === Gn && (Ve.terminate(), Ve.resize(he, ge), (Gn = new pt(Ve, ze, Pr))),
                    (Wt = l.nFrameID),
                    Gn && Gn.decode(l, e))
                  : (1 != Ye && ((Ye = !0), dr(), Ne || (Ve.SetDecodeMode(Ye), Ve.resize(he, ge))),
                    Ne ? Tr(l, e) : Ve && Ve.draw(e, o, a, l, A)));
            else {
              if (!Ne && (0 === e || 0 === o || 0 === a)) return;
              if (
                (0 != Ye && ((Ye = !1), Ve.SetDecodeMode(Ye), wr(), ($e = !0), (ye = 0), (_e = 0)),
                he != ye || ge != _e)
              )
                ((ye = he),
                  (_e = ge),
                  Ne || Ve.resize(he, ge),
                  ((c = { decodeMode: "canvas" }).width = he),
                  (c.height = ge),
                  [2, 4, 8].includes(l.nEncodeType)
                    ? (c.encodeMode = "H264")
                    : 12 === l.nEncodeType && (c.encodeMode = "H265"),
                  G && G(c));
              if ((Kn || ((Kn = !0), (qn = l)), (Xn = l), (Wt = l.nFrameID), Ne)) {
                var c;
                if (!jt)
                  ((jt = !0),
                    $r(),
                    t.log("Multi SW Play Start."),
                    ((c = { decodeMode: "canvas" }).width = he),
                    (c.height = ge),
                    [2, 4, 8].includes(l.nEncodeType)
                      ? (c.encodeMode = "H264")
                      : 12 === l.nEncodeType && (c.encodeMode = "H265"),
                    V(c),
                    ir &&
                      setTimeout(function () {
                        cr(!0);
                      }));
                (to(), Ve && Ve.DrawDrawIVS(l.nFrameID));
              } else Ve && Ve.draw(e, o, a, l, A);
            }
            var f = l.nYear,
              d = jr(l.nMonth),
              p = jr(l.nDay),
              m = jr(l.nHour),
              h = jr(l.nMinute),
              g = jr(l.nSecond);
            ((l.timeStamp = Date.UTC(f, d, p, m, h, g) / 1e3),
              (l.utcTimeStamp = new Date(
                ""
                  .concat(f, "-")
                  .concat(d, "-")
                  .concat(p, " ")
                  .concat(m, ":")
                  .concat(h, ":")
                  .concat(g),
              ).getTime()),
              (l.nSize = i),
              Ne && z(l));
          } else if (2 == l.nFrameType) {
            if (
              (Xe < 30 && Xe++,
              He &&
                (qe >= 1
                  ? (He.setVideoStartPlay(!0), He.setPureAudioFlag(!1))
                  : (Xe >= 30 || tn || Le) && (He.setVideoStartPlay(!1), He.setPureAudioFlag(!0))),
              (l.nSamples == Oe && l.nBits == Be) ||
                ((Oe = l.nSamples), (Be = l.nBits), He && He.setSampleBits(l.nSamples, l.nBits)),
              He && He.bufferAudio(e, l),
              Ne && He)
            ) {
              var y = He.getAudioBufTime();
              setTimeout(function () {
                Module._PLAY_SetInt32(n, 2057, y);
              });
            }
            if (((l.nSize = i), (l.audioData = e), Ye && st && er && nr))
              if (Ne)
                !(function (e) {
                  var t = Module._malloc(88),
                    r = Module._malloc(e.nSize);
                  (Module.writeArrayToMemory(e.audioData, r),
                    (Module.HEAP32[t / 4 + 0] = r),
                    (Module.HEAP32[t / 4 + 1] = e.nSize),
                    (Module.HEAP32[t / 4 + 2] = e.nFrameType),
                    (Module.HEAP32[t / 4 + 3] = e.nFrameSubType),
                    (Module.HEAP32[t / 4 + 4] = 0),
                    (Module.HEAP32[t / 4 + 5] = e.nFrameID),
                    (Module.HEAP32[t / 4 + 6] = e.nSamples),
                    (Module.HEAP32[t / 4 + 7] = e.nBits),
                    (Module.HEAP32[t / 4 + 8] = e.nAudioChnNum),
                    (Module.HEAP32[t / 4 + 9] = e.nYear),
                    (Module.HEAP32[t / 4 + 10] = e.nMonth),
                    (Module.HEAP32[t / 4 + 11] = e.nDay),
                    (Module.HEAP32[t / 4 + 12] = e.nHour),
                    (Module.HEAP32[t / 4 + 13] = e.nMinute),
                    (Module.HEAP32[t / 4 + 14] = e.nSecond),
                    (Module.HEAP32[t / 4 + 15] = 0));
                  for (var o = 16; o < 21; o++) Module.HEAP32[t / 4 + o] = 0;
                  (Module._PLAY_InputAudioDataToPackage(n, t), Module._free(r), Module._free(t));
                })(l);
              else {
                s = { nType: "PackageAudioData", stuFrameInfo: l };
                qt && qt.postMessage(s);
              }
            N(l);
          }
        }
        function Ir(e, t, n, r, o) {
          if (-1 != o) {
            if (n == vt)
              if (Ne || Ye) o = Wt;
              else {
                var a = Ve && Ve.GetCurrentFrameID();
                if (-1 == a || void 0 === a) return;
                o = a;
              }
            if (Ne) {
              var i = null,
                l = new ArrayBuffer(r),
                u = new Uint8Array(l);
              u.set(Module.HEAPU8.subarray(t, t + r));
              var s = new DataView(u.buffer);
              if ((ne && ne(e, u, n, r, o), bt == n)) {
                var c = {};
                ((c.NumberStat = s.getUint16(0, !0)), (c.nIntelFlowPlanNum = s.getUint16(2, !0)));
                var f = s.getUint32(4, !0),
                  d = new ArrayBuffer(12),
                  p = new Uint8Array(d),
                  m = new DataView(d);
                c.pIntelFlowPlan = new Array(c.nIntelFlowPlanNum);
                for (var h = 0; h < c.nIntelFlowPlanNum; h++) {
                  (p.set(Module.HEAPU8.subarray(f + 12 * h, f + 12 * h + 12)),
                    (c.pIntelFlowPlan[h] = {}),
                    (c.pIntelFlowPlan[h].PlanId = m.getUint16(0, !0)),
                    (c.pIntelFlowPlan[h].RuleType = m.getUint16(2, !0)),
                    (c.pIntelFlowPlan[h].RegionNum = m.getUint16(8, !0)));
                  var g = m.getUint32(4, !0),
                    y = new ArrayBuffer(12),
                    _ = new Uint8Array(y),
                    v = new DataView(y);
                  c.pIntelFlowPlan[h].pRegion = new Array(c.pIntelFlowPlan[h].RegionNum);
                  for (var S = 0; S < c.pIntelFlowPlan[h].RegionNum; S++)
                    (_.set(Module.HEAPU8.subarray(g + 12 * S, g + 12 * S + 12)),
                      (c.pIntelFlowPlan[h].pRegion[S] = {}),
                      (c.pIntelFlowPlan[h].pRegion[S].RegionId = v.getUint16(0, !0)),
                      (c.pIntelFlowPlan[h].pRegion[S].State = v.getUint16(2, !0)),
                      (c.pIntelFlowPlan[h].pRegion[S].PeopleNum = v.getUint32(4, !0)));
                }
                i = c;
              } else if (wt == n) {
                var P = {};
                ((P.nId = s.getUint32(0, !0)),
                  (P.wCustom = s.getUint16(4, !0)),
                  (P.chState = s.getUint8(6, !0)),
                  (P.chCount = s.getUint8(7, !0)));
                var b = s.getUint32(8, !0),
                  w = new ArrayBuffer(12),
                  A = new Uint8Array(w),
                  E = new DataView(w);
                P.pElement = new Array(P.chCount);
                for (var M = 0; M < P.chCount; M++) {
                  (A.set(Module.HEAPU8.subarray(b + 12 * M, b + 12 * M + 12)),
                    (P.pElement[M] = {}),
                    (P.pElement[M].nStructType = E.getUint32(0, !0)),
                    (P.pElement[M].nStructLength = E.getUint32(4, !0)));
                  var T = E.getUint32(8, !0),
                    C = P.pElement[M].nStructLength;
                  Tt === P.pElement[M].nStructType && (C = 20);
                  var k = new ArrayBuffer(C),
                    I = new Uint8Array(k),
                    D = new DataView(k);
                  if (
                    (I.set(Module.HEAPU8.subarray(T, T + C)),
                    (P.pElement[M].pStruct = {}),
                    At == P.pElement[M].nStructType)
                  )
                    ((P.pElement[M].pStruct.chType = D.getUint8(0, !0)),
                      (P.pElement[M].pStruct.chWidth = D.getUint8(1, !0)),
                      (P.pElement[M].pStruct.chStyle = D.getUint8(2, !0)),
                      (P.pElement[M].pStruct.wRadius = D.getUint16(4, !0)),
                      (P.pElement[M].pStruct.positionCircle = {}),
                      (P.pElement[M].pStruct.positionCircle.x = D.getUint16(8, !0)),
                      (P.pElement[M].pStruct.positionCircle.y = D.getUint16(10, !0)),
                      (P.pElement[M].pStruct.chLineA = D.getUint8(12, !0)),
                      (P.pElement[M].pStruct.chLineR = D.getUint8(13, !0)),
                      (P.pElement[M].pStruct.chLineG = D.getUint8(14, !0)),
                      (P.pElement[M].pStruct.chLineB = D.getUint8(15, !0)),
                      (P.pElement[M].pStruct.chRegA = D.getUint8(16, !0)),
                      (P.pElement[M].pStruct.chRegR = D.getUint8(17, !0)),
                      (P.pElement[M].pStruct.chRegG = D.getUint8(18, !0)),
                      (P.pElement[M].pStruct.chRegB = D.getUint8(19, !0)));
                  else if (Et == P.pElement[M].nStructType) {
                    ((P.pElement[M].pStruct.chType = D.getUint8(0, !0)),
                      (P.pElement[M].pStruct.chCount = D.getUint8(1, !0)),
                      (P.pElement[M].pStruct.chWidth = D.getUint8(2, !0)),
                      (P.pElement[M].pStruct.chStyle = D.getUint8(3, !0)),
                      (P.pElement[M].pStruct.chLineA = D.getUint8(4, !0)),
                      (P.pElement[M].pStruct.chLineR = D.getUint8(5, !0)),
                      (P.pElement[M].pStruct.chLineG = D.getUint8(6, !0)),
                      (P.pElement[M].pStruct.chLineB = D.getUint8(7, !0)));
                    var R = null,
                      U = null,
                      F = null,
                      x = null;
                    P.pElement[M].pStruct.chCount > 0 &&
                      ((P.pElement[M].pStruct.pPoints = new Array(P.pElement[M].pStruct.chCount)),
                      (R = D.getUint32(8, !0)),
                      (U = new ArrayBuffer(4)),
                      (F = new Uint8Array(U)),
                      (x = new DataView(U)));
                    for (var H = 0; H < P.pElement[M].pStruct.chCount; H++)
                      (F.set(Module.HEAPU8.subarray(R + 4 * H, R + 4 * H + 4)),
                        (P.pElement[M].pStruct.pPoints[H] = {}),
                        (P.pElement[M].pStruct.pPoints[H].x = x.getUint16(0, !0)),
                        (P.pElement[M].pStruct.pPoints[H].y = x.getUint16(2, !0)));
                  } else if (Mt == P.pElement[M].nStructType) {
                    ((P.pElement[M].pStruct.chType = D.getUint8(0, !0)),
                      (P.pElement[M].pStruct.chCount = D.getUint8(1, !0)),
                      (P.pElement[M].pStruct.chWidth = D.getUint8(2, !0)),
                      (P.pElement[M].pStruct.chStyle = D.getUint8(3, !0)),
                      (P.pElement[M].pStruct.chLineA = D.getUint8(4, !0)),
                      (P.pElement[M].pStruct.chLineR = D.getUint8(5, !0)),
                      (P.pElement[M].pStruct.chLineG = D.getUint8(6, !0)),
                      (P.pElement[M].pStruct.chLineB = D.getUint8(7, !0)),
                      (P.pElement[M].pStruct.chRegA = D.getUint8(8, !0)),
                      (P.pElement[M].pStruct.chRegR = D.getUint8(9, !0)),
                      (P.pElement[M].pStruct.chRegG = D.getUint8(10, !0)),
                      (P.pElement[M].pStruct.chRegB = D.getUint8(11, !0)));
                    R = null;
                    var L = null,
                      O = null,
                      B = null;
                    P.pElement[M].pStruct.chCount > 0 &&
                      ((P.pElement[M].pStruct.pPoints = new Array(P.pElement[M].pStruct.chCount)),
                      (R = D.getUint32(12, !0)),
                      (L = new ArrayBuffer(4)),
                      (O = new Uint8Array(L)),
                      (B = new DataView(L)));
                    for (H = 0; H < P.pElement[M].pStruct.chCount; H++)
                      (O.set(Module.HEAPU8.subarray(R + 4 * H, R + 4 * H + 4)),
                        (P.pElement[M].pStruct.pPoints[H] = {}),
                        (P.pElement[M].pStruct.pPoints[H].x = B.getUint16(0, !0)),
                        (P.pElement[M].pStruct.pPoints[H].y = B.getUint16(2, !0)));
                  } else if (
                    Tt == P.pElement[M].nStructType &&
                    ((P.pElement[M].pStruct.chType = D.getUint8(0, !0)),
                    (P.pElement[M].pStruct.chCharset = D.getUint8(1, !0)),
                    (P.pElement[M].pStruct.stringPos = {}),
                    (P.pElement[M].pStruct.stringPos.x = D.getUint16(4, !0)),
                    (P.pElement[M].pStruct.stringPos.y = D.getUint16(6, !0)),
                    (P.pElement[M].pStruct.chLineA = D.getUint8(8, !0)),
                    (P.pElement[M].pStruct.chLineR = D.getUint8(9, !0)),
                    (P.pElement[M].pStruct.chLineG = D.getUint8(10, !0)),
                    (P.pElement[M].pStruct.chLineB = D.getUint8(11, !0)),
                    (P.pElement[M].pStruct.chFontSize = D.getUint8(12, !0)),
                    (P.pElement[M].pStruct.chFontAlign = D.getUint8(13, !0)),
                    (P.pElement[M].pStruct.wTxtLen = D.getUint16(14, !0)),
                    P.pElement[M].pStruct.wTxtLen > 0)
                  ) {
                    var V = D.getUint32(16, !0),
                      G = new ArrayBuffer(P.pElement[M].pStruct.wTxtLen),
                      z = new Uint8Array(G);
                    new DataView(G);
                    (z.set(Module.HEAPU8.subarray(V, V + P.pElement[M].pStruct.wTxtLen)),
                      (P.pElement[M].pStruct.stringDataArray = z));
                  }
                }
                if (((P.nInfoLen = s.getUint16(12, !0)), P.nInfoLen > 0)) {
                  var N = s.getUint32(16, !0),
                    W = new ArrayBuffer(P.nInfoLen),
                    j = new Uint8Array(W);
                  (j.set(Module.HEAPU8.subarray(N, N + P.nInfoLen)), (P.pInfo = j));
                }
                i = P;
              } else if (Pt == n) {
                for (var Y = new DataView(l), K = r / 144, q = [], X = 0; X < K; X++) {
                  var J = {},
                    $ = 144 * X;
                  ((J.nIndex = Y.getInt32($ + 0, !0)),
                    (J.xPoint = Y.getUint16($ + 4, !0)),
                    (J.yPoint = Y.getUint16($ + 6, !0)));
                  var Q = new ArrayBuffer(64);
                  ((Q = l.slice($ + 8)),
                    (J.strName = Kr(Q)),
                    (J.enable = Y.getInt8($ + 72, !0)),
                    (J.titleType = Y.getInt8($ + 73, !0)),
                    (J.titleAttribute = Y.getInt8($ + 74, !0)),
                    (J.sharpType = Y.getInt8($ + 75, !0)),
                    (J.polygonNum = Y.getInt8($ + 76, !0)),
                    (J.polygon = []));
                  for (var te = 0; te < 2 * J.polygonNum; te += 2)
                    J.polygon[te] = {
                      x: Y.getInt8($ + 79 + 2 * te, !0),
                      y: Y.getInt8($ + 79 + 2 * (te + 1), !0),
                    };
                  ((q[X] = J), (Q = null));
                }
                (Z && Z(q), (Y = null), (i = q));
              } else if (St == n) {
                var re = 136 == r ? 8 : 4,
                  oe = new ArrayBuffer(r - re),
                  ae = new Uint8Array(oe);
                ae.set(Module.HEAPU8.subarray(t + re, t + r));
                var ie = new DataView(ae.buffer),
                  le = [];
                ((le.longitude = ie.getInt32(0, !0) / 1e3 / 3600),
                  (le.latitude = ie.getInt32(4, !0) / 1e3 / 3600),
                  (le.yaw = ie.getFloat32(20, !0)),
                  (le.pitch = ie.getFloat32(24, !0)),
                  (le.roll = ie.getFloat32(28, !0)),
                  (le.absoluteAltitude = ie.getFloat32(32, !0)),
                  (le.zoom = ie.getFloat32(36, !0)),
                  ee && ee(le),
                  (ie = null),
                  (i = le));
              } else i = u;
              Ve && Ve.DrawIVS(i, n, r, o);
            } else (ne && ne(e, t, n, r, o), Ve && Ve.DrawIVS(t, n, r, o));
          }
        }
        function Dr(e) {
          var r = e.data.msgType,
            a = e.data.nPort,
            i = e.data.msgData,
            l = 0,
            u = 0;
          switch ((o && ((l = parseInt(o.width)), (u = parseInt(o.height))), r)) {
            case "LoadSuccess":
              if (0 < jn) {
                var c = { nType: "setPrintLogLevel", nLogLevel: jn };
                qt.postMessage(c);
              }
              c = {
                nType: "Init",
                option: {
                  bPlayback: s,
                  bSupportMultiThread: Ne,
                  bSupportH264MSE: We,
                  bSupportH265MSE: je,
                  nCanvasWidth: l,
                  nCanvasHeight: u,
                },
              };
              if (
                (qt.postMessage(c),
                (In = !0),
                Rn ||
                  ((Rn = !0),
                  0 != Un.length && 0 != Fn.length && 0 != Hn.length && GetOriginalKey(Un, Fn, Hn)),
                Dn ||
                  ((Dn = !0),
                  0 != Un.length && 0 != xn.length && 0 != Hn.length && Zr(Un, xn, Hn, Ln)),
                !On)
              )
                for (var f = 0; f < 3; f++)
                  void 0 !== Vn[f].nFrameType &&
                    SetWebSecurityKey(Bn, Vn[f].nFrameType, Vn[f].strKey, Vn[f].stStreamInfo);
              for (var d = 0; d < Wn; d++)
                if (1 == zn || 2 == zn) {
                  c = {
                    nType: "SetSecurityKey",
                    nEncryptType: zn,
                    szKey: Nn[d].Key,
                    nKeyLen: Nn[d].KeyLen,
                    szKeyId: Nn[d].KeyId,
                    nKeyIdLen: Nn[d].KeyIdLen,
                  };
                  qt && qt.postMessage(c);
                } else if (3 == zn) {
                  c = { nType: "SetSecurityKeyEx", nEncryptType: zn, stDecryptKey: Nn[d] };
                  qt && qt.postMessage(c);
                }
              break;
            case "InitSuccess":
              ie((n = a));
              break;
            case "VisibleDecCallBack":
              (le(),
                on && on.mainCalibrateMode > 0 && ho(on.mainCalibrateMode),
                kr(i.pBufY, i.pBufU, i.pBufV, i.nSize, i.stuFrameInfo));
              break;
            case "FishEyeRegionPointsCallback":
              var p = i.winId + "_" + (i.subRegionFlag || 0);
              ((Pn[p] = i.points || []), (pn[i.winId] = i.arg4 || 0), (mn[i.winId] = i.arg5 || 0));
              break;
            case "FisheyeEptzUpdateCallback":
              hn = i.arg3 || -1;
              break;
            case "IVSDataCallBack":
              Ir(a, i.pBuf, i.nType, i.nLen, i.nReallen);
              break;
            case "DemuxdataCallBack":
              eo(a, i.pBuf, i.nSize, i.pMutexInfo);
              break;
            case "RecordDataCallBack":
              !(function (e, t, n, r) {
                if (null !== et) {
                  ut += t;
                  var o = r.nYear,
                    a = r.nMonth,
                    i = r.nDay,
                    l = r.nHour,
                    u = r.nMinute,
                    s = r.nSecond,
                    c = Date.UTC(o, a, i, l, u, s) / 1e3,
                    f = new Date(
                      ""
                        .concat(o, "-")
                        .concat(a, "-")
                        .concat(i, " ")
                        .concat(l, ":")
                        .concat(u, ":")
                        .concat(s),
                    ).getTime();
                  (W && W({ frameType: r.nFrameType, timeStamp: f, utcTimeStamp: c, length: ut }),
                    j &&
                      j({
                        frameType: r.nFrameType,
                        timeStamp: f,
                        utcTimeStamp: c,
                        data: e,
                        length: t,
                        offset: n,
                      }),
                    (5 === lt || 6 === lt || n >= Ze) &&
                      et.postMessage({ type: "addBuffer", buffer: e, offset: n, recordType: lt }),
                    n < Ze
                      ? (et && (et.postMessage({ type: "close" }), (et = null), Y && Y()),
                        (Ze = 0),
                        dt &&
                          ((et = new be(dt)),
                          Mr(ct, ft),
                          0 == lt &&
                            (et.postMessage({
                              type: "addBuffer",
                              buffer: e,
                              offset: n,
                              recordType: lt,
                            }),
                            (Ze = n))),
                        0 == Jn && (qt && qt.terminate(), (qt = null)))
                      : (Ze = n));
                }
              })(i.pRecordData, i.nLen, i.Offset, i.stuFrameInfo);
              break;
            case "DecryptionResultCallBack":
              (i.bSuccess, J(i.bSuccess));
              break;
            case "CatchPicCallBack":
              te && te(i.buffer);
              var m = new Blob([i.buffer.buffer], { type: "image/jpg" });
              Wr(m, Kt);
              break;
            case "GetOriginalKeyCallBack":
              K(i);
              break;
            case "PlayTokenDecryptResult":
              X(i);
              break;
            case "PlayTokenInfoCallBack":
              q(i.strPlayInfo);
              break;
            case "ARTagInfoCallback":
              Z && Z(i.tagInfo);
              break;
            case "GPSInfoCallback":
              ee && ee(i.GPSInfos);
              break;
            case "WorkerReceivedData":
              !(function (e) {
                Zt -= e;
                var n = 0;
                Ve && (n = Ve.GetVideoBufferSize());
                Ke &&
                  0 === Zt &&
                  (0 === n && (t.trace("WorkerReceivedData StreamPlayOverCallback"), $()),
                  Ve && Ve.SetStreamOver(!0));
              })(i.nLength);
          }
        }
        sr.prototype = {
          Init: function (e) {
            ((o = e.canvasElem),
              (a = e.videoElem),
              (i = e.ivsCanvasElem),
              (s = e.bPlayBack),
              void 0 !== e.nMSEFrameCount && (R = e.nMSEFrameCount));
            var r = 1;
            je = (function () {
              var e = S(),
                t = P(e),
                n = !1;
              switch (e) {
                case m:
                  n = t >= 104;
                  break;
                default:
                  n = 0;
              }
              return n;
            })();
            var l = navigator.platform;
            S();
            if ((0 == l.indexOf("iPhone") && ((We = !1), (je = !1)), Ne)) {
              var u = Module._malloc(1);
              if (
                ((ue = new Uint8Array(Module.HEAPU8.buffer, u, 1)),
                Module._PLAY_GetFreePort(ue.byteOffset),
                (n = ue[0]),
                (ue = null),
                Module._free(u),
                (r = Module._PLAY_SetStreamOpenMode(n, s)),
                (r = Module._PLAY_OpenStream(n, 0, 0, 10485760)),
                (r = Module._PLAY_SetCacheMode(n, 1)),
                (r = Module._PLAY_SetSupportWebMSE(n, We, je)),
                We || je)
              )
                r = Module._PLAY_Play(n, 0);
              else {
                if (!Qr()) return 0;
                Module._PLAY_ViewResolutionChanged(n, parseInt(o.width), parseInt(o.height), 0);
                var c = Module.allocateUTF8(o.id);
                ((r = Module._PLAY_Play(n, c)), Module._free(c), (Qn = !0), window.nSWDecodeNum++);
              }
              null == o &&
                (Module._PLAY_ViewResolutionChanged(n, 0, 0, 0), (r = Module._PLAY_Play(n, 0)));
            } else
              (((qt = new Worker(
                "".concat(e.strDecodeFilePath, "/VideoDecodeWorker.js"),
              )).onmessage = Dr),
                (Yn = new M(200)));
            if (
              (t.log(
                "Init, PlayPort:" +
                  n +
                  ", canvasElem:" +
                  e.canvasElem +
                  ", videoElem:" +
                  e.videoElem +
                  ", ivsCanvasElem:" +
                  e.ivsCanvasElem +
                  ", bPlayBack:" +
                  e.bPlayBack,
              ),
              t.log(
                "Init, m_bSupportMultiThread:" +
                  Ne +
                  ", m_bSupportH264MSE:" +
                  We +
                  ", m_bSupportH265MSE:" +
                  je,
              ),
              r)
            ) {
              Ne &&
                ((de = Module._malloc(5242880)),
                (pe = new Uint8Array(Module.HEAPU8.buffer, de, 5242880)));
              var d = 50;
              (s && (d = 500),
                (Ve = new se(o, i, d, s, Ne, t, this)),
                0 < jn && Ve.SetPrintLogLevel(jn),
                Ve.SetErrorCallback(re),
                Ve.SetVideoFrameInfoCallback(z),
                Ve.SetBeginDrawCallback(V),
                Ve.SetStreamOverCallback($),
                (je || We) && a && ((f = new fe(t, s)).init(a), mr()));
            }
            return ((He = new ce()), (Jn = 1), r);
          },
          SetCacheMode: function (e) {
            t.log("SetCacheMode, PlayPort:" + n + ", nMode:" + e);
            var r = 0;
            return (Ne && (r = Module._PLAY_SetCacheMode(n, e)), r);
          },
          GetPlayPort: function () {
            return n;
          },
          InputData: function (e) {
            t.log("InputData, PlayPort:" + n + ", length:" + e.length);
            var r = 1;
            if (Ne) pe && (pe.set(e), (r = Module._PLAY_InputData(n, pe.byteOffset, e.length)));
            else {
              Zt += e.length;
              var o = { nType: "InputData", pData: e };
              if (In) {
                for (; Yn.size > 0; ) {
                  var a = { nType: "InputData", pData: Yn.dequeue().buffer };
                  qt.postMessage(a);
                }
                qt.postMessage(o);
              } else Yn.enqueue(e);
            }
            return r;
          },
          Pause: function (e) {
            return cr(e);
          },
          SetPlaySpeed: function (e) {
            t.log("SetPlaySpeed, PlayPort:" + n + ", nSpeed:" + e);
            var r = 1;
            if (Ne) r = Module._PLAY_SetPlaySpeed(n, e);
            else {
              var o = { nType: "SetPlaySpeed", nSpeed: e };
              qt && qt.postMessage(o);
            }
            return (
              Ve && Ve.setPlaySpeed(e),
              e > 2
                ? setTimeout(
                    function () {
                      f && f.setPlaySpeed(e);
                    },
                    200,
                  )
                : f && f.setPlaySpeed(e),
              (_ = e),
              r
            );
          },
          SetSecurityKey: function (e, t, n, r, o) {
            return Xr(e, t, n, r, o);
          },
          SetSecurityKeyEx: function (e, r) {
            var o = 0;
            return (
              1 == e || 2 == e
                ? (o = Xr(e, r.Key, r.KeyLen, r.KeyId, r.KeyIdLen))
                : 3 == e &&
                  (o = (function (e, r) {
                    if (
                      (t.log(
                        "setSecurityKeyEx, PlayPort:" +
                          n +
                          ", nKeyLen:" +
                          r.KeyLen +
                          ", nKeyIdLen:" +
                          r.KeyIdLen,
                      ),
                      void 0 === r.Key || void 0 === r.KeyId)
                    )
                      return 0;
                    ((zn = e), (Nn[Wn] = r), Wn++);
                    var o = 1;
                    if (Ne) {
                      var a = Module._malloc(96),
                        i = 0,
                        l = new Uint8Array(Module.HEAPU8.buffer),
                        u = Module._malloc(r.KeyLen);
                      (r.Key.split("").forEach(function (e, t) {
                        ((l[(u + i) >> 0] = e.charCodeAt(0)), i++);
                      }),
                        (i = 0));
                      var s = Module._malloc(r.KeyIdLen);
                      (r.KeyId.split("").forEach(function (e, t) {
                        ((l[(s + i) >> 0] = e.charCodeAt(0)), i++);
                      }),
                        (Module.HEAP32[a / 4 + 0] = u),
                        (Module.HEAP32[a / 4 + 1] = r.KeyLen),
                        (Module.HEAP32[a / 4 + 2] = s),
                        (Module.HEAP32[a / 4 + 3] = r.KeyIdLen),
                        (o = Module._PLAY_SetSecurityKeyEx(n, e, a, r.KeyLen)),
                        Module._free(u),
                        Module._free(s),
                        Module._free(a));
                    } else {
                      var c = { nType: "SetSecurityKeyEx", nEncryptType: e, stDecryptKey: r };
                      qt && qt.postMessage(c);
                    }
                    return o;
                  })(e, r)),
              o
            );
          },
          SetInt32: function (e, r) {
            var o = 0;
            if (
              (t.log("SetInt32, PlayPort:" + n + ", nSetType:" + e + ", nValue:" + r),
              32776 == e && (gt = r),
              Ne)
            )
              o = Module._PLAY_SetInt32(n, e, r);
            else {
              var a = { nType: "SetInt32", nSetType: e, nValue: r };
              qt && qt.postMessage(a);
            }
            return o;
          },
          StartRecord: function (e, r, o, a) {
            return (
              t.log(
                "StartRecord, PlayPort:" +
                  n +
                  ", nRecordType:" +
                  e +
                  ", nFileSize:" +
                  r +
                  ", strRecordName:" +
                  o +
                  ", bSegment:" +
                  a,
              ),
              (function (e, t, r, o) {
                if (4 == e || 6 == e || 8 == e || 11 == e || 18 == e || 20 == e || 21 == e) {
                  if (!We && !je) return 0;
                  er = !0;
                }
                ((st = !0), (ut = 0), void 0 !== o && (dt = o));
                var a = 1;
                if (
                  ((et = new be(dt)),
                  Mr(t, r),
                  (Ze = 0),
                  (lt = e),
                  (ct = t),
                  (ft = r),
                  (Ze = 0),
                  Ne)
                )
                  er
                    ? (a = Module._PLAY_CreatePackageRecorder(n, lt, 0))
                    : (dt && (a = Module._PLAY_SetSegmentRecordData(n, t, null, null)),
                      (a = Module._PLAY_StartDataRecord(n, 0, lt)));
                else {
                  var i = {
                    nType: "StartRecord",
                    nRecordType: lt,
                    nFileSize: ct,
                    bSegment: dt,
                    bNeedResizeRecord: er,
                  };
                  qt && qt.postMessage(i);
                }
                return a;
              })(e, r, o, a)
            );
          },
          StopRecord: function () {
            return (t.log("StopRecord, PlayPort:" + n), Ar());
          },
          CancelRecord: function () {
            return (
              t.log("CancelRecord, PlayPort:" + n),
              (function () {
                var e = 1;
                if (Ne) e = Module._PLAY_StopDataRecord(n);
                else {
                  qt && qt.postMessage({ nType: "CancelRecord" });
                }
                et && (et.postMessage({ type: "cancel" }), (et = null));
                return ((ut = 0), e);
              })()
            );
          },
          OpenIVSDraw: function (e) {
            t.log("OpenIVSDraw, PlayPort:" + n + ", nWndIndex:" + e);
            var r = 1;
            if (Ne) r = Module._PLAY_RenderPrivateData(n, 1, 0);
            else {
              qt && qt.postMessage({ nType: "OpenIVSDraw" });
            }
            return (Ve && Ve.OpenIVS(e, i.id), r);
          },
          CloseIVSDraw: function () {
            t.log("CloseIVSDraw, PlayPort:" + n);
            var e = 1;
            if (Ne) e = Module._PLAY_RenderPrivateData(n, 0, 0);
            else {
              qt && qt.postMessage({ nType: "CloseIVSDraw" });
            }
            return (Ve && Ve.CloseIVS(), e);
          },
          SetIvsEnable: function (e, r) {
            (t.log("SetIvsEnable, PlayPort:" + n + ", nIvsType:" + e + ", bEnable:" + r),
              Ve && Ve.SetIvsEnable(e, r));
          },
          IVSSetViewProportion: function (e, r) {
            (t.log(
              "IVSSetViewProportion, PlayPort:" +
                n +
                ", nWidthProportion:" +
                e +
                ", nHeightProportion:" +
                r,
            ),
              Ve && Ve.IVSSetViewProportion(e, r));
          },
          IVSIoctl: function (e, r) {
            (t.log("IVSIoctl, PlayPort:" + n + ", nCmdType:" + e), Ve && Ve.IVSIoctl(e, r));
          },
          IVSGeneralConfig: function (e, r) {
            (t.log("IVSGeneralConfig, PlayPort:" + n + ", nIvsType:" + e),
              Ve && Ve.IVSGeneralConfig(e, r));
          },
          SetIvsIotBoxParas: function (e, r, o) {
            (t.log(
              "SetIvsIotBoxParas, PlayPort:" +
                n +
                ", imgPath:" +
                r +
                ", bRelease:" +
                e +
                ", nFontsize:" +
                o,
            ),
              Ve && Ve.SetIvsIotBoxParas(e, r, o));
          },
          SetIvsIotBoxDisplay: function (e, r, o) {
            (t.log(
              "SetIvsIotBoxDisplay, PlayPort:" + n + ", (" + e + " , " + r + ")  showType:" + o,
            ),
              Ve && Ve.SetIvsIotBoxDisplay(e, r, o));
          },
          SetIvsLanguageEnvi: function (e) {
            (t.log("SetIvsLanguageEnvi, PlayPort:" + n + ", nLanguageType:" + e),
              Ve && Ve.SetIvsLanguageEnvi(e));
          },
          SetPanoAR: function (e, r) {
            t.log("SetPanoAR, PlayPort:" + n + ", PanoARType:" + e);
            var o = 1;
            if (Ne && !Ye) {
              var a = null;
              return (
                null !== r &&
                  9 === e &&
                  ((a = Module._malloc(12)),
                  (Module.HEAPF32[a / 4 + 0] = r.VerFieldViewAngle),
                  (Module.HEAPF32[a / 4 + 1] = r.HoriFieldViewAngle),
                  (Module.HEAPF32[a / 4 + 2] = r.DownPressAngle)),
                (o = Module._PLAY_SetPanoVRMode(n, e, a)),
                (bn = e),
                null !== a && Module._free(a),
                o
              );
            }
            return (
              0 != jn && Ve && Ve.SetPrintLogLevel(jn),
              0 === bn && 0 !== e
                ? Ye
                  ? (($e = !0),
                    null === Gn && (Ve.terminate(), Ve.resize(he, ge), (Gn = new pt(Ve, ze, Pr))))
                  : (Ve.terminate(), Ve.resize(he, ge))
                : 0 !== bn &&
                  0 === e &&
                  (dr(), Ve.terminate(), Ye || Ve.resize(he, ge), (Gn = null)),
              Ve.SetPanoVRMode(e, r, he, ge),
              (bn = e),
              o
            );
          },
          Set3DPoint: function (e) {
            (t.log("Set3DPoint, PlayPort:" + n + ", b3DPoint:" + e), Ne && (nn = e));
          },
          SetRotateType: function (e) {
            return (
              t.log("SetRotateType, m_nPlayPort：" + n + ", nRotateType:" + e),
              ($n = e),
              p && p.SetRotateType(e),
              Ne ? Module._PLAY_SetRotateAngle(n, e) : (Ve && Ve.SetRotateType(e), 1)
            );
          },
          OnMouseDown: function (e, t) {
            gn &&
              (!(function (e, t, n, r) {
                if (1 === e || 5 === e) {
                  if (t > 0) ((un = 2), (an = t));
                  else if (0 === t) {
                    var o = co(n, r, e);
                    o >= 0 ? ((un = 0), (an = o + 1)) : ((un = 1), (an = 0));
                  }
                } else if (2 === e) {
                  if (t >= 0 && t <= 5) ((un = 2), (an = t));
                  else if (6 === t) {
                    var a = co(n, r, e);
                    a >= 0 ? ((un = 0), (an = a)) : ((un = 1), (an = 6));
                  }
                } else if (6 === e || 7 === e)
                  if (4 === t) {
                    var i = co(n, r, e);
                    i >= 0 ? ((un = 0), (an = i < 4 ? i : i + 1)) : ((un = 1), (an = 4));
                  } else ((un = 2), (an = t));
                else if (3 === e || 4 === e) {
                  if (t > 0) ((un = 2), (an = t));
                  else if (0 === t) {
                    var l = co(n, r, e);
                    l >= 0 ? ((un = 0), (an = l + 1)) : ((un = 1), (an = 0));
                  }
                } else if (8 === e || 0 === e)
                  if (t > 0) ((un = 2), (an = t));
                  else if (0 === t) {
                    var u = co(n, r, e);
                    u >= 0 ? ((un = 0), (an = u + 1)) : ((un = 1), (an = 0));
                  }
              })(
                po(on.mainCalibrateMode),
                (function (e, t) {
                  if (!Sn) return -1;
                  var n = _n && _n.width ? _n : o;
                  if (!n) return -1;
                  return Sn.GetWinIdByPosition(n, e, t);
                })(e, t),
                e,
                t,
              ),
              (sn = { x: e, y: t }),
              (cn = { x: e, y: t }),
              (ln = !0));
            ((kn = !0), (0 === bn && 0 === nn) || (kn = !0));
          },
          OnMouseMove: function (e, t) {
            if (
              (on && on.mainCalibrateMode > 0 && ln && kn && ((sn = cn), (cn = { x: e, y: t })),
              0 !== bn || 0 !== nn)
            ) {
              wn && ((An = e), (En = t), 0, 0, (wn = !1));
              var r = e - An,
                a = t - En;
              if (((An = e), (En = t), kn)) {
                if (Ne && !Ye) {
                  var i = Module._malloc(8),
                    l = Module._malloc(8);
                  (Module._PLAY_GetDoubleRegion(n, 0, 2050, i),
                    Module._PLAY_GetDoubleRegion(n, 0, 2051, l),
                    (Mn = Module.HEAPF64[i / 8]),
                    (Tn = Module.HEAPF64[l / 8]),
                    Module._free(i),
                    Module._free(l));
                } else {
                  if (!Ve)
                    return void console.log("[Error]The m_playMethod is invalid in OnMouseMove!");
                  ((Mn = Ve.GetModelRotate().x), (Tn = Ve.GetModelRotate().y));
                }
                var u = o && o.height;
                (Math.abs(r) >= Math.abs(a) ? (Tn += (-2 * r * Cn) / u) : (Mn += (-2 * a * Cn) / u),
                  Ne && !Ye
                    ? Module._PLAY_SetStereoRotate(n, 0, Mn, Tn, 0)
                    : Ve.SetModelRotate(Mn, Tn, 0));
              }
            }
          },
          OnMouseUp: function () {
            ((cn = { x: 0, y: 0 }),
              (sn = { x: 0, y: 0 }),
              (ln = !1),
              (un = 0),
              (an = -1),
              (0 === bn && 0 === nn) || (kn = !1));
          },
          OnMouseWheel: function (e) {
            if (0 !== bn || 0 !== nn)
              if ((e < 0 ? Cn >= 10 && (Cn -= 2) : Cn <= 120 && (Cn += 2), Ne && !Ye))
                Module._PLAY_SetStereoPerspectiveFovy(n, 0, Cn);
              else {
                if (!Ve)
                  return void console.log("[Error]The m_playMethod is invalid in OnMouseWheel!");
                Ve.SetStereoPerspectiveFovy(Cn);
              }
          },
          GetVRCoord2DTrans: function (e, t) {
            return (function (e, t) {
              var r;
              if (Ne && !Ye) {
                var o = Module._malloc(4),
                  a = Module._malloc(4);
                (Module._PLAY_GetVRCoord2DTrans(n, 0, e, t, o, a),
                  (r = { x: Module.HEAPF32[o / 4], y: Module.HEAPF32[a / 4] }),
                  Module._free(o),
                  Module._free(a));
              } else {
                if (!Ve)
                  return void console.log(
                    "[Error]The m_playMethod is invalid in GetVRCoord2DTrans!",
                  );
                r = Ve.GetVRCoord2DTrans(e, t);
              }
              return [((r.x + 1) / 2) * i.width, ((1 - r.y) / 2) * i.height];
            })(e, t);
          },
          GetVRCoord3DTrans: function (e, t) {
            return (function (e, t) {
              var r;
              if (Ne && !Ye) {
                var o = Module._malloc(4),
                  a = Module._malloc(4);
                (Module._PLAY_GetVRCoord3DTrans(n, 0, e, t, o, a),
                  (r = { x: Module.HEAP32[OutXPtr / 4], y: Module.HEAP32[OutYPtr / 4] }),
                  Module._free(OutXPtr),
                  Module._free(OutYPtr));
              } else {
                if (!Ve)
                  return void console.log(
                    "[Error]The m_playMethod is invalid in GetVRCoord3DTrans!",
                  );
                r = Ve.GetVRCoord3DTrans(e, t);
              }
              return [r.x, r.y];
            })(e, t);
          },
          SetSoundState: function (e) {
            (t.log("SetSoundState, PlayPort:" + n + ", bPlay:" + e), He && He.setSoundState(e));
          },
          SetVolume: function (e) {
            (t.log("SetVolume, PlayPort:" + n + ", nVolume:" + e), He && He.setVolume(e));
          },
          SetPureAudio: function (e) {
            (t.log("SetPureAudio, PlayPort:" + n + ", bPureAudio:" + e), (Le = e));
          },
          ChooseAudioChannel: function (e, r) {
            t.log("ChooseAudioChannel, PlayPort:" + n + ", nChannelID:" + e + ", bFlag:" + r);
            var o = 1;
            if (Ne) o = Module._PLAY_ChooseAudio(n, e, r);
            else {
              var a = { nType: "ChooseAudioChannel", nChannelID: e, bFlag: r };
              qt && qt.postMessage(a);
            }
            return o;
          },
          SetRtpInterlevedID: function (e) {
            Xt ? Xt.setRtpInterlevedID(e) : (Qt = e);
          },
          StartTalk: function (e, r) {
            if (
              (t.log("StartTalk, PlayPort:" + n + ", nEncodeType:" + e + ", nSampleRate:" + r), !Xt)
            ) {
              var o = void 0 !== window.ASPLiteModule;
              ((Jt = new tt(o, r)),
                (Xt = new nt(Jt, Qt)).setSendAudioTalkBufferCallback(ae),
                Xt.setCapturePcmDataCallback(Jr),
                Xt.initAudioOut(e, r),
                He && He.setTalkFlag(!0),
                He && o && He.setAudioProcesser(Jt));
            }
          },
          StopTalk: function () {
            (t.log("StopTalk, PlayPort:" + n),
              Xt && (Xt.terminate(), (Xt = null)),
              He && (He.setTalkFlag(!1), He.setAudioProcesser(null)),
              Jt && (Jt.StopProcess(), (Jt = null)));
          },
          StartVideoCapture: function (e, r, o) {
            (t.log("StartVideoCapture, PlayPort:" + n + ", nEncodeType:" + r),
              $t || (($t = new rt(o)).setBufferCallBack(ae), $t.initVideoCapture(0, 0)));
          },
          StopVideoCapture: function () {
            (t.log("StopVideoCapture, PlayPort:" + n), $t && ($t.terminate(), ($t = null)));
          },
          StartFishEye: function () {
            if ((t.trace("StartFishEye, PlayPort:" + n), this.SetDecodeMode(!1, !1), Ne)) {
              if (!Module._PLAY_StartFisheye(n)) return void (gn = !1);
              gn = !0;
            } else if (!Ne && qt) {
              (qt.postMessage({ nType: "StartFisheye" }), (gn = !0));
            }
          },
          StopFishEye: function () {
            if ((t.log("StopFishEye, PlayPort:" + n), Ne))
              Module._PLAY_StopFisheye(n) && ((gn = !1), (yn = !1), fo());
            else if (qt) {
              (qt.postMessage({ nType: "StopFisheye" }), (gn = !1), (yn = !1), fo());
            }
          },
          allocFisheyeSubMode: function (e) {
            if (!e) return 0;
            var t = Module._malloc(32),
              n = Module.HEAP32,
              r = Module.HEAP16,
              o = t >> 2,
              a = t >> 1;
            ((n[o + 0] = e.subMountMode || 0),
              (n[o + 1] = e.subCalibrateMode || 0),
              (n[o + 2] = e.imgOutput ? e.imgOutput.w : 0),
              (n[o + 3] = e.imgOutput ? e.imgOutput.h : 0),
              (r[a + 8] = e.upperLeft ? e.upperLeft.x : 0),
              (r[a + 9] = e.upperLeft ? e.upperLeft.y : 0));
            var i = e.reserved || [];
            return ((n[o + 5] = i[0] || 0), (n[o + 6] = i[1] || 0), (n[o + 7] = i[2] || 0), t);
          },
          allocFisheyeEptzParams: function (e) {
            if (!e) return 0;
            var t = Module._malloc(96),
              n = Module.HEAP32,
              r = t >> 2;
            ((n[r + 0] = e.ePtzCmd || 0),
              (n[r + 1] = e.winId || 0),
              (n[r + 2] = e.arg1 || 0),
              (n[r + 3] = e.arg2 || 0),
              (n[r + 4] = e.arg3 || 0),
              (n[r + 5] = e.arg4 || 0),
              (n[r + 6] = e.arg5 || 0),
              (n[r + 7] = e.arg6 || 0));
            var o = e.reserved0 || [0, 0, 0, 0, 0, 0];
            ((n[r + 8] = o[0] || 0),
              (n[r + 9] = o[1] || 0),
              (n[r + 10] = o[2] || 0),
              (n[r + 11] = o[3] || 0),
              (n[r + 12] = o[4] || 0),
              (n[r + 13] = o[5] || 0),
              (n[r + 14] = e.pParam || 0),
              (n[r + 15] = e.pResult || 0),
              (n[r + 16] = e.pArg || 0));
            var a = e.reserved1 || [0, 0, 0, 0, 0, 0, 0];
            return (
              (n[r + 17] = a[0] || 0),
              (n[r + 18] = a[1] || 0),
              (n[r + 19] = a[2] || 0),
              (n[r + 20] = a[3] || 0),
              (n[r + 21] = a[4] || 0),
              (n[r + 22] = a[5] || 0),
              (n[r + 23] = a[6] || 0),
              t
            );
          },
          readFisheyeEptzParams: function (e) {
            if (!e) return null;
            var t = Module.HEAP32,
              n = e >> 2;
            return {
              ePtzCmd: t[n + 0],
              winId: t[n + 1],
              arg1: t[n + 2],
              arg2: t[n + 3],
              arg3: t[n + 4],
              arg4: t[n + 5],
              arg5: t[n + 6],
              arg6: t[n + 7],
              pParam: t[n + 14],
              pResult: t[n + 15],
              pArg: t[n + 16],
            };
          },
          allocFisheyeOutputFormat: function (e) {
            if (!e) return { outputFormatPtr: 0, subModePtr: 0 };
            var t = Module.HEAP32,
              n = Module._malloc(40),
              r = n >> 2,
              o = this.allocFisheyeSubMode(e.subMode);
            return (
              (t[r++] = e.mainShowSize ? e.mainShowSize.w : 0),
              (t[r++] = e.mainShowSize ? e.mainShowSize.h : 0),
              (t[r++] = e.floatMainShowSize ? e.floatMainShowSize.w : 0),
              (t[r++] = e.floatMainShowSize ? e.floatMainShowSize.h : 0),
              (t[r++] = e.imgOutput ? e.imgOutput.w : 0),
              (t[r++] = e.imgOutput ? e.imgOutput.h : 0),
              (t[r++] = o),
              (t[r++] = e.subModeNum || 0),
              (t[r++] = e.outputSizeRatio || 256),
              (t[r++] = (e.reserved && e.reserved[0]) || 0),
              { outputFormatPtr: n, subModePtr: o }
            );
          },
          allocFisheyeOptParam: function (e) {
            if (!e) return { optParamPtr: 0, outputFormatPtr: 0 };
            var t = this.allocFisheyeOutputFormat(e.outputFormat),
              n = t.outputFormatPtr,
              r = t.subModePtr,
              o = Module._malloc(372),
              a = Module.HEAP32,
              i = o >> 2;
            ((a[i++] = e.mainStreamSize ? e.mainStreamSize.w : 0),
              (a[i++] = e.mainStreamSize ? e.mainStreamSize.h : 0),
              (a[i++] = e.originX || 0),
              (a[i++] = e.originY || 0),
              (a[i++] = e.radius || 0),
              (a[i++] = e.lensDirection || 0),
              (a[i++] = e.mainMountMode || 0),
              (a[i++] = e.mainCalibrateMode || 0));
            for (
              var l = (e.modeInitParam && e.modeInitParam.regionParam) || [], u = 0;
              u < 9;
              u++
            ) {
              var s = l[u] || {};
              ((a[i++] = s.x || 0),
                (a[i++] = s.y || 0),
                (a[i++] = s.hAngle || 0),
                (a[i++] = s.vAngle || 0),
                (a[i++] = s.available || 0));
              var c = s.reserved || [];
              ((a[i++] = c[0] || 0), (a[i++] = c[1] || 0), (a[i++] = c[2] || 0));
            }
            ((a[i++] = (e.modeInitParam && e.modeInitParam.circularOffset) || 0),
              (a[i++] = (e.modeInitParam && e.modeInitParam.panoramaOffset) || 0),
              (a[i++] = (e.modeInitParam && e.modeInitParam.useRegionParam) || 0));
            var f = (e.modeInitParam && e.modeInitParam.reserved) || [];
            ((a[i++] = f[0] || 0),
              (a[i++] = n),
              (a[i++] = 0),
              (a[i++] = e.enableAutoContrast || 0),
              (a[i++] = e.alphaHistogram || 128),
              (a[i++] = e.alphaGray || 245),
              (a[i++] = e.captureSize ? e.captureSize.w : 0),
              (a[i++] = e.captureSize ? e.captureSize.h : 0),
              (a[i++] = e.mhfptzIndex || 0));
            var d = e.reserved || [];
            return ((a[i++] = d[0] || 0), { optParamPtr: o, outputFormatPtr: n, subModePtr: r });
          },
          drawFishEyeCanavas: function (e, t) {
            ((on.mainMountMode = e), (on.mainCalibrateMode = t), ho(t));
          },
          SetFishEyeMode: function (e, r) {
            if (
              (Sn && (Sn.ClearPointChains(), (Pn = null), (Sn = null)),
              (Sn = new Me()),
              (on.mainMountMode = e),
              (on.mainCalibrateMode = r),
              (on.mainStreamSize.w = he),
              (on.mainStreamSize.h = ge),
              Ne && !Ye && gn)
            ) {
              var o = this.allocFisheyeOptParam(on);
              if (o.optParamPtr) {
                if (!Module._PLAY_OptFisheyeParams(n, Nt, o.optParamPtr)) {
                  var a = Module._PLAY_GetLastError(n);
                  return void t.error("SetFishEyeMode failed, PlayPort:" + n + ", Error:" + a);
                }
                ((yn = !0),
                  o.subModePtr && Module._free(o.subModePtr),
                  o.outputFormatPtr && Module._free(o.outputFormatPtr),
                  Module._free(o.optParamPtr));
              }
            } else if (!Ne && qt) {
              var i = { nType: "SetFishEyeMode", fisheyeOptParam: on };
              (qt.postMessage(i), (yn = !0));
            }
          },
          GetSourceBufferRemain: function () {
            var e = 0;
            return (
              (e = Ne ? Module._PLAY_GetSourceBufferRemain(n) : Zt),
              t.log("GetSourceBufferRemain, PlayPort:" + n + ", nRemain:" + e),
              e
            );
          },
          SetStreamOver: function (e) {
            if (
              (t.trace(
                "SetStreamOver, PlayPort:" +
                  n +
                  ", bOver:" +
                  e +
                  ", m_nRemainData:" +
                  Se +
                  ", m_nSTBufferRemain:" +
                  Zt,
              ),
              (Ke = e),
              Ne)
            )
              Ke &&
                (t.log("_PLAY_Flush, PlayPort:" + n),
                Module._PLAY_Flush(n),
                0 == Se && (t.trace("SetStreamOver, StreamPlayOverCallback"), $()));
            else {
              var r = 0;
              (Ve && (r = Ve.GetVideoBufferSize()),
                Ke &&
                  0 == Zt &&
                  (0 === r && (t.trace("SetStreamOver, StreamPlayOverCallback"), $()),
                  Ve && Ve.SetStreamOver(!0)),
                e || (Ve && Ve.SetStreamOver(!1)));
            }
          },
          ResetBuffer: function (e) {
            (t.log("ResetBuffer, PlayPort:" + n + ", nBufType:" + e),
              Ne ? Module._PLAY_ResetBuffer(n, e) : 3 === e && Ve && Ve.ResetBuffer());
          },
          capturePic: function (e) {
            if ((t.log("capturePic, PlayPort:" + n + ", strPictureName:" + e), (Kt = e), Ye))
              Yt = !0;
            else {
              var r = !1;
              if ((null != Zn && null != l && (r = !0), Ne)) {
                var o = (he * ge * 3) / 2,
                  a = Module._malloc(o),
                  i = new Uint8Array(Module.HEAPU8.buffer, a, o),
                  u = Module._malloc(4),
                  s = new Uint8Array(Module.HEAPU8.buffer, u, 4);
                Module._PLAY_GetPicJPEG(n, i.byteOffset, o, s.byteOffset, 100);
                var c = (s[3] << 24) + (s[2] << 16) + (s[1] << 8) + s[0],
                  f = new ArrayBuffer(c),
                  d = new Uint8Array(f);
                if ((d.set(Module.HEAPU8.subarray(i.byteOffset, i.byteOffset + c)), r))
                  !(function (e) {
                    ao.apply(this, arguments);
                  })(d);
                else {
                  te && te(d);
                  var p = new Blob([d.buffer], { type: "image/jpg" });
                  (Wr(p, Kt), (p = null));
                }
                (Module._free(a), Module._free(u), (i = null), (s = null), (f = null), (d = null));
              } else if (r)
                createImageBitmap(l).then(function (e) {
                  var t = { nType: "CatchPic", bWithWaterMask: r, waterMaskBitmap: e };
                  qt && qt.postMessage(t);
                });
              else {
                var m = { nType: "CatchPic", bWithWaterMask: r, waterMaskBitmap: null };
                qt && qt.postMessage(m);
              }
            }
          },
          OpenPlayGroup: function () {
            var e = null;
            return (
              Ne && (e = Module._PLAY_OpenPlayGroup()), t.log("OpenPlayGroup, pGroupHandle:" + e), e
            );
          },
          AddToPlayGroup: function (e, n) {
            t.log("AddToPlayGroup, pGroupHandle:" + e + ", nPort:" + n);
            var r = 0;
            return (Ne && (r = Module._PLAY_AddToPlayGroup(e, n)), r);
          },
          DelFromPlayGroup: function (e, n) {
            t.log("DelFromPlayGroup, pGroupHandle:" + e + ", nPort:" + n);
            var r = 0;
            return (Ne && (r = Module._PLAY_DelFromPlayGroup(e, n)), r);
          },
          ClosePlayGroup: function (e) {
            t.log("ClosePlayGroup, pGroupHandle:" + e);
            var n = 0;
            return (Ne && (n = Module._PLAY_ClosePlayGroup(e)), n);
          },
          PausePlayGroup: function (e, n) {
            t.log("PausePlayGroup, pGroupHandle:" + e + ", bPause:" + n);
            var r = 0;
            return (Ne && (r = Module._PLAY_PausePlayGroup(e, n)), r);
          },
          SetPlayGroupSpeed: function (e, n) {
            t.log("SetPlayGroupSpeed, pGroupHandle:" + e + ", fSpeed:" + n);
            var r = 0;
            return (Ne && (r = Module._PLAY_SetPlayGroupSpeed(e, n)), r);
          },
          SetAudioTalkFlag: function (e) {
            (t.log("SetAudioTalkFlag, PlayPort:" + n + ", bAudioTalk:" + e), (tn = e));
          },
          SetDecodeMode: function (e, r, o) {
            if (
              (t.log(
                "SetDecodeMode, PlayPort:" +
                  n +
                  ", nH264DecodeMode:" +
                  e +
                  ", nH265DecodeMode:" +
                  r +
                  ", bWebCodecs:" +
                  o,
              ),
              (We = e),
              (je = r),
              void 0 !== o && (ur = o),
              Ne)
            )
              Module._PLAY_SetSupportWebMSE(n, e, r);
            else {
              var a = { nType: "SetSupportWebMSE", bSupportH264MSE: e, bSupportH265MSE: r };
              qt && qt.postMessage(a);
            }
          },
          SetColor: function (e, r, o, a) {
            (t.log(
              "SetColor, PlayPort:" +
                n +
                ", nBrightness:" +
                e +
                ", nContrast:" +
                r +
                ", nSaturation:" +
                o +
                ", nHue:" +
                a,
            ),
              Ne ? Module._PLAY_SetColor(n, 0, e, r, o, a) : Ve.SetColor(e, r, o, a));
          },
          SetDisplayRegion: function (e, r) {
            var i = 0,
              l = 0;
            if (
              (Ye
                ? ((i = a && a.offsetWidth), (l = a && a.offsetHeight))
                : ((i = o && o.width), (l = o && o.height)),
              t.trace(
                "SetDisplayRegion, PlayPort:" +
                  n +
                  ", bEnable:" +
                  r +
                  ", nWinWidth:" +
                  i +
                  ", nWinHeight:" +
                  l,
              ),
              0 == i || 0 == l)
            )
              return 0;
            if (void 0 === e || (r && null == e))
              return (t.warn("SetDisplayRegion, Invalid parameter"), -1);
            var u = {};
            if (null != e) {
              if (
                e.left < 0 ||
                e.right < 0 ||
                e.top < 0 ||
                e.bottom < 0 ||
                e.left >= e.right ||
                e.top >= e.bottom ||
                e.right > i ||
                e.bottom > l
              )
                return (
                  t.warn(
                    "SetDisplayRegion, Invalid parameter, left:" +
                      e.left +
                      ", right:" +
                      e.right +
                      ", top:" +
                      e.top +
                      ", bottom:" +
                      e.bottom,
                  ),
                  -1
                );
              ((u.left = (e.left / i) * he),
                (u.top = (e.top / l) * ge),
                (u.right = (e.right / i) * he),
                (u.bottom = (e.bottom / l) * ge));
            }
            if (Ye) {
              if (null != a) {
                var s = a.parentElement;
                if (r) {
                  var c = a.getBoundingClientRect(),
                    f = (e.left + e.right) / 2,
                    d = (e.top + e.bottom) / 2,
                    p = i / (e.right - e.left),
                    m = l / (e.bottom - e.top),
                    h = Math.max(p, m),
                    g = Math.max(1, Math.min(h, 100)),
                    y = c.width * g,
                    _ = c.height * g,
                    v = i / 2 - f,
                    S = l / 2 - d,
                    P = Math.max(0, (y - i) / 2),
                    b = Math.max(0, (_ - l) / 2),
                    w = Math.max(-P, Math.min(v, P)),
                    A = Math.max(-b, Math.min(S, b));
                  (t.trace(
                    "SetDisplayRegion, originX:" +
                      f +
                      ", originY:" +
                      d +
                      ", safeX:" +
                      w +
                      ", safeY:" +
                      A +
                      ", clampedScale:" +
                      g,
                  ),
                    (a.style.transformOrigin = "".concat(f, "px ").concat(d, "px")),
                    (a.style.transform = "translate("
                      .concat(w, "px, ")
                      .concat(A, "px) scale(")
                      .concat(g, ")")),
                    (a.style.transition = "transform 0.1s ease"),
                    s && (s.style.overflow = "hidden"));
                } else
                  ((a.style.transform = "none"),
                    (a.style.transformOrigin = "0 0"),
                    (a.style.transition = "none"),
                    s && (s.style.overflow = ""));
              }
              return 1;
            }
            if (Ne) {
              var E = Module.allocateUTF8(o.id);
              if (r) {
                var M = Module._malloc(16);
                ((Module.HEAP32[M / 4 + 0] = u.left),
                  (Module.HEAP32[M / 4 + 1] = u.top),
                  (Module.HEAP32[M / 4 + 2] = u.right),
                  (Module.HEAP32[M / 4 + 3] = u.bottom),
                  Module._PLAY_SetDisplayRegion(n, 0, M, E, 1),
                  Module._free(M));
              } else Module._PLAY_SetDisplayRegion(n, 0, null, E, 1);
              Module._free(E);
            } else Ve.SetDisplayRegion(u, r);
            return 1;
          },
          SetYUVOSDInfoEx: function (e) {
            var t = o && o.width,
              r = o && o.height;
            if (0 != t && 0 != r && 0 != e.osdCount)
              if (Ne) {
                for (
                  var a = e.osdCount,
                    i = Module._malloc(18376),
                    l = new Uint8Array(Module.HEAPU8.buffer),
                    u = 0;
                  u < 18376;
                  u++
                )
                  l[i + u] = 0;
                Module.HEAPU8[i + 0] = 1;
                var s = 0;
                ("Font.bin".split("").forEach(function (e, t) {
                  var n = e.charCodeAt(0);
                  ((l[i + s + 1] = n), s++);
                }),
                  (Module.HEAP32[i / 4 + 65] = a));
                for (var c = 0; c < a; c++) {
                  var f = (e.osdList[c].pointX / t) * he,
                    d = (e.osdList[c].pointY / r) * ge;
                  ((Module.HEAP32[i / 4 + 66 + 141 * c] = f),
                    (Module.HEAP32[i / 4 + 67 + 141 * c] = d),
                    (Module.HEAP32[i / 4 + 68 + 141 * c] = e.osdList[c].colorR),
                    (Module.HEAP32[i / 4 + 69 + 141 * c] = e.osdList[c].colorG),
                    (Module.HEAP32[i / 4 + 70 + 141 * c] = e.osdList[c].colorB),
                    (Module.HEAP32[i / 4 + 71 + 141 * c] = e.osdList[c].colorA),
                    (s = 0));
                  for (var p = qr(e.osdList[c].strOsdData), m = 0; m < p.length; m++)
                    ((l[(i + s + 288 + 564 * c) >> 0] = p[m]), s++);
                  ((Module.HEAP32[i / 4 + 200 + 141 * c] = e.osdList[c].fontX),
                    (Module.HEAP32[i / 4 + 201 + 141 * c] = e.osdList[c].fontY),
                    (Module.HEAP32[i / 4 + 202 + 141 * c] = e.osdList[c].rotateAngle),
                    (Module.HEAPU8[i + 812 + 564 * c] = e.osdList[c].coordinate8192));
                }
                (Module._PLAY_SetYUVOSDInfoEx(n, i), Module._free(i));
              } else {
                var h = { nType: "SetYUVOSDInfoEx", OSDInfo: e };
                qt && qt.postMessage(h);
              }
          },
          GetOriginalKey: function (e, r, o) {
            t.log("GetOriginalKey, PlayPort:" + n);
            var a = 1;
            if (Ne) {
              var i = Module.intArrayFromString(e).concat(0),
                l = Module._malloc(i.length);
              Module.HEAPU8.set(i, l);
              var u = Module.intArrayFromString(r).concat(0),
                s = Module._malloc(u.length);
              Module.HEAPU8.set(u, s);
              var c = null;
              if (null !== o) {
                var f = Module.intArrayFromString(o).concat(0);
                ((c = Module._malloc(f.length)), Module.HEAPU8.set(f, c));
              }
              var d = Module._malloc(256),
                p = Module._malloc(4);
              a = Module._PLAY_GetOriginalKey(n, l, s, c, d, p);
              var m = Module.HEAP32[p >> 2],
                h = "";
              if (1 == a && m <= 256) {
                var g = new ArrayBuffer(m);
                (new Uint8Array(g).set(Module.HEAPU8.subarray(d, d + m)), (h = Yr(g)));
              }
              if (
                (Module._free(l),
                Module._free(s),
                Module._free(c),
                Module._free(d),
                Module._free(p),
                null === o)
              )
                return h;
              K({ nRet: a, outKey: h });
            } else if (In) {
              Rn = !0;
              var y = {
                nType: "GetOriginalKeyCallBack",
                playToken: e,
                playTokenKey: r,
                deviceID: o,
              };
              qt && qt.postMessage(y);
            } else ((Un = e), (Fn = r), (Hn = o));
            return a;
          },
          SetPlayTokenToDecrypt: function (e, t, n, r) {
            Zr(e, t, n, r);
          },
          SetWebSecurityKey: function (e, r, o, a) {
            if ((t.log("SetWebSecurityKey, PlayPort:" + n), !Ne))
              if (In) {
                ((21 != r && 22 != r) || (r = 2), (On = !0));
                var i = {
                  nType: "SetWebSecurityKey",
                  nDecryptType: e,
                  nFrameType: r,
                  strKey: o,
                  stStreamInfo: a,
                };
                qt && qt.postMessage(i);
              } else
                ((Bn = e),
                  1 == r
                    ? ((Vn[0].nFrameType = r), (Vn[0].strKey = o), (Vn[0].stStreamInfo = a))
                    : 21 == r
                      ? ((Vn[1].nFrameType = 2), (Vn[1].strKey = o), (Vn[1].stStreamInfo = a))
                      : 22 == r &&
                        ((Vn[2].nFrameType = 2), (Vn[2].strKey = o), (Vn[2].stStreamInfo = a)));
          },
          ResetPlayState: function () {
            (t.log("ResetPlayState, PlayPort:" + n),
              Ve && Ve.ResetPlayState(),
              f && f.ResetPlayState());
          },
          Stop: function () {
            return (function e() {
              Jn = 0;
              var r = 1;
              if (Ne) {
                if (
                  ((r = Module._PLAY_GetThreadRunningState(n)),
                  t.log("GetThreadRunningState, PlayPort:" + n + ", nRet:" + r),
                  0 == r)
                )
                  return (
                    setTimeout(
                      function () {
                        e();
                      },
                      10,
                    ),
                    1
                  );
                if ((t.log("Stop, PlayPort:" + n), 0 == (r = Module._PLAY_Stop(n)))) return r;
                ((r = Module._PLAY_CloseStream(n)),
                  (pe = null),
                  Module._free(de),
                  Qn && (window.nSWDecodeNum--, (Qn = !1)));
              } else {
                (qt &&
                  (qt.postMessage({ nType: "Stop" }),
                  (null != et && 5 === lt && 6 === lt) || (qt.terminate(), (qt = null))),
                  (In = !1),
                  null !== Yn && (Yn.clear(), (Yn = null)));
              }
              (wr(),
                ($n = -1),
                -1,
                (Pe = null),
                (we = null),
                (Ae = null),
                (Ie = null),
                (De = null),
                (Re = null),
                (Ue = null),
                (Fe = null),
                (xe = null),
                (ot = null),
                (at = null),
                (it = null),
                (st = !1),
                null !== Gn && (Gn.close(), (Gn = null)));
              He && (He.terminate(), He.setAudioProcesser(null), (He = null), (Le = !1));
              Xt && (Xt.terminate(), (Xt = null));
              $t && ($t.terminate(), ($t = null));
              Jt && (Jt.StopProcess(), (Jt = null));
              Ve && (Ve.stopRendering(), Ve.CleanScreen(0, 0, 0, 0), Ve.terminate(), (Ve = null));
              ((ye = 0),
                (_e = 0),
                (Ge = 0),
                (w = null),
                (v = null),
                ($e = !1),
                (b = !1),
                (Je = 0),
                (qe = 0),
                (Xe = 0),
                (Qe = !1),
                (Wt = -1),
                (jt = !1),
                (Ye = !1),
                (tn = !1),
                (Zt = 0),
                (en = !1),
                (Kn = !1),
                (qn = null),
                (Xn = null),
                (zn = 0));
              for (var o = 0; o < Wn; o++) Nn[o] = {};
              return ((Wn = 0), (ir = !1), (lr = !0), r);
            })();
          },
          FrameDataCallBack: function (e, t, n, o, a, i) {
            var l = {};
            (we ||
              ((Pe = new ArrayBuffer(292)), (we = new Uint8Array(Pe)), (Ae = new DataView(Pe))),
              we.set(Module.HEAPU8.subarray(i, i + 292)),
              (l.nFrameType = Ae.getInt32(0, !0)),
              (l.nFrameID = Ae.getInt32(4, !0)),
              (l.nFrameSubType = Ae.getInt32(56, !0)),
              (l.nYear = Ae.getUint16(40, !0)),
              (l.nMonth = Ae.getUint16(42, !0)),
              (l.nDay = Ae.getUint16(46, !0)),
              (l.nHour = Ae.getUint16(48, !0)),
              (l.nMinute = Ae.getUint16(50, !0)),
              (l.nSecond = Ae.getUint16(52, !0)));
            var u = Date.UTC(l.nYear, l.nMonth, l.nDay, l.nHour, l.nMinute, l.nSecond) / 1e3;
            if (1 == l.nFrameType)
              if (
                ((l.nRemainData = Ae.getInt32(36, !0)),
                (l.bThrowFrame = Ae.getUint8(120, !0)),
                0 == l.bThrowFrame)
              ) {
                if (
                  ((l.nEncodeType = Ae.getInt32(108, !0)),
                  (l.nStreamType = Ae.getInt32(112, !0)),
                  (l.nTimeStamp = Ae.getUint32(8, !0)),
                  8 == l.nStreamType ? (r.timestamp = u) : (r.timestamp = l.nTimeStamp / 1e3),
                  (r.timestamp_usec = 0),
                  2 == l.nEncodeType || 4 == l.nEncodeType || 8 == l.nEncodeType
                    ? (ze = 1)
                    : 12 == l.nEncodeType && (ze = 2),
                  (l.nWidth = Ae.getInt32(12, !0)),
                  (l.nHeight = Ae.getInt32(16, !0)),
                  0 == l.nWidth || 0 == l.nHeight)
                )
                  return;
                if (
                  ((l.nFrameRate = Ae.getInt32(20, !0)),
                  (l.nStride = Ae.getInt32(116, !0)),
                  (l.nRotateType = Ae.getUint8(122, !0)),
                  18 == l.nFrameSubType || 19 == l.nFrameSubType || 20 == l.nFrameSubType
                    ? (ve = 1)
                    : 0 == l.nFrameSubType && (ve = 0),
                  0 !== t && 0 === n && 0 === o)
                )
                  ((ke = new ArrayBuffer(a)),
                    (me = new Uint8Array(ke)).set(Module.HEAPU8.subarray(t, t + a)),
                    kr(me, 0, 0, a, l));
                else {
                  if (0 == t || 0 == n || 0 == o) return;
                  if (Ne) gn && on && on.mainCalibrateMode > 0 && ho(on.mainCalibrateMode);
                  else {
                    (l.nWidth == ye && l.nHeight == _e && null != Ue) ||
                      ((Ie = null),
                      (De = null),
                      (Re = null),
                      (Ue = null),
                      (Fe = null),
                      (xe = null),
                      (Ie = new ArrayBuffer(l.nWidth * l.nHeight)),
                      (Ue = new Uint8Array(Ie)),
                      (De = new ArrayBuffer((l.nWidth * l.nHeight) / 4)),
                      (Fe = new Uint8Array(De)),
                      (Re = new ArrayBuffer((l.nWidth * l.nHeight) / 4)),
                      (xe = new Uint8Array(Re)));
                    var s = 0;
                    for (s = 0; s < l.nHeight; s++)
                      Ue.set(
                        Module.HEAPU8.subarray(t + s * l.nStride, t + s * l.nStride + l.nWidth),
                        s * l.nWidth,
                      );
                    for (s = 0; s < l.nHeight / 2; s++)
                      Fe.set(
                        Module.HEAPU8.subarray(
                          n + (s * l.nStride) / 2,
                          n + (s * l.nStride) / 2 + l.nWidth / 2,
                        ),
                        (s * l.nWidth) / 2,
                      );
                    for (s = 0; s < l.nHeight / 2; s++)
                      xe.set(
                        Module.HEAPU8.subarray(
                          o + (s * l.nStride) / 2,
                          o + (s * l.nStride) / 2 + l.nWidth / 2,
                        ),
                        (s * l.nWidth) / 2,
                      );
                  }
                  kr(Ue, Fe, xe, a, l);
                }
              } else kr(0, 0, 0, 0, l);
            else if (2 == l.nFrameType) {
              ((l.nTotalChannel = Ae.getInt32(68, !0)),
                (l.nCurChannel = Ae.getInt32(72, !0)),
                (l.nBits = Ae.getInt32(28, !0)),
                (l.nSamples = Ae.getInt32(32, !0)),
                (l.nAudioChnNum = Ae.getInt32(24, !0)));
              var c = new ArrayBuffer(a),
                f = new Uint8Array(c);
              (f.set(Module.HEAPU8.subarray(t, t + a)), kr(f, 0, 0, a, l));
            }
            ((ke = null), (me = null));
          },
          DecryptionResultCallBack: function (e, t, n) {
            (n, J(n));
          },
          RecordDataCallBack: function (e, n, r, o, a) {
            if (null !== et) {
              ((ut += r),
                at ||
                  ((ot = new ArrayBuffer(292)), (at = new Uint8Array(ot)), (it = new DataView(ot))),
                at.set(Module.HEAPU8.subarray(a, a + 292)));
              var i = it.getInt32(0, !0),
                l = it.getInt32(4, !0);
              it.getInt32(56, !0);
              if (1 == i) {
                t.log("RecordDataCallBack, nPort:" + e + ", nFrameID:" + l);
                (it.getInt32(76, !0), it.getInt32(80, !0), it.getUint32(8, !0));
                var u = it.getUint16(40, !0),
                  s = jr(it.getUint16(42, !0)),
                  c = jr(it.getUint16(46, !0)),
                  f = jr(it.getUint16(48, !0)),
                  d = jr(it.getUint16(50, !0)),
                  p = jr(it.getUint16(52, !0)),
                  m = Date.UTC(u, s, c, f, d, p) / 1e3,
                  h = new Date(
                    ""
                      .concat(u, "-")
                      .concat(s, "-")
                      .concat(c, " ")
                      .concat(f, ":")
                      .concat(d, ":")
                      .concat(p),
                  ).getTime();
              }
              W && W({ frameType: i, timeStamp: h, utcTimeStamp: m, length: ut });
              var g = new ArrayBuffer(r),
                y = new Uint8Array(g);
              (y.set(Module.HEAPU8.subarray(n, n + r)),
                j &&
                  j({ frameType: i, timeStamp: h, utcTimeStamp: m, data: y, length: r, offset: o }),
                (5 === lt || 6 == lt || o >= Ze) &&
                  (et.postMessage({ type: "addBuffer", buffer: y, offset: o, recordType: lt }),
                  (g = null),
                  (y = null)),
                o < Ze && dt
                  ? (et && (et.postMessage({ type: "close" }), (et = null), Y && Y()),
                    (et = new be(dt)),
                    Mr(ct, ft),
                    (Ze = 0),
                    0 == lt &&
                      (et.postMessage({ type: "addBuffer", buffer: y, offset: o, recordType: lt }),
                      (g = null),
                      (y = null),
                      (Ze = o)))
                  : (Ze = o));
            }
          },
          IVSDataCallBack: function (e, n, r, o, a) {
            (t.log(
              "IVSDataCallBack, nPort:" + e + ", nType:" + r + ", nLen:" + o + ", nFrameID:" + a,
            ),
              Ir(e, n, r, o, a));
          },
          DemuxDataCallBack: function (e, t, n, r) {
            eo(e, t, n, r);
          },
          setCallback: function (e, n) {
            switch ((t.log("setCallback, type:" + e + ", func:" + n), e)) {
              case "GetPlayPort":
                ie = n;
                break;
              case "PlayStart":
                (Ve.SetBeginDrawCallback(n), f && f.setBeginDrawCallback(n), (V = n));
                break;
              case "DecodeStart":
                G = n;
                break;
              case "VideoFrameInfo":
                ((z = n), Ve && Ve.SetVideoFrameInfoCallback(n));
                break;
              case "AudioFrameInfo":
                N = n;
                break;
              case "RecordTimeStamp":
                W = n;
                break;
              case "RecordDataInfo":
                j = n;
                break;
              case "RecordFinish":
                Y = n;
                break;
              case "GetOriginalKey":
                K = n;
              case "PlayTokenInfo":
                q = n;
                break;
              case "PlayTokenDecryptResult":
                X = n;
                break;
              case "DecryptionResult":
                J = n;
                break;
              case "Error":
                ((re = n), Ve && Ve.SetErrorCallback(re));
                break;
              case "loadingBar":
                Q = n;
                break;
              case "audioTalk":
              case "videoCapture":
                ae = n;
                break;
              case "StreamPlayOver":
                (($ = n), Ve && Ve.SetStreamOverCallback($));
                break;
              case "ARTagInfo":
                Z = n;
                break;
              case "GPSInfo":
                ee = n;
                break;
              case "CapturePicDataCallBack":
                ((te = n), f && f.setCapturePicDataCallBack(n));
                break;
              case "IVSDrawData":
                ne = n;
                break;
              case "DemuxData":
                oe = n;
            }
          },
          GetCurrentPlayTime: function () {
            return r.timestamp;
          },
          GetCurrentPlayedTime: function () {
            return null != Xn && null != qn
              ? 3600 * Xn.nDay * 24 +
                  3600 * Xn.nHour +
                  60 * Xn.nMinute +
                  Xn.nSecond -
                  (3600 * qn.nDay * 24 + 3600 * qn.nHour + 60 * qn.nMinute + qn.nSecond)
              : -1;
          },
          GetCurrentFrameInfo: function () {
            return Xn;
          },
          SetSTFrameCallback: function (e) {
            ((le = e), Ve && Ve.SetSTFrameCallback(le));
          },
          setPrintLogLevel: function (e) {
            if (((jn = e), Ne)) Module._PLAY_SetPrintLogLevel(e);
            else {
              var t = { nType: "setPrintLogLevel", nLogLevel: e };
              qt && qt.postMessage(t);
            }
            Ve && Ve.SetPrintLogLevel(e);
          },
          SetPlayMethod: function (e, r, o) {
            (t.log(
              "SetPlayMethod, PlayPort:" +
                n +
                ", nStartTime:" +
                e +
                ", nSlowTime:" +
                r +
                ", nFastTime:" +
                o,
            ),
              Ve && Ve.SetPlayMethod(e, r, o));
          },
          PlayMSE: function (e, t) {
            Tr(e, t);
          },
          SetMSEPlaySpeed: function (e) {
            Ne || (f && f.setPlaySpeed(e));
          },
          SetAudioPlayMethod: function (e) {
            (t.log("SetAudioPlayMethod, PlayPort:" + n + ", nClearTime:" + e),
              He && He.SetAudioPlayMethod(e));
          },
          SetPrivacyRecover: function (e) {
            t.log("SetPrivacyRecover, PlayPort:" + n + ", bRecover:" + e);
            var r = 0;
            if (Ne) (e && $r(), (r = Module._PLAY_SetPrivacyRecover(n, e)));
            else {
              var o = { nType: "SetPrivacyRecover", bRecover: e };
              qt && qt.postMessage(o);
            }
            return r;
          },
          GetAudioPlayedTime: function () {
            return He ? He.getAudioPlayedTime() : -1;
          },
          GetVideoBufferSize: function () {
            return Ne || null === Ve ? 0 : Ve.GetVideoBufferSize();
          },
          SetRenderOSDInfoEx: function (e) {
            ((Zn = e), Ve && Ve.SetRenderOSDInfoEx(e));
          },
          DrawWaterMask: function () {
            to();
          },
          EncodeVideoData: function (e) {
            no(e);
          },
          SetPlayDirection: function (e) {
            t.trace("SetPlayDirection, PlayPort:" + n + ", nDirection:" + e);
            var r = 0;
            return (Ne ? (r = Module._PLAY_SetPlayDirection(n, e)) : Ve.SetPlayDirection(e), r);
          },
          OneByOne: function () {
            (t.trace("OneByOne, PlayPort:" + n), (ir = !0));
            var e = 0;
            return (
              Ye
                ? lr &&
                  ((lr = !1),
                  $r(),
                  this.SetDecodeMode(0, 0),
                  this.ResetBuffer(3),
                  this.ResetBuffer(4))
                : (this.Pause(!0), Ne ? (e = Module._PLAY_OneByOne(n)) : Ve && Ve.OneByOne()),
              e
            );
          },
          GetOneByOneState: function () {
            return ir;
          },
        };
        var Rr,
          Ur,
          Fr,
          xr,
          Hr,
          Lr,
          Or,
          Br,
          Vr,
          Gr,
          zr,
          Nr,
          Wr =
            ((Rr = window),
            (Ur = Rr.document),
            (Fr = function () {
              return Rr.URL || Rr.webkitURL || Rr;
            }),
            (xr = Ur.createElementNS("http://www.w3.org/1999/xhtml", "a")),
            (Hr = "download" in xr),
            (Lr = /constructor/i.test(Rr.HTMLElement)),
            (Or = /CriOS\/[\d]+/.test(navigator.userAgent)),
            (Br = function (e) {
              (Rr.setImmediate || Rr.setTimeout)(
                function () {
                  throw e;
                },
                0,
              );
            }),
            (Vr = function (e) {
              setTimeout(
                function () {
                  "string" == typeof e ? Fr().revokeObjectURL(e) : e.remove();
                },
                4e4,
              );
            }),
            (Gr = function (e) {
              return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                e.type,
              )
                ? new Blob([String.fromCharCode(65279), e], { type: e.type })
                : e;
            }),
            (Nr = (zr = function (e, t, n) {
              n || (e = Gr(e));
              var r,
                o = this,
                a = "application/octet-stream" === e.type,
                i = function () {
                  !(function (e, t, n) {
                    for (var r = (t = [].concat(t)).length; r--; ) {
                      var o = e["on" + t[r]];
                      if ("function" == typeof o)
                        try {
                          o.call(e, n || e);
                        } catch (e) {
                          Br(e);
                        }
                    }
                  })(o, "writestart progress write writeend".split(" "));
                };
              if (((o.readyState = o.INIT), Hr))
                return (
                  (r = Fr().createObjectURL(e)),
                  void setTimeout(function () {
                    ((xr.href = r),
                      (xr.download = t),
                      xr.dispatchEvent(new MouseEvent("click")),
                      i(),
                      Vr(r),
                      (o.readyState = o.DONE));
                  })
                );
              !(function () {
                if ((Or || (a && Lr)) && Rr.FileReader) {
                  var t = new FileReader();
                  return (
                    (t.onloadend = function () {
                      var e = Or
                        ? t.result
                        : t.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                      (Rr.open(e, "_blank") || (Rr.location.href = e),
                        (e = void 0),
                        (o.readyState = o.DONE),
                        i());
                    }),
                    t.readAsDataURL(e),
                    void (o.readyState = o.INIT)
                  );
                }
                (r || (r = Fr().createObjectURL(e)),
                  a ? (Rr.location.href = r) : Rr.open(r, "_blank") || (Rr.location.href = r),
                  (o.readyState = o.DONE),
                  i(),
                  Vr(r));
              })();
            }).prototype),
            "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
              ? function (e, t, n) {
                  return (
                    (t = t || e.name || "download"),
                    n || (e = Gr(e)),
                    navigator.msSaveOrOpenBlob(e, t)
                  );
                }
              : ((Nr.readyState = Nr.INIT = 0),
                (Nr.WRITING = 1),
                (Nr.DONE = 2),
                (Nr.error =
                  Nr.onwritestart =
                  Nr.onprogress =
                  Nr.onwrite =
                  Nr.onabort =
                  Nr.onerror =
                  Nr.onwriteend =
                    null),
                function (e, t, n) {
                  return null == t || void 0 === t ? null : new zr(e, t || e.name || "download", n);
                }));
        function jr(e) {
          return e < 10 ? "0".concat(e) : e;
        }
        function Yr(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf-8",
            n = new TextDecoder(t);
          return n.decode(e);
        }
        function Kr(e) {
          for (
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf-8",
              n = new TextDecoder(t),
              r = new Uint8Array(e),
              o = 0;
            o < r.length && 0 !== r[o];
          )
            o++;
          return n.decode(e.slice(0, o));
        }
        function qr(e) {
          for (var t = [], n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            r >= 0 && r <= 127
              ? (1, t.push(r))
              : r >= 128 && r <= 2047
                ? (2, t.push(192 | (31 & (r >> 6))), t.push(128 | (63 & r)))
                : (r >= 2048 && r <= 55295) || (r >= 57344 && r <= 65535)
                  ? (3,
                    t.push(224 | (15 & (r >> 12))),
                    t.push(128 | (63 & (r >> 6))),
                    t.push(128 | (63 & r)))
                  : r >= 65536 &&
                    r <= 1114111 &&
                    (4,
                    t.push(240 | (7 & (r >> 18))),
                    t.push(128 | (63 & (r >> 12))),
                    t.push(128 | (63 & (r >> 6))),
                    t.push(128 | (63 & r)));
          }
          return t;
        }
        function Xr(e, r, o, a, i) {
          if (
            (t.log("setSecurityKey, PlayPort:" + n + ", nKeyLen:" + o + ", nKeyIdLen:" + i),
            null == r)
          )
            return 0;
          zn = e;
          var l = {};
          ((l.Key = r), (l.KeyLen = o), (l.KeyId = a), (l.KeyIdLen = i), (Nn[Wn] = l), Wn++);
          var u = 1;
          if (Ne) {
            var s = Module._malloc(49),
              c = new Uint8Array(Module.HEAPU8.buffer),
              f = 0;
            if (1 == e)
              r.forEach(function (e, t) {
                ((c[(s + f) >> 0] = e), f++);
              });
            else if (2 == e) {
              if (null == a) return 0;
              var d = new Uint8Array(16);
              if (((c[(s + f) >> 0] = 1), f++, 0 == i)) {
                for (var p = 0; p < 16; p++) d[p] = 0;
                ((i = 16), (a = d));
              }
              (a.forEach(function (e, t) {
                ((c[(s + f) >> 0] = e), f++);
              }),
                r.forEach(function (e, t) {
                  ((c[s + f] = e), f++);
                }),
                (o = 1 + o + i),
                (d = null));
            } else
              16 == e &&
                r.split("").forEach(function (e, t) {
                  ((c[(s + f) >> 0] = e.charCodeAt(0)), f++);
                });
            ((u = Module._PLAY_SetSecurityKey(n, s, o)), Module._free(s));
          } else {
            var m = {
              nType: "SetSecurityKey",
              nEncryptType: e,
              szKey: r,
              nKeyLen: o,
              szKeyId: a,
              nKeyIdLen: i,
            };
            qt && qt.postMessage(m);
          }
          return u;
        }
        function Jr(e) {
          if (0 !== gt && st)
            if (Ne) {
              var t = Module._malloc(e.length),
                r = new Uint8Array(Module.HEAPU8.buffer, t, e.length);
              (r.set(e),
                Module._PLAY_InputAudioData(n, r.byteOffset, e.length, 16, 8e3),
                Module._free(t));
            } else {
              var o = { nType: "InputAudioData", audioData: e };
              qt && qt.postMessage(o);
            }
        }
        function $r() {
          if (Ne && !Qn) {
            if (!Qr()) return;
            o &&
              (setTimeout(function () {
                Module._PLAY_ViewResolutionChanged(n, parseInt(o.width), parseInt(o.height), 0);
                var e = Module.allocateUTF8(o.id);
                (Module._PLAY_SetDisplayRegion(n, 0, null, e, 1), Module._free(e));
              }),
              (Qn = !0),
              window.nSWDecodeNum++);
          }
        }
        function Qr() {
          return (
            !(window.nSWDecodeNum >= 10) ||
            (console.warn("Insufficient webGL resources."),
            re && re({ errorCode: 100, description: "Insufficient webGL resources." }),
            !1)
          );
        }
        function Zr(e, r, o, a) {
          if (
            (t.trace("setPlayTokenToDecrypt, PlayPort:" + n + ", bGetPlayInfo:" + a),
            void 0 !== e && void 0 !== r && void 0 !== o && void 0 !== a)
          ) {
            var i = 1;
            if (Ne) {
              var l = Module.intArrayFromString(e).concat(0),
                u = Module._malloc(l.length);
              Module.HEAPU8.set(l, u);
              var s = Module.intArrayFromString(r).concat(0),
                c = Module._malloc(s.length);
              Module.HEAPU8.set(s, c);
              var f = Module.intArrayFromString(o).concat(0),
                d = Module._malloc(f.length);
              Module.HEAPU8.set(f, d);
              var p = null,
                m = null;
              if (
                (a &&
                  ((m = Module._malloc(4096)),
                  (p = Module._malloc(8)),
                  (Module.HEAP32[p / 4 + 0] = m)),
                (i = Module._PLAY_SetPlayTokenToDecrypt(n, u, c, d, a, p)),
                a)
              ) {
                var h = Module.HEAP32[p / 4 + 1],
                  g = new ArrayBuffer(h);
                new Uint8Array(g).set(Module.HEAPU8.subarray(m, m + h));
                var y = Yr(g);
                (q(y), Module._free(m), Module._free(p));
              } else X(i);
              (Module._free(u), Module._free(c), Module._free(d));
            } else if (In) {
              Dn = !0;
              var _ = {
                nType: "SetPlayTokenToDecrypt",
                playToken: e,
                keySalt: r,
                deviceID: o,
                bGetPlayInfo: a,
              };
              qt && qt.postMessage(_);
            } else ((Un = e), (xn = r), (Hn = o), (Ln = a));
          } else t.error("setPlayTokenToDecrypt failed, parameter error.");
        }
        function eo(e, t, n, r) {
          var o = {};
          (Ne
            ? (Te ||
                ((Ee = new ArrayBuffer(72)), (Te = new Uint8Array(Ee)), (Ce = new DataView(Ee))),
              Te.set(Module.HEAPU8.subarray(r, r + 72)),
              (o.nFrameType = Ce.getInt32(0, !0)),
              (o.nFrameSubType = Ce.getInt32(4, !0)),
              (o.nEncodeType = Ce.getInt32(8, !0)),
              (o.nFrameID = Ce.getInt32(12, !0)),
              (o.nWidth = Ce.getInt32(16, !0)),
              (o.nHeight = Ce.getInt32(20, !0)),
              (o.nFrameRate = Ce.getInt32(24, !0)),
              (o.nYear = Ce.getUint16(28, !0)),
              (o.nMonth = Ce.getUint16(32, !0)),
              (o.nDay = Ce.getUint16(36, !0)),
              (o.nHour = Ce.getUint16(40, !0)),
              (o.nMinute = Ce.getUint16(44, !0)),
              (o.nSecond = Ce.getUint16(48, !0)),
              (o.nTimeStamp = Ce.getUint32(52, !0)),
              (o.nTotalChannel = Ce.getInt32(56, !0)),
              (o.nBits = Ce.getInt32(60, !0)),
              (o.nSamples = Ce.getInt32(64, !0)),
              (o.nMillisecond = Ce.getInt32(68, !0)))
            : (o = r),
            1 === o.nFrameType &&
              0 !== o.nEncodeType &&
              2 !== o.nEncodeType &&
              4 !== o.nEncodeType &&
              8 !== o.nEncodeType &&
              12 !== o.nEncodeType &&
              re &&
              re({
                errorCode: 106,
                description: "Unsupported encode type.",
                encodeType: o.nEncodeType,
              }),
            oe && oe(o));
        }
        function to() {
          Zn
            ? (null == l && (((l = document.createElement("canvas")).width = he), (l.height = ge)),
              Ve && Ve.DrawWaterMask(l, he, ge),
              i.getContext("2d").drawImage(l, 0, 0, i.width, i.height))
            : (i.getContext("2d").clearRect(0, 0, i.width, i.height),
              l && (l.remove(), (l = null)));
        }
        function no(e) {
          return ro.apply(this, arguments);
        }
        function ro() {
          return (ro = _t(
            ht().m(function e(t) {
              var r;
              return ht().w(
                function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        if ((st && er && (nr = !0), !(st && er && nr))) {
                          e.n = 4;
                          break;
                        }
                        if (
                          (oo(),
                          tr ||
                            (he > 3840 || ge > 2160
                              ? ((rr = !1),
                                console.log(
                                  "[Error]the WebCodecsEncode is not support the resolution:" +
                                    he +
                                    "*" +
                                    ge +
                                    "max resolution is 3840*2160",
                                ))
                              : ("avc1.640033",
                                (rr = !0),
                                (tr = new mt(
                                  n,
                                  "avc1.640033",
                                  he,
                                  ge,
                                  4096e3,
                                  t.nFrameRate,
                                  Ne,
                                  qt,
                                )).init(),
                                (or = he),
                                (ar = ge))),
                          !rr)
                        ) {
                          e.n = 4;
                          break;
                        }
                        if (!tr) {
                          e.n = 4;
                          break;
                        }
                        if (he == or && ge == ar) {
                          e.n = 2;
                          break;
                        }
                        return ((e.n = 1), tr.close());
                      case 1:
                        he > 3840 || ge > 2160
                          ? ((rr = !1),
                            console.log(
                              "[Error]the WebCodecsEncode is not support the resolution:" +
                                he +
                                "*" +
                                ge +
                                "max resolution is 3840*2160",
                            ))
                          : ((codec = "avc1.640033"),
                            (rr = !0),
                            (tr = new mt(n, codec, he, ge, 4096e3, t.nFrameRate)).init(),
                            (or = he),
                            (ar = ge));
                      case 2:
                        return ((e.n = 3), createImageBitmap(u));
                      case 3:
                        ((r = e.v), tr.encode(r, t));
                      case 4:
                        return e.a(2);
                    }
                },
                e,
              );
            }),
          )).apply(this, arguments);
        }
        function oo() {
          if ((u || (((u = document.createElement("canvas")).width = he), (u.height = ge)), a)) {
            var e = u.getContext("2d");
            (e.clearRect(0, 0, u.width, u.height),
              Ye && e.drawImage(a, 0, 0, u.width, u.height),
              l && e.drawImage(l, 0, 0, u.width, u.height));
          }
        }
        function ao() {
          return (ao = _t(
            ht().m(function e(t) {
              var n, r, o, a;
              return ht().w(
                function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        return (
                          (n = new Blob([t.buffer], { type: "image/jpg" })),
                          (e.n = 1),
                          createImageBitmap(n)
                        );
                      case 1:
                        ((r = e.v),
                          (o = document.createElement("canvas")),
                          ((o = document.createElement("canvas")).width = he),
                          (o.height = ge),
                          (a = o.getContext("2d")).clearRect(0, 0, o.width, o.height),
                          a.drawImage(r, 0, 0, o.width, o.height),
                          a.drawImage(l, 0, 0, o.width, o.height),
                          r.close(),
                          o.toBlob(
                            function (e) {
                              Wr(e, Kt);
                              var t = new FileReader();
                              ((t.onload = function (e) {
                                var t = e.target.result,
                                  n = new Uint8Array(t);
                                (console.log("catchpic Uint8Array length:", n.length), te && te(n));
                              }),
                                (t.onerror = function (e) {
                                  console.error("Blob To Uint8Array failed:", e);
                                }),
                                t.readAsArrayBuffer(e));
                            },
                            "image/jpeg",
                          ),
                          (n = null));
                      case 2:
                        return e.a(2);
                    }
                },
                e,
              );
            }),
          )).apply(this, arguments);
        }
        function io(e, t, n) {
          if (!t || n < 3) return !1;
          for (var r = 0, o = 0; o < n - 1; o++) {
            if (
              (o >= 1 &&
                (0 === t[o].x && 0 === t[o].y && (t[o] = t[o - 1]),
                0 === t[o + 1].x && 0 === t[o + 1].y && (t[o + 1] = t[o])),
              t[o].y <= e.y)
            ) {
              if (t[o + 1].y > e.y)
                (t[o + 1].x - t[o].x) * (e.y - t[o].y) - (e.x - t[o].x) * (t[o + 1].y - t[o].y) >
                  0 && ++r;
            } else if (t[o + 1].y <= e.y)
              (t[o + 1].x - t[o].x) * (e.y - t[o].y) - (e.x - t[o].x) * (t[o + 1].y - t[o].y) < 0 &&
                --r;
          }
          return 0 !== r;
        }
        function lo(e) {
          var t = Math.PI,
            n = 0;
          return (
            0 === e.x && e.y < 0
              ? (n = t)
              : 0 === e.x && e.y > 0
                ? (n = 0)
                : 0 === e.y && e.x < 0
                  ? (n = 1.5 * t)
                  : 0 === e.y && e.x > 0
                    ? (n = 0.5 * t)
                    : e.x > 0 && e.y > 0
                      ? (n = Math.atan(e.x / e.y))
                      : e.x < 0 && e.y > 0
                        ? (n = 1.5 * t - Math.atan(e.y / e.x))
                        : e.x < 0 && e.y < 0
                          ? (n = t + Math.atan(e.x / e.y))
                          : e.x > 0 && e.y < 0 && (n = 0.5 * t - Math.atan(e.y / e.x)),
            n
          );
        }
        function uo(e, t, n) {
          var r = (n.left + n.right) / 2,
            o = (n.top + n.bottom) / 2,
            a = { x: e.x - r, y: o - e.y },
            i = { x: t.x - r, y: o - t.y },
            l = Math.PI,
            u = 2 * l,
            s = lo(a),
            c = lo(i),
            f = c - s;
          return (
            s >= 0 && s <= l / 2 && c >= 1.5 * l && c < u
              ? (f -= u)
              : c >= 0 && c <= l / 2 && s >= 1.5 * l && s < u && (f += u),
            f
          );
        }
        function so(e, t) {
          var n = 0;
          return (
            (n = e.x < t.x ? 256 : e.x > t.x ? 1 : n), (n |= e.y < t.y ? 4096 : e.y > t.y ? 16 : n)
          );
        }
        function co(e, t, r) {
          if (Ye || !o || n <= 0) return -1;
          var a = 0;
          if (1 === r || 5 === r) a = 3;
          else if (2 === r) a = 6;
          else if (6 === r || 7 === r) a = 8;
          else if (3 === r || 4 === r) a = 4;
          else {
            if (8 !== r && 9 !== r) return -1;
            a = 2;
          }
          if (!(_n && _n.width ? _n : o)) return -1;
          if (Sn) {
            var i = Sn.m_panoFrame;
            i && (fn = { left: i.left, top: i.top, right: i.right, bottom: i.bottom });
          }
          var l = 0;
          if (2 === r) {
            var u = {
              x: (8191 * (e - fn.left)) / (fn.right - fn.left || 1),
              y: (8191 * (t - fn.top)) / (fn.bottom - fn.top || 1),
            };
            for (l = 0; l < a; l++) {
              var s = {
                ePtzCmd: zt,
                winId: l,
                arg1: u.x >> 0,
                arg2: u.y >> 0,
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
              if (((4 !== r && 5 !== r) || (s.winId = l + 1), Ne)) {
                var c = sr.prototype.allocFisheyeEptzParams(s);
                if (c) {
                  if (Module._PLAY_FisheyeEptzUpdate(n, c, 0)) {
                    var f = sr.prototype.readFisheyeEptzParams(c);
                    if (f && 1 === f.arg3) return (Module._free(c), l);
                  }
                  Module._free(c);
                }
              } else {
                if (qt) {
                  var d = { nType: "FisheyeEptzUpdate", eptzParams: s };
                  qt.postMessage(d);
                }
                if (1 === hn) return ((hn = -1), l);
              }
            }
          } else if (1 === r || 3 === r || 6 === r || 8 === r || 4 === r || 5 === r || 7 === r)
            for (l = 0; l < a; l++) {
              var p = null;
              if (
                (Sn && (p = Sn.GetPointChain(l + 1)),
                (p && 0 !== p.length) || (p = mo(l + 1, 0)),
                p && p.length > 0)
              ) {
                for (
                  var m = fn.right - fn.left || 1, h = fn.bottom - fn.top || 1, g = [], y = 0;
                  y < p.length;
                  y++
                )
                  p[y].x >= 0 &&
                    p[y].y >= 0 &&
                    g.push({
                      x: (((p[y].x * m) / 8191) >> 0) + fn.left,
                      y: (((p[y].y * h) / 8191) >> 0) + fn.top,
                    });
                if (g.length > 2 && io({ x: e, y: t }, g, g.length)) return l;
              }
            }
          return -1;
        }
        function fo() {
          (vn && _n && vn.clearRect(0, 0, _n.width, _n.height), _n && (_n.style.display = "none"));
        }
        function po(e) {
          switch (e) {
            case Ct:
              return 1;
            case Ut:
              return 2;
            case Dt:
              return 3;
            case Rt:
              return 4;
            case kt:
              return 5;
            case Ft:
              return 6;
            case xt:
              return 7;
            case It:
              return 8;
            default:
              return 0;
          }
        }
        function mo(e, t) {
          if (Ye || !o) return [];
          if (!Ne && qt) {
            var r = e + "_" + (t || 0);
            return Pn[r] ? Pn[r] : [];
          }
          if (n <= 0 || !Module || !Module._PLAY_FisheyeEptzUpdate) return [];
          var a = {
              ePtzCmd: Gt,
              winId: e || 0,
              arg1: t || 0,
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
            },
            i = sr.prototype.allocFisheyeEptzParams(a),
            l = [],
            u = 0;
          if (i) {
            if (Module._PLAY_FisheyeEptzUpdate(n, i, 0)) {
              var s = sr.prototype.readFisheyeEptzParams(i);
              if (
                s &&
                (e && e > 0 && ((pn[e] = s.arg4 || 0), (mn[e] = s.arg5 || 0)),
                (u = s.pArg) && 0 !== u)
              ) {
                var c = new ArrayBuffer(640);
                new Uint8Array(c).set(Module.HEAPU8.subarray(u, u + 640));
                for (var f = new DataView(c), d = 0; d < 320; d += 2) {
                  var p = f.getInt16(2 * d, !0),
                    m = f.getInt16(2 * (d + 1), !0);
                  p < 0 || m < 0 || l.push({ x: p, y: m });
                }
              }
            }
            Module._free(i);
          }
          return l;
        }
        function ho(e) {
          var t = (function () {
            if (!o || "undefined" == typeof document) return null;
            var e = o.parentNode;
            if (!e) return null;
            var t = o.width || o.clientWidth || o.offsetWidth || 0,
              n = o.height || o.clientHeight || o.offsetHeight || 0;
            if (t <= 0 || n <= 0) return null;
            if (!_n) {
              if (
                (((_n = document.createElement("canvas")).className = "playsdk-fisheye-guide"),
                (_n.style.position = "absolute"),
                (_n.style.pointerEvents = "none"),
                (_n.style.display = "none"),
                (_n.style.left = "0px"),
                (_n.style.top = "0px"),
                "undefined" != typeof window)
              ) {
                var r = parseInt(window.getComputedStyle(o).zIndex, 10);
                (isNaN(r) && (r = 0), (_n.style.zIndex = (r + 1).toString()));
                var a = window.getComputedStyle(e);
                a &&
                  "static" === a.position &&
                  ((m_fisheyeGuideParentOriginPos = e.style.position),
                  (e.style.position = "relative"));
              }
              e.appendChild(_n);
            }
            (_n.width !== t && (_n.width = t), _n.height !== n && (_n.height = n));
            var i = o.style.width || t + "px",
              l = o.style.height || n + "px";
            return (
              (_n.style.width = i),
              (_n.style.height = l),
              (_n.style.left = o.offsetLeft + "px"),
              (_n.style.top = o.offsetTop + "px"),
              (_n.style.display = "block"),
              (vn = _n.getContext("2d")),
              _n,
              vn,
              vn
            );
          })();
          if (t) {
            var n = t.canvas;
            if ((t.clearRect(0, 0, n.width, n.height), yn)) {
              var r = po(e);
              if (r) {
                if ((r !== Sn.m_showMode && (Pn = {}), Sn.SetShowMode(r), !Ne && qt)) {
                  var a = 1,
                    i = 0;
                  2 === r
                    ? ((a = 7), (i = 6))
                    : 4 === r || 3 === r
                      ? ((a = 5), (i = 0))
                      : 6 === r || 7 === r
                        ? ((a = 9), (i = 4))
                        : 8 === r || 9 === r
                          ? ((a = 3), (i = 0))
                          : (1 !== r && 5 !== r) || ((a = 4), (i = 0));
                  for (var l = 0; l < a; l++)
                    if (l !== i) {
                      var u = {
                        nType: "GetFishEyeRegionPoints",
                        winId: l,
                        subRegionFlag: 2 === r || 4 === r || 5 === r || 7 === r ? 1 : 0,
                      };
                      qt.postMessage(u);
                    }
                }
                (Sn.Draw(n, t, mo),
                  !Ne && qt
                    ? (function () {
                        var e = po(on.mainCalibrateMode);
                        if (0 === un) {
                          (0 !== cn.x && 0 !== cn.y && 0 !== sn.x && 0 !== sn.y) ||
                            (sn = { x: cn.x, y: cn.y });
                          var t = fn.right - fn.left,
                            n = fn.bottom - fn.top;
                          if (0 === t || 0 === n) return;
                          var r = 2 === e || 4 === e || 5 === e || 7 === e ? 1 : 0;
                          ((rn.ePtzCmd = Vt),
                            (rn.winId = an),
                            (rn.arg1 = r),
                            (rn.arg2 = ((8191 * (cn.x - fn.left)) / t) >> 0),
                            (rn.arg3 = ((8191 * (cn.y - fn.top)) / n) >> 0),
                            (rn.arg4 = pn[an] || 0),
                            (rn.arg5 = mn[an] || 0));
                          var a = { nType: "FisheyeEptzUpdate", eptzParams: rn };
                          qt.postMessage(a);
                        } else if (2 === un) {
                          var i = o ? o.width : he,
                            l = o ? o.height : ge;
                          ((t = fn.right - fn.left), (n = fn.bottom - fn.top));
                          if (0 === i || 0 === l) return;
                          ((rn.ePtzCmd = Vt),
                            (rn.winId = an),
                            (rn.arg1 = 18),
                            (rn.arg2 = ((8191 * -(cn.x - sn.x)) / t) >> 0),
                            (rn.arg3 = ((8191 * -(cn.y - sn.y)) / n) >> 0),
                            (rn.arg4 = 0),
                            (rn.arg5 = 0));
                          a = { nType: "FisheyeEptzUpdate", eptzParams: rn };
                          qt.postMessage(a);
                        } else if (1 === un) {
                          0 === sn.x &&
                            0 === sn.y &&
                            (sn = { x: prevMovePoint.x, y: prevMovePoint.y });
                          var u = cn.x - sn.x,
                            s = cn.y - sn.y;
                          if (Math.abs(u) < 2 && Math.abs(s) < 2) return;
                          if (1 === e || 3 === e || 6 === e) {
                            var c = 2 * Math.PI,
                              f = (((360 * uo(sn, cn, fn)) / c) * 128) >> 0;
                            if (Math.abs(f) < 1) return;
                            a = {
                              nType: "FisheyeEptzUpdate",
                              eptzParams: {
                                ePtzCmd: Bt,
                                winId: an,
                                arg1: f,
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
                              },
                            };
                            qt.postMessage(a);
                          } else if (2 === e) {
                            if (Math.abs(u) < 2) return;
                            var d = so(sn, cn),
                              p = 1 === d ? Lt : 256 === d ? Ot : Ht;
                            if (0 === (t = fn.right - fn.left)) return;
                            var m = Math.abs(u);
                            if ((r = ((128 * m * 360) / t) >> 0) < 1) return;
                            a = {
                              nType: "FisheyeEptzUpdate",
                              eptzParams: {
                                ePtzCmd: p,
                                winId: an,
                                arg1: r,
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
                              },
                            };
                            qt.postMessage(a);
                            var h = Date.now();
                            h - dn >= 50 && ((dn = h), on && on.mainCalibrateMode);
                          }
                        }
                      })()
                    : Ne &&
                      !Ye &&
                      (function (e, t) {
                        var n = po(on.mainCalibrateMode);
                        if (0 === un) {
                          (0 !== cn.x && 0 !== cn.y && 0 !== sn.x && 0 !== sn.y) || (sn = cn);
                          var r = fn.right - fn.left,
                            a = fn.bottom - fn.top;
                          if (0 === r || 0 === a) return (Module._free(e), void Module._free(t));
                          var i = 2 === n || 4 === n || 5 === n || 7 === n ? 1 : 0;
                          ((rn.ePtzCmd = Vt),
                            (rn.winId = an),
                            (rn.arg1 = i),
                            (rn.arg2 = ((8191 * (cn.x - fn.left)) / r) >> 0),
                            (rn.arg3 = ((8191 * (cn.y - fn.top)) / a) >> 0),
                            (rn.arg4 = pn[an] || 0),
                            (rn.arg5 = mn[an] || 0),
                            go(rn));
                        } else if (2 === un) {
                          var l = o ? o.width : he,
                            u = o ? o.height : ge;
                          ((r = fn.right - fn.left), (a = fn.bottom - fn.top));
                          if (0 === l || 0 === u) return (Module._free(e), void Module._free(t));
                          ((rn.ePtzCmd = Vt),
                            (rn.winId = an),
                            (rn.arg1 = 18),
                            (rn.arg2 = ((8191 * (cn.x - sn.x)) / r) >> 0),
                            (rn.arg3 = ((8191 * (cn.y - sn.y)) / a) >> 0),
                            (rn.arg4 = 0),
                            (rn.arg5 = 0),
                            go(rn));
                        } else if (1 === un) {
                          var s = cn.x - sn.x,
                            c = cn.y - sn.y;
                          if (Math.abs(s) < 2 && Math.abs(c) < 2)
                            return (Module._free(e), void Module._free(t));
                          if (1 === n || 3 === n || 6 === n) {
                            var f = 2 * Math.PI,
                              d = (((360 * uo(sn, cn, fn)) / f) * 128) >> 0;
                            if (Math.abs(d) < 1) return (Module._free(e), void Module._free(t));
                            go(yo(Bt, an, d));
                          } else if (2 === n || 4 === n || 5 === n || 7 === n) {
                            if (Math.abs(s) < 2) return (Module._free(e), void Module._free(t));
                            if (0 === (r = fn.right - fn.left))
                              return (Module._free(e), void Module._free(t));
                            var p = Math.abs(s);
                            if ((i = ((128 * p * 360) / r) >> 0) < 1)
                              return (Module._free(e), void Module._free(t));
                            var m = so(sn, cn);
                            if (go(yo(1 === m ? Lt : 256 === m ? Ot : Ht, an, i))) {
                              var h = Date.now();
                              (h - dn >= 50 && (dn = h),
                                (sn = { x: prevMovePoint.x, y: prevMovePoint.y }));
                            }
                          }
                        }
                      })());
              } else fo();
            }
          }
        }
        function go(e) {
          var r = sr.prototype.allocFisheyeEptzParams(e);
          if (0 !== r) {
            var o = Module._PLAY_FisheyeEptzUpdate(n, r, 0);
            if (!o) {
              var a = Module._PLAY_GetLastError(n);
              t.error("FisheyeEptzUpdate failed, PlayPort:" + n + ", Error:" + a);
            }
            return (Module._free(r), o);
          }
          return 0;
        }
        function yo(e, t, n, r, o, a, i) {
          return {
            ePtzCmd: e,
            winId: t || an,
            arg1: n || 0,
            arg2: r || 0,
            arg3: o || 0,
            arg4: a || 0,
            arg5: i || 0,
            arg6: 0,
            reserved0: [0, 0, 0, 0, 0, 0],
            pParam: 0,
            pResult: 0,
            pArg: 0,
            reserved1: [0, 0, 0, 0, 0, 0, 0],
          };
        }
        return new sr();
      };
      function jt() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function a(n, r, o, a) {
          var u = r && r.prototype instanceof l ? r : l,
            s = Object.create(u.prototype);
          return (
            Yt(
              s,
              "_invoke",
              (function (n, r, o) {
                var a,
                  l,
                  u,
                  s = 0,
                  c = o || [],
                  f = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: p,
                    f: p.bind(e, 4),
                    d: function (t, n) {
                      return ((a = t), (l = 0), (u = e), (d.n = n), i);
                    },
                  };
                function p(n, r) {
                  for (l = n, u = r, t = 0; !f && s && !o && t < c.length; t++) {
                    var o,
                      a = c[t],
                      p = d.p,
                      m = a[2];
                    n > 3
                      ? (o = m === r) && ((u = a[(l = a[4]) ? 5 : ((l = 3), 3)]), (a[4] = a[5] = e))
                      : a[0] <= p &&
                        ((o = n < 2 && p < a[1])
                          ? ((l = 0), (d.v = r), (d.n = a[1]))
                          : p < m &&
                            (o = n < 3 || a[0] > r || r > m) &&
                            ((a[4] = n), (a[5] = r), (d.n = m), (l = 0)));
                  }
                  if (o || n > 1) return i;
                  throw ((f = !0), r);
                }
                return function (o, c, m) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (f && 1 === c && p(c, m), l = c, u = m; (t = l < 2 ? e : u) || !f; ) {
                    a || (l ? (l < 3 ? (l > 1 && (d.n = -1), p(l, u)) : (d.n = u)) : (d.v = u));
                    try {
                      if (((s = 2), a)) {
                        if ((l || (o = "next"), (t = a[o]))) {
                          if (!(t = t.call(a, u)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((u = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = a.return) && t.call(a),
                            l < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" + o + "' method",
                              )),
                              (l = 1)));
                        a = e;
                      } else if ((t = (f = d.n < 0) ? u : n.call(r, d)) !== i) break;
                    } catch (t) {
                      ((a = e), (l = 1), (u = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: t, done: f };
                };
              })(n, o, a),
              !0,
            ),
            s
          );
        }
        var i = {};
        function l() {}
        function u() {}
        function s() {}
        t = Object.getPrototypeOf;
        var c = [][r]
            ? t(t([][r]()))
            : (Yt((t = {}), r, function () {
                return this;
              }),
              t),
          f = (s.prototype = l.prototype = Object.create(c));
        function d(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), Yt(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (u.prototype = s),
          Yt(f, "constructor", s),
          Yt(s, "constructor", u),
          (u.displayName = "GeneratorFunction"),
          Yt(s, o, "GeneratorFunction"),
          Yt(f),
          Yt(f, o, "Generator"),
          Yt(f, r, function () {
            return this;
          }),
          Yt(f, "toString", function () {
            return "[object Generator]";
          }),
          (jt = function () {
            return { w: a, m: d };
          })()
        );
      }
      function Yt(e, t, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        (Yt = function (e, t, n, r) {
          if (t)
            o ? o(e, t, { value: n, enumerable: !r, configurable: !r, writable: !r }) : (e[t] = n);
          else {
            var a = function (t, n) {
              Yt(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (a("next", 0), a("throw", 1), a("return", 2));
          }
        })(e, t, n, r);
      }
      function Kt(e, t, n, r, o, a, i) {
        try {
          var l = e[a](i),
            u = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function qt(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = e.apply(t, n);
            function i(e) {
              Kt(a, r, o, i, l, "next", e);
            }
            function l(e) {
              Kt(a, r, o, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      var Xt = function (e) {
        e = e;
        var t = {
          h265data: null,
          h265datalen: 0,
          pvFrameLen: 0,
          pvparsered: !1,
          bCloseState: !1,
          bGetUserMedia: !1,
          url: null,
        };
        return (
          (t.pc = new RTCPeerConnection(null)),
          (t.m_localSDPInfoCallBack = null),
          (t.videoStream = new MediaStream()),
          (t.talkStream = new MediaStream()),
          (t.defaultPath = "/webrtc/play/"),
          (t.play = (function () {
            var e = qt(
              jt().m(function e(n) {
                var r, o;
                return jt().w(
                  function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          if (n) {
                            e.n = 3;
                            break;
                          }
                          return ((e.n = 1), t.pc.createOffer());
                        case 1:
                          return ((r = e.v), (e.n = 2), t.pc.setLocalDescription(r));
                        case 2:
                          (t.m_localSDPInfoCallBack(r.sdp), (e.n = 6));
                          break;
                        case 3:
                          return ((e.n = 4), t.pc.createAnswer());
                        case 4:
                          return ((o = e.v), (e.n = 5), t.pc.setLocalDescription(o));
                        case 5:
                          t.m_localSDPInfoCallBack(o.sdp);
                        case 6:
                          return e.a(2, !0);
                      }
                  },
                  e,
                );
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          (t.setRemoteSDP = function (n, r) {
            (e.log("RtcPlayer setRemoteSDP, bRemoteOffer:" + r),
              r
                ? t.pc.setRemoteDescription(new RTCSessionDescription({ type: "offer", sdp: n }))
                : t.pc.setRemoteDescription(new RTCSessionDescription({ type: "answer", sdp: n })));
          }),
          (t.getLocalSDPInfoCallBack = function (e) {
            t.m_localSDPInfoCallBack = e;
          }),
          (t.playTalk = (function () {
            var n = qt(
              jt().m(function n(r) {
                var o, a, i;
                return jt().w(
                  function (n) {
                    for (;;)
                      switch (n.n) {
                        case 0:
                          return (
                            e.log("RtcPlayer playTalk, bSetRemote:" + r),
                            (o = !0),
                            r || t.pc.addTransceiver("audio", { direction: "sendrecv" }),
                            (t.defaultPath = "/webrtc/talk/"),
                            (t.bGetUserMedia = !0),
                            (n.n = 1),
                            navigator.mediaDevices
                              .getUserMedia({ audio: !0, video: !1 })
                              .then(function (e) {
                                (e.getTracks().forEach(function (e) {
                                  t.bCloseState
                                    ? (e.stop(), (e = null))
                                    : (t.pc.addTrack(e),
                                      r && t.pc.addTransceiver(e, { direction: "sendrecv" }),
                                      t.ontalkTrack && t.ontalkTrack({ track: e }));
                                }),
                                  t.bCloseState && (e = null));
                              })
                              .catch(function (t) {
                                (e.error(
                                  "RtcPlayer, GetUserMedia error: " +
                                    t.name +
                                    " and " +
                                    t.error +
                                    "\r\ngetUserMedia return undefined, try open this web use 'https' or check your media device!",
                                ),
                                  (o = !1));
                              })
                          );
                        case 1:
                          if (((t.bGetUserMedia = !1), r)) {
                            n.n = 4;
                            break;
                          }
                          return ((n.n = 2), t.pc.createOffer());
                        case 2:
                          return ((a = n.v), (n.n = 3), t.pc.setLocalDescription(a));
                        case 3:
                          (t.m_localSDPInfoCallBack(a.sdp), (n.n = 7));
                          break;
                        case 4:
                          return ((n.n = 5), t.pc.createAnswer());
                        case 5:
                          return ((i = n.v), (n.n = 6), t.pc.setLocalDescription(i));
                        case 6:
                          t.m_localSDPInfoCallBack(i.sdp);
                        case 7:
                          return (t.bCloseState && (t.close(), (o = !1)), n.a(2, o));
                      }
                  },
                  n,
                );
              }),
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })()),
          (t.close = function () {
            (e.log("RtcPlayer close, bGetUserMedia:" + t.bGetUserMedia),
              (t.bCloseState = !0),
              t.bGetUserMedia ||
                (t.videoStream &&
                  (t.videoStream.getTracks().forEach(function (e) {
                    (e.stop(), (e = null));
                  }),
                  (t.videoStream = null)),
                t.talkStream &&
                  (t.talkStream.getTracks().forEach(function (e) {
                    (e.stop(), (e = null));
                  }),
                  (t.talkStream = null)),
                t.pc && t.pc.close(),
                (t.pc = null)));
          }),
          (t.onvideoTrack = function (e) {
            t.videoStream.addTrack(e.track);
          }),
          (t.ontalkTrack = function (e) {
            t.talkStream.addTrack(e.track);
          }),
          (t.bytesToInt = function (e, t) {
            var n = 255 & e[t],
              r = 255 & e[t + 1],
              o = 255 & e[t + 2];
            return ((255 & e[t + 3]) << 24) | (o << 16) | (r << 8) | n;
          }),
          (t.checkPVStream = function (e) {
            var t = e.length;
            return (
              68 == e[0] &&
              72 == e[1] &&
              65 == e[2] &&
              86 == e[3] &&
              100 == e[t - 8] &&
              104 == e[t - 7] &&
              97 == e[t - 6] &&
              118 == e[t - 5]
            );
          }),
          (t.getPVFrameLen = function (e) {
            return t.bytesToInt(e, 12);
          }),
          (t.receiveChannelCallback = function (n) {
            (e.log("Receive data channel callback"),
              (t.receiveChannel = n.channel),
              (t.receiveChannel.binaryType = "arraybuffer"),
              (t.receiveChannel.onmessage = t.onReceiveMessageCallback),
              (t.receiveChannel.onopen = t.onReceiveChannelStateChange),
              (t.receiveChannel.onclose = t.onReceiveChannelStateChange));
          }),
          (t.onReceiveMessageCallback = function (n) {
            var r = new Uint8Array(n.data);
            if (
              (t.pvparsered ||
                ((t.pvFrameLen = t.getPVFrameLen(r)),
                (t.h265data = new Uint8Array(t.pvFrameLen)),
                (t.pvparsered = !0)),
              t.h265datalen + n.data.byteLength < t.pvFrameLen)
            )
              return (t.h265data.set(r), void (t.h265datalen += n.data.byteLength));
            (t.h265data.length >= n.data.byteLength + t.h265datalen &&
              t.h265data.set(r, t.h265datalen),
              (t.pvparsered = !1),
              (t.h265datalen = 0),
              (t.pvFrameLen = 0),
              t.checkPVStream(t.h265data) ||
                e.log(
                  "size: "
                    .concat(n.data.byteLength, '" data: ')
                    .concat(t.h265data[0], " ")
                    .concat(t.h265data[1], " ")
                    .concat(t.h265data[2], " ")
                    .concat(t.h265data[3], " ")
                    .concat(t.h265data[4]),
                ));
          }),
          (t.onReceiveChannelStateChange = function () {
            var n = t.receiveChannel.readyState;
            e.log("Receive channel state is: ".concat(n));
          }),
          (t.onSendChannelStateChange = function () {
            if ((e.log("on send channel state change"), t.sendChannel)) {
              var n = t.sendChannel.readyState;
              (e.log("Send channel state is: ".concat(n)),
                "open" === n && t.sendChannel.send("start streaming"));
            }
          }),
          (t.onError = function (n) {
            t.sendChannel
              ? e.error("Error in sendChannel:", n)
              : e.log("Error in sendChannel which is already closed:", n);
          }),
          (t.senddate = function () {
            if (t.sendChannel) {
              var n = t.sendChannel.readyState;
              (e.log("Send channel state is: ".concat(n)),
                "open" === n && t.sendChannel.send("this is a datachannel test demo"));
            }
          }),
          (t.pc.ontrack = function (n) {
            t.onvideoTrack && t.onvideoTrack(n);
            var r = n.receiver;
            "jitterBufferTarget" in r &&
              e.log("self.pc.ontrack set jitterBufferTarget", r.jitterBufferTarget);
          }),
          (t.pc.onconnectionstatechange = function () {}),
          (t.pc.oniceconnectionstatechange = function () {}),
          (t.pc.onstatsended = function () {}),
          (t.pc.onsignalingstatechange = function () {}),
          (t.pc.onicegatheringstatechange = function () {}),
          (t.pc.onicecandidate = function (e) {}),
          (t.__internal = {
            prepareUrl: function (e) {
              var n = t.__internal.parse(e),
                r = n.user_query.schema;
              r = r ? r + ":" : window.location.protocol;
              var o = n.port || 9001;
              "https:" === r && (o = n.port || 9002);
              var a = n.user_query.play || t.defaultPath;
              a.lastIndexOf("/") !== a.length - 1 && (a += "/");
              var i = (i = r + "//" + n.server + ":" + o + a).replace(a + "&", a + "?");
              return {
                apiUrl: i,
                streamUrl: n.url,
                schema: r,
                urlObject: n,
                port: o,
                tid: Number(parseInt(new Date().getTime() * Math.random() * 100))
                  .toString(16)
                  .substr(0, 7),
              };
            },
            parse: function (e) {
              var n = document.createElement("a");
              n.href = e
                .replace("rtmp://", "http://")
                .replace("webrtc://", "http://")
                .replace("rtc://", "http://");
              var r = n.hostname,
                o = n.pathname.substr(1, n.pathname.lastIndexOf("/") - 1),
                a = n.pathname.substr(n.pathname.lastIndexOf("/") + 1);
              if ((o = o.replace("...vhost...", "?vhost=")).indexOf("?") >= 0) {
                var i = o.substr(o.indexOf("?"));
                ((o = o.substr(0, o.indexOf("?"))),
                  i.indexOf("vhost=") > 0 &&
                    (r = i.substr(i.indexOf("vhost=") + "vhost=".length)).indexOf("&") > 0 &&
                    (r = r.substr(0, r.indexOf("&"))));
              }
              if (n.hostname === r) {
                /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.test(n.hostname) && (r = "__defaultVhost__");
              }
              var l = "rtmp";
              e.indexOf("://") > 0 && (l = e.substr(0, e.indexOf("://")));
              var u = n.port;
              u ||
                ("http" === l ? (u = 80) : "https" === l ? (u = 443) : "rtmp" === l && (u = 1935));
              var s = {
                url: e,
                schema: l,
                server: n.hostname,
                port: u,
                vhost: r,
                app: o,
                stream: a,
              };
              return (
                t.__internal.fill_query(n.search, s),
                s.port ||
                  ("webrtc" !== l && "rtc" !== l) ||
                  ("https" === s.user_query.schema || 0 === window.location.href.indexOf("https://")
                    ? (s.port = 9002)
                    : (s.port = 9001)),
                s
              );
            },
            fill_query: function (e, t) {
              if (((t.user_query = {}), 0 !== e.length)) {
                e.indexOf("?") >= 0 && (e = e.split("?")[1]);
                for (var n = e.split("&"), r = 0; r < n.length; r++) {
                  var o = n[r].split("=");
                  ((t[o[0]] = o[1]), (t.user_query[o[0]] = o[1]));
                }
                t.domain && (t.vhost = t.domain);
              }
            },
          }),
          t
        );
      };
      function Jt(e) {
        return (Jt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function $t(e, t) {
        var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return Qt(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? Qt(e, t)
                      : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var a,
          i = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return ((i = e.done), e);
          },
          e: function (e) {
            ((l = !0), (a = e));
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (l) throw a;
            }
          },
        };
      }
      function Qt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Zt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, tn(r.key), r));
        }
      }
      function en(e, t, n) {
        return (
          t && Zt(e.prototype, t),
          n && Zt(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function tn(e) {
        var t = (function (e, t) {
          if ("object" != Jt(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != Jt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == Jt(t) ? t : t + "";
      }
      function nn(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      var rn = 1,
        on = 2,
        an = 1,
        ln = 2,
        un = 0,
        sn = 1,
        cn = en(function e() {
          (nn(this, e),
            (this.epoch_time = 0),
            (this.offset = 0),
            (this.type = un),
            (this.length = -1));
        }),
        fn = (function () {
          function e() {
            (nn(this, e),
              (this.path = ""),
              (this.region = ""),
              (this.duration = 0),
              (this.epoch_time = 0),
              (this.kps = []));
          }
          return en(e, null, [
            {
              key: "from",
              value: function (t) {
                var n = new e();
                return (
                  (n.path = t.path),
                  (n.region = t.region),
                  (n.duration = t.duration),
                  (n.epoch_time = t.epoch_time),
                  (n.kps = t.kps.map(function (e) {
                    var t = new cn();
                    return (Object.assign(t, e), t);
                  })),
                  n
                );
              },
            },
          ]);
        })(),
        dn = (function () {
          return en(
            function e() {
              (nn(this, e),
                (this.m_lSlice = []),
                (this.m_cpos = 0),
                (this.m_end_pos = 0),
                (this.m_is_end = !1),
                (this.m_m3u8_sequence = -1),
                (this.m_slice_sequence = -1),
                (this.m_targetduration = 0));
            },
            [
              {
                key: "_strSplit",
                value: function (e, t) {
                  return e.split(new RegExp(t));
                },
              },
              {
                key: "addIndex",
                value: function (e, t, n) {
                  if (!e || 0 === e.length) return (rn, !1);
                  this.m_lSlice = [];
                  var r = this._strSplit(e, "\r\n");
                  r.length <= 1 && (r = this._strSplit(e, "\n"));
                  for (var o = t, a = null, i = 0, l = 0; l < r.length; l++) {
                    var u = r[l].trim();
                    if (u)
                      if ("#EXT-X-ENDLIST" !== u) {
                        if (u.startsWith("#EXT-X-MEDIA-SEQUENCE:")) {
                          var s = parseInt(u.split(":")[1]);
                          if (this.m_m3u8_sequence === s)
                            return (
                              console.warn(
                                "m3u8文件未更新，当前序列号: ".concat(this.m_m3u8_sequence),
                              ),
                              on,
                              !1
                            );
                          (s < this.m_m3u8_sequence && (this.m_slice_sequence = s),
                            -1 === this.m_m3u8_sequence && (this.m_slice_sequence = s),
                            (this.m_m3u8_sequence = s));
                        }
                        if (u.startsWith("#EXT-X-TARGETDURATION:")) {
                          var c = parseInt(u.split(":")[1]);
                          (console.log("HLS blb targetduration ".concat(c)),
                            (this.m_targetduration = c));
                        }
                        if (u.startsWith("#EXTINF:")) {
                          var f = parseFloat(u.split(":")[1].split(",")[0]);
                          ((i = f), ((a = new fn()).duration = f), this.m_lSlice.push(a));
                        }
                        if (u.startsWith("#EXT-REGIONID:")) {
                          var d = u.split(":")[1].trim();
                          a && (a.region = "&regionid=".concat(d));
                        }
                        if (u.startsWith("#EXT-X-IF:")) {
                          var p = u.substring("#EXT-X-IF:".length).trim().split(/\s+/);
                          if (p.length >= 2 && a) {
                            var m = new cn();
                            ((m.epoch_time = parseFloat(p[0])),
                              (m.offset = parseInt(p[1])),
                              (m.type = un),
                              (m.length = p.length > 2 ? parseInt(p[2]) : -1),
                              a.kps.push(m),
                              1 === a.kps.length && (a.epoch_time = m.epoch_time));
                          }
                        }
                        if (u.startsWith("#EXT-X-PF:")) {
                          var h = u.substring("#EXT-X-PF:".length).trim().split(/\s+/);
                          if (h.length >= 2 && a) {
                            var g = new cn();
                            ((g.epoch_time = parseFloat(h[0])),
                              (g.offset = parseInt(h[1])),
                              (g.type = sn),
                              (g.length = h.length > 2 ? parseInt(h[2]) : -1),
                              a.kps.push(g));
                          }
                        }
                        !u.startsWith("#") &&
                          a &&
                          ((a.path = u), (a.duration = i), (a.epoch_time = o), (o += i));
                      } else this.m_is_end = !0;
                  }
                  return (
                    this.updateSeq(),
                    0 === this.m_end_pos && (this.m_end_pos = this.m_lSlice.length - 1),
                    !0
                  );
                },
              },
              {
                key: "updateSeq",
                value: function () {
                  (console.log(
                    "updateSeq m_slice_sequence["
                      .concat(this.m_slice_sequence, "] m_m3u8_sequence[")
                      .concat(this.m_m3u8_sequence, "]"),
                  ),
                    this.m_m3u8_sequence > this.m_slice_sequence
                      ? ((this.m_slice_sequence = this.m_m3u8_sequence), (this.m_cpos = 0))
                      : (this.m_cpos = this.m_slice_sequence - this.m_m3u8_sequence));
                },
              },
              {
                key: "firstSlice",
                value: function (e) {
                  return ((this.m_cpos = 0), this.nextSlice(e));
                },
              },
              {
                key: "nextSlice",
                value: function (e) {
                  return (
                    !(this.m_cpos > this.m_end_pos || this.m_cpos >= this.m_lSlice.length) &&
                    (Object.assign(e, fn.from(this.m_lSlice[this.m_cpos])),
                    this.m_cpos++,
                    this.m_slice_sequence++,
                    !0)
                  );
                },
              },
              {
                key: "seekSlice",
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                  if (0 === this.m_lSlice.length)
                    return (
                      console.error("Can't find the slice, because m_lSlice size is zero"), !1
                    );
                  for (var r = -1, o = -1, a = null, i = 0; i < this.m_lSlice.length; i++) {
                    var l = this.m_lSlice[i];
                    if (e <= l.epoch_time + l.duration) {
                      ((r = i),
                        (this.m_cpos = i + 1),
                        (a = fn.from(l)),
                        console.log("Find the slice at position ".concat(r)));
                      break;
                    }
                    if (i === this.m_lSlice.length - 1)
                      return (console.error("Can't find the slice, please check the seektime"), !1);
                  }
                  if (0 === a.kps.length) {
                    var u = new cn();
                    return (
                      (u.epoch_time = a.epoch_time),
                      (u.offset = 0),
                      (u.type = un),
                      (u.length = -1),
                      t.push(a),
                      n.push(u),
                      !0
                    );
                  }
                  for (var s = null, c = a.kps.length - 1; c >= 0; c--) {
                    if (e >= a.kps[c].epoch_time) {
                      ((s = a.kps[c]), (o = c), console.log("Find the frame at keyPos ".concat(o)));
                      break;
                    }
                    if (0 === c) {
                      var f = new cn();
                      return (
                        (f.epoch_time = a.epoch_time),
                        (f.offset = 0),
                        (f.type = un),
                        (f.length = -1),
                        t.push(a),
                        n.push(f),
                        !0
                      );
                    }
                  }
                  if (s.type === sn) {
                    for (var d = r; d >= 0; d--)
                      for (
                        var p = this.m_lSlice[d], m = d === r ? o : p.kps.length - 1, h = m;
                        h >= 0;
                        h--
                      )
                        if (p.kps[h].type === un)
                          return (
                            t.push(p),
                            n.push(p.kps[h]),
                            console.log(
                              "Find reference I frame at sPos ".concat(d, " kPos ").concat(h),
                            ),
                            !0
                          );
                    return (
                      (t.length = 0),
                      (n.length = 0),
                      console.error("Can't find the key_I frame, please check"),
                      !1
                    );
                  }
                  return (
                    t.push(a),
                    n.push(s),
                    console.log("Slice Pos ".concat(r, " keyPos ").concat(o)),
                    !0
                  );
                },
              },
              {
                key: "seekSliceWithOption",
                value: function (e, t, n, r) {
                  for (var o = 0; o < this.m_lSlice.length; o++) {
                    var a = this.m_lSlice[o];
                    if (e <= a.epoch_time + a.duration) {
                      (Object.assign(n, fn.from(a)),
                        t === an ? (this.m_cpos = o + 1) : t === ln && (this.m_end_pos = o - 1));
                      for (var i = a.kps.length - 1; i >= 0; i--)
                        if (e > a.kps[i].epoch_time) return (Object.assign(r, a.kps[i]), !0);
                      return (
                        (r.epoch_time = a.epoch_time),
                        (r.offset = 0),
                        t === ln && (r.offset = -1),
                        !0
                      );
                    }
                    if (t === ln && o === this.m_lSlice.length - 1) {
                      this.m_end_pos = this.m_lSlice.length - 1;
                      var l = this.m_lSlice[this.m_lSlice.length - 1];
                      return (
                        Object.assign(n, fn.from(l)),
                        l.kps.length > 0
                          ? Object.assign(r, l.kps[l.kps.length - 1])
                          : ((r.epoch_time = l.epoch_time), (r.offset = 0)),
                        !0
                      );
                    }
                  }
                  return !1;
                },
              },
              {
                key: "getRemainDuration",
                value: function () {
                  for (var e = 0, t = this.m_cpos; t < this.m_lSlice.length; t++)
                    e += this.m_lSlice[t].duration;
                  return e;
                },
              },
              {
                key: "getDuration",
                value: function () {
                  var e,
                    t = 0,
                    n = $t(this.m_lSlice);
                  try {
                    for (n.s(); !(e = n.n()).done; ) {
                      t += e.value.duration;
                    }
                  } catch (e) {
                    n.e(e);
                  } finally {
                    n.f();
                  }
                  return t;
                },
              },
              {
                key: "dumpIndex",
                value: function () {
                  for (var e = 0; e < this.m_lSlice.length; e++) {
                    var t = this.m_lSlice[e];
                    console.log(
                      "切片[".concat(e, "]: URL=").concat(t.path, ", 时间=").concat(t.epoch_time),
                    );
                    for (var n = 0; n < t.kps.length; n++) {
                      var r = t.kps[n];
                      console.log(
                        "  关键帧["
                          .concat(n, "]: 类型=")
                          .concat(r.type === un ? "I" : "P", ", 时间=")
                          .concat(r.epoch_time, ", 偏移=")
                          .concat(r.offset),
                      );
                    }
                  }
                },
              },
              {
                key: "isEnd",
                value: function () {
                  return this.m_is_end;
                },
              },
              {
                key: "getTargetDuration",
                value: function () {
                  return this.m_targetduration;
                },
              },
              {
                key: "getSliceSize",
                value: function () {
                  return this.m_lSlice.length;
                },
              },
              {
                key: "getBackSlice",
                value: function (e) {
                  return (
                    0 !== this.m_lSlice.length &&
                    (Object.assign(e, fn.from(this.m_lSlice[this.m_lSlice.length - 1])), !0)
                  );
                },
              },
              {
                key: "getBackKeypoint",
                value: function (e) {
                  if (0 === this.m_lSlice.length) return !1;
                  var t = this.m_lSlice[this.m_lSlice.length - 1];
                  return 0 !== t.kps.length && (Object.assign(e, t.kps[t.kps.length - 1]), !0);
                },
              },
              {
                key: "resetEndSlicePos",
                value: function () {
                  this.m_end_pos = this.m_lSlice.length - 1;
                },
              },
            ],
          );
        })();
      function pn() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function a(n, r, o, a) {
          var u = r && r.prototype instanceof l ? r : l,
            s = Object.create(u.prototype);
          return (
            mn(
              s,
              "_invoke",
              (function (n, r, o) {
                var a,
                  l,
                  u,
                  s = 0,
                  c = o || [],
                  f = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: p,
                    f: p.bind(e, 4),
                    d: function (t, n) {
                      return ((a = t), (l = 0), (u = e), (d.n = n), i);
                    },
                  };
                function p(n, r) {
                  for (l = n, u = r, t = 0; !f && s && !o && t < c.length; t++) {
                    var o,
                      a = c[t],
                      p = d.p,
                      m = a[2];
                    n > 3
                      ? (o = m === r) && ((u = a[(l = a[4]) ? 5 : ((l = 3), 3)]), (a[4] = a[5] = e))
                      : a[0] <= p &&
                        ((o = n < 2 && p < a[1])
                          ? ((l = 0), (d.v = r), (d.n = a[1]))
                          : p < m &&
                            (o = n < 3 || a[0] > r || r > m) &&
                            ((a[4] = n), (a[5] = r), (d.n = m), (l = 0)));
                  }
                  if (o || n > 1) return i;
                  throw ((f = !0), r);
                }
                return function (o, c, m) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (f && 1 === c && p(c, m), l = c, u = m; (t = l < 2 ? e : u) || !f; ) {
                    a || (l ? (l < 3 ? (l > 1 && (d.n = -1), p(l, u)) : (d.n = u)) : (d.v = u));
                    try {
                      if (((s = 2), a)) {
                        if ((l || (o = "next"), (t = a[o]))) {
                          if (!(t = t.call(a, u)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((u = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = a.return) && t.call(a),
                            l < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" + o + "' method",
                              )),
                              (l = 1)));
                        a = e;
                      } else if ((t = (f = d.n < 0) ? u : n.call(r, d)) !== i) break;
                    } catch (t) {
                      ((a = e), (l = 1), (u = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: t, done: f };
                };
              })(n, o, a),
              !0,
            ),
            s
          );
        }
        var i = {};
        function l() {}
        function u() {}
        function s() {}
        t = Object.getPrototypeOf;
        var c = [][r]
            ? t(t([][r]()))
            : (mn((t = {}), r, function () {
                return this;
              }),
              t),
          f = (s.prototype = l.prototype = Object.create(c));
        function d(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), mn(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (u.prototype = s),
          mn(f, "constructor", s),
          mn(s, "constructor", u),
          (u.displayName = "GeneratorFunction"),
          mn(s, o, "GeneratorFunction"),
          mn(f),
          mn(f, o, "Generator"),
          mn(f, r, function () {
            return this;
          }),
          mn(f, "toString", function () {
            return "[object Generator]";
          }),
          (pn = function () {
            return { w: a, m: d };
          })()
        );
      }
      function mn(e, t, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        (mn = function (e, t, n, r) {
          if (t)
            o ? o(e, t, { value: n, enumerable: !r, configurable: !r, writable: !r }) : (e[t] = n);
          else {
            var a = function (t, n) {
              mn(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (a("next", 0), a("throw", 1), a("return", 2));
          }
        })(e, t, n, r);
      }
      function hn(e, t, n, r, o, a, i) {
        try {
          var l = e[a](i),
            u = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function gn(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = e.apply(t, n);
            function i(e) {
              hn(a, r, o, i, l, "next", e);
            }
            function l(e) {
              hn(a, r, o, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      var yn = function (e, t) {
        function n() {
          return r.apply(this, arguments);
        }
        function r() {
          return (r = gn(
            pn().m(function e() {
              var t,
                n,
                r,
                o,
                a,
                i,
                l,
                u,
                s = this;
              return pn().w(
                function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        return (
                          (e.p = 0),
                          this.sdkConsole.log("Enter download index\n"),
                          (e.n = 1),
                          fetch(this.m_m3uUrl)
                        );
                      case 1:
                        if ((t = e.v).ok) {
                          e.n = 2;
                          break;
                        }
                        throw new Error("HTTP ".concat(t.status));
                      case 2:
                        return ((e.n = 3), t.text());
                      case 3:
                        if (
                          ((this.m_m3u8_context = e.v),
                          this.sdkConsole.log("After downloadIndexTask"),
                          !this.m_m3u8_context.includes("#EXT-X-STREAM-INF:"))
                        ) {
                          e.n = 7;
                          break;
                        }
                        if (
                          ((n = ""),
                          -1 !== (r = this.m_m3u8_context.indexOf("#EXT-X-STREAM-INF")) &&
                            (-1 === (o = this.m_m3u8_context.indexOf("\r\n", r)) &&
                              (o = this.m_m3u8_context.indexOf("\n", r)),
                            -1 !== o &&
                              ((o =
                                -1 !== this.m_m3u8_context.indexOf("\r\n", r)
                                  ? o + "\r\n".length
                                  : o + "\n".length),
                              (a = this.m_m3u8_context.substring(o)),
                              -1 === (i = a.indexOf("\r\n")) && (i = a.indexOf("\n")),
                              -1 !== i &&
                                ((n = a.substring(0, i)),
                                this.sdkConsole.log("m3u8 new file[".concat(n, "]"))))),
                          !n)
                        ) {
                          e.n = 7;
                          break;
                        }
                        return ((e.n = 4), fetch(n));
                      case 4:
                        if ((l = e.v).ok) {
                          e.n = 5;
                          break;
                        }
                        throw new Error("HTTP ".concat(l.status));
                      case 5:
                        return ((e.n = 6), l.text());
                      case 6:
                        this.m_m3u8_context = e.v;
                      case 7:
                        return (
                          0,
                          this.m_m3uParser.addIndex(this.m_m3u8_context, this.m_startTime, 0) &&
                            (function () {
                              var e = new fn();
                              if (s.m_m3uParser.getBackSlice(e)) {
                                var t = new cn();
                                s.m_m3uParser.getBackKeypoint(t)
                                  ? (s.m_endTime = t.epoch_time)
                                  : (s.m_endTime = e.epoch_time + e.duration);
                              } else s.m_endTime = s.m_startTime;
                              s.m_m3uParser.resetEndSlicePos();
                            })(),
                          (this.m_indexDownloaded = !0),
                          e.a(2, this.m_m3u8_context)
                        );
                      case 8:
                        throw (
                          (e.p = 8),
                          (u = e.v),
                          this.sdkConsole.error("Download failed: ".concat(u.message)),
                          u
                        );
                      case 9:
                        return e.a(2);
                    }
                },
                e,
                this,
                [[0, 8]],
              );
            }),
          )).apply(this, arguments);
        }
        function o() {
          return a.apply(this, arguments);
        }
        function a() {
          return (a = gn(
            pn().m(function e() {
              var t,
                n,
                r,
                o,
                a,
                i,
                l,
                u,
                s,
                c,
                f,
                d,
                p,
                m,
                h,
                g,
                y,
                _,
                v,
                S,
                P,
                b,
                w,
                A,
                E,
                M,
                T,
                C = this;
              return pn().w(
                function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        if (
                          (this.sdkConsole.log("Enter downloadPaasSliceTask"),
                          (e.p = 1),
                          (this.m_cur_finish = !1),
                          (this.m_abortDownload = !1),
                          (this.m_seek_keyList = this.m_seek_keyList || []),
                          (this.m_seek_sliceList = this.m_seek_sliceList || []),
                          !(this.m_seek_keyList.length > 1))
                        ) {
                          e.n = 6;
                          break;
                        }
                        return (
                          (t = this.m_seek_keyList[1]),
                          (n = this.m_seek_sliceList[1]),
                          this.sdkConsole.log(
                            "[seek I-frame download]:<"
                              .concat(n.epoch_time, "> ")
                              .concat(n.path, " offset=")
                              .concat(t.offset, "-")
                              .concat(t.offset + t.length - 1),
                          ),
                          (r = []).push(n.path),
                          (e.n = 2),
                          new Promise(function (e) {
                            C.m_cbAuthorizeInfoCallback(
                              C.m_recordRegionId,
                              r,
                              C.m_token,
                              function (t) {
                                ((C.m_sRealUrls = JSON.parse(JSON.stringify(t))), e());
                              },
                            );
                          })
                        );
                      case 2:
                        return (
                          (o = this.m_sRealUrls.shift()),
                          (a = "bytes=".concat(t.offset, "-").concat(t.offset + t.length - 1)),
                          (e.n = 3),
                          fetch(o, { headers: { Range: a } })
                        );
                      case 3:
                        if ((i = e.v).ok) {
                          e.n = 4;
                          break;
                        }
                        throw new Error("Download failed, HTTP ".concat(i.status));
                      case 4:
                        return ((e.n = 5), i.arrayBuffer());
                      case 5:
                        ((l = e.v),
                          this.playsdkInterface.InputHlsStreamData(
                            new Uint8Array(l),
                            l.byteLength,
                          ));
                      case 6:
                        if (!(this.m_seek_sliceList.length > 0)) {
                          e.n = 11;
                          break;
                        }
                        return (
                          (u = this.m_seek_keyList[0]),
                          (s = this.m_seek_sliceList[0]),
                          this.sdkConsole.log(
                            "[seek slice download]:<"
                              .concat(s.epoch_time, "> ")
                              .concat(s.path, " offset=")
                              .concat(u.offset),
                          ),
                          (c = []).push(s.path),
                          (e.n = 7),
                          new Promise(function (e) {
                            C.m_cbAuthorizeInfoCallback(
                              C.m_recordRegionId,
                              c,
                              C.m_token,
                              function (t) {
                                ((C.m_sRealUrls = JSON.parse(JSON.stringify(t))), e());
                              },
                            );
                          })
                        );
                      case 7:
                        return (
                          (f = this.m_sRealUrls.shift()),
                          (d = "bytes=".concat(u.offset, "-")),
                          (e.n = 8),
                          fetch(f, { headers: { Range: d } })
                        );
                      case 8:
                        if ((p = e.v).ok) {
                          e.n = 9;
                          break;
                        }
                        throw new Error("Download failed, HTTP ".concat(p.status));
                      case 9:
                        return ((e.n = 10), p.arrayBuffer());
                      case 10:
                        ((m = e.v),
                          this.playsdkInterface.InputHlsStreamData(
                            new Uint8Array(m),
                            m.byteLength,
                          ));
                      case 11:
                        ((this.m_seek_keyList = []),
                          (this.m_seek_sliceList = []),
                          (h = new fn()),
                          (g = []));
                      case 12:
                        if (
                          !this.m_m3uParser ||
                          !this.m_m3uParser.nextSlice(h) ||
                          this.m_abortDownload
                        ) {
                          e.n = 14;
                          break;
                        }
                        if (!(this.m_seekEndTime > 0 && h.epoch_time > this.m_seekEndTime)) {
                          e.n = 13;
                          break;
                        }
                        return (
                          this.sdkConsole.log(
                            "Reached end time ".concat(
                              this.m_seekEndTime,
                              ", stop downloading further slices",
                            ),
                          ),
                          e.a(3, 14)
                        );
                      case 13:
                        (this.sdkConsole.log(
                          "[play slice]:<".concat(h.epoch_time, "> ").concat(h.path),
                        ),
                          g.push(h.path),
                          (e.n = 12));
                        break;
                      case 14:
                        return (
                          this.sdkConsole.log("call Authorize num:".concat(g.length)),
                          (e.n = 15),
                          new Promise(function (e) {
                            C.m_cbAuthorizeInfoCallback(
                              C.m_recordRegionId,
                              g,
                              C.m_token,
                              function (t) {
                                ((C.m_sRealUrls = JSON.parse(JSON.stringify(t))), e());
                              },
                            );
                          })
                        );
                      case 15:
                        (this.sdkConsole.log("After cAuthorizeCallBack"),
                          this.sdkConsole.log(
                            "return Authorize num:".concat(this.m_sRealUrls.length),
                          ));
                      case 16:
                        if (!(this.m_sRealUrls.length > 0) || this.m_abortDownload) {
                          e.n = 21;
                          break;
                        }
                        return ((y = this.m_sRealUrls.shift()), (e.n = 17), fetch(y));
                      case 17:
                        if ((_ = e.v).ok) {
                          e.n = 18;
                          break;
                        }
                        throw new Error(
                          "Download failed,download error url["
                            .concat(y, "],HTTP ")
                            .concat(_.status),
                        );
                      case 18:
                        return ((e.n = 19), _.arrayBuffer());
                      case 19:
                        if (
                          ((v = e.v),
                          this.sdkConsole.log(
                            "Finished downloading "
                              .concat(v.byteLength, " bytes from URL ")
                              .concat(y),
                          ),
                          !this._isPaused || !this._resumePromise)
                        ) {
                          e.n = 20;
                          break;
                        }
                        return ((e.n = 20), this._resumePromise);
                      case 20:
                        (this.playsdkInterface.InputHlsStreamData(new Uint8Array(v), v.byteLength),
                          (e.n = 16));
                        break;
                      case 21:
                        if (!(this.m_m3uParser && this.m_endTime > 0) || this.m_abortDownload) {
                          e.n = 27;
                          break;
                        }
                        if (
                          ((S = new fn()),
                          (P = new cn()),
                          this.m_m3uParser &&
                            (this.m_m3uParser.getBackSlice(S), this.m_m3uParser.getBackKeypoint(P)),
                          !(P.offset >= 0))
                        ) {
                          e.n = 27;
                          break;
                        }
                        return (
                          (b = []).push(S.path),
                          this.sdkConsole.log(
                            "[url play slice]:<".concat(S.epoch_time, "> ").concat(S.path),
                          ),
                          (e.n = 22),
                          new Promise(function (e) {
                            C.m_cbAuthorizeInfoCallback(
                              C.m_recordRegionId,
                              b,
                              C.m_token,
                              function (t) {
                                ((C.m_sRealUrls = JSON.parse(JSON.stringify(t))), e());
                              },
                            );
                          })
                        );
                      case 22:
                        return (
                          this.sdkConsole.log("After cAuthorizeCallBack"),
                          (w = this.m_sRealUrls.shift()),
                          (A = "bytes=0-".concat(P.offset + P.length - 1)),
                          (e.n = 23),
                          fetch(w, { headers: { Range: A } })
                        );
                      case 23:
                        if ((E = e.v).ok) {
                          e.n = 24;
                          break;
                        }
                        throw new Error(
                          "Download failed,download error url["
                            .concat(w, "],HTTP ")
                            .concat(E.status),
                        );
                      case 24:
                        return ((e.n = 25), E.arrayBuffer());
                      case 25:
                        if (
                          ((M = e.v),
                          this.sdkConsole.log(
                            "Finished downloading "
                              .concat(M.byteLength, " bytes from URL ")
                              .concat(w),
                          ),
                          !this._isPaused || !this._resumePromise)
                        ) {
                          e.n = 26;
                          break;
                        }
                        return ((e.n = 26), this._resumePromise);
                      case 26:
                        this.playsdkInterface.InputHlsStreamData(new Uint8Array(M), M.byteLength);
                      case 27:
                        e.n = 29;
                        break;
                      case 28:
                        ((e.p = 28),
                          (T = e.v),
                          this.sdkConsole.error("Download error:", T),
                          this.playsdkInterface.StreamFinishCallback(),
                          (this.m_cur_finish = !0));
                      case 29:
                        return (
                          (e.p = 29),
                          this.sdkConsole.log("Download Done!"),
                          0 == this.m_bSeek &&
                            (this.sdkConsole.log("StreamFinishCallback!"),
                            this.playsdkInterface.StreamFinishCallback()),
                          (this.m_cur_finish = !0),
                          e.f(29)
                        );
                      case 30:
                        return e.a(2);
                    }
                },
                e,
                this,
                [[1, 28, 29, 30]],
              );
            }),
          )).apply(this, arguments);
        }
        function i(e, t) {
          ((this.sdkConsole = e),
            (this.playsdkInterface = t),
            null == this.m_m3uParser && (this.m_m3uParser = new dn()),
            (this.m_indexDownloaded = !1),
            (this.m_abortDownload = !1),
            (this.m_cur_finish = !0),
            (this.m_bSeek = !1),
            (this._isPaused = !1),
            (this._resumePromise = null),
            (this._resumeResolver = null),
            (this.m_m3uUrl = ""),
            (this.m_sliceUrlPrefix = ""),
            (this.m_startTime = 0),
            (this.m_seekTime = 0),
            (this.m_seekEndTime = 0),
            (this.m_endTime = 0),
            (this.m_timeout = 0),
            (this.m_protoType = 0),
            (this.m_sToken = ""),
            (this.m_client = ""),
            (this.m_iFrameExtractInv = 0),
            (this.m_fFrameExtractStartTime = 0),
            (this.m_JsonString = ""),
            (this.m_deviceId = ""),
            (this.m_channelId = ""),
            (this.m_recordRegionId = ""),
            (this.m_recordPath = ""),
            (this.m_token = ""),
            (this.m_totalDuration = 0),
            (this.m_m3u8_context = ""),
            (this.m_seek_keyList = []),
            (this.m_seek_sliceList = []),
            (this.m_headers = []),
            (this.m_sRealUrls = []),
            (this.m_cbAuthorizeInfoCallback = null));
        }
        var l;
        return (
          (this.sdkConsole = e),
          (this.playsdkInterface = t),
          (this.m_abortDownload = !1),
          (this.m_cur_finish = !0),
          (this.m_bSeek = !1),
          (this._isPaused = !1),
          (this._resumePromise = null),
          (this._resumeResolver = null),
          (this.m_m3uUrl = ""),
          (this.m_sliceUrlPrefix = ""),
          (this.m_startTime = 0),
          (this.m_seekTime = 0),
          (this.m_seekEndTime = 0),
          (this.m_endTime = 0),
          (this.m_timeout = 0),
          (this.m_protoType = 0),
          (this.m_sToken = ""),
          (this.m_client = ""),
          (this.m_iFrameExtractInv = 0),
          (this.m_fFrameExtractStartTime = 0),
          (this.m_JsonString = ""),
          (this.m_deviceId = ""),
          (this.m_channelId = ""),
          (this.m_recordRegionId = ""),
          (this.m_recordPath = ""),
          (this.m_token = ""),
          (this.m_totalDuration = 0),
          (this.m_m3u8_context = ""),
          (this.m_m3uParser = null),
          (this.m_seek_keyList = []),
          (this.m_seek_sliceList = []),
          (this.m_headers = []),
          (this.m_sRealUrls = []),
          (this.m_cbAuthorizeInfoCallback = null),
          (i.prototype = {
            Init: function (e) {
              if (
                (this.sdkConsole.log("Enter lchls init!"),
                (this.m_m3uUrl = e.m3uUrl),
                (this.m_sliceUrlPrefix = e.sliceUrlPrefix),
                (this.m_startTime = e.startTime),
                (this.m_seekTime = e.seekTime),
                (this.m_seekEndTime = e.seekEndTime),
                (this.m_endTime = e.endTime),
                (this.m_timeout = e.timeout),
                (this.m_protoType = e.nProtoType),
                (this.m_sToken = e.sToken),
                (this.m_client = e.client),
                (this.m_iFrameExtractInv = e.nFrameExtractInv),
                (this.m_fFrameExtractStartTime = e.fFrameExtractSatrtTime),
                (this.m_JsonString = e.jsonString),
                !this.m_sliceUrlPrefix && this.m_m3uUrl)
              ) {
                var t = this.m_m3uUrl.lastIndexOf("/");
                -1 !== t && (this.m_sliceUrlPrefix = this.m_m3uUrl.substring(0, t + 1));
              }
              if (6 != this.m_protoType) return !1;
              var n = JSON.parse(this.m_JsonString);
              return (
                (this.m_deviceId = n.deviceId || ""),
                (this.m_channelId = n.channelId || ""),
                (this.m_recordRegionId = n.recordRegionId || ""),
                (this.m_recordPath = n.recordPath || ""),
                (this.m_token = n.token || ""),
                !0
              );
            },
            GetDuration: function () {
              return this.m_m3uParser.getDuration();
            },
            SetAuthorizeInfoCallback: function (e) {
              this.m_cbAuthorizeInfoCallback = e;
            },
            Start: function (e) {
              var t = this;
              (this.sdkConsole.log(
                "Enter lchls start!, m_seekTime:" +
                  this.m_seekTime +
                  ", seekEndTime:" +
                  this.m_seekEndTime,
              ),
                n
                  .call(this)
                  .then(function (e) {
                    (t.sdkConsole.log("Download successful", e),
                      t.m_seekTime > 0
                        ? t.Seek(t.m_seekTime)
                        : o
                            .call(t)
                            .then(function () {
                              t.sdkConsole.log("Slice download completed successfully");
                            })
                            .catch(function (e) {
                              t.sdkConsole.error("Slice download failed:", e);
                            }));
                  })
                  .catch(function (e) {
                    t.sdkConsole.error("Download failed", e);
                  }));
            },
            Stop: function () {
              this.sdkConsole.log("Enter lchls stop!");
            },
            Pause: function () {
              var e = this;
              (this.sdkConsole.log("Enter lchls pause!"),
                (this._isPaused = !0),
                (this._resumePromise = new Promise(function (t) {
                  e._resumeResolver = t;
                })));
            },
            Resume: function () {
              (this.sdkConsole.log("Enter lchls resume!"),
                (this._isPaused = !1),
                this._resumeResolver &&
                  (this._resumeResolver(),
                  (this._resumeResolver = null),
                  (this._resumePromise = null)));
            },
            Destroy: function () {
              (this.sdkConsole.log("Enter lchls destroy!"),
                this.m_m3uParser && (this.m_m3uParser = null),
                this._resumeResolver &&
                  (this._resumeResolver(),
                  (this._resumeResolver = null),
                  (this._resumePromise = null)),
                (this.m_seek_keyList = []),
                (this.m_seek_sliceList = []),
                (this.m_headers = []),
                (this.m_m3uUrl = ""),
                (this.m_sliceUrlPrefix = ""),
                (this.m_sRealUrls = []),
                (this.m_JsonString = ""),
                (this.m_token = ""),
                (this.m_cbAuthorizeInfoCallback = null));
            },
            Seek:
              ((l = gn(
                pn().m(function e(t) {
                  var n = this;
                  return pn().w(
                    function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            if (this.m_indexDownloaded) {
                              e.n = 2;
                              break;
                            }
                            return (
                              (e.n = 1),
                              new Promise(function (e) {
                                return setTimeout(e, 1);
                              })
                            );
                          case 1:
                            e.n = 0;
                            break;
                          case 2:
                            if (
                              (this.sdkConsole.log("Enter lchls seek ".concat(t, " !")),
                              (this.m_seek_keyList = []),
                              (this.m_seek_sliceList = []),
                              !this.m_m3uParser ||
                                this.m_m3uParser.seekSlice(
                                  t,
                                  this.m_seek_sliceList,
                                  this.m_seek_keyList,
                                ))
                            ) {
                              e.n = 3;
                              break;
                            }
                            return (this.sdkConsole.error("Seek failed for time:", t), e.a(2, !1));
                          case 3:
                            if (
                              0 !== this.m_seek_keyList.length &&
                              0 !== this.m_seek_sliceList.length
                            ) {
                              e.n = 4;
                              break;
                            }
                            return (this.sdkConsole.error("No seek results found"), e.a(2, !1));
                          case 4:
                            (this.sdkConsole.log(
                              "Seek success, found ".concat(
                                this.m_seek_keyList.length,
                                " keyframes",
                              ),
                            ),
                              (this.m_abortDownload = !0),
                              (this.m_bSeek = !0));
                          case 5:
                            if (this.m_cur_finish) {
                              e.n = 7;
                              break;
                            }
                            return (
                              (e.n = 6),
                              new Promise(function (e) {
                                return setTimeout(e, 1);
                              })
                            );
                          case 6:
                            e.n = 5;
                            break;
                          case 7:
                            if (this.m_cur_finish) {
                              e.n = 8;
                              break;
                            }
                            return (
                              this.sdkConsole.error("Seek timeout - current download not finished"),
                              e.a(2, !1)
                            );
                          case 8:
                            return (
                              (this.m_cur_finish = !0),
                              (this.m_bSeek = !1),
                              o.call(this).catch(function (e) {
                                n.sdkConsole.error("Download after seek failed:", e);
                              }),
                              e.a(2, !0)
                            );
                        }
                    },
                    e,
                    this,
                  );
                }),
              )),
              function (e) {
                return l.apply(this, arguments);
              }),
          }),
          new i(this.sdkConsole, this.playsdkInterface)
        );
      };
      function _n() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
          t,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function a(n, r, o, a) {
          var u = r && r.prototype instanceof l ? r : l,
            s = Object.create(u.prototype);
          return (
            vn(
              s,
              "_invoke",
              (function (n, r, o) {
                var a,
                  l,
                  u,
                  s = 0,
                  c = o || [],
                  f = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: p,
                    f: p.bind(e, 4),
                    d: function (t, n) {
                      return ((a = t), (l = 0), (u = e), (d.n = n), i);
                    },
                  };
                function p(n, r) {
                  for (l = n, u = r, t = 0; !f && s && !o && t < c.length; t++) {
                    var o,
                      a = c[t],
                      p = d.p,
                      m = a[2];
                    n > 3
                      ? (o = m === r) && ((u = a[(l = a[4]) ? 5 : ((l = 3), 3)]), (a[4] = a[5] = e))
                      : a[0] <= p &&
                        ((o = n < 2 && p < a[1])
                          ? ((l = 0), (d.v = r), (d.n = a[1]))
                          : p < m &&
                            (o = n < 3 || a[0] > r || r > m) &&
                            ((a[4] = n), (a[5] = r), (d.n = m), (l = 0)));
                  }
                  if (o || n > 1) return i;
                  throw ((f = !0), r);
                }
                return function (o, c, m) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (f && 1 === c && p(c, m), l = c, u = m; (t = l < 2 ? e : u) || !f; ) {
                    a || (l ? (l < 3 ? (l > 1 && (d.n = -1), p(l, u)) : (d.n = u)) : (d.v = u));
                    try {
                      if (((s = 2), a)) {
                        if ((l || (o = "next"), (t = a[o]))) {
                          if (!(t = t.call(a, u)))
                            throw TypeError("iterator result is not an object");
                          if (!t.done) return t;
                          ((u = t.value), l < 2 && (l = 0));
                        } else
                          (1 === l && (t = a.return) && t.call(a),
                            l < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" + o + "' method",
                              )),
                              (l = 1)));
                        a = e;
                      } else if ((t = (f = d.n < 0) ? u : n.call(r, d)) !== i) break;
                    } catch (t) {
                      ((a = e), (l = 1), (u = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: t, done: f };
                };
              })(n, o, a),
              !0,
            ),
            s
          );
        }
        var i = {};
        function l() {}
        function u() {}
        function s() {}
        t = Object.getPrototypeOf;
        var c = [][r]
            ? t(t([][r]()))
            : (vn((t = {}), r, function () {
                return this;
              }),
              t),
          f = (s.prototype = l.prototype = Object.create(c));
        function d(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, s)
              : ((e.__proto__ = s), vn(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (u.prototype = s),
          vn(f, "constructor", s),
          vn(s, "constructor", u),
          (u.displayName = "GeneratorFunction"),
          vn(s, o, "GeneratorFunction"),
          vn(f),
          vn(f, o, "Generator"),
          vn(f, r, function () {
            return this;
          }),
          vn(f, "toString", function () {
            return "[object Generator]";
          }),
          (_n = function () {
            return { w: a, m: d };
          })()
        );
      }
      function vn(e, t, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (e) {
          o = 0;
        }
        (vn = function (e, t, n, r) {
          if (t)
            o ? o(e, t, { value: n, enumerable: !r, configurable: !r, writable: !r }) : (e[t] = n);
          else {
            var a = function (t, n) {
              vn(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            };
            (a("next", 0), a("throw", 1), a("return", 2));
          }
        })(e, t, n, r);
      }
      function Sn(e, t, n, r, o, a, i) {
        try {
          var l = e[a](i),
            u = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function Pn(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = e.apply(t, n);
            function i(e) {
              Sn(a, r, o, i, l, "next", e);
            }
            function l(e) {
              Sn(a, r, o, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      t.default = function (e) {
        var t,
          n = new b(),
          r = null,
          o = !1,
          a = !1,
          i = null,
          l = null,
          u = null,
          s = null,
          c = !1,
          f = !1,
          p = !1,
          m = 0,
          h = !1,
          g = 1,
          y = !1,
          _ = e,
          v = 0,
          S = null,
          P = null,
          w = 0,
          A = !1,
          E = 1,
          M = 0,
          T = !1,
          C = !1,
          k = !1,
          I = 8,
          D = 0,
          R = !1,
          U = !1,
          F = !1,
          x = 0,
          H = 0,
          L = {
            Disconnect: function () {},
            GetPlayPort: function () {},
            PlayStart: function () {},
            DecodeStart: function () {},
            VideoFrameInfo: function () {},
            AudioFrameInfo: function () {},
            RecordTimeStamp: function () {},
            RecordDataInfo: function () {},
            RecordFinish: function () {},
            GetOriginalKey: function () {},
            PlayTokenInfo: function () {},
            PlayTokenDecryptResult: function () {},
            DecryptionResult: function () {},
            PlayBackStreamRange: function () {},
            StreamPlayOver: function () {},
            StreamRedirect: function () {},
            StreamSleepTime: function () {},
            ARTagInfo: function () {},
            GPSInfo: function () {},
            CapturePicDataCallBack: function () {},
            IVSDrawData: function () {},
            AVTalkDataReadySuccess: function () {},
            AVTalkDataRecSuccess: function () {},
            AVTalkDataSendSuccess: function () {},
            GetLocalSDPInfo: function () {},
            DemuxData: function () {},
            ServerUserDefCode: function () {},
            Error: function () {},
            AuthorizeInfo: function () {},
          };
        function O() {}
        function B(e, t) {
          for (var o in (n.trace(
            "startPullStream url:" +
              e.strRtspvUrl +
              ", nProtocolType:" +
              t +
              ", bTalkService:" +
              e.bTalkService,
          ),
          (T = e.bTalkService),
          (function () {
            null !== S && (S.onerror = null);
            null !== S && S.readyState === S.OPEN && (S.close(), (S = null));
          })(),
          r.SetAudioTalkFlag(e.bTalkService),
          r.ResetPlayState(),
          null != e.bBroadcast && (C = e.bBroadcast),
          null == l && ((l = new d()), 0 < x && l.SetLogLevel(x)),
          L))
            l && l.SetCallback(o, L[o]);
          var a = e.strRtspvUri;
          0 == (D = null == t ? (-1 != e.strRtspvUrl.indexOf("rtsp://") ? 0 : 1) : t)
            ? -1 != e.strRtspvUri.indexOf("?")
              ? (e.strRtspvUri += "&rtspoverwebsocket")
              : (e.strRtspvUri += "/rtspoverwebsocket")
            : 1 == D &&
              (-1 != e.strRtspvUri.indexOf("?")
                ? (e.strRtspvUri += "&httpprivateoverwebsocket")
                : (e.strRtspvUri += "/httpprivateoverwebsocket"));
          var i = e.nShortTimeout || 3,
            s = e.nRtspResponseTimeout || 8;
          if (((I = s), 1 == D && -1 == e.strRtspvUrl.indexOf("http://"))) {
            var c = a.indexOf("://");
            ((a = a.slice(c)), (e.strRtspvUrl = "http" + a + e.strRtspvUrl));
          }
          return (
            e.strSourceId.length > 0 &&
              ((e.strRtspvUrl += "?sourceId="), (e.strRtspvUrl += e.strSourceId)),
            (u = l.StartStream(e, D)),
            l.SetMsgWaitTimeout(i),
            void 0 !== e.nStreamTimeout && l.SetStreamTimeout(e.nStreamTimeout),
            r && r.SetStreamOver(!1),
            u
          );
        }
        function V() {
          if (
            (n.trace("stopPullStream"),
            (T = !1),
            u &&
              (v && (clearTimeout(v), (v = 0)),
              l && (l.StopStream(), (l = null), (u = null)),
              (k = !1)),
            a)
          )
            return ((a = !1), r && r.StopRecord());
        }
        function G(e) {
          e != p &&
            (n.trace("pausePullStream, bPause:" + e),
            (p = e),
            u && l.PauseStream(e),
            i && (1 == e ? i.Pause() : i.Resume()));
        }
        function z(e) {
          return N.apply(this, arguments);
        }
        function N() {
          return (N = Pn(
            _n().m(function e(t) {
              var o;
              return _n().w(
                function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        if ((n.trace("lchls seek"), !i)) {
                          e.n = 2;
                          break;
                        }
                        return ((e.n = 1), i.Seek(t));
                      case 1:
                        for (o = 1; o < 5; o++) r && r.ResetBuffer(o);
                      case 2:
                        return e.a(2);
                    }
                },
                e,
              );
            }),
          )).apply(this, arguments);
        }
        function W(e) {
          L.GetLocalSDPInfo(e);
        }
        function j() {
          if (!f && o) {
            setTimeout(
              function () {
                r && (m = r.GetSourceBufferRemain());
              },
              1,
            );
            var e = 0;
            (_ || null === r || (e = r.GetVideoBufferSize()),
              m > 7340032 || e > 70 ? G(!0) : m < 2097152 && e < 20 && G(!1));
          }
        }
        function Y() {
          j();
        }
        function K(e, t) {
          T &&
            (u &&
              (n.trace("SendAVTalkData, data length:" + e.length + ", dataType:" + t),
              l.PutStream(e, t)),
            U || (L.AVTalkDataSendSuccess(), (U = !0)));
        }
        function q(e) {
          if (!A) {
            var t = r.GetOriginalKey(e.data, P, null);
            if (t.length > 0 && -1 !== t.indexOf("data")) {
              (w && (clearTimeout(w), (w = 0)), (A = !0));
              var n = t.indexOf('"deviceIp":'),
                o = t.indexOf('",', n),
                a = t.slice(n + 12, o);
              ((n = t.indexOf('"devicePort":')), (o = t.indexOf('",', n)));
              var i = t.slice(n + 14, o);
              ((n = t.indexOf('"userName":')), (o = t.indexOf('"}', n)));
              var l = t.slice(n + 12, o);
              ((n = t.indexOf('"devicePassword":')), (o = t.indexOf('",', n)));
              var u = t.slice(n + 18, o);
              ((n = t.indexOf('"id":')), (o = t.indexOf(",", n)));
              var s = t.slice(n + 5, o),
                c = {
                  strRtspvUri: "wss://" + a + ":" + i,
                  strRtspvUrl:
                    "rtsp://" +
                    l +
                    ":" +
                    u +
                    "@" +
                    a +
                    ":" +
                    i +
                    "/cam/realmonitor?channel=" +
                    E +
                    "&subtype=" +
                    M +
                    "&proto=Private3",
                  strSourceId: "",
                  strUserName: l,
                  strPassWord: u,
                  strDeviceID: s,
                  bTalkService: T,
                  nRange: 0,
                  nShortTimeout: 3,
                  nRtspResponseTimeout: 8,
                };
              setTimeout(
                function () {
                  var e = B(c);
                  L.GetStreamClinetHandle(e);
                },
                1,
              );
            }
          }
        }
        function X(e) {
          for (
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf-8",
              n = new TextDecoder(t),
              r = new Uint8Array(e),
              o = 0;
            o < r.length && 0 !== r[o];
          )
            o++;
          return n.decode(e.slice(0, o));
        }
        return (
          (O.prototype = {
            Init: function (e, t) {
              return (function (e, t) {
                null != t && ((E = t.nChannel), (M = t.nSubType), (T = t.bTalkService));
                ((o = e.bPlayBack),
                  null == r && ((r = new Wt(_, n)), 0 < x && r.setPrintLogLevel(x)));
                var a = r.Init(e);
                if (a > 0) {
                  var i = r.GetPlayPort();
                  _ && L.GetPlayPort(i);
                }
                for (var u in L) r.setCallback(u, L[u]);
                (r.SetSTFrameCallback(Y), null === l && ((l = new d()), 0 < x && l.SetLogLevel(x)));
                return a;
              })(e, t);
            },
            SetCacheMode: function (e) {
              return (function (e) {
                return r && r.SetCacheMode(e);
              })(e);
            },
            StartPullStream: function (e, t) {
              return B(e, t);
            },
            SetLoginParam: function (e) {
              !(function (e) {
                null == l && (l = new d());
                l.SetLoginParam(e);
              })(e);
            },
            StopPullStream: function () {
              V();
            },
            Pause: function (e) {
              !(function (e) {
                ((f = e), G(e), r.Pause(e));
              })(e);
            },
            Stop: function () {
              !(function () {
                r && (r.CloseIVSDraw(), r.Stop(), (r = null));
                (!1, (f = !1), (H = 0));
              })();
            },
            SetSecurityKey: function (e, t, n, o, a) {
              return (function (e, t, n, o, a) {
                r.SetSecurityKey(e, t, n, o, a);
              })(e, t, n, o, a);
            },
            SetSecurityKeyEx: function (e, t) {
              return (function (e, t) {
                r.SetSecurityKeyEx(e, t);
              })(e, t);
            },
            SetSpeed: function (e, t) {
              ((g = e),
                void 0 !== t && (y = t),
                (function (e, t) {
                  if (u) {
                    var n = e;
                    (1 === H && (n = -e), l.PlayControl(-1, -1, n, -1, t));
                  }
                  var o = e;
                  e >= 4 && (o = 0.9 * e);
                  r.SetPlaySpeed(o);
                })(e, y));
            },
            SetSoundState: function (e) {
              !(function (e) {
                r.SetSoundState(e);
              })(e);
            },
            SetVolume: function (e) {
              !(function (e) {
                r.SetVolume(e);
              })(e);
            },
            SetPureAudio: function (e) {
              !(function (e) {
                r.SetPureAudio(e);
              })(e);
            },
            ChooseAudioChannel: function (e, t) {
              !(function (e, t) {
                r.ChooseAudioChannel(e, t);
              })(e, t);
            },
            SetInt32: function (e, t) {
              return (function (e, t) {
                return r.SetInt32(e, t);
              })(e, t);
            },
            StartRecord: function (e, t, n, o) {
              return (function (e, t, n, o) {
                return ((a = !0), r.StartRecord(e, t, n, o));
              })(e, t, n, o);
            },
            StopRecord: function () {
              return ((a = !1), r.StopRecord());
            },
            CancelRecord: function () {
              return ((a = !1), r.CancelRecord());
            },
            OpenIVS: function (e) {
              return (function (e) {
                return r.OpenIVSDraw(e);
              })(e);
            },
            CloseIVS: function () {
              return r.CloseIVSDraw();
            },
            StartFishEye: function (e) {
              return r.StartFishEye();
            },
            StopFishEye: function () {
              return r.StopFishEye();
            },
            SetFishEyeMode: function (e) {
              return (function (e) {
                var t = 0,
                  n = 0;
                switch (e) {
                  case 1:
                    ((t = 1), (n = 4));
                    break;
                  case 2:
                    ((t = 1), (n = 6));
                    break;
                  case 3:
                    ((t = 1), (n = 7));
                    break;
                  case 4:
                    ((t = 1), (n = 10));
                    break;
                  case 5:
                    ((t = 3), (n = 9));
                    break;
                  case 6:
                    ((t = 3), (n = 12));
                    break;
                  case 7:
                    ((t = 3), (n = 13));
                    break;
                  case 8:
                    ((t = 3), (n = 5));
                    break;
                  case 9:
                    ((t = 2), (n = 3));
                    break;
                  case 10:
                    ((t = 2), (n = 8));
                    break;
                  case 11:
                    ((t = 2), (n = 11));
                    break;
                  case 12:
                    ((t = 2), (n = 14));
                    break;
                  default:
                    return -1;
                }
                return r.SetFishEyeMode(t, n);
              })(e);
            },
            SetIvsEnable: function (e, t) {
              return (function (e, t) {
                return r.SetIvsEnable(e, t);
              })(e, t);
            },
            IVSSetViewProportion: function (e, t) {
              !(function (e, t) {
                r.IVSSetViewProportion(e, t);
              })(e, t);
            },
            IVSIoctl: function (e, t) {
              return (function (e, t, n) {
                return r.IVSIoctl(e, t, n);
              })(e, t);
            },
            IVSGeneralConfig: function (e, t) {
              return (function (e, t) {
                return r.IVSGeneralConfig(e, t);
              })(e, t);
            },
            SetIvsIotBoxParas: function (e, t, n) {
              return (function (e, t, n) {
                return r.SetIvsIotBoxParas(e, t, n);
              })(e, t, n);
            },
            SetIvsIotBoxDisplay: function (e, t, n) {
              return (function (e, t, n) {
                return r.SetIvsIotBoxDisplay(e, t, n);
              })(e, t, n);
            },
            SetIvsLanguageEnvi: function (e) {
              !(function (e) {
                r.SetIvsLanguageEnvi(e);
              })(e);
            },
            SetPanoAR: function (e, t) {
              return (function (e, t) {
                return r.SetPanoAR(e, t);
              })(e, t);
            },
            Set3DPoint: function (e) {
              return (function (e) {
                return r.Set3DPoint(e);
              })(e);
            },
            SetRotateType: function (e) {
              return (function (e) {
                return r.SetRotateType(e);
              })(e);
            },
            OnMouseDown: function (e, t) {
              return (function (e, t) {
                return r.OnMouseDown(e, t);
              })(e, t);
            },
            OnMouseMove: function (e, t) {
              return (function (e, t) {
                return r.OnMouseMove(e, t);
              })(e, t);
            },
            OnMouseUp: function () {
              return r.OnMouseUp();
            },
            OnMouseWheel: function (e) {
              return (function (e) {
                return r.OnMouseWheel(e);
              })(e);
            },
            GetVRCoord2DTrans: function (e, t) {
              return (function (e, t) {
                return r.GetVRCoord2DTrans(e, t);
              })(e, t);
            },
            GetVRCoord3DTrans: function (e, t) {
              return (function (e, t) {
                return r.GetVRCoord3DTrans(e, t);
              })(e, t);
            },
            CapturePic: function (e) {
              !(function (e) {
                r.capturePic(e);
              })(e);
            },
            StartTalk: function (e, t) {
              !(function (e, t) {
                void 0 === t && (t = 8e3);
                (r.setCallback("audioTalk", K), r.StartTalk(e, t));
              })(e, t);
            },
            StopTalk: function () {
              (r.StopTalk(), (R = !1), (U = !1), (F = !1));
            },
            StartVideoCapture: function (e, t, n) {
              !(function (e, t, n) {
                (r.setCallback("audioTalk", K), r.StartVideoCapture(e, t, n));
              })(e, t, n);
            },
            StopVideoCapture: function () {
              r.StopVideoCapture();
            },
            LchlsCreate: function (e) {
              return (function (e) {
                n.trace("lchls Create");
                var t = null;
                i && (i = null);
                (i = new yn(n, e)) && ((t = i), i.SetAuthorizeInfoCallback(L.AuthorizeInfo));
                return t;
              })(e);
            },
            LchlsInit: function (e) {
              !(function (e) {
                (n.trace("lchls Init"), i && i.Init(e));
              })(e);
            },
            LchlsDestroy: function () {
              (n.trace("lchls Destroy"), i && (i.Destroy(), (i = null)));
            },
            LchlsStart: function (e) {
              !(function (e) {
                (n.trace("lchls Start"), i && i.Start(e));
              })(e);
            },
            LchlsStop: function () {
              (n.trace("lchls Stop"), i && i.Stop());
            },
            LchlsSetAuthorizeDone: function (e, t) {
              !(function (e, t) {
                (n.trace("lchls SetAuthorizeDone"), i && i.SetAuthorizeDone(e, t));
              })(e, t);
            },
            LchlsSeek:
              ((t = Pn(
                _n().m(function e(t) {
                  return _n().w(
                    function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            return ((e.n = 1), z(t));
                          case 1:
                            return e.a(2);
                        }
                    },
                    e,
                  );
                }),
              )),
              function (e) {
                return t.apply(this, arguments);
              }),
            RtcOpen: function (e) {
              !(function (e) {
                (n.trace("rtc Open"), s && (s.close(), (s = null), (c = !1)));
                (s = new Xt(n)) && ((e.srcObject = s.videoStream), (e.muted = !1));
              })(e);
            },
            RtcTalk: function () {
              (n.trace("rtc Talk"),
                s &&
                  (s.getLocalSDPInfoCallBack(W),
                  s
                    .playTalk(c)
                    .then(function (e) {})
                    .catch(function (e) {
                      (s && (s.close(), (s = null)), (c = !1), n.error("rtc error:" + e));
                    })));
            },
            RtcSetRemoteSDP: function (e, t) {
              !(function (e, t) {
                (n.trace("rtc SetRemoteSDP, bRemoteOffer:" + t),
                  s && ((c = !0), s.setRemoteSDP(e, t)));
              })(e, t);
            },
            RtcClose: function () {
              (n.trace("rtc Close"), s && (s.close(), (s = null), (c = !1)));
            },
            SetSeekTime: function (e, t, o) {
              !(function (e, t, o) {
                (n.trace("setSeekTime, nStartTime:" + e + ", nEndTime:" + t + ", nSourceType:" + o),
                  void 0 === t && (t = -1));
                if (u) {
                  var a = g;
                  (1 === H && (a = -g), l.PlayControl(e, t, a, o, y));
                }
                for (var i = 1; i < 5; i++) r && r.ResetBuffer(i);
              })(e, t, o);
            },
            SetSeekTimeUtc: function (e, t, o) {
              !(function (e, t, o) {
                (n.trace(
                  "setSeekTimeUtc, nStartTime:" + e + ", nEndTime:" + t + ", nSourceType:" + o,
                ),
                  void 0 === t && (t = -1));
                if (u) {
                  var a = g;
                  (1 === H && (a = -g), l.PlayControlUtc(e, t, a, o, y));
                }
                for (var i = 1; i < 5; i++) r && r.ResetBuffer(i);
              })(e, t, o);
            },
            ResetBuffer: function (e) {
              !(function (e) {
                r && r.ResetBuffer(e);
              })(e);
            },
            OpenPlayGroup: function () {
              return r.OpenPlayGroup();
            },
            AddToPlayGroup: function (e, t) {
              return (function (e, t) {
                return r.AddToPlayGroup(e, t);
              })(e, t);
            },
            DelFromPlayGroup: function (e, t) {
              return (function (e, t) {
                return r.DelFromPlayGroup(e, t);
              })(e, t);
            },
            ClosePlayGroup: function (e) {
              return (function (e) {
                return r.ClosePlayGroup(e);
              })(e);
            },
            PausePlayGroup: function (e, t) {
              return (function (e, t) {
                return (G(t), r.PausePlayGroup(e, t));
              })(e, t);
            },
            SetPlayGroupSpeed: function (e, t, n) {
              return (
                (g = t),
                void 0 !== n && (y = n),
                (function (e, t, n) {
                  if (u) {
                    var o = t;
                    (1 === H && (o = -t), l.PlayControl(-1, -1, o, -1, n));
                  }
                  return r.SetPlayGroupSpeed(e, t);
                })(e, t, y)
              );
            },
            GetSourceBufferRemain: function () {
              return (m = r.GetSourceBufferRemain());
            },
            SetDecodeMode: function (e, t, n) {
              !(function (e, t, n) {
                r.SetDecodeMode(e, t, n);
              })(e, t, n);
            },
            SetColor: function (e, t, n, o) {
              !(function (e, t, n, o) {
                r.SetColor(e, t, n, o);
              })(e, t, n, o);
            },
            SetDisplayRegion: function (e, t) {
              return (function (e, t) {
                return r.SetDisplayRegion(e, t);
              })(e, t);
            },
            SetYUVOSDInfoEx: function (e) {
              !(function (e) {
                r.SetYUVOSDInfoEx(e);
              })(e);
            },
            GetOriginalKey: function (e) {
              !(function (e) {
                r.GetOriginalKey(e.strPlayToken, e.strPlayTokenKey, e.strDeviceID);
              })(e);
            },
            SetPlayTokenToDecrypt: function (e) {
              !(function (e) {
                r.SetPlayTokenToDecrypt(
                  e.strPlayToken,
                  e.strKeySalt,
                  e.strDeviceID,
                  e.bGetPlayInfo,
                );
              })(e);
            },
            SetOriginalKey: function (e, t, n, r, o, a) {
              return (function (e, t, n, r, o, a) {
                if (null !== l) return l.SetOriginalKey(e, t, n, r, o, a);
                return -1;
              })(e, t, n, r, o, a);
            },
            GetCurrentPlayedTime: function () {
              return r.GetCurrentPlayedTime();
            },
            GetCurrentFrameInfo: function () {
              return r.GetCurrentFrameInfo();
            },
            InputData: function (e) {
              return (function (e) {
                return r && r.InputData(e);
              })(e);
            },
            UserVerify: function (e, t, n, r, o) {
              !(function (e, t, n, r, o) {
                ((P = o),
                  ((S = new WebSocket("wss://" + e + ":" + t + "/ar/device/detail")).binaryType =
                    "arraybuffer"),
                  S.addEventListener("message", q, !1),
                  (S.onopen = function () {
                    var e = '{\n    "id":' + n + ',\n    "token":"' + r + '"\n}';
                    (S.send(e),
                      (A = !1),
                      (function () {
                        w && (clearTimeout(w), (w = 0));
                        w = setTimeout(
                          function () {
                            L.Error({ errorCode: "408", description: "Device verify failed" });
                          },
                          5e3,
                        );
                      })());
                  }),
                  (S.onerror = function (e) {
                    L.Error({ errorCode: 205, description: "WebSocket Verify Error" });
                  }));
              })(e, t, n, r, o);
            },
            SetCallBack: function (e, t) {
              L[e] = t;
            },
            SetPrintLogLevel: function (e) {
              !(function (e) {
                ((x = e), n.setPrintLogLevel(e), r && r.setPrintLogLevel(e), l && l.SetLogLevel(e));
              })(e);
            },
            SetPlayMethod: function (e, t, n) {
              !(function (e, t, n) {
                r && r.SetPlayMethod(e, t, n);
              })(e, t, n);
            },
            SetAudioPlayMethod: function (e) {
              !(function (e) {
                r && r.SetAudioPlayMethod(e);
              })(e);
            },
            SetPrivacyRecover: function (e) {
              !(function (e) {
                null !== r && (e && r.SetDecodeMode(!1, !1), r.SetPrivacyRecover(e));
              })(e);
            },
            GetAudioPlayedTime: function () {
              return (function () {
                if (r) return r.GetAudioPlayedTime();
                return -1;
              })();
            },
            SetPlayDirection: function (e) {
              !(function (e) {
                var t = g;
                1 === (H = e) && ((t = -g), r && r.SetDecodeMode(!1, !1));
                u && l && l.PlayControl(-1, -1, t, -1);
                r && r.SetPlayDirection(e);
              })(e);
            },
            OneByOne: function () {
              r && r.OneByOne();
            },
            InputDataEx: function (e, t) {
              if ((v && (clearTimeout(v), (v = 0)), o && !h)) {
                h = !0;
                var a = l.GetPlayInfo();
                (n.trace("PlayBackStreamRange, nStreamRange:" + a), L.PlayBackStreamRange(a));
              }
              T && (F || (L.AVTalkDataRecSuccess(), (F = !0)));
              var i = new ArrayBuffer(t),
                u = new Uint8Array(i);
              return (u.set(SCModule.HEAPU8.subarray(e, e + t)), r && r.InputData(u));
            },
            InputHlsStreamData: function (e, t) {
              if (o && !h && ((h = !0), i)) {
                var a = i.GetDuration();
                (n.trace("PlayBackStreamRange, nStreamRange:" + a), L.PlayBackStreamRange(a));
              }
              return r && r.InputData(e);
            },
            SetDemuxData: function (e, t, n, o) {
              r && r.DemuxDataCallBack(e, t, n, o);
            },
            SetFrameData: function (e, t, n, o, a, i) {
              r && (j(), r.FrameDataCallBack(e, t, n, o, a, i));
            },
            SetDecryptionResult: function (e, t, n) {
              r.DecryptionResultCallBack(e, t, n);
            },
            SetRecordData: function (e, t, n, o, a) {
              r.RecordDataCallBack(e, t, n, o, a);
            },
            SetIVSDrawData: function (e, t, n, o, a) {
              r.IVSDataCallBack(e, t, n, o, a);
            },
            StreamMsgReady: function () {
              T && (R || (L.AVTalkDataReadySuccess(), (R = !0)));
            },
            StreamMsgPlay: function () {
              C ||
                k ||
                ((k = !0),
                (v = setTimeout(
                  function () {
                    (v && (clearTimeout(v), (v = 0)),
                      L.Error({ errorCode: "409", description: "Rtsp Not Response" }));
                  },
                  1e3 * I,
                )));
            },
            StreamRedirectCallback: function (e) {
              !(function (e) {
                V();
                var t = new ArrayBuffer(1e3),
                  n = new Uint8Array(t);
                n.set(SCModule.HEAPU8.subarray(e, e + 1e3));
                var r = (function (e) {
                  for (var t = "", n = 0; n < e.length; n++) {
                    var r = String.fromCharCode(e[n]);
                    if (((t += r), "\0" == r)) break;
                  }
                  return t;
                })(n);
                L.StreamRedirect(r);
              })(e);
            },
            StreamDisconnectCallback: function () {
              null !== l && L.Disconnect();
            },
            StreamFinishCallback: function () {
              r && r.SetStreamOver(!0);
            },
            StreamFailedCallback: function (e, t) {
              (v && (clearTimeout(v), (v = 0)),
                n.trace("StreamFailedCallback, attach:" + e + ", type:" + t),
                l && l.SetStreamFailedMsg(e, t));
            },
            ServerUserDefCodeCallback: function (e) {
              L.ServerUserDefCode({ errorCode: e, description: "User-DefCode" });
            },
            StreamSleepTimeCallback: function (e) {
              L.StreamSleepTime(e);
            },
            SetRenderOSDInfoEx: function (e) {
              !(function (e) {
                r.SetRenderOSDInfoEx(e);
              })(e);
            },
          }),
          (window.cAuthorizeCallBack = (function () {
            var e = Pn(
              _n().m(function e(t, n, r, o, a, i) {
                var l, u, s, c, f, d;
                return _n().w(
                  function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          return (
                            (l = new ArrayBuffer(n)),
                            new Uint8Array(l).set(LchlsModule.HEAPU8.subarray(t, t + n)),
                            (u = X(l)),
                            (s = new ArrayBuffer(o)),
                            new Uint8Array(s).set(LchlsModule.HEAPU8.subarray(r, r + o)),
                            (c = X(s)),
                            (f = new ArrayBuffer(i)),
                            new Uint8Array(f).set(LchlsModule.HEAPU8.subarray(a, a + i)),
                            (d = X(f)),
                            (e.n = 1),
                            L.AuthorizeInfo(u, c, d)
                          );
                        case 1:
                          return e.a(2);
                      }
                  },
                  e,
                );
              }),
            );
            return function (t, n, r, o, a, i) {
              return e.apply(this, arguments);
            };
          })()),
          new O()
        );
      };
    },
  ]).default;
});
