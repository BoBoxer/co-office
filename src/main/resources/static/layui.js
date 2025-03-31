/** v2.10.1 | MIT Licensed */ ;
! function (d) {
    "use strict";
    var t, h = d.document,
        m = {
            modules: {},
            status: {},
            timeout: 10,
            event: {}
        },
        o = function () {
            this.v = "2.10.1"
        },
        e = d.LAYUI_GLOBAL || {},
        v = (t = h.currentScript && "SCRIPT" === h.currentScript.tagName.toUpperCase() ? h.currentScript.src : function () {
            for (var t, e = h.getElementsByTagName("script"), n = e.length - 1, o = n; 0 < o; o--)
                if ("interactive" === e[o].readyState) {
                    t = e[o].src;
                    break
                } return t || e[n].src
        }(), m.dir = e.dir || t.substring(0, t.lastIndexOf("/") + 1)),
        g = function (t, e) {
            e = e || "log", d.console && console[e] && console[e]("layui error hint: " + t)
        },
        b = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        N = m.builtin = {
            lay: "lay",
            layer: "layer",
            laydate: "laydate",
            laypage: "laypage",
            laytpl: "laytpl",
            form: "form",
            upload: "upload",
            dropdown: "dropdown",
            transfer: "transfer",
            tree: "tree",
            table: "table",
            treeTable: "treeTable",
            tabs: "tabs",
            element: "element",
            rate: "rate",
            colorpicker: "colorpicker",
            slider: "slider",
            carousel: "carousel",
            flow: "flow",
            util: "util",
            code: "code",
            jquery: "jquery",
            component: "component",
            all: "all",
            "layui.all": "layui.all"
        },
        s = (o.prototype.cache = m, o.prototype.define = function (t, o) {
            return "function" == typeof t && (o = t, t = []), this.use(t, function () {
                var n = function (t, e) {
                    layui[t] = e, m.status[t] = !0
                };
                return "function" == typeof o && o(function (t, e) {
                    n(t, e), m.callback[t] = function () {
                        o(n)
                    }
                }), this
            }, null, "define"), this
        }, o.prototype.use = function (n, t, e, o) {
            var r, i, a = this,
                u = m.dir = m.dir || v,
                l = h.getElementsByTagName("head")[0],
                s = (n = "string" == typeof n ? [n] : "function" == typeof n ? (t = n, ["all"]) : n, d.jQuery && jQuery.fn.on && (a.each(n, function (t, e) {
                    "jquery" === e && n.splice(t, 1)
                }), layui.jquery = layui.$ = jQuery), n[0]),
                c = 0;

            function p(t, e) {
                var n = "PLaySTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/;
                "load" !== t.type && !n.test((t.currentTarget || t.srcElement).readyState) || (m.modules[s] = e, l.removeChild(r), function o() {
                    return ++c > 1e3 * m.timeout / 4 ? g(s + " is not a valid module", "error") : void(m.status[s] ? y() : setTimeout(o, 4))
                }())
            }

            function y() {
                e.push(layui[s]), 1 < n.length ? a.use(n.slice(1), t, e, o) : "function" == typeof t && (layui.jquery && "function" == typeof layui.jquery && "define" !== o ? layui.jquery(function () {
                    t.apply(layui, e)
                }) : t.apply(layui, e))
            }
            return e = e || [], m.host = m.host || (u.match(/\/\/([\s\S]+?)\//) || ["//" + location.host + "/"])[0], 0 === n.length || layui["layui.all"] && N[s] ? y() : (i = (i = (N[s] ? u + "modules/" : !/^\{\/\}/.test(a.modules[s]) && m.base || "") + (a.modules[s] || s) + ".js").replace(/^\{\/\}/, ""), !m.modules[s] && layui[s] && (m.modules[s] = i), m.modules[s] ? function f() {
                return ++c > 1e3 * m.timeout / 4 ? g(s + " is not a valid module", "error") : void("string" == typeof m.modules[s] && m.status[s] ? y() : setTimeout(f, 4))
            }() : ((r = h.createElement("script"))["async"] = !0, r.charset = "utf-8", r.src = i + ((u = !0 === m.version ? m.v || (new Date).getTime() : m.version || "") ? "?v=" + u : ""), l.appendChild(r), !r.attachEvent || r.attachEvent.toString && r.attachEvent.toString().indexOf("[native code") < 0 || b ? r.addEventListener("load", function (t) {
                p(t, i)
            }, !1) : r.attachEvent("onreadystatechange", function (t) {
                p(t, i)
            }), m.modules[s] = i)), a
        }, o.prototype.disuse = function (t) {
            var n = this;
            return t = n.isArray(t) ? t : [t], n.each(t, function (t, e) {
                m.status[e], delete n[e], delete N[e], delete n.modules[e], delete m.status[e], delete m.modules[e]
            }), n
        }, o.prototype.getStyle = function (t, e) {
            t = t.currentStyle || d.getComputedStyle(t, null);
            return t.getPropertyValue ? t.getPropertyValue(e) : t.getAttribute(e.replace(/-(\w)/g, function (t, e) {
                return e ? e.toUpperCase() : ""
            }))
        }, o.prototype.link = function (n, o, t) {
            var r = this,
                e = h.getElementsByTagName("head")[0],
                i = h.createElement("link"),
                a = "layuicss-" + ((t = "string" == typeof o ? o : t) || n).replace(/\.|\//g, ""),
                u = "creating",
                l = 0;
            return i.href = n + (m.debug ? "?v=" + (new Date).getTime() : ""), i.rel = "stylesheet", i.id = a, i.media = "all", h.getElementById(a) || e.appendChild(i), "function" == typeof o && function s(t) {
                var e = h.getElementById(a);
                return ++l > 1e3 * m.timeout / 100 ? g(n + " timeout") : void(1989 === parseInt(r.getStyle(e, "width")) ? (t === u && e.removeAttribute("lay-status"), e.getAttribute("lay-status") === u ? setTimeout(s, 100) : o()) : (e.setAttribute("lay-status", u), setTimeout(function () {
                    s(u)
                }, 100)))
            }(), r
        }, o.prototype.addcss = function (t, e, n) {
            return layui.link(m.dir + "css/" + t, e, n)
        }, m.callback = {}, o.prototype.factory = function (t) {
            if (layui[t]) return "function" == typeof m.callback[t] ? m.callback[t] : null
        }, o.prototype.img = function (t, e, n) {
            var o = new Image;
            if (o.src = t, o.complete) return e(o);
            o.onload = function () {
                o.onload = null, "function" == typeof e && e(o)
            }, o.onerror = function (t) {
                o.onerror = null, "function" == typeof n && n(t)
            }
        }, o.prototype.config = function (t) {
            for (var e in t = t || {}) m[e] = t[e];
            return this
        }, o.prototype.modules = function () {
            var t, e = {};
            for (t in N) e[t] = N[t];
            return e
        }(), o.prototype.extend = function (t) {
            for (var e in t = t || {}) this[e] || this.modules[e] ? g(e + " Module already exists", "error") : this.modules[e] = t[e];
            return this
        }, o.prototype.router = o.prototype.hash = function (t) {
            var n = {
                path: [],
                search: {},
                hash: ((t = t || location.hash).match(/[^#](#.*$)/) || [])[1] || "",
                href: ""
            };
            return /^#/.test(t) && (t = t.replace(/^#/, ""), t = (n.href = t).replace(/([^#])(#.*$)/, "$1").split("/") || [], this.each(t, function (t, e) {
                /^\w+=/.test(e) ? (e = e.split("="), n.search[e[0]] = e[1]) : n.path.push(e)
            })), n
        }, o.prototype.url = function (t) {
            var r, e, n = this;
            return {
                pathname: (t ? ((t.match(/\.[^.]+?\/.+/) || [])[0] || "").replace(/^[^\/]+/, "").replace(/\?.+/, "") : location.pathname).replace(/^\//, "").split("/"),
                search: (r = {}, e = (t ? ((t.match(/\?.+/) || [])[0] || "").replace(/\#.+/, "") : location.search).replace(/^\?+/, "").split("&"), n.each(e, function (t, e) {
                    var n = e.indexOf("="),
                        o = n < 0 ? e.substr(0, e.length) : 0 !== n && e.substr(0, n);
                    o && (r[o] = 0 < n ? e.substr(n + 1) : null)
                }), r),
                hash: n.router(t ? (t.match(/#.+/) || [])[0] || "/" : location.hash)
            }
        }, o.prototype.data = function (t, e, n) {
            if (t = t || "layui", n = n || localStorage, d.JSON && d.JSON.parse) {
                if (null === e) return delete n[t];
                e = "object" == typeof e ? e : {
                    key: e
                };
                try {
                    var o = JSON.parse(n[t])
                } catch (r) {
                    o = {}
                }
                return "value" in e && (o[e.key] = e.value), e.remove && delete o[e.key], n[t] = JSON.stringify(o), e.key ? o[e.key] : o
            }
        }, o.prototype.sessionData = function (t, e) {
            return this.data(t, e, sessionStorage)
        }, o.prototype.device = function (t) {
            var n = navigator.userAgent.toLowerCase(),
                e = function (t) {
                    var e = new RegExp(t + "/([^\\s\\_\\-]+)");
                    return (t = (n.match(e) || [])[1]) || !1
                },
                o = {
                    os: /windows/.test(n) ? "windows" : /linux/.test(n) ? "linux" : /iphone|ipod|ipad|ios/.test(n) ? "ios" : /mac/.test(n) ? "mac" : void 0,
                    ie: !!(d.ActiveXObject || "ActiveXObject" in d) && ((n.match(/msie\s(\d+)/) || [])[1] || "11"),
                    weixin: e("micromessenger")
                };
            return t && !o[t] && (o[t] = e(t)), o.android = /android/.test(n), o.ios = "ios" === o.os, o.mobile = o.android || o.ios, o
        }, o.prototype.hint = function () {
            return {
                error: g
            }
        }, o.prototype._typeof = o.prototype.type = function (t) {
            return null === t ? String(t) : "object" == typeof t || "function" == typeof t ? (e = (e = Object.prototype.toString.call(t).match(/\s(.+)\]$/) || [])[1] || "Object", new RegExp("\\b(Function|Array|Date|RegExp|Object|Error|Symbol)\\b").test(e) ? e.toLowerCase() : "object") : typeof t;
            var e
        }, o.prototype._isArray = o.prototype.isArray = function (t) {
            var e, n = this.type(t);
            return !(!t || "object" != typeof t || t === d) && (e = "length" in t && t.length, "array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
        }, o.prototype.each = function (t, n) {
            var e, o = function (t, e) {
                return n.call(e[t], t, e[t])
            };
            if ("function" == typeof n)
                if (this.isArray(t = t || []))
                    for (e = 0; e < t.length && !o(e, t); e++);
                else
                    for (e in t)
                        if (o(e, t)) break;
            return this
        }, o.prototype.sort = function (t, r, e, n) {
            n = n ? t || [] : JSON.parse(JSON.stringify(t || []));
            if ("object" !== this.type(t) || r) {
                if ("object" != typeof t) return [n];
                n.sort(function (t, e) {
                    var n = t[r],
                        o = e[r];
                    if (!isNaN(t) && !isNaN(e)) return t - e;
                    if (!isNaN(t) && isNaN(e)) {
                        if (!r || "object" != typeof e) return -1;
                        n = t
                    } else if (isNaN(t) && !isNaN(e)) {
                        if (!r || "object" != typeof t) return 1;
                        o = e
                    }
                    t = [!isNaN(n), !isNaN(o)];
                    return t[0] && t[1] ? n && !o && 0 !== o ? 1 : !n && 0 !== n && o ? -1 : n - o : t[0] || t[1] ? t[0] || !t[1] ? -1 : !t[0] || t[1] ? 1 : void 0 : o < n ? 1 : n < o ? -1 : 0
                }), e && n.reverse()
            }
            return n
        }, o.prototype.stope = function (t) {
            t = t || d.event;
            try {
                t.stopPropagation()
            } catch (e) {
                t.cancelBubble = !0
            }
        }, "LAYUI-EVENT-REMOVE");
    o.prototype.onevent = function (t, e, n) {
        return "string" != typeof t || "function" != typeof n ? this : o.event(t, e, null, n)
    }, o.prototype.event = o.event = function (t, e, n, o) {
        var r = this,
            i = null,
            a = (e || "").match(/\((.*)\)$/) || [],
            t = (t + "." + e).replace(a[0], ""),
            u = a[1] || "",
            l = function (t, e) {
                !1 === (e && e.call(r, n)) && null === i && (i = !1)
            };
        return n === s ? (delete(r.cache.event[t] || {})[u], r) : o ? (m.event[t] = m.event[t] || {}, u ? m.event[t][u] = [o] : (m.event[t][u] = m.event[t][u] || [], m.event[t][u].push(o)), this) : (layui.each(m.event[t], function (t, e) {
            ("{*}" === u || ("" === t && layui.each(e, l), u && t === u)) && layui.each(e, l)
        }), i)
    }, o.prototype.on = function (t, e, n) {
        return this.onevent.call(this, e, t, n)
    }, o.prototype.off = function (t, e) {
        return this.event.call(this, e, t, s)
    }, o.prototype.debounce = function (n, o) {
        var r;
        return function () {
            var t = this,
                e = arguments;
            clearTimeout(r), r = setTimeout(function () {
                n.apply(t, e)
            }, o)
        }
    }, o.prototype.throttle = function (t, e) {
        var n = !1;
        return function () {
            n || (t.apply(this, arguments), n = !0, setTimeout(function () {
                n = !1
            }, e))
        }
    }, d.layui = new o
}(window);
layui.define(function (a) {
    var i = layui.cache;
    layui.config({
        dir: i.dir.replace(/lay\/dest\/$/, "")
    }), a("layui.all", layui.v)
});
! function (d) {
    "use strict";
    var t, h = d.document,
        p = function (t) {
            return new r(t)
        },
        r = function (t) {
            var n = this,
                i = "object" == typeof t ? layui.isArray(t) ? t : [t] : (this.selector = t, h.querySelectorAll(t || null));
            p.each(i, function (t, e) {
                n.push(i[t])
            })
        },
        n = (Array.prototype.indexOf = Array.prototype.indexOf || function (n, i) {
            var r = -1;
            return i = i || 0, layui.each(this, function (t, e) {
                if (n === e && i <= t) return r = t, !0
            }), r
        }, r.fn = r.prototype = [], r.fn.constructor = r, p.extend = function () {
            var t, e = 1,
                n = arguments,
                i = function (t, e) {
                    for (var n in t = t || ("array" === layui.type(e) ? [] : {}), e) t[n] = e[n] && e[n].constructor === Object ? i(t[n], e[n]) : e[n];
                    return t
                };
            for (n[0] = "object" == typeof n[0] ? n[0] : {}, t = n.length; e < t; e++) "object" == typeof n[e] && i(n[0], n[e]);
            return n[0]
        }, p.ie = (t = navigator.userAgent.toLowerCase(), !!(d.ActiveXObject || "ActiveXObject" in d) && ((t.match(/msie\s(\d+)/) || [])[1] || "11")), p.layui = layui || {}, p.getPath = layui.cache.dir, p.stope = layui.stope, p.each = function () {
            return layui.each.apply(layui, arguments), this
        }, p.digit = function (t, e) {
            if ("string" != typeof t && "number" != typeof t) return "";
            var n = "";
            e = e || 2;
            for (var i = (t = String(t)).length; i < e; i++) n += "0";
            return t < Math.pow(10, e) ? n + t : t
        }, p.elem = function (t, e) {
            var n = h.createElement(t);
            return p.each(e || {}, function (t, e) {
                n.setAttribute(t, e)
            }), n
        }, p.hasScrollbar = function () {
            return h.body.scrollHeight > (d.innerHeight || h.documentElement.clientHeight)
        }, p.getStyleRules = function (t, n) {
            if (t) return t = (t = t.sheet || t.styleSheet || {}).cssRules || t.rules, "function" == typeof n && layui.each(t, function (t, e) {
                if (n(e, t)) return !0
            }), t
        }, p.style = function (t) {
            t = t || {};
            var e = p.elem("style"),
                n = t.text || "",
                i = t.target;
            if (n) return "styleSheet" in e ? (e.setAttribute("type", "text/css"), e.styleSheet.cssText = n) : e.innerHTML = n, e.id = "LAY-STYLE-" + (t.id || (n = p.style.index || 0, p.style.index++, "DF-" + n)), i && ((t = p(i).find("#" + e.id))[0] && t.remove(), p(i).append(e)), e
        }, p.position = function (t, e, n) {
            var i, r, o, c, a, u, s, f, l;
            e && (n = n || {}, t !== h && t !== p("body")[0] || (n.clickType = "right"), i = "right" === n.clickType ? {
                left: (i = n.e || d.event || {}).clientX,
                top: i.clientY,
                right: i.clientX,
                bottom: i.clientY
            } : t.getBoundingClientRect(), u = e.offsetWidth, s = e.offsetHeight, r = function (t) {
                return h.body[t = t ? "scrollLeft" : "scrollTop"] | h.documentElement[t]
            }, o = function (t) {
                return h.documentElement[t ? "clientWidth" : "clientHeight"]
            }, c = "margin" in n ? n.margin : 5, l = i.left, a = i.bottom, "center" === n.align ? l -= (u - t.offsetWidth) / 2 : "right" === n.align && (l = l - u + t.offsetWidth), (l = l + u + c > o("width") ? o("width") - u - c : l) < c && (l = c), i.bottom + s + c > o() && (i.top > s + c && i.top <= o() ? a = i.top - s - 2 * c : n.allowBottomOut || (a = o() - s - 2 * c) < 0 && (a = 0)), (u = n.position) && (e.style.position = u), s = n.offset ? n.offset[0] : 0, f = n.offset ? n.offset[1] : 0, e.style.left = l + ("fixed" === u ? 0 : r(1)) + s + "px", e.style.top = a + ("fixed" === u ? 0 : r()) + f + "px", p.hasScrollbar() || (l = e.getBoundingClientRect(), !n.SYSTEM_RELOAD && l.bottom + c > o() && (n.SYSTEM_RELOAD = !0, setTimeout(function () {
                p.position(t, e, n)
            }, 50))))
        }, p.options = function (t, e) {
            if (e = "object" == typeof e ? e : {
                attr: e
            }, t === h) return {};
            var t = p(t),
                n = e.attr || "lay-options",
                t = t.attr(n);
            try {
                return new Function("return " + (t || "{}"))()
            } catch (i) {
                return layui.hint().error(e.errorText || [n + '="' + t + '"', "\n parseerror: " + i].join("\n"), "error"), {}
            }
        }, p.isTopElem = function (n) {
            var t = [h, p("body")[0]],
                i = !1;
            return p.each(t, function (t, e) {
                if (e === n) return i = !0
            }), i
        }, p.clipboard = {
            writeText: function (n) {
                var i = String(n.text);

                function t() {
                    var t = h.createElement("textarea");
                    t.value = i, t.style.position = "fixed", t.style.opacity = "0", t.style.top = "0px", t.style.left = "0px", h.body.appendChild(t), t.select();
                    try {
                        h.execCommand("copy"), "function" == typeof n.done && n.done()
                    } catch (e) {
                        "function" == typeof n.error && n.error(e)
                    } finally {
                        t.remove ? t.remove() : h.body.removeChild(t)
                    }
                }
                navigator && "clipboard" in navigator ? navigator.clipboard.writeText(i).then(n.done, function () {
                    t()
                }) : t()
            }
        }, p.passiveSupported = function () {
            var t = !1;
            try {
                var e = Object.defineProperty({}, "passive", {
                    get: function () {
                        t = !0
                    }
                });
                d.addEventListener("test", null, e), d.removeEventListener("test", null, e)
            } catch (n) {}
            return t
        }(), p.touchEventsSupported = function () {
            return "ontouchstart" in d
        }, p.touchSwipe = function (t, e) {
            var n, i, r, o = e,
                c = p(t)[0];
            c && p.touchEventsSupported() && (n = {
                pointerStart: {
                    x: 0,
                    y: 0
                },
                pointerEnd: {
                    x: 0,
                    y: 0
                },
                distanceX: 0,
                distanceY: 0,
                direction: "none",
                timeStart: null
            }, e = function (t) {
                1 === t.touches.length && (c.addEventListener("touchmove", i, !!p.passiveSupported && {
                    passive: !1
                }), c.addEventListener("touchend", r), c.addEventListener("touchcancel", r), n.timeStart = Date.now(), n.pointerStart.x = n.pointerEnd.x = t.touches[0].clientX, n.pointerStart.y = n.pointerEnd.y = t.touches[0].clientY, n.distanceX = n.distanceY = 0, n.direction = "none", o.onTouchStart) && o.onTouchStart(t, n)
            }, i = function (t) {
                t.preventDefault(), n.pointerEnd.x = t.touches[0].clientX, n.pointerEnd.y = t.touches[0].clientY, n.distanceX = n.pointerStart.x - n.pointerEnd.x, n.distanceY = n.pointerStart.y - n.pointerEnd.y, Math.abs(n.distanceX) > Math.abs(n.distanceY) ? n.direction = 0 < n.distanceX ? "left" : "right" : n.direction = 0 < n.distanceY ? "up" : "down", o.onTouchMove && o.onTouchMove(t, n)
            }, r = function (t) {
                o.onTouchEnd && o.onTouchEnd(t, n), c.removeEventListener("touchmove", i), c.removeEventListener("touchend", r, !!p.passiveSupported && {
                    passive: !1
                }), c.removeEventListener("touchcancel", r)
            }, c.__lay_touchswipe_cb_ && c.removeEventListener("touchstart", c.__lay_touchswipe_cb_), c.__lay_touchswipe_cb_ = e, c.addEventListener("touchstart", e))
        }, p.addEvent = h.addEventListener ? function (t, e, n, i) {
            t.addEventListener(e, n, i)
        } : function (e, t, n) {
            var i = "_lay_on_" + t,
                r = function (t) {
                    t.target = t.srcElement, n.call(e, t)
                },
                o = (r._rawFn = n, e[i] || (e[i] = []), !1);
            p.each(e[i], function (t, e) {
                if (e._rawFn === n) return o = !0
            }), o || (e[i].push(r), e.attachEvent("on" + t, r))
        }, p.removeEvent = h.removeEventListener ? function (t, e, n, i) {
            t.removeEventListener(e, n, i)
        } : function (n, i, r) {
            var o, t = "_lay_on_" + i,
                e = n[t];
            layui.isArray(e) && (o = [], p.each(e, function (t, e) {
                e._rawFn === r ? n.detachEvent("on" + i, e) : o.push(e)
            }), n[t] = o)
        }, p.onClickOutside = function (r, o, t) {
            var e, n, i, c, a = (t = t || {}).event || ("onpointerdown" in d ? "pointerdown" : "mousedown"),
                u = t.scope || h,
                s = t.ignore || [],
                t = !("capture" in t) || t.capture;
            return e = u, n = a, i = function (t) {
                var e = r,
                    n = t.target || t.srcElement,
                    i = function (t) {
                        var e = t.composedPath && t.composedPath() || t.path,
                            t = t.target || t.srcElement;
                        if (null !== e && e !== undefined) return e;
                        return [t].concat(function n(t, e) {
                            e = e || [];
                            t = t.parentNode;
                            return t ? n(t, e.concat([t])) : e
                        }(t))
                    }(t);
                e && e !== n && -1 === i.indexOf(e) && ! function (t, e) {
                    for (var n = t.target || t.srcElement, i = 0; i < s.length; i++) {
                        var r = s[i];
                        if ("string" == typeof r)
                            for (var o = h.querySelectorAll(r), c = 0; c < o.length; c++) {
                                var a = o[i];
                                if (a === n || -1 !== e.indexOf(a)) return 1
                            } else if (r && (r === n || -1 !== e.indexOf(r))) return 1
                    }
                }(t, i) && o(t)
            }, c = p.passiveSupported ? {
                passive: !0,
                capture: t
            } : t, e.addEventListener ? e.addEventListener(n, i, c) : e.attachEvent("on" + n, i),
                function () {
                    e.removeEventListener ? e.removeEventListener(n, i, c) : e.detachEvent("on" + n, i)
                }
        }, Object.prototype.hasOwnProperty);
    p.hasOwn = function (t, e) {
        return n.call(t, e)
    }, r.addStr = function (n, t) {
        return n = n.replace(/\s+/, " "), t = t.replace(/\s+/, " ").split(" "), p.each(t, function (t, e) {
            new RegExp("\\b" + e + "\\b").test(n) || (n = n + " " + e)
        }), n.replace(/^\s|\s$/, "")
    }, r.removeStr = function (n, t) {
        return n = n.replace(/\s+/, " "), t = t.replace(/\s+/, " ").split(" "), p.each(t, function (t, e) {
            e = new RegExp("\\b" + e + "\\b");
            e.test(n) && (n = n.replace(e, ""))
        }), n.replace(/\s+/, " ").replace(/^\s|\s$/, "")
    }, r.fn.find = function (n) {
        var i = [],
            r = "object" == typeof n;
        return this.each(function (t, e) {
            e = r && e.contains(n) ? n : e.querySelectorAll(n || null);
            p.each(e, function (t, e) {
                i.push(e)
            })
        }), p(i)
    }, r.fn.each = function (t) {
        return p.each.call(this, this, t)
    }, r.fn.addClass = function (n, i) {
        return this.each(function (t, e) {
            e.className = r[i ? "removeStr" : "addStr"](e.className, n)
        })
    }, r.fn.removeClass = function (t) {
        return this.addClass(t, !0)
    }, r.fn.hasClass = function (n) {
        var i = !1;
        return this.each(function (t, e) {
            new RegExp("\\b" + n + "\\b").test(e.className) && (i = !0)
        }), i
    }, r.fn.css = function (e, i) {
        var t = this,
            r = function (t) {
                return isNaN(t) ? t : t + "px"
            };
        return "string" != typeof e || i !== undefined ? t.each(function (t, n) {
            "object" == typeof e ? p.each(e, function (t, e) {
                n.style[t] = r(e)
            }) : n.style[e] = r(i)
        }) : 0 < t.length ? t[0].style[e] : void 0
    }, r.fn.width = function (n) {
        var i = this;
        return n !== undefined ? i.each(function (t, e) {
            i.css("width", n)
        }) : 0 < i.length ? i[0].offsetWidth : void 0
    }, r.fn.height = function (n) {
        var i = this;
        return n !== undefined ? i.each(function (t, e) {
            i.css("height", n)
        }) : 0 < i.length ? i[0].offsetHeight : void 0
    }, r.fn.attr = function (n, i) {
        var t = this;
        return i !== undefined ? t.each(function (t, e) {
            e.setAttribute(n, i)
        }) : 0 < t.length ? t[0].getAttribute(n) : void 0
    }, r.fn.removeAttr = function (n) {
        return this.each(function (t, e) {
            e.removeAttribute(n)
        })
    }, r.fn.html = function (n) {
        var t = this;
        return n !== undefined ? this.each(function (t, e) {
            e.innerHTML = n
        }) : 0 < t.length ? t[0].innerHTML : void 0
    }, r.fn.val = function (n) {
        var t = this;
        return n !== undefined ? this.each(function (t, e) {
            e.value = n
        }) : 0 < t.length ? t[0].value : void 0
    }, r.fn.append = function (n) {
        return this.each(function (t, e) {
            "object" == typeof n ? e.appendChild(n) : e.innerHTML = e.innerHTML + n
        })
    }, r.fn.remove = function (n) {
        return this.each(function (t, e) {
            n ? e.removeChild(n) : e.parentNode.removeChild(e)
        })
    }, r.fn.on = function (n, i, r) {
        return this.each(function (t, e) {
            p.addEvent(e, n, i, r)
        })
    }, r.fn.off = function (n, i, r) {
        return this.each(function (t, e) {
            p.removeEvent(e, n, i, r)
        })
    }, d.lay = p, d.layui && layui.define && layui.define(function (t) {
        t("lay", p)
    })
}(window, window.document);
layui.define(function (e) {
    "use strict";
    var c = {
            open: "{{",
            close: "}}"
        },
        l = {
            escape: function (e) {
                return e === undefined || null === e ? "" : /[<"'>]|&(?=#[a-zA-Z0-9]+)/g.test(e += "") ? e.replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;") : e
            }
        },
        i = function (e) {
            return new RegExp(e, "g")
        },
        u = function (e, r) {
            var n = "Laytpl Error: ";
            return "object" == typeof console && console.error(n + e + "\n" + (r || "")), n + e
        },
        n = function (e, r) {
            var n = this,
                e = (n.config = n.config || {}, n.template = e, function (e) {
                    for (var r in e) n.config[r] = e[r]
                });
            e(c), e(r)
        },
        r = (n.prototype.tagExp = function (e, r, n) {
            var c = this.config;
            return i((r || "") + c.open + ["#([\\s\\S])+?", "([^{#}])*?"][e || 0] + c.close + (n || ""))
        }, n.prototype.parse = function (e, r) {
            var n = this,
                c = n.config,
                t = e,
                o = i("^" + c.open + "#", ""),
                p = i(c.close + "$", "");
            if ("string" != typeof e) return e;
            e = '"use strict";var view = "' + (e = e.replace(/\s+|\r|\t|\n/g, " ").replace(i(c.open + "#"), c.open + "# ").replace(i(c.close + "}"), "} " + c.close).replace(/\\/g, "\\\\").replace(i(c.open + "!(.+?)!" + c.close), function (e) {
                return e = e.replace(i("^" + c.open + "!"), "").replace(i("!" + c.close), "").replace(i(c.open + "|" + c.close), function (e) {
                    return e.replace(/(.)/g, "\\$1")
                })
            }).replace(/(?="|')/g, "\\").replace(n.tagExp(), function (e) {
                return '";' + (e = e.replace(o, "").replace(p, "")).replace(/\\(.)/g, "$1") + ';view+="'
            }).replace(n.tagExp(1), function (e) {
                var r = '"+laytpl.escape(';
                return e.replace(/\s/g, "") === c.open + c.close ? "" : (e = e.replace(i(c.open + "|" + c.close), ""), /^=/.test(e) ? e = e.replace(/^=/, "") : /^-/.test(e) && (e = e.replace(/^-/, ""), r = '"+('), r + e.replace(/\\(.)/g, "$1") + ')+"')
            })) + '";return view;';
            try {
                return n.cache = e = new Function("d, laytpl", e), e(r, l)
            } catch (a) {
                return delete n.cache, u(a, t)
            }
        }, n.prototype.render = function (e, r) {
            e = e || {};
            var n = this,
                e = n.cache ? n.cache(e, l) : n.parse(n.template, e);
            return "function" == typeof r && r(e), e
        }, function (e, r) {
            return new n(e, r)
        });
    r.config = function (e) {
        for (var r in e = e || {}) c[r] = e[r]
    }, r.v = "2.0.0", e("laytpl", r)
});
layui.define(function (e) {
    "use strict";
    var r = document,
        u = "getElementById",
        c = "getElementsByTagName",
        a = "layui-disabled",
        t = function (e) {
            var a = this;
            a.config = e || {}, a.config.index = ++o.index, a.render(!0)
        },
        o = (t.prototype.type = function () {
            var e = this.config;
            if ("object" == typeof e.elem) return e.elem.length === undefined ? 2 : 3
        }, t.prototype.view = function () {
            var i, e, t, n = this.config,
                r = n.groups = "groups" in n ? Number(n.groups) || 0 : 5,
                u = (n.layout = "object" == typeof n.layout ? n.layout : ["prev", "page", "next"], n.count = Number(n.count) || 0, n.curr = Number(n.curr) || 1, n.limits = "object" == typeof n.limits ? n.limits : [10, 20, 30, 40, 50], n.limit = Number(n.limit) || 10, n.pages = Math.ceil(n.count / n.limit) || 1, n.curr > n.pages ? n.curr = n.pages : n.curr < 1 && (n.curr = 1), r < 0 ? r = 1 : r > n.pages && (r = n.pages), n.prev = "prev" in n ? n.prev : "\u4e0a\u4e00\u9875", n.next = "next" in n ? n.next : "\u4e0b\u4e00\u9875", n.pages > r ? Math.ceil((n.curr + (1 < r ? 1 : 0)) / (0 < r ? r : 1)) : 1),
                l = {
                    prev: n.prev ? '<a class="layui-laypage-prev' + (1 == n.curr ? " " + a : "") + '" data-page="' + (n.curr - 1) + '">' + n.prev + "</a>" : "",
                    page: function () {
                        var e = [];
                        if (n.count < 1) return "";
                        1 < u && !1 !== n.first && 0 !== r && e.push('<a class="layui-laypage-first" data-page="1"  title="\u9996\u9875">' + (n.first || 1) + "</a>");
                        var a = Math.floor((r - 1) / 2),
                            t = 1 < u ? n.curr - a : 1,
                            i = 1 < u ? (a = n.curr + (r - a - 1)) > n.pages ? n.pages : a : r;
                        for (i - t < r - 1 && (t = i - r + 1), !1 !== n.first && 2 < t && e.push('<span class="layui-laypage-spr">...</span>'); t <= i; t++) t === n.curr ? e.push('<span class="layui-laypage-curr"><em class="layui-laypage-em" ' + (/^#/.test(n.theme) ? 'style="background-color:' + n.theme + ';"' : "") + "></em><em>" + t + "</em></span>") : e.push('<a data-page="' + t + '">' + t + "</a>");
                        return n.pages > r && n.pages > i && !1 !== n.last && (i + 1 < n.pages && e.push('<span class="layui-laypage-spr">...</span>'), 0 !== r) && e.push('<a class="layui-laypage-last" title="\u5c3e\u9875"  data-page="' + n.pages + '">' + (n.last || n.pages) + "</a>"), e.join("")
                    }(),
                    next: n.next ? '<a class="layui-laypage-next' + (n.curr == n.pages ? " " + a : "") + '" data-page="' + (n.curr + 1) + '">' + n.next + "</a>" : "",
                    count: '<span class="layui-laypage-count">' + (e = "object" == typeof n.countText ? n.countText : ["\u5171 ", " \u6761"])[0] + n.count + e[1] + "</span>",
                    limit: (i = ['<span class="layui-laypage-limits"><select lay-ignore>'], layui.each(n.limits, function (e, a) {
                        var t;
                        i.push('<option value="' + a + '"' + (a === n.limit ? " selected" : "") + ">" + (t = (a = a) + " \u6761/\u9875", "function" == typeof n.limitTemplet && n.limitTemplet(a) || t) + "</option>")
                    }), i.join("") + "</select></span>"),
                    refresh: ['<a data-page="' + n.curr + '" class="layui-laypage-refresh">', '<i class="layui-icon layui-icon-refresh"></i>', "</a>"].join(""),
                    skip: ['<span class="layui-laypage-skip">' + (e = "object" == typeof n.skipText ? n.skipText : ["\u5230\u7b2c", "\u9875", "\u786e\u5b9a"])[0], '<input type="text" min="1" value="' + n.curr + '" class="layui-input">', e[1] + '<button type="button" class="layui-laypage-btn">' + e[2] + "</button>", "</span>"].join("")
                };
            return ['<div class="layui-box layui-laypage layui-laypage-' + (n.theme ? /^#/.test(n.theme) ? "molv" : n.theme : "default") + '" id="layui-laypage-' + n.index + '">', (t = [], layui.each(n.layout, function (e, a) {
                l[a] && t.push(l[a])
            }), t.join("")), "</div>"].join("")
        }, t.prototype.jump = function (e, a) {
            if (e) {
                var t = this,
                    i = t.config,
                    n = e.children,
                    r = e[c]("button")[0],
                    u = e[c]("input")[0],
                    e = e[c]("select")[0],
                    l = function () {
                        var e = Number(u.value.replace(/\s|\D/g, ""));
                        e && (i.curr = e, t.render())
                    };
                if (a) return l();
                for (var s = 0, p = n.length; s < p; s++) "a" === n[s].nodeName.toLowerCase() && o.on(n[s], "click", function () {
                    var e = Number(this.getAttribute("data-page"));
                    e < 1 || e > i.pages || (i.curr = e, t.render())
                });
                e && o.on(e, "change", function () {
                    var e = this.value;
                    i.curr * e > i.count && (i.curr = Math.ceil(i.count / e)), i.limit = e, t.render()
                }), r && o.on(r, "click", function () {
                    l()
                })
            }
        }, t.prototype.skip = function (t) {
            var i, e;
            t && (i = this, e = t[c]("input")[0]) && o.on(e, "keyup", function (e) {
                var a = this.value,
                    e = e.keyCode;
                /^(37|38|39|40)$/.test(e) || (/\D/.test(a) && (this.value = a.replace(/\D/, "")), 13 === e && i.jump(t, !0))
            })
        }, t.prototype.render = function (e) {
            var a = this,
                t = a.config,
                i = a.type(),
                n = a.view(),
                i = (2 === i ? t.elem && (t.elem.innerHTML = n) : 3 === i ? t.elem.html(n) : r[u](t.elem) && (r[u](t.elem).innerHTML = n), t.jump && t.jump(t, e), r[u]("layui-laypage-" + t.index));
            a.jump(i), t.hash && !e && (location.hash = "!" + t.hash + "=" + t.curr), a.skip(i)
        }, {
            render: function (e) {
                return new t(e).index
            },
            index: layui.laypage ? layui.laypage.index + 1e4 : 0,
            on: function (a, e, t) {
                return a.attachEvent ? a.attachEvent("on" + e, function (e) {
                    e.target = e.srcElement, t.call(a, e)
                }) : a.addEventListener(e, t, !1), this
            }
        });
    e("laypage", o)
});
! function (i, D) {
    "use strict";
    var n = i.layui && layui.define,
        l = {
            getPath: i.lay && lay.getPath ? lay.getPath : "",
            link: function (e, t, a) {
                T.path && i.lay && lay.layui && lay.layui.link(T.path + e, t, a)
            }
        },
        e = i.LAYUI_GLOBAL || {},
        a = "laydate",
        d = "lay-" + a + "-id",
        T = {
            v: "5.6.0",
            config: {
                weekStart: 0
            },
            index: i.laydate && i.laydate.v ? 1e5 : 0,
            path: e.laydate_dir || l.getPath,
            set: function (e) {
                var t = this;
                return t.config = lay.extend({}, t.config, e), t
            },
            ready: function (e) {
                var t = "laydate",
                    a = (n ? "modules/" : "") + "laydate.css?v=" + T.v;
                return n ? layui["layui.all"] ? "function" == typeof e && e() : layui.addcss(a, e, t) : l.link(a, e, t), this
            }
        },
        s = function () {
            var t = this,
                e = t.config.id;
            return (s.that[e] = t).inst = {
                hint: function (e) {
                    t.hint.call(t, e)
                },
                reload: function (e) {
                    t.reload.call(t, e)
                },
                config: t.config
            }
        },
        M = "layui-this",
        C = "laydate-disabled",
        h = [100, 2e5],
        v = "layui-laydate-static",
        b = "layui-laydate-list",
        o = "laydate-selected",
        r = "layui-laydate-hint",
        y = "laydate-day-prev",
        m = "laydate-day-next",
        E = ".laydate-btns-confirm",
        L = "laydate-time-text",
        I = "laydate-btns-time",
        x = "layui-laydate-preview",
        w = "layui-laydate-shade",
        k = function (e) {
            var t, a = this,
                n = (a.index = ++T.index, a.config = lay.extend({}, a.config, T.config, e), lay(e.elem || a.config.elem));
            return 1 < n.length ? (lay.each(n, function () {
                T.render(lay.extend({}, a.config, {
                    elem: this
                }))
            }), a) : (e = lay.extend(a.config, lay.options(n[0])), n[0] && n.attr(d) ? (t = s.getThis(n.attr(d))) ? t.reload(e) : void 0 : (e.id = "id" in e ? e.id : n.attr("id") || a.index, e.index = a.index, void T.ready(function () {
                a.init()
            })))
        },
        u = "yyyy|y|MM|M|dd|d|HH|H|mm|m|ss|s";
    s.formatArr = function (e) {
        return (e || "").match(new RegExp(u + "|.", "g")) || []
    }, k.isLeapYear = function (e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }, k.prototype.config = {
        type: "date",
        range: !1,
        format: "yyyy-MM-dd",
        value: null,
        isInitValue: !0,
        min: "1900-1-1",
        max: "2099-12-31",
        trigger: "click",
        show: !1,
        showBottom: !0,
        isPreview: !0,
        btns: ["clear", "now", "confirm"],
        lang: "cn",
        theme: "default",
        position: null,
        calendar: !1,
        mark: {},
        holidays: null,
        zIndex: null,
        done: null,
        change: null,
        autoConfirm: !0,
        shade: 0
    }, k.prototype.lang = function () {
        var e = {
            cn: {
                weeks: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
                time: ["\u65f6", "\u5206", "\u79d2"],
                timeTips: "\u9009\u62e9\u65f6\u95f4",
                startTime: "\u5f00\u59cb\u65f6\u95f4",
                endTime: "\u7ed3\u675f\u65f6\u95f4",
                dateTips: "\u8fd4\u56de\u65e5\u671f",
                month: ["\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "\u5341", "\u5341\u4e00", "\u5341\u4e8c"],
                tools: {
                    confirm: "\u786e\u5b9a",
                    clear: "\u6e05\u7a7a",
                    now: "\u73b0\u5728"
                },
                timeout: "\u7ed3\u675f\u65f6\u95f4\u4e0d\u80fd\u65e9\u4e8e\u5f00\u59cb\u65f6\u95f4<br>\u8bf7\u91cd\u65b0\u9009\u62e9",
                invalidDate: "\u4e0d\u5728\u6709\u6548\u65e5\u671f\u6216\u65f6\u95f4\u8303\u56f4\u5185",
                formatError: ["\u65e5\u671f\u683c\u5f0f\u4e0d\u5408\u6cd5<br>\u5fc5\u987b\u9075\u5faa\u4e0b\u8ff0\u683c\u5f0f\uff1a<br>", "<br>\u5df2\u4e3a\u4f60\u91cd\u7f6e"],
                preview: "\u5f53\u524d\u9009\u4e2d\u7684\u7ed3\u679c"
            },
            en: {
                weeks: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                time: ["Hours", "Minutes", "Seconds"],
                timeTips: "Select Time",
                startTime: "Start Time",
                endTime: "End Time",
                dateTips: "Select Date",
                month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                tools: {
                    confirm: "Confirm",
                    clear: "Clear",
                    now: "Now"
                },
                timeout: "End time cannot be less than start Time<br>Please re-select",
                invalidDate: "Invalid date",
                formatError: ["The date format error<br>Must be followed\uff1a<br>", "<br>It has been reset"],
                preview: "The selected result"
            }
        };
        return e[this.config.lang] || e.cn
    }, k.prototype.markerOfChineseFestivals = {
        "0-1-1": "\u5143\u65e6",
        "0-2-14": "\u60c5\u4eba",
        "0-3-8": "\u5987\u5973",
        "0-3-12": "\u690d\u6811",
        "0-4-1": "\u611a\u4eba",
        "0-5-1": "\u52b3\u52a8",
        "0-5-4": "\u9752\u5e74",
        "0-6-1": "\u513f\u7ae5",
        "0-9-10": "\u6559\u5e08",
        "0-10-1": "\u56fd\u5e86",
        "0-12-25": "\u5723\u8bde"
    }, k.prototype.reload = function (e) {
        this.config = lay.extend({}, this.config, e), this.init()
    }, k.prototype.init = function () {
        var r = this,
            o = r.config,
            e = "static" === o.position,
            t = {
                year: "yyyy",
                month: "yyyy-MM",
                date: "yyyy-MM-dd",
                time: "HH:mm:ss",
                datetime: "yyyy-MM-dd HH:mm:ss"
            };
        o.elem = lay(o.elem), o.eventElem = lay(o.eventElem), o.elem[0] && ("array" !== layui.type(o.theme) && (o.theme = [o.theme]), o.fullPanel && ("datetime" !== o.type || o.range) && delete o.fullPanel, r.rangeStr = o.range ? "string" == typeof o.range ? o.range : "-" : "", r.rangeLinked = !(!o.range || !o.rangeLinked || "date" !== o.type && "datetime" !== o.type), r.autoCalendarModel = function () {
            var e = r.rangeLinked;
            return r.rangeLinked = o.range && ("date" === o.type || "datetime" === o.type) && (!r.startDate || !r.endDate || r.startDate && r.endDate && r.startDate.year === r.endDate.year && r.startDate.month === r.endDate.month), lay(r.elem)[r.rangeLinked ? "addClass" : "removeClass"]("layui-laydate-linkage"), r.rangeLinked != e
        }, r.autoCalendarModel.auto = r.rangeLinked && "auto" === o.rangeLinked, "array" === layui.type(o.range) && (r.rangeElem = [lay(o.range[0]), lay(o.range[1])]), t[o.type] || (i.console && console.error && console.error("laydate type error:'" + o.type + "' is not supported"), o.type = "date"), o.format === t.date && (o.format = t[o.type] || t.date), r.format = s.formatArr(o.format), o.weekStart && !/^[0-6]$/.test(o.weekStart) && (t = r.lang(), o.weekStart = t.weeks.indexOf(o.weekStart), -1 === o.weekStart) && (o.weekStart = 0), r.EXP_IF = "", r.EXP_SPLIT = "", lay.each(r.format, function (e, t) {
            e = new RegExp(u).test(t) ? "\\d{" + (new RegExp(u).test(r.format[0 === e ? e + 1 : e - 1] || "") ? /^yyyy|y$/.test(t) ? 4 : t.length : /^yyyy$/.test(t) ? "1,4" : /^y$/.test(t) ? "1,308" : "1,2") + "}" : "\\" + t;
            r.EXP_IF = r.EXP_IF + e, r.EXP_SPLIT = r.EXP_SPLIT + "(" + e + ")"
        }), r.EXP_IF_ONE = new RegExp("^" + r.EXP_IF + "$"), r.EXP_IF = new RegExp("^" + (o.range ? r.EXP_IF + "\\s\\" + r.rangeStr + "\\s" + r.EXP_IF : r.EXP_IF) + "$"), r.EXP_SPLIT = new RegExp("^" + r.EXP_SPLIT + "$", ""), r.isInput(o.elem[0]) || "focus" === o.trigger && (o.trigger = "click"), o.elem.attr("lay-key", r.index), o.eventElem.attr("lay-key", r.index), o.elem.attr(d, o.id), lay.each(["min", "max"], function (e, t) {
            var a = [],
                n = [];
            if ("number" == typeof o[t]) var i = o[t],
                l = new Date,
                l = r.newDate({
                    year: l.getFullYear(),
                    month: l.getMonth(),
                    date: l.getDate(),
                    hours: e ? 23 : 0,
                    minutes: e ? 59 : 0,
                    seconds: e ? 59 : 0
                }).getTime(),
                e = new Date(i ? i < 864e5 ? l + 864e5 * i : i : l),
                a = [e.getFullYear(), e.getMonth() + 1, e.getDate()],
                n = [e.getHours(), e.getMinutes(), e.getSeconds()];
            else if ("string" == typeof o[t]) a = (o[t].match(/\d+-\d+-\d+/) || [""])[0].split("-"), n = (o[t].match(/\d+:\d+:\d+/) || [""])[0].split(":");
            else if ("object" == typeof o[t]) return o[t];
            o[t] = {
                year: 0 | a[0] || (new Date).getFullYear(),
                month: a[1] ? (0 | a[1]) - 1 : (new Date).getMonth(),
                date: 0 | a[2] || (new Date).getDate(),
                hours: 0 | n[0],
                minutes: 0 | n[1],
                seconds: 0 | n[2]
            }
        }), r.elemID = "layui-laydate" + o.elem.attr("lay-key"), (o.show || e) && r.render(), e || r.events(), "function" == typeof o.formatToDisplay && (r.isInput(o.elem[0]) ? r.formatToDisplay(o.elem[0], o.formatToDisplay) : (t = r.rangeElem) && (r.formatToDisplay(t[0][0], o.formatToDisplay), r.formatToDisplay(t[1][0], o.formatToDisplay))), o.value) && o.isInitValue && ("date" === layui.type(o.value) ? r.setValue(r.parse(0, r.systemDate(o.value))) : r.setValue(o.value))
    }, k.prototype.render = function () {
        var a, n, i, l, r = this,
            o = r.config,
            d = r.lang(),
            s = "static" === o.position,
            y = r.elem = lay.elem("div", {
                id: r.elemID,
                "class": ["layui-laydate", o.range ? " layui-laydate-range" : "", r.rangeLinked ? " layui-laydate-linkage" : "", s ? " " + v : "", o.fullPanel ? " laydate-theme-fullpanel" : "", (a = "", lay.each(o.theme, function (e, t) {
                    "default" === t || /^#/.test(t) || (a += " laydate-theme-" + t)
                }), a)].join("")
            }),
            m = r.elemMain = [],
            u = r.elemHeader = [],
            c = r.elemCont = [],
            h = r.table = [],
            e = r.footer = lay.elem("div", {
                "class": "layui-laydate-footer"
            }),
            t = r.shortcut = lay.elem("ul", {
                "class": "layui-laydate-shortcut"
            }),
            p = (o.zIndex && (y.style.zIndex = o.zIndex), lay.each(new Array(2), function (e) {
                if (!o.range && 0 < e) return !0;
                var a = lay.elem("div", {
                        "class": "layui-laydate-header"
                    }),
                    t = [((t = lay.elem("i", {
                        "class": "layui-icon laydate-icon laydate-prev-y"
                    })).innerHTML = "&#xe65a;", t), ((t = lay.elem("i", {
                        "class": "layui-icon laydate-icon laydate-prev-m"
                    })).innerHTML = "&#xe603;", t), ((t = lay.elem("div", {
                        "class": "laydate-set-ym"
                    })).appendChild(lay.elem("span")), t.appendChild(lay.elem("span")), t), ((t = lay.elem("i", {
                        "class": "layui-icon laydate-icon laydate-next-m"
                    })).innerHTML = "&#xe602;", t), ((t = lay.elem("i", {
                        "class": "layui-icon laydate-icon laydate-next-y"
                    })).innerHTML = "&#xe65b;", t)],
                    n = lay.elem("div", {
                        "class": "layui-laydate-content"
                    }),
                    i = lay.elem("table"),
                    l = lay.elem("thead"),
                    r = lay.elem("tr");
                lay.each(t, function (e, t) {
                    a.appendChild(t)
                }), l.appendChild(r), lay.each(new Array(6), function (a) {
                    var n = i.insertRow(0);
                    lay.each(new Array(7), function (e) {
                        var t;
                        0 === a && ((t = lay.elem("th")).innerHTML = d.weeks[(e + o.weekStart) % 7], r.appendChild(t)), n.insertCell(e)
                    })
                }), i.insertBefore(l, i.children[0]), n.appendChild(i), m[e] = lay.elem("div", {
                    "class": "layui-laydate-main laydate-main-list-" + e
                }), m[e].appendChild(a), m[e].appendChild(n), u.push(t), c.push(n), h.push(i)
            }), lay(e).html((p = [], n = [], "datetime" === o.type && p.push('<span lay-type="datetime" class="' + I + '">' + d.timeTips + "</span>"), (o.range || "datetime" !== o.type || o.fullPanel) && p.push('<span class="' + x + '" title="' + d.preview + '"></span>'), lay.each(o.btns, function (e, t) {
                var a = d.tools[t] || "btn";
                o.range && "now" === t || (s && "clear" === t && (a = "cn" === o.lang ? "\u91cd\u7f6e" : "Reset"), n.push('<span lay-type="' + t + '" class="laydate-btns-' + t + '">' + a + "</span>"))
            }), p.push('<div class="laydate-footer-btns">' + n.join("") + "</div>"), p.join(""))), o.shortcuts && (y.appendChild(t), lay(t).html((i = [], lay.each(o.shortcuts, function (e, t) {
                i.push('<li data-index="' + e + '">' + t.text + "</li>")
            }), i.join(""))).find("li").on("click", function (e) {
                var t = o.shortcuts[this.dataset.index] || {},
                    t = ("function" == typeof t.value ? t.value() : t.value) || [],
                    n = (layui.isArray(t) || (t = [t]), o.type),
                    t = (lay.each(t, function (e, t) {
                        var a = [o.dateTime, r.endDate][e];
                        "time" === n && "date" !== layui.type(t) ? r.EXP_IF.test(t) && (t = (t.match(r.EXP_SPLIT) || []).slice(1), lay.extend(a, {
                            hours: 0 | t[0],
                            minutes: 0 | t[2],
                            seconds: 0 | t[4]
                        })) : lay.extend(a, r.systemDate("date" === layui.type(t) ? t : new Date(t))), "time" !== n && "datetime" !== n || (r[["startTime", "endTime"][e]] = {
                            hours: a.hours,
                            minutes: a.minutes,
                            seconds: a.seconds
                        }), 0 === e ? r.startDate = lay.extend({}, a) : r.endState = !0, "year" === n || "month" === n || "time" === n ? r.listYM[e] = [a.year, a.month + 1] : e && r.autoCalendarModel.auto && r.autoCalendarModel()
                    }), r.checkDate("limit").calendar(null, null, "init"), lay(r.footer).find("." + I).removeClass(C));
                t && "date" === t.attr("lay-type") && t[0].click(), r.done(null, "change"), lay(this).addClass(M), "static" !== o.position && r.setValue(r.parse()).done().remove()
            })), lay.each(m, function (e, t) {
                y.appendChild(t)
            }), o.showBottom && y.appendChild(e), lay.elem("style")),
            f = [],
            g = !0,
            t = (lay.each(o.theme, function (e, t) {
                g && /^#/.test(t) ? (g = !(l = !0), f.push(["#{{id}} .layui-laydate-header{background-color:{{theme}};}", "#{{id}} li.layui-this,#{{id}} td.layui-this>div{background-color:{{theme}} !important;}", -1 !== o.theme.indexOf("circle") ? "" : "#{{id}} .layui-this{background-color:{{theme}} !important;}", "#{{id}} .laydate-day-now{color:{{theme}} !important;}", "#{{id}} .laydate-day-now:after{border-color:{{theme}} !important;}"].join("").replace(/{{id}}/g, r.elemID).replace(/{{theme}}/g, t))) : !g && /^#/.test(t) && f.push(["#{{id}} .laydate-selected>div{background-color:{{theme}} !important;}", "#{{id}} .laydate-selected:hover>div{background-color:{{theme}} !important;}"].join("").replace(/{{id}}/g, r.elemID).replace(/{{theme}}/g, t))
            }), o.shortcuts && o.range && f.push("#{{id}}.layui-laydate-range{width: 628px;}".replace(/{{id}}/g, r.elemID)), f.length && (f = f.join(""), "styleSheet" in p ? (p.setAttribute("type", "text/css"), p.styleSheet.cssText = f) : p.innerHTML = f, l && lay(y).addClass("laydate-theme-molv"), y.appendChild(p)), r.remove(k.thisElemDate), T.thisId = o.id, s ? o.elem.append(y) : (D.body.appendChild(y), r.position()), o.shade ? '<div class="' + w + '" style="z-index:' + (parseInt(layui.getStyle(y, "z-index")) - 1) + "; background-color: " + (o.shade[1] || "#000") + "; opacity: " + (o.shade[0] || o.shade) + '"></div>' : "");
        y.insertAdjacentHTML("beforebegin", t), r.checkDate().calendar(null, 0, "init"), r.changeEvent(), k.thisElemDate = r.elemID, r.renderAdditional(), "function" == typeof o.ready && o.ready(lay.extend({}, o.dateTime, {
            month: o.dateTime.month + 1
        })), r.preview()
    }, k.prototype.remove = function (e) {
        var t = this,
            a = t.config,
            n = lay("#" + (e || t.elemID));
        return n[0] && (n.hasClass(v) || t.checkDate(function () {
            n.remove(), delete t.startDate, delete t.endDate, delete t.endState, delete t.startTime, delete t.endTime, delete T.thisId, "function" == typeof a.close && a.close(t)
        }), lay("." + w).remove()), t
    }, k.prototype.position = function () {
        var e = this.config;
        return lay.position(e.elem[0], this.elem, {
            position: e.position
        }), this
    }, k.prototype.hint = function (e) {
        var t = this,
            a = (t.config, lay.elem("div", {
                "class": r
            }));
        t.elem && (a.innerHTML = (e = "object" == typeof e ? e || {} : {
            content: e
        }).content || "", lay(t.elem).find("." + r).remove(), t.elem.appendChild(a), clearTimeout(t.hinTimer), t.hinTimer = setTimeout(function () {
            lay(t.elem).find("." + r).remove()
        }, "ms" in e ? e.ms : 3e3))
    }, k.prototype.getAsYM = function (e, t, a) {
        return a ? t-- : t++, t < 0 && (t = 11, e--), 11 < t && (t = 0, e++), [e, t]
    }, k.prototype.systemDate = function (e) {
        var t = e || new Date;
        return {
            year: t.getFullYear(),
            month: t.getMonth(),
            date: t.getDate(),
            hours: e ? e.getHours() : 0,
            minutes: e ? e.getMinutes() : 0,
            seconds: e ? e.getSeconds() : 0
        }
    }, k.prototype.checkDate = function (e) {
        var t, o, a, n, i, d = this,
            s = (new Date, d.config),
            l = d.lang(),
            r = s.dateTime = s.dateTime || d.systemDate(),
            y = s.elem[0],
            m = (d.isInput(y), function () {
                if (d.rangeElem) {
                    var e = [d.rangeElem[0].val(), d.rangeElem[1].val()];
                    if (e[0] && e[1]) return e.join(" " + d.rangeStr + " ")
                }
                return d.isInput(y) ? y.value : "static" === s.position ? "" : lay(y).attr("lay-date")
            }()),
            u = function (e) {
                e && (e.year > h[1] && (e.year = h[1], o = !0), 11 < e.month && (e.month = 11, o = !0), 59 < e.seconds && (e.seconds = 0, e.minutes++, o = !0), 59 < e.minutes && (e.minutes = 0, e.hours++, o = !0), 23 < e.hours && (e.hours = 0, o = !0), t = T.getEndDate(e.month + 1, e.year), e.date > t) && (e.date = t, o = !0)
            },
            c = function (n, i, l) {
                var r = ["startTime", "endTime"];
                i = (i.match(d.EXP_SPLIT) || []).slice(1), l = l || 0, s.range && (d[r[l]] = d[r[l]] || {}), lay.each(d.format, function (e, t) {
                    var a = parseFloat(i[e]);
                    i[e].length < t.length && (o = !0), /yyyy|y/.test(t) ? (a < h[0] && (a = h[0], o = !0), n.year = a) : /MM|M/.test(t) ? (a < 1 && (a = 1, o = !0), n.month = a - 1) : /dd|d/.test(t) ? (a < 1 && (a = 1, o = !0), n.date = a) : /HH|H/.test(t) ? (a < 0 && (o = !(a = 0)), 23 < a && (a = 23, o = !0), n.hours = a, s.range && (d[r[l]].hours = a)) : /mm|m/.test(t) ? (a < 0 && (o = !(a = 0)), 59 < a && (a = 59, o = !0), n.minutes = a, s.range && (d[r[l]].minutes = a)) : /ss|s/.test(t) && (a < 0 && (o = !(a = 0)), 59 < a && (a = 59, o = !0), n.seconds = a, s.range) && (d[r[l]].seconds = a)
                }), u(n)
            };
        return "limit" === e ? s.range ? (u(d.rangeLinked ? d.startDate : r), d.endDate && u(d.endDate)) : u(r) : ("string" == typeof (m = m || s.value) && (m = m.replace(/\s+/g, " ").replace(/^\s|\s$/g, "")), (a = function () {
            var e, t, a;
            s.range && (d.endDate = d.endDate || lay.extend({}, s.dateTime, (e = {}, t = s.dateTime, a = d.getAsYM(t.year, t.month), "year" === s.type ? e.year = t.year + 1 : "time" !== s.type && (e.year = a[0], e.month = a[1]), "datetime" !== s.type && "time" !== s.type || (e.hours = 23, e.minutes = e.seconds = 59), e)))
        })(), "string" == typeof m && m ? d.EXP_IF.test(m) ? s.range ? (m = m.split(" " + d.rangeStr + " "), lay.each([s.dateTime, d.endDate], function (e, t) {
            c(t, m[e], e)
        })) : c(r, m) : (d.hint(l.formatError[0] + (s.range ? s.format + " " + d.rangeStr + " " + s.format : s.format) + l.formatError[1]), o = !0) : m && "date" === layui.type(m) ? s.dateTime = d.systemDate(m) : (s.dateTime = d.systemDate(), delete d.startTime, delete d.endDate, a(), delete d.endTime), d.rangeElem && (a = [d.rangeElem[0].val(), d.rangeElem[1].val()], n = [s.dateTime, d.endDate], lay.each(a, function (e, t) {
            d.EXP_IF_ONE.test(t) && c(n[e], t, e)
        })), u(r), s.range && u(d.endDate), o && m && d.setValue(!s.range || d.endDate ? d.parse() : ""), d.getDateTime(r) > d.getDateTime(s.max) ? (r = s.dateTime = lay.extend({}, s.max), i = !0) : d.getDateTime(r) < d.getDateTime(s.min) && (r = s.dateTime = lay.extend({}, s.min), i = !0), s.range && ((d.getDateTime(d.endDate) < d.getDateTime(s.min) || d.getDateTime(d.endDate) > d.getDateTime(s.max)) && (d.endDate = lay.extend({}, s.max), i = !0), d.startTime = {
            hours: s.dateTime.hours,
            minutes: s.dateTime.minutes,
            seconds: s.dateTime.seconds
        }, d.endTime = {
            hours: d.endDate.hours,
            minutes: d.endDate.minutes,
            seconds: d.endDate.seconds
        }, "month" === s.type) && (s.dateTime.date = 1, d.endDate.date = 1), i && m && (d.setValue(d.parse()), d.hint("value " + l.invalidDate + l.formatError[1])), d.startDate = d.startDate || m && lay.extend({}, s.dateTime), d.autoCalendarModel.auto && d.autoCalendarModel(), d.endState = !s.range || !d.rangeLinked || !(!d.startDate || !d.endDate), e && e()), d
    }, k.prototype.markRender = function (e, a, t) {
        var n;
        "object" == typeof t ? lay.each(t || {}, function (e, t) {
            e = e.split("-");
            e[0] != a[0] && 0 != e[0] || e[1] != a[1] && 0 != e[1] || e[2] != a[2] || (n = t || a[2])
        }) : "string" == typeof t && (n = t || a[2]), n && e.find("div").html('<span class="laydate-day-mark">' + n + "</span>")
    }, k.prototype.mark = function (t, a) {
        var n = this,
            e = n.config,
            i = function (e) {
                n.markRender(t, a, e)
            };
        return e.calendar && "cn" === e.lang && i(n.markerOfChineseFestivals), "function" == typeof e.mark ? e.mark({
            year: a[0],
            month: a[1],
            date: a[2]
        }, i) : "object" == typeof e.mark && i(e.mark), n
    }, k.prototype.holidaysRender = function (r, o, e) {
        var d = ["holidays", "workdays"],
            s = function (e, t, a) {
                e.find("div").html(["<span", ' class="laydate-day-holidays"', ' type="' + t + '"', ">", a, "</span>"].join(""))
            };
        "array" === layui.type(e) ? lay.each(e, function (l, e) {
            lay.each(e, function (e, t) {
                var a, n, i;
                t = t, a = r.attr("lay-ymd"), n = t.split("-"), i = a.split("-"), lay.each(n, function (e, t) {
                    n[e] = parseInt(t, 10)
                }), lay.each(i, function (e, t) {
                    i[e] = parseInt(t, 10)
                }), n.join("-") === i.join("-") && s(r, d[l], o[2])
            })
        }) : "string" == typeof e && -1 !== d.indexOf(e) && s(r, e, o[2])
    }, k.prototype.holidays = function (t, a) {
        var n = this,
            e = n.config,
            i = function (e) {
                n.holidaysRender(t, a, e)
            };
        return "function" == typeof e.holidays ? e.holidays({
            year: a[0],
            month: a[1],
            date: a[2]
        }, i) : "array" === layui.type(e.holidays) && i(e.holidays), n
    }, k.prototype.cellRender = function (t, e, a) {
        var n = this.config;
        return "function" == typeof n.cellRender && n.cellRender(e, function (e) {
            "string" == typeof e ? lay(t).html(e) : "object" == typeof e && lay(t).html("").append(lay(e)[0])
        }, {
            originElem: t,
            type: a
        }), this
    }, k.prototype.startOfYear = function (e) {
        e = new Date(e);
        return e.setFullYear(e.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e
    }, k.prototype.endOfYear = function (e) {
        var e = new Date(e),
            t = e.getFullYear();
        return e.setFullYear(t + 1, 0, 0), e.setHours(23, 59, 59, 999), e
    }, k.prototype.startOfMonth = function (e) {
        e = new Date(e);
        return e.setDate(1), e.setHours(0, 0, 0, 0), e
    }, k.prototype.endOfMonth = function (e) {
        var e = new Date(e),
            t = e.getMonth();
        return e.setFullYear(e.getFullYear(), t + 1, 0), e.setHours(23, 59, 59, 999), e
    }, k.prototype.addDays = function (e, t) {
        e = new Date(e);
        return t && e.setDate(e.getDate() + t), e
    }, k.prototype.isDisabledYearOrMonth = function (e, t, a) {
        for (var n = this, i = n.config, l = "year" === t ? n.startOfYear(e) : n.startOfMonth(e), t = "year" === t ? n.endOfYear(e) : n.endOfMonth(e), r = Math.floor((t.getTime() - l.getTime()) / 864e5) + 1, o = 0, d = 0; d < r; d++) {
            var s = n.addDays(l, d);
            i.disabledDate.call(i, s, a) && o++
        }
        return o === r
    }, k.prototype.isDisabledDate = function (e, t) {
        t = t || {};
        var a = this.config,
            n = !a.range || 0 === t.rangeType ? "start" : "end";
        return !!a.disabledDate && "time" !== a.type && ("date" === t.disabledType || "datetime" === t.disabledType) && ((e = new Date(e)).setHours(0, 0, 0, 0), "year" === t.type || "month" === t.type ? this.isDisabledYearOrMonth(e, t.type, n) : a.disabledDate.call(a, e, n))
    }, k.prototype.isDisabledTime = function (e, t) {
        t = t || {};
        var a, n = this.config,
            i = !n.range || 0 === t.rangeType ? "start" : "end";
        return !!n.disabledTime && !("time" !== n.type && "datetime" !== n.type || "time" !== t.disabledType && "datetime" !== t.disabledType) && (a = function (e, t, a) {
            return function () {
                return -1 !== ("function" == typeof t && t.apply(n, a) || []).indexOf(e)
            }
        }, e = this.systemDate(new Date(e)), i = n.disabledTime.call(n, this.newDate(e), i) || {}, "datetime" === t.disabledType ? a(e.hours, i.hours)() || a(e.minutes, i.minutes, [e.hours])() || a(e.seconds, i.seconds, [e.hours, e.minutes])() : [a(e.hours, i.hours), a(e.minutes, i.minutes, [e.hours]), a(e.seconds, i.seconds, [e.hours, e.minutes])][t.time.length - 1]())
    }, k.prototype.isDisabledDateTime = function (e, t) {
        this.config;
        return this.isDisabledDate(e, t = t || {}) || this.isDisabledTime(e, t)
    }, k.prototype.limit = function (t) {
        t = t || {};
        var i = this,
            e = i.config,
            l = {},
            a = t.index > (t.time ? 0 : 41) ? i.endDate : e.dateTime;
        return lay.each({
            now: lay.extend({}, a, t.date || {}),
            min: e.min,
            max: e.max
        }, function (e, a) {
            var n;
            l[e] = i.newDate(lay.extend({
                year: a.year,
                month: "year" === t.type ? 0 : a.month,
                date: "year" === t.type || "month" === t.type ? 1 : a.date
            }, (n = {}, lay.each(t.time, function (e, t) {
                n[t] = a[t]
            }), n))).getTime()
        }), a = l.now < l.min || l.max < l.now || i.isDisabledDateTime(l.now, t), t.elem && t.elem[a ? "addClass" : "removeClass"](C), a
    }, k.prototype.thisDateTime = function (e) {
        var t = this.config;
        return e ? this.endDate : t.dateTime
    }, k.prototype.calendar = function (e, i, t) {
        i = i ? 1 : 0;
        var l, r, o, d = this,
            a = d.config,
            s = e || d.thisDateTime(i),
            n = new Date,
            y = d.lang(),
            m = "date" !== a.type && "datetime" !== a.type,
            u = lay(d.table[i]).find("td"),
            c = lay(d.elemHeader[i][2]).find("span");
        return s.year < h[0] && (s.year = h[0], d.hint(y.invalidDate)), s.year > h[1] && (s.year = h[1], d.hint(y.invalidDate)), d.firstDate || (d.firstDate = lay.extend({}, s)), n.setFullYear(s.year, s.month, 1), l = (n.getDay() + (7 - a.weekStart)) % 7, r = T.getEndDate(s.month || 12, s.year), o = T.getEndDate(s.month + 1, s.year), lay.each(u, function (e, t) {
            var a, n = [s.year, s.month];
            (t = lay(t)).removeAttr("class"), e < l ? (a = r - l + e, t.addClass("laydate-day-prev"), n = d.getAsYM(s.year, s.month, "sub")) : l <= e && e < o + l ? (a = e - l, d.rangeLinked || a + 1 === s.date && t.addClass(M)) : (a = e - o - l, t.addClass("laydate-day-next"), n = d.getAsYM(s.year, s.month)), n[1]++, n[2] = a + 1, t.attr("lay-ymd", n.join("-")).html("<div>" + n[2] + "</div>"), d.mark(t, n).holidays(t, n).limit({
                elem: t,
                date: {
                    year: n[0],
                    month: n[1] - 1,
                    date: n[2]
                },
                index: e,
                rangeType: i,
                disabledType: "date"
            }), d.cellRender(t, {
                year: n[0],
                month: n[1],
                date: n[2]
            }, "date")
        }), lay(c[0]).attr("lay-ym", s.year + "-" + (s.month + 1)), lay(c[1]).attr("lay-ym", s.year + "-" + (s.month + 1)), d.panelYM || (d.panelYM = {}), d.panelYM[i] = {
            year: s.year,
            month: s.month
        }, "cn" === a.lang ? (lay(c[0]).attr("lay-type", "year").html(s.year + " \u5e74"), lay(c[1]).attr("lay-type", "month").html(s.month + 1 + " \u6708")) : (lay(c[0]).attr("lay-type", "month").html(y.month[s.month]), lay(c[1]).attr("lay-type", "year").html(s.year)), m && (a.range ? !e && "init" === t || (d.listYM = [
            [(d.startDate || a.dateTime).year, (d.startDate || a.dateTime).month + 1],
            [d.endDate.year, d.endDate.month + 1]
        ], d.list(a.type, 0).list(a.type, 1), "time" === a.type ? d.setBtnStatus("\u65f6\u95f4", lay.extend({}, d.systemDate(), d.startTime), lay.extend({}, d.systemDate(), d.endTime)) : d.setBtnStatus(!0)) : (d.listYM = [
            [s.year, s.month + 1]
        ], d.list(a.type, 0))), a.range && "init" === t && (d.rangeLinked ? (n = d.getAsYM(s.year, s.month, i ? "sub" : null), d.calendar(lay.extend({}, s, {
            year: n[0],
            month: n[1]
        }), 1 - i)) : d.calendar(null, 1 - i)), a.range || (u = ["hours", "minutes", "seconds"], d.limit({
            elem: lay(d.footer).find(".laydate-btns-now"),
            date: d.systemDate(/^(datetime|time)$/.test(a.type) ? new Date : null),
            index: 0,
            time: u,
            disabledType: "datetime"
        }), d.limit({
            elem: lay(d.footer).find(E),
            index: 0,
            time: u,
            disabledType: "datetime"
        })), d.setBtnStatus(), lay(d.shortcut).find("li." + M).removeClass(M), a.range && !m && "init" !== t && d.stampRange(), d
    }, k.prototype.list = function (n, i) {
        var l, r, e, a, o, d, t, s = this,
            y = s.config,
            m = s.rangeLinked ? y.dateTime : [y.dateTime, s.endDate][i],
            u = s.lang(),
            c = y.range && "date" !== y.type && "datetime" !== y.type,
            h = lay.elem("ul", {
                "class": b + " " + {
                    year: "laydate-year-list",
                    month: "laydate-month-list",
                    time: "laydate-time-list"
                } [n]
            }),
            p = s.elemHeader[i],
            f = lay(p[2]).find("span"),
            g = s.elemCont[i || 0],
            D = lay(g).find("." + b)[0],
            T = "cn" === y.lang,
            v = T ? "\u5e74" : "",
            x = s.listYM[i] || {},
            w = ["hours", "minutes", "seconds"],
            k = ["startTime", "endTime"][i];
        return x[0] < 1 && (x[0] = 1), "year" === n ? (e = l = x[0] - 7, l < 1 && (e = l = 1), lay.each(new Array(15), function (e) {
            var t = lay.elem("li", {
                    "lay-ym": l
                }),
                a = {
                    year: l,
                    month: 0,
                    date: 1
                };
            l == x[0] && lay(t).addClass(M), t.innerHTML = l + v, h.appendChild(t), s.limit({
                elem: lay(t),
                date: a,
                index: i,
                type: n,
                rangeType: i,
                disabledType: "date"
            }), s.cellRender(t, {
                year: l,
                month: 1,
                date: 1
            }, "year"), l++
        }), lay(f[T ? 0 : 1]).attr("lay-ym", l - 8 + "-" + x[1]).html(e + v + " - " + (l - 1) + v)) : "month" === n ? (lay.each(new Array(12), function (e) {
            var t = lay.elem("li", {
                    "lay-ym": e
                }),
                a = {
                    year: x[0],
                    month: e,
                    date: 1
                };
            e + 1 == x[1] && lay(t).addClass(M), t.innerHTML = u.month[e] + (T ? "\u6708" : ""), h.appendChild(t), s.limit({
                elem: lay(t),
                date: a,
                index: i,
                type: n,
                rangeType: i,
                disabledType: "date"
            }), s.cellRender(t, {
                year: x[0],
                month: e + 1,
                date: 1
            }, "month")
        }), lay(f[T ? 0 : 1]).attr("lay-ym", x[0] + "-" + x[1]).html(x[0] + v)) : "time" === n && (r = function () {
            lay(h).find("ol").each(function (a, e) {
                lay(e).find("li").each(function (e, t) {
                    s.limit({
                        elem: lay(t),
                        date: [{
                            hours: e
                        }, {
                            hours: s[k].hours,
                            minutes: e
                        }, {
                            hours: s[k].hours,
                            minutes: s[k].minutes,
                            seconds: e
                        }][a],
                        index: i,
                        rangeType: i,
                        disabledType: "time",
                        time: [
                            ["hours"],
                            ["hours", "minutes"],
                            ["hours", "minutes", "seconds"]
                        ][a]
                    })
                })
            }), y.range || s.limit({
                elem: lay(s.footer).find(E),
                date: s[k],
                index: 0,
                time: ["hours", "minutes", "seconds"],
                disabledType: "datetime"
            })
        }, y.range ? s[k] || (s[k] = "startTime" === k ? m : s.endDate) : s[k] = m, lay.each([24, 60, 60], function (t, e) {
            var a = lay.elem("li"),
                n = ["<p>" + u.time[t] + "</p><ol>"];
            lay.each(new Array(e), function (e) {
                n.push("<li" + (s[k][w[t]] === e ? ' class="' + M + '"' : "") + ">" + lay.digit(e, 2) + "</li>")
            }), a.innerHTML = n.join("") + "</ol>", h.appendChild(a)
        }), r(), e = -1 !== y.format.indexOf("H"), f = -1 !== y.format.indexOf("m"), t = -1 !== y.format.indexOf("s"), a = h.children, o = 0, lay.each([e, f, t], function (e, t) {
            t || (a[e].className += " layui-hide", o++)
        }), h.className += " laydate-time-list-hide-" + o), D && g.removeChild(D), g.appendChild(h), "year" === n || "month" === n ? (lay(s.elemMain[i]).addClass("laydate-ym-show"), lay(h).find("li").on("click", function () {
            var e, t, a = 0 | lay(this).attr("lay-ym");
            lay(this).hasClass(C) || (s.rangeLinked ? lay.extend(m, {
                year: "year" === n ? a : x[0],
                month: "year" === n ? x[1] - 1 : a
            }) : m[n] = a, e = -1 !== ["year", "month"].indexOf(y.type), t = "year" === n && -1 !== ["date", "datetime"].indexOf(y.type), e || t ? (lay(h).find("." + M).removeClass(M), lay(this).addClass(M), ("month" === y.type && "year" === n || t) && (s.listYM[i][0] = a, c && ((i ? s.endDate : m).year = a), s.list("month", i))) : (s.checkDate("limit").calendar(m, i, "init"), s.closeList()), s.setBtnStatus(), !y.range && y.autoConfirm && ("month" === y.type && "month" === n || "year" === y.type && "year" === n) && s.setValue(s.parse()).done().remove(), s.autoCalendarModel.auto && !s.rangeLinked ? s.choose(lay(g).find("td.layui-this"), i) : s.endState && s.done(null, "change"), lay(s.footer).find("." + I).removeClass(C))
        })) : (f = lay.elem("span", {
            "class": L
        }), d = function () {
            lay(h).find("ol").each(function (e) {
                var a = this,
                    t = lay(a).find("li");
                a.scrollTop = 30 * (s[k][w[e]] - 2), a.scrollTop <= 0 && t.each(function (e, t) {
                    if (!lay(this).hasClass(C)) return a.scrollTop = 30 * (e - 2), !0
                })
            })
        }, t = lay(p[2]).find("." + L), d(), f.innerHTML = y.range ? [u.startTime, u.endTime][i] : u.timeTips, lay(s.elemMain[i]).addClass("laydate-time-show"), t[0] && t.remove(), p[2].appendChild(f), (D = lay(h).find("ol")).each(function (t) {
            var a = this;
            lay(a).find("li").on("click", function () {
                var e = 0 | this.innerHTML;
                lay(this).hasClass(C) || (y.range ? s[k][w[t]] = e : m[w[t]] = e, lay(a).find("." + M).removeClass(M), lay(this).addClass(M), r(), d(), !s.endDate && "time" !== y.type && "datetime" !== y.type || s.done(null, "change"), s.setBtnStatus())
            })
        }), layui.device().mobile && D.css({
            overflowY: "auto",
            touchAction: "pan-y"
        })), s
    }, k.prototype.listYM = [], k.prototype.closeList = function () {
        var a = this;
        a.config;
        lay.each(a.elemCont, function (e, t) {
            lay(this).find("." + b).remove(), lay(a.elemMain[e]).removeClass("laydate-ym-show laydate-time-show")
        }), lay(a.elem).find("." + L).remove()
    }, k.prototype.setBtnStatus = function (e, t, a) {
        var n = this,
            i = n.config,
            l = n.lang(),
            r = lay(n.footer).find(E),
            o = "datetime" === i.type || "time" === i.type ? ["hours", "minutes", "seconds"] : undefined;
        i.range && (t = t || (n.rangeLinked ? n.startDate : i.dateTime), a = a || n.endDate, i = !n.endState || n.newDate(t).getTime() > n.newDate(a).getTime(), n.limit({
            date: t,
            disabledType: "datetime",
            time: o,
            rangeType: 0
        }) || n.limit({
            date: a,
            disabledType: "datetime",
            time: o,
            rangeType: 1
        }) ? r.addClass(C) : r[i ? "addClass" : "removeClass"](C), e) && i && n.hint("string" == typeof e ? l.timeout.replace(/\u65e5\u671f/g, e) : l.timeout)
    }, k.prototype.parse = function (e, t) {
        var a = this,
            n = a.config,
            i = a.rangeLinked ? a.startDate : n.dateTime,
            t = t || ("end" == e ? lay.extend({}, a.endDate, a.endTime) : n.range ? lay.extend({}, i || n.dateTime, a.startTime) : n.dateTime),
            i = T.parse(t, a.format, 1);
        return n.range && e === undefined ? i + " " + a.rangeStr + " " + a.parse("end") : i
    }, k.prototype.newDate = function (e) {
        return e = e || {}, new Date(e.year || 1, e.month || 0, e.date || 1, e.hours || 0, e.minutes || 0, e.seconds || 0)
    }, k.prototype.getDateTime = function (e) {
        return this.newDate(e).getTime()
    }, k.prototype.formatToDisplay = function (e, t) {
        var a = this,
            n = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
        Object.defineProperty(e, "value", lay.extend({}, n, {
            get: function () {
                return this.getAttribute("lay-date")
            },
            set: function (e) {
                n.set.call(this, t.call(a, e)), this.setAttribute("lay-date", e)
            }
        }))
    }, k.prototype.setValue = function (e) {
        var t, a = this,
            n = a.config,
            i = n.elem[0];
        return "static" !== n.position && (e = e || "", a.isInput(i) ? lay(i).val(e) : (t = a.rangeElem) ? ("array" !== layui.type(e) && (e = e.split(" " + a.rangeStr + " ")), t[0].val(e[0] || ""), t[1].val(e[1] || "")) : (0 === lay(i).find("*").length && (t = "function" == typeof n.formatToDisplay ? n.formatToDisplay(e) : e, lay(i).html(t)), lay(i).attr("lay-date", e))), a
    }, k.prototype.preview = function () {
        var e, t = this,
            a = t.config;
        a.isPreview && (e = lay(t.elem).find("." + x), a = !a.range || (t.rangeLinked ? t.endState : t.endDate) ? t.parse() : "", e.html(a), e.html()) && (e.css({
            color: "#16b777"
        }), setTimeout(function () {
            e.css({
                color: "#777"
            })
        }, 300))
    }, k.prototype.renderAdditional = function () {
        this.config.fullPanel && this.list("time", 0)
    }, k.prototype.stampRange = function () {
        var n, i = this,
            l = i.config,
            r = i.rangeLinked ? i.startDate : l.dateTime,
            e = lay(i.elem).find("td");
        l.range && !i.endState && lay(i.footer).find(E).addClass(C), r = r && i.newDate({
            year: r.year,
            month: r.month,
            date: r.date
        }).getTime(), n = i.endState && i.endDate && i.newDate({
            year: i.endDate.year,
            month: i.endDate.month,
            date: i.endDate.date
        }).getTime(), lay.each(e, function (e, t) {
            var a = lay(t).attr("lay-ymd").split("-"),
                a = i.newDate({
                    year: a[0],
                    month: a[1] - 1,
                    date: a[2]
                }).getTime();
            l.rangeLinked && !i.startDate && a === i.newDate(i.systemDate()).getTime() && lay(t).addClass(lay(t).hasClass(y) || lay(t).hasClass(m) ? "" : "laydate-day-now"), lay(t).removeClass(o + " " + M), a !== r && a !== n || (i.rangeLinked || !i.rangeLinked && (e < 42 ? a === r : a === n)) && lay(t).addClass(lay(t).hasClass(y) || lay(t).hasClass(m) ? o : M), r < a && a < n && lay(t).addClass(o)
        })
    }, k.prototype.done = function (e, t) {
        var a = this,
            n = a.config,
            i = lay.extend({}, lay.extend(a.rangeLinked ? a.startDate : n.dateTime, a.startTime)),
            l = lay.extend({}, lay.extend(a.endDate, a.endTime));
        return lay.each([i, l], function (e, t) {
            "month" in t && lay.extend(t, {
                month: t.month + 1
            })
        }), a.preview(), e = e || [a.parse(), i, l], "change" === t && a.renderAdditional(), "function" == typeof n[t || "done"] && n[t || "done"].apply(n, e), a
    }, k.prototype.checkPanelDate = function (e, t) {
        var a, n = this.config;
        if ("date" === n.type || "datetime" === n.type) return n = 0 === t, e = e.month + 1, a = this.panelYM[t].month + 1, n = this.endState && (n && a < e || !n && e < a) ? 1 - t : t, {
            needFullRender: e !== a,
            index: n
        }
    }, k.prototype.choose = function (e, a) {
        var n, i, t, l, r, o, d;
        e.hasClass(C) || (i = (n = this).config, t = a, n.rangeLinked && (n.endState || !n.startDate ? (a = 0, n.endState = !1) : (a = 1, n.endState = !0)), l = n.thisDateTime(a), lay(n.elem).find("td"), e = {
            year: 0 | (e = e.attr("lay-ymd").split("-"))[0],
            month: (0 | e[1]) - 1,
            date: 0 | e[2]
        }, lay.extend(l, e), i.range ? (lay.each(["startTime", "endTime"], function (e, t) {
            n[t] = n[t] || {
                hours: e ? 23 : 0,
                minutes: e ? 59 : 0,
                seconds: e ? 59 : 0
            }, a === e && (n.getDateTime(lay.extend({}, l, n[t])) < n.getDateTime(i.min) ? (n[t] = {
                hours: i.min.hours,
                minutes: i.min.minutes,
                seconds: i.min.seconds
            }, lay.extend(l, n[t])) : n.getDateTime(lay.extend({}, l, n[t])) > n.getDateTime(i.max) && (n[t] = {
                hours: i.max.hours,
                minutes: i.max.minutes,
                seconds: i.max.seconds
            }, lay.extend(l, n[t])))
        }), a || (n.startDate = lay.extend({}, l)), n.endState && !n.limit({
            date: n.rangeLinked ? n.startDate : n.thisDateTime(1 - a),
            disabledType: "date"
        }) && (((r = n.endState && n.autoCalendarModel.auto ? n.autoCalendarModel() : r) || n.rangeLinked && n.endState) && n.newDate(n.startDate) > n.newDate(n.endDate) && (n.startDate.year === n.endDate.year && n.startDate.month === n.endDate.month && n.startDate.date === n.endDate.date && (o = n.startTime, n.startTime = n.endTime, n.endTime = o), o = n.startDate, n.startDate = lay.extend({}, n.endDate, n.startTime), i.dateTime = lay.extend({}, n.startDate), n.endDate = lay.extend({}, o, n.endTime)), r) && (i.dateTime = lay.extend({}, n.startDate)), n.rangeLinked ? (e = n.checkPanelDate(l, t), o = lay.extend({}, l), d = r || e && e.needFullRender ? "init" : null, e = e ? e.index : t, n.calendar(o, e, d)) : n.calendar(null, a, r ? "init" : null), n.endState && n.done(null, "change")) : "static" === i.position ? n.calendar().done().done(null, "change") : "date" === i.type ? i.autoConfirm ? n.setValue(n.parse()).done().remove() : n.calendar().done(null, "change") : "datetime" === i.type && n.calendar().done(null, "change"))
    }, k.prototype.tool = function (t, e) {
        var a = this,
            n = a.config,
            i = a.lang(),
            l = n.dateTime,
            r = "static" === n.position,
            o = {
                datetime: function () {
                    lay(t).hasClass(C) || (a.list("time", 0), n.range && a.list("time", 1), lay(t).attr("lay-type", "date").html(a.lang().dateTips))
                },
                date: function () {
                    a.closeList(), lay(t).attr("lay-type", "datetime").html(a.lang().timeTips)
                },
                clear: function () {
                    r && (lay.extend(l, a.firstDate), a.calendar()), n.range && (delete n.dateTime, delete a.endDate, delete a.startTime, delete a.endTime), a.setValue(""), a.done(null, "onClear").done(["", {}, {}]).remove()
                },
                now: function () {
                    var e = new Date;
                    if (lay(t).hasClass(C)) return a.hint(i.tools.now + ", " + i.invalidDate);
                    lay.extend(l, a.systemDate(), {
                        hours: e.getHours(),
                        minutes: e.getMinutes(),
                        seconds: e.getSeconds()
                    }), a.setValue(a.parse()), r && a.calendar(), a.done(null, "onNow").done().remove()
                },
                confirm: function () {
                    if (n.range) {
                        if (lay(t).hasClass(C)) return ("time" === n.type ? a.startTime && a.endTime && a.newDate(a.startTime) > a.newDate(a.endTime) : a.startDate && a.endDate && a.newDate(lay.extend({}, a.startDate, a.startTime || {})) > a.newDate(lay.extend({}, a.endDate, a.endTime || {}))) ? a.hint("time" === n.type ? i.timeout.replace(/\u65e5\u671f/g, "\u65f6\u95f4") : i.timeout) : a.hint(i.invalidDate)
                    } else if (lay(t).hasClass(C)) return a.hint(i.invalidDate);
                    a.setValue(a.parse()), a.done(null, "onConfirm").done().remove()
                }
            };
        o[e] && o[e]()
    }, k.prototype.change = function (n) {
        var i = this,
            l = i.config,
            r = i.thisDateTime(n),
            o = l.range && ("year" === l.type || "month" === l.type),
            d = i.elemCont[n || 0],
            s = i.listYM[n],
            e = function (e) {
                var t = lay(d).find(".laydate-year-list")[0],
                    a = lay(d).find(".laydate-month-list")[0];
                return t && (s[0] = e ? s[0] - 15 : s[0] + 15, i.list("year", n)), a && (e ? s[0]-- : s[0]++, i.list("month", n)), (t || a) && (lay.extend(r, {
                    year: s[0]
                }), o && (r.year = s[0]), l.range || i.done(null, "change"), l.range || i.limit({
                    elem: lay(i.footer).find(E),
                    date: {
                        year: s[0]
                    },
                    disabledType: "datetime"
                })), i.setBtnStatus(), t || a
            };
        return {
            prevYear: function () {
                e("sub") || (i.rangeLinked ? (l.dateTime.year--, i.checkDate("limit").calendar(null, null, "init")) : (r.year--, i.checkDate("limit").calendar(null, n), i.autoCalendarModel.auto ? i.choose(lay(d).find("td.layui-this"), n) : i.done(null, "change")))
            },
            prevMonth: function () {
                var e, t;
                i.rangeLinked ? (t = i.panelYM[0], t = i.getAsYM(t.year, t.month, "sub"), e = lay.extend({}, l.dateTime, i.panelYM[0], {
                    year: t[0],
                    month: t[1]
                }), i.checkDate("limit").calendar(e, null, "init")) : (t = i.getAsYM(r.year, r.month, "sub"), lay.extend(r, {
                    year: t[0],
                    month: t[1]
                }), i.checkDate("limit").calendar(null, null, "init"), i.autoCalendarModel.auto ? i.choose(lay(d).find("td.layui-this"), n) : i.done(null, "change"))
            },
            nextMonth: function () {
                var e, t;
                i.rangeLinked ? (t = i.panelYM[0], t = i.getAsYM(t.year, t.month), e = lay.extend({}, l.dateTime, i.panelYM[0], {
                    year: t[0],
                    month: t[1]
                }), i.checkDate("limit").calendar(e, null, "init")) : (t = i.getAsYM(r.year, r.month), lay.extend(r, {
                    year: t[0],
                    month: t[1]
                }), i.checkDate("limit").calendar(null, null, "init"), i.autoCalendarModel.auto ? i.choose(lay(d).find("td.layui-this"), n) : i.done(null, "change"))
            },
            nextYear: function () {
                e() || (i.rangeLinked ? (l.dateTime.year++, i.checkDate("limit").calendar(null, 0, "init")) : (r.year++, i.checkDate("limit").calendar(null, n), i.autoCalendarModel.auto ? i.choose(lay(d).find("td.layui-this"), n) : i.done(null, "change")))
            }
        }
    }, k.prototype.changeEvent = function () {
        var i = this;
        i.config;
        lay(i.elem).on("click", function (e) {
            lay.stope(e)
        }).on("mousedown", function (e) {
            lay.stope(e)
        }), lay.each(i.elemHeader, function (n, e) {
            lay(e[0]).on("click", function (e) {
                i.change(n).prevYear()
            }), lay(e[1]).on("click", function (e) {
                i.change(n).prevMonth()
            }), lay(e[2]).find("span").on("click", function (e) {
                var t = lay(this),
                    a = t.attr("lay-ym"),
                    t = t.attr("lay-type");
                a && (a = a.split("-"), i.listYM[n] = [0 | a[0], 0 | a[1]], i.list(t, n), lay(i.footer).find("." + I).addClass(C))
            }), lay(e[3]).on("click", function (e) {
                i.change(n).nextMonth()
            }), lay(e[4]).on("click", function (e) {
                i.change(n).nextYear()
            })
        }), lay.each(i.table, function (e, t) {
            lay(t).find("td").on("click", function () {
                i.choose(lay(this), e)
            })
        }), lay(i.footer).find("span").on("click", function () {
            var e = lay(this).attr("lay-type");
            i.tool(this, e)
        })
    }, k.prototype.isInput = function (e) {
        return /input|textarea/.test(e.tagName.toLocaleLowerCase()) || /INPUT|TEXTAREA/.test(e.tagName)
    }, k.prototype.events = function () {
        var e, t = this,
            a = t.config;
        a.elem[0] && !a.elem[0].eventHandler && (a.elem.on(a.trigger, e = function () {
            T.thisId !== a.id && t.render()
        }), a.elem[0].eventHandler = !0, a.eventElem.on(a.trigger, e), t.unbind = function () {
            t.remove(), a.elem.off(a.trigger, e), a.elem.removeAttr("lay-key"), a.elem.removeAttr(d), a.elem[0].eventHandler = !1, a.eventElem.off(a.trigger, e), a.eventElem.removeAttr("lay-key"), delete s.that[a.id]
        })
    }, s.that = {}, s.getThis = function (e) {
        var t = s.that[e];
        return !t && n && layui.hint().error(e ? a + " instance with ID '" + e + "' not found" : "ID argument required"), t
    }, l.run = function (n) {
        n(D).on("mousedown", function (e) {
            var t, a;
            T.thisId && (t = s.getThis(T.thisId)) && (a = t.config, e.target === a.elem[0] || e.target === a.eventElem[0] || e.target === n(a.closeStop)[0] || a.elem[0] && a.elem[0].contains(e.target) || t.remove())
        }).on("keydown", function (e) {
            var t;
            T.thisId && (t = s.getThis(T.thisId)) && "static" !== t.config.position && 13 === e.keyCode && n("#" + t.elemID)[0] && t.elemID === k.thisElemDate && (e.preventDefault(), n(t.footer).find(E)[0].click())
        }), n(i).on("resize", function () {
            if (T.thisId) {
                var e = s.getThis(T.thisId);
                if (e) return !(!e.elem || !n(".layui-laydate")[0]) && void e.position()
            }
        })
    }, T.render = function (e) {
        e = new k(e);
        return s.call(e)
    }, T.reload = function (e, t) {
        e = s.getThis(e);
        if (e) return e.reload(t)
    }, T.getInst = function (e) {
        e = s.getThis(e);
        if (e) return e.inst
    }, T.hint = function (e, t) {
        e = s.getThis(e);
        if (e) return e.hint(t)
    }, T.unbind = function (e) {
        e = s.getThis(e);
        if (e) return e.unbind()
    }, T.close = function (e) {
        e = s.getThis(e || T.thisId);
        if (e) return e.remove()
    }, T.parse = function (a, n, i) {
        return a = a || {}, n = ((n = "string" == typeof n ? s.formatArr(n) : n) || []).concat(), lay.each(n, function (e, t) {
            /yyyy|y/.test(t) ? n[e] = lay.digit(a.year, t.length) : /MM|M/.test(t) ? n[e] = lay.digit(a.month + (i || 0), t.length) : /dd|d/.test(t) ? n[e] = lay.digit(a.date, t.length) : /HH|H/.test(t) ? n[e] = lay.digit(a.hours, t.length) : /mm|m/.test(t) ? n[e] = lay.digit(a.minutes, t.length) : /ss|s/.test(t) && (n[e] = lay.digit(a.seconds, t.length))
        }), n.join("")
    }, T.getEndDate = function (e, t) {
        var a = new Date;
        return a.setFullYear(t || a.getFullYear(), e || a.getMonth() + 1, 1), new Date(a.getTime() - 864e5).getDate()
    }, n ? (T.ready(), layui.define("lay", function (e) {
        T.path = layui.cache.dir, l.run(lay), e(a, T)
    })) : "function" == typeof define && define.amd ? define(function () {
        return l.run(lay), T
    }) : (T.ready(), l.run(i.lay), i.laydate = T)
}(window, window.document);
! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e) : function (e) {
        if (e.document) return t(e);
        throw new Error("jQuery requires a window with a document")
    } : t(e)
}("undefined" != typeof window ? window : this, function (T, M) {
    "use strict";
    var t = [],
        R = Object.getPrototypeOf,
        a = t.slice,
        I = t.flat ? function (e) {
            return t.flat.call(e)
        } : function (e) {
            return t.concat.apply([], e)
        },
        W = t.push,
        b = t.indexOf,
        F = {},
        $ = F.toString,
        B = F.hasOwnProperty,
        _ = B.toString,
        z = _.call(Object),
        g = {},
        v = function v(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        X = function X(e) {
            return null != e && e === e.window
        },
        C = T.document,
        U = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function V(e, t, n) {
        var r, i, o = (n = n || C).createElement("script");
        if (o.text = e, t)
            for (r in U)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function G(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? F[$.call(e)] || "object" : typeof e
    }
    var e = "3.7.1",
        Y = /HTML$/i,
        S = function (e, t) {
            return new S.fn.init(e, t)
        };

    function J(e) {
        var t = !!e && "length" in e && e.length,
            n = G(e);
        return !v(e) && !X(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function x(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    S.fn = S.prototype = {
        jquery: e,
        constructor: S,
        length: 0,
        toArray: function () {
            return a.call(this)
        },
        get: function (e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            e = S.merge(this.constructor(), e);
            return e.prevObject = this, e
        },
        each: function (e) {
            return S.each(this, e)
        },
        map: function (n) {
            return this.pushStack(S.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return t % 2
            }))
        },
        eq: function (e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: W,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function () {
        var e, t, n, r, i, o = arguments[0] || {},
            s = 1,
            a = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || v(o) || (o = {}), s === a && (o = this, s--); s < a; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = e[t], "__proto__" !== t && o !== n && (u && n && (S.isPlainObject(n) || (r = Array.isArray(n))) ? (i = o[t], i = r && !Array.isArray(i) ? [] : r || S.isPlainObject(i) ? i : {}, r = !1, o[t] = S.extend(u, i, n)) : n !== undefined && (o[t] = n));
        return o
    }, S.extend({
        expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            return !(!e || "[object Object]" !== $.call(e) || (e = R(e)) && ("function" != typeof (e = B.call(e, "constructor") && e.constructor) || _.call(e) !== z))
        },
        isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0
        },
        globalEval: function (e, t, n) {
            V(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function (e, t) {
            var n, r = 0;
            if (J(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        text: function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (!i)
                for (; t = e[r++];) n += S.text(t);
            return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
        },
        makeArray: function (e, t) {
            t = t || [];
            return null != e && (J(Object(e)) ? S.merge(t, "string" == typeof e ? [e] : e) : W.call(t, e)), t
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : b.call(t, e, n)
        },
        isXMLDoc: function (e) {
            var t = e && e.namespaceURI,
                e = e && (e.ownerDocument || e).documentElement;
            return !Y.test(t || e && e.nodeName || "HTML")
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) != s && r.push(e[i]);
            return r
        },
        map: function (e, t, n) {
            var r, i, o = 0,
                s = [];
            if (J(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return I(s)
        },
        guid: 1,
        support: g
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        F["[object " + t + "]"] = t.toLowerCase()
    });
    var K = t.pop,
        Q = t.sort,
        Z = t.splice,
        n = "[\\x20\\t\\r\\n\\f]",
        ee = new RegExp("^" + n + "+|((?:^|[^\\\\])(?:\\\\.)*)" + n + "+$", "g"),
        te = (S.contains = function (e, t) {
            t = t && t.parentNode;
            return e === t || !(!t || 1 !== t.nodeType || !(e.contains ? e.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
        }, /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g);

    function ne(e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }
    S.escapeSelector = function (e) {
        return (e + "").replace(te, ne)
    };
    var re, w, ie, oe, se, E, r, k, p, ae, i = C,
        ue = W,
        j = ue,
        A = S.expando,
        D = 0,
        le = 0,
        ce = De(),
        fe = De(),
        de = De(),
        pe = De(),
        he = function (e, t) {
            return e === t && (se = !0), 0
        },
        ge = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        e = "(?:\\\\[\\da-fA-F]{1,6}" + n + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        o = "\\[" + n + "*(" + e + ")(?:" + n + "*([*^$|!~]?=)" + n + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + e + "))|)" + n + "*\\]",
        s = ":(" + e + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + o + ")*)|.*)\\)|)",
        ye = new RegExp(n + "+", "g"),
        me = new RegExp("^" + n + "*," + n + "*"),
        ve = new RegExp("^" + n + "*([>+~]|" + n + ")" + n + "*"),
        xe = new RegExp(n + "|>"),
        be = new RegExp(s),
        we = new RegExp("^" + e + "$"),
        Te = {
            ID: new RegExp("^#(" + e + ")"),
            CLASS: new RegExp("^\\.(" + e + ")"),
            TAG: new RegExp("^(" + e + "|[*])"),
            ATTR: new RegExp("^" + o),
            PSEUDO: new RegExp("^" + s),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + n + "*(even|odd|(([+-]|)(\\d*)n|)" + n + "*(?:([+-]|)" + n + "*(\\d+)|))" + n + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ge + ")$", "i"),
            needsContext: new RegExp("^" + n + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + n + "*((?:-\\d)?\\d*)" + n + "*\\)|)(?=[^-]|$)", "i")
        },
        Ce = /^(?:input|select|textarea|button)$/i,
        Se = /^h\d$/i,
        Ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ke = /[+~]/,
        f = new RegExp("\\\\[\\da-fA-F]{1,6}" + n + "?|\\\\([^\\r\\n\\f])", "g"),
        d = function (e, t) {
            e = "0x" + e.slice(1) - 65536;
            return t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
        },
        je = function () {
            Oe()
        },
        Ae = Ie(function (e) {
            return !0 === e.disabled && x(e, "fieldset")
        }, {
            dir: "parentNode",
            next: "legend"
        });
    try {
        j.apply(t = a.call(i.childNodes), i.childNodes), t[i.childNodes.length].nodeType
    } catch (sr) {
        j = {
            apply: function (e, t) {
                ue.apply(e, a.call(t))
            },
            call: function (e) {
                ue.apply(e, a.call(arguments, 1))
            }
        }
    }

    function N(e, t, n, r) {
        var i, o, s, a, u, l, c = t && t.ownerDocument,
            f = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
        if (!r && (Oe(t), t = t || E, k)) {
            if (11 !== f && (a = Ee.exec(e)))
                if (i = a[1]) {
                    if (9 === f) {
                        if (!(l = t.getElementById(i))) return n;
                        if (l.id === i) return j.call(n, l), n
                    } else if (c && (l = c.getElementById(i)) && N.contains(t, l) && l.id === i) return j.call(n, l), n
                } else {
                    if (a[2]) return j.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = a[3]) && t.getElementsByClassName) return j.apply(n, t.getElementsByClassName(i)), n
                } if (!(pe[e + " "] || p && p.test(e))) {
                if (l = e, c = t, 1 === f && (xe.test(e) || ve.test(e))) {
                    for ((c = ke.test(e) && He(t.parentNode) || t) == t && g.scope || ((s = t.getAttribute("id")) ? s = S.escapeSelector(s) : t.setAttribute("id", s = A)), o = (u = Me(e)).length; o--;) u[o] = (s ? "#" + s : ":scope") + " " + Re(u[o]);
                    l = u.join(",")
                }
                try {
                    return j.apply(n, c.querySelectorAll(l)), n
                } catch (d) {
                    pe(e, !0)
                } finally {
                    s === A && t.removeAttribute("id")
                }
            }
        }
        return _e(e.replace(ee, "$1"), t, n, r)
    }

    function De() {
        var n = [];

        function r(e, t) {
            return n.push(e + " ") > w.cacheLength && delete r[n.shift()], r[e + " "] = t
        }
        return r
    }

    function u(e) {
        return e[A] = !0, e
    }

    function Ne(e) {
        var t = E.createElement("fieldset");
        try {
            return !!e(t)
        } catch (sr) {
            return !1
        } finally {
            t.parentNode && t.parentNode.removeChild(t)
        }
    }

    function qe(t) {
        return function (e) {
            return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
        }
    }

    function Le(s) {
        return u(function (o) {
            return o = +o, u(function (e, t) {
                for (var n, r = s([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
            })
        })
    }

    function He(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e
    }

    function Oe(e) {
        var e = e ? e.ownerDocument || e : i;
        return e != E && 9 === e.nodeType && e.documentElement && (r = (E = e).documentElement, k = !S.isXMLDoc(E), ae = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && i != E && (e = E.defaultView) && e.top !== e && e.addEventListener("unload", je), g.getById = Ne(function (e) {
            return r.appendChild(e).id = S.expando, !E.getElementsByName || !E.getElementsByName(S.expando).length
        }), g.disconnectedMatch = Ne(function (e) {
            return ae.call(e, "*")
        }), g.scope = Ne(function () {
            return E.querySelectorAll(":scope")
        }), g.cssHas = Ne(function () {
            try {
                E.querySelector(":has(*,:jqfake)")
            } catch (sr) {
                return 1
            }
        }), g.getById ? (w.filter.ID = function (e) {
            var t = e.replace(f, d);
            return function (e) {
                return e.getAttribute("id") === t
            }
        }, w.find.ID = function (e, t) {
            if ("undefined" != typeof t.getElementById && k) return (e = t.getElementById(e)) ? [e] : []
        }) : (w.filter.ID = function (e) {
            var t = e.replace(f, d);
            return function (e) {
                e = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                return e && e.value === t
            }
        }, w.find.ID = function (e, t) {
            if ("undefined" != typeof t.getElementById && k) {
                var n, r, i, o = t.getElementById(e);
                if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                    for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                }
                return []
            }
        }), w.find.TAG = function (e, t) {
            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
        }, w.find.CLASS = function (e, t) {
            if ("undefined" != typeof t.getElementsByClassName && k) return t.getElementsByClassName(e)
        }, p = [], Ne(function (e) {
            var t;
            r.appendChild(e).innerHTML = "<a id='" + A + "' href='' disabled='disabled'></a><select id='" + A + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || p.push("\\[" + n + "*(?:value|" + ge + ")"), e.querySelectorAll("[id~=" + A + "-]").length || p.push("~="), e.querySelectorAll("a#" + A + "+*").length || p.push(".#.+[+~]"), e.querySelectorAll(":checked").length || p.push(":checked"), (t = E.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"), (t = E.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || p.push("\\[" + n + "*name" + n + "*=" + n + "*(?:''|\"\")")
        }), g.cssHas || p.push(":has"), p = p.length && new RegExp(p.join("|")), he = function (e, t) {
            var n;
            return e === t ? (se = !0, 0) : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !g.sortDetached && t.compareDocumentPosition(e) === n ? e === E || e.ownerDocument == i && N.contains(i, e) ? -1 : t === E || t.ownerDocument == i && N.contains(i, t) ? 1 : oe ? b.call(oe, e) - b.call(oe, t) : 0 : 4 & n ? -1 : 1)
        }), E
    }
    for (re in N.matches = function (e, t) {
        return N(e, null, null, t)
    }, N.matchesSelector = function (e, t) {
        if (Oe(e), k && !pe[t + " "] && (!p || !p.test(t))) try {
            var n = ae.call(e, t);
            if (n || g.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
        } catch (sr) {
            pe(t, !0)
        }
        return 0 < N(t, E, null, [e]).length
    }, N.contains = function (e, t) {
        return (e.ownerDocument || e) != E && Oe(e), S.contains(e, t)
    }, N.attr = function (e, t) {
        (e.ownerDocument || e) != E && Oe(e);
        var n = w.attrHandle[t.toLowerCase()],
            n = n && B.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !k) : undefined;
        return n !== undefined ? n : e.getAttribute(t)
    }, N.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
    }, S.uniqueSort = function (e) {
        var t, n = [],
            r = 0,
            i = 0;
        if (se = !g.sortStable, oe = !g.sortStable && a.call(e, 0), Q.call(e, he), se) {
            for (; t = e[i++];) t === e[i] && (r = n.push(i));
            for (; r--;) Z.call(e, n[r], 1)
        }
        return oe = null, e
    }, S.fn.uniqueSort = function () {
        return this.pushStack(S.uniqueSort(a.apply(this)))
    }, (w = S.expr = {
        cacheLength: 50,
        createPseudo: u,
        match: Te,
        attrHandle: {},
        find: {},
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function (e) {
                return e[1] = e[1].replace(f, d), e[3] = (e[3] || e[4] || e[5] || "").replace(f, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function (e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || N.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && N.error(e[0]), e
            },
            PSEUDO: function (e) {
                var t, n = !e[6] && e[2];
                return Te.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && be.test(n) && (t = (t = Me(n, !0)) && n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
        },
        filter: {
            TAG: function (e) {
                var t = e.replace(f, d).toLowerCase();
                return "*" === e ? function () {
                    return !0
                } : function (e) {
                    return x(e, t)
                }
            },
            CLASS: function (e) {
                var t = ce[e + " "];
                return t || (t = new RegExp("(^|" + n + ")" + e + "(" + n + "|$)")) && ce(e, function (e) {
                    return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                })
            },
            ATTR: function (t, n, r) {
                return function (e) {
                    e = N.attr(e, t);
                    return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(ye, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                }
            },
            CHILD: function (p, e, t, h, g) {
                var y = "nth" !== p.slice(0, 3),
                    m = "last" !== p.slice(-4),
                    v = "of-type" === e;
                return 1 === h && 0 === g ? function (e) {
                    return !!e.parentNode
                } : function (e, t, n) {
                    var r, i, o, s, a, u = y != m ? "nextSibling" : "previousSibling",
                        l = e.parentNode,
                        c = v && e.nodeName.toLowerCase(),
                        f = !n && !v,
                        d = !1;
                    if (l) {
                        if (y) {
                            for (; u;) {
                                for (o = e; o = o[u];)
                                    if (v ? x(o, c) : 1 === o.nodeType) return !1;
                                a = u = "only" === p && !a && "nextSibling"
                            }
                            return !0
                        }
                        if (a = [m ? l.firstChild : l.lastChild], m && f) {
                            for (d = (s = (r = (i = l[A] || (l[A] = {}))[p] || [])[0] === D && r[1]) && r[2], o = s && l.childNodes[s]; o = ++s && o && o[u] || (d = s = 0, a.pop());)
                                if (1 === o.nodeType && ++d && o === e) {
                                    i[p] = [D, s, d];
                                    break
                                }
                        } else if (!1 === (d = f ? s = (r = (i = e[A] || (e[A] = {}))[p] || [])[0] === D && r[1] : d))
                            for (;
                                (o = ++s && o && o[u] || (d = s = 0, a.pop())) && ((v ? !x(o, c) : 1 !== o.nodeType) || !++d || (f && ((i = o[A] || (o[A] = {}))[p] = [D, d]), o !== e)););
                        return (d -= g) === h || d % h == 0 && 0 <= d / h
                    }
                }
            },
            PSEUDO: function (e, o) {
                var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || N.error("unsupported pseudo: " + e);
                return s[A] ? s(o) : 1 < s.length ? (t = [e, e, "", o], w.setFilters.hasOwnProperty(e.toLowerCase()) ? u(function (e, t) {
                    for (var n, r = s(e, o), i = r.length; i--;) e[n = b.call(e, r[i])] = !(t[n] = r[i])
                }) : function (e) {
                    return s(e, 0, t)
                }) : s
            }
        },
        pseudos: {
            not: u(function (e) {
                var r = [],
                    i = [],
                    a = Be(e.replace(ee, "$1"));
                return a[A] ? u(function (e, t, n, r) {
                    for (var i, o = a(e, null, r, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i))
                }) : function (e, t, n) {
                    return r[0] = e, a(r, null, n, i), r[0] = null, !i.pop()
                }
            }),
            has: u(function (t) {
                return function (e) {
                    return 0 < N(t, e).length
                }
            }),
            contains: u(function (t) {
                return t = t.replace(f, d),
                    function (e) {
                        return -1 < (e.textContent || S.text(e)).indexOf(t)
                    }
            }),
            lang: u(function (n) {
                return we.test(n || "") || N.error("unsupported lang: " + n), n = n.replace(f, d).toLowerCase(),
                    function (e) {
                        var t;
                        do {
                            if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
            }),
            target: function (e) {
                var t = T.location && T.location.hash;
                return t && t.slice(1) === e.id
            },
            root: function (e) {
                return e === r
            },
            focus: function (e) {
                return e === function () {
                    try {
                        return E.activeElement
                    } catch (e) {}
                }() && E.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: qe(!1),
            disabled: qe(!0),
            checked: function (e) {
                return x(e, "input") && !!e.checked || x(e, "option") && !!e.selected
            },
            selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            },
            empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                return !0
            },
            parent: function (e) {
                return !w.pseudos.empty(e)
            },
            header: function (e) {
                return Se.test(e.nodeName)
            },
            input: function (e) {
                return Ce.test(e.nodeName)
            },
            button: function (e) {
                return x(e, "input") && "button" === e.type || x(e, "button")
            },
            text: function (e) {
                return x(e, "input") && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
            },
            first: Le(function () {
                return [0]
            }),
            last: Le(function (e, t) {
                return [t - 1]
            }),
            eq: Le(function (e, t, n) {
                return [n < 0 ? n + t : n]
            }),
            even: Le(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e
            }),
            odd: Le(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e
            }),
            lt: Le(function (e, t, n) {
                for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                return e
            }),
            gt: Le(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                return e
            })
        }
    }).pseudos.nth = w.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
    }) w.pseudos[re] = function (t) {
        return function (e) {
            return x(e, "input") && e.type === t
        }
    }(re);
    for (re in {
        submit: !0,
        reset: !0
    }) w.pseudos[re] = function (t) {
        return function (e) {
            return (x(e, "input") || x(e, "button")) && e.type === t
        }
    }(re);

    function Pe() {}

    function Me(e, t) {
        var n, r, i, o, s, a, u, l = fe[e + " "];
        if (l) return t ? 0 : l.slice(0);
        for (s = e, a = [], u = w.preFilter; s;) {
            for (o in n && !(r = me.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = ve.exec(s)) && (n = r.shift(), i.push({
                value: n,
                type: r[0].replace(ee, " ")
            }), s = s.slice(n.length)), w.filter) !(r = Te[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                value: n,
                type: o,
                matches: r
            }), s = s.slice(n.length));
            if (!n) break
        }
        return t ? s.length : s ? N.error(e) : fe(e, a).slice(0)
    }

    function Re(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r
    }

    function Ie(s, e, t) {
        var a = e.dir,
            u = e.next,
            l = u || a,
            c = t && "parentNode" === l,
            f = le++;
        return e.first ? function (e, t, n) {
            for (; e = e[a];)
                if (1 === e.nodeType || c) return s(e, t, n);
            return !1
        } : function (e, t, n) {
            var r, i, o = [D, f];
            if (n) {
                for (; e = e[a];)
                    if ((1 === e.nodeType || c) && s(e, t, n)) return !0
            } else
                for (; e = e[a];)
                    if (1 === e.nodeType || c)
                        if (i = e[A] || (e[A] = {}), u && x(e, u)) e = e[a] || e;
                        else {
                            if ((r = i[l]) && r[0] === D && r[1] === f) return o[2] = r[2];
                            if ((i[l] = o)[2] = s(e, t, n)) return !0
                        } return !1
        }
    }

    function We(i) {
        return 1 < i.length ? function (e, t, n) {
            for (var r = i.length; r--;)
                if (!i[r](e, t, n)) return !1;
            return !0
        } : i[0]
    }

    function Fe(e, t, n, r, i) {
        for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++) !(o = e[a]) || n && !n(o, r, i) || (s.push(o), l && t.push(a));
        return s
    }

    function $e(p, h, g, y, m, e) {
        return y && !y[A] && (y = $e(y)), m && !m[A] && (m = $e(m, e)), u(function (e, t, n, r) {
            var i, o, s, a, u = [],
                l = [],
                c = t.length,
                f = e || function (e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++) N(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []),
                d = !p || !e && h ? f : Fe(f, u, p, n, r);
            if (g ? g(d, a = m || (e ? p : c || y) ? [] : t, n, r) : a = d, y)
                for (i = Fe(a, l), y(i, [], n, r), o = i.length; o--;)(s = i[o]) && (a[l[o]] = !(d[l[o]] = s));
            if (e) {
                if (m || p) {
                    if (m) {
                        for (i = [], o = a.length; o--;)(s = a[o]) && i.push(d[o] = s);
                        m(null, a = [], i, r)
                    }
                    for (o = a.length; o--;)(s = a[o]) && -1 < (i = m ? b.call(e, s) : u[o]) && (e[i] = !(t[i] = s))
                }
            } else a = Fe(a === t ? a.splice(c, a.length) : a), m ? m(null, t, a, r) : j.apply(t, a)
        })
    }

    function Be(e, t) {
        var n, y, m, v, x, r, i = [],
            o = [],
            s = de[e + " "];
        if (!s) {
            for (n = (t = t || Me(e)).length; n--;)((s = function f(e) {
                for (var r, t, n, i = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, u = Ie(function (e) {
                    return e === r
                }, s, !0), l = Ie(function (e) {
                    return -1 < b.call(r, e)
                }, s, !0), c = [function (e, t, n) {
                    return e = !o && (n || t != ie) || ((r = t).nodeType ? u : l)(e, t, n), r = null, e
                }]; a < i; a++)
                    if (t = w.relative[e[a].type]) c = [Ie(We(c), t)];
                    else {
                        if ((t = w.filter[e[a].type].apply(null, e[a].matches))[A]) {
                            for (n = ++a; n < i && !w.relative[e[n].type]; n++);
                            return $e(1 < a && We(c), 1 < a && Re(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(ee, "$1"), t, a < n && f(e.slice(a, n)), n < i && f(e = e.slice(n)), n < i && Re(e))
                        }
                        c.push(t)
                    } return We(c)
            }(t[n]))[A] ? i : o).push(s);
            (s = de(e, (y = o, v = 0 < (m = i).length, x = 0 < y.length, r = function (e, t, n, r, i) {
                var o, s, a, u = 0,
                    l = "0",
                    c = e && [],
                    f = [],
                    d = ie,
                    p = e || x && w.find.TAG("*", i),
                    h = D += null == d ? 1 : Math.random() || .1,
                    g = p.length;
                for (i && (ie = t == E || t || i); l !== g && null != (o = p[l]); l++) {
                    if (x && o) {
                        for (s = 0, t || o.ownerDocument == E || (Oe(o), n = !k); a = y[s++];)
                            if (a(o, t || E, n)) {
                                j.call(r, o);
                                break
                            } i && (D = h)
                    }
                    v && ((o = !a && o) && u--, e) && c.push(o)
                }
                if (u += l, v && l !== u) {
                    for (s = 0; a = m[s++];) a(c, f, t, n);
                    if (e) {
                        if (0 < u)
                            for (; l--;) c[l] || f[l] || (f[l] = K.call(r));
                        f = Fe(f)
                    }
                    j.apply(r, f), i && !e && 0 < f.length && 1 < u + m.length && S.uniqueSort(r)
                }
                return i && (D = h, ie = d), c
            }, v ? u(r) : r))).selector = e
        }
        return s
    }

    function _e(e, t, n, r) {
        var i, o, s, a, u, l = "function" == typeof e && e,
            c = !r && Me(e = l.selector || e);
        if (n = n || [], 1 === c.length) {
            if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && k && w.relative[o[1].type]) {
                if (!(t = (w.find.ID(s.matches[0].replace(f, d), t) || [])[0])) return n;
                l && (t = t.parentNode), e = e.slice(o.shift().value.length)
            }
            for (i = Te.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !w.relative[a = s.type]);)
                if ((u = w.find[a]) && (r = u(s.matches[0].replace(f, d), ke.test(o[0].type) && He(t.parentNode) || t))) {
                    if (o.splice(i, 1), e = r.length && Re(o)) break;
                    return j.apply(n, r), n
                }
        }
        return (l || Be(e, c))(r, t, !k, n, !t || ke.test(e) && He(t.parentNode) || t), n
    }
    Pe.prototype = w.filters = w.pseudos, w.setFilters = new Pe, g.sortStable = A.split("").sort(he).join("") === A, Oe(), g.sortDetached = Ne(function (e) {
        return 1 & e.compareDocumentPosition(E.createElement("fieldset"))
    }), S.find = N, S.expr[":"] = S.expr.pseudos, S.unique = S.uniqueSort, N.compile = Be, N.select = _e, N.setDocument = Oe, N.tokenize = Me, N.escape = S.escapeSelector, N.getText = S.text, N.isXML = S.isXMLDoc, N.selectors = S.expr, N.support = S.support, N.uniqueSort = S.uniqueSort;
    var ze = function (e, t, n) {
            for (var r = [], i = n !== undefined;
                 (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                } return r
        },
        Xe = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ue = S.expr.match.needsContext,
        Ve = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function Ge(e, n, r) {
        return v(n) ? S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function (e) {
            return -1 < b.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(Ge(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(Ge(this, e || [], !0))
        },
        is: function (e) {
            return !!Ge(this, "string" == typeof e && Ue.test(e) ? S(e) : e || [], !1).length
        }
    });
    var Ye, Je = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Ke = ((S.fn.init = function (e, t, n) {
            if (e) {
                if (n = n || Ye, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? n.ready !== undefined ? n.ready(e) : e(S) : S.makeArray(e, this);
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Je.exec(e)) || !r[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                if (r[1]) {
                    if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), Ve.test(r[1]) && S.isPlainObject(t))
                        for (var r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
                } else(n = C.getElementById(r[2])) && (this[0] = n, this.length = 1)
            }
            return this
        }).prototype = S.fn, Ye = S(C), /^(?:parents|prev(?:Until|All))/),
        Qe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function Ze(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    S.fn.extend({
        has: function (e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                s = "string" != typeof e && S(e);
            if (!Ue.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? b.call(S(e), this[0]) : b.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function (e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (e) {
            return ze(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return ze(e, "parentNode", n)
        },
        next: function (e) {
            return Ze(e, "nextSibling")
        },
        prev: function (e) {
            return Ze(e, "previousSibling")
        },
        nextAll: function (e) {
            return ze(e, "nextSibling")
        },
        prevAll: function (e) {
            return ze(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return ze(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return ze(e, "previousSibling", n)
        },
        siblings: function (e) {
            return Xe((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return Xe(e.firstChild)
        },
        contents: function (e) {
            return null != e.contentDocument && R(e.contentDocument) ? e.contentDocument : (x(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function (r, i) {
        S.fn[r] = function (e, t) {
            var n = S.map(this, i, e);
            return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (Qe[r] || S.uniqueSort(n), Ke.test(r)) && n.reverse(), this.pushStack(n)
        }
    });
    var q = /[^\x20\t\r\n\f]+/g;

    function et(e) {
        return e
    }

    function tt(e) {
        throw e
    }

    function nt(e, t, n, r) {
        var i;
        try {
            e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(undefined, [e].slice(r))
        } catch (e) {
            n.apply(undefined, [e])
        }
    }
    S.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(q) || [], function (e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, s, a = [],
            u = [],
            l = -1,
            c = function () {
                for (s = s || r.once, o = i = !0; u.length; l = -1)
                    for (t = u.shift(); ++l < a.length;) !1 === a[l].apply(t[0], t[1]) && r.stopOnFalse && (l = a.length, t = !1);
                r.memory || (t = !1), i = !1, s && (a = t ? [] : "")
            },
            f = {
                add: function () {
                    return a && (t && !i && (l = a.length - 1, u.push(t)), function n(e) {
                        S.each(e, function (e, t) {
                            v(t) ? r.unique && f.has(t) || a.push(t) : t && t.length && "string" !== G(t) && n(t)
                        })
                    }(arguments), t) && !i && c(), this
                },
                remove: function () {
                    return S.each(arguments, function (e, t) {
                        for (var n; - 1 < (n = S.inArray(t, a, n));) a.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (e) {
                    return e ? -1 < S.inArray(e, a) : 0 < a.length
                },
                empty: function () {
                    return a = a && [], this
                },
                disable: function () {
                    return s = u = [], a = t = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return s = u = [], t || i || (a = t = ""), this
                },
                locked: function () {
                    return !!s
                },
                fireWith: function (e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i) || c(), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function (e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                s = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return a.done(arguments).fail(arguments), this
                    },
                    "catch": function (e) {
                        return s.then(null, e)
                    },
                    pipe: function () {
                        var i = arguments;
                        return S.Deferred(function (r) {
                            S.each(o, function (e, t) {
                                var n = v(i[t[4]]) && i[t[4]];
                                a[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function (t, n, r) {
                        var l = 0;

                        function c(o, s, a, u) {
                            return function () {
                                var n = this,
                                    r = arguments,
                                    t = function () {
                                        var e, t;
                                        if (!(o < l)) {
                                            if ((e = a.apply(n, r)) === s.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? u ? t.call(e, c(l, s, et, u), c(l, s, tt, u)) : (l++, t.call(e, c(l, s, et, u), c(l, s, tt, u), c(l, s, et, s.notifyWith))) : (a !== et && (n = undefined, r = [e]), (u || s.resolveWith)(n, r))
                                        }
                                    },
                                    i = u ? t : function () {
                                        try {
                                            t()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, i.error), l <= o + 1 && (a !== tt && (n = undefined, r = [e]), s.rejectWith(n, r))
                                        }
                                    };
                                o ? i() : (S.Deferred.getErrorHook ? i.error = S.Deferred.getErrorHook() : S.Deferred.getStackHook && (i.error = S.Deferred.getStackHook()), T.setTimeout(i))
                            }
                        }
                        return S.Deferred(function (e) {
                            o[0][3].add(c(0, e, v(r) ? r : et, e.notifyWith)), o[1][3].add(c(0, e, v(t) ? t : et)), o[2][3].add(c(0, e, v(n) ? n : tt))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? S.extend(e, s) : s
                    }
                },
                a = {};
            return S.each(o, function (e, t) {
                var n = t[2],
                    r = t[5];
                s[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), a[t[0]] = function () {
                    return a[t[0] + "With"](this === a ? undefined : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function (e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = a.call(arguments),
                o = S.Deferred(),
                s = function (t) {
                    return function (e) {
                        r[t] = this, i[t] = 1 < arguments.length ? a.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (nt(e, o.done(s(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
            for (; t--;) nt(i[t], s(t), o.reject);
            return o.promise()
        }
    });
    var rt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
        it = (S.Deferred.exceptionHook = function (e, t) {
            T.console && T.console.warn && e && rt.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, S.readyException = function (e) {
            T.setTimeout(function () {
                throw e
            })
        }, S.Deferred());

    function ot() {
        C.removeEventListener("DOMContentLoaded", ot), T.removeEventListener("load", ot), S.ready()
    }
    S.fn.ready = function (e) {
        return it.then(e)["catch"](function (e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || it.resolveWith(C, [S])
        }
    }), S.ready.then = it.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? T.setTimeout(S.ready) : (C.addEventListener("DOMContentLoaded", ot), T.addEventListener("load", ot));
    var c = function (e, t, n, r, i, o, s) {
            var a = 0,
                u = e.length,
                l = null == n;
            if ("object" === G(n))
                for (a in i = !0, n) c(e, t, a, n[a], !0, o, s);
            else if (r !== undefined && (i = !0, v(r) || (s = !0), t = l ? s ? (t.call(e, r), null) : (l = t, function (e, t, n) {
                return l.call(S(e), n)
            }) : t))
                for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        st = /^-ms-/,
        at = /-([a-z])/g;

    function ut(e, t) {
        return t.toUpperCase()
    }

    function L(e) {
        return e.replace(st, "ms-").replace(at, ut)
    }
    var lt = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function ct() {
        this.expando = S.expando + ct.uid++
    }
    ct.uid = 1, ct.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, lt(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[L(t)] = n;
            else
                for (r in t) i[L(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][L(t)]
        },
        access: function (e, t, n) {
            return t === undefined || t && "string" == typeof t && n === undefined ? this.get(e, t) : (this.set(e, t, n), n !== undefined ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (r !== undefined) {
                if (t !== undefined) {
                    n = (t = Array.isArray(t) ? t.map(L) : (t = L(t)) in r ? [t] : t.match(q) || []).length;
                    for (; n--;) delete r[t[n]]
                }
                t !== undefined && !S.isEmptyObject(r) || (e.nodeType ? e[this.expando] = undefined : delete e[this.expando])
            }
        },
        hasData: function (e) {
            e = e[this.expando];
            return e !== undefined && !S.isEmptyObject(e)
        }
    };
    var m = new ct,
        l = new ct,
        ft = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        dt = /[A-Z]/g;

    function pt(e, t, n) {
        var r, i;
        if (n === undefined && 1 === e.nodeType)
            if (r = "data-" + t.replace(dt, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : ft.test(i) ? JSON.parse(i) : i)
                } catch (o) {}
                l.set(e, t, n)
            } else n = undefined;
        return n
    }
    S.extend({
        hasData: function (e) {
            return l.hasData(e) || m.hasData(e)
        },
        data: function (e, t, n) {
            return l.access(e, t, n)
        },
        removeData: function (e, t) {
            l.remove(e, t)
        },
        _data: function (e, t, n) {
            return m.access(e, t, n)
        },
        _removeData: function (e, t) {
            m.remove(e, t)
        }
    }), S.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0],
                s = o && o.attributes;
            if (n !== undefined) return "object" == typeof n ? this.each(function () {
                l.set(this, n)
            }) : c(this, function (e) {
                var t;
                if (o && e === undefined) return (t = l.get(o, n)) !== undefined || (t = pt(o, n)) !== undefined ? t : void 0;
                this.each(function () {
                    l.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = l.get(o), 1 === o.nodeType) && !m.get(o, "hasDataAttrs")) {
                for (t = s.length; t--;) s[t] && 0 === (r = s[t].name).indexOf("data-") && (r = L(r.slice(5)), pt(o, r, i[r]));
                m.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function (e) {
            return this.each(function () {
                l.remove(this, e)
            })
        }
    }), S.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return r = m.get(e, t = (t || "fx") + "queue"), n && (!r || Array.isArray(n) ? r = m.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return m.get(e, n) || m.access(e, n, {
                empty: S.Callbacks("once memory").add(function () {
                    m.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : n === undefined ? this : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                S.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; s--;)(n = m.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ht = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
        gt = ["Top", "Right", "Bottom", "Left"],
        yt = C.documentElement,
        mt = function (e) {
            return S.contains(e.ownerDocument, e)
        },
        vt = {
            composed: !0
        },
        xt = (yt.getRootNode && (mt = function (e) {
            return S.contains(e.ownerDocument, e) || e.getRootNode(vt) === e.ownerDocument
        }), function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && mt(e) && "none" === S.css(e, "display")
        });

    function bt(e, t, n, r) {
        var i, o, s = 20,
            a = r ? function () {
                return r.cur()
            } : function () {
                return S.css(e, t, "")
            },
            u = a(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && ht.exec(S.css(e, t));
        if (c && c[3] !== l) {
            for (l = l || c[3], c = +(u /= 2) || 1; s--;) S.style(e, t, c + l), (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0), c /= o;
            S.style(e, t, (c *= 2) + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r) && (r.unit = l, r.start = c, r.end = i), i
    }
    var wt = {};

    function Tt(e, t) {
        for (var n, r, i, o, s, a = [], u = 0, l = e.length; u < l; u++)(r = e[u]).style && (n = r.style.display, t ? ("none" === n && (a[u] = m.get(r, "display") || null, a[u] || (r.style.display = "")), "" === r.style.display && xt(r) && (a[u] = (s = o = void 0, o = (i = r).ownerDocument, i = i.nodeName, (s = wt[i]) || (o = o.body.appendChild(o.createElement(i)), s = S.css(o, "display"), o.parentNode.removeChild(o), wt[i] = s = "none" === s ? "block" : s), s))) : "none" !== n && (a[u] = "none", m.set(r, "display", n)));
        for (u = 0; u < l; u++) null != a[u] && (e[u].style.display = a[u]);
        return e
    }
    S.fn.extend({
        show: function () {
            return Tt(this, !0)
        },
        hide: function () {
            return Tt(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                xt(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var Ct = /^(?:checkbox|radio)$/i,
        St = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Et = /^$|^module$|\/(?:java|ecma)script/i,
        h = (o = C.createDocumentFragment().appendChild(C.createElement("div")), (s = C.createElement("input")).setAttribute("type", "radio"), s.setAttribute("checked", "checked"), s.setAttribute("name", "t"), o.appendChild(s), g.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, o.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!o.cloneNode(!0).lastChild.defaultValue, o.innerHTML = "<option></option>", g.option = !!o.lastChild, {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        });

    function y(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return t === undefined || t && x(e, t) ? S.merge([e], n) : n
    }

    function kt(e, t) {
        for (var n = 0, r = e.length; n < r; n++) m.set(e[n], "globalEval", !t || m.get(t[n], "globalEval"))
    }
    h.tbody = h.tfoot = h.colgroup = h.caption = h.thead, h.th = h.td, g.option || (h.optgroup = h.option = [1, "<select multiple='multiple'>", "</select>"]);
    var jt = /<|&#?\w+;/;

    function At(e, t, n, r, i) {
        for (var o, s, a, u, l, c = t.createDocumentFragment(), f = [], d = 0, p = e.length; d < p; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === G(o)) S.merge(f, o.nodeType ? [o] : o);
                else if (jt.test(o)) {
                    for (s = s || c.appendChild(t.createElement("div")), a = (St.exec(o) || ["", ""])[1].toLowerCase(), a = h[a] || h._default, s.innerHTML = a[1] + S.htmlPrefilter(o) + a[2], l = a[0]; l--;) s = s.lastChild;
                    S.merge(f, s.childNodes), (s = c.firstChild).textContent = ""
                } else f.push(t.createTextNode(o));
        for (c.textContent = "", d = 0; o = f[d++];)
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (u = mt(o), s = y(c.appendChild(o), "script"), u && kt(s), n)
                for (l = 0; o = s[l++];) Et.test(o.type || "") && n.push(o);
        return c
    }
    var Dt = /^([^.]*)(?:\.(.+)|)/;

    function Nt() {
        return !0
    }

    function qt() {
        return !1
    }

    function Lt(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (r = r || n, n = undefined), t) Lt(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = undefined) : null == i && ("string" == typeof n ? (i = r, r = undefined) : (i = r, r = n, n = undefined)), !1 === i) i = qt;
        else if (!i) return e;
        return 1 === o && (s = i, (i = function (e) {
            return S().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = S.guid++)), e.each(function () {
            S.event.add(this, t, i, r, n)
        })
    }

    function Ht(e, r, t) {
        t ? (m.set(e, r, !1), S.event.add(e, r, {
            namespace: !1,
            handler: function (e) {
                var t, n = m.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (n)(S.event.special[r] || {}).delegateType && e.stopPropagation();
                    else if (n = a.call(arguments), m.set(this, r, n), this[r](), t = m.get(this, r), m.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t
                } else n && (m.set(this, r, S.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Nt)
            }
        })) : m.get(e, r) === undefined && S.event.add(e, r, Nt)
    }
    S.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o, s, a, u, l, c, f, d, p, h = m.get(t);
            if (lt(t))
                for (n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(yt, i), n.guid || (n.guid = S.guid++), a = (a = h.events) || (h.events = Object.create(null)), s = (s = h.handle) || (h.handle = function (e) {
                    return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : undefined
                }), u = (e = (e || "").match(q) || [""]).length; u--;) f = p = (d = Dt.exec(e[u]) || [])[1], d = (d[2] || "").split(".").sort(), f && (l = S.event.special[f] || {}, f = (i ? l.delegateType : l.bindType) || f, l = S.event.special[f] || {}, p = S.extend({
                    type: f,
                    origType: p,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                }, o), (c = a[f]) || ((c = a[f] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(t, r, d, s)) || t.addEventListener && t.addEventListener(f, s), l.add && (l.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)), i ? c.splice(c.delegateCount++, 0, p) : c.push(p), S.event.global[f] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, s, a, u, l, c, f, d, p, h, g, y = m.hasData(e) && m.get(e);
            if (y && (u = y.events)) {
                for (l = (t = (t || "").match(q) || [""]).length; l--;)
                    if (p = g = (a = Dt.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
                        for (f = S.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || S.removeEvent(e, p, y.handle), delete u[p])
                    } else
                        for (p in u) S.event.remove(e, p + t[l], n, r, !0);
                S.isEmptyObject(u) && m.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, r, i, o, s = new Array(arguments.length),
                a = S.event.fix(e),
                e = (m.get(this, "events") || Object.create(null))[a.type] || [],
                u = S.event.special[a.type] || {};
            for (s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (o = S.event.handlers.call(this, a, e), t = 0;
                     (r = o[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                         (i = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== i.namespace && !a.rnamespace.test(i.namespace) || (a.handleObj = i, a.data = i.data, (i = ((S.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) !== undefined && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, s, a = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], s = {}, n = 0; n < u; n++) s[i = (r = t[n]).selector + " "] === undefined && (s[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), s[i] && o.push(r);
                        o.length && a.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && a.push({
                elem: l,
                handlers: t.slice(u)
            }), a
        },
        addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    e = this || e;
                    return Ct.test(e.type) && e.click && x(e, "input") && Ht(e, "click", !0), !1
                },
                trigger: function (e) {
                    e = this || e;
                    return Ct.test(e.type) && e.click && x(e, "input") && Ht(e, "click"), !0
                },
                _default: function (e) {
                    e = e.target;
                    return Ct.test(e.type) && e.click && x(e, "input") && m.get(e, "click") || x(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function (e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? Nt : qt, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: qt,
        isPropagationStopped: qt,
        isImmediatePropagationStopped: qt,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Nt, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Nt, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Nt, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function (r, i) {
        function o(e) {
            var t, n;
            C.documentMode ? (t = m.get(this, "handle"), (n = S.event.fix(e)).type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n)) : S.event.simulate(i, e.target, S.event.fix(e))
        }
        S.event.special[r] = {
            setup: function () {
                var e;
                if (Ht(this, r, !0), !C.documentMode) return !1;
                (e = m.get(this, i)) || this.addEventListener(i, o), m.set(this, i, (e || 0) + 1)
            },
            trigger: function () {
                return Ht(this, r), !0
            },
            teardown: function () {
                var e;
                if (!C.documentMode) return !1;
                (e = m.get(this, i) - 1) ? m.set(this, i, e): (this.removeEventListener(i, o), m.remove(this, i))
            },
            _default: function (e) {
                return m.get(e.target, r)
            },
            delegateType: i
        }, S.event.special[i] = {
            setup: function () {
                var e = this.ownerDocument || this.document || this,
                    t = C.documentMode ? this : e,
                    n = m.get(t, i);
                n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), m.set(t, i, (n || 0) + 1)
            },
            teardown: function () {
                var e = this.ownerDocument || this.document || this,
                    t = C.documentMode ? this : e,
                    n = m.get(t, i) - 1;
                n ? m.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), m.remove(t, i))
            }
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function (e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function (e, t, n, r) {
            return Lt(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return Lt(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
            else {
                if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = qt), this.each(function () {
                    S.event.remove(this, e, n, t)
                });
                for (i in e) this.off(i, t, e[i])
            }
            return this
        }
    });
    var Ot = /<script|<style|<link/i,
        Pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Mt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function Rt(e, t) {
        return x(e, "table") && x(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function It(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Wt(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Ft(e, t) {
        var n, r, i, o;
        if (1 === t.nodeType) {
            if (m.hasData(e) && (o = m.get(e).events))
                for (i in m.remove(t, "handle events"), o)
                    for (n = 0, r = o[i].length; n < r; n++) S.event.add(t, i, o[i][n]);
            l.hasData(e) && (e = l.access(e), e = S.extend({}, e), l.set(t, e))
        }
    }

    function $t(n, r, i, o) {
        r = I(r);
        var e, t, s, a, u, l, c = 0,
            f = n.length,
            d = f - 1,
            p = r[0],
            h = v(p);
        if (h || 1 < f && "string" == typeof p && !g.checkClone && Pt.test(p)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = p.call(this, e, t.html())), $t(t, r, i, o)
        });
        if (f && (t = (e = At(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (a = (s = S.map(y(e, "script"), It)).length; c < f; c++) u = e, c !== d && (u = S.clone(u, !0, !0), a) && S.merge(s, y(u, "script")), i.call(n[c], u, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument, S.map(s, Wt), c = 0; c < a; c++) u = s[c], Et.test(u.type || "") && !m.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : V(u.textContent.replace(Mt, ""), u, l))
        }
        return n
    }

    function Bt(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(y(r)), r.parentNode && (n && mt(r) && kt(y(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function (e) {
            return e
        },
        clone: function (e, t, n) {
            var r, i, o, s, a, u, l, c = e.cloneNode(!0),
                f = mt(e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (s = y(c), r = 0, i = (o = y(e)).length; r < i; r++) a = o[r], u = s[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && Ct.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || y(e), s = s || y(c), r = 0, i = o.length; r < i; r++) Ft(o[r], s[r]);
                else Ft(e, c);
            return 0 < (s = y(c, "script")).length && kt(s, !f && y(e, "script")), c
        },
        cleanData: function (e) {
            for (var t, n, r, i = S.event.special, o = 0;
                 (n = e[o]) !== undefined; o++)
                if (lt(n)) {
                    if (t = n[m.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[m.expando] = undefined
                    }
                    n[l.expando] && (n[l.expando] = undefined)
                }
        }
    }), S.fn.extend({
        detach: function (e) {
            return Bt(this, e, !0)
        },
        remove: function (e) {
            return Bt(this, e)
        },
        text: function (e) {
            return c(this, function (e) {
                return e === undefined ? S.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return $t(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Rt(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return $t(this, arguments, function (e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Rt(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function () {
            return $t(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return $t(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return S.clone(this, e, t)
            })
        },
        html: function (e) {
            return c(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (e === undefined && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ot.test(e) && !h[(St.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var n = [];
            return $t(this, arguments, function (e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(y(this)), t) && t.replaceChild(e, this)
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, s) {
        S.fn[e] = function (e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[s](t), W.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var _t, zt, Xt, Ut, Vt, Gt, Yt, H, Jt = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
        Kt = /^--/,
        Qt = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t = t && t.opener ? t : T).getComputedStyle(e)
        },
        Zt = function (e, t, n) {
            var r, i = {};
            for (r in t) i[r] = e.style[r], e.style[r] = t[r];
            for (r in n = n.call(e), t) e.style[r] = i[r];
            return n
        },
        en = new RegExp(gt.join("|"), "i");

    function tn() {
        var e;
        H && (Yt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", H.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", yt.appendChild(Yt).appendChild(H), e = T.getComputedStyle(H), _t = "1%" !== e.top, Gt = 12 === nn(e.marginLeft), H.style.right = "60%", Ut = 36 === nn(e.right), zt = 36 === nn(e.width), H.style.position = "absolute", Xt = 12 === nn(H.offsetWidth / 3), yt.removeChild(Yt), H = null)
    }

    function nn(e) {
        return Math.round(parseFloat(e))
    }

    function rn(e, t, n) {
        var r, i = Kt.test(t),
            o = e.style;
        return (n = n || Qt(e)) && (r = n.getPropertyValue(t) || n[t], "" !== (r = i ? r && (r.replace(ee, "$1") || undefined) : r) || mt(e) || (r = S.style(e, t)), !g.pixelBoxStyles()) && Jt.test(r) && en.test(t) && (i = o.width, e = o.minWidth, t = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = n.width, o.width = i, o.minWidth = e, o.maxWidth = t), r !== undefined ? r + "" : r
    }

    function on(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    Yt = C.createElement("div"), (H = C.createElement("div")).style && (H.style.backgroundClip = "content-box", H.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === H.style.backgroundClip, S.extend(g, {
        boxSizingReliable: function () {
            return tn(), zt
        },
        pixelBoxStyles: function () {
            return tn(), Ut
        },
        pixelPosition: function () {
            return tn(), _t
        },
        reliableMarginLeft: function () {
            return tn(), Gt
        },
        scrollboxSize: function () {
            return tn(), Xt
        },
        reliableTrDimensions: function () {
            var e, t, n;
            return null == Vt && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", yt.appendChild(e).appendChild(t).appendChild(n), n = T.getComputedStyle(t), Vt = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight, yt.removeChild(e)), Vt
        }
    }));
    var sn = ["Webkit", "Moz", "ms"],
        an = C.createElement("div").style,
        un = {};

    function ln(e) {
        var t = S.cssProps[e] || un[e];
        return t || (e in an ? e : un[e] = function (e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = sn.length; n--;)
                if ((e = sn[n] + t) in an) return e
        }(e) || e)
    }
    var cn = /^(none|table(?!-c[ea]).+)/,
        fn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dn = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function pn(e, t, n) {
        var r = ht.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function hn(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            u = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += S.css(e, n + gt[s], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + gt[s], !0, i)), "margin" !== n && (u -= S.css(e, "border" + gt[s] + "Width", !0, i))) : (u += S.css(e, "padding" + gt[s], !0, i), "padding" !== n ? u += S.css(e, "border" + gt[s] + "Width", !0, i) : a += S.css(e, "border" + gt[s] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - .5)) || 0), u + l
    }

    function gn(e, t, n) {
        var r = Qt(e),
            i = (!g.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            s = rn(e, t, r),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Jt.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!g.boxSizingReliable() && i || !g.reliableTrDimensions() && x(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), o = a in e) && (s = e[a]), (s = parseFloat(s) || 0) + hn(e, t, n || (i ? "border" : "content"), o, r, s) + "px"
    }

    function O(e, t, n, r, i) {
        return new O.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) return "" === (t = rn(e, "opacity")) ? "1" : t
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = L(t),
                    u = Kt.test(t),
                    l = e.style;
                if (u || (t = ln(a)), s = S.cssHooks[t] || S.cssHooks[a], n === undefined) return s && "get" in s && (i = s.get(e, !1, r)) !== undefined ? i : l[t];
                "string" === (o = typeof n) && (i = ht.exec(n)) && i[1] && (n = bt(e, t, i), o = "number"), null == n || n != n || ("number" !== o || u || (n += i && i[3] || (S.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && (n = s.set(e, n, r)) === undefined) || (u ? l.setProperty(t, n) : l[t] = n)
            }
        },
        css: function (e, t, n, r) {
            var i, o = L(t);
            return Kt.test(t) || (t = ln(o)), "normal" === (i = (i = (o = S.cssHooks[t] || S.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : i) === undefined ? rn(e, t, r) : i) && t in dn && (i = dn[t]), ("" === n || n) && (o = parseFloat(i), !0 === n || isFinite(o)) ? o || 0 : i
        }
    }), S.each(["height", "width"], function (e, s) {
        S.cssHooks[s] = {
            get: function (e, t, n) {
                if (t) return !cn.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? gn(e, s, n) : Zt(e, fn, function () {
                    return gn(e, s, n)
                })
            },
            set: function (e, t, n) {
                var r = Qt(e),
                    i = !g.scrollboxSize() && "absolute" === r.position,
                    o = (i || n) && "border-box" === S.css(e, "boxSizing", !1, r),
                    n = n ? hn(e, s, n, o, r) : 0;
                return o && i && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(r[s]) - hn(e, s, "border", !1, r) - .5)), n && (o = ht.exec(t)) && "px" !== (o[3] || "px") && (e.style[s] = t, t = S.css(e, s)), pn(0, t, n)
            }
        }
    }), S.cssHooks.marginLeft = on(g.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(rn(e, "marginLeft")) || e.getBoundingClientRect().left - Zt(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (i, o) {
        S.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + gt[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = pn)
    }), S.fn.extend({
        css: function (e, t) {
            return c(this, function (e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (r = Qt(e), i = t.length; s < i; s++) o[t[s]] = S.css(e, t[s], !1, r);
                    return o
                }
                return n !== undefined ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = O).prototype = {
        constructor: O,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = O.propHooks[this.prop];
            return (e && e.get ? e : O.propHooks._default).get(this)
        },
        run: function (e) {
            var t, n = O.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : O.propHooks._default).set(this), this
        }
    }).init.prototype = O.prototype, (O.propHooks = {
        _default: {
            get: function (e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = S.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function (e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ln(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = O.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = O.prototype.init, S.fx.step = {};
    var yn, mn, vn = /^(?:toggle|show|hide)$/,
        xn = /queueHooks$/;

    function bn() {
        mn && (!1 === C.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(bn) : T.setTimeout(bn, S.fx.interval), S.fx.tick())
    }

    function wn() {
        return T.setTimeout(function () {
            yn = undefined
        }), yn = Date.now()
    }

    function Tn(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = gt[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function Cn(e, t, n) {
        for (var r, i = (P.tweeners[t] || []).concat(P.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function P(i, e, t) {
        var n, o, r, s, a, u, l, c = 0,
            f = P.prefilters.length,
            d = S.Deferred().always(function () {
                delete p.elem
            }),
            p = function () {
                if (!o) {
                    for (var e = yn || wn(), e = Math.max(0, h.startTime + h.duration - e), t = 1 - (e / h.duration || 0), n = 0, r = h.tweens.length; n < r; n++) h.tweens[n].run(t);
                    if (d.notifyWith(i, [h, t, e]), t < 1 && r) return e;
                    r || d.notifyWith(i, [h, 1, 0]), d.resolveWith(i, [h])
                }
                return !1
            },
            h = d.promise({
                elem: i,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: yn || wn(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    t = S.Tween(i, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(t), t
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? h.tweens.length : 0;
                    if (!o) {
                        for (o = !0; t < n; t++) h.tweens[t].run(1);
                        e ? (d.notifyWith(i, [h, 1, 0]), d.resolveWith(i, [h, e])) : d.rejectWith(i, [h, e])
                    }
                    return this
                }
            }),
            g = h.props,
            y = g,
            m = h.opts.specialEasing;
        for (r in y)
            if (a = m[s = L(r)], u = y[r], Array.isArray(u) && (a = u[1], u = y[r] = u[0]), r !== s && (y[s] = u, delete y[r]), (l = S.cssHooks[s]) && "expand" in l)
                for (r in u = l.expand(u), delete y[s], u) r in y || (y[r] = u[r], m[r] = a);
            else m[s] = a;
        for (; c < f; c++)
            if (n = P.prefilters[c].call(h, i, g, h.opts)) return v(n.stop) && (S._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(g, Cn, h), v(h.opts.start) && h.opts.start.call(i, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), S.fx.timer(S.extend(p, {
            elem: i,
            anim: h,
            queue: h.opts.queue
        })), h
    }
    S.Animation = S.extend(P, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return bt(n.elem, e, ht.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            for (var n, r = 0, i = (e = v(e) ? (t = e, ["*"]) : e.match(q)).length; r < i; r++) n = e[r], P.tweeners[n] = P.tweeners[n] || [], P.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var r, i, o, s, a, u, l, c = "width" in t || "height" in t,
                f = this,
                d = {},
                p = e.style,
                h = e.nodeType && xt(e),
                g = m.get(e, "fxshow");
            for (r in n.queue || (null == (s = S._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                s.unqueued || a()
            }), s.unqueued++, f.always(function () {
                f.always(function () {
                    s.unqueued--, S.queue(e, "fx").length || s.empty.fire()
                })
            })), t)
                if (i = t[r], vn.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                        if ("show" !== i || !g || g[r] === undefined) continue;
                        h = !0
                    }
                    d[r] = g && g[r] || S.style(e, r)
                } if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in c && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (l = g && g.display) && (l = m.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (Tt([e], !0), l = e.style.display || l, c = S.css(e, "display"), Tt([e]))), "inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (f.done(function () {
                    p.display = l
                }), null == l && (c = p.display, l = "none" === c ? "" : c)), p.display = "inline-block"), n.overflow && (p.overflow = "hidden", f.always(function () {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), u = !1, d) u || (g ? "hidden" in g && (h = g.hidden) : g = m.access(e, "fxshow", {
                    display: l
                }), o && (g.hidden = !h), h && Tt([e], !0), f.done(function () {
                    for (r in h || Tt([e]), m.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = Cn(h ? g[r] : 0, r, f), r in g || (g[r] = u.start, h && (u.end = u.start, u.start = 0))
        }],
        prefilter: function (e, t) {
            t ? P.prefilters.unshift(e) : P.prefilters.push(e)
        }
    }), S.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            v(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(xt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                e = function () {
                    var e = P(this, S.extend({}, t), o);
                    (i || m.get(this, "finish")) && e.stop(!0)
                };
            return e.finish = e, i || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function (i, e, o) {
            var s = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = undefined), e && this.queue(i || "fx", []), this.each(function () {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = m.get(this);
                if (t) r[t] && r[t].stop && s(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && xn.test(t) && s(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function (s) {
            return !1 !== s && (s = s || "fx"), this.each(function () {
                var e, t = m.get(this),
                    n = t[s + "queue"],
                    r = t[s + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function (e, r) {
        var i = S.fn[r];
        S.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Tn(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: Tn("show"),
        slideUp: Tn("hide"),
        slideToggle: Tn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, r) {
        S.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function () {
        var e, t = 0,
            n = S.timers;
        for (yn = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), yn = undefined
    }, S.fx.timer = function (e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function () {
        mn || (mn = !0, bn())
    }, S.fx.stop = function () {
        mn = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function (r, e) {
        return r = S.fx && S.fx.speeds[r] || r, this.queue(e = e || "fx", function (e, t) {
            var n = T.setTimeout(e, r);
            t.stop = function () {
                T.clearTimeout(n)
            }
        })
    }, s = C.createElement("input"), o = C.createElement("select").appendChild(C.createElement("option")), s.type = "checkbox", g.checkOn = "" !== s.value, g.optSelected = o.selected, (s = C.createElement("input")).value = "t", s.type = "radio", g.radioValue = "t" === s.value;
    var Sn, En = S.expr.attrHandle,
        kn = (S.fn.extend({
            attr: function (e, t) {
                return c(this, S.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    S.removeAttr(this, e)
                })
            }
        }), S.extend({
            attr: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? Sn : undefined)), n !== undefined ? null === n ? void S.removeAttr(e, t) : i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""), n) : !(i && "get" in i && null !== (r = i.get(e, t))) && null == (r = S.find.attr(e, t)) ? undefined : r)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        var n;
                        if (!g.radioValue && "radio" === t && x(e, "input")) return n = e.value, e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            removeAttr: function (e, t) {
                var n, r = 0,
                    i = t && t.match(q);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++];) e.removeAttribute(n)
            }
        }), Sn = {
            set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var s = En[t] || S.find.attr;
            En[t] = function (e, t, n) {
                var r, i, o = t.toLowerCase();
                return n || (i = En[o], En[o] = r, r = null != s(e, t, n) ? o : null, En[o] = i), r
            }
        }), /^(?:input|select|textarea|button)$/i),
        jn = /^(?:a|area)$/i;

    function An(e) {
        return (e.match(q) || []).join(" ")
    }

    function Dn(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Nn(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || []
    }
    S.fn.extend({
        prop: function (e, t) {
            return c(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : kn.test(e.nodeName) || jn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), g.optSelected || (S.propHooks.selected = {
        get: function (e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function (e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, s;
            return v(t) ? this.each(function (e) {
                S(this).addClass(t.call(this, e, Dn(this)))
            }) : (e = Nn(t)).length ? this.each(function () {
                if (r = Dn(this), n = 1 === this.nodeType && " " + An(r) + " ") {
                    for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    s = An(n), r !== s && this.setAttribute("class", s)
                }
            }) : this
        },
        removeClass: function (t) {
            var e, n, r, i, o, s;
            return v(t) ? this.each(function (e) {
                S(this).removeClass(t.call(this, e, Dn(this)))
            }) : arguments.length ? (e = Nn(t)).length ? this.each(function () {
                if (r = Dn(this), n = 1 === this.nodeType && " " + An(r) + " ") {
                    for (o = 0; o < e.length; o++)
                        for (i = e[o]; - 1 < n.indexOf(" " + i + " ");) n = n.replace(" " + i + " ", " ");
                    s = An(n), r !== s && this.setAttribute("class", s)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function (t, n) {
            var e, r, i, o, s = typeof t,
                a = "string" == s || Array.isArray(t);
            return v(t) ? this.each(function (e) {
                S(this).toggleClass(t.call(this, e, Dn(this), n), n)
            }) : "boolean" == typeof n && a ? n ? this.addClass(t) : this.removeClass(t) : (e = Nn(t), this.each(function () {
                if (a)
                    for (o = S(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else t !== undefined && "boolean" != s || ((r = Dn(this)) && m.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", !r && !1 !== t && m.get(this, "__className__") || ""))
            }))
        },
        hasClass: function (e) {
            for (var t, n = 0, r = " " + e + " "; t = this[n++];)
                if (1 === t.nodeType && -1 < (" " + An(Dn(t)) + " ").indexOf(r)) return !0;
            return !1
        }
    });
    var qn = /\r/g,
        Ln = (S.fn.extend({
            val: function (t) {
                var n, e, r, i = this[0];
                return arguments.length ? (r = v(t), this.each(function (e) {
                    1 !== this.nodeType || (null == (e = r ? t.call(this, e, S(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = S.map(e, function (e) {
                        return null == e ? "" : e + ""
                    })), (n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in n && n.set(this, e, "value") !== undefined) || (this.value = e)
                })) : i ? (n = S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) && "get" in n && (e = n.get(i, "value")) !== undefined ? e : "string" == typeof (e = i.value) ? e.replace(qn, "") : null == e ? "" : e : void 0
            }
        }), S.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = S.find.attr(e, "value");
                        return null != t ? t : An(S.text(e))
                    }
                },
                select: {
                    get: function (e) {
                        for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type, o = i ? null : [], s = i ? r + 1 : n.length, a = r < 0 ? s : i ? r : 0; a < s; a++)
                            if (((t = n[a]).selected || a === r) && !t.disabled && (!t.parentNode.disabled || !x(t.parentNode, "optgroup"))) {
                                if (t = S(t).val(), i) return t;
                                o.push(t)
                            } return o
                    },
                    set: function (e, t) {
                        for (var n, r, i = e.options, o = S.makeArray(t), s = i.length; s--;)((r = i[s]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), S.each(["radio", "checkbox"], function () {
            S.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
                }
            }, g.checkOn || (S.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), T.location),
        Hn = {
            guid: Date.now()
        },
        On = /\?/,
        Pn = (S.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new T.DOMParser).parseFromString(e, "text/xml")
            } catch (r) {}
            return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
                return e.textContent
            }).join("\n") : e)), t
        }, /^(?:focusinfocus|focusoutblur)$/),
        Mn = function (e) {
            e.stopPropagation()
        },
        Rn = (S.extend(S.event, {
            trigger: function (e, t, n, r) {
                var i, o, s, a, u, l, c, f = [n || C],
                    d = B.call(e, "type") ? e.type : e,
                    p = B.call(e, "namespace") ? e.namespace.split(".") : [],
                    h = c = o = n = n || C;
                if (3 !== n.nodeType && 8 !== n.nodeType && !Pn.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), a = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), l = S.event.special[d] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                    if (!r && !l.noBubble && !X(n)) {
                        for (s = l.delegateType || d, Pn.test(s + d) || (h = h.parentNode); h; h = h.parentNode) f.push(h), o = h;
                        o === (n.ownerDocument || C) && f.push(o.defaultView || o.parentWindow || T)
                    }
                    for (i = 0;
                         (h = f[i++]) && !e.isPropagationStopped();) c = h, e.type = 1 < i ? s : l.bindType || d, (u = (m.get(h, "events") || Object.create(null))[e.type] && m.get(h, "handle")) && u.apply(h, t), (u = a && h[a]) && u.apply && lt(h) && (e.result = u.apply(h, t), !1 === e.result) && e.preventDefault();
                    return e.type = d, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(f.pop(), t) || !lt(n) || a && v(n[d]) && !X(n) && ((o = n[a]) && (n[a] = null), S.event.triggered = d, e.isPropagationStopped() && c.addEventListener(d, Mn), n[d](), e.isPropagationStopped() && c.removeEventListener(d, Mn), S.event.triggered = undefined, o) && (n[a] = o), e.result
                }
            },
            simulate: function (e, t, n) {
                n = S.extend(new S.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                S.event.trigger(n, null, t)
            }
        }), S.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    S.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0)
            }
        }), /\[\]$/),
        In = /\r?\n/g,
        Wn = /^(?:submit|button|image|reset|file)$/i,
        Fn = /^(?:input|select|textarea|keygen)/i;
    S.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                t = v(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) ! function o(n, e, r, i) {
                if (Array.isArray(e)) S.each(e, function (e, t) {
                    r || Rn.test(n) ? i(n, t) : o(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
                });
                else if (r || "object" !== G(e)) i(n, e);
                else
                    for (var t in e) o(n + "[" + t + "]", e[t], r, i)
            }(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function () {
            return S.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Fn.test(this.nodeName) && !Wn.test(e) && (this.checked || !Ct.test(e))
            }).map(function (e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(In, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(In, "\r\n")
                }
            }).get()
        }
    });
    var $n = /%20/g,
        Bn = /#.*$/,
        _n = /([?&])_=[^&]*/,
        zn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Xn = /^(?:GET|HEAD)$/,
        Un = /^\/\//,
        Vn = {},
        Gn = {},
        Yn = "*/".concat("*"),
        Jn = C.createElement("a");

    function Kn(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(q) || [];
            if (v(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Qn(t, r, i, o) {
        var s = {},
            a = t === Gn;

        function u(e) {
            var n;
            return s[e] = !0, S.each(t[e] || [], function (e, t) {
                t = t(r, i, o);
                return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (r.dataTypes.unshift(t), u(t), !1)
            }), n
        }
        return u(r.dataTypes[0]) || !s["*"] && u("*")
    }

    function Zn(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== undefined && ((i[n] ? e : r = r || {})[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }

    function er(e, t, n, r) {
        var i, o, s, a, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
                    if (!(s = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                                break
                            } if (!0 !== s)
                        if (s && e["throws"]) t = s(t);
                        else try {
                            t = s(t)
                        } catch (f) {
                            return {
                                state: "parsererror",
                                error: s ? f : "No conversion from " + u + " to " + o
                            }
                        }
                }
        return {
            state: "success",
            data: t
        }
    }
    Jn.href = Ln.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ln.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ln.protocol),
            global: !0,
            processData: !0,
            "async": !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Yn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Zn(Zn(e, S.ajaxSettings), t) : Zn(S.ajaxSettings, e)
        },
        ajaxPrefilter: Kn(Vn),
        ajaxTransport: Kn(Gn),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = undefined);
            var u, l, c, n, f, d, p, r, h = S.ajaxSetup({}, t = t || {}),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? S(g) : S.event,
                m = S.Deferred(),
                v = S.Callbacks("once memory"),
                x = h.statusCode || {},
                i = {},
                o = {},
                s = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (d) {
                            if (!n)
                                for (n = {}; t = zn.exec(c);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return d ? c : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == d && (e = o[e.toLowerCase()] = o[e.toLowerCase()] || e, i[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == d && (h.mimeType = e), this
                    },
                    statusCode: function (e) {
                        if (e)
                            if (d) b.always(e[b.status]);
                            else
                                for (var t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        e = e || s;
                        return u && u.abort(e), a(0, e), this
                    }
                };
            if (m.promise(b), h.url = ((e || h.url || Ln.href) + "").replace(Un, Ln.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(q) || [""], null == h.crossDomain) {
                e = C.createElement("a");
                try {
                    e.href = h.url, e.href = e.href, h.crossDomain = Jn.protocol + "//" + Jn.host != e.protocol + "//" + e.host
                } catch (w) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = S.param(h.data, h.traditional)), Qn(Vn, h, t, b), !d) {
                for (r in (p = S.event && h.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Xn.test(h.type), l = h.url.replace(Bn, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace($n, "+")) : (e = h.url.slice(l.length), h.data && (h.processData || "string" == typeof h.data) && (l += (On.test(l) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (l = l.replace(_n, "$1"), e = (On.test(l) ? "&" : "?") + "_=" + Hn.guid++ + e), h.url = l + e), h.ifModified && (S.lastModified[l] && b.setRequestHeader("If-Modified-Since", S.lastModified[l]), S.etag[l]) && b.setRequestHeader("If-None-Match", S.etag[l]), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Yn + "; q=0.01" : "") : h.accepts["*"]), h.headers) b.setRequestHeader(r, h.headers[r]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, b, h) || d)) return b.abort();
                if (s = "abort", v.add(h.complete), b.done(h.success), b.fail(h.error), u = Qn(Gn, h, t, b)) {
                    if (b.readyState = 1, p && y.trigger("ajaxSend", [b, h]), d) return b;
                    h["async"] && 0 < h.timeout && (f = T.setTimeout(function () {
                        b.abort("timeout")
                    }, h.timeout));
                    try {
                        d = !1, u.send(i, a)
                    } catch (w) {
                        if (d) throw w;
                        a(-1, w)
                    }
                } else a(-1, "No Transport")
            }
            return b;

            function a(e, t, n, r) {
                var i, o, s, a = t;
                d || (d = !0, f && T.clearTimeout(f), u = undefined, c = r || "", b.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    for (var r, i, o, s, a = e.contents, u = e.dataTypes;
                         "*" === u[0];) u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            s = s || i
                        }
                        o = o || s
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(h, b, n)), !r && -1 < S.inArray("script", h.dataTypes) && S.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function () {}), s = er(h, s, b, r), r ? (h.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (S.lastModified[l] = n), n = b.getResponseHeader("etag")) && (S.etag[l] = n), 204 === e || "HEAD" === h.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, i = s.data, r = !(o = s.error))) : (o = a, !e && a || (a = "error", e < 0 && (e = 0))), b.status = e, b.statusText = (t || a) + "", r ? m.resolveWith(g, [i, a, b]) : m.rejectWith(g, [b, a, o]), b.statusCode(x), x = undefined, p && y.trigger(r ? "ajaxSuccess" : "ajaxError", [b, h, r ? i : o]), v.fireWith(g, [b, a]), p && (y.trigger("ajaxComplete", [b, h]), --S.active || S.event.trigger("ajaxStop")))
            }
        },
        getJSON: function (e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return S.get(e, undefined, t, "script")
        }
    }), S.each(["get", "post"], function (e, i) {
        S[i] = function (e, t, n, r) {
            return v(t) && (r = r || n, n = t, t = undefined), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function (e) {
        for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function (e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            "async": !1,
            global: !1,
            converters: {
                "text script": function () {}
            },
            dataFilter: function (e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function (e) {
            return this[0] && (v(e) && (e = e.call(this[0])), e = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (n) {
            return v(n) ? this.each(function (e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function (t) {
            var n = v(t);
            return this.each(function (e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function (e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function () {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    };
    var tr = {
            0: 200,
            1223: 204
        },
        nr = S.ajaxSettings.xhr(),
        rr = (g.cors = !!nr && "withCredentials" in nr, g.ajax = nr = !!nr, S.ajaxTransport(function (o) {
            var s, a;
            if (g.cors || nr && !o.crossDomain) return {
                send: function (e, t) {
                    var n, r = o.xhr();
                    if (r.open(o.type, o.url, o["async"], o.username, o.password), o.xhrFields)
                        for (n in o.xhrFields) r[n] = o.xhrFields[n];
                    for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                    s = function (e) {
                        return function () {
                            s && (s = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(tr[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }, r.onload = s(), a = r.onerror = r.ontimeout = s("error"), r.onabort !== undefined ? r.onabort = a : r.onreadystatechange = function () {
                        4 === r.readyState && T.setTimeout(function () {
                            s && a()
                        })
                    }, s = s("abort");
                    try {
                        r.send(o.hasContent && o.data || null)
                    } catch (i) {
                        if (s) throw i
                    }
                },
                abort: function () {
                    s && s()
                }
            }
        }), S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }), S.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return S.globalEval(e), e
                }
            }
        }), S.ajaxPrefilter("script", function (e) {
            e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), S.ajaxTransport("script", function (n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs) return {
                send: function (e, t) {
                    r = S("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function (e) {
                        r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                    }), C.head.appendChild(r[0])
                },
                abort: function () {
                    i && i()
                }
            }
        }), []),
        ir = /(=)\?(?=&|$)|\?\?/,
        or = (S.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = rr.pop() || S.expando + "_" + Hn.guid++;
                return this[e] = !0, e
            }
        }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r, i, o, s = !1 !== e.jsonp && (ir.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ir.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(ir, "$1" + r) : !1 !== e.jsonp && (e.url += (On.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                return o || S.error(r + " was not called"), o[0]
            }, e.dataTypes[0] = "json", i = T[r], T[r] = function () {
                o = arguments
            }, n.always(function () {
                i === undefined ? S(T).removeProp(r) : T[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, rr.push(r)), o && v(i) && i(o[0]), o = i = undefined
            }), "script"
        }), g.createHTMLDocument = ((e = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === e.childNodes.length), S.parseHTML = function (e, t, n) {
            var r;
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), r = !n && [], (n = Ve.exec(e)) ? [t.createElement(n[1])] : (n = At([e], t, r), r && r.length && S(r).remove(), S.merge([], n.childNodes)))
        }, S.fn.load = function (e, t, n) {
            var r, i, o, s = this,
                a = e.indexOf(" ");
            return -1 < a && (r = An(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = undefined) : t && "object" == typeof t && (i = "POST"), 0 < s.length && S.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments, s.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
            }).always(n && function (e, t) {
                s.each(function () {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, S.expr.pseudos.animated = function (t) {
            return S.grep(S.timers, function (e) {
                return t === e.elem
            }).length
        }, S.offset = {
            setOffset: function (e, t, n) {
                var r, i, o, s, a = S.css(e, "position"),
                    u = S(e),
                    l = {};
                "static" === a && (e.style.position = "relative"), o = u.offset(), r = S.css(e, "top"), s = S.css(e, "left"), a = ("absolute" === a || "fixed" === a) && -1 < (r + s).indexOf("auto") ? (i = (a = u.position()).top, a.left) : (i = parseFloat(r) || 0, parseFloat(s) || 0), null != (t = v(t) ? t.call(e, n, S.extend({}, o)) : t).top && (l.top = t.top - o.top + i), null != t.left && (l.left = t.left - o.left + a), "using" in t ? t.using.call(e, l) : u.css(l)
            }
        }, S.fn.extend({
            offset: function (t) {
                var e, n;
                return arguments.length ? t === undefined ? this : this.each(function (e) {
                    S.offset.setOffset(this, t, e)
                }) : (n = this[0]) ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function () {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - S.css(r, "marginTop", !0),
                        left: t.left - i.left - S.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
                    return e || yt
                })
            }
        }), S.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, i) {
            var o = "pageYOffset" === i;
            S.fn[t] = function (e) {
                return c(this, function (e, t, n) {
                    var r;
                    if (X(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), n === undefined) return r ? r[i] : e[t];
                    r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
                }, t, e, arguments.length)
            }
        }), S.each(["top", "left"], function (e, n) {
            S.cssHooks[n] = on(g.pixelPosition, function (e, t) {
                if (t) return t = rn(e, n), Jt.test(t) ? S(e).position()[n] + "px" : t
            })
        }), S.each({
            Height: "height",
            Width: "width"
        }, function (s, a) {
            S.each({
                padding: "inner" + s,
                content: a,
                "": "outer" + s
            }, function (r, o) {
                S.fn[o] = function (e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e),
                        i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return c(this, function (e, t, n) {
                        var r;
                        return X(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s])) : n === undefined ? S.css(e, t, i) : S.style(e, t, n, i)
                    }, a, n ? e : undefined, n)
                }
            })
        }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            S.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), S.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function (e, t) {
                return this.on("mouseenter", e).on("mouseleave", t || e)
            }
        }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
            S.fn[n] = function (e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }), /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g);
    return S.proxy = function (e, t) {
        var n, r;
        return "string" == typeof t && (r = e[t], t = e, e = r), v(e) ? (n = a.call(arguments, 2), (r = function () {
            return e.apply(t || this, n.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, r) : undefined
    }, S.holdReady = function (e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = x, S.isFunction = v, S.isWindow = X, S.camelCase = L, S.type = G, S.now = Date.now, S.isNumeric = function (e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function (e) {
        return null == e ? "" : (e + "").replace(or, "$1")
    }, "object" == typeof layui && layui.define(function (e) {
        e("jquery", layui.$ = S)
    }), S
});
layui.define(["jquery", "lay"], function (e) {
    "use strict";
    var u = layui.$,
        f = layui.lay;
    e("component", function (a) {
        var t = (a = u.extend(!0, {
                isRenderWithoutElem: !1,
                isRenderOnEvent: !0,
                isDeepReload: !1
            }, a)).name,
            d = "lay-" + t + "-id",
            c = {
                config: {},
                index: layui[t] ? layui[t].index + 1e4 : 0,
                CONST: u.extend(!0, {
                    MOD_NAME: t,
                    MOD_ID: d,
                    CLASS_THIS: "layui-this",
                    CLASS_SHOW: "layui-show",
                    CLASS_HIDE: "layui-hide",
                    CLASS_HIDEV: "layui-hide-v",
                    CLASS_DISABLED: "layui-disabled",
                    CLASS_NONE: "layui-none"
                }, a.CONST),
                set: function (e) {
                    return u.extend(!0, this.config, e), this
                },
                on: function (e, n) {
                    return layui.onevent.call(this, t, e, n)
                }
            },
            l = function () {
                var n = this,
                    e = n.config,
                    e = {
                        config: e,
                        id: e.id,
                        reload: function (e) {
                            n.reload.call(n, e)
                        }
                    };
                return "function" == typeof a.extendsInstance && u.extend(!0, e, a.extendsInstance.call(n)), e
            },
            n = function (e) {
                var n = this;
                n.index = ++c.index, n.config = u.extend(!0, {}, n.config, c.config, e), "function" == typeof a.beforeInit && a.beforeInit.call(n, n.config), n.init()
            };
        return n.prototype.config = a.config, n.prototype.reload = function (e, n) {
            var t = this;
            t.config = u.extend(a.isDeepReload, {}, t.config, e), t.init(!0, n)
        }, n.prototype.init = function (e, n) {
            var t = this,
                i = t.config,
                o = u(i.elem);
            if (1 < o.length) return layui.each(o, function () {
                c.render(u.extend({}, i, {
                    elem: this
                }))
            }), t;
            var r = f.options(o[0]);
            if (e ? i = t.config = u.extend(r, i) : u.extend(i, r), !e && o.attr(d)) return (r = l.getThis(o.attr(d))) ? r.reload(i, n) : void 0;
            i.elem = u(i.elem), i.id = f.hasOwn(i, "id") ? i.id : o.attr("id") || t.index, l.that[i.id] = t, "function" == typeof a.beforeRender && a.beforeRender.call(t, i);
            n = function () {
                c.cache.id[i.id] = null, o.attr(d, i.id), t.render(e)
            };
            if (!o[0]) return a.isRenderWithoutElem ? n() : null;
            (a.isRenderOnEvent && i.show || !a.isRenderOnEvent) && n(), "function" == typeof a.events && t.events()
        }, n.prototype.render = a.render, n.prototype.events = a.events, n.prototype.cache = function (e, n, t) {
            var i = this.config.elem,
                o = d + "-cache";
            if (i) {
                var r = i.data(o) || {};
                if (n === undefined) return r[e];
                t ? delete r[e] : r[e] = n, i.data(o, r)
            }
        }, n.prototype.removeCache = function (e) {
            this.cache(e, null, !0)
        }, l.that = {}, l.getThis = c.getThis = function (e) {
            if (e === undefined) throw new Error("ID argument required");
            return l.that[e]
        }, c.cache = {
            id: {}
        }, c.Class = n, c.reload = function (e, n) {
            e = l.getThis(e);
            if (e) return e.reload(n), l.call(e)
        }, c.render = function (e) {
            e = new n(e);
            return l.call(e)
        }, c
    })
});
! function (p, m) {
    "use strict";
    var h, g, e, n = p.layui && layui.define,
        f = {
            getPath: (e = document.currentScript && "SCRIPT" === document.currentScript.tagName.toUpperCase() ? document.currentScript.src : function () {
                for (var e, t = document.getElementsByTagName("script"), i = t.length - 1, n = i; 0 < n; n--)
                    if ("interactive" === t[n].readyState) {
                        e = t[n].src;
                        break
                    } return e || t[i].src
            }(), (p.LAYUI_GLOBAL || {}).layer_dir || e.substring(0, e.lastIndexOf("/") + 1)),
            config: {
                removeFocus: !0
            },
            end: {},
            beforeEnd: {},
            events: {
                resize: {}
            },
            minStackIndex: 0,
            minStackArr: [],
            btn: ["\u786e\u5b9a", "\u53d6\u6d88"],
            type: ["dialog", "page", "iframe", "loading", "tips"],
            getStyle: function (e, t) {
                e = e.currentStyle || p.getComputedStyle(e, null);
                return e[e.getPropertyValue ? "getPropertyValue" : "getAttribute"](t)
            },
            link: function (e, i, t) {
                var n, a, o, s, r, l;
                v.path && (n = document.getElementsByTagName("head")[0], a = document.createElement("link"), o = ((t = "string" == typeof i ? i : t) || e).replace(/\.|\//g, ""), s = "layuicss-" + o, r = "creating", l = 0, a.rel = "stylesheet", a.href = v.path + e, a.id = s, document.getElementById(s) || n.appendChild(a), "function" == typeof i) && ! function c(e) {
                    var t = document.getElementById(s);
                    return 100 < ++l ? p.console && console.error(o + ".css: Invalid") : void(1989 === parseInt(f.getStyle(t, "width")) ? (e === r && t.removeAttribute("lay-status"), t.getAttribute("lay-status") === r ? setTimeout(c, 100) : i()) : (t.setAttribute("lay-status", r), setTimeout(function () {
                        c(r)
                    }, 100)))
                }()
            }
        },
        v = {
            v: "3.7.0",
            ie: (e = navigator.userAgent.toLowerCase(), !!(p.ActiveXObject || "ActiveXObject" in p) && ((e.match(/msie\s(\d+)/) || [])[1] || "11")),
            index: p.layer && p.layer.v ? 1e5 : 0,
            path: f.getPath,
            config: function (e, t) {
                return v.cache = f.config = h.extend({}, f.config, e = e || {}), v.path = f.config.path || v.path, "string" == typeof e.extend && (e.extend = [e.extend]), f.config.path && v.ready(), e.extend && (n ? layui.addcss("modules/layer/" + e.extend) : f.link("css/" + e.extend)), this
            },
            ready: function (e) {
                var t = "layer",
                    i = (n ? "modules/" : "css/") + "layer.css?v=" + v.v;
                return n ? layui["layui.all"] ? "function" == typeof e && e() : layui.addcss(i, e, t) : f.link(i, e, t), this
            },
            alert: function (e, t, i) {
                var n = "function" == typeof t;
                return v.open(h.extend({
                    content: e,
                    yes: i = n ? t : i
                }, n ? {} : t))
            },
            confirm: function (e, t, i, n) {
                var a = "function" == typeof t;
                return a && (n = i, i = t), v.open(h.extend({
                    content: e,
                    btn: f.btn,
                    yes: i,
                    btn2: n
                }, a ? {} : t))
            },
            msg: function (e, t, i) {
                var n = "function" == typeof t,
                    a = f.config.skin,
                    a = (a ? a + " " + a + "-msg" : "") || "layui-layer-msg",
                    o = u.anim.length - 1;
                return n && (i = t), v.open(h.extend({
                    content: e,
                    time: 3e3,
                    shade: !1,
                    skin: a,
                    title: !1,
                    closeBtn: !1,
                    btn: !1,
                    resize: !1,
                    end: i,
                    removeFocus: !1
                }, n && !f.config.skin ? {
                    skin: a + " layui-layer-hui",
                    anim: o
                } : (-1 !== (t = t || {}).icon && (t.icon !== m || f.config.skin) || (t.skin = a + " " + (t.skin || "layui-layer-hui")), t)))
            },
            load: function (e, t) {
                return v.open(h.extend({
                    type: 3,
                    icon: e || 0,
                    resize: !1,
                    shade: .01,
                    removeFocus: !1
                }, t))
            },
            tips: function (e, t, i) {
                return v.open(h.extend({
                    type: 4,
                    content: [e, t],
                    closeBtn: !1,
                    time: 3e3,
                    shade: !1,
                    resize: !1,
                    fixed: !1,
                    maxWidth: 260,
                    removeFocus: !1
                }, i))
            }
        },
        t = function (e) {
            var t = this,
                i = function () {
                    t.creat()
                };
            t.index = ++v.index, t.config.maxWidth = h(g).width() - 30, t.config = h.extend({}, t.config, f.config, e), document.body ? i() : setTimeout(function () {
                i()
            }, 30)
        },
        u = (t.pt = t.prototype, ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"]),
        y = (u.anim = {
            0: "layer-anim-00",
            1: "layer-anim-01",
            2: "layer-anim-02",
            3: "layer-anim-03",
            4: "layer-anim-04",
            5: "layer-anim-05",
            6: "layer-anim-06",
            slideDown: "layer-anim-slide-down",
            slideLeft: "layer-anim-slide-left",
            slideUp: "layer-anim-slide-up",
            slideRight: "layer-anim-slide-right"
        }, u.SHADE = "layui-layer-shade", u.MOVE = "layui-layer-move", "LAYUI-LAYER-SHADE-KEY"),
        l = "LAYUI_LAYER_CONTENT_RECORD_HEIGHT",
        i = (t.pt.config = {
            type: 0,
            shade: .3,
            fixed: !0,
            move: u[1],
            title: "\u4fe1\u606f",
            offset: "auto",
            area: "auto",
            closeBtn: 1,
            icon: -1,
            time: 0,
            zIndex: 19891014,
            maxWidth: 360,
            anim: 0,
            isOutAnim: !0,
            minStack: !0,
            moveType: 1,
            resize: !0,
            scrollbar: !0,
            tips: 2
        }, t.pt.vessel = function (e, t) {
            var i, n = this.index,
                a = this.config,
                o = a.zIndex + n,
                s = "object" == typeof a.title,
                r = a.maxmin && (1 === a.type || 2 === a.type),
                s = a.title ? '<div class="layui-layer-title" style="' + (s ? a.title[1] : "") + '">' + (s ? a.title[0] : a.title) + "</div>" : "";
            return a.zIndex = o, t([a.shade ? '<div class="' + u.SHADE + '" id="' + u.SHADE + n + '" times="' + n + '" style="z-index:' + (o - 1) + '; "></div>' : "", '<div class="' + u[0] + " layui-layer-" + f.type[a.type] + (0 != a.type && 2 != a.type || a.shade ? "" : " layui-layer-border") + " " + (a.skin || "") + '" id="' + u[0] + n + '" type="' + f.type[a.type] + '" times="' + n + '" showtime="' + a.time + '" conType="' + (e ? "object" : "string") + '" style="z-index: ' + o + "; width:" + a.area[0] + ";height:" + a.area[1] + ";position:" + (a.fixed ? "fixed;" : "absolute;") + '">' + (e && 2 != a.type ? "" : s) + "<div" + (a.id ? ' id="' + a.id + '"' : "") + ' class="layui-layer-content' + (0 == a.type && -1 !== a.icon ? " layui-layer-padding" : "") + (3 == a.type ? " layui-layer-loading" + a.icon : "") + '">' + (n = ["layui-icon-tips", "layui-icon-success", "layui-icon-error", "layui-icon-question", "layui-icon-lock", "layui-icon-face-cry", "layui-icon-face-smile"], o = "layui-anim layui-anim-rotate layui-anim-loop", 0 == a.type && -1 !== a.icon ? '<i class="layui-layer-face layui-icon ' + ((i = 16 == a.icon ? "layui-icon layui-icon-loading " + o : i) || n[a.icon] || n[0]) + '"></i>' : 3 == a.type ? (i = ["layui-icon-loading", "layui-icon-loading-1"], 2 == a.icon ? '<div class="layui-layer-loading-2 ' + o + '"></div>' : '<i class="layui-layer-loading-icon layui-icon ' + (i[a.icon] || i[0]) + " " + o + '"></i>') : "") + ((1 != a.type || !e) && a.content || "") + '</div><div class="layui-layer-setwin">' + (n = [], r && (n.push('<span class="layui-layer-min"></span>'), n.push('<span class="layui-layer-max"></span>')), a.closeBtn && n.push('<span class="layui-icon layui-icon-close ' + [u[7], u[7] + (a.title ? a.closeBtn : 4 == a.type ? "1" : "2")].join(" ") + '"></span>'), n.join("")) + "</div>" + (a.btn ? function () {
                var e = "";
                "string" == typeof a.btn && (a.btn = [a.btn]);
                for (var t, i = 0, n = a.btn.length; i < n; i++) e += '<a class="' + u[6] + i + '">' + a.btn[i] + "</a>";
                return '<div class="' + (t = [u[6]], a.btnAlign && t.push(u[6] + "-" + a.btnAlign), t.join(" ")) + '">' + e + "</div>"
            }() : "") + (a.resize ? '<span class="layui-layer-resize"></span>' : "") + "</div>"], s, h('<div class="' + u.MOVE + '" id="' + u.MOVE + '"></div>')), this
        }, t.pt.creat = function () {
            var e, t, i, n, a = this,
                o = a.config,
                s = a.index,
                r = "object" == typeof (d = o.content),
                l = h("body"),
                c = function (e) {
                    var t;
                    o.shift && (o.anim = o.shift), u.anim[o.anim] && (t = "layer-anim " + u.anim[o.anim], e.addClass(t).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                        h(this).removeClass(t)
                    }))
                };
            if (o.id && h("." + u[0]).find("#" + o.id)[0]) e = h("#" + o.id).closest("." + u[0]), t = e.attr("times"), i = e.data("config"), n = h("#" + u.SHADE + t), "min" === (e.data("maxminStatus") || {}) ? v.restore(t) : i.hideOnClose && (n.show(), e.show(), c(e), setTimeout(function () {
                n.css({
                    opacity: n.data(y)
                })
            }, 10));
            else {
                switch (o.removeFocus && document.activeElement && document.activeElement.blur(), "string" == typeof o.area && (o.area = "auto" === o.area ? ["", ""] : [o.area, ""]), 6 == v.ie && (o.fixed = !1), o.type) {
                    case 0:
                        o.btn = "btn" in o ? o.btn : f.btn[0], v.closeAll("dialog");
                        break;
                    case 2:
                        var d = o.content = r ? o.content : [o.content || "", "auto"];
                        o.content = '<iframe scrolling="' + (o.content[1] || "auto") + '" allowtransparency="true" id="' + u[4] + s + '" name="' + u[4] + s + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + o.content[0] + '"></iframe>';
                        break;
                    case 3:
                        delete o.title, delete o.closeBtn, -1 === o.icon && o.icon, v.closeAll("loading");
                        break;
                    case 4:
                        r || (o.content = [o.content, "body"]), o.follow = o.content[1], o.content = o.content[0] + '<i class="layui-layer-TipsG"></i>', delete o.title, o.tips = "object" == typeof o.tips ? o.tips : [o.tips, !0], o.tipsMore || v.closeAll("tips")
                }
                a.vessel(r, function (e, t, i) {
                    l.append(e[0]), r ? 2 == o.type || 4 == o.type ? h("body").append(e[1]) : d.parents("." + u[0])[0] || (d.data("display", d.css("display")).show().addClass("layui-layer-wrap").wrap(e[1]), h("#" + u[0] + s).find("." + u[5]).before(t)) : l.append(e[1]), h("#" + u.MOVE)[0] || l.append(f.moveElem = i), a.layero = h("#" + u[0] + s), a.shadeo = h("#" + u.SHADE + s), o.scrollbar || f.setScrollbar(s)
                }).auto(s), a.shadeo.css({
                    "background-color": o.shade[1] || "#000",
                    opacity: o.shade[0] || o.shade,
                    transition: o.shade[2] || ""
                }), a.shadeo.data(y, o.shade[0] || o.shade), 2 == o.type && 6 == v.ie && a.layero.find("iframe").attr("src", d[0]), 4 == o.type ? a.tips() : (a.offset(), parseInt(f.getStyle(document.getElementById(u.MOVE), "z-index")) || (a.layero.css("visibility", "hidden"), v.ready(function () {
                    a.offset(), a.layero.css("visibility", "visible")
                }))), !o.fixed || f.events.resize[a.index] || (f.events.resize[a.index] = function () {
                    a.resize()
                }, g.on("resize", f.events.resize[a.index])), a.layero.data("config", o), o.time <= 0 || setTimeout(function () {
                    v.close(a.index)
                }, o.time), a.move().callback(), c(a.layero)
            }
        }, t.pt.resize = function () {
            var e = this,
                t = e.config;
            e.offset(), (/^\d+%$/.test(t.area[0]) || /^\d+%$/.test(t.area[1])) && e.auto(e.index), 4 == t.type && e.tips()
        }, t.pt.auto = function (e) {
            var t = this.config,
                i = h("#" + u[0] + e),
                n = (("" === t.area[0] || "auto" === t.area[0]) && 0 < t.maxWidth && (v.ie && v.ie < 8 && t.btn && i.width(i.innerWidth()), i.outerWidth() > t.maxWidth) && i.width(t.maxWidth), [i.innerWidth(), i.innerHeight()]),
                a = i.find(u[1]).outerHeight() || 0,
                o = i.find("." + u[6]).outerHeight() || 0,
                e = function (e) {
                    (e = i.find(e)).height(n[1] - a - o - 2 * (0 | parseFloat(e.css("padding-top"))))
                };
            return 2 === t.type ? e("iframe") : "" === t.area[1] || "auto" === t.area[1] ? 0 < t.maxHeight && i.outerHeight() > t.maxHeight ? (n[1] = t.maxHeight, e("." + u[5])) : t.fixed && n[1] >= g.height() && (n[1] = g.height(), e("." + u[5])) : e("." + u[5]), this
        }, t.pt.offset = function () {
            var e = this,
                t = e.config,
                i = e.layero,
                n = [i.outerWidth(), i.outerHeight()],
                a = "object" == typeof t.offset;
            e.offsetTop = (g.height() - n[1]) / 2, e.offsetLeft = (g.width() - n[0]) / 2, a ? (e.offsetTop = t.offset[0], e.offsetLeft = t.offset[1] || e.offsetLeft) : "auto" !== t.offset && ("t" === t.offset ? e.offsetTop = 0 : "r" === t.offset ? e.offsetLeft = g.width() - n[0] : "b" === t.offset ? e.offsetTop = g.height() - n[1] : "l" === t.offset ? e.offsetLeft = 0 : "lt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = 0) : "lb" === t.offset ? (e.offsetTop = g.height() - n[1], e.offsetLeft = 0) : "rt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = g.width() - n[0]) : "rb" === t.offset ? (e.offsetTop = g.height() - n[1], e.offsetLeft = g.width() - n[0]) : e.offsetTop = t.offset), t.fixed || (e.offsetTop = /%$/.test(e.offsetTop) ? g.height() * parseFloat(e.offsetTop) / 100 : parseFloat(e.offsetTop), e.offsetLeft = /%$/.test(e.offsetLeft) ? g.width() * parseFloat(e.offsetLeft) / 100 : parseFloat(e.offsetLeft), e.offsetTop += g.scrollTop(), e.offsetLeft += g.scrollLeft()), "min" === i.data("maxminStatus") && (e.offsetTop = g.height() - (i.find(u[1]).outerHeight() || 0), e.offsetLeft = i.css("left")), i.css({
                top: e.offsetTop,
                left: e.offsetLeft
            })
        }, t.pt.tips = function () {
            var e = this.config,
                t = this.layero,
                i = [t.outerWidth(), t.outerHeight()],
                n = h(e.follow),
                a = {
                    width: (n = n[0] ? n : h("body")).outerWidth(),
                    height: n.outerHeight(),
                    top: n.offset().top,
                    left: n.offset().left
                },
                o = t.find(".layui-layer-TipsG"),
                n = e.tips[0];
            e.tips[1] || o.remove(), a.autoLeft = function () {
                0 < a.left + i[0] - g.width() ? (a.tipLeft = a.left + a.width - i[0], o.css({
                    right: 12,
                    left: "auto"
                })) : a.tipLeft = a.left
            }, a.where = [function () {
                a.autoLeft(), a.tipTop = a.top - i[1] - 10, o.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", e.tips[1])
            }, function () {
                a.tipLeft = a.left + a.width + 10, a.tipTop = a.top - (.75 * a.height < 21 ? 21 - .5 * a.height : 0), a.tipTop = Math.max(a.tipTop, 0), o.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", e.tips[1])
            }, function () {
                a.autoLeft(), a.tipTop = a.top + a.height + 10, o.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", e.tips[1])
            }, function () {
                a.tipLeft = a.left - i[0] - 10, a.tipTop = a.top - (.75 * a.height < 21 ? 21 - .5 * a.height : 0), a.tipTop = Math.max(a.tipTop, 0), o.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", e.tips[1])
            }], a.where[n - 1](), 1 === n ? a.top - (g.scrollTop() + i[1] + 16) < 0 && a.where[2]() : 2 === n ? 0 < g.width() - (a.left + a.width + i[0] + 16) || a.where[3]() : 3 === n ? 0 < a.top - g.scrollTop() + a.height + i[1] + 16 - g.height() && a.where[0]() : 4 === n && 0 < i[0] + 16 - a.left && a.where[1](), t.find("." + u[5]).css({
                "background-color": e.tips[1],
                "padding-right": e.closeBtn ? "30px" : ""
            }), t.css({
                left: a.tipLeft - (e.fixed ? g.scrollLeft() : 0),
                top: a.tipTop - (e.fixed ? g.scrollTop() : 0)
            })
        }, t.pt.move = function () {
            var n = this,
                a = n.config,
                e = h(document),
                o = n.layero,
                l = ["LAY_MOVE_DICT", "LAY_RESIZE_DICT"],
                t = o.find(a.move),
                i = o.find(".layui-layer-resize");
            return a.move && t.css("cursor", "move"), t.on("mousedown", function (e) {
                var t, i;
                e.button || (t = h(this), i = {}, a.move && (i.layero = o, i.config = a, i.offset = [e.clientX - parseFloat(o.css("left")), e.clientY - parseFloat(o.css("top"))], t.data(l[0], i), f.eventMoveElem = t, f.moveElem.css("cursor", "move").show()), e.preventDefault())
            }), i.on("mousedown", function (e) {
                var t = h(this),
                    i = {};
                a.resize && (i.layero = o, i.config = a, i.offset = [e.clientX, e.clientY], i.index = n.index, i.area = [o.outerWidth(), o.outerHeight()], t.data(l[1], i), f.eventResizeElem = t, f.moveElem.css("cursor", "se-resize").show()), e.preventDefault()
            }), f.docEvent || (e.on("mousemove", function (e) {
                var t, i, n, a, o, s, r;
                f.eventMoveElem && (t = (a = f.eventMoveElem.data(l[0]) || {}).layero, o = a.config, s = e.clientX - a.offset[0], r = e.clientY - a.offset[1], i = "fixed" === t.css("position"), e.preventDefault(), a.stX = i ? 0 : g.scrollLeft(), a.stY = i ? 0 : g.scrollTop(), o.moveOut || (i = g.width() - t.outerWidth() + a.stX, n = g.height() - t.outerHeight() + a.stY, i < (s = s < a.stX ? a.stX : s) && (s = i), n < (r = r < a.stY ? a.stY : r) && (r = n)), t.css({
                    left: s,
                    top: r
                })), f.eventResizeElem && (o = (a = f.eventResizeElem.data(l[1]) || {}).config, s = e.clientX - a.offset[0], r = e.clientY - a.offset[1], e.preventDefault(), v.style(a.index, {
                    width: a.area[0] + s,
                    height: a.area[1] + r
                }), o.resizing) && o.resizing(a.layero)
            }).on("mouseup", function (e) {
                var t, i;
                f.eventMoveElem && (i = (t = f.eventMoveElem.data(l[0]) || {}).config, f.eventMoveElem.removeData(l[0]), delete f.eventMoveElem, f.moveElem.hide(), i.moveEnd) && i.moveEnd(t.layero), f.eventResizeElem && (f.eventResizeElem.removeData(l[1]), delete f.eventResizeElem, f.moveElem.hide())
            }), f.docEvent = !0), n
        }, t.pt.btnLoading = function (e, t) {
            t ? e.find(".layui-layer-btn-loading-icon")[0] || e.addClass("layui-layer-btn-is-loading").attr({
                disabled: ""
            }).prepend('<i class="layui-layer-btn-loading-icon layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>') : e.removeClass("layui-layer-btn-is-loading").removeAttr("disabled").find(".layui-layer-btn-loading-icon").remove()
        }, t.pt.callback = function () {
            var n = this,
                a = n.layero,
                o = n.config;
            n.openLayer(), o.success && (2 == o.type ? a.find("iframe").on("load", function () {
                o.success(a, n.index, n)
            }) : o.success(a, n.index, n)), 6 == v.ie && n.IE6(a), a.find("." + u[6]).children("a").on("click", function () {
                var e, t = h(this),
                    i = t.index();
                t.attr("disabled") || (o.btnAsync ? (e = 0 === i ? o.yes || o.btn1 : o["btn" + (i + 1)], n.loading = function (e) {
                    n.btnLoading(t, e)
                }, e ? f.promiseLikeResolve(e.call(o, n.index, a, n)).then(function (e) {
                    !1 !== e && v.close(n.index)
                }, function (e) {
                    e !== m && p.console && p.console.error("layer error hint: " + e)
                }) : v.close(n.index)) : 0 === i ? o.yes ? o.yes(n.index, a, n) : o.btn1 ? o.btn1(n.index, a, n) : v.close(n.index) : !1 !== (o["btn" + (i + 1)] && o["btn" + (i + 1)](n.index, a, n)) && v.close(n.index))
            }), a.find("." + u[7]).on("click", function () {
                !1 !== (o.cancel && o.cancel(n.index, a, n)) && v.close(n.index)
            }), o.shadeClose && n.shadeo.on("click", function () {
                v.close(n.index)
            }), a.find(".layui-layer-min").on("click", function () {
                !1 !== (o.min && o.min(a, n.index, n)) && v.min(n.index, o)
            }), a.find(".layui-layer-max").on("click", function () {
                h(this).hasClass("layui-layer-maxmin") ? (v.restore(n.index), o.restore && o.restore(a, n.index, n)) : (v.full(n.index, o), setTimeout(function () {
                    o.full && o.full(a, n.index, n)
                }, 100))
            }), o.end && (f.end[n.index] = o.end), o.beforeEnd && (f.beforeEnd[n.index] = h.proxy(o.beforeEnd, o, a, n.index, n))
        }, f.reselect = function () {
            h.each(h("select"), function (e, t) {
                var i = h(this);
                i.parents("." + u[0])[0] || 1 == i.attr("layer") && h("." + u[0]).length < 1 && i.removeAttr("layer").show()
            })
        }, t.pt.IE6 = function (e) {
            h("select").each(function (e, t) {
                var i = h(this);
                i.parents("." + u[0])[0] || "none" !== i.css("display") && i.attr({
                    layer: "1"
                }).hide()
            })
        }, t.pt.openLayer = function () {
            v.zIndex = this.config.zIndex, v.setTop = function (e) {
                return v.zIndex = parseInt(e[0].style.zIndex), e.on("mousedown", function () {
                    v.zIndex++, e.css("z-index", v.zIndex + 1)
                }), v.zIndex
            }
        }, f.record = function (e) {
            if (!e[0]) return p.console && console.error("index error");
            var t = e.attr("type"),
                i = e.find(".layui-layer-content"),
                t = t === f.type[2] ? i.children("iframe") : i,
                n = [e[0].style.width || f.getStyle(e[0], "width"), e[0].style.height || f.getStyle(e[0], "height"), e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
            e.find(".layui-layer-max").addClass("layui-layer-maxmin"), e.attr({
                area: n
            }), i.data(l, f.getStyle(t[0], "height"))
        }, f.setScrollbar = function (e) {
            u.html.css("overflow", "hidden")
        }, f.restScrollbar = function (t) {
            u.html.css("overflow") && 0 === h("." + u[0]).filter(function () {
                var e = h(this);
                return !1 === (e.data("config") || {}).scrollbar && "min" !== e.data("maxminStatus") && e.attr("times") !== String(t)
            }).length && u.html.css("overflow", "")
        }, f.promiseLikeResolve = function (e) {
            var t = h.Deferred();
            return e && "function" == typeof e.then ? e.then(t.resolve, t.reject) : t.resolve(e), t.promise()
        }, (p.layer = v).getChildFrame = function (e, t) {
            return t = t || h("." + u[4]).attr("times"), h("#" + u[0] + t).find("iframe").contents().find(e)
        }, v.getFrameIndex = function (e) {
            return h("#" + e).parents("." + u[4]).attr("times")
        }, v.iframeAuto = function (e) {
            var t, i, n;
            e && (t = v.getChildFrame("html", e).outerHeight(), i = (e = h("#" + u[0] + e)).find(u[1]).outerHeight() || 0, n = e.find("." + u[6]).outerHeight() || 0, e.css({
                height: t + i + n
            }), e.find("iframe").css({
                height: t
            }))
        }, v.iframeSrc = function (e, t) {
            h("#" + u[0] + e).find("iframe").attr("src", t)
        }, v.style = function (e, t, i) {
            var e = h("#" + u[0] + e),
                n = e.find(".layui-layer-content"),
                a = e.attr("type"),
                o = e.find(u[1]).outerHeight() || 0,
                s = e.find("." + u[6]).outerHeight() || 0;
            e.attr("minLeft");
            a !== f.type[3] && a !== f.type[4] && (i || (parseFloat(t.width) <= 260 && (t.width = 260), parseFloat(t.height) - o - s <= 64 && (t.height = 64 + o + s)), e.css(t), s = e.find("." + u[6]).outerHeight() || 0, a === f.type[2] ? e.find("iframe").css({
                height: ("number" == typeof t.height ? t.height : e.height()) - o - s
            }) : n.css({
                height: ("number" == typeof t.height ? t.height : e.height()) - o - s - parseFloat(n.css("padding-top")) - parseFloat(n.css("padding-bottom"))
            }))
        }, v.min = function (e, t) {
            var i, n, a, o, s, r, l = h("#" + u[0] + e),
                c = l.data("maxminStatus");
            "min" !== c && ("max" === c && v.restore(e), l.data("maxminStatus", "min"), t = t || l.data("config") || {}, c = h("#" + u.SHADE + e), i = l.find(".layui-layer-min"), n = l.find(u[1]).outerHeight() || 0, o = (a = "string" == typeof (o = l.attr("minLeft"))) ? o : 181 * f.minStackIndex + "px", s = l.css("position"), r = {
                width: 180,
                height: n,
                position: "fixed",
                overflow: "hidden"
            }, f.record(l), 0 < f.minStackArr.length && (o = f.minStackArr[0], f.minStackArr.shift()), parseFloat(o) + 180 > g.width() && (o = g.width() - 180 - (f.minStackArr.edgeIndex = f.minStackArr.edgeIndex || 0, f.minStackArr.edgeIndex += 3)) < 0 && (o = 0), t.minStack && (r.left = o, r.top = g.height() - n, a || f.minStackIndex++, l.attr("minLeft", o)), l.attr("position", s), v.style(e, r, !0), i.hide(), "page" === l.attr("type") && l.find(u[4]).hide(), f.restScrollbar(e), c.hide())
        }, v.restore = function (e) {
            var t = h("#" + u[0] + e),
                i = h("#" + u.SHADE + e),
                n = t.find(".layui-layer-content"),
                a = t.attr("area").split(","),
                o = t.attr("type"),
                s = t.data("config") || {},
                r = n.data(l);
            t.removeData("maxminStatus"), v.style(e, {
                width: a[0],
                height: a[1],
                top: parseFloat(a[2]),
                left: parseFloat(a[3]),
                position: t.attr("position"),
                overflow: "visible"
            }, !0), t.find(".layui-layer-max").removeClass("layui-layer-maxmin"), t.find(".layui-layer-min").show(), "page" === o && t.find(u[4]).show(), s.scrollbar ? f.restScrollbar(e) : f.setScrollbar(e), r !== m && (n.removeData(l), (o === f.type[2] ? n.children("iframe") : n).css({
                height: r
            })), i.show()
        }, v.full = function (t) {
            var i = h("#" + u[0] + t),
                e = i.data("maxminStatus");
            "max" !== e && ("min" === e && v.restore(t), i.data("maxminStatus", "max"), f.record(i), f.setScrollbar(t), setTimeout(function () {
                var e = "fixed" === i.css("position");
                v.style(t, {
                    top: e ? 0 : g.scrollTop(),
                    left: e ? 0 : g.scrollLeft(),
                    width: "100%",
                    height: "100%"
                }, !0), i.find(".layui-layer-min").hide()
            }, 100))
        }, v.title = function (e, t) {
            h("#" + u[0] + (t || v.index)).find(u[1]).html(e)
        }, v.close = function (s, r) {
            var e, t, l = (e = h("." + u[0]).children("#" + s).closest("." + u[0]))[0] ? (s = e.attr("times"), e) : h("#" + u[0] + s),
                c = l.attr("type"),
                i = l.data("config") || {},
                d = i.id && i.hideOnClose;
            l[0] && (t = function () {
                var o = {
                        slideDown: "layer-anim-slide-down-out",
                        slideLeft: "layer-anim-slide-left-out",
                        slideUp: "layer-anim-slide-up-out",
                        slideRight: "layer-anim-slide-right-out"
                    } [i.anim] || "layer-anim-close",
                    e = function () {
                        var e = "layui-layer-wrap";
                        if (d) return l.removeClass("layer-anim " + o), l.hide();
                        if (c === f.type[1] && "object" === l.attr("conType")) {
                            l.children(":not(." + u[5] + ")").remove();
                            for (var t = l.find("." + e), i = 0; i < 2; i++) t.unwrap();
                            t.css("display", t.data("display")).removeClass(e)
                        } else {
                            if (c === f.type[2]) try {
                                var n = h("#" + u[4] + s)[0];
                                n.contentWindow.document.write(""), n.contentWindow.close(), l.find("." + u[5])[0].removeChild(n)
                            } catch (a) {}
                            l[0].innerHTML = "", l.remove()
                        }
                        "function" == typeof f.end[s] && f.end[s](), delete f.end[s], "function" == typeof r && r(), f.events.resize[s] && (g.off("resize", f.events.resize[s]), delete f.events.resize[s])
                    },
                    t = h("#" + u.SHADE + s);
                v.ie && v.ie < 10 || !i.isOutAnim ? t[d ? "hide" : "remove"]() : (t.css({
                    opacity: 0
                }), setTimeout(function () {
                    t[d ? "hide" : "remove"]()
                }, 350)), i.isOutAnim && l.addClass("layer-anim " + o), 6 == v.ie && f.reselect(), f.restScrollbar(s), "string" == typeof l.attr("minLeft") && (f.minStackIndex--, f.minStackArr.push(l.attr("minLeft"))), v.ie && v.ie < 10 || !i.isOutAnim ? e() : setTimeout(function () {
                    e()
                }, 200)
            }, d || "function" != typeof f.beforeEnd[s] ? (delete f.beforeEnd[s], t()) : f.promiseLikeResolve(f.beforeEnd[s]()).then(function (e) {
                !1 !== e && (delete f.beforeEnd[s], t())
            }, function (e) {
                e !== m && p.console && p.console.error("layer error hint: " + e)
            }))
        }, v.closeAll = function (n, a) {
            "function" == typeof n && (a = n, n = null);
            var o = h("." + u[0]);
            h.each(o, function (e) {
                var t = h(this),
                    i = n ? t.attr("type") === n : 1;
                i && v.close(t.attr("times"), e === o.length - 1 ? a : null)
            }), 0 === o.length && "function" == typeof a && a()
        }, v.closeLast = function (i, e) {
            var t, n = [],
                a = h.isArray(i);
            h("string" == typeof i ? ".layui-layer-" + i : ".layui-layer").each(function (e, t) {
                t = h(t);
                if (a && -1 === i.indexOf(t.attr("type")) || "none" === t.css("display")) return !0;
                n.push(Number(t.attr("times")))
            }), 0 < n.length && (t = Math.max.apply(null, n), v.close(t, e))
        }, v.cache || {}),
        x = function (e) {
            return i.skin ? " " + i.skin + " " + i.skin + "-" + e : ""
        };
    v.prompt = function (i, n) {
        var e = "",
            t = "";
        "function" == typeof (i = i || {}) && (n = i), i.area && (e = 'style="width: ' + (o = i.area)[0] + "; height: " + o[1] + ';"', delete i.area), i.placeholder && (t = ' placeholder="' + i.placeholder + '"');
        var a, o = 2 == i.formType ? '<textarea class="layui-layer-input"' + e + t + "></textarea>" : '<input type="' + (1 == i.formType ? "password" : "text") + '" class="layui-layer-input"' + t + ">",
            s = i.success;
        return delete i.success, v.open(h.extend({
            type: 1,
            btn: ["\u786e\u5b9a", "\u53d6\u6d88"],
            content: o,
            skin: "layui-layer-prompt" + x("prompt"),
            maxWidth: g.width(),
            success: function (e) {
                (a = e.find(".layui-layer-input")).val(i.value || "").focus(), "function" == typeof s && s(e)
            },
            resize: !1,
            yes: function (e) {
                var t = a.val();
                t.length > (i.maxlength || 500) ? v.tips("\u6700\u591a\u8f93\u5165" + (i.maxlength || 500) + "\u4e2a\u5b57\u7b26", a, {
                    tips: 1
                }) : n && n(t, e, a)
            }
        }, i))
    }, v.tab = function (n) {
        var a = (n = n || {}).tab || {},
            o = "layui-this",
            s = n.success;
        return delete n.success, v.open(h.extend({
            type: 1,
            skin: "layui-layer-tab" + x("tab"),
            resize: !1,
            title: function () {
                var e = a.length,
                    t = 1,
                    i = "";
                if (0 < e)
                    for (i = '<span class="' + o + '">' + a[0].title + "</span>"; t < e; t++) i += "<span>" + a[t].title + "</span>";
                return i
            }(),
            content: '<ul class="layui-layer-tabmain">' + function () {
                var e = a.length,
                    t = 1,
                    i = "";
                if (0 < e)
                    for (i = '<li class="layui-layer-tabli ' + o + '">' + (a[0].content || "no content") + "</li>"; t < e; t++) i += '<li class="layui-layer-tabli">' + (a[t].content || "no  content") + "</li>";
                return i
            }() + "</ul>",
            success: function (e) {
                var t = e.find(".layui-layer-title").children(),
                    i = e.find(".layui-layer-tabmain").children();
                t.on("mousedown", function (e) {
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
                    var e = h(this),
                        t = e.index();
                    e.addClass(o).siblings().removeClass(o), i.eq(t).show().siblings().hide(), "function" == typeof n.change && n.change(t)
                }), "function" == typeof s && s(e)
            }
        }, n))
    }, v.photos = function (n, e, a) {
        var s = {};
        if ((n = h.extend(!0, {
            toolbar: !0,
            footer: !0
        }, n)).photos) {
            var t = !("string" == typeof n.photos || n.photos instanceof h),
                i = t ? n.photos : {},
                o = i.data || [],
                r = i.start || 0,
                l = n.success;
            if (s.imgIndex = 1 + (0 | r), n.img = n.img || "img", delete n.success, t) {
                if (0 === o.length) return v.msg("\u6ca1\u6709\u56fe\u7247")
            } else {
                var c = h(n.photos),
                    d = function () {
                        o = [], c.find(n.img).each(function (e) {
                            var t = h(this);
                            t.attr("layer-index", e), o.push({
                                alt: t.attr("alt"),
                                pid: t.attr("layer-pid"),
                                src: t.attr("lay-src") || t.attr("layer-src") || t.attr("src"),
                                thumb: t.attr("src")
                            })
                        })
                    };
                if (d(), 0 === o.length) return;
                if (e || c.on("click", n.img, function () {
                    d();
                    var e = h(this).attr("layer-index");
                    v.photos(h.extend(n, {
                        photos: {
                            start: e,
                            data: o,
                            tab: n.tab
                        },
                        full: n.full
                    }), !0)
                }), !e) return
            }
            s.imgprev = function (e) {
                s.imgIndex--, s.imgIndex < 1 && (s.imgIndex = o.length), s.tabimg(e)
            }, s.imgnext = function (e, t) {
                s.imgIndex++, s.imgIndex > o.length && (s.imgIndex = 1, t) || s.tabimg(e)
            }, s.keyup = function (e) {
                var t;
                s.end || (t = e.keyCode, e.preventDefault(), 37 === t ? s.imgprev(!0) : 39 === t ? s.imgnext(!0) : 27 === t && v.close(s.index))
            }, s.tabimg = function (e) {
                if (!(o.length <= 1)) return i.start = s.imgIndex - 1, v.close(s.index), v.photos(n, !0, e)
            }, s.isNumber = function (e) {
                return "number" == typeof e && !isNaN(e)
            }, s.image = {}, s.getTransform = function (e) {
                var t = [],
                    i = e.rotate,
                    n = e.scaleX,
                    e = e.scale;
                return s.isNumber(i) && 0 !== i && t.push("rotate(" + i + "deg)"), s.isNumber(n) && 1 !== n && t.push("scaleX(" + n + ")"), s.isNumber(e) && t.push("scale(" + e + ")"), t.length ? t.join(" ") : "none"
            }, s.event = function (e, i, n) {
                var a, o;
                s.main.find(".layui-layer-photos-prev").on("click", function (e) {
                    e.preventDefault(), s.imgprev(!0)
                }), s.main.find(".layui-layer-photos-next").on("click", function (e) {
                    e.preventDefault(), s.imgnext(!0)
                }), h(document).on("keyup", s.keyup), e.off("click").on("click", "*[toolbar-event]", function () {
                    var e = h(this);
                    switch (e.attr("toolbar-event")) {
                        case "rotate":
                            s.image.rotate = ((s.image.rotate || 0) + Number(e.attr("data-option"))) % 360, s.imgElem.css({
                                transform: s.getTransform(s.image)
                            });
                            break;
                        case "scalex":
                            s.image.scaleX = -1 === s.image.scaleX ? 1 : -1, s.imgElem.css({
                                transform: s.getTransform(s.image)
                            });
                            break;
                        case "zoom":
                            var t = Number(e.attr("data-option"));
                            s.image.scale = (s.image.scale || 1) + t, t < 0 && s.image.scale < 0 - t && (s.image.scale = 0 - t), s.imgElem.css({
                                transform: s.getTransform(s.image)
                            });
                            break;
                        case "reset":
                            s.image.scaleX = 1, s.image.scale = 1, s.image.rotate = 0, s.imgElem.css({
                                transform: "none"
                            });
                            break;
                        case "close":
                            v.close(i)
                    }
                    n.offset(), n.auto(i)
                }), s.main.on("mousewheel DOMMouseScroll", function (e) {
                    var t = e.originalEvent.wheelDelta || -e.originalEvent.detail,
                        i = s.main.find('[toolbar-event="zoom"]');
                    (0 < t ? i.eq(0) : i.eq(1)).trigger("click"), e.preventDefault()
                }), (p.layui || p.lay) && (a = p.layui.lay || p.lay, o = function (e, t) {
                    var i = Date.now() - t.timeStart,
                        i = t.distanceX / i,
                        n = g.width() / 3;
                    (.25 < Math.abs(i) || Math.abs(t.distanceX) > n) && ("left" === t.direction ? s.imgnext(!0) : "right" === t.direction && s.imgprev(!0))
                }, h.each([n.shadeo, s.main], function (e, t) {
                    a.touchSwipe(t, {
                        onTouchEnd: o
                    })
                }))
            }, s.loadi = v.load(1, {
                shade: !("shade" in n) && [.9, m, "unset"],
                scrollbar: !1
            });
            var t = o[r].src,
                f = function (e) {
                    v.close(s.loadi);
                    var t, i = o[r].alt || "";
                    a && (n.anim = -1), s.index = v.open(h.extend({
                        type: 1,
                        id: "layui-layer-photos",
                        area: (e = [e.width, e.height], t = [h(p).width() - 100, h(p).height() - 100], !n.full && (t[0] < e[0] || t[1] < e[1]) && ((t = [e[0] / t[0], e[1] / t[1]])[1] < t[0] ? (e[0] = e[0] / t[0], e[1] = e[1] / t[0]) : t[0] < t[1] && (e[0] = e[0] / t[1], e[1] = e[1] / t[1])), [e[0] + "px", e[1] + "px"]),
                        title: !1,
                        shade: [.9, m, "unset"],
                        shadeClose: !0,
                        closeBtn: !1,
                        move: ".layer-layer-photos-main img",
                        moveType: 1,
                        scrollbar: !1,
                        moveOut: !0,
                        anim: 5,
                        isOutAnim: !1,
                        skin: "layui-layer-photos" + x("photos"),
                        content: '<div class="layer-layer-photos-main"><img src="' + o[r].src + '" alt="' + i + '" layer-pid="' + (o[r].pid || "") + '">' + (t = ['<div class="layui-layer-photos-pointer">'], 1 < o.length && t.push(['<div class="layer-layer-photos-page">', '<span class="layui-icon layui-icon-left layui-layer-photos-prev"></span>', '<span class="layui-icon layui-icon-right layui-layer-photos-next"></span>', "</div>"].join("")), n.toolbar && t.push(['<div class="layui-layer-photos-toolbar layui-layer-photos-header">', '<span toolbar-event="rotate" data-option="90" title="\u65cb\u8f6c"><i class="layui-icon layui-icon-refresh"></i></span>', '<span toolbar-event="scalex" title="\u53d8\u6362"><i class="layui-icon layui-icon-slider"></i></span>', '<span toolbar-event="zoom" data-option="0.1" title="\u653e\u5927"><i class="layui-icon layui-icon-add-circle"></i></span>', '<span toolbar-event="zoom" data-option="-0.1" title="\u7f29\u5c0f"><i class="layui-icon layui-icon-reduce-circle"></i></span>', '<span toolbar-event="reset" title="\u8fd8\u539f"><i class="layui-icon layui-icon-refresh-1"></i></span>', '<span toolbar-event="close" title="\u5173\u95ed"><i class="layui-icon layui-icon-close"></i></span>', "</div>"].join("")), n.footer && t.push(['<div class="layui-layer-photos-toolbar layui-layer-photos-footer">', "<h3>" + i + "</h3>", "<em>" + s.imgIndex + " / " + o.length + "</em>", '<a href="' + o[r].src + '" target="_blank">\u67e5\u770b\u539f\u56fe</a>', "</div>"].join("")), t.push("</div>"), t.join("")) + "</div>",
                        success: function (e, t, i) {
                            s.main = e.find(".layer-layer-photos-main"), s.footer = e.find(".layui-layer-photos-footer"), s.imgElem = s.main.children("img"), s.event(e, t, i), n.tab && n.tab(o[r], e), "function" == typeof l && l(e)
                        },
                        end: function () {
                            s.end = !0, h(document).off("keyup", s.keyup)
                        }
                    }, n))
                },
                u = function () {
                    v.close(s.loadi), v.msg("\u5f53\u524d\u56fe\u7247\u5730\u5740\u5f02\u5e38\uff0c<br>\u662f\u5426\u7ee7\u7eed\u67e5\u770b\u4e0b\u4e00\u5f20\uff1f", {
                        time: 3e4,
                        btn: ["\u4e0b\u4e00\u5f20", "\u4e0d\u770b\u4e86"],
                        yes: function () {
                            1 < o.length && s.imgnext(!0, !0)
                        }
                    })
                },
                y = new Image;
            (y.src = t, y.complete) ? f(y): (y.onload = function () {
                y.onload = null, f(y)
            }, y.onerror = function (e) {
                y.onerror = null, u(e)
            })
        }
    }, f.run = function (e) {
        g = (h = e)(p);
        var e = navigator.userAgent.toLowerCase(),
            e = /android|iphone|ipod|ipad|ios/.test(e),
            n = h(p);
        e && h.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            var i = "inner" + e;
            g[t] = function () {
                return i in p ? p[i] : n[t]()
            }
        }), u.html = h("html"), v.open = function (e) {
            return new t(e).index
        }
    }, p.layui && layui.define ? (v.ready(), layui.define(["jquery", "lay"], function (e) {
        v.path = layui.cache.dir, f.run(layui.$), e("layer", p.layer = v)
    })) : "function" == typeof define && define.amd ? define(["jquery"], function () {
        return f.run(p.jQuery), v
    }) : (v.ready(), f.run(p.jQuery))
}(window);
layui.define("jquery", function (t) {
    "use strict";
    var s = layui.$,
        p = layui.hint(),
        e = {
            fixbar: function (i) {
                var r, t, e, n, o = "layui-fixbar",
                    a = s(document),
                    u = (i = s.extend(!0, {
                        target: "body",
                        bars: [],
                        "default": !0,
                        margin: 160,
                        duration: 320
                    }, i), s(i.target)),
                    c = i.scroll ? s(i.scroll) : s("body" === i.target ? a : u),
                    l = (i["default"] && (i.bar1 && i.bars.push({
                        type: "bar1",
                        icon: "layui-icon-chat"
                    }), i.bar2 && i.bars.push({
                        type: "bar2",
                        icon: "layui-icon-help"
                    }), i.bars.push({
                        type: "top",
                        icon: "layui-icon-top"
                    })), s("<ul>").addClass(o));
                layui.each(i.bars, function (t, e) {
                    var n = s('<li class="layui-icon">');
                    n.addClass(e.icon).attr({
                        "lay-type": e.type,
                        style: e.style || (i.bgcolor ? "background-color: " + i.bgcolor : "")
                    }).html(e.content), n.on("click", function () {
                        var t = s(this).attr("lay-type");
                        "top" === t && ("body" === i.target ? s("html,body") : c).animate({
                            scrollTop: 0
                        }, i.duration), "function" == typeof i.click && i.click.call(this, t)
                    }), "object" === layui.type(i.on) && layui.each(i.on, function (t, e) {
                        n.on(t, function () {
                            var t = s(this).attr("lay-type");
                            "function" == typeof e && e.call(this, t)
                        })
                    }), "top" === e.type && (n.addClass("layui-fixbar-top"), r = n), l.append(n)
                }), u.find("." + o).remove(), "object" == typeof i.css && l.css(i.css), u.append(l), r && (e = function e() {
                    return c.scrollTop() >= i.margin ? t || (r.show(), t = 1) : t && (r.hide(), t = 0), e
                }()), c.on("scroll", function () {
                    e && (clearTimeout(n), n = setTimeout(function () {
                        e()
                    }, 100))
                })
            },
            countdown: function (i) {
                i = s.extend(!0, {
                    date: new Date,
                    now: new Date
                }, i);
                var r = arguments,
                    o = (1 < r.length && (i.date = new Date(r[0]), i.now = new Date(r[1]), i.clock = r[2]), {
                        options: i,
                        clear: function () {
                            clearTimeout(o.timer)
                        },
                        reload: function (t) {
                            this.clear(), s.extend(!0, this.options, {
                                now: new Date
                            }, t), a()
                        }
                    }),
                    a = ("function" == typeof i.ready && i.ready(), function u() {
                        var t = new Date(i.date),
                            e = new Date(i.now),
                            t = 0 < (t = t.getTime() - e.getTime()) ? t : 0,
                            n = {
                                d: Math.floor(t / 864e5),
                                h: Math.floor(t / 36e5) % 24,
                                m: Math.floor(t / 6e4) % 60,
                                s: Math.floor(t / 1e3) % 60
                            };
                        return 1 < r.length && (n = [n.d, n.h, n.m, n.s]), o.timer = setTimeout(function () {
                            e.setTime(e.getTime() + 1e3), i.now = e, a()
                        }, 1e3), "function" == typeof i.clock && i.clock(n, o), t <= 0 && (clearTimeout(o.timer), "function" == typeof i.done) && i.done(n, o), u
                    }());
                return o
            },
            timeAgo: function (t, e) {
                var n = this,
                    i = [
                        [],
                        []
                    ],
                    r = (new Date).getTime() - new Date(t).getTime();
                return 26784e5 < r ? (r = new Date(t), i[0][0] = n.digit(r.getFullYear(), 4), i[0][1] = n.digit(r.getMonth() + 1), i[0][2] = n.digit(r.getDate()), e || (i[1][0] = n.digit(r.getHours()), i[1][1] = n.digit(r.getMinutes()), i[1][2] = n.digit(r.getSeconds())), i[0].join("-") + " " + i[1].join(":")) : 864e5 <= r ? (r / 1e3 / 60 / 60 / 24 | 0) + " \u5929\u524d" : 36e5 <= r ? (r / 1e3 / 60 / 60 | 0) + " \u5c0f\u65f6\u524d" : 18e4 <= r ? (r / 1e3 / 60 | 0) + " \u5206\u949f\u524d" : r < 0 ? "\u672a\u6765" : "\u521a\u521a"
            },
            digit: function (t, e) {
                var n = "";
                e = e || 2;
                for (var i = (t = String(t)).length; i < e; i++) n += "0";
                return t < Math.pow(10, e) ? n + (0 | t) : t
            },
            toDateString: function (t, e, n) {
                var r, i, o, a, u, c, l, s, d, f, g;
                return null === t || "" === t ? "" : (r = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i, i = this, (t = function (t) {
                    if (void 0 === t) return new Date;
                    if (!isNaN(t)) return new Date("string" == typeof t ? parseInt(t) : t);
                    if ("string" == typeof t && !/Z$/i.test(t)) {
                        var e, n, i = t.match(r);
                        if (i) return e = i[2] - 1 || 0, n = (i[7] || "0").substring(0, 3), new Date(i[1], e, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, n)
                    }
                    return new Date(t)
                }(t)).getDate() ? (o = t.getFullYear(), a = t.getMonth(), u = t.getDate(), c = t.getHours(), l = t.getMinutes(), s = t.getSeconds(), d = t.getMilliseconds(), f = n && n.customMeridiem || function (t, e) {
                    t = 100 * t + e;
                    return t < 600 ? "\u51cc\u6668" : t < 900 ? "\u65e9\u4e0a" : t < 1100 ? "\u4e0a\u5348" : t < 1300 ? "\u4e2d\u5348" : t < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
                }, g = {
                    yy: function () {
                        return String(o).slice(-2)
                    },
                    yyyy: function () {
                        return i.digit(o, 4)
                    },
                    M: function () {
                        return String(a + 1)
                    },
                    MM: function () {
                        return i.digit(a + 1)
                    },
                    d: function () {
                        return String(u)
                    },
                    dd: function () {
                        return i.digit(u)
                    },
                    H: function () {
                        return String(c)
                    },
                    HH: function () {
                        return i.digit(c)
                    },
                    h: function () {
                        return String(c % 12 || 12)
                    },
                    hh: function () {
                        return i.digit(c % 12 || 12)
                    },
                    A: function () {
                        return f(c, l)
                    },
                    m: function () {
                        return String(l)
                    },
                    mm: function () {
                        return i.digit(l)
                    },
                    s: function () {
                        return String(s)
                    },
                    ss: function () {
                        return i.digit(s)
                    },
                    SSS: function () {
                        return i.digit(d, 3)
                    }
                }, (e = e || "yyyy-MM-dd HH:mm:ss").replace(/\[([^\]]+)]|y{1,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|SSS/g, function (t, e) {
                    return e || g[t] && g[t]() || t
                })) : (p.error('Invalid millisecond for "util.toDateString(millisecond)"'), ""))
            },
            escape: function (t) {
                return t === undefined || null === t ? "" : /[<"'>]|&(?=#[a-zA-Z0-9]+)/g.test(t += "") ? t.replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;") : t
            },
            unescape: function (t) {
                return t !== undefined && null !== t || (t = ""), (t += "").replace(/\&amp;/g, "&").replace(/\&lt;/g, "<").replace(/\&gt;/g, ">").replace(/\&#39;/g, "'").replace(/\&quot;/g, '"')
            },
            openWin: function (t) {
                var e = (t = t || {}).window || window.open(t.url || "", t.target, t.specs);
                t.url || (e.document.open("text/html", "replace"), e.document.write(t.content || ""), e.document.close())
            },
            toVisibleArea: function (t) {
                var e, n, i, r, o, a, u, c;
                (t = s.extend({
                    margin: 160,
                    duration: 200,
                    type: "y"
                }, t)).scrollElem[0] && t.thisElem[0] && (e = t.scrollElem, u = t.thisElem, i = (o = "y" === t.type) ? "top" : "left", r = e[n = o ? "scrollTop" : "scrollLeft"](), o = e[o ? "height" : "width"](), a = e.offset()[i], c = {}, (u = u.offset()[i] - a) > o - t.margin || u < t.margin) && (c[n] = u - o / 2 + r, e.animate(c, t.duration))
            },
            on: function (i, r, t) {
                "object" == typeof i && (t = r || {}, r = i, i = t.attr || "lay-on");
                var e, n = (t = s.extend({
                        elem: "body",
                        trigger: "click"
                    }, "object" == typeof t ? t : {
                        trigger: t
                    })).elem = s(t.elem),
                    o = "[" + i + "]",
                    a = "UTIL_ON_DATA";
                if (n[0]) return n.data(a) || n.data(a, {
                    events: {}
                }), a = n.data(a), e = i + "_" + t.trigger, r = a.events[e] = s.extend(!0, a.events[e], r), e = t.trigger + ".lay_util_on", n.off(e, o), n.on(e, o, function (t) {
                    var e = s(this),
                        n = e.attr(i);
                    "function" == typeof r[n] && r[n].call(this, e, t)
                }), r
            }
        };
    e.event = e.on, t("util", e)
});
layui.define(["jquery", "laytpl", "lay", "util"], function (e) {
    "use strict";
    var n, i, t, c = layui.$,
        m = layui.laytpl,
        p = layui.util,
        o = (layui.hint(), layui.device().mobile ? "touchstart" : "mousedown"),
        r = "dropdown",
        f = "layui_dropdown_index_opened",
        y = "lay-" + r + "-id",
        h = {
            config: {
                customName: {
                    id: "id",
                    title: "title",
                    children: "child"
                }
            },
            index: layui[r] ? layui[r].index + 1e4 : 0,
            set: function (e) {
                var i = this;
                return i.config = c.extend({}, i.config, e), i
            },
            on: function (e, i) {
                return layui.onevent.call(this, r, e, i)
            }
        },
        g = function () {
            var i = this,
                e = i.config,
                t = e.id;
            return {
                config: e,
                reload: function (e) {
                    i.reload.call(i, e)
                },
                reloadData: function (e) {
                    h.reloadData(t, e)
                },
                close: function () {
                    i.remove()
                },
                open: function () {
                    i.render()
                }
            }
        },
        a = "layui-dropdown",
        l = "layui-menu-item-up",
        d = "layui-menu-item-down",
        v = "layui-menu-body-title",
        s = "layui-menu-item-group",
        w = "layui-menu-item-parent",
        u = "layui-menu-item-checked",
        C = "layui-menu-item-checked2",
        E = "layui-menu-body-panel",
        x = "layui-menu-body-panel-left",
        k = "layui-dropdown-shade",
        b = "." + s + ">." + v,
        T = function (e) {
            var i = this;
            i.index = ++h.index, i.config = c.extend({}, i.config, h.config, e), i.init()
        };
    T.prototype.config = {
        trigger: "click",
        content: "",
        className: "",
        style: "",
        show: !1,
        isAllowSpread: !0,
        isSpreadItem: !0,
        data: [],
        delay: [200, 300],
        shade: 0,
        accordion: !1,
        closeOnClick: !0
    }, T.prototype.reload = function (e, i) {
        var t = this;
        t.config = c.extend({}, t.config, e), t.init(!0, i)
    }, T.prototype.init = function (e, i) {
        var t = this,
            n = t.config,
            a = c(n.elem);
        return 1 < a.length ? (layui.each(a, function () {
            h.render(c.extend({}, n, {
                elem: this
            }))
        }), t) : (c.extend(n, lay.options(a[0])), !e && a.attr(y) ? (e = g.getThis(a.attr(y))) ? e.reload(n, i) : void 0 : (n.elem = c(n.elem), n.target = c("body"), n.id = "id" in n ? n.id : a.attr("id") || t.index, g.that[n.id] = t, a.attr(y, n.id), n.customName = c.extend({}, h.config.customName, n.customName), "hover" === n.trigger && (n.trigger = "mouseenter"), (n.show || "reloadData" === i && t.mainElem && n.target.find(t.mainElem.get(0)).length) && t.render(i), void t.events()))
    }, T.prototype.render = function (e) {
        var i, l = this,
            d = l.config,
            s = d.customName,
            u = function (r, e) {
                return layui.each(e, function (e, i) {
                    var t, n = i[s.children] && 0 < i[s.children].length,
                        a = ("isSpreadItem" in i ? i : d).isSpreadItem,
                        l = (o = p.escape(i[s.title]), l = i.templet || d.templet, o = l ? "function" == typeof l ? l(i) : m(l).render(i) : o),
                        o = (n && (i.type = i.type || "parent"), i.type ? {
                            group: "group",
                            parent: "parent",
                            "-": "-"
                        } [i.type] || "parent" : "");
                    ("-" === o || i[s.title] || i[s.id] || n) && ((l = c(["<li" + (t = {
                        group: "layui-menu-item-group" + (d.isAllowSpread ? a ? " layui-menu-item-down" : " layui-menu-item-up" : ""),
                        parent: w,
                        "-": "layui-menu-item-divider"
                    }, n || o ? ' class="' + t[o] + '"' : i.disabled ? ' class="layui-disabled"' : "") + ">", (t = "href" in i ? '<a href="' + i.href + '" target="' + (i.target || "_self") + '">' + l + "</a>" : l, n ? '<div class="' + v + '">' + t + ("parent" === o ? '<i class="layui-icon layui-icon-right"></i>' : "group" === o && d.isAllowSpread ? '<i class="layui-icon layui-icon-' + (a ? "up" : "down") + '"></i>' : "") + "</div>" : '<div class="' + v + '">' + t + "</div>"), "</li>"].join(""))).data("item", i), n && (a = c('<div class="layui-panel layui-menu-body-panel"></div>'), t = c("<ul></ul>"), "parent" === o ? (a.append(u(t, i[s.children])), l.append(a)) : l.append(u(t, i[s.children]))), r.append(l))
                }), r
            },
            t = ['<div class="layui-dropdown layui-border-box layui-panel layui-anim layui-anim-downbit" ' + y + '="' + d.id + '">', "</div>"].join(""),
            n = d.content || (n = c('<ul class="layui-menu layui-dropdown-menu"></ul>'), 0 < d.data.length ? u(n, d.data) : n.html('<li class="layui-menu-item-none">\u6682\u65e0\u6570\u636e</li>'), n),
            a = g.findMainElem(d.id);
        "reloadData" === e && a.length ? (i = l.mainElem = a).html(n) : ((i = l.mainElem = c(t)).append(n), i.addClass(d.className), i.attr("style", d.style), l.remove(h.thisId), d.target.append(i), d.elem.data(f, !0), e = d.shade ? '<div class="' + k + '" style="z-index:' + (i.css("z-index") - 1) + "; background-color: " + (d.shade[1] || "#000") + "; opacity: " + (d.shade[0] || d.shade) + '"></div>' : "", i.before(e), "mouseenter" === d.trigger && i.on("mouseenter", function () {
            clearTimeout(g.timer)
        }).on("mouseleave", function () {
            l.delayRemove()
        })), l.position(), h.thisId = d.id, i.find(".layui-menu").on(o, function (e) {
            layui.stope(e)
        }), i.find(".layui-menu li").on("click", function (e) {
            var i = c(this),
                t = i.data("item") || {},
                n = t[s.children] && 0 < t[s.children].length,
                a = "all" === d.clickScope;
            t.disabled || n && !a || "-" === t.type || (!1 === ("function" == typeof d.click ? d.click(t, i, e) : null) || n || l.remove(), layui.stope(e))
        }), i.find(b).on("click", function (e) {
            var i = c(this).parent();
            "group" === (i.data("item") || {}).type && d.isAllowSpread && g.spread(i, d.accordion)
        }), "function" == typeof d.ready && d.ready(i, d.elem)
    }, T.prototype.position = function (e) {
        var i = this.config;
        lay.position(i.elem[0], this.mainElem[0], {
            position: i.position,
            e: this.e,
            clickType: "contextmenu" === i.trigger ? "right" : null,
            align: i.align || null
        })
    }, T.prototype.remove = function (e) {
        e = e || this.config.id;
        var i = g.getThis(e);
        i && (i = i.config, (e = g.findMainElem(e))[0]) && (e.prev("." + k).remove(), e.remove(), i.elem.removeData(f), delete h.thisId, "function" == typeof i.close) && i.close(i.elem)
    }, T.prototype.normalizedDelay = function () {
        var e = this.config,
            e = [].concat(e.delay);
        return {
            show: e[0],
            hide: e[1] !== undefined ? e[1] : e[0]
        }
    }, T.prototype.delayRemove = function () {
        var e = this;
        e.config;
        clearTimeout(g.timer), g.timer = setTimeout(function () {
            e.remove()
        }, e.normalizedDelay().hide)
    }, T.prototype.events = function () {
        var t = this,
            n = t.config,
            a = "mouseenter" === n.trigger,
            e = n.trigger + ".lay_dropdown_render";
        t.thisEventElem && t.thisEventElem.off(e), t.thisEventElem = n.elem, n.elem.off(e).on(e, function (e) {
            clearTimeout(g.timer), t.e = e;
            var i = n.elem.data(f);
            a ? i || (g.timer = setTimeout(function () {
                t.render()
            }, t.normalizedDelay().show)) : n.closeOnClick && i && "click" === n.trigger ? t.remove() : t.render(), e.preventDefault()
        }), a && n.elem.on("mouseleave", function () {
            t.delayRemove()
        })
    }, g.that = {}, g.getThis = function (e) {
        if (e === undefined) throw new Error("ID argument required");
        return g.that[e]
    }, g.findMainElem = function (e) {
        return c("." + a + "[" + y + '="' + e + '"]')
    }, g.spread = function (e, i) {
        var t = e.children("ul"),
            n = e.hasClass(l),
            a = function () {
                c(this).css({
                    display: ""
                })
            };
        t.is(":animated") || (n ? (e.removeClass(l).addClass(d), t.hide().stop().slideDown(200, a)) : (t.stop().slideUp(200, a), e.removeClass(d).addClass(l)), n && i && ((t = e.siblings("." + d)).children("ul").stop().slideUp(200, a), t.removeClass(d).addClass(l)))
    }, n = c(window), i = c(document), n.on("resize", function () {
        if (h.thisId) {
            var e = g.getThis(h.thisId);
            if (e) return !(e.mainElem && !e.mainElem[0] || !c("." + a)[0]) && void("contextmenu" === e.config.trigger ? e.remove() : e.position())
        }
    }), lay(i).on(o, function (e) {
        if (h.thisId) {
            var i = g.getThis(h.thisId);
            if (i) {
                var t = i.config,
                    n = lay.isTopElem(t.elem[0]),
                    a = "contextmenu" === t.trigger,
                    n = !(n || a) && (t.elem[0] === e.target || t.elem.find(e.target)[0]),
                    a = i.mainElem && (e.target === i.mainElem[0] || i.mainElem.find(e.target)[0]);
                if (!n && !a) {
                    if ("touchstart" === e.type && t.elem.data(f) && c(e.target).hasClass(k) && e.preventDefault(), "function" == typeof t.onClickOutside)
                        if (!1 === t.onClickOutside(e)) return;
                    i.remove()
                }
            }
        }
    }, {
        passive: !1
    }), t = ".layui-menu:not(.layui-dropdown-menu) li", i.on("click", t, function (e) {
        var i = c(this),
            t = i.parents(".layui-menu").eq(0),
            n = i.hasClass(s) || i.hasClass(w),
            a = t.attr("lay-filter") || t.attr("id"),
            l = lay.options(this);
        i.hasClass("layui-menu-item-divider") || n || (t.find("." + u).removeClass(u), t.find("." + C).removeClass(C), i.addClass(u), i.parents("." + w).addClass(C), l.title = l.title || c.trim(i.children("." + v).text()), layui.event.call(this, r, "click(" + a + ")", l))
    }), i.on("click", t + b, function (e) {
        var i = c(this),
            t = i.parents("." + s + ":eq(0)"),
            n = lay.options(t[0]),
            i = "string" == typeof i.parents(".layui-menu").eq(0).attr("lay-accordion");
        "isAllowSpread" in n && !n.isAllowSpread || g.spread(t, i)
    }), t = ".layui-menu ." + w, i.on("mouseenter", t, function (e) {
        var i, t = c(this).find("." + E);
        t[0] && ((i = t[0].getBoundingClientRect()).right > n.width() && (t.addClass(x), (i = t[0].getBoundingClientRect()).left < 0) && t.removeClass(x), i.bottom > n.height()) && t.eq(0).css("margin-top", -(i.bottom - n.height() + 5))
    }).on("mouseleave", t, function (e) {
        var i = c(this).children("." + E);
        i.removeClass(x), i.css("margin-top", 0)
    }), h.close = function (e) {
        e = g.getThis(e);
        return e ? (e.remove(), g.call(e)) : this
    }, h.open = function (e) {
        e = g.getThis(e);
        return e ? (e.render(), g.call(e)) : this
    }, h.reload = function (e, i, t) {
        e = g.getThis(e);
        return e ? (e.reload(i, t), g.call(e)) : this
    }, h.reloadData = function () {
        var t = c.extend([], arguments),
            n = (t[2] = "reloadData", new RegExp("^(" + ["data", "templet", "content"].join("|") + ")$"));
        return layui.each(t[1], function (e, i) {
            n.test(e) || delete t[1][e]
        }), h.reload.apply(null, t)
    }, h.render = function (e) {
        e = new T(e);
        return g.call(e)
    }, e(r, h)
});
layui.define(["jquery", "lay"], function (e) {
    "use strict";
    var x = layui.$,
        b = layui.lay,
        m = {
            config: {},
            index: layui.slider ? layui.slider.index + 1e4 : 0,
            set: function (e) {
                var t = this;
                return t.config = x.extend({}, t.config, e), t
            },
            on: function (e, t) {
                return layui.onevent.call(this, i, e, t)
            }
        },
        i = "slider",
        f = "layui-disabled",
        T = "layui-slider-bar",
        w = "layui-slider-wrap",
        M = "layui-slider-wrap-btn",
        L = "layui-slider-tips",
        E = "layui-slider-input-txt",
        Y = "layui-slider-hover",
        t = function (e) {
            var t = this;
            t.index = ++m.index, t.config = x.extend({}, t.config, m.config, e), t.render()
        };
    t.prototype.config = {
        type: "default",
        min: 0,
        max: 100,
        value: 0,
        step: 1,
        showstep: !1,
        tips: !0,
        tipsAlways: !1,
        input: !1,
        range: !1,
        height: 200,
        disabled: !1,
        theme: "#16baaa"
    }, t.prototype.precision = function () {
        var e = this.config,
            e = x.map([e.min, e.max, e.step], function (e, t) {
                e = String(e).split(".");
                return e[1] ? e[1].length : 0
            });
        return Math.max.apply(null, e)
    }, t.prototype.render = function () {
        var n = this,
            a = n.config,
            e = x(a.elem);
        if (1 < e.length) return layui.each(e, function () {
            m.render(x.extend({}, a, {
                elem: this
            }))
        }), n;
        x.extend(a, b.options(e[0])), a.step <= 0 && (a.step = 1), a.max < a.min && (a.max = a.min + a.step), a.range ? (a.value = "object" == typeof a.value ? a.value : [a.min, a.value], e = Math.min(a.value[0], a.value[1]), i = Math.max(a.value[0], a.value[1]), a.value[0] = Math.max(e, a.min), a.value[1] = Math.max(i, a.min), a.value[0] = Math.min(a.value[0], a.max), a.value[1] = Math.min(a.value[1], a.max), i = (a.value[0] - a.min) / (a.max - a.min) * 100, l = (s = (a.value[1] - a.min) / (a.max - a.min) * 100) - i + "%", i += "%", s += "%") : ("object" == typeof a.value && (a.value = Math.min.apply(null, a.value)), a.value < a.min && (a.value = a.min), a.value > a.max && (a.value = a.max), l = (a.value - a.min) / (a.max - a.min) * 100 + "%");
        var t, e = a.disabled ? "#c2c2c2" : a.theme,
            i = '<div class="layui-slider ' + ("vertical" === a.type ? "layui-slider-vertical" : "") + '">' + (a.tips ? '<div class="' + L + '" ' + (a.tipsAlways ? "" : 'style="display:none;"') + "></div>" : "") + '<div class="layui-slider-bar" style="background:' + e + "; " + ("vertical" === a.type ? "height" : "width") + ":" + l + ";" + ("vertical" === a.type ? "bottom" : "left") + ":" + (i || 0) + ';"></div><div class="layui-slider-wrap" style="' + ("vertical" === a.type ? "bottom" : "left") + ":" + (i || l) + ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' + e + ';"></div></div>' + (a.range ? '<div class="layui-slider-wrap" style="' + ("vertical" === a.type ? "bottom" : "left") + ":" + s + ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' + e + ';"></div></div>' : "") + "</div>",
            l = x(a.elem),
            s = l.next(".layui-slider");
        if (s[0] && s.remove(), n.elemTemp = x(i), a.range ? (n.elemTemp.find("." + w).eq(0).data("value", a.value[0]), n.elemTemp.find("." + w).eq(1).data("value", a.value[1])) : n.elemTemp.find("." + w).data("value", a.value), l.html(n.elemTemp), "vertical" === a.type && n.elemTemp.height(a.height + "px"), a.showstep) {
            for (var o = (a.max - a.min) / a.step, r = "", u = 1; u < 1 + o; u++) {
                var c = 100 * u / o;
                c < 100 && (r += '<div class="layui-slider-step" style="' + ("vertical" === a.type ? "bottom" : "left") + ":" + c + '%"></div>')
            }
            n.elemTemp.append(r)
        }

        function d(e) {
            e = e.parent().data("value"), e = a.setTips ? a.setTips(e) : e;
            n.elemTemp.find("." + L).html(e)
        }

        function p(e) {
            var t = "vertical" === a.type ? a.height : n.elemTemp[0].offsetWidth,
                i = n.elemTemp.find("." + w);
            return ("vertical" === a.type ? t - e.parent()[0].offsetTop - i.height() : e.parent()[0].offsetLeft) / t * 100
        }

        function v(e) {
            "vertical" === a.type ? n.elemTemp.find("." + L).css({
                bottom: e + "%",
                "margin-bottom": "20px",
                display: "inline-block"
            }) : n.elemTemp.find("." + L).css({
                left: e + "%",
                display: "inline-block"
            })
        }
        a.input && !a.range && (e = x('<div class="layui-slider-input"><div class="layui-slider-input-txt"><input type="text" class="layui-input"></div><div class="layui-slider-input-btn"><i class="layui-icon layui-icon-up"></i><i class="layui-icon layui-icon-down"></i></div></div>'), l.css("position", "relative"), l.append(e), l.find("." + E).children("input").val(a.value), "vertical" === a.type ? e.css({
            left: 0,
            top: -48
        }) : n.elemTemp.css("margin-right", e.outerWidth() + 15)), a.disabled ? (n.elemTemp.addClass(f), n.elemTemp.find("." + M).addClass(f)) : n.slide(), a.tips && (a.tipsAlways ? (d(s = n.elemTemp.find("." + M)), v(p(s))) : n.elemTemp.find("." + M).on("mouseover", function () {
            d(x(this));
            var e = p(x(this));
            clearTimeout(t), t = setTimeout(function () {
                v(e)
            }, 300)
        }).on("mouseout", function () {
            clearTimeout(t), a.tipsAlways || n.elemTemp.find("." + L).css("display", "none")
        }))
    }, t.prototype.slide = function (e, t, i) {
        var u = this,
            c = u.config,
            d = u.elemTemp,
            p = function () {
                return "vertical" === c.type ? c.height : d[0].offsetWidth
            },
            v = d.find("." + w),
            o = d.next(".layui-slider-input"),
            r = o.children("." + E).children("input").val(),
            m = 100 / ((c.max - c.min) / c.step),
            f = u.precision(),
            h = function (e, t, i) {
                e = (e = 100 < (e = 100 < Math.ceil(e) * m ? Math.ceil(e) * m : Math.round(e) * m) ? 100 : e) < 0 ? 0 : e, v.eq(t).css("vertical" === c.type ? "bottom" : "left", e + "%");
                var n, a = y(v[0].offsetLeft),
                    l = c.range ? y(v[1].offsetLeft) : 0,
                    s = ("vertical" === c.type ? (d.find("." + L).css({
                        bottom: e + "%",
                        "margin-bottom": "20px"
                    }), a = y(p() - v[0].offsetTop - v.height()), l = c.range ? y(p() - v[1].offsetTop - v.height()) : 0) : d.find("." + L).css("left", e + "%"), a = 100 < a ? 100 : a, l = 100 < l ? 100 : l, Math.min(a, l)),
                    a = Math.abs(a - l),
                    l = ("vertical" === c.type ? d.find("." + T).css({
                        height: a + "%",
                        bottom: s + "%"
                    }) : d.find("." + T).css({
                        width: a + "%",
                        left: s + "%"
                    }), c.min + (c.max - c.min) * e / 100),
                    l = Number(parseFloat(l).toFixed(f));
                r = l, o.children("." + E).children("input").val(r), v.eq(t).data("value", l), d.find("." + L).html(c.setTips ? c.setTips(l) : l), c.range && (n = [v.eq(0).data("value"), v.eq(1).data("value")])[0] > n[1] && n.reverse(), u.value = c.range ? n : l, c.change && c.change(u.value), "done" === i && c.done && c.done(u.value)
            },
            y = function (e) {
                var t = e / p() * 100 / m,
                    i = Math.round(t) * m;
                return i = e == p() ? Math.ceil(t) * m : i
            },
            g = x(['<div class="layui-auxiliar-moving" id="LAY-slider-moving"></div'].join(""));
        if ("set" === e) return h((t - c.min) / (c.max - c.min) * 100 / m, i, "done");
        d.find("." + M).each(function (o) {
            var r = x(this);
            r.on("mousedown touchstart", function (e) {
                "touchstart" === (e = e || window.event).type && (e.clientX = e.originalEvent.touches[0].clientX, e.clientY = e.originalEvent.touches[0].clientY);
                var t, i, n, a, l = r.parent()[0].offsetLeft,
                    s = e.clientX;
                "vertical" === c.type && (l = p() - r.parent()[0].offsetTop - v.height(), s = e.clientY);
                t = r, i = function (e) {
                    "touchmove" === (e = e || window.event).type && (e.clientX = e.touches[0].clientX, e.clientY = e.touches[0].clientY);
                    var t = l + ("vertical" === c.type ? s - e.clientY : e.clientX - s),
                        t = (t = (t = t < 0 ? 0 : t) > p() ? p() : t) / p() * 100 / m;
                    h(t, o), r.addClass(Y), d.find("." + L).show(), e.preventDefault()
                }, n = function (e) {
                    r.removeClass(Y), c.tipsAlways || setTimeout(function () {
                        d.find("." + L).hide()
                    }, e)
                }, a = function () {
                    n && n(b.touchEventsSupported() ? 1e3 : 0), g.remove(), c.done && c.done(u.value), b.touchEventsSupported() && (t[0].removeEventListener("touchmove", i, !!b.passiveSupported && {
                        passive: !1
                    }), t[0].removeEventListener("touchend", a), t[0].removeEventListener("touchcancel", a))
                }, x("#LAY-slider-moving")[0] || x("body").append(g), g.on("mousemove", i), g.on("mouseup", a).on("mouseleave", a), b.touchEventsSupported() && (t[0].addEventListener("touchmove", i, !!b.passiveSupported && {
                    passive: !1
                }), t[0].addEventListener("touchend", a), t[0].addEventListener("touchcancel", a))
            })
        }), d.on("click", function (e) {
            var t = x("." + M),
                i = x(this);
            !t.is(event.target) && 0 === t.has(event.target).length && t.length && (i = (t = (t = (t = "vertical" === c.type ? p() - e.clientY + i.offset().top - x(window).scrollTop() : e.clientX - i.offset().left - x(window).scrollLeft()) < 0 ? 0 : t) > p() ? p() : t) / p() * 100 / m, t = c.range ? "vertical" === c.type ? Math.abs(t - parseInt(x(v[0]).css("bottom"))) > Math.abs(t - parseInt(x(v[1]).css("bottom"))) ? 1 : 0 : Math.abs(t - v[0].offsetLeft) > Math.abs(t - v[1].offsetLeft) ? 1 : 0 : 0, h(i, t, "done"), e.preventDefault())
        }), o.children(".layui-slider-input-btn").children("i").each(function (t) {
            x(this).on("click", function () {
                r = o.children("." + E).children("input").val();
                var e = ((r = 1 == t ? r - c.step < c.min ? c.min : Number(r) - c.step : Number(r) + c.step > c.max ? c.max : Number(r) + c.step) - c.min) / (c.max - c.min) * 100 / m;
                h(e, 0, "done")
            })
        });
        var n = function () {
            var e = this.value,
                e = (e = (e = (e = isNaN(e) ? 0 : e) < c.min ? c.min : e) > c.max ? c.max : e, ((this.value = e) - c.min) / (c.max - c.min) * 100 / m);
            h(e, 0, "done")
        };
        o.children("." + E).children("input").on("keydown", function (e) {
            13 === e.keyCode && (e.preventDefault(), n.call(this))
        }).on("change", n)
    }, t.prototype.events = function () {
        this.config
    }, m.render = function (e) {
        e = new t(e);
        return function () {
            var i = this,
                n = i.config;
            return {
                setValue: function (e, t) {
                    return e = (e = e > n.max ? n.max : e) < n.min ? n.min : e, n.value = e, i.slide("set", e, t || 0)
                },
                config: n
            }
        }.call(e)
    }, e(i, m)
});
layui.define(["jquery", "lay"], function (e) {
    "use strict";
    var x = layui.$,
        P = layui.lay,
        o = layui.hint(),
        i = layui.device().mobile ? "click" : "mousedown",
        r = {
            config: {},
            index: layui.colorpicker ? layui.colorpicker.index + 1e4 : 0,
            set: function (e) {
                var i = this;
                return i.config = x.extend({}, i.config, e), i
            },
            on: function (e, i) {
                return layui.onevent.call(this, "colorpicker", e, i)
            }
        },
        n = function () {
            var e = this.config,
                i = e.id;
            return n.that[i] = this, {
                config: e
            }
        },
        t = "colorpicker",
        l = "layui-colorpicker",
        c = ".layui-colorpicker-main",
        C = "layui-icon-down",
        w = "layui-icon-close",
        T = "layui-colorpicker-trigger-span",
        B = "layui-colorpicker-trigger-i",
        I = "layui-colorpicker-side-slider",
        E = "layui-colorpicker-basis",
        D = "layui-colorpicker-alpha-bgcolor",
        Y = "layui-colorpicker-alpha-slider",
        M = "layui-colorpicker-basis-cursor",
        X = "layui-colorpicker-main-input",
        j = function (e) {
            var i = {
                    h: 0,
                    s: 0,
                    b: 0
                },
                o = Math.min(e.r, e.g, e.b),
                t = Math.max(e.r, e.g, e.b),
                n = t - o;
            return i.b = t, i.s = 0 !== t ? 255 * n / t : 0, 0 !== i.s ? e.r == t ? i.h = (e.g - e.b) / n : e.g == t ? i.h = 2 + (e.b - e.r) / n : i.h = 4 + (e.r - e.g) / n : i.h = -1, t === o && (i.h = 0), i.h *= 60, i.h < 0 && (i.h += 360), i.s *= 100 / 255, i.b *= 100 / 255, i
        },
        F = function (e) {
            var i, o = {},
                t = e.h,
                n = 255 * e.s / 100,
                e = 255 * e.b / 100;
            return 0 == n ? o.r = o.g = o.b = e : (e = t % 60 * ((i = e) - (n = (255 - n) * e / 255)) / 60, (t = 360 === t ? 0 : t) < 60 ? (o.r = i, o.b = n, o.g = n + e) : t < 120 ? (o.g = i, o.b = n, o.r = i - e) : t < 180 ? (o.g = i, o.r = n, o.b = n + e) : t < 240 ? (o.b = i, o.r = n, o.g = i - e) : t < 300 ? (o.b = i, o.g = n, o.r = n + e) : t < 360 ? (o.r = i, o.g = n, o.b = i - e) : (o.r = 0, o.g = 0, o.b = 0)), {
                r: Math.round(o.r),
                g: Math.round(o.g),
                b: Math.round(o.b)
            }
        },
        H = function (e) {
            var e = F(e),
                o = [e.r.toString(16), e.g.toString(16), e.b.toString(16)];
            return x.each(o, function (e, i) {
                1 === i.length && (o[e] = "0" + i)
            }), o.join("")
        },
        L = function (e) {
            e = e.match(/[0-9]{1,3}/g) || [];
            return {
                r: e[0],
                g: e[1],
                b: e[2]
            }
        },
        W = x(window),
        a = x(document),
        s = function (e) {
            this.index = ++r.index, this.config = x.extend({}, this.config, r.config, e), this.render()
        };
    s.prototype.config = {
        color: "",
        size: null,
        alpha: !1,
        format: "hex",
        predefine: !1,
        colors: ["#16baaa", "#16b777", "#1E9FFF", "#FF5722", "#FFB800", "#01AAED", "#999", "#c00", "#ff8c00", "#ffd700", "#90ee90", "#00ced1", "#1e90ff", "#c71585", "rgb(0, 186, 189)", "rgb(255, 120, 0)", "rgb(250, 212, 0)", "#393D49", "rgba(0,0,0,.5)", "rgba(255, 69, 0, 0.68)", "rgba(144, 240, 144, 0.5)", "rgba(31, 147, 255, 0.73)"]
    }, s.prototype.render = function () {
        var e = this,
            i = e.config;
        if (1 < (t = x(i.elem)).length) return layui.each(t, function () {
            r.render(x.extend({}, i, {
                elem: this
            }))
        }), e;
        x.extend(i, P.options(t[0]));
        var o = x(['<div class="layui-unselect layui-colorpicker">', "<span " + ("rgb" == i.format && i.alpha ? 'class="layui-colorpicker-trigger-bgcolor"' : "") + ">", '<span class="layui-colorpicker-trigger-span" ', 'lay-type="' + ("rgb" == i.format ? i.alpha ? "rgba" : "torgb" : "") + '" ', 'style="' + (o = "", i.color ? (o = i.color, 3 < (i.color.match(/[0-9]{1,3}/g) || []).length && (i.alpha && "rgb" == i.format || (o = "#" + H(j(L(i.color))))), "background: " + o) : o) + '">', '<i class="layui-icon layui-colorpicker-trigger-i ' + (i.color ? C : w) + '"></i>', "</span>", "</span>", "</div>"].join("")),
            t = i.elem = x(i.elem);
        i.size && o.addClass("layui-colorpicker-" + i.size), t.addClass("layui-inline").html(e.elemColorBox = o), i.id = "id" in i ? i.id : t.attr("id") || e.index, e.color = e.elemColorBox.find("." + T)[0].style.background, e.events()
    }, s.prototype.renderPicker = function () {
        var o, e = this,
            i = e.config,
            t = e.elemColorBox[0],
            n = e.elemPicker = x(['<div id="layui-colorpicker' + e.index + '" data-index="' + e.index + '" class="layui-anim layui-anim-downbit layui-colorpicker-main">', '<div class="layui-colorpicker-main-wrapper">', '<div class="layui-colorpicker-basis">', '<div class="layui-colorpicker-basis-white"></div>', '<div class="layui-colorpicker-basis-black"></div>', '<div class="layui-colorpicker-basis-cursor"></div>', "</div>", '<div class="layui-colorpicker-side">', '<div class="layui-colorpicker-side-slider"></div>', "</div>", "</div>", '<div class="layui-colorpicker-main-alpha ' + (i.alpha ? "layui-show" : "") + '">', '<div class="layui-colorpicker-alpha-bgcolor">', '<div class="layui-colorpicker-alpha-slider"></div>', "</div>", "</div>", i.predefine ? (o = ['<div class="layui-colorpicker-main-pre">'], layui.each(i.colors, function (e, i) {
                o.push(['<div class="layui-colorpicker-pre' + (3 < (i.match(/[0-9]{1,3}/g) || []).length ? " layui-colorpicker-pre-isalpha" : "") + '">', '<div style="background:' + i + '"></div>', "</div>"].join(""))
            }), o.push("</div>"), o.join("")) : "", '<div class="layui-colorpicker-main-input">', '<div class="layui-inline">', '<input type="text" class="layui-input">', "</div>", '<div class="layui-btn-container">', '<button class="layui-btn layui-btn-primary layui-btn-sm" colorpicker-events="clear">\u6e05\u7a7a</button>', '<button class="layui-btn layui-btn-sm" colorpicker-events="confirm">\u786e\u5b9a</button>', "</div", "</div>", "</div>"].join(""));
        e.elemColorBox.find("." + T)[0];
        x(c)[0] && x(c).data("index") == e.index ? e.removePicker(s.thisElemInd) : (e.removePicker(s.thisElemInd), x("body").append(n)), r.thisId = i.id, s.thisElemInd = e.index, s.thisColor = t.style.background, e.position(), e.pickerEvents()
    }, s.prototype.removePicker = function (e) {
        var i = this.config,
            e = x("#layui-colorpicker" + (e || this.index));
        return e[0] && (e.remove(), delete r.thisId, "function" == typeof i.close) && i.close(this.color), this
    }, s.prototype.position = function () {
        var e = this,
            i = e.config;
        return P.position(e.bindElem || e.elemColorBox[0], e.elemPicker[0], {
            position: i.position,
            align: "center"
        }), e
    }, s.prototype.val = function () {
        var e, i = this,
            o = (i.config, i.elemColorBox.find("." + T)),
            t = i.elemPicker.find("." + X),
            n = o[0].style.backgroundColor;
        n ? (e = j(L(n)), o = o.attr("lay-type"), i.select(e.h, e.s, e.b), "torgb" === o ? t.find("input").val(n) : "rgba" === o ? (o = L(n), 3 === (n.match(/[0-9]{1,3}/g) || []).length ? (t.find("input").val("rgba(" + o.r + ", " + o.g + ", " + o.b + ", 1)"), i.elemPicker.find("." + Y).css("left", 280)) : (t.find("input").val(n), n = 280 * n.slice(n.lastIndexOf(",") + 1, n.length - 1), i.elemPicker.find("." + Y).css("left", n)), i.elemPicker.find("." + D)[0].style.background = "linear-gradient(to right, rgba(" + o.r + ", " + o.g + ", " + o.b + ", 0), rgb(" + o.r + ", " + o.g + ", " + o.b + "))") : t.find("input").val("#" + H(e))) : (i.select(0, 100, 100), t.find("input").val(""), i.elemPicker.find("." + D)[0].style.background = "", i.elemPicker.find("." + Y).css("left", 280))
    }, s.prototype.side = function () {
        var r = this,
            l = r.config,
            c = r.elemColorBox.find("." + T),
            a = c.attr("lay-type"),
            s = r.elemPicker.find(".layui-colorpicker-side"),
            o = r.elemPicker.find("." + I),
            d = r.elemPicker.find("." + E),
            t = r.elemPicker.find("." + M),
            u = r.elemPicker.find("." + D),
            f = r.elemPicker.find("." + Y),
            p = o[0].offsetTop / 180 * 360,
            h = 100 - t[0].offsetTop / 180 * 100,
            g = t[0].offsetLeft / 260 * 100,
            v = Math.round(f[0].offsetLeft / 280 * 100) / 100,
            m = r.elemColorBox.find("." + B),
            e = r.elemPicker.find(".layui-colorpicker-pre").children("div"),
            y = function (e, i, o, t) {
                r.select(e, i, o);
                var n = F({
                        h: e,
                        s: i,
                        b: o
                    }),
                    e = H({
                        h: e,
                        s: i,
                        b: o
                    }),
                    i = r.elemPicker.find("." + X).find("input");
                m.addClass(C).removeClass(w), c[0].style.background = "rgb(" + n.r + ", " + n.g + ", " + n.b + ")", "torgb" === a ? i.val("rgb(" + n.r + ", " + n.g + ", " + n.b + ")") : "rgba" === a ? (f.css("left", 280 * t), i.val("rgba(" + n.r + ", " + n.g + ", " + n.b + ", " + t + ")"), c[0].style.background = "rgba(" + n.r + ", " + n.g + ", " + n.b + ", " + t + ")", u[0].style.background = "linear-gradient(to right, rgba(" + n.r + ", " + n.g + ", " + n.b + ", 0), rgb(" + n.r + ", " + n.g + ", " + n.b + "))") : i.val("#" + e), l.change && l.change(x.trim(r.elemPicker.find("." + X).find("input").val()))
            },
            i = x(['<div class="layui-auxiliar-moving" id="LAY-colorpicker-moving"></div>'].join("")),
            b = function (e) {
                x("#LAY-colorpicker-moving")[0] || x("body").append(i), i.on("mousemove", e), i.on("mouseup", function () {
                    i.remove()
                }).on("mouseleave", function () {
                    i.remove()
                })
            },
            n = !0,
            k = !0;
        o.on("mousedown", function (e, i) {
            var t = this.offsetTop,
                n = (e.clientY === undefined ? i : e).clientY;
            k && layui.stope(e), b(function (e) {
                var i = t + (e.clientY - n),
                    o = s[0].offsetHeight,
                    o = (i = o < (i = i < 0 ? 0 : i) ? o : i) / 180 * 360;
                y(p = o, g, h, v), e.preventDefault()
            }), e.preventDefault()
        }), s.on("mousedown", function (e) {
            var i = e.clientY - x(this).offset().top + W.scrollTop(),
                i = (i = (i = i < 0 ? 0 : i) > this.offsetHeight ? this.offsetHeight : i) / 180 * 360;
            y(p = i, g, h, v), e.preventDefault(), n && o.trigger("mousedown", e)
        }), t.on("mousedown", function (e, i) {
            var r = this.offsetTop,
                l = this.offsetLeft,
                c = (e.clientY === undefined ? i : e).clientY,
                a = (e.clientX === undefined ? i : e).clientX;
            k && layui.stope(e), b(function (e) {
                var i = r + (e.clientY - c),
                    o = l + (e.clientX - a),
                    t = d[0].offsetHeight,
                    n = d[0].offsetWidth,
                    n = (o = n < (o = o < 0 ? 0 : o) ? n : o) / 260 * 100,
                    o = 100 - (i = t < (i = i < 0 ? 0 : i) ? t : i) / 180 * 100;
                y(p, g = n, h = o, v), e.preventDefault()
            }), e.preventDefault()
        }), d.on("mousedown", function (e) {
            var i = e.clientY - x(this).offset().top + W.scrollTop(),
                o = e.clientX - x(this).offset().left + W.scrollLeft(),
                o = ((i = i < 0 ? 0 : i) > this.offsetHeight && (i = this.offsetHeight), (o = (o = o < 0 ? 0 : o) > this.offsetWidth ? this.offsetWidth : o) / 260 * 100),
                i = 100 - i / 180 * 100;
            y(p, g = o, h = i, v), layui.stope(e), e.preventDefault(), n && t.trigger("mousedown", e)
        }), f.on("mousedown", function (e, i) {
            var t = this.offsetLeft,
                n = (e.clientX === undefined ? i : e).clientX;
            k && layui.stope(e), b(function (e) {
                var i = t + (e.clientX - n),
                    o = u[0].offsetWidth,
                    o = (o < (i = i < 0 ? 0 : i) && (i = o), Math.round(i / 280 * 100) / 100);
                y(p, g, h, v = o), e.preventDefault()
            }), e.preventDefault()
        }), u.on("mousedown", function (e) {
            var i = e.clientX - x(this).offset().left,
                i = ((i = i < 0 ? 0 : i) > this.offsetWidth && (i = this.offsetWidth), Math.round(i / 280 * 100) / 100);
            y(p, g, h, v = i), e.preventDefault(), n && f.trigger("mousedown", e)
        }), e.each(function () {
            x(this).on("click", function () {
                x(this).parent(".layui-colorpicker-pre").addClass("selected").siblings().removeClass("selected");
                var e = this.style.backgroundColor,
                    i = j(L(e)),
                    o = e.slice(e.lastIndexOf(",") + 1, e.length - 1);
                p = i.h, g = i.s, h = i.b, 3 === (e.match(/[0-9]{1,3}/g) || []).length && (o = 1), v = o, y(i.h, i.s, i.b, o)
            })
        }), P.touchEventsSupported() && layui.each([{
            elem: s,
            eventType: "mousedown"
        }, {
            elem: u,
            eventType: "mousedown"
        }, {
            elem: d,
            eventType: "mousedown"
        }], function (e, t) {
            P.touchSwipe(t.elem, {
                onTouchStart: function () {
                    k = n = !1
                },
                onTouchMove: function (e) {
                    var i, o;
                    e = e, i = t.eventType, e = e.touches[0], (o = document.createEvent("MouseEvent")).initMouseEvent(i, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(o)
                },
                onTouchEnd: function () {
                    i.remove(), k = n = !0
                }
            })
        })
    }, s.prototype.select = function (e, i, o, t) {
        this.config;
        var n = H({
                h: e,
                s: 100,
                b: 100
            }),
            e = (H({
                h: e,
                s: i,
                b: o
            }), e / 360 * 180),
            o = 180 - o / 100 * 180,
            i = i / 100 * 260,
            r = this.elemPicker.find("." + E)[0];
        this.elemPicker.find("." + I).css("top", e), r.style.background = "#" + n, this.elemPicker.find("." + M).css({
            top: o / r.offsetHeight * 100 + "%",
            left: i / r.offsetWidth * 100 + "%"
        })
    }, s.prototype.pickerEvents = function () {
        var c = this,
            a = c.config,
            s = c.elemColorBox.find("." + T),
            d = c.elemPicker.find("." + X + " input"),
            o = {
                clear: function (e) {
                    s[0].style.background = "", c.elemColorBox.find("." + B).removeClass(C).addClass(w), c.color = "", a.done && a.done(""), c.removePicker()
                },
                confirm: function (e, i) {
                    var o, t, n, r, l = x.trim(d.val()); - 1 < l.indexOf(",") ? (t = j(L(l)), c.select(t.h, t.s, t.b), s[0].style.background = o = "#" + H(t), 3 < (l.match(/[0-9]{1,3}/g) || []).length && "rgba" === s.attr("lay-type") && (n = 280 * l.slice(l.lastIndexOf(",") + 1, l.length - 1), c.elemPicker.find("." + Y).css("left", n), o = s[0].style.background = l)) : (3 === (n = -1 < (n = l).indexOf("#") ? n.substring(1) : n).length && (n = (r = n.split(""))[0] + r[0] + r[1] + r[1] + r[2] + r[2]), r = {
                        r: (n = parseInt(n, 16)) >> 16,
                        g: (65280 & n) >> 8,
                        b: 255 & n
                    }, t = j(r), s[0].style.background = o = "#" + H(t), c.elemColorBox.find("." + B).removeClass(w).addClass(C)), "change" === i ? (c.select(t.h, t.s, t.b, i), a.change && a.change(o)) : (c.color = l, a.done && a.done(l), c.removePicker())
                }
            };
        c.elemPicker.on("click", "*[colorpicker-events]", function () {
            var e = x(this),
                i = e.attr("colorpicker-events");
            o[i] && o[i].call(this, e)
        }), d.on("keyup", function (e) {
            var i = x(this);
            o.confirm.call(this, i, 13 === e.keyCode ? null : "change")
        })
    }, s.prototype.events = function () {
        var e = this;
        e.config;
        e.elemColorBox.on("click", function () {
            e.renderPicker(), x(c)[0] && (e.val(), e.side())
        })
    }, a.on(i, function (e) {
        var i, o, t;
        r.thisId && (i = n.getThis(r.thisId)) && (o = i.config, t = i.elemColorBox.find("." + T), x(e.target).hasClass(l) || x(e.target).parents("." + l)[0] || x(e.target).hasClass(c.replace(/\./g, "")) || x(e.target).parents(c)[0] || i.elemPicker && (i.color ? (e = j(L(i.color)), i.select(e.h, e.s, e.b)) : i.elemColorBox.find("." + B).removeClass(C).addClass(w), t[0].style.background = i.color || "", "function" == typeof o.cancel && o.cancel(i.color), i.removePicker()))
    }), W.on("resize", function () {
        if (r.thisId) {
            var e = n.getThis(r.thisId);
            if (e) return !(!e.elemPicker || !x(c)[0]) && void e.position()
        }
    }), n.that = {}, n.getThis = function (e) {
        var i = n.that[e];
        return i || o.error(e ? t + " instance with ID '" + e + "' not found" : "ID argument required"), i
    }, r.render = function (e) {
        e = new s(e);
        return n.call(e)
    }, e(t, r)
});
layui.define("jquery", function (t) {
    "use strict";
    var u = layui.$,
        d = (layui.hint(), layui.device()),
        r = "element",
        y = "layui-this",
        f = "layui-show",
        c = ".layui-tab-title",
        i = function () {
            this.config = {}
        },
        h = (i.prototype.set = function (t) {
            return u.extend(!0, this.config, t), this
        }, i.prototype.on = function (t, i) {
            return layui.onevent.call(this, r, t, i)
        }, i.prototype.tabAdd = function (t, i) {
            var a, e = u(".layui-tab[lay-filter=" + t + "]"),
                l = e.children(c),
                n = l.children(".layui-tab-bar"),
                s = e.children(".layui-tab-content"),
                o = "<li" + (a = [], layui.each(i, function (t, i) {
                    /^(title|content)$/.test(t) || a.push("lay-" + t + '="' + i + '"')
                }), 0 < a.length && a.unshift(""), a.join(" ")) + ">" + (i.title || "unnaming") + "</li>";
            return n[0] ? n.before(o) : l.append(o), s.append('<div class="layui-tab-item" ' + (i.id ? 'lay-id="' + i.id + '"' : "") + ">" + (i.content || "") + "</div>"), i.change && this.tabChange(t, i.id), l.data("LAY_TAB_CHANGE", i.change), w.tabAuto(i.change ? "change" : null, e), this
        }, i.prototype.tabDelete = function (t, i, a) {
            t = u(".layui-tab[lay-filter=" + t + "]").children(c).find('>li[lay-id="' + i + '"]');
            return w.tabDelete.call(t[0], {
                liElem: t,
                force: a
            }), this
        }, i.prototype.tabChange = function (t, i, a) {
            t = u(".layui-tab[lay-filter=" + t + "]").children(c).find('>li[lay-id="' + i + '"]');
            return w.tabClick.call(t[0], {
                liElem: t,
                force: a
            }), this
        }, i.prototype.tab = function (a) {
            a = a || {}, e.on("click", a.headerElem, function (t) {
                var i = u(a.headerElem).index(u(this));
                w.tabClick.call(this, {
                    index: i,
                    options: a
                })
            })
        }, i.prototype.progress = function (t, i) {
            var a = "layui-progress",
                t = u("." + a + "[lay-filter=" + t + "]").find("." + a + "-bar"),
                a = t.find("." + a + "-text");
            return t.css("width", function () {
                return /^.+\/.+$/.test(i) ? 100 * new Function("return " + i)() + "%" : i
            }).attr("lay-percent", i), a.text(i), this
        }, ".layui-nav"),
        p = "layui-nav-item",
        b = "layui-nav-bar",
        v = "layui-nav-tree",
        m = "layui-nav-child",
        g = "layui-nav-more",
        C = "layui-anim layui-anim-upbit",
        w = {
            tabClick: function (t) {
                var i = (t = t || {}).options || {},
                    a = t.liElem || u(this),
                    e = i.headerElem ? a.parent() : a.parents(".layui-tab").eq(0),
                    i = i.bodyElem ? u(i.bodyElem) : e.children(".layui-tab-content").children(".layui-tab-item"),
                    l = a.find("a"),
                    l = "javascript:;" !== l.attr("href") && "_blank" === l.attr("target"),
                    n = "string" == typeof a.attr("lay-unselect"),
                    s = e.attr("lay-filter"),
                    o = a.attr("lay-id"),
                    c = "index" in t ? t.index : a.parent().children("li").index(a);
                if (!t.force) {
                    var t = a.siblings("." + y);
                    if (!1 === layui.event.call(this, r, "tabBeforeChange(" + s + ")", {
                        elem: e,
                        from: {
                            index: a.parent().children("li").index(t),
                            id: t.attr("lay-id")
                        },
                        to: {
                            index: c,
                            id: o
                        }
                    })) return
                }
                l || n || (a.addClass(y).siblings().removeClass(y), (o ? t = (t = i.filter('[lay-id="' + o + '"]')).length ? t : i.eq(c) : i.eq(c)).addClass(f).siblings().removeClass(f)), layui.event.call(this, r, "tab(" + s + ")", {
                    elem: e,
                    index: c,
                    id: o
                })
            },
            tabDelete: function (t) {
                var i = (t = t || {}).liElem || u(this).parent(),
                    a = i.parent().children("li").index(i),
                    e = i.closest(".layui-tab"),
                    l = e.children(".layui-tab-content").children(".layui-tab-item"),
                    n = e.attr("lay-filter"),
                    s = i.attr("lay-id");
                if (!t.force && !1 === layui.event.call(i[0], r, "tabBeforeDelete(" + n + ")", {
                    elem: e,
                    index: a,
                    id: s
                })) return;
                i.hasClass(y) && (i.next()[0] && i.next().is("li") ? w.tabClick.call(i.next()[0], {
                    index: a + 1
                }) : i.prev()[0] && i.prev().is("li") && w.tabClick.call(i.prev()[0], null, a - 1)), i.remove(), (s ? t = (t = l.filter('[lay-id="' + s + '"]')).length ? t : l.eq(a) : l.eq(a)).remove(), setTimeout(function () {
                    w.tabAuto(null, e)
                }, 50), layui.event.call(this, r, "tabDelete(" + n + ")", {
                    elem: e,
                    index: a,
                    id: s
                })
            },
            tabAuto: function (l, t) {
                var n = "layui-tab-more",
                    s = "layui-tab-bar",
                    o = "layui-tab-close",
                    c = this;
                (t || u(".layui-tab")).each(function () {
                    var t = u(this),
                        a = t.children(".layui-tab-title"),
                        i = (t.children(".layui-tab-content").children(".layui-tab-item"), 'lay-stope="tabmore"'),
                        i = u('<span class="layui-unselect layui-tab-bar" ' + i + "><i " + i + ' class="layui-icon">&#xe61a;</i></span>'),
                        e = (c === window && d.ie, t.attr("lay-allowclose"));
                    e && "false" !== e && a.find("li").each(function () {
                        var t, i = u(this);
                        i.find("." + o)[0] || "false" === i.attr("lay-allowclose") || ((t = u('<i class="layui-icon layui-icon-close layui-unselect ' + o + '"></i>')).on("click", function (t) {
                            w.tabDelete.call(this, {
                                e: t
                            })
                        }), i.append(t))
                    }), "string" != typeof t.attr("lay-unauto") && (a.prop("scrollWidth") > a.outerWidth() + 1 || a.find("li").length && a.height() > (e = a.find("li").eq(0).height()) + e / 2 ? ("change" === l && a.data("LAY_TAB_CHANGE") && a.addClass(n), a.find("." + s)[0] || (a.append(i), t.attr("overflow", ""), i.on("click", function (t) {
                        var i = a.hasClass(n);
                        a[i ? "removeClass" : "addClass"](n)
                    }))) : (a.find("." + s).remove(), t.removeAttr("overflow")))
                })
            },
            hideTabMore: function (t) {
                var i = u(".layui-tab-title");
                !0 !== t && "tabmore" === u(t.target).attr("lay-stope") || (i.removeClass("layui-tab-more"), i.find(".layui-tab-bar").attr("title", ""))
            },
            clickThis: function () {
                var t = u(this),
                    i = t.closest(h),
                    a = i.attr("lay-filter"),
                    e = t.parent(),
                    l = t.siblings("." + m),
                    n = "string" == typeof e.attr("lay-unselect");
                if ("javascript:;" !== t.attr("href") && "_blank" === t.attr("target") || n || l[0] || (i.find("." + y).removeClass(y), e.addClass(y)), i.hasClass(v)) {
                    var n = p + "ed",
                        s = !e.hasClass(n),
                        o = function () {
                            u(this).css({
                                display: ""
                            }), i.children("." + b).css({
                                opacity: 0
                            })
                        };
                    if (l.is(":animated")) return;
                    l.removeClass(C), l[0] && (s ? (l.slideDown(200, o), e.addClass(n)) : (e.removeClass(n), l.show().slideUp(200, o)), "string" != typeof i.attr("lay-accordion") && "all" !== i.attr("lay-shrink") || ((s = e.siblings("." + n)).removeClass(n), s.children("." + m).show().stop().slideUp(200, o)))
                }
                layui.event.call(this, r, "nav(" + a + ")", t)
            },
            collapse: function () {
                var t = u(this),
                    i = t.find(".layui-colla-icon"),
                    a = t.siblings(".layui-colla-content"),
                    e = t.parents(".layui-collapse").eq(0),
                    l = e.attr("lay-filter"),
                    n = "none" === a.css("display");
                "string" == typeof e.attr("lay-accordion") && ((e = e.children(".layui-colla-item").children("." + f)).siblings(".layui-colla-title").children(".layui-colla-icon").html("&#xe602;"), e.removeClass(f)), a[n ? "addClass" : "removeClass"](f), i.html(n ? "&#xe61a;" : "&#xe602;"), layui.event.call(this, r, "collapse(" + l + ")", {
                    title: t,
                    content: a,
                    show: n
                })
            }
        },
        a = (i.prototype.render = i.prototype.init = function (t, i) {
            var a = "string" == typeof i && i ? '[lay-filter="' + i + '"]' : "",
                e = {
                    tab: function (t) {
                        t = t || u(".layui-tab" + a);
                        w.tabAuto.call({}, null, t)
                    },
                    nav: function (t) {
                        var s = {},
                            o = {},
                            c = {},
                            r = "layui-nav-title";
                        (t || u(h + a)).each(function (t) {
                            var i = u(this),
                                a = u('<span class="' + b + '"></span>'),
                                e = i.find("." + p),
                                l = i.find("." + b);
                            l[0] && l.remove(), i.append(a), (i.hasClass(v) ? e.find("dd,>." + r) : e).off("mouseenter.lay_nav").on("mouseenter.lay_nav", function () {
                                ! function (t, i, a) {
                                    var e, l = u(this),
                                        n = l.find("." + m);
                                    i.hasClass(v) ? n[0] || (e = l.children("." + r), t.css({
                                        top: l.offset().top - i.offset().top,
                                        height: (e[0] ? e : l).outerHeight(),
                                        opacity: 1
                                    })) : (n.addClass(C), n.hasClass("layui-nav-child-c") && n.css({
                                        left: -(n.outerWidth() - l.width()) / 2
                                    }), n[0] ? t.css({
                                        left: t.position().left + t.width() / 2,
                                        width: 0,
                                        opacity: 0
                                    }) : t.css({
                                        left: l.position().left + parseFloat(l.css("marginLeft")),
                                        top: l.position().top + l.height() - t.height()
                                    }), s[a] = setTimeout(function () {
                                        t.css({
                                            width: n[0] ? 0 : l.width(),
                                            opacity: n[0] ? 0 : 1
                                        })
                                    }, d.ie && d.ie < 10 ? 0 : 200), clearTimeout(c[a]), "block" === n.css("display") && clearTimeout(o[a]), o[a] = setTimeout(function () {
                                        n.addClass(f), l.find("." + g).addClass(g + "d")
                                    }, 300))
                                }.call(this, a, i, t)
                            }).off("mouseleave.lay_nav").on("mouseleave.lay_nav", function () {
                                i.hasClass(v) ? a.css({
                                    height: 0,
                                    opacity: 0
                                }) : (clearTimeout(o[t]), o[t] = setTimeout(function () {
                                    i.find("." + m).removeClass(f), i.find("." + g).removeClass(g + "d")
                                }, 300))
                            }), i.off("mouseleave.lay_nav").on("mouseleave.lay_nav", function () {
                                clearTimeout(s[t]), c[t] = setTimeout(function () {
                                    i.hasClass(v) || a.css({
                                        width: 0,
                                        left: a.position().left + a.width() / 2,
                                        opacity: 0
                                    })
                                }, 200)
                            }), e.find("a").each(function () {
                                var t = u(this);
                                t.parent();
                                t.siblings("." + m)[0] && !t.children("." + g)[0] && t.append('<i class="layui-icon layui-icon-down ' + g + '"></i>'), t.off("click", w.clickThis).on("click", w.clickThis)
                            })
                        })
                    },
                    breadcrumb: function (t) {
                        (t || u(".layui-breadcrumb" + a)).each(function () {
                            var t = u(this),
                                i = "lay-separator",
                                a = t.attr(i) || "/",
                                e = t.find("a");
                            e.next("span[" + i + "]")[0] || (e.each(function (t) {
                                t !== e.length - 1 && u(this).after("<span " + i + ">" + a + "</span>")
                            }), t.css("visibility", "visible"))
                        })
                    },
                    progress: function (t) {
                        var e = "layui-progress";
                        (t || u("." + e + a)).each(function () {
                            var t = u(this),
                                i = t.find(".layui-progress-bar"),
                                a = i.attr("lay-percent");
                            i.css("width", function () {
                                return /^.+\/.+$/.test(a) ? 100 * new Function("return " + a)() + "%" : a
                            }), t.attr("lay-showpercent") && setTimeout(function () {
                                i.html('<span class="' + e + '-text">' + a + "</span>")
                            }, 350)
                        })
                    },
                    collapse: function (t) {
                        (t || u(".layui-collapse" + a)).each(function () {
                            u(this).find(".layui-colla-item").each(function () {
                                var t = u(this),
                                    i = t.find(".layui-colla-title"),
                                    t = "none" === t.find(".layui-colla-content").css("display");
                                i.find(".layui-colla-icon").remove(), i.append('<i class="layui-icon layui-colla-icon">' + (t ? "&#xe602;" : "&#xe61a;") + "</i>"), i.off("click", w.collapse).on("click", w.collapse)
                            })
                        })
                    }
                };
            return t && "object" == typeof i && i instanceof u ? e[t](i) : e[t] ? e[t]() : layui.each(e, function (t, i) {
                i()
            })
        }, new i),
        e = u(document);
    u(function () {
        a.render()
    }), e.on("click", ".layui-tab-title li", w.tabClick), u(window).on("resize", w.tabAuto), t(r, a)
});
layui.define(["lay", "layer"], function (e) {
    "use strict";
    var F = layui.$,
        a = layui.lay,
        t = layui.layer,
        R = layui.device(),
        i = "upload",
        s = "layui_" + i + "_index",
        w = {
            config: {},
            index: layui[i] ? layui[i].index + 1e4 : 0,
            set: function (e) {
                var t = this;
                return t.config = F.extend({}, t.config, e), t
            },
            on: function (e, t) {
                return layui.onevent.call(this, i, e, t)
            }
        },
        o = function () {
            var t = this,
                e = t.config.id;
            return {
                upload: function (e) {
                    t.upload.call(t, e)
                },
                reload: function (e) {
                    t.reload.call(t, e)
                },
                config: (o.that[e] = t).config
            }
        },
        r = "layui-upload-file",
        l = "layui-upload-form",
        E = "layui-upload-iframe",
        L = "layui-upload-choose",
        T = "UPLOADING",
        D = function (e) {
            var t = this;
            t.index = ++w.index, t.config = F.extend({}, t.config, w.config, e), t.render()
        };
    D.prototype.config = {
        accept: "images",
        exts: "",
        auto: !0,
        bindAction: "",
        url: "",
        force: "",
        field: "file",
        acceptMime: "",
        method: "post",
        data: {},
        drag: !0,
        size: 0,
        number: 0,
        multiple: !1,
        text: {
            "cross-domain": "Cross-domain requests are not supported",
            "data-format-error": "Please return JSON data format",
            "check-error": "",
            error: "",
            "limit-number": null,
            "limit-size": null
        }
    }, D.prototype.reload = function (e) {
        var t = this;
        t.config = F.extend({}, t.config, e), t.render(!0)
    }, D.prototype.render = function (e) {
        var t = this,
            i = t.config,
            n = F(i.elem);
        return 1 < n.length ? (layui.each(n, function () {
            w.render(F.extend({}, i, {
                elem: this
            }))
        }), t) : (F.extend(i, a.options(n[0], {
            attr: n.attr("lay-data") ? "lay-data" : null
        })), !e && n[0] && n.data(s) ? (e = o.getThis(n.data(s))) ? e.reload(i) : void 0 : (i.elem = F(i.elem), i.bindAction = F(i.bindAction), i.id = "id" in i ? i.id : n.attr("id") || t.index, t.file(), void t.events()))
    }, D.prototype.file = function () {
        var e = this,
            t = e.config,
            i = e.elemFile = F(['<input class="' + r + '" type="file" accept="' + t.acceptMime + '" name="' + t.field + '"', t.multiple ? " multiple" : "", ">"].join("")),
            n = t.elem.next();
        (n.hasClass(r) || n.hasClass(l)) && n.remove(), R.ie && R.ie < 10 && t.elem.wrap('<div class="layui-upload-wrap"></div>'), e.isFile() ? (e.elemFile = t.elem, t.field = t.elem[0].name) : t.elem.after(i), R.ie && R.ie < 10 && e.initIE()
    }, D.prototype.initIE = function () {
        var i, e = this.config,
            t = F('<iframe id="' + E + '" class="' + E + '" name="' + E + '" frameborder="0"></iframe>'),
            n = F(['<form target="' + E + '" class="' + l + '" method="post" key="set-mine" enctype="multipart/form-data" action="' + e.url + '">', "</form>"].join(""));
        F("#" + E)[0] || F("body").append(t), e.elem.next().hasClass(l) || (this.elemFile.wrap(n), e.elem.next("." + l).append((i = [], layui.each(e.data, function (e, t) {
            t = "function" == typeof t ? t() : t, i.push('<input type="hidden" name="' + e + '" value="' + t + '">')
        }), i.join(""))))
    }, D.prototype.msg = function (e) {
        return t.msg(e, {
            icon: 2,
            shift: 6
        })
    }, D.prototype.isFile = function () {
        var e = this.config.elem[0];
        if (e) return "input" === e.tagName.toLocaleLowerCase() && "file" === e.type
    }, D.prototype.preview = function (n) {
        window.FileReader && layui.each(this.chooseFiles, function (e, t) {
            var i = new FileReader;
            i.readAsDataURL(t), i.onload = function () {
                n && n(e, t, this.result)
            }
        })
    }, D.prototype.upload = function (e, t) {
        var i, n, a, o, r, u = this,
            f = u.config,
            s = f.text || {},
            l = u.elemFile[0],
            c = function () {
                return e || u.files || u.chooseFiles || l.files
            },
            d = function () {
                var a = 0,
                    o = 0,
                    r = c(),
                    l = function () {
                        f.multiple && a + o === u.fileLength && "function" == typeof f.allDone && f.allDone({
                            total: u.fileLength,
                            successful: a,
                            failed: o
                        })
                    },
                    i = function (i) {
                        var n = new FormData,
                            t = function (e) {
                                i.unified ? layui.each(r, function (e, t) {
                                    delete t[T]
                                }) : delete e[T]
                            };
                        if (layui.each(f.data, function (e, t) {
                            t = "function" == typeof t ? i.unified ? t() : t(i.index, i.file) : t, n.append(e, t)
                        }), i.unified) layui.each(r, function (e, t) {
                            t[T] || (t[T] = !0, n.append(f.field, t))
                        });
                        else {
                            if (i.file[T]) return;
                            n.append(f.field, i.file), i.file[T] = !0
                        }
                        var e = {
                            url: f.url,
                            type: "post",
                            data: n,
                            dataType: f.dataType || "json",
                            contentType: !1,
                            processData: !1,
                            headers: f.headers || {},
                            success: function (e) {
                                f.unified ? a += u.fileLength : a++, m(i.index, e), l(i.index), t(i.file)
                            },
                            error: function (e) {
                                f.unified ? o += u.fileLength : o++, u.msg(s.error || ["Upload failed, please try again.", "status: " + (e.status || "") + " - " + (e.statusText || "error")].join("<br>")), g(i.index, e.responseText, e), l(i.index), t(i.file)
                            }
                        };
                        "function" == typeof f.progress && (e.xhr = function () {
                            var e = F.ajaxSettings.xhr();
                            return e.upload.addEventListener("progress", function (e) {
                                var t;
                                e.lengthComputable && (t = Math.floor(e.loaded / e.total * 100), f.progress(t, (f.item || f.elem)[0], e, i.index))
                            }), e
                        }), F.ajax(e)
                    };
                f.unified ? i({
                    unified: !0,
                    index: 0
                }) : layui.each(r, function (e, t) {
                    i({
                        index: e,
                        file: t
                    })
                })
            },
            p = function () {
                var n = F("#" + E);
                u.elemFile.parent().submit(), clearInterval(D.timer), D.timer = setInterval(function () {
                    var e, t = n.contents().find("body");
                    try {
                        e = t.text()
                    } catch (i) {
                        u.msg(s["cross-domain"]), clearInterval(D.timer), g()
                    }
                    e && (clearInterval(D.timer), t.html(""), m(0, e))
                }, 30)
            },
            h = function (e) {
                if ("json" === f.force && "object" != typeof e) try {
                    return {
                        status: "CONVERTED",
                        data: JSON.parse(e)
                    }
                } catch (t) {
                    return u.msg(s["data-format-error"]), {
                        status: "FORMAT_ERROR",
                        data: {}
                    }
                }
                return {
                    status: "DO_NOTHING",
                    data: {}
                }
            },
            m = function (e, t) {
                u.elemFile.next("." + L).remove(), l.value = "";
                var i = h(t);
                switch (i.status) {
                    case "CONVERTED":
                        t = i.data;
                        break;
                    case "FORMAT_ERROR":
                        return
                }
                "function" == typeof f.done && f.done(t, e || 0, function (e) {
                    u.upload(e)
                })
            },
            g = function (e, t, i) {
                f.auto && (l.value = "");
                var n = h(t);
                switch (n.status) {
                    case "CONVERTED":
                        t = n.data;
                        break;
                    case "FORMAT_ERROR":
                        return
                }
                "function" == typeof f.error && f.error(e || 0, function (e) {
                    u.upload(e)
                }, t, i)
            },
            v = f.exts,
            y = (n = [], layui.each(e || u.chooseFiles, function (e, t) {
                n.push(t.name)
            }), n),
            x = {
                preview: function (e) {
                    u.preview(e)
                },
                upload: function (e, t) {
                    var i = {};
                    i[e] = t, u.upload(i)
                },
                pushFile: function () {
                    return u.files = u.files || {}, layui.each(u.chooseFiles, function (e, t) {
                        u.files[e] = t
                    }), u.files
                },
                resetFile: function (e, t, i) {
                    t = new File([t], i);
                    u.files = u.files || {}, u.files[e] = t
                },
                getChooseFiles: function () {
                    return u.chooseFiles
                }
            },
            b = {
                file: "\u6587\u4ef6",
                images: "\u56fe\u7247",
                video: "\u89c6\u9891",
                audio: "\u97f3\u9891"
            } [f.accept] || "\u6587\u4ef6",
            y = 0 === y.length ? l.value.match(/[^\/\\]+\..+/g) || [] : y;
        if (0 !== y.length) {
            switch (f.accept) {
                case "file":
                    layui.each(y, function (e, t) {
                        if (v && !RegExp(".\\.(" + v + ")$", "i").test(escape(t))) return i = !0
                    });
                    break;
                case "video":
                    layui.each(y, function (e, t) {
                        if (!RegExp(".\\.(" + (v || "avi|mp4|wma|rmvb|rm|flash|3gp|flv") + ")$", "i").test(escape(t))) return i = !0
                    });
                    break;
                case "audio":
                    layui.each(y, function (e, t) {
                        if (!RegExp(".\\.(" + (v || "mp3|wav|mid") + ")$", "i").test(escape(t))) return i = !0
                    });
                    break;
                default:
                    layui.each(y, function (e, t) {
                        if (!RegExp(".\\.(" + (v || "jpg|png|gif|bmp|jpeg|svg|webp") + ")$", "i").test(escape(t))) return i = !0
                    })
            }
            if (i) return u.msg(s["check-error"] || "\u9009\u62e9\u7684" + b + "\u4e2d\u5305\u542b\u4e0d\u652f\u6301\u7684\u683c\u5f0f"), l.value = "";
            if ("choose" !== t && !f.auto || (f.choose && f.choose(x), "choose" !== t)) {
                if (u.fileLength = (a = 0, b = c(), layui.each(b, function () {
                    a++
                }), a), f.number && u.fileLength > f.number) return u.msg("function" == typeof s["limit-number"] ? s["limit-number"](f, u.fileLength) : "\u540c\u65f6\u6700\u591a\u53ea\u80fd\u4e0a\u4f20: " + f.number + " \u4e2a\u6587\u4ef6<br>\u60a8\u5f53\u524d\u5df2\u7ecf\u9009\u62e9\u4e86: " + u.fileLength + " \u4e2a\u6587\u4ef6");
                if (0 < f.size && !(R.ie && R.ie < 10))
                    if (layui.each(c(), function (e, t) {
                        t.size > 1024 * f.size && (t = 1 <= (t = f.size / 1024) ? t.toFixed(2) + "MB" : f.size + "KB", l.value = "", o = t)
                    }), o) return u.msg("function" == typeof s["limit-size"] ? s["limit-size"](f, o) : "\u6587\u4ef6\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7 " + o);
                r = function () {
                    if (R.ie) return (9 < R.ie ? d : p)();
                    d()
                }, "function" == typeof f.before ? w.util.promiseLikeResolve(f.before(x)).then(function (e) {
                    !1 !== e ? r() : f.auto && (l.value = "")
                }, function (e) {
                    f.auto && (l.value = ""), e !== undefined && layui.hint().error(e)
                }) : r()
            }
        }
    }, D.prototype.events = function () {
        var a = this,
            n = a.config,
            o = function (e) {
                a.chooseFiles = {}, layui.each(e, function (e, t) {
                    var i = (new Date).getTime();
                    a.chooseFiles[i + "-" + e] = t
                })
            },
            r = function (e, t) {
                var i = a.elemFile,
                    e = (n.item || n.elem, 1 < e.length ? e.length + "\u4e2a\u6587\u4ef6" : (e[0] || {}).name || i[0].value.match(/[^\/\\]+\..+/g) || []);
                i.next().hasClass(L) && i.next().remove(), a.upload(null, "choose"), a.isFile() || n.choose || i.after('<span class="layui-inline ' + L + '">' + e + "</span>")
            },
            l = function (i) {
                var n = !0;
                return layui.each(a.files, function (e, t) {
                    if (!(n = !(t.name === i.name))) return !0
                }), n
            },
            u = function (e) {
                var i = function (e) {
                    e.ext = e.name.substr(e.name.lastIndexOf(".") + 1).toLowerCase(), e.sizes = w.util.parseSize(e.size)
                };
                return e instanceof FileList ? layui.each(e, function (e, t) {
                    i(t)
                }) : i(e), e
            },
            f = function (e) {
                var i;
                return (e = e || []).length ? a.files ? (i = [], layui.each(e, function (e, t) {
                    l(t) && i.push(u(t))
                }), i) : u(e) : []
            };
        n.elem.off("upload.start").on("upload.start", function () {
            var e = F(this);
            a.config.item = e, a.elemFile[0].click()
        }), R.ie && R.ie < 10 || n.elem.off("upload.over").on("upload.over", function () {
            F(this).attr("lay-over", "")
        }).off("upload.leave").on("upload.leave", function () {
            F(this).removeAttr("lay-over")
        }).off("upload.drop").on("upload.drop", function (e, t) {
            var i = F(this),
                t = f(t.originalEvent.dataTransfer.files);
            i.removeAttr("lay-over"), o(t), n.auto ? a.upload() : r(t)
        }), a.elemFile.on("change", function () {
            var e = f(this.files);
            0 !== e.length && (o(e), n.auto ? a.upload() : r(e))
        }), n.bindAction.off("upload.action").on("upload.action", function () {
            a.upload()
        }), n.elem.data(s) || (n.elem.on("click", function () {
            a.isFile() || F(this).trigger("upload.start")
        }), n.drag && n.elem.on("dragover", function (e) {
            e.preventDefault(), F(this).trigger("upload.over")
        }).on("dragleave", function (e) {
            F(this).trigger("upload.leave")
        }).on("drop", function (e) {
            e.preventDefault(), F(this).trigger("upload.drop", e)
        }), n.bindAction.on("click", function () {
            F(this).trigger("upload.action")
        }), n.elem.data(s, n.id))
    }, w.util = {
        parseSize: function (e, t) {
            var i, n;
            return t = t || 2, null != e && e ? (i = "string" == typeof e ? parseFloat(e) : e, n = Math.floor(Math.log(i) / Math.log(1024)), (e = (e = i / Math.pow(1024, n)) % 1 == 0 ? e : parseFloat(e.toFixed(t))) + ["Bytes", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"][n]) : "0"
        },
        promiseLikeResolve: function (e) {
            var t = F.Deferred();
            return e && "function" == typeof e.then ? e.then(t.resolve, t.reject) : t.resolve(e), t.promise()
        }
    }, o.that = {}, o.getThis = function (e) {
        var t = o.that[e];
        return t || hint.error(e ? i + " instance with ID '" + e + "' not found" : "ID argument required"), t
    }, w.render = function (e) {
        e = new D(e);
        return o.call(e)
    }, e(i, w)
});
layui.define(["lay", "layer", "util"], function (e) {
    "use strict";
    var _ = layui.$,
        p = layui.layer,
        T = layui.util,
        l = layui.hint(),
        d = (layui.device(), lay.ie && 8 === parseFloat(lay.ie)),
        A = "form",
        h = ".layui-form",
        E = "layui-this",
        O = "layui-hide",
        j = "layui-disabled",
        y = "layui-input-number-invalid",
        t = function () {
            this.config = {
                verify: {
                    required: function (e) {
                        if (!/[\S]+/.test(e) || e === undefined || null === e) return "\u5fc5\u586b\u9879\u4e0d\u80fd\u4e3a\u7a7a"
                    },
                    phone: function (e) {
                        if (e && !/^1\d{10}$/.test(e)) return "\u624b\u673a\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e"
                    },
                    email: function (e) {
                        if (e && !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)) return "\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e"
                    },
                    url: function (e) {
                        if (e && !/^(#|(http(s?)):\/\/|\/\/)[^\s]+\.[^\s]+$/.test(e)) return "\u94fe\u63a5\u683c\u5f0f\u4e0d\u6b63\u786e"
                    },
                    number: function (e) {
                        if (e && isNaN(e)) return "\u53ea\u80fd\u586b\u5199\u6570\u5b57"
                    },
                    date: function (e) {
                        if (e && !/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/.test(e)) return "\u65e5\u671f\u683c\u5f0f\u4e0d\u6b63\u786e"
                    },
                    identity: function (e) {
                        if (e && !/(^\d{15}$)|(^\d{17}(x|X|\d)$)/.test(e)) return "\u8eab\u4efd\u8bc1\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e"
                    }
                },
                autocomplete: null
            }
        },
        i = (t.prototype.set = function (e) {
            return _.extend(!0, this.config, e), this
        }, t.prototype.verify = function (e) {
            return _.extend(!0, this.config.verify, e), this
        }, t.prototype.getFormElem = function (e) {
            return _(h + (e ? '[lay-filter="' + e + '"]' : ""))
        }, t.prototype.on = function (e, t) {
            return layui.onevent.call(this, A, e, t)
        }, t.prototype.val = function (e, s) {
            return this.getFormElem(e).each(function (e, t) {
                var i, a, n, l, r = _(this);
                for (i in s) lay.hasOwn(s, i) && (n = s[i], (l = r.find('[name="' + i + '"]'))[0]) && ("checkbox" === (a = l[0].type) ? l[0].checked = n : "radio" === a ? l.each(function () {
                    this.checked = this.value == n + ""
                }) : l.val(n))
            }), r.render(null, e), this.getValue(e)
        }, t.prototype.getValue = function (e, t) {
            t = t || this.getFormElem(e);
            var n = {},
                l = {},
                e = t.find("input,select,textarea");
            return layui.each(e, function (e, t) {
                var i, a = _(this);
                t.name = (t.name || "").replace(/^\s*|\s*&/, ""), t.name && (/^.*\[\]$/.test(t.name) && (i = t.name.match(/^(.*)\[\]$/g)[0], n[i] = 0 | n[i], i = t.name.replace(/^(.*)\[\]$/, "$1[" + n[i]++ + "]")), /^(checkbox|radio)$/.test(t.type) && !t.checked || (l[i || t.name] = "SELECT" === this.tagName && "string" == typeof this.getAttribute("multiple") ? a.val() || [] : this.value))
            }), l
        }, t.prototype.render = function (e, t) {
            var u = this,
                i = u.config,
                a = _(h + (t ? '[lay-filter="' + t + '"]' : "")),
                n = {
                    input: function (e) {
                        var e = e || a.find("input,textarea"),
                            p = (i.autocomplete && e.attr("autocomplete", i.autocomplete), function (e, t) {
                                var i = e.val(),
                                    a = Number(i),
                                    n = Number(e.attr("step")) || 1,
                                    l = Number(e.attr("min")),
                                    r = Number(e.attr("max")),
                                    s = Number(e.attr("lay-precision")),
                                    o = "click" !== t && "" === i,
                                    c = "init" === t,
                                    u = isNaN(a),
                                    d = "string" == typeof e.attr("lay-step-strictly");
                                if (e.toggleClass(y, u), !u) {
                                    if ("click" === t) {
                                        if ("text" === e[0].type && "string" == typeof e.attr("readonly")) return;
                                        a = !!_(this).index() ? a - n : a + n
                                    }
                                    u = function (e) {
                                        return ((e.toString().match(/\.(\d+$)/) || [])[1] || "").length
                                    }, s = 0 <= s ? s : Math.max(u(n), u(i));
                                    o || (c || r <= (a = (a = d ? Math.round(a / n) * n : a) <= l ? l : a) && (a = r), 0 === s ? a = parseInt(a) : 0 < s && (a = a.toFixed(s)), e.val(a), e.attr("lay-input-mirror", e.val())), e[(a < l || r < a) && !o ? "addClass" : "removeClass"]("layui-input-number-out-of-range"), c || ((t = {
                                        increment: e.next().find(".layui-icon-up"),
                                        decrement: e.next().find(".layui-icon-down")
                                    }).increment[r <= a && !o ? "addClass" : "removeClass"](j), t.decrement[a <= l && !o ? "addClass" : "removeClass"](j))
                                }
                            });
                        a.find("input[lay-affix],textarea[lay-affix]").each(function () {
                            var r = _(this),
                                s = r.attr("lay-affix"),
                                o = "layui-input-wrap",
                                c = "layui-input-suffix",
                                u = "layui-input-affix",
                                e = r.is("[disabled]") || r.is("[readonly]"),
                                d = function (e, t) {
                                    (e = _(e))[0] && e[_.trim(t) ? "removeClass" : "addClass"](O)
                                },
                                n = function (i) {
                                    i = _.extend({}, h[s] || {
                                        value: s
                                    }, i, lay.options(r[0]));
                                    var a, t = _('<div class="' + u + '">'),
                                        e = layui.isArray(i.value) ? i.value : [i.value],
                                        e = _((a = [], layui.each(e, function (e, t) {
                                            a.push('<i class="layui-icon layui-icon-' + t + (i.disabled ? " " + j : "") + '"></i>')
                                        }), a.join(""))),
                                        n = (t.append(e), i.split && t.addClass("layui-input-split"), i.className && t.addClass(i.className), r.next("." + u)),
                                        l = (n[0] && n.remove(), r.parent().hasClass(o) || r.wrap('<div class="' + o + '"></div>'), r.next("." + c));
                                    l[0] ? ((n = l.find("." + u))[0] && n.remove(), l.prepend(t), r.css("padding-right", function () {
                                        return (r.closest(".layui-input-group")[0] ? 0 : l.outerWidth()) + t.outerWidth()
                                    })) : (t.addClass(c), r.after(t)), "auto" === i.show && d(t, r.val()), "function" == typeof i.init && i.init.call(this, r, i), r.on("input propertychange", function () {
                                        var e = this.value;
                                        "auto" === i.show && d(t, e)
                                    }), r.on("blur", function () {
                                        "function" == typeof i.blur && i.blur.call(this, r, i)
                                    }), e.on("click", function () {
                                        var e = r.attr("lay-filter");
                                        _(this).hasClass(j) || ("function" == typeof i.click && i.click.call(this, r, i), layui.event.call(this, A, "input-affix(" + e + ")", {
                                            elem: r[0],
                                            affix: s,
                                            options: i
                                        }))
                                    })
                                },
                                h = {
                                    eye: {
                                        value: "eye-invisible",
                                        click: function (e, t) {
                                            var i = "LAY_FORM_INPUT_AFFIX_SHOW",
                                                a = e.data(i);
                                            e.attr("type", a ? "password" : "text").data(i, !a), n({
                                                value: a ? "eye-invisible" : "eye"
                                            })
                                        }
                                    },
                                    clear: {
                                        value: "clear",
                                        click: function (e) {
                                            e.val("").focus(), d(_(this).parent(), null)
                                        },
                                        show: "auto",
                                        disabled: e
                                    },
                                    number: {
                                        value: ["up", "down"],
                                        split: !0,
                                        className: "layui-input-number",
                                        disabled: r.is("[disabled]"),
                                        init: function (a) {
                                            var e, n, l, t, i, r;
                                            "text" !== a.attr("type") && "text" !== a[0].type || (l = n = !(e = ".lay_input_number"), t = "string" == typeof a.attr("readonly"), i = "string" == typeof a.attr("lay-wheel"), r = a.next(".layui-input-number").children("i"), a.attr("lay-input-mirror", a.val()), a.off(e), a.on("keydown" + e, function (e) {
                                                n = !1, 8 !== e.keyCode && 46 !== e.keyCode || (n = !0), t || 2 !== r.length || 38 !== e.keyCode && 40 !== e.keyCode || (e.preventDefault(), r.eq(38 === e.keyCode ? 0 : 1).click())
                                            }), a.on("input" + e + " propertychange" + e, function (e) {
                                                var t, i;
                                                l || "propertychange" === e.type && "value" !== e.originalEvent.propertyName || (n || "" === (e = this.value) || "00" !== e.slice(0, 2) && !e.match(/\s/g) && !((t = e.match(/\./g)) && 1 < t.length || (t = e.match(/e/g)) && 1 < t.length || (i = e.slice(1), (t = i.match(/(\+|-)/g)) && (!/e(\+|-)/i.test(i) || 1 < t.length)) || isNaN(Number(e)) && -1 === v.indexOf(e.slice(-1)) || /e/i.test(e) && (!/\de/i.test(e) || /e\./.test(e))) ? a.attr("lay-input-mirror", this.value) : this.value = a.attr("lay-input-mirror"), a.toggleClass(y, isNaN(Number(this.value))))
                                            }), a.on("compositionstart" + e, function () {
                                                l = !0
                                            }), a.on("compositionend" + e, function () {
                                                l = !1, a.trigger("input")
                                            }), i && a.on(["wheel", "mousewheel", "DOMMouseScroll"].join(e + " ") + e, function (e) {
                                                var t;
                                                r.length && _(this).is(":focus") && (t = 0, e.preventDefault(), "wheel" === e.type ? (e.deltaX = e.originalEvent.deltaX, e.deltaY = e.originalEvent.deltaY, t = Math.abs(e.deltaX) >= Math.abs(e.deltaY) ? e.deltaX : e.deltaY) : "mousewheel" === e.type ? t = -e.originalEvent.wheelDelta : "DOMMouseScroll" === e.type && (t = e.originalEvent.detail), r.eq(0 < t ? 1 : 0).click())
                                            }), t && r.addClass(j)), p.call(this, a, "init")
                                        },
                                        click: function (e) {
                                            p.call(this, e, "click")
                                        },
                                        blur: function (e) {
                                            p.call(this, e, "blur")
                                        }
                                    }
                                };
                            n()
                        })
                    },
                    select: function (e) {
                        var p = "\u8bf7\u9009\u62e9",
                            x = "layui-form-select",
                            w = "layui-select-none",
                            N = "layui-select-create-option",
                            y = "layui-select-panel-elem-data",
                            e = e || a.find("select"),
                            f = function (n, e, t, i, u, a) {
                                var l, d, r, s, o, c, h, p, y, f = _(this),
                                    v = e,
                                    m = v.find("input"),
                                    g = n.find("dl"),
                                    b = (g.children("dd"), g.children("dt")),
                                    k = this.selectedIndex,
                                    C = "";
                                t || (d = "cs" === f.attr("lay-search") ? {
                                    caseSensitive: !0
                                } : lay.options(f, {
                                    attr: "lay-search"
                                }), r = f.attr("lay-append-to") || "body", s = f.attr("lay-append-position"), o = !(!lay.ie || "10" !== lay.ie && "11" !== lay.ie || !m.attr("placeholder")), c = function () {
                                    a && (n.appendTo(r).css({
                                        width: v.width() + "px"
                                    }), (e = function () {
                                        lay.position(v[0], n[0], {
                                            position: s,
                                            allowBottomOut: !0,
                                            offset: [0, 5]
                                        })
                                    })(), _(window).on("resize.lay_select_resize", e));
                                    var e = n.offset().top + n.outerHeight() + 5 - S.scrollTop(),
                                        t = g.outerHeight(),
                                        i = g.children("dd");
                                    k = f[0].selectedIndex, v.parent().addClass(x + "ed"), i.removeClass(O), b.removeClass(O), i.removeClass(E), 0 <= k && i.eq(k).addClass(E), e + t > S.height() && t <= e && n.addClass(x + "up"), p(), o && g.off("mousedown.lay_select_ieph").on("mousedown.lay_select_ieph", function () {
                                        m[0].__ieph = !0, setTimeout(function () {
                                            m[0].__ieph = !1
                                        }, 60)
                                    }), l = lay.onClickOutside((a ? n : g)[0], function () {
                                        h(), C && m.val(C)
                                    }, {
                                        ignore: v
                                    })
                                }, h = function (e) {
                                    v.parent().removeClass(x + "ed " + x + "up"), m.blur(), u && g.children("." + N).remove(), l && l(), a && (n.detach(), _(window).off("resize.lay_select_resize")), e || y(m.val(), function (e) {
                                        var t = f[0].selectedIndex;
                                        e && (C = _(f[0].options[t]).html(), 0 === t && C === m.attr("placeholder") && (C = ""), m.val(C || ""))
                                    })
                                }, p = function () {
                                    var e, t, i = g.children("dd." + E);
                                    i[0] && (e = i.position().top, t = g.height(), i = i.height(), t < e && g.scrollTop(e + g.scrollTop() - t + i - 5), e < 0) && g.scrollTop(e + g.scrollTop() - 5)
                                }, v.on("click", function (e) {
                                    (v.parent().hasClass(x + "ed") ? h : c)(), g.find("." + w).remove()
                                }), v.find(".layui-edge").on("click", function () {
                                    m.focus()
                                }), m.on("keyup", function (e) {
                                    9 === e.keyCode && c()
                                }).on("keydown", function (n) {
                                    var e = n.keyCode,
                                        t = (9 === e && h(), function (e) {
                                            n.preventDefault();
                                            var t, i, a = g.children("dd:not(." + O + ",." + j + ")");
                                            a.length && (t = a.length - 1, i = -1, layui.each(a, function (e, t) {
                                                if (_(t).hasClass(E)) return i = e, !0
                                            }), e = "prev" === e ? i - 1 < 0 ? t : i - 1 : t < i + 1 ? 0 : i + 1, a.eq(e).addClass(E).siblings().removeClass(E), p())
                                        });
                                    38 === e && t("prev"), 40 === e && t("next"), 13 === e && (n.preventDefault(), g.children("dd." + E).trigger("click"))
                                }).on("paste", function () {
                                    c()
                                }), y = function (n, e, l) {
                                    var r, s = 0,
                                        t = g.children("dd"),
                                        o = !1,
                                        c = n,
                                        t = (d.caseSensitive || (n = n.toLowerCase()), d.fuzzy && (r = function (e, t) {
                                            var i = {},
                                                a = ["^"];
                                            t || (e = e.toLowerCase());
                                            for (var n = e.trim().split(""), l = 0; l < n.length; l++) {
                                                var r = n[l];
                                                i[r] = (i[r] || 0) + 1
                                            }
                                            for (r in i) {
                                                a.push("(?=.*");
                                                for (l = 0; l < i[r]; l++) a.push(r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), l !== i[r] - 1 && a.push(".*");
                                                a.push(")")
                                            }
                                            return a.push(".*"), new RegExp(a.join(""), t ? undefined : "i")
                                        }(n, d.caseSensitive)), layui.each(t, function () {
                                            var e = _(this),
                                                t = e.text(),
                                                i = u && e.hasClass(N),
                                                a = (u && !i && t === c && (o = !0), d.caseSensitive || (t = t.toLowerCase()), d.fuzzy ? !r.test(t) : -1 === t.indexOf(n));
                                            ("" === n || "blur" === l ? n !== t : a) && s++, "keyup" === l && e[(u ? a && !i : a) ? "addClass" : "removeClass"](O)
                                        }), "keyup" === l && layui.each(b, function () {
                                            var e = _(this),
                                                t = e.nextUntil("dt").filter("dd");
                                            e[(t = u ? t.not("." + N) : t).length == t.filter("." + O).length ? "addClass" : "removeClass"](O)
                                        }), s === t.length);
                                    return e(t, o), t
                                }, i && m.on("input propertychange", layui.debounce(function (e) {
                                    var n = this.value,
                                        t = e.keyCode;
                                    return 9 !== t && 13 !== t && 37 !== t && 38 !== t && 39 !== t && 40 !== t && (o && e.target.__ieph ? e.target.__ieph = !1 : (y(n, function (e, t) {
                                        var i, a;
                                        u ? t ? g.children("." + N).remove() : (t = g.children("." + N))[0] ? t.attr("lay-value", n).html(T.escape(n)) : (t = _("<dd>").addClass(N).attr("lay-value", n).html(T.escape(n)), a = (i = g.children().eq(0)).hasClass("layui-select-tips"), i[a ? "after" : "before"](t)) : e ? g.find("." + w)[0] || g.append('<p class="' + w + '">\u65e0\u5339\u914d\u9879</p>') : g.find("." + w).remove()
                                    }, "keyup"), "" === n && (f.val(""), g.find("." + E).removeClass(E), (f[0].options[0] || {}).value || g.children("dd:eq(0)").addClass(E), g.find("." + w).remove(), u) && g.children("." + N).remove(), void p()))
                                }, 50)).on("blur", function (e) {
                                    var t = f[0].selectedIndex;
                                    C = _(f[0].options[t]).text(), 0 === t && C === m.attr("placeholder") && (C = ""), setTimeout(function () {
                                        y(m.val(), function (e) {
                                            C || m.val("")
                                        }, "blur")
                                    }, 200)
                                }), g.on("click", "dd", function () {
                                    var e, t = _(this),
                                        i = t.attr("lay-value"),
                                        a = f.attr("lay-filter");
                                    return t.hasClass(j) || (t.hasClass("layui-select-tips") ? m.val("") : (m.val(t.text()), t.addClass(E)), u && t.hasClass(N) && (g.append(t.removeClass(N)), e = _("<option>").attr("value", i).text(t.text()), f.append(e)), t.siblings().removeClass(E), f.val(i).removeClass("layui-form-danger"), layui.event.call(this, A, "select(" + a + ")", {
                                        elem: f[0],
                                        value: i,
                                        othis: n
                                    }), h(!0)), !1
                                }), g.on("mousedown pointerdown touchstart", function (e) {
                                    layui.stope(e)
                                }), n.find("dl>dt").on("click", function (e) {
                                    return !1
                                }), a && e.on("_lay-select-destroy", function () {
                                    n.remove()
                                }))
                            };
                        _.event.special["_lay-select-destroy"] = {
                            remove: function (e) {
                                e.handler()
                            }
                        }, e.each(function (e, t) {
                            var i = _(this),
                                a = i.next("." + x),
                                n = this.disabled,
                                l = t.value,
                                r = _(t.options[t.selectedIndex]),
                                t = t.options[0];
                            if ("string" == typeof i.attr("lay-ignore")) return i.show();
                            var s, o, c = "string" == typeof i.attr("lay-search"),
                                u = "string" == typeof i.attr("lay-creatable") && c,
                                d = "string" == typeof i.attr("lay-append-to"),
                                t = t && !t.value && t.innerHTML || p,
                                h = _(['<div class="' + (c ? "" : "layui-unselect ") + x, (n ? " layui-select-disabled" : "") + '"></div>'].join("")),
                                t = _(['<div class="layui-select-title">', '<input type="text" placeholder="' + T.escape(_.trim(t)) + '" value="' + T.escape(_.trim(l ? r.html() : "")) + '"' + (!n && c ? "" : " readonly") + ' class="layui-input' + (c ? "" : " layui-unselect") + (n ? " " + j : "") + '">', '<i class="layui-edge"></i>', "</div>"].join("")),
                                r = _(['<dl class="layui-anim layui-anim-upbit' + (i.find("optgroup")[0] ? " layui-select-group" : "") + '">', (r = i.find("*"), s = [], layui.each(r, function (e, t) {
                                    var i = t.tagName.toLowerCase();
                                    0 !== e || t.value || "optgroup" === i ? s.push("optgroup" === i ? "<dt>" + t.label + "</dt>" : '<dd lay-value="' + T.escape(t.value) + '" class="' + (l === t.value ? E : "") + (t.disabled ? " " + j : "") + '">' + _.trim(t.innerHTML) + "</dd>") : s.push('<dd lay-value="" class="layui-select-tips">' + _.trim(t.innerHTML || p) + "</dd>")
                                }), 0 === s.length && s.push('<dd lay-value="" class="' + j + '">\u6ca1\u6709\u9009\u9879</dd>'), s.join("") + "</dl>")].join(""));
                            a[0] && (d && (o = a.data(y)) && o.remove(), a.remove()), d ? (h.append(t), i.after(h), o = _('<div class="' + x + ' layui-select-panel-wrap"></div>').append(r), h.data(y, o), f.call(this, o, t, n, c, u, d)) : (h.append(t).append(r), i.after(h), f.call(this, h, t, n, c, u, d))
                        })
                    },
                    checkbox: function (e) {
                        var c = {
                                checkbox: ["layui-form-checkbox", "layui-form-checked", "checkbox"],
                                "switch": ["layui-form-switch", "layui-form-onswitch", "switch"],
                                SUBTRA: "layui-icon-indeterminate"
                            },
                            e = e || a.find("input[type=checkbox]");
                        e.each(function (e, t) {
                            var i = _(this),
                                a = i.attr("lay-skin") || "primary",
                                n = T.escape(_.trim(t.title || (t.title = i.attr("lay-text") || ""))),
                                l = this.disabled,
                                r = c[a] || c.checkbox,
                                s = i.next("." + r[0]),
                                o = (s[0] && s.remove(), []);
                            if (i.next("[lay-checkbox]")[0] && (s = i.next(), n = s.html() || "", 1 < s[0].attributes.length) && layui.each(s[0].attributes, function (e, t) {
                                "lay-checkbox" !== t.name && o.push(t.name + '="' + t.value + '"')
                            }), o = o.join(" "), n = "switch" === a ? n.split("|") : [n], "string" == typeof i.attr("lay-ignore")) return i.show();
                            d && (f.call(t, "lay-form-sync-checked", t.checked), t.checked || f.call(t, "lay-form-sync-indeterminate", t.indeterminate));
                            l = _(['<div class="layui-unselect ' + r[0], t.checked ? " " + r[1] : "", l ? " layui-checkbox-disabled " + j : "", '"', a ? ' lay-skin="' + a + '"' : "", ">", (s = {
                                checkbox: [n[0] ? "<div " + o + ">" + n[0] + "</div>" : "primary" === a ? "" : "<div></div>", '<i class="layui-icon ' + ("primary" === a && !t.checked && i.get(0).indeterminate ? c.SUBTRA : "layui-icon-ok") + '"></i>'].join(""),
                                "switch": "<div>" + (!t.checked && n[1] || n[0] || "") + "</div><i></i>"
                            })[a] || s.checkbox, "</div>"].join(""));
                            i.after(l),
                                function (t, i) {
                                    var a = _(this),
                                        e = a.attr("lay-skin") || "primary",
                                        n = "switch" === e,
                                        e = "primary" === e;
                                    t.on("click", function () {
                                        var e = a.attr("lay-filter");
                                        a[0].disabled || (a[0].indeterminate && (a[0].indeterminate = !1), a[0].checked = !a[0].checked, layui.event.call(a[0], A, i[2] + "(" + e + ")", {
                                            elem: a[0],
                                            value: a[0].value,
                                            othis: t
                                        }))
                                    }), u.syncAppearanceOnPropChanged(this, "checked", function () {
                                        var e;
                                        n && (e = (t.next("*[lay-checkbox]")[0] ? t.next().html() : a.attr("title") || "").split("|"), t.children("div").html(!this.checked && e[1] || e[0])), t.toggleClass(i[1], this.checked)
                                    }), e && u.syncAppearanceOnPropChanged(this, "indeterminate", function () {
                                        this.indeterminate ? t.children(".layui-icon-ok").removeClass("layui-icon-ok").addClass(c.SUBTRA) : t.children("." + c.SUBTRA).removeClass(c.SUBTRA).addClass("layui-icon-ok")
                                    })
                                }.call(this, l, r)
                        })
                    },
                    radio: function (e) {
                        var o = "layui-form-radio",
                            c = ["layui-icon-radio", "layui-icon-circle"],
                            e = e || a.find("input[type=radio]");
                        e.each(function (e, t) {
                            var i = _(this),
                                a = i.next("." + o),
                                n = this.disabled,
                                l = i.attr("lay-skin");
                            if ("string" == typeof i.attr("lay-ignore")) return i.show();
                            d && f.call(t, "lay-form-sync-checked", t.checked), a[0] && a.remove();
                            var a = T.escape(t.title || ""),
                                r = [],
                                s = (i.next("[lay-radio]")[0] && (a = (s = i.next()).html() || "", 1 < s[0].attributes.length) && layui.each(s[0].attributes, function (e, t) {
                                    "lay-radio" !== t.name && r.push(t.name + '="' + t.value + '"')
                                }), r = r.join(" "), _(['<div class="layui-unselect ' + o, t.checked ? " " + o + "ed" : "", (n ? " layui-radio-disabled " + j : "") + '"', l ? ' lay-skin="' + l + '"' : "", ">", '<i class="layui-anim layui-icon ' + c[t.checked ? 0 : 1] + '"></i>', "<div " + r + ">" + a + "</div>", "</div>"].join("")));
                            i.after(s),
                                function (i) {
                                    var a = _(this),
                                        n = "layui-anim-scaleSpring";
                                    i.on("click", function () {
                                        var e = a.attr("lay-filter");
                                        a[0].disabled || (a[0].checked = !0, layui.event.call(a[0], A, "radio(" + e + ")", {
                                            elem: a[0],
                                            value: a[0].value,
                                            othis: i
                                        }))
                                    }), u.syncAppearanceOnPropChanged(this, "checked", function () {
                                        var e, t = this;
                                        t.checked ? (i.addClass(o + "ed"), i.children(".layui-icon").addClass(n + " " + c[0]), e = a.parents(h).find("input[name=" + t.name.replace(/(\.|#|\[|\])/g, "\\$1") + "]"), layui.each(e, function () {
                                            t !== this && (this.checked = !1)
                                        })) : (i.removeClass(o + "ed"), i.children(".layui-icon").removeClass(n + " " + c[0]).addClass(c[1]))
                                    })
                                }.call(this, s)
                        })
                    }
                },
                t = function () {
                    layui.each(n, function (e, t) {
                        t()
                    })
                };
            return "object" === layui.type(e) ? _(e).is(h) ? (a = _(e), t()) : e.each(function (e, t) {
                var i = _(t);
                i.closest(h).length && ("SELECT" === t.tagName ? n.select(i) : "INPUT" === t.tagName && ("checkbox" === (t = t.type) || "radio" === t ? n[t](i) : n.input(i)))
            }) : e ? n[e] ? n[e]() : l.error('\u4e0d\u652f\u6301\u7684 "' + e + '" \u8868\u5355\u6e32\u67d3') : t(), u
        }, t.prototype.syncAppearanceOnPropChanged = d ? function (e, t, i) {
            var a = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, t);
            Object.defineProperty(e, t, lay.extend({}, a, {
                get: function () {
                    return "string" == typeof this.getAttribute("lay-form-sync-" + t)
                },
                set: function (e) {
                    f.call(this, "lay-form-sync-" + t, e), i.call(this)
                }
            }))
        } : function (e, t, i) {
            var a = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, t);
            Object.defineProperty(e, t, lay.extend({}, a, {
                get: function () {
                    return a.get.call(this)
                },
                set: function (e) {
                    a.set.call(this, e), i.call(this)
                }
            }))
        }, t.prototype.validate = function (e) {
            var u, d = this.config.verify,
                h = "layui-form-danger";
            return !(e = _(e))[0] || (e.attr("lay-verify") !== undefined || !1 !== this.validate(e.find("*[lay-verify]"))) && (layui.each(e, function (e, r) {
                var s = _(this),
                    t = (s.attr("lay-verify") || "").split("|"),
                    o = s.attr("lay-vertype"),
                    c = "string" == typeof (c = s.val()) ? _.trim(c) : c;
                if (s.removeClass(h), layui.each(t, function (e, t) {
                    var i = "",
                        a = d[t];
                    if (a) {
                        var n = "function" == typeof a ? i = a(c, r) : !a[0].test(c),
                            l = "select" === r.tagName.toLowerCase() || /^(checkbox|radio)$/.test(r.type),
                            i = i || a[1];
                        if ("required" === t && (i = s.attr("lay-reqtext") || i), n) return "tips" === o ? p.tips(i, "string" != typeof s.attr("lay-ignore") && l ? s.next() : s, {
                            tips: 1
                        }) : "alert" === o ? p.alert(i, {
                            title: "\u63d0\u793a",
                            shadeClose: !0
                        }) : /\b(string|number)\b/.test(typeof i) && p.msg(i, {
                            icon: 5,
                            shift: 6
                        }), setTimeout(function () {
                            (l ? s.next().find("input") : r).focus()
                        }, 7), s.addClass(h), u = !0
                    }
                }), u) return u
            }), !u)
        }, t.prototype.submit = function (e, t) {
            var i = {},
                a = _(this),
                e = "string" == typeof e ? e : a.attr("lay-filter"),
                n = this.getFormElem ? this.getFormElem(e) : a.parents(h).eq(0),
                l = n.find("*[lay-verify]");
            return !!r.validate(l) && (i = r.getValue(null, n), l = {
                elem: this.getFormElem ? window.event && window.event.target : this,
                form: (this.getFormElem ? n : a.parents("form"))[0],
                field: i
            }, "function" == typeof t && t(l), layui.event.call(this, A, "submit(" + e + ")", l))
        });

    function f(e, t) {
        var i = !!t,
            t = 2 === arguments.length && !t;
        return null !== this.getAttribute(e) ? i || (this.removeAttribute(e), !1) : !t && (this.setAttribute(e, ""), !0)
    }
    var v = ["-", ".", "e", "E", "+"];
    var r = new t,
        t = _(document),
        S = _(window);
    _(function () {
        r.render()
    }), t.on("reset", h, function () {
        var e = _(this).attr("lay-filter");
        setTimeout(function () {
            r.render(null, e)
        }, 50)
    }), t.on("submit", h, i).on("click", "*[lay-submit]", i), e(A, r)
});
layui.define(["lay", "laytpl", "laypage", "form", "util"], function (s) {
    "use strict";
    var f = layui.$,
        r = layui.lay,
        m = layui.laytpl,
        p = layui.laypage,
        g = layui.layer,
        i = layui.form,
        v = layui.util,
        b = layui.hint(),
        x = layui.device(),
        k = {
            config: {
                checkName: "LAY_CHECKED",
                indexName: "LAY_INDEX",
                initIndexName: "LAY_INDEX_INIT",
                numbersName: "LAY_NUM",
                disabledName: "LAY_DISABLED"
            },
            cache: {},
            index: layui.table ? layui.table.index + 1e4 : 0,
            set: function (e) {
                return this.config = f.extend({}, this.config, e), this
            },
            on: function (e, t) {
                return layui.onevent.call(this, R, e, t)
            }
        },
        w = function () {
            var a = this,
                e = a.config,
                i = e.id || e.index;
            return {
                config: e,
                reload: function (e, t) {
                    a.reload.call(a, e, t)
                },
                reloadData: function (e, t) {
                    k.reloadData(i, e, t)
                },
                setColsWidth: function () {
                    a.setColsWidth.call(a)
                },
                resize: function () {
                    a.resize.call(a)
                }
            }
        },
        C = function (e) {
            var t = w.that[e];
            return t || b.error(e ? "The table instance with ID '" + e + "' not found" : "ID argument required"), t || null
        },
        l = function (e) {
            var t = w.config[e];
            return t || b.error(e ? "The table instance with ID '" + e + "' not found" : "ID argument required"), t || null
        },
        T = function (e) {
            var t = this.config || {},
                a = (e = e || {}).item3,
                i = e.content;
            "numbers" === a.type && (i = e.tplData[k.config.numbersName]);
            ("escape" in a ? a : t).escape && (i = v.escape(i));
            t = e.text && a.exportTemplet || a.templet || a.toolbar;
            return t && (i = "function" == typeof t ? t.call(a, e.tplData, e.obj) : m(function (e) {
                try {
                    return r(e).html()
                } catch (t) {
                    return e
                }
            }(t) || String(i)).render(f.extend({
                LAY_COL: a
            }, e.tplData))), e.text ? f("<div>" + i + "</div>").text() : i
        },
        R = "table",
        N = "lay-" + R + "-id",
        t = ".layui-table",
        W = "layui-hide",
        y = "layui-hide-v",
        h = "layui-none",
        D = "layui-table-view",
        o = ".layui-table-header",
        L = ".layui-table-body",
        I = ".layui-table-fixed-r",
        P = ".layui-table-pageview",
        E = ".layui-table-sort",
        A = "layui-table-checked",
        M = "layui-table-edit",
        _ = "layui-table-hover",
        u = "laytable-cell-group",
        F = "layui-table-col-special",
        S = "layui-table-tool-panel",
        H = "layui-table-expanded",
        O = "layui-table-disabled-transition",
        j = "LAY_TABLE_MOVE_DICT",
        e = function (e) {
            return ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', "<thead>", "{{# layui.each(d.data.cols, function(i1, item1){ }}", "<tr>", "{{# layui.each(item1, function(i2, item2){ }}", '{{# if(item2.fixed && item2.fixed !== "right"){ left = true; } }}', '{{# if(item2.fixed === "right"){ right = true; } }}', (e = e || {}).fixed && "right" !== e.fixed ? '{{# if(item2.fixed && item2.fixed !== "right"){ }}' : "right" === e.fixed ? '{{# if(item2.fixed === "right"){ }}' : "", "{{# var isSort = !(item2.colGroup) && item2.sort; }}", '<th data-field="{{= item2.field||i2 }}" data-key="{{=d.index}}-{{=i1}}-{{=i2}}" {{# if( item2.parentKey){ }}data-parentkey="{{= item2.parentKey }}"{{# } }} {{# if(item2.minWidth){ }}data-minwidth="{{=item2.minWidth}}"{{# } }} {{# if(item2.maxWidth){ }}data-maxwidth="{{=item2.maxWidth}}"{{# } }} {{# if(item2.style){ }}style="{{=item2.style}}"{{# } }} {{#var colspan = layui.type(item2.colspan2) === \'number\' ? item2.colspan2 : item2.colspan; if(colspan){}} colspan="{{=colspan}}"{{#} if(item2.rowspan){}} rowspan="{{=item2.rowspan}}"{{#}}} {{# if(item2.unresize || item2.colGroup){ }}data-unresize="true"{{# } }} class="{{# if(item2.hide){ }}layui-hide{{# } }}{{# if(isSort){ }} layui-unselect{{# } }}{{# if(!item2.field){ }} layui-table-col-special{{# } }}"{{# if(item2.title){ }} title="{{ layui.$(\'<div>\' + item2.title + \'</div>\').text() }}"{{# } }}>', '<div class="layui-table-cell laytable-cell-', "{{# if(item2.colGroup){ }}", "group", "{{# } else { }}", "{{=d.index}}-{{=i1}}-{{=i2}}", '{{# if(item2.type !== "normal"){ }}', " laytable-cell-{{= item2.type }}", "{{# } }}", "{{# } }}", '" {{#if(item2.align){}}align="{{=item2.align}}"{{#}}}>', '{{# if(item2.type === "checkbox"){ }}', '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose" {{# if(item2[d.data.checkName]){ }}checked{{# }; }}>', "{{# } else { }}", '<span>{{-item2.title||""}}</span>', "{{# if(isSort){ }}", '<span class="layui-table-sort layui-inline"><i class="layui-edge layui-table-sort-asc" title="\u5347\u5e8f"></i><i class="layui-edge layui-table-sort-desc" title="\u964d\u5e8f"></i></span>', "{{# } }}", "{{# } }}", "</div>", "</th>", e.fixed ? "{{# }; }}" : "", "{{# }); }}", "</tr>", "{{# }); }}", "</thead>", "</table>"].join("")
        },
        a = ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', "<tbody></tbody>", "</table>"].join(""),
        B = [, "{{# if(d.data.toolbar){ }}", '<div class="layui-table-tool">', '<div class="layui-table-tool-temp"></div>', '<div class="layui-table-tool-self"></div>', "</div>", "{{# } }}", '<div class="layui-table-box">', "{{# if(d.data.loading){ }}", '<div class="layui-table-init">', '<div class="layui-table-loading-icon">', '{{# if(typeof d.data.loading === "string"){ }}', "{{- d.data.loading}}", "{{# } else{ }}", '<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>', "{{# } }}", "</div>", "</div>", "{{# } }}", "{{# var left, right; }}", '<div class="layui-table-header">', e(), "</div>", '<div class="layui-table-body layui-table-main">', a, "</div>", "{{# if(left){ }}", '<div class="layui-table-fixed layui-table-fixed-l">', '<div class="layui-table-header">', e({
            fixed: !0
        }), "</div>", '<div class="layui-table-body">', a, "</div>", "</div>", "{{# }; }}", "{{# if(right){ }}", '<div class="layui-table-fixed layui-table-fixed-r layui-hide">', '<div class="layui-table-header">', e({
            fixed: "right"
        }), '<div class="layui-table-mend"></div>', "</div>", '<div class="layui-table-body">', a, "</div>", "</div>", "{{# }; }}", "</div>", "{{# if(d.data.totalRow){ }}", '<div class="layui-table-total">', '<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', '<tbody><tr><td><div class="layui-table-cell" style="visibility: hidden;">Total</div></td></tr></tbody>', "</table>", "</div>", "{{# } }}", '<div class="layui-table-column layui-table-page layui-hide">', '<div class="layui-inline layui-table-pageview" id="layui-table-page{{=d.index}}"></div>', "</div>"].join(""),
        d = f(window),
        z = f(document),
        n = function (e) {
            this.index = ++k.index, this.config = f.extend({}, this.config, k.config, e), this.render()
        },
        c = (n.prototype.config = {
            limit: 10,
            loading: !0,
            escape: !0,
            cellMinWidth: 60,
            cellMaxWidth: Number.MAX_VALUE,
            editTrigger: "click",
            defaultToolbar: ["filter", "exports", "print"],
            defaultContextmenu: !0,
            autoSort: !0,
            text: {
                none: "\u65e0\u6570\u636e"
            },
            cols: []
        }, n.prototype.render = function (e) {
            var t = this,
                a = t.config,
                i = (a.elem = f(a.elem), a.where = a.where || {}, a.id = "id" in a ? a.id : a.elem.attr("id") || t.index);
            if (w.that[i] = t, (w.config[i] = a).request = f.extend({
                pageName: "page",
                limitName: "limit"
            }, a.request), a.response = f.extend({
                statusName: "code",
                statusCode: 0,
                msgName: "msg",
                dataName: "data",
                totalRowName: "totalRow",
                countName: "count"
            }, a.response), null !== a.page && "object" == typeof a.page && (a.limit = a.page.limit || a.limit, a.limits = a.page.limits || a.limits, t.page = a.page.curr = a.page.curr || 1, delete a.page.elem, delete a.page.jump), !a.elem[0]) return t;
            if (a.elem.attr("lay-filter") || a.elem.attr("lay-filter", a.id), "reloadData" === e) return t.pullData(t.page, {
                type: "reloadData"
            });
            a.index = t.index, t.key = a.id || a.index, t.setInit(), a.height && /^full-.+$/.test(a.height) ? (t.fullHeightGap = a.height.split("-")[1], a.height = d.height() - (parseFloat(t.fullHeightGap) || 0)) : a.height && /^#\w+\S*-.+$/.test(a.height) ? (i = a.height.split("-"), t.parentHeightGap = i.pop(), t.parentDiv = i.join("-"), a.height = f(t.parentDiv).height() - (parseFloat(t.parentHeightGap) || 0)) : "function" == typeof a.height && (t.customHeightFunc = a.height, a.height = t.customHeightFunc());
            var l, e = a.elem,
                i = e.next("." + D),
                n = t.elem = f("<div></div>");
            n.addClass((l = [D, D + "-" + t.index, "layui-form", "layui-border-box"], a.className && l.push(a.className), l.join(" "))).attr(((l = {
                "lay-filter": "LAY-TABLE-FORM-DF-" + t.index,
                style: (l = [], a.width && l.push("width:" + a.width + "px;"), l.join(""))
            })[N] = a.id, l)).html(m(B, {
                open: "{{",
                close: "}}"
            }).render({
                data: a,
                index: t.index
            })), t.renderStyle(), i[0] && i.remove(), e.after(n), t.layTool = n.find(".layui-table-tool"), t.layBox = n.find(".layui-table-box"), t.layHeader = n.find(o), t.layMain = n.find(".layui-table-main"), t.layBody = n.find(L), t.layFixed = n.find(".layui-table-fixed"), t.layFixLeft = n.find(".layui-table-fixed-l"), t.layFixRight = n.find(I), t.layTotal = n.find(".layui-table-total"), t.layPage = n.find(".layui-table-page"), t.renderToolbar(), t.renderPagebar(), t.fullSize(), t.setColsWidth({
                isInit: !0
            }), t.pullData(t.page), t.events()
        }, n.prototype.initOpts = function (e) {
            this.config;
            e.checkbox && (e.type = "checkbox"), e.space && (e.type = "space"), e.type || (e.type = "normal"), "normal" !== e.type && (e.unresize = !0, e.width = e.width || {
                checkbox: 50,
                radio: 50,
                space: 30,
                numbers: 60
            } [e.type])
        }, n.prototype.setInit = function (e) {
            var n, a, d = this,
                r = d.config;
            if (r.clientWidth = r.width || (n = function (e) {
                var t, a;
                e = e || r.elem.parent(), t = d.getContentWidth(e);
                try {
                    a = "none" === e.css("display")
                } catch (l) {}
                var i = e.parent();
                return e[0] && i && i[0] && (!t || a) ? n(i) : t
            })(), "width" === e) return r.clientWidth;
            r.height = r.maxHeight || r.height, r.css && -1 === r.css.indexOf(D) && (a = r.css.split("}"), layui.each(a, function (e, t) {
                t && (a[e] = "." + D + "-" + d.index + " " + t)
            }), r.css = a.join("}"));
            var c = function (a, e, i, l) {
                var n, o;
                l ? (l.key = [r.index, a, i].join("-"), l.colspan = l.colspan || 0, l.rowspan = l.rowspan || 0, d.initOpts(l), (n = a + (parseInt(l.rowspan) || 1)) < r.cols.length ? (l.colGroup = !0, o = 0, layui.each(r.cols[n], function (e, t) {
                    t.HAS_PARENT || 1 <= o && o == (l.colspan || 1) || (t.HAS_PARENT = !0, t.parentKey = [r.index, a, i].join("-"), o += parseInt(1 < t.colspan ? t.colspan : 1), c(n, r.cols[n], e, t))
                })) : l.colGroup = !1, l.hide = l.hide && !l.colGroup || !1) : e.splice(i, 1)
            };
            layui.each(r.cols, function (a, i) {
                layui.each(i, function (e, t) {
                    a ? delete t.HAS_PARENT : c(a, i, e, t)
                })
            })
        }, n.prototype.renderStyle = function () {
            var e, a, t, i, l = this.config,
                n = this.index,
                o = [];
            layui.each(l.cols, function (a, e) {
                layui.each(e, function (e, t) {
                    e = [n, a, e].join("-"), t = ["width: ", t.width || l.cellMinWidth, "px"].join("");
                    o.push(".laytable-cell-" + e + "{" + t + "}")
                })
            }), (e = l.lineStyle) && (a = ".layui-table-view-" + n + " .layui-table-body .layui-table tr", t = e.split(";"), i = "none", layui.each(t, function (e, t) {
                if ("height" === (t = t.split(":"))[0]) return t = parseFloat(t[1]), isNaN(t) || (i = t - 1 + "px"), !0
            }), layui.each(["{" + e + "}", ".layui-table-cell{height: auto; max-height: " + i + "; white-space: normal; text-overflow: clip;}", "> td:hover > .layui-table-cell{overflow: auto;}"].concat(x.ie ? [".layui-table-edit{height: " + i + ";}", "td[data-edit]:hover:after{height: " + i + ";}"] : []), function (e, t) {
                t && o.push(a + " " + t)
            })), l.css && o.push(l.css), r.style({
                target: this.elem[0],
                text: o.join(""),
                id: "DF-table-" + n
            })
        }, n.prototype.renderToolbar = function () {
            var l, o = this,
                e = o.config,
                d = e.elem.attr("lay-filter"),
                t = ['<div class="layui-inline" lay-event="add"><i class="layui-icon layui-icon-add-1"></i></div>', '<div class="layui-inline" lay-event="update"><i class="layui-icon layui-icon-edit"></i></div>', '<div class="layui-inline" lay-event="delete"><i class="layui-icon layui-icon-delete"></i></div>'].join(""),
                a = o.layTool.find(".layui-table-tool-temp"),
                n = ("default" === e.toolbar ? a.html(t) : "string" == typeof e.toolbar && (t = f(e.toolbar).html() || "") && a.html(m(t).render(e)), {
                    filter: {
                        title: "\u7b5b\u9009\u5217",
                        layEvent: "LAYTABLE_COLS",
                        icon: "layui-icon-cols",
                        onClick: function (e) {
                            var a, n = e.config;
                            (0, e.openPanel)({
                                list: (a = [], o.eachCols(function (e, t) {
                                    t.field && "normal" == t.type && a.push('<li><input type="checkbox" name="' + t.field + '" data-key="' + t.key + '" data-parentkey="' + (t.parentKey || "") + '" lay-skin="primary" ' + (t.hide ? "" : "checked") + ' title="' + v.escape(f("<div>" + (t.fieldTitle || t.title || t.field) + "</div>").text()) + '" lay-filter="LAY_TABLE_TOOL_COLS"></li>')
                                }), a.join("")),
                                done: function () {
                                    i.on("checkbox(LAY_TABLE_TOOL_COLS)", function (e) {
                                        var e = f(e.elem),
                                            t = this.checked,
                                            a = e.data("key"),
                                            i = o.col(a),
                                            l = i.hide,
                                            e = e.data("parentkey");
                                        i.key && (i.hide = !t, o.elem.find('*[data-key="' + a + '"]')[t ? "removeClass" : "addClass"](W), l != i.hide && o.setParentCol(!t, e), o.resize(), layui.event.call(this, R, "colToggled(" + d + ")", {
                                            col: i,
                                            config: n
                                        }))
                                    })
                                }
                            })
                        }
                    },
                    exports: {
                        title: "\u5bfc\u51fa",
                        layEvent: "LAYTABLE_EXPORT",
                        icon: "layui-icon-export",
                        onClick: function (e) {
                            var t = e.data,
                                a = e.config,
                                i = e.openPanel,
                                e = e.elem;
                            if (!t.length) return g.tips("\u5f53\u524d\u8868\u683c\u65e0\u6570\u636e", e, {
                                tips: 3
                            });
                            x.ie ? g.tips("\u5bfc\u51fa\u529f\u80fd\u4e0d\u652f\u6301 IE\uff0c\u8bf7\u7528 Chrome \u7b49\u9ad8\u7ea7\u6d4f\u89c8\u5668\u5bfc\u51fa", e, {
                                tips: 3
                            }) : i({
                                list: ['<li data-type="csv">\u5bfc\u51fa CSV \u6587\u4ef6</li>'].join(""),
                                done: function (e, t) {
                                    t.on("click", function () {
                                        var e = f(this).data("type");
                                        k.exportFile.call(o, a.id, null, e)
                                    })
                                }
                            })
                        }
                    },
                    print: {
                        title: "\u6253\u5370",
                        layEvent: "LAYTABLE_PRINT",
                        icon: "layui-icon-print",
                        onClick: function (e) {
                            var t = e.data,
                                e = (e.config, e.elem);
                            if (!t.length) return g.tips("\u5f53\u524d\u8868\u683c\u65e0\u6570\u636e", e, {
                                tips: 3
                            });
                            var t = window.open("about:blank", "_blank"),
                                e = ["<style>", "body{font-size: 12px; color: #5F5F5F;}", "table{width: 100%; border-collapse: collapse; border-spacing: 0;}", "th,td{line-height: 20px; padding: 9px 15px; border: 1px solid #ccc; text-align: left; font-size: 12px; color: #5F5F5F;}", "a{color: #5F5F5F; text-decoration:none;}", "img{max-height: 100%;}", "*.layui-hide{display: none}", "</style>"].join(""),
                                a = f(o.layHeader.html());
                            a.append(o.layMain.find("table").html()), a.append(o.layTotal.find("table").html()), a.find("th.layui-table-patch").remove(), a.find("thead>tr>th." + F).filter(function (e, t) {
                                return !f(t).children("." + u).length
                            }).remove(), a.find("tbody>tr>td." + F).remove(), t.document.write(e + a.prop("outerHTML")), t.document.close(), layui.device("edg").edg ? (t.onafterprint = t.close, t.print()) : (t.print(), t.close())
                        }
                    }
                });
            "object" == typeof e.defaultToolbar && (l = [], e.defaultToolbar = f.map(e.defaultToolbar, function (e, t) {
                var a = "string" == typeof e,
                    i = a ? n[e] : e;
                return i && (!(i = i.name && n[i.name] ? f.extend({}, n[i.name], i) : i).name && a && (i.name = e), l.push('<div class="layui-inline" title="' + i.title + '" lay-event="' + i.layEvent + '"><i class="layui-icon ' + i.icon + '"></i></div>')), i
            }), o.layTool.find(".layui-table-tool-self").html(l.join("")))
        }, n.prototype.renderPagebar = function () {
            var e, t = this.config,
                a = this.layPagebar = f('<div class="layui-inline layui-table-pagebar"></div>');
            t.pagebar && ((e = f(t.pagebar).html() || "") && a.append(m(e).render(t)), this.layPage.append(a))
        }, n.prototype.setParentCol = function (e, t) {
            var a = this.config,
                i = this.layHeader.find('th[data-key="' + t + '"]'),
                l = parseInt(i.attr("colspan")) || 0;
            i[0] && (t = t.split("-"), t = a.cols[t[1]][t[2]], e ? l-- : l++, i.attr("colspan", l), i[l ? "removeClass" : "addClass"](W), t.colspan2 = l, t.hide = l < 1, a = i.data("parentkey")) && this.setParentCol(e, a)
        }, n.prototype.setColsPatch = function () {
            var a = this,
                e = a.config;
            layui.each(e.cols, function (e, t) {
                layui.each(t, function (e, t) {
                    t.hide && a.setParentCol(t.hide, t.parentKey)
                })
            })
        }, n.prototype.setGroupWidth = function (i) {
            var e, l = this;
            l.config.cols.length <= 1 || ((e = l.layHeader.find((i ? "th[data-key=" + i.data("parentkey") + "]>" : "") + "." + u)).css("width", 0), layui.each(e.get().reverse(), function () {
                var e = f(this),
                    t = e.parent().data("key"),
                    a = 0;
                l.layHeader.eq(0).find("th[data-parentkey=" + t + "]").width(function (e, t) {
                    f(this).hasClass(W) || 0 < t && (a += t)
                }), a && e.css("max-width", a - 1), i && e.parent().data("parentkey") && l.setGroupWidth(e.parent())
            }), e.css("width", "auto"))
        }, n.prototype.setColsWidth = function (e) {
            var n, o = this,
                d = o.config,
                a = 0,
                r = 0,
                c = 0,
                s = 0,
                u = o.setInit("width"),
                i = parseFloat(layui.getStyle(o.elem[0], "border-left-width")),
                l = o.layHeader.first().children("table"),
                y = o.layMain.find("table"),
                h = o.layMain.find("tbody").is(":empty"),
                p = e && e.isInit,
                e = (o.eachCols(function (e, t) {
                    t.hide || (a++, t.width) || "normal" !== t.type || (n = t)
                }), u = u - ("line" === d.skin || "nob" === d.skin ? 2 : a + 1) * i - o.getScrollWidth(o.layMain[0]), function (o) {
                    layui.each(d.cols, function (e, n) {
                        layui.each(n, function (e, t) {
                            var a = 0,
                                i = t.minWidth || d.cellMinWidth,
                                l = t.maxWidth || d.cellMaxWidth;
                            t ? t.colGroup || t.hide || (o ? c && c < i ? (r--, a = i) : c && l < c && (r--, a = l) : (a = t.width || 0, /\d+%$/.test(a) ? l < (a = (a = parseFloat(a) / 100 * u) < i ? i : a) && (a = l) : a ? "normal" === t.type && (a < i && (t.width = a = i), l < a) && (t.width = a = l) : (t.width = a = 0, r++)), t.hide && (a = 0), s += a) : n.splice(e, 1)
                        })
                    }), s < u && 0 < r && (c = (u - s) / r)
                }),
                f = (e(), e(!0), o.autoColNums = r = 0 < r ? r : 0, u);
            o.eachCols(function (e, a) {
                var i = a.minWidth || d.cellMinWidth,
                    l = a.maxWidth || d.cellMaxWidth;
                a.colGroup || a.hide || n && n.key === a.key || (0 === a.width ? o.cssRules(a.key, function (e) {
                    var t = Math.round(c < i ? i : l < c ? l : c);
                    e.style.width = t + "px", f -= t
                }) : /\d+%$/.test(a.width) ? o.cssRules(a.key, function (e) {
                    var t = Math.round(parseFloat(a.width) / 100 * u);
                    e.style.width = (t = l < (t = t < i ? i : t) ? l : t) + "px", f -= t
                }) : o.cssRules(a.key, function (e) {
                    e.style.width = a.width + "px", f -= a.width
                }))
            }), n && o.cssRules(n.key, function (e) {
                var t = n.minWidth || d.cellMinWidth,
                    a = n.maxWidth || d.cellMaxWidth,
                    a = Math.max(Math.min(f, a), t);
                e.style.width = a + "px", !p && h && y.width(o.getContentWidth(l)), o.layMain.prop("offsetHeight") > o.layMain.prop("clientHeight") && (e.style.width = parseFloat(e.style.width) - i + "px")
            }), !p && h ? y.width(o.getContentWidth(l)) : y.width("auto"), o.setGroupWidth()
        }, n.prototype.resize = function () {
            var e = this;
            e.layMain && ("isConnected" in e.layMain[0] ? e.layMain[0].isConnected : f.contains(document.body, e.layMain[0])) && (e.fullSize(), e.setColsWidth(), e.scrollPatch())
        }, n.prototype.reload = function (e, t, a) {
            var i = this;
            e = e || {}, delete i.haveInit, layui.each(e, function (e, t) {
                "array" === layui.type(t) && delete i.config[e]
            }), i.config = f.extend(t, {}, i.config, e), "reloadData" !== a && (layui.each(i.config.cols, function (e, t) {
                layui.each(t, function (e, t) {
                    delete t.colspan2
                })
            }), delete i.config.HAS_SET_COLS_PATCH), i.render(a)
        }, n.prototype.errorView = function (e) {
            var t = this,
                a = t.layMain.find("." + h),
                e = f('<div class="' + h + '">' + (e || "Error") + "</div>");
            a[0] && (t.layNone.remove(), a.remove()), t.layFixed.addClass(W), t.layMain.find("tbody").html(""), t.layMain.append(t.layNone = e), t.layTotal.addClass(y), t.layPage.find(P).addClass(y), k.cache[t.key] = [], t.syncCheckAll(), t.renderForm(), t.setColsWidth(), t.loading(!1)
        }, n.prototype.page = 1, n.prototype.pullData = function (i, l) {
            var e, t, n = this,
                o = n.config,
                a = (o.HAS_SET_COLS_PATCH || n.setColsPatch(), o.HAS_SET_COLS_PATCH = !0, o.request),
                d = o.response,
                r = function () {
                    "object" == typeof o.initSort && n.sort({
                        field: o.initSort.field,
                        type: o.initSort.type,
                        reloadType: l.type
                    })
                },
                c = function (e, t) {
                    n.setColsWidth(), n.loading(!1), "function" == typeof o.done && o.done(e, i, e[d.countName], t)
                };
            l = l || {}, "function" == typeof o.before && o.before(o), n.startTime = (new Date).getTime(), l.renderData ? ((e = {})[d.dataName] = k.cache[n.key], e[d.countName] = o.url ? "object" === layui.type(o.page) ? o.page.count : e[d.dataName].length : o.data.length, "object" == typeof o.totalRow && (e[d.totalRowName] = f.extend({}, n.totalRow)), n.renderData({
                res: e,
                curr: i,
                count: e[d.countName],
                type: l.type,
                sort: !0
            }), c(e, "renderData")) : o.url ? (t = {}, o.page && (t[a.pageName] = i, t[a.limitName] = o.limit), a = f.extend(t, o.where), o.contentType && 0 == o.contentType.indexOf("application/json") && (a = JSON.stringify(a)), n.loading(!0), f.ajax({
                type: o.method || "get",
                url: o.url,
                contentType: o.contentType,
                data: a,
                dataType: o.dataType || "json",
                jsonpCallback: o.jsonpCallback,
                headers: o.headers || {},
                complete: "function" == typeof o.complete ? o.complete : undefined,
                success: function (e) {
                    var t, a;
                    (e = "function" == typeof o.parseData ? o.parseData(e) || e : e)[d.statusName] != d.statusCode ? n.errorView(e[d.msgName] || '\u8fd4\u56de\u7684\u6570\u636e\u4e0d\u7b26\u5408\u89c4\u8303\uff0c\u6b63\u786e\u7684\u6210\u529f\u72b6\u6001\u7801\u5e94\u4e3a\uff1a"' + d.statusName + '": ' + d.statusCode) : (t = e[d.countName], (a = Math.ceil(t / o.limit) || 1) < i && (i = a), n.totalRow = e[d.totalRowName], n.renderData({
                        res: e,
                        curr: i,
                        count: t,
                        type: l.type
                    }), r(), o.time = (new Date).getTime() - n.startTime + " ms"), c(e, l.type)
                },
                error: function (e, t) {
                    n.errorView("\u8bf7\u6c42\u5f02\u5e38\uff0c\u9519\u8bef\u63d0\u793a\uff1a" + t), "function" == typeof o.error && o.error(e, t)
                }
            })) : "array" === layui.type(o.data) && (e = {}, t = i * o.limit - o.limit, a = o.data.concat(), e[d.dataName] = o.page ? a.splice(t, o.limit) : a, e[d.countName] = o.data.length, "object" == typeof o.totalRow && (e[d.totalRowName] = f.extend({}, o.totalRow)), n.totalRow = e[d.totalRowName], n.renderData({
                res: e,
                curr: i,
                count: e[d.countName],
                type: l.type
            }), r(), c(e, l.type))
        }, n.prototype.eachCols = function (e) {
            return k.eachCols(null, e, this.config.cols), this
        }, n.prototype.col = function (e) {
            try {
                return e = e.split("-"), this.config.cols[e[1]][e[2]] || {}
            } catch (t) {
                return b.error(t), {}
            }
        }, n.prototype.getTrHtml = function (a, l, n, e) {
            var s = this,
                u = s.config,
                y = e && e.trs || [],
                h = e && e.trs_fixed || [],
                p = e && e.trs_fixed_r || [];
            return n = n || 1, layui.each(a, function (e, o) {
                var i = [],
                    d = [],
                    r = [],
                    c = e + u.limit * (n - 1) + 1;
                if ("object" != typeof o) {
                    a[e] = o = {
                        LAY_KEY: o
                    };
                    try {
                        k.cache[s.key][e] = o
                    } catch (t) {}
                }
                "array" === layui.type(o) && 0 === o.length || (o[k.config.numbersName] = c, o[k.config.indexName] = e, l || (o[k.config.initIndexName] = e), s.eachCols(function (e, l) {
                    var t, e = l.field || e,
                        a = l.key,
                        n = o[e];
                    n !== undefined && null !== n || (n = ""), l.colGroup || (e = ['<td data-field="' + e + '" data-key="' + a + '" ' + (e = [], (t = "function" == typeof l.edit ? l.edit(o) : l.edit) && e.push('data-edit="' + t + '"'), l.templet && e.push('data-content="' + v.escape(n) + '"'), l.toolbar && e.push('data-off="true"'), l.event && e.push('lay-event="' + l.event + '"'), l.minWidth && e.push('data-minwidth="' + l.minWidth + '"'), l.maxWidth && e.push('data-maxwidth="' + l.maxWidth + '"'), l.style && e.push('style="' + l.style + '"'), e.join(" ")) + ' class="' + (t = [], l.hide && t.push(W), l.field || t.push(F), t.join(" ")) + '">', '<div class="layui-table-cell laytable-cell-' + ("normal" === l.type ? a : a + " laytable-cell-" + l.type) + '"' + (l.align ? ' align="' + l.align + '"' : "") + ">" + function () {
                        var e, t = f.extend(!0, {
                                LAY_COL: l
                            }, o),
                            a = k.config.checkName,
                            i = k.config.disabledName;
                        switch (l.type) {
                            case "checkbox":
                                return '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" ' + (e = [], l[a] && (o[a] = l[a], l[a]) && (e[0] = "checked"), t[a] && (e[0] = "checked"), t[i] && e.push("disabled"), e.join(" ")) + ' lay-type="layTableCheckbox">';
                            case "radio":
                                return '<input type="radio" name="layTableRadio_' + u.index + '" ' + (e = [], t[a] && (e[0] = "checked"), t[i] && e.push("disabled"), e.join(" ")) + ' lay-type="layTableRadio">';
                            case "numbers":
                                return c
                        }
                        return l.toolbar ? m(f(l.toolbar).html() || "").render(t) : T.call(s, {
                            item3: l,
                            content: n,
                            tplData: t
                        })
                    }(), "</div></td>"].join(""), i.push(e), l.fixed && "right" !== l.fixed && d.push(e), "right" === l.fixed && r.push(e))
                }), e = ['data-index="' + e + '"'], o[k.config.checkName] && e.push('class="' + A + '"'), e = e.join(" "), y.push("<tr " + e + ">" + i.join("") + "</tr>"), h.push("<tr " + e + ">" + d.join("") + "</tr>"), p.push("<tr " + e + ">" + r.join("") + "</tr>"))
            }), {
                trs: y,
                trs_fixed: h,
                trs_fixed_r: p
            }
        }, k.getTrHtml = function (e, t) {
            e = C(e);
            return e.getTrHtml(t, null, e.page)
        }, n.prototype.renderData = function (e) {
            var a = this,
                i = a.config,
                t = e.res,
                l = e.curr,
                n = a.count = e.count,
                o = e.sort,
                d = t[i.response.dataName] || [],
                t = t[i.response.totalRowName],
                r = [],
                c = [],
                s = [],
                u = function () {
                    if (!o && a.sortKey) return a.sort({
                        field: a.sortKey.field,
                        type: a.sortKey.sort,
                        pull: !0,
                        reloadType: e.type
                    });
                    a.getTrHtml(d, o, l, {
                        trs: r,
                        trs_fixed: c,
                        trs_fixed_r: s
                    }), "fixed" === i.scrollPos && "reloadData" === e.type || a.layBody.scrollTop(0), "reset" === i.scrollPos && a.layBody.scrollLeft(0), a.layMain.find("." + h).remove(), a.layMain.find("tbody").html(r.join("")), a.layFixLeft.find("tbody").html(c.join("")), a.layFixRight.find("tbody").html(s.join("")), a.syncCheckAll(), a.renderForm(), a.fullSize(), a.haveInit ? a.scrollPatch() : setTimeout(function () {
                        a.scrollPatch()
                    }, 50), a.haveInit = !0, g.close(a.tipsIndex)
                };
            return k.cache[a.key] = d, a.layTotal[0 == d.length ? "addClass" : "removeClass"](y), a.layPage[i.page || i.pagebar ? "removeClass" : "addClass"](W), a.layPage.find(P)[!i.page || 0 == n || 0 === d.length && 1 == l ? "addClass" : "removeClass"](y), 0 === d.length ? a.errorView(i.text.none) : (a.layFixLeft.removeClass(W), o ? u() : (u(), a.renderTotal(d, t), a.layTotal && a.layTotal.removeClass(W), void(i.page && (i.page = f.extend({
                elem: "layui-table-page" + i.index,
                count: n,
                limit: i.limit,
                limits: i.limits || [10, 20, 30, 40, 50, 60, 70, 80, 90],
                groups: 3,
                layout: ["prev", "page", "next", "skip", "count", "limit"],
                prev: '<i class="layui-icon">&#xe603;</i>',
                next: '<i class="layui-icon">&#xe602;</i>',
                jump: function (e, t) {
                    t || (a.page = e.curr, i.limit = e.limit, a.pullData(e.curr))
                }
            }, i.page), i.page.count = n, p.render(i.page)))))
        }, k.renderData = function (e) {
            e = C(e);
            e && e.pullData(e.page, {
                renderData: !0,
                type: "reloadData"
            })
        }, n.prototype.renderTotal = function (e, o) {
            var d, r = this,
                c = r.config,
                s = {};
            c.totalRow && (layui.each(e, function (e, i) {
                "array" === layui.type(i) && 0 === i.length || r.eachCols(function (e, t) {
                    var e = t.field || e,
                        a = i[e];
                    t.totalRow && (s[e] = (s[e] || 0) + (parseFloat(a) || 0))
                })
            }), r.dataTotal = [], d = [], r.eachCols(function (e, t) {
                var e = t.field || e,
                    a = o && o[t.field],
                    i = "totalRowDecimals" in t ? t.totalRowDecimals : 2,
                    i = s[e] ? parseFloat(s[e] || 0).toFixed(i) : "",
                    i = (n = t.totalRowText || "", (l = {
                        LAY_COL: t
                    })[e] = i, l = t.totalRow && T.call(r, {
                        item3: t,
                        content: i,
                        tplData: l
                    }) || n, a || l),
                    l = "string" == typeof (n = t.totalRow || c.totalRow) ? m(n).render(f.extend({
                        TOTAL_NUMS: a || s[e],
                        TOTAL_ROW: o || {},
                        LAY_COL: t
                    }, t)) : i,
                    n = (t.field && r.dataTotal.push({
                        field: t.field,
                        total: f("<div>" + l + "</div>").text()
                    }), ['<td data-field="' + e + '" data-key="' + t.key + '" ' + (n = [], t.minWidth && n.push('data-minwidth="' + t.minWidth + '"'), t.maxWidth && n.push('data-maxwidth="' + t.maxWidth + '"'), t.style && n.push('style="' + t.style + '"'), n.join(" ")) + ' class="' + (a = [], t.hide && a.push(W), t.field || a.push(F), a.join(" ")) + '">', '<div class="layui-table-cell laytable-cell-' + (i = t.key, "normal" === t.type ? i : i + " laytable-cell-" + t.type) + '"' + (e = [], t.align && e.push('align="' + t.align + '"'), e.join(" ")) + ">" + l, "</div></td>"].join(""));
                d.push(n)
            }), e = r.layTotal.find(".layui-table-patch"), r.layTotal.find("tbody").html("<tr>" + d.join("") + (e.length ? e.get(0).outerHTML : "") + "</tr>"))
        }, n.prototype.getColElem = function (e, t) {
            return e.eq(0).find(".laytable-cell-" + t + ":eq(0)")
        }, n.prototype.renderForm = function (e) {
            this.config;
            var t = this.elem.attr("lay-filter");
            i.render(e, t)
        }, n.prototype.renderFormByElem = function (a) {
            layui.each(["input", "select"], function (e, t) {
                i.render(a.find(t))
            })
        }, n.prototype.syncCheckAll = function () {
            var a, e = this,
                i = e.config,
                t = e.layHeader.find('input[name="layTableCheckbox"]'),
                l = k.checkStatus(e.key);
            t[0] && (a = l.isAll, e.eachCols(function (e, t) {
                "checkbox" === t.type && (t[i.checkName] = a)
            }), t.prop({
                checked: l.isAll,
                indeterminate: !l.isAll && l.data.length
            }))
        }, n.prototype.setRowActive = function (e, t, a) {
            this.config;
            e = this.layBody.find('tr[data-index="' + e + '"]');
            if (t = t || "layui-table-click", a) return e.removeClass(t);
            e.addClass(t), e.siblings("tr").removeClass(t)
        }, n.prototype.setRowChecked = function (i) {
            var a, e, l, t, n, o, d, r = this,
                c = r.config,
                s = "all" === i.index,
                u = "array" === layui.type(i.index),
                y = s || u;
            c.tree && c.tree.view || y && (r.layBox.addClass(O), "radio" === i.type) || (u && (a = {}, layui.each(i.index, function (e, t) {
                a[t] = !0
            }), i.index = a), e = r.layBody.children(".layui-table").children("tbody"), d = y ? "tr" : 'tr[data-index="' + i.index + '"]', d = e.children(d), e = s ? d : d.filter(u ? function () {
                var e = f(this).data("index");
                return i.index[e]
            } : '[data-index="' + i.index + '"]'), i = f.extend({
                type: "checkbox"
            }, i), l = k.cache[r.key], t = "checked" in i, n = function (e) {
                return "radio" === i.type || (t ? i.checked : !e)
            }, e.each(function () {
                var e = f(this),
                    t = e.attr("data-index"),
                    a = l[t];
                t && "array" !== layui.type(a) && !a[c.disabledName] && (a = a[c.checkName] = n(e.hasClass(A)), e.toggleClass(A, !!a), "radio" === i.type) && (o = t, e.siblings().removeClass(A))
            }), o && layui.each(l, function (e, t) {
                Number(o) !== Number(e) && delete t[c.checkName]
            }), d = (u = (s = e.children("td").children(".layui-table-cell").children('input[lay-type="' + ({
                radio: "layTableRadio",
                checkbox: "layTableCheckbox"
            } [i.type] || "checkbox") + '"]:not(:disabled)')).last()).closest(I), ("radio" === i.type && d.hasClass(W) ? s.first() : s).prop("checked", n(u.prop("checked"))), r.syncCheckAll(), y && setTimeout(function () {
                r.layBox.removeClass(O)
            }, 100))
        }, n.prototype.sort = function (l) {
            var e, t = this,
                a = {},
                i = t.config,
                n = i.elem.attr("lay-filter"),
                o = k.cache[t.key];
            "string" == typeof (l = l || {}).field && (d = l.field, t.layHeader.find("th").each(function (e, t) {
                var a = f(this),
                    i = a.data("field");
                if (i === l.field) return l.field = a, d = i, !1
            }));
            try {
                var d = d || l.field.data("field"),
                    r = l.field.data("key");
                if (t.sortKey && !l.pull && d === t.sortKey.field && l.type === t.sortKey.sort) return;
                var c = t.layHeader.find("th .laytable-cell-" + r).find(E);
                t.layHeader.find("th").find(E).removeAttr("lay-sort"), c.attr("lay-sort", l.type || null), t.layFixed.find("th")
            } catch (s) {
                b.error("Table modules: sort field '" + d + "' not matched")
            }
            t.sortKey = {
                field: d,
                sort: l.type
            }, i.autoSort && ("asc" === l.type ? e = layui.sort(o, d, null, !0) : "desc" === l.type ? e = layui.sort(o, d, !0, !0) : (e = layui.sort(o, k.config.initIndexName, null, !0), delete t.sortKey, delete i.initSort)), a[i.response.dataName] = e || o, t.renderData({
                res: a,
                curr: t.page,
                count: t.count,
                sort: !0,
                type: l.reloadType
            }), l.fromEvent && (i.initSort = {
                field: d,
                type: l.type
            }, layui.event.call(l.field, R, "sort(" + n + ")", f.extend({
                config: i
            }, i.initSort)))
        }, n.prototype.loading = function (e) {
            this.config.loading && this.layBox.find(".layui-table-init").toggleClass(W, !e)
        }, n.prototype.cssRules = function (t, a) {
            var e = this.elem.children("style")[0];
            r.getStyleRules(e, function (e) {
                if (e.selectorText === ".laytable-cell-" + t) return a(e), !0
            })
        }, n.prototype.fullSize = function () {
            var e, a, i = this,
                t = i.config,
                l = t.height;
            i.fullHeightGap ? (l = d.height() - i.fullHeightGap) < 135 && (l = 135) : i.parentDiv && i.parentHeightGap ? (l = f(i.parentDiv).height() - i.parentHeightGap) < 135 && (l = 135) : i.customHeightFunc && (l = i.customHeightFunc()) < 135 && (l = 135), 1 < t.cols.length && (e = i.layFixed.find(o).find("th"), a = i.layHeader.first(), layui.each(e, function (e, t) {
                (t = f(t)).height(a.find('th[data-key="' + t.attr("data-key") + '"]').height() + "px")
            })), l && (e = parseFloat(l) - (i.layHeader.outerHeight() || 39), t.toolbar && (e -= i.layTool.outerHeight() || 51), t.totalRow && (e -= i.layTotal.outerHeight() || 40), (t.page || t.pagebar) && (e -= i.layPage.outerHeight() || 43), t.maxHeight ? layui.each({
                elem: l,
                layMain: e
            }, function (e, t) {
                i[e].css({
                    height: "auto",
                    maxHeight: t + "px"
                })
            }) : i.layMain.outerHeight(e))
        }, n.prototype.getScrollWidth = function (e) {
            var t;
            return e ? t = e.offsetWidth - e.clientWidth : ((e = document.createElement("div")).style.width = "100px", e.style.height = "100px", e.style.overflowY = "scroll", document.body.appendChild(e), t = e.offsetWidth - e.clientWidth, document.body.removeChild(e)), t
        }, n.prototype.scrollPatch = function () {
            var e = this,
                t = e.layMain.children("table"),
                a = e.layMain.width() - e.layMain.prop("clientWidth"),
                i = e.layMain.height() - e.layMain.prop("clientHeight"),
                l = (e.getScrollWidth(e.layMain[0]), t.outerWidth() - e.layMain.width()),
                n = function (e) {
                    var t;
                    a && i ? (e = e.eq(0)).find(".layui-table-patch")[0] || ((t = f('<th class="layui-table-patch"><div class="layui-table-cell"></div></th>')).find("div").css({
                        width: a
                    }), e.find("tr").append(t)) : e.find(".layui-table-patch").remove()
                };
            n(e.layHeader), n(e.layTotal);
            n = e.layMain.height() - i;
            e.layFixed.find(L).css("height", t.height() >= n ? n : "auto").scrollTop(e.layMain.scrollTop()), e.layFixRight[k.cache[e.key] && k.cache[e.key].length && 0 < l ? "removeClass" : "addClass"](W), e.layFixRight.css("right", a)
        }, n.prototype.updateRow = function (e, i) {
            var r = this,
                c = ".layui-table-cell",
                e = "array" === layui.type(e) ? e : [e],
                s = k.cache[r.key] || [];
            layui.each(e, function (e, t) {
                var a, l, n, o, d;
                a = t.index, l = t.data, n = t.related, o = s[a] || {}, d = r.layBody.find('tr[data-index="' + a + '"]'), layui.each(l, function (e, t) {
                    o[e] = t, i && i(e, t)
                }), r.eachCols(function (e, t) {
                    var a, i = String(t.field || e);
                    (i in l || ("function" == typeof n ? n(i, e) : n) && (t.templet || t.toolbar)) && (i = (e = d.children('td[data-field="' + i + '"]')).children(c), a = o[t.field], i.html(T.call(r, {
                        item3: t,
                        content: a,
                        tplData: f.extend({
                            LAY_COL: t
                        }, o)
                    })), e.data("content", a), r.renderFormByElem(i))
                })
            })
        }, k.updateRow = function (e, t) {
            return C(e).updateRow(t)
        }, n.prototype.events = function () {
            var c = this,
                s = c.config,
                o = s.elem.attr("lay-filter"),
                e = c.layHeader.find("th"),
                u = ".layui-table-cell",
                d = f("body"),
                r = {},
                y = (c.layTool.on("click", "*[lay-event]", function (e) {
                    var i = f(this),
                        a = i.attr("lay-event"),
                        l = k.cache[s.id],
                        n = function (e) {
                            var t = f(e.list),
                                a = f('<ul class="' + S + '"></ul>');
                            a.html(t), s.height && a.css("max-height", s.height - (c.layTool.outerHeight() || 50)), i.find("." + S)[0] || i.append(a), c.renderForm(), a.on("click", function (e) {
                                layui.stope(e)
                            }), e.done && e.done(a, t)
                        };
                    layui.stope(e), z.trigger("table.tool.panel.remove"), g.close(c.tipsIndex), layui.each(s.defaultToolbar, function (e, t) {
                        if (t.layEvent === a) return "function" == typeof t.onClick && t.onClick({
                            data: l,
                            config: s,
                            openPanel: n,
                            elem: i
                        }), !0
                    }), layui.event.call(this, R, "toolbar(" + o + ")", f.extend({
                        event: a,
                        config: s
                    }, {}))
                }), c.layHeader.on("click", "*[lay-event]", function (e) {
                    var t = f(this),
                        a = t.attr("lay-event"),
                        t = t.closest("th").data("key"),
                        t = c.col(t);
                    layui.event.call(this, R, "colTool(" + o + ")", f.extend({
                        event: a,
                        config: s,
                        col: t
                    }, {}))
                }), c.layPagebar.on("click", "*[lay-event]", function (e) {
                    var t = f(this).attr("lay-event");
                    layui.event.call(this, R, "pagebar(" + o + ")", f.extend({
                        event: t,
                        config: s
                    }, {}))
                }), e.on("mousemove", function (e) {
                    var t = f(this),
                        a = t.offset().left,
                        e = e.clientX - a;
                    t.data("unresize") || w.eventMoveElem || (r.allowResize = t.width() - e <= 10, d.css("cursor", r.allowResize ? "col-resize" : ""))
                }).on("mouseleave", function () {
                    f(this);
                    w.eventMoveElem || (r.allowResize = !1, d.css("cursor", ""))
                }).on("mousedown", function (e) {
                    var t, a = f(this);
                    r.allowResize && (t = a.data("key"), e.preventDefault(), r.offset = [e.clientX, e.clientY], c.cssRules(t, function (e) {
                        var t = e.style.width || a.outerWidth();
                        r.rule = e, r.ruleWidth = parseFloat(t), r.minWidth = a.data("minwidth") || s.cellMinWidth, r.maxWidth = a.data("maxwidth") || s.cellMaxWidth
                    }), a.data(j, r), w.eventMoveElem = a)
                }), w.docEvent || z.on("mousemove", function (e) {
                    var t, a;
                    w.eventMoveElem && (t = w.eventMoveElem.data(j) || {}, w.eventMoveElem.data("resizing", 1), e.preventDefault(), t.rule) && (e = t.ruleWidth + e.clientX - t.offset[0], a = w.eventMoveElem.closest("." + D).attr(N), a = C(a)) && ((e = e < t.minWidth ? t.minWidth : e) > t.maxWidth && (e = t.maxWidth), t.rule.style.width = e + "px", a.setGroupWidth(w.eventMoveElem), g.close(c.tipsIndex))
                }).on("mouseup", function (e) {
                    var t, a, i, l, n;
                    w.eventMoveElem && (i = (t = w.eventMoveElem).closest("." + D).attr(N), a = C(i)) && (i = t.data("key"), l = a.col(i), n = a.config.elem.attr("lay-filter"), r = {}, d.css("cursor", ""), a.scrollPatch(), t.removeData(j), delete w.eventMoveElem, a.cssRules(i, function (e) {
                        l.width = parseFloat(e.style.width), layui.event.call(t[0], R, "colResized(" + n + ")", {
                            col: l,
                            config: a.config
                        })
                    }))
                }), w.docEvent = !0, e.on("click", function (e) {
                    var t = f(this),
                        a = t.find(E),
                        i = a.attr("lay-sort");
                    if (!a[0] || 1 === t.data("resizing")) return t.removeData("resizing");
                    c.sort({
                        field: t,
                        type: "asc" === i ? "desc" : "desc" === i ? null : "asc",
                        fromEvent: !0
                    })
                }).find(E + " .layui-edge ").on("click", function (e) {
                    var t = f(this),
                        a = t.index(),
                        t = t.parents("th").eq(0).data("field");
                    layui.stope(e), 0 === a ? c.sort({
                        field: t,
                        type: "asc",
                        fromEvent: !0
                    }) : c.sort({
                        field: t,
                        type: "desc",
                        fromEvent: !0
                    })
                }), c.commonMember = function (e) {
                    var a = f(this).parents("tr").eq(0).data("index"),
                        t = c.layBody.find('tr[data-index="' + a + '"]'),
                        i = (k.cache[c.key] || [])[a] || {},
                        l = {
                            tr: t,
                            config: s,
                            data: k.clearCacheKey(i),
                            dataCache: i,
                            index: a,
                            del: function () {
                                k.cache[c.key][a] = [], t.remove(), c.scrollPatch()
                            },
                            update: function (e, t) {
                                c.updateRow({
                                    index: a,
                                    data: e = e || {},
                                    related: t
                                }, function (e, t) {
                                    l.data[e] = t
                                })
                            },
                            setRowChecked: function (e) {
                                c.setRowChecked(f.extend({
                                    index: a
                                }, e))
                            }
                        };
                    return f.extend(l, e)
                }),
                t = (c.elem.on("click", 'input[name="layTableCheckbox"]+', function (e) {
                    var t = f(this),
                        a = t.closest("td"),
                        t = t.prev(),
                        i = (c.layBody.find('input[name="layTableCheckbox"]'), t.parents("tr").eq(0).data("index")),
                        l = t[0].checked,
                        n = "layTableAllChoose" === t.attr("lay-filter");
                    t[0].disabled || (n ? c.setRowChecked({
                        index: "all",
                        checked: l
                    }) : c.setRowChecked({
                        index: i,
                        checked: l
                    }), layui.stope(e), layui.event.call(t[0], R, "checkbox(" + o + ")", y.call(t[0], {
                        checked: l,
                        type: n ? "all" : "one",
                        getCol: function () {
                            return c.col(a.data("key"))
                        }
                    })))
                }), c.elem.on("click", 'input[lay-type="layTableRadio"]+', function (e) {
                    var t = f(this),
                        a = t.closest("td"),
                        t = t.prev(),
                        i = t[0].checked,
                        l = t.parents("tr").eq(0).data("index");
                    if (layui.stope(e), t[0].disabled) return !1;
                    c.setRowChecked({
                        type: "radio",
                        index: l
                    }), layui.event.call(t[0], R, "radio(" + o + ")", y.call(t[0], {
                        checked: i,
                        getCol: function () {
                            return c.col(a.data("key"))
                        }
                    }))
                }), c.layBody.on("mouseenter", "tr", function () {
                    var e = f(this),
                        t = e.index();
                    e.data("off") || c.layBody.find("tr:eq(" + t + ")").addClass(_)
                }).on("mouseleave", "tr", function () {
                    var e = f(this),
                        t = e.index();
                    e.data("off") || c.layBody.find("tr:eq(" + t + ")").removeClass(_)
                }).on("click", "tr", function (e) {
                    t.call(this, "row", e)
                }).on("dblclick", "tr", function (e) {
                    t.call(this, "rowDouble", e)
                }).on("contextmenu", "tr", function (e) {
                    s.defaultContextmenu || e.preventDefault(), t.call(this, "rowContextmenu", e)
                }), function (e, t) {
                    var a = f(this);
                    if (!a.data("off")) {
                        if ("rowContextmenu" !== e) {
                            var i = [".layui-form-checkbox", ".layui-form-switch", ".layui-form-radio", "[lay-unrow]"].join(",");
                            if (f(t.target).is(i) || f(t.target).closest(i)[0]) return
                        }
                        layui.event.call(this, R, e + "(" + o + ")", y.call(a.children("td")[0], {
                            e: t
                        }))
                    }
                }),
                n = function (e, t) {
                    var a, i, l;
                    (e = f(e)).data("off") || (l = e.data("field"), i = e.data("key"), i = c.col(i), a = e.closest("tr").data("index"), a = k.cache[c.key][a], e.children(u), (i = "function" == typeof i.edit ? i.edit(a) : i.edit) && ((i = f("textarea" === i ? '<textarea class="layui-input ' + M + '" lay-unrow></textarea>' : '<input class="layui-input ' + M + '" lay-unrow>'))[0].value = (l = e.data("content") || a[l]) === undefined || null === l ? "" : l, e.find("." + M)[0] || e.append(i), i.focus(), t) && layui.stope(t))
                },
                i = (c.layBody.on("change", "." + M, function () {
                    var e = f(this),
                        t = e.parent(),
                        a = this.value,
                        i = e.parent().data("field"),
                        e = e.closest("tr").data("index"),
                        e = k.cache[c.key][e],
                        l = y.call(t[0], {
                            value: a,
                            field: i,
                            oldValue: e[i],
                            td: t,
                            reedit: function () {
                                setTimeout(function () {
                                    n(l.td);
                                    var e = {};
                                    e[i] = l.oldValue, l.update(e)
                                })
                            },
                            getCol: function () {
                                return c.col(t.data("key"))
                            }
                        }),
                        e = {};
                    e[i] = a, l.update(e), layui.event.call(t[0], R, "edit(" + o + ")", l)
                }).on("blur", "." + M, function () {
                    f(this).remove()
                }), c.layBody.on(s.editTrigger, "td", function (e) {
                    n(this, e)
                }).on("mouseenter", "td", function () {
                    a.call(this)
                }).on("mouseleave", "td", function () {
                    a.call(this, "hide")
                }), c.layTotal.on("mouseenter", "td", function () {
                    a.call(this)
                }).on("mouseleave", "td", function () {
                    a.call(this, "hide")
                }), "layui-table-grid-down"),
                a = function (e) {
                    var t = f(this),
                        a = t.children(u);
                    t.data("off") || t.parent().hasClass(H) || (e ? t.find(".layui-table-grid-down").remove() : !(a.prop("scrollWidth") > a.prop("clientWidth") || 0 < a.find("br").length) || s.lineStyle || a.find("." + i)[0] || t.append('<div class="' + i + '"><i class="layui-icon layui-icon-down"></i></div>'))
                },
                l = function (e, t) {
                    var a = f(this),
                        i = a.parent(),
                        l = i.data("key"),
                        n = c.col(l),
                        o = i.parent().data("index"),
                        d = i.children(u),
                        i = "layui-table-cell-c",
                        r = f('<i class="layui-icon layui-icon-up ' + i + '">');
                    "tips" === (t = t || n.expandedMode || s.cellExpandedMode) ? c.tipsIndex = g.tips(['<div class="layui-table-tips-main" style="margin-top: -' + (d.height() + 23) + "px;" + ("sm" === s.size ? "padding: 4px 15px; font-size: 12px;" : "lg" === s.size ? "padding: 14px 15px;" : "") + '">', d.html(), "</div>", '<i class="layui-icon layui-table-tips-c layui-icon-close"></i>'].join(""), d[0], {
                        tips: [3, ""],
                        time: -1,
                        anim: -1,
                        maxWidth: x.ios || x.android ? 300 : c.elem.width() / 2,
                        isOutAnim: !1,
                        skin: "layui-table-tips",
                        success: function (e, t) {
                            e.find(".layui-table-tips-c").on("click", function () {
                                g.close(t)
                            })
                        }
                    }): (c.elem.find("." + i).trigger("click"), c.cssRules(l, function (e) {
                        var t = e.style.width,
                            a = n.expandedWidth || s.cellExpandedWidth;
                        a < parseFloat(t) && (a = parseFloat(t)), r.data("cell-width", t), e.style.width = a + "px", setTimeout(function () {
                            c.scrollPatch()
                        })
                    }), c.setRowActive(o, H), d.next("." + i)[0] || d.after(r), r.on("click", function () {
                        var t = f(this);
                        c.setRowActive(o, [H, _].join(" "), !0), c.cssRules(l, function (e) {
                            e.style.width = t.data("cell-width"), setTimeout(function () {
                                c.resize()
                            })
                        }), t.remove(), d.scrollTop(0), d.scrollLeft(0)
                    })), a.remove(), layui.stope(e)
                },
                h = (c.layBody.on("click", "." + i, function (e) {
                    l.call(this, e)
                }), c.layTotal.on("click", "." + i, function (e) {
                    l.call(this, e, "tips")
                }), function (e) {
                    var t = f(this),
                        a = t.closest("td"),
                        i = t.parents("tr").eq(0).data("index");
                    c.setRowActive(i), layui.event.call(this, R, (e || "tool") + "(" + o + ")", y.call(this, {
                        event: t.attr("lay-event"),
                        getCol: function () {
                            return c.col(a.data("key"))
                        }
                    }))
                }),
                p = (c.layBody.on("click", "*[lay-event]", function (e) {
                    h.call(this), layui.stope(e)
                }).on("dblclick", "*[lay-event]", function (e) {
                    h.call(this, "toolDouble"), layui.stope(e)
                }), c.layMain.on("scroll", function () {
                    var e = f(this),
                        t = e.scrollLeft(),
                        e = e.scrollTop();
                    c.layHeader.scrollLeft(t), c.layTotal.scrollLeft(t), c.layFixed.find(L).scrollTop(e), g.close(c.tipsIndex)
                }), window.requestAnimationFrame || function (e) {
                    return setTimeout(e, 1e3 / 60)
                });
            c.layFixed.find(L).on("mousewheel DOMMouseScroll", function (e) {
                var t = e.originalEvent.wheelDelta || -e.originalEvent.detail,
                    a = c.layMain.scrollTop(),
                    i = 100,
                    l = (e.preventDefault(), function () {
                        0 < i && (i -= 10, a += 0 < t ? -10 : 10, c.layMain.scrollTop(a), p(l))
                    });
                p(l)
            })
        }, n.prototype.getElementSize = function (e) {
            if (window.getComputedStyle) return e = window.getComputedStyle(e, null), {
                height: parseFloat(e.height || "0"),
                width: parseFloat(e.width || "0"),
                borderTopWidth: parseFloat(e.borderTopWidth || "0"),
                borderRightWidth: parseFloat(e.borderRightWidth || "0"),
                borderBottomWidth: parseFloat(e.borderBottomWidth || "0"),
                borderLeftWidth: parseFloat(e.borderLeftWidth || "0"),
                paddingTop: parseFloat(e.paddingTop || "0"),
                paddingRight: parseFloat(e.paddingRight || "0"),
                paddingBottom: parseFloat(e.paddingBottom || "0"),
                paddingLeft: parseFloat(e.paddingLeft || "0"),
                marginTop: parseFloat(e.marginTop || "0"),
                marginRight: parseFloat(e.marginRight || "0"),
                marginBottom: parseFloat(e.marginBottom || "0"),
                marginLeft: parseFloat(e.marginLeft || "0"),
                boxSizing: e.boxSizing
            }
        }, n.prototype.getContentWidth = function (e) {
            var t;
            return !(9 === e[0].nodeType || r.ie && "border-box" === e.css("box-sizing") || "none" === e.css("display")) && void 0 !== (t = this.getElementSize(e[0])) && t.width ? "border-box" === t.boxSizing ? t.width - t.paddingLeft - t.paddingRight - t.borderLeftWidth - t.borderRightWidth : t.width : e.width()
        }, d.on("resize", function () {
            layui.each(w.that, function () {
                this.resize()
            })
        }), z.on("click", function () {
            z.trigger("table.remove.tool.panel")
        }), z.on("table.remove.tool.panel", function () {
            f("." + S).remove()
        }), k.init = function (i, o) {
            o = o || {};
            var e = "object" == typeof i ? i : f("string" == typeof i ? 'table[lay-filter="' + i + '"]' : t + "[lay-data], " + t + "[lay-options]"),
                d = "Table element property lay-data configuration item has a syntax error: ";
            return e.each(function () {
                var l, e = f(this),
                    t = e.attr("lay-data"),
                    t = r.options(this, {
                        attr: t ? "lay-data" : null,
                        errorText: d + (t || e.attr("lay-options"))
                    }),
                    n = f.extend({
                        elem: this,
                        cols: [],
                        data: [],
                        skin: e.attr("lay-skin"),
                        size: e.attr("lay-size"),
                        even: "string" == typeof e.attr("lay-even")
                    }, k.config, o, t),
                    a = (i && e.hide(), e.find("thead>tr").each(function (i) {
                        n.cols[i] = [], f(this).children().each(function (e) {
                            var t = f(this),
                                a = t.attr("lay-data"),
                                a = r.options(this, {
                                    attr: a ? "lay-data" : null,
                                    errorText: d + (a || t.attr("lay-options"))
                                }),
                                t = f.extend({
                                    title: t.text(),
                                    colspan: parseInt(t.attr("colspan")) || 1,
                                    rowspan: parseInt(t.attr("rowspan")) || 1
                                }, a);
                            n.cols[i].push(t)
                        })
                    }), e.find("tbody>tr")),
                    t = k.render(n);
                !a.length || o.data || t.config.url || (l = 0, k.eachCols(t.config.id, function (e, i) {
                    a.each(function (e) {
                        n.data[e] = n.data[e] || {};
                        var t = f(this),
                            a = i.field;
                        n.data[e][a] = t.children("td").eq(l).html()
                    }), l++
                }), t.reloadData({
                    data: n.data
                }))
            }), this
        }, w.that = {}, w.config = {}, function (a, i, e, l) {
            var n, o;
            l.colGroup && (n = 0, a++, l.CHILD_COLS = [], o = e + (parseInt(l.rowspan) || 1), layui.each(i[o], function (e, t) {
                t.parentKey ? t.parentKey === l.key && (t.PARENT_COL_INDEX = a, l.CHILD_COLS.push(t), c(a, i, o, t)) : t.PARENT_COL_INDEX || 1 <= n && n == (l.colspan || 1) || (t.PARENT_COL_INDEX = a, l.CHILD_COLS.push(t), n += parseInt(1 < t.colspan ? t.colspan : 1), c(a, i, o, t))
            }))
        });
    k.eachCols = function (e, a, i) {
        var e = w.config[e] || {},
            l = [],
            n = (i = f.extend(!0, [], i || e.cols), layui.each(i, function (a, e) {
                if (a) return !0;
                layui.each(e, function (e, t) {
                    c(0, i, a, t), t.PARENT_COL_INDEX || l.push(t)
                })
            }), function (e) {
                layui.each(e || l, function (e, t) {
                    if (t.CHILD_COLS) return n(t.CHILD_COLS);
                    "function" == typeof a && a(e, t)
                })
            });
        n()
    }, k.checkStatus = function (e) {
        var a = 0,
            i = [],
            l = [],
            e = k.cache[e] || [];
        return layui.each(e, function (e, t) {
            "array" === layui.type(t) || t[k.config.disabledName] ? a++ : t[k.config.checkName] && (i.push(k.clearCacheKey(t)), l.push(t))
        }), {
            data: i,
            dataCache: l,
            isAll: !(!e.length || !i.length) && i.length === e.length - a
        }
    }, k.setRowChecked = function (e, t) {
        e = C(e);
        e && e.setRowChecked(t)
    }, k.getData = function (e) {
        var a = [],
            e = k.cache[e] || [];
        return layui.each(e, function (e, t) {
            "array" !== layui.type(t) && a.push(k.clearCacheKey(t))
        }), a
    }, k.resize = function (e) {
        e ? l(e) && C(e).resize() : layui.each(w.that, function () {
            this.resize()
        })
    }, k.exportFile = function (e, t, a) {
        t = t || k.clearCacheKey(k.cache[e]);
        var i = (a = "object" == typeof a ? a : (i = {}, a && (i.type = a), i)).type || "csv",
            o = w.that[e],
            l = w.config[e] || {},
            n = {
                csv: "text/csv",
                xls: "application/vnd.ms-excel"
            } [i],
            d = document.createElement("a");
        if (x.ie) return b.error("IE_NOT_SUPPORT_EXPORTS");
        var r, c, s, u, y = l.tree && l.tree.view;
        if (y) try {
            t = f.extend(!0, [], k.cache[e]), t = function h(e) {
                return e.reduce(function (e, t) {
                    var a = t.children || [];
                    return delete t.children, e.concat(t, h(a))
                }, [])
            }(Array.from(t))
        } catch (p) {}
        d.href = "data:" + n + ";charset=utf-8,\ufeff" + encodeURIComponent((r = [], c = [], s = [], u = {}, layui.each(t, function (i, l) {
            var n = [];
            "object" == typeof e ? (layui.each(e, function (e, t) {
                0 == i && r.push(t || "")
            }), layui.each(layui.isArray(l) ? f.extend([], l) : k.clearCacheKey(l), function (e, t) {
                n.push('"' + (t || "") + '"')
            })) : k.eachCols(e, function (e, t) {
                var a;
                !1 === t.ignoreExport || t.field && "normal" == t.type ? t.hide && !1 !== t.ignoreExport || !0 === t.ignoreExport ? 0 == i && (u[t.field] = !0) : ((a = l[t.field]) !== undefined && null !== a || (a = ""), 0 == i && r.push(t.fieldTitle || t.title || t.field || ""), a = (a = T.call(o, {
                    item3: t,
                    content: a,
                    tplData: l,
                    text: "text",
                    obj: {
                        td: function (e) {
                            return y && (i = l.LAY_DATA_INDEX), o.layBody.find('tr[data-index="' + i + '"]>td').filter('[data-field="' + e + '"]')
                        }
                    }
                })).replace(/"/g, '""'), n.push(a = '"' + a + '"')) : t.field && "normal" !== t.type && 0 == i && (u[t.field] = !0)
            }), c.push(n.join(","))
        }), o && layui.each(o.dataTotal, function (e, t) {
            u[t.field] || s.push('"' + (t.total || "") + '"')
        }), r.join(",") + "\r\n" + c.join("\r\n") + "\r\n" + s.join(","))), d.download = (a.title || l.title || "table_" + (l.index || "")) + "." + i, document.body.appendChild(d), d.click(), document.body.removeChild(d)
    }, k.getOptions = l, k.hideCol = function (e, l) {
        var n = C(e);
        n && ("boolean" === layui.type(l) ? n.eachCols(function (e, t) {
            var a = t.key,
                i = n.col(a),
                t = t.parentKey;
            i.hide != l && (i = i.hide = l, n.elem.find('*[data-key="' + a + '"]')[i ? "addClass" : "removeClass"](W), n.setParentCol(i, t))
        }) : (l = layui.isArray(l) ? l : [l], layui.each(l, function (e, l) {
            n.eachCols(function (e, t) {
                var a, i;
                l.field === t.field && (a = t.key, i = n.col(a), t = t.parentKey, "hide" in l) && i.hide != l.hide && (i = i.hide = !!l.hide, n.elem.find('*[data-key="' + a + '"]')[i ? "addClass" : "removeClass"](W), n.setParentCol(i, t))
            })
        })), f("." + S).remove(), n.resize())
    }, k.reload = function (e, t, a, i) {
        if (l(e)) return (e = C(e)).reload(t, a, i), w.call(e)
    }, k.reloadData = function () {
        var a = f.extend([], arguments),
            i = (a[3] = "reloadData", new RegExp("^(" + ["elem", "id", "cols", "width", "height", "maxHeight", "toolbar", "defaultToolbar", "className", "css", "pagebar"].join("|") + ")$"));
        return layui.each(a[1], function (e, t) {
            i.test(e) && delete a[1][e]
        }), k.reload.apply(null, a)
    }, k.render = function (e) {
        e = new n(e);
        return w.call(e)
    }, k.clearCacheKey = function (e) {
        return delete(e = f.extend({}, e))[k.config.checkName], delete e[k.config.indexName], delete e[k.config.initIndexName], delete e[k.config.numbersName], delete e[k.config.disabledName], e
    }, f(function () {
        k.init()
    }), s(R, k)
});
layui.define(["table"], function (e) {
    "use strict";
    var A = layui.$,
        h = layui.form,
        P = layui.table,
        y = layui.hint(),
        B = {
            config: {},
            on: P.on,
            eachCols: P.eachCols,
            index: P.index,
            set: function (e) {
                var t = this;
                return t.config = A.extend({}, t.config, e), t
            },
            resize: P.resize,
            getOptions: P.getOptions,
            hideCol: P.hideCol,
            renderData: P.renderData
        },
        i = function () {
            var a = this,
                e = a.config,
                n = e.id || e.index;
            return {
                config: e,
                reload: function (e, t) {
                    a.reload.call(a, e, t)
                },
                reloadData: function (e, t) {
                    B.reloadData(n, e, t)
                }
            }
        },
        j = function (e) {
            var t = i.that[e];
            return t || y.error(e ? "The treeTable instance with ID '" + e + "' not found" : "ID argument required"), t || null
        },
        F = "lay-table-id",
        L = "layui-hide",
        s = ".layui-table-body",
        q = ".layui-table-main",
        R = ".layui-table-fixed-l",
        Y = ".layui-table-fixed-r",
        l = "layui-table-checked",
        m = "layui-table-tree",
        z = "LAY_DATA_INDEX",
        b = "LAY_DATA_INDEX_HISTORY",
        p = "LAY_PARENT_INDEX",
        g = "LAY_CHECKBOX_HALF",
        H = "LAY_EXPAND",
        X = "LAY_HAS_EXPANDED",
        V = "LAY_ASYNC_STATUS",
        n = ["all", "parent", "children", "none"],
        t = /<[^>]+?>/,
        f = ["flexIconClose", "flexIconOpen", "iconClose", "iconOpen", "iconLeaf", "icon"],
        a = function (e) {
            var t = this;
            t.index = ++B.index, t.config = A.extend(!0, {}, t.config, B.config, e), t.init(), t.render()
        },
        x = function (n, i, e) {
            var l = P.cache[n];
            layui.each(e || l, function (e, t) {
                var a = t[z] || ""; - 1 !== a.indexOf("-") && (l[a] = t), t[i] && x(n, i, t[i])
            })
        },
        d = function (d, a, e) {
            var r = j(d),
                o = ("reloadData" !== e && (r.status = {
                    expand: {}
                }), A.extend(!0, {}, r.getOptions(), a)),
                n = o.tree,
                c = n.customName.children,
                i = n.customName.id,
                l = (delete a.hasNumberCol, delete a.hasChecboxCol, delete a.hasRadioCol, P.eachCols(null, function (e, t) {
                    "numbers" === t.type ? a.hasNumberCol = !0 : "checkbox" === t.type ? a.hasChecboxCol = !0 : "radio" === t.type && (a.hasRadioCol = !0)
                }, o.cols), a.parseData),
                u = a.done;
            "reloadData" === e && "fixed" === o.scrollPos && (r.scrollTopCache = r.config.elem.next().find(s).scrollTop()), o.url ? e && (!l || l.mod) || (a.parseData = function () {
                var e = this,
                    t = arguments,
                    a = t[0],
                    t = ("function" === layui.type(l) && (a = l.apply(e, t) || t[0]), e.response.dataName);
                return n.data.isSimpleData && !n["async"].enable && (a[t] = r.flatToTree(a[t])), N(a[t], function (e) {
                    e[H] = H in e ? e[H] : e[i] !== undefined && r.status.expand[e[i]]
                }, c), e.autoSort && e.initSort && e.initSort.type && layui.sort(a[t], e.initSort.field, "desc" === e.initSort.type, !0), r.initData(a[t]), a
            }, a.parseData.mod = !0) : a.data !== undefined && (a.data = a.data || [], n.data.isSimpleData && (a.data = r.flatToTree(a.data)), r.initData(a.data)), e && (!u || u.mod) || (a.done = function () {
                var e, t = arguments,
                    a = t[3],
                    n = "renderData" === a,
                    i = (n || delete r.isExpandAll, this.elem.next()),
                    l = (r.updateStatus(null, {
                        LAY_HAS_EXPANDED: !1
                    }), x(d, c), i.find('[name="layTableCheckbox"][lay-filter="layTableAllChoose"]'));
                if (l.length && (e = B.checkStatus(d), l.prop({
                    checked: e.isAll && e.data.length,
                    indeterminate: !e.isAll && e.data.length
                })), !n && o.autoSort && o.initSort && o.initSort.type && B.sort(d), r.renderTreeTable(i), "reloadData" === a && "fixed" === this.scrollPos && i.find(s).scrollTop(r.scrollTopCache), "function" === layui.type(u)) return u.apply(this, t)
            }, a.done.mod = !0), a && a.tree && a.tree.view && layui.each(f, function (e, t) {
                a.tree.view[t] !== undefined && (a.tree.view[t] = r.normalizedIcon(a.tree.view[t]))
            })
        };
    a.prototype.init = function () {
        var e = this.config,
            t = e.tree.data.cascade,
            t = (-1 === n.indexOf(t) && (e.tree.data.cascade = "all"), P.render(A.extend({}, e, {
                data: [],
                url: "",
                done: null
            }))),
            a = t.config.id;
        (i.that[a] = this).tableIns = t, d(a, e)
    }, a.prototype.config = {
        tree: {
            customName: {
                children: "children",
                isParent: "isParent",
                name: "name",
                id: "id",
                pid: "parentId",
                icon: "icon"
            },
            view: {
                indent: 14,
                flexIconClose: '<i class="layui-icon layui-icon-triangle-r"></i>',
                flexIconOpen: '<i class="layui-icon layui-icon-triangle-d"></i>',
                showIcon: !0,
                icon: "",
                iconClose: '<i class="layui-icon layui-icon-folder"></i>',
                iconOpen: '<i class="layui-icon layui-icon-folder-open"></i>',
                iconLeaf: '<i class="layui-icon layui-icon-leaf"></i>',
                showFlexIconIfNotParent: !1,
                dblClickExpand: !0,
                expandAllDefault: !1
            },
            data: {
                isSimpleData: !1,
                rootPid: null,
                cascade: "all"
            },
            "async": {
                enable: !1,
                url: "",
                type: null,
                contentType: null,
                headers: null,
                where: null,
                autoParam: []
            },
            callback: {
                beforeExpand: null,
                onExpand: null
            }
        }
    }, a.prototype.normalizedIcon = function (e) {
        return e ? t.test(e) ? e : '<i class="' + e + '"></i>' : ""
    }, a.prototype.getOptions = function () {
        return this.tableIns ? P.getOptions(this.tableIns.config.id) : this.config
    }, a.prototype.flatToTree = function (e) {
        var n, i, l, d, r, o, c, u, t = this.getOptions(),
            a = t.tree,
            s = a.customName,
            t = t.id;
        return e = e || P.cache[t], t = e, n = s.id, i = s.pid, l = s.children, d = a.data.rootPid, n = n || "id", i = i || "parentId", l = l || "children", c = {}, u = [], layui.each(t, function (e, t) {
            r = n + t[n], o = n + t[i], c[r] || (c[r] = {}, c[r][l] = []);
            var a = {};
            a[l] = c[r][l], c[r] = A.extend({}, t, a), ((d ? c[r][i] === d : !c[r][i]) ? u : (c[o] || (c[o] = {}, c[o][l] = []), c[o][l])).push(c[r])
        }), u
    }, a.prototype.treeToFlat = function (e, n, i) {
        var l = this,
            d = l.getOptions().tree.customName,
            r = d.children,
            o = d.pid,
            c = [];
        return layui.each(e, function (e, t) {
            var e = (i ? i + "-" : "") + e,
                a = A.extend({}, t);
            a[o] = "undefined" != typeof t[o] ? t[o] : n, c.push(a), c = c.concat(l.treeToFlat(t[r], t[d.id], e))
        }), c
    }, a.prototype.getTreeNode = function (e) {
        var t, a, n = this;
        return e ? (a = (t = n.getOptions()).tree, t.id, a.customName, {
            data: e,
            dataIndex: e[z],
            getParentNode: function () {
                return n.getNodeByIndex(e[p])
            }
        }) : y.error("\u627e\u4e0d\u5230\u8282\u70b9\u6570\u636e")
    }, a.prototype.getNodeByIndex = function (t) {
        var a, e, n = this,
            i = n.getNodeDataByIndex(t);
        return i ? ((e = n.getOptions()).tree.customName.parent, a = e.id, (e = {
            data: i,
            dataIndex: i[z],
            getParentNode: function () {
                return n.getNodeByIndex(i[p])
            },
            update: function (e) {
                return B.updateNode(a, t, e)
            },
            remove: function () {
                return B.removeNode(a, t)
            },
            expand: function (e) {
                return B.expandNode(a, A.extend({}, e, {
                    index: t
                }))
            },
            setChecked: function (e) {
                return B.setRowChecked(a, A.extend({}, e, {
                    index: t
                }))
            }
        }).dataIndex = t, e) : y.error("\u627e\u4e0d\u5230\u8282\u70b9\u6570\u636e")
    }, a.prototype.getNodeById = function (a) {
        var e = this.getOptions(),
            n = e.tree.customName.id,
            i = "",
            e = B.getData(e.id, !0);
        if (layui.each(e, function (e, t) {
            if (t[n] === a) return i = t[z], !0
        }), i) return this.getNodeByIndex(i)
    }, a.prototype.getNodeDataByIndex = function (e, t, a) {
        var n = this.getOptions(),
            i = n.tree,
            n = n.id,
            n = P.cache[n],
            l = n[e];
        if ("delete" !== a && l) return A.extend(l, a), t ? A.extend({}, l) : l;
        for (var d = n, r = String(e).split("-"), o = 0, c = i.customName.children; o < r.length; o++) {
            if (a && o === r.length - 1) {
                if ("delete" === a) return (o ? d[c] : d).splice(r[o], 1)[0];
                A.extend((o ? d[c] : d)[r[o]], a)
            }
            d = (o ? d[c] : d)[r[o]]
        }
        return t ? A.extend({}, d) : d
    }, B.getNodeDataByIndex = function (e, t) {
        e = j(e);
        if (e) return e.getNodeDataByIndex(t, !0)
    };
    a.prototype.initData = function (e, t) {
        var a = this.getOptions(),
            n = a.tree,
            a = a.id,
            n = (e = e || this.getTableData(), n.customName),
            i = n.isParent,
            l = n.children,
            d = function (e, a) {
                layui.each(e, function (e, t) {
                    i in t || (t[i] = !(!t[l] || !t[l].length)), t[b] = t[z], t[p] = a = a || "";
                    e = t[z] = (a ? a + "-" : "") + e;
                    d(t[l] || [], e)
                })
            };
        return d(e, t), x(a, l, e), e
    }, r = {};
    var r, U = function (e, t, a) {
            return r[e] || (r[e] = layui.debounce(t, a)), r[e]
        },
        J = function (t, a, n, i, l) {
            var e = t.trElem,
                d = t.tableViewElem || e.closest(".layui-table-view"),
                r = t.tableId || d.attr(F),
                o = t.options || P.getOptions(r),
                e = t.dataIndex || e.attr("lay-data-index"),
                c = j(r),
                u = o.tree || {},
                s = u.customName || {},
                f = s.isParent,
                y = c.getNodeDataByIndex(e),
                p = "boolean" !== layui.type(a),
                x = p ? !y[H] : a,
                h = y[f] ? x : null;
            if (l && x != y[H] && (!y[V] || "local" === y[V])) {
                var m = u.callback.beforeExpand;
                if ("function" === layui.type(m) && !1 === m(r, y, a)) return h
            }
            var m = y[X],
                b = d.find('tr[lay-data-index="' + e + '"]'),
                g = b.find(".layui-table-tree-flexIcon"),
                v = (c.updateNodeIcon({
                    scopeEl: b,
                    isExpand: x,
                    isParent: y[f]
                }), y[H] = x, y[s.id]);
            if (v !== undefined && (c.status.expand[v] = x), null !== h) {
                v = y[s.children] || [];
                if (x)
                    if (m) {
                        if (!v.length) return;
                        b.nextAll(v.map(function (e, t, a) {
                            return 'tr[lay-data-index="' + e[z] + '"]'
                        }).join(",")).removeClass(L), layui.each(v, function (e, t) {
                            t[f] && (!n || p || t[H] ? t[H] && J({
                                dataIndex: t[z],
                                trElem: d.find('tr[lay-data-index="' + t[z] + '"]').first(),
                                tableViewElem: d,
                                tableId: r,
                                options: o
                            }, !0) : J({
                                dataIndex: t[z],
                                trElem: d.find('tr[lay-data-index="' + t[z] + '"]').first(),
                                tableViewElem: d,
                                tableId: r,
                                options: o
                            }, a, n, i, l))
                        })
                    } else {
                        var N, I, C, D, T, _, k, w, O, S, E, m = u["async"] || {},
                            b = m.url || o.url;
                        if (m.enable && y[f] && (!y[V] || "error" === y[V])) return y[V] = "loading", g.html('<i class="layui-icon layui-icon-loading layui-anim layui-anim-loop layui-anim-rotate"></i>'), N = function (e) {
                            y[V] = "success", y[s.children] = e, c.initData(y[s.children], y[z]), J(t, !0, !p && n, i, l)
                        }, C = m.format, "function" === layui.type(C) ? C(y, o, N) : (I = A.extend({}, m.where || o.where), C = m.autoParam, layui.each(C, function (e, t) {
                            t = t.split("=");
                            I[t[0].trim()] = y[(t[1] || t[0]).trim()]
                        }), (C = m.contentType || o.contentType) && 0 == C.indexOf("application/json") && (I = JSON.stringify(I)), O = m.method || o.method, D = m.dataType || o.dataType, T = m.jsonpCallback || o.jsonpCallback, _ = m.headers || o.headers, k = m.parseData || o.parseData, w = m.response || o.response, A.ajax({
                            type: O || "get",
                            url: b,
                            contentType: C,
                            data: I,
                            dataType: D || "json",
                            jsonpCallback: T,
                            headers: _ || {},
                            success: function (e) {
                                (e = "function" == typeof k ? k.call(o, e) || e : e)[w.statusName] != w.statusCode ? (y[V] = "error", y[H] = !1, g.html('<i class="layui-icon layui-icon-refresh"></i>')) : N(e[w.dataName])
                            },
                            error: function (e, t) {
                                y[V] = "error", y[H] = !1, "function" == typeof o.error && o.error(e, t)
                            }
                        })), h;
                        y[X] = !0, v.length && (!o.initSort || o.url && !o.autoSort || ((m = o.initSort).type ? layui.sort(v, m.field, "desc" === m.type, !0) : layui.sort(v, P.config.indexName, null, !0)), c.initData(y[s.children], y[z]), O = P.getTrHtml(r, v, null, null, e), S = {
                            trs: A(O.trs.join("")),
                            trs_fixed: A(O.trs_fixed.join("")),
                            trs_fixed_r: A(O.trs_fixed_r.join(""))
                        }, E = (e.split("-").length - 1 || 0) + 1, layui.each(v, function (e, t) {
                            S.trs.eq(e).attr({
                                "data-index": t[z],
                                "lay-data-index": t[z],
                                "data-level": E
                            }).data("index", t[z]), S.trs_fixed.eq(e).attr({
                                "data-index": t[z],
                                "lay-data-index": t[z],
                                "data-level": E
                            }).data("index", t[z]), S.trs_fixed_r.eq(e).attr({
                                "data-index": t[z],
                                "lay-data-index": t[z],
                                "data-level": E
                            }).data("index", t[z])
                        }), d.find(q).find('tbody tr[lay-data-index="' + e + '"]').after(S.trs), d.find(R).find('tbody tr[lay-data-index="' + e + '"]').after(S.trs_fixed), d.find(Y).find('tbody tr[lay-data-index="' + e + '"]').after(S.trs_fixed_r), c.renderTreeTable(S.trs, E), n) && !p && layui.each(v, function (e, t) {
                            J({
                                dataIndex: t[z],
                                trElem: d.find('tr[lay-data-index="' + t[z] + '"]').first(),
                                tableViewElem: d,
                                tableId: r,
                                options: o
                            }, a, n, i, l)
                        })
                    }
                else c.isExpandAll = !1, (n && !p ? (layui.each(v, function (e, t) {
                    J({
                        dataIndex: t[z],
                        trElem: d.find('tr[lay-data-index="' + t[z] + '"]').first(),
                        tableViewElem: d,
                        tableId: r,
                        options: o
                    }, a, n, i, l)
                }), d.find(v.map(function (e, t, a) {
                    return 'tr[lay-data-index="' + e[z] + '"]'
                }).join(","))) : (b = c.treeToFlat(v, y[s.id], e), d.find(b.map(function (e, t, a) {
                    return 'tr[lay-data-index="' + e[z] + '"]'
                }).join(",")))).addClass(L);
                U("resize-" + r, function () {
                    B.resize(r)
                }, 0)(), l && "loading" !== y[V] && (C = u.callback.onExpand, "function" === layui.type(C)) && C(r, y, x)
            }
            return h
        },
        v = (B.expandNode = function (e, t) {
            var a, n, i, e = j(e);
            if (e) return a = (t = t || {}).index, n = t.expandFlag, i = t.inherit, t = t.callbackFlag, e = e.getOptions().elem.next(), J({
                trElem: e.find('tr[lay-data-index="' + a + '"]').first()
            }, n, i, null, t)
        }, B.expandAll = function (a, e) {
            if ("boolean" !== layui.type(e)) return y.error("expandAll \u7684\u5c55\u5f00\u72b6\u6001\u53c2\u6570\u53ea\u63a5\u6536true/false");
            var t = j(a);
            if (t) {
                t.isExpandAll = e;
                var n = t.getOptions(),
                    i = n.tree,
                    l = n.elem.next(),
                    d = i.customName.isParent,
                    r = i.customName.id,
                    o = i.view.showFlexIconIfNotParent;
                if (e) {
                    e = B.getData(a, !0);
                    if (i["async"].enable) {
                        var c = !0;
                        if (layui.each(e, function (e, t) {
                            if (t[d] && !t[V]) return !(c = !1)
                        }), !c) return void layui.each(B.getData(a), function (e, t) {
                            B.expandNode(a, {
                                index: t[z],
                                expandFlag: !0,
                                inherit: !0
                            })
                        })
                    }
                    var u = !0;
                    if (layui.each(e, function (e, t) {
                        if (t[d] && !t[X]) return !(u = !1)
                    }), u) t.updateStatus(null, function (e) {
                        (e[d] || o) && (e[H] = !0, e[r] !== undefined) && (t.status.expand[e[r]] = !0)
                    }), l.find('tbody tr[data-level!="0"]').removeClass(L), l.find(".layui-table-tree-flexIcon").html(i.view.flexIconOpen), i.view.showIcon && l.find(".layui-table-tree-nodeIcon:not(.layui-table-tree-iconCustom,.layui-table-tree-iconLeaf)").html(i.view.iconOpen);
                    else {
                        if (t.updateStatus(null, function (e) {
                            (e[d] || o) && (e[H] = !0, e[X] = !0, e[r] !== undefined) && (t.status.expand[e[r]] = !0)
                        }), n.initSort && n.initSort.type && n.autoSort) return B.sort(a);
                        var s, n = P.getTrHtml(a, e),
                            f = {
                                trs: A(n.trs.join("")),
                                trs_fixed: A(n.trs_fixed.join("")),
                                trs_fixed_r: A(n.trs_fixed_r.join(""))
                            };
                        layui.each(e, function (e, t) {
                            var a = t[z].split("-").length - 1;
                            s = {
                                "data-index": t[z],
                                "lay-data-index": t[z],
                                "data-level": a
                            }, f.trs.eq(e).attr(s).data("index", t[z]), f.trs_fixed.eq(e).attr(s).data("index", t[z]), f.trs_fixed_r.eq(e).attr(s).data("index", t[z])
                        }), layui.each(["main", "fixed-l", "fixed-r"], function (e, t) {
                            l.find(".layui-table-" + t + " tbody").html(f[["trs", "trs_fixed", "trs_fixed_r"][e]])
                        }), t.renderTreeTable(l, 0, !1)
                    }
                } else t.updateStatus(null, function (e) {
                    (e[d] || o) && (e[H] = !1, e[r] !== undefined) && (t.status.expand[e[r]] = !1)
                }), l.find('.layui-table-box tbody tr[data-level!="0"]').addClass(L), l.find(".layui-table-tree-flexIcon").html(i.view.flexIconClose), i.view.showIcon && l.find(".layui-table-tree-nodeIcon:not(.layui-table-tree-iconCustom,.layui-table-tree-iconLeaf)").html(i.view.iconClose);
                B.resize(a)
            }
        }, a.prototype.updateNodeIcon = function (e) {
            var t = this.getOptions().tree || {},
                a = e.scopeEl,
                n = e.isExpand,
                e = e.isParent;
            a.find(".layui-table-tree-flexIcon").css("visibility", e || t.view.showFlexIconIfNotParent ? "visible" : "hidden").html(n ? t.view.flexIconOpen : t.view.flexIconClose), t.view.showIcon && (a = a.find(".layui-table-tree-nodeIcon:not(.layui-table-tree-iconCustom)"), n = e ? n ? t.view.iconOpen : t.view.iconClose : t.view.iconLeaf, a.toggleClass("layui-table-tree-iconLeaf", !e).html(n))
        }, a.prototype.renderTreeTable = function (e, t, a) {
            var l = this,
                n = l.getOptions(),
                d = n.elem.next(),
                i = (d.hasClass(m) || d.addClass(m), n.id),
                r = n.tree || {},
                o = (r.data, r.view || {}),
                c = r.customName || {},
                u = c.isParent,
                s = (d.attr("lay-filter"), l),
                f = n.data.length,
                y = ((t = t || 0) || (d.find(".layui-table-body tr:not([data-level])").attr("data-level", t), layui.each(P.cache[i], function (e, t) {
                    f && (t[z] = String(e));
                    t = t[z];
                    d.find('.layui-table-main tbody tr[data-level="0"]:eq(' + e + ")").attr("lay-data-index", t), d.find('.layui-table-fixed-l tbody tr[data-level="0"]:eq(' + e + ")").attr("lay-data-index", t), d.find('.layui-table-fixed-r tbody tr[data-level="0"]:eq(' + e + ")").attr("lay-data-index", t)
                })), null),
                p = c.name,
                x = o.indent || 14;
            if (layui.each(e.find('td[data-field="' + p + '"]'), function (e, t) {
                var a, n, i = (t = A(t)).closest("tr"),
                    t = t.children(".layui-table-cell");
                t.hasClass("layui-table-tree-item") || (n = i.attr("lay-data-index")) && (i = d.find('tr[lay-data-index="' + n + '"]'), (a = s.getNodeDataByIndex(n))[H] && a[u] && ((y = y || {})[n] = !0), a[g] && i.find('input[type="checkbox"][name="layTableCheckbox"]').prop("indeterminate", !0), n = t.html(), (t = i.find('td[data-field="' + p + '"]>div.layui-table-cell')).addClass("layui-table-tree-item"), t.html(['<div class="layui-inline layui-table-tree-flexIcon" ', 'style="', "margin-left: " + x * i.attr("data-level") + "px;", a[u] || o.showFlexIconIfNotParent ? "" : " visibility: hidden;", '">', a[H] ? o.flexIconOpen : o.flexIconClose, "</div>", o.showIcon ? '<div class="layui-inline layui-table-tree-nodeIcon' + (a[c.icon] || o.icon ? " layui-table-tree-iconCustom" : "") + (a[u] ? "" : " layui-table-tree-iconLeaf") + '">' + (l.normalizedIcon(a[c.icon]) || o.icon || (a[u] ? a[H] ? o.iconOpen : o.iconClose : o.iconLeaf) || "") + "</div>" : "", n].join("")).find(".layui-table-tree-flexIcon").on("click", function (e) {
                    layui.stope(e), J({
                        trElem: i
                    }, null, null, null, !0)
                }))
            }), !t && r.view.expandAllDefault && l.isExpandAll === undefined) return B.expandAll(i, !0);
            (!1 !== a && y ? (layui.each(y, function (e, t) {
                e = d.find('tr[lay-data-index="' + e + '"]');
                e.find(".layui-table-tree-flexIcon").html(o.flexIconOpen), J({
                    trElem: e.first()
                }, !0)
            }), U("renderTreeTable2-" + i, function () {
                h.render(A(".layui-table-tree[" + F + '="' + i + '"]'))
            }, 0)) : U("renderTreeTable-" + i, function () {
                n.hasNumberCol && v(l), h.render(A(".layui-table-tree[" + F + '="' + i + '"]'))
            }, 0))()
        }, function (a) {
            var e = a.getOptions(),
                t = e.elem.next(),
                n = 0,
                i = t.find(".layui-table-main tbody tr"),
                l = t.find(".layui-table-fixed-l tbody tr"),
                d = t.find(".layui-table-fixed-r tbody tr");
            layui.each(a.treeToFlat(P.cache[e.id]), function (e, t) {
                t.LAY_HIDE || (a.getNodeDataByIndex(t[z]).LAY_NUM = ++n, i.eq(e).find(".laytable-cell-numbers").html(n), l.eq(e).find(".laytable-cell-numbers").html(n), d.eq(e).find(".laytable-cell-numbers").html(n))
            })
        }),
        N = (a.prototype.render = function (e) {
            var t = this;
            t.tableIns = P["reloadData" === e ? "reloadData" : "reload"](t.tableIns.config.id, A.extend(!0, {}, t.config)), t.config = t.tableIns.config
        }, a.prototype.reload = function (e, t, a) {
            var n = this;
            e = e || {}, delete n.haveInit, layui.each(e, function (e, t) {
                "array" === layui.type(t) && delete n.config[e]
            }), d(n.getOptions().id, e, a || !0), n.config = A.extend(t, {}, n.config, e), n.render(a)
        }, B.reloadData = function () {
            var e = A.extend(!0, [], arguments);
            return e[3] = "reloadData", B.reload.apply(null, e)
        }, function (e, a, n, i) {
            var l = [];
            return layui.each(e, function (e, t) {
                "function" === layui.type(a) ? a(t) : A.extend(t, a), l.push(A.extend({}, t)), i || (l = l.concat(N(t[n], a, n, i)))
            }), l
        }),
        o = (a.prototype.updateStatus = function (e, t, a) {
            var n = this.getOptions(),
                i = n.tree;
            return e = e || P.cache[n.id], N(e, t, i.customName.children, a)
        }, a.prototype.getTableData = function () {
            var e = this.getOptions();
            return P.cache[e.id]
        }, B.updateStatus = function (e, t, a) {
            var e = j(e),
                n = e.getOptions();
            return a = a || (n.url ? P.cache[n.id] : n.data), e.updateStatus(a, t)
        }, B.sort = function (e) {
            var t, a, i, l, n, d = j(e);
            d && (n = (t = d.getOptions()).tree, a = B.getData(e), i = n.customName.children, l = function (e, a, n) {
                layui.sort(e, a, n, !0), layui.each(e, function (e, t) {
                    l(t[i] || [], a, n)
                })
            }, t.autoSort) && ((n = t.initSort).type ? l(a, n.field, "desc" === n.type) : l(a, P.config.indexName, null), P.cache[e] = a, d.initData(a), B.renderData(e))
        }, function (n) {
            var t = n.config.id,
                i = j(t),
                a = n.data = B.getNodeDataByIndex(t, n.index),
                l = a[z],
                d = (n.dataIndex = l, n.update);
            n.update = function () {
                var e = arguments,
                    t = (A.extend(i.getNodeDataByIndex(l), e[0]), d.apply(this, e)),
                    a = n.config.tree.customName.name;
                return a in e[0] && n.tr.find('td[data-field="' + a + '"]').children("div.layui-table-cell").removeClass("layui-table-tree-item"), i.renderTreeTable(n.tr, n.tr.attr("data-level"), !1), t
            }, n.del = function () {
                B.removeNode(t, a)
            }, n.setRowChecked = function (e) {
                B.setRowChecked(t, {
                    index: a,
                    checked: e
                })
            }
        }),
        u = (B.updateNode = function (e, a, t) {
            var n, i, l, d, r, o = j(e);
            o && ((d = o.getOptions()).tree, d = (n = d.elem.next()).find('tr[lay-data-index="' + a + '"]'), i = d.attr("data-index"), l = d.attr("data-level"), t) && (d = o.getNodeDataByIndex(a, !1, t), r = P.getTrHtml(e, [d]), layui.each(["main", "fixed-l", "fixed-r"], function (e, t) {
                n.find(".layui-table-" + t + ' tbody tr[lay-data-index="' + a + '"]').replaceWith(A(r[["trs", "trs_fixed", "trs_fixed_r"][e]].join("")).attr({
                    "data-index": i,
                    "lay-data-index": a,
                    "data-level": l
                }).data("index", i))
            }), o.renderTreeTable(n.find('tr[lay-data-index="' + a + '"]'), l))
        }, B.removeNode = function (e, t, a) {
            var n = j(e);
            if (n) {
                var i, l = n.getOptions(),
                    d = l.tree,
                    r = d.customName.isParent,
                    o = d.customName.children,
                    c = l.elem.next(),
                    u = [],
                    s = P.cache[e],
                    t = n.getNodeDataByIndex("string" === layui.type(t) ? t : t[z], !1, "delete"),
                    f = n.getNodeDataByIndex(t[p]),
                    d = (n.updateCheckStatus(f), n.treeToFlat([t], t[d.customName.pid], t[p])),
                    t = (layui.each(d, function (e, t) {
                        t = t[z];
                        u.push('tr[lay-data-index="' + t + '"]'), -1 !== t.indexOf("-") && delete s[t]
                    }), c.find(u.join(",")).remove(), n.initData());
                for (i in s) - 1 !== i.indexOf("-") && i !== s[i][z] && delete s[i];
                layui.each(n.treeToFlat(t), function (e, t) {
                    t[b] && t[b] !== t[z] && c.find('tr[lay-data-index="' + t[b] + '"]').attr({
                        "data-index": t[z],
                        "lay-data-index": t[z]
                    }).data("index", t[z])
                }), layui.each(s, function (e, t) {
                    c.find('tr[data-level="0"][lay-data-index="' + t[z] + '"]').attr("data-index", e).data("index", e)
                }), l.hasNumberCol && v(n), f && (d = c.find('tr[lay-data-index="' + f[z] + '"]'), a || (f[r] = !(!f[o] || !f[o].length)), n.updateNodeIcon({
                    scopeEl: d,
                    isExpand: f[H],
                    isParent: f[r]
                })), B.resize(e)
            }
        }, B.addNodes = function (e, t) {
            var a = j(e);
            if (a) {
                var n = a.getOptions(),
                    i = n.tree,
                    l = n.elem.next(),
                    d = P.config.checkName,
                    r = (t = t || {}).parentIndex,
                    o = t.index,
                    c = t.data,
                    t = t.focus,
                    u = (r = "number" === layui.type(r) ? r.toString() : r) ? a.getNodeDataByIndex(r) : null,
                    o = "number" === layui.type(o) ? o : -1,
                    c = A.extend(!0, [], layui.isArray(c) ? c : [c]);
                layui.each(c, function (e, t) {
                    d in t || !u || (t[d] = u[d])
                }), a.getTableData();
                if (u) {
                    var s = i.customName.isParent,
                        f = i.customName.children;
                    u[s] = !0;
                    var y = (y = u[f]) ? (p = y.splice(-1 === o ? y.length : o), u[f] = y.concat(c, p)) : u[f] = c,
                        f = (a.updateStatus(y, function (e) {
                            (e[s] || i.view.showFlexIconIfNotParent) && (e[X] = !1)
                        }), a.treeToFlat(y));
                    l.find(f.map(function (e) {
                        return 'tr[lay-data-index="' + e[z] + '"]'
                    }).join(",")).remove(), a.initData(), u[X] = !1, u[V] = "local", J({
                        trElem: l.find('tr[lay-data-index="' + r + '"]')
                    }, !0)
                } else {
                    var p = P.cache[e].splice(-1 === o ? P.cache[e].length : o);
                    if (P.cache[e] = P.cache[e].concat(c, p), n.url || (n.page ? (y = n.page, n.data.splice.apply(n.data, [y.limit * (y.curr - 1), y.limit].concat(P.cache[e]))) : n.data = P.cache[e]), a.initData(), l.find(".layui-none").length) return P.renderData(e), c;
                    var x, f = P.getTrHtml(e, c),
                        h = {
                            trs: A(f.trs.join("")),
                            trs_fixed: A(f.trs_fixed.join("")),
                            trs_fixed_r: A(f.trs_fixed_r.join(""))
                        },
                        r = (layui.each(c, function (e, t) {
                            x = {
                                "data-index": t[z],
                                "lay-data-index": t[z],
                                "data-level": "0"
                            }, h.trs.eq(e).attr(x).data("index", t[z]), h.trs_fixed.eq(e).attr(x).data("index", t[z]), h.trs_fixed_r.eq(e).attr(x).data("index", t[z])
                        }), parseInt(c[0][z]) - 1),
                        y = l.find(q),
                        n = l.find(R),
                        f = l.find(Y); - 1 == r ? y.find('tr[data-level="0"][data-index="0"]')[0] ? (y.find('tr[data-level="0"][data-index="0"]').before(h.trs), n.find('tr[data-level="0"][data-index="0"]').before(h.trs_fixed), f.find('tr[data-level="0"][data-index="0"]').before(h.trs_fixed_r)) : (y.find("tbody").prepend(h.trs), n.find("tbody").prepend(h.trs_fixed), f.find("tbody").prepend(h.trs_fixed_r)) : -1 === o ? (y.find("tbody").append(h.trs), n.find("tbody").append(h.trs_fixed), f.find("tbody").append(h.trs_fixed_r)) : (r = p[0][b], y.find('tr[data-level="0"][data-index="' + r + '"]').before(h.trs), n.find('tr[data-level="0"][data-index="' + r + '"]').before(h.trs_fixed), f.find('tr[data-level="0"][data-index="' + r + '"]').before(h.trs_fixed_r)), layui.each(P.cache[e], function (e, t) {
                        l.find('tr[data-level="0"][lay-data-index="' + t[z] + '"]').attr("data-index", e).data("index", e)
                    }), a.renderTreeTable(l.find(c.map(function (e, t, a) {
                        return 'tr[lay-data-index="' + e[z] + '"]'
                    }).join(",")))
                }
                return a.updateCheckStatus(u), u && (o = l.find('tr[lay-data-index="' + u[z] + '"]'), a.updateNodeIcon({
                    scopeEl: o,
                    isExpand: u[H],
                    isParent: u[s]
                })), B.resize(e), t && l.find(q).find('tr[lay-data-index="' + c[0][z] + '"]').get(0).scrollIntoViewIfNeeded(), c
            }
        }, B.checkStatus = function (e, n) {
            var i, t, a, l = j(e);
            if (l) return l = l.getOptions().tree, i = P.config.checkName, t = B.getData(e, !0).filter(function (e, t, a) {
                return e[i] || n && e[g]
            }), a = !0, layui.each("all" === l.data.cascade ? P.cache[e] : B.getData(e, !0), function (e, t) {
                if (!t[i]) return !(a = !1)
            }), {
                data: t,
                isAll: a
            }
        }, B.on("sort", function (e) {
            var e = e.config,
                t = e.elem.next(),
                e = e.id;
            t.hasClass(m) && B.sort(e)
        }), B.on("row", function (e) {
            e.config.elem.next().hasClass(m) && o(e)
        }), B.on("rowDouble", function (e) {
            var t = e.config,
                a = t.elem.next();
            t.id;
            a.hasClass(m) && (o(e), (t.tree || {}).view.dblClickExpand) && J({
                trElem: e.tr.first()
            }, null, null, null, !0)
        }), B.on("rowContextmenu", function (e) {
            var t = e.config,
                a = t.elem.next();
            t.id;
            a.hasClass(m) && o(e)
        }), B.on("tool", function (e) {
            var t = e.config,
                a = t.elem.next();
            t.id;
            a.hasClass(m) && o(e)
        }), B.on("edit", function (e) {
            var t = e.config,
                a = t.elem.next();
            t.id;
            a.hasClass(m) && (o(e), e.field === t.tree.customName.name) && ((a = {})[e.field] = e.value, e.update(a))
        }), B.on("radio", function (e) {
            var t = e.config,
                a = t.elem.next(),
                t = t.id;
            a.hasClass(m) && (a = j(t), o(e), u.call(a, e.tr, e.checked))
        }), a.prototype.setRowCheckedClass = function (e, t) {
            var a = this.getOptions(),
                n = (e.data("index"), a.elem.next());
            e[t ? "addClass" : "removeClass"](l), e.each(function () {
                var e = A(this).data("index");
                n.find('.layui-table-fixed-r tbody tr[data-index="' + e + '"]')[t ? "addClass" : "removeClass"](l)
            })
        }, a.prototype.updateCheckStatus = function (e, t) {
            var a, n, i, l, d, r, o, c = this,
                u = c.getOptions();
            return !!u.hasChecboxCol && (a = u.tree, n = u.id, i = u.elem.next(), l = P.config.checkName, "all" !== (d = a.data.cascade) && "parent" !== d || !e || (d = c.updateParentCheckStatus(e, "boolean" === layui.type(t) ? t : null), layui.each(d, function (e, t) {
                var a = i.find('tr[lay-data-index="' + t[z] + '"]  input[name="layTableCheckbox"]:not(:disabled)'),
                    n = t[l];
                c.setRowCheckedClass(a.closest("tr"), n), a.prop({
                    checked: n,
                    indeterminate: t[g]
                })
            })), o = !(r = !0), 0 < (e = (e = "all" === a.data.cascade ? P.cache[n] : B.getData(n, !0)).filter(function (e) {
                return !e[u.disabledName]
            })).length ? layui.each(e, function (e, t) {
                if ((t[l] || t[g]) && (o = !0), t[l] || (r = !1), o && !r) return !0
            }) : r = !1, o = o && !r, i.find('input[name="layTableCheckbox"][lay-filter="layTableAllChoose"]').prop({
                checked: r,
                indeterminate: o
            }), r)
        }, a.prototype.updateParentCheckStatus = function (a, n) {
            var i, e = this.getOptions(),
                t = e.tree,
                e = e.id,
                l = P.config.checkName,
                t = t.customName.children,
                d = [];
            return !(a[g] = !1) === n ? a[t].length ? layui.each(a[t], function (e, t) {
                if (!t[l]) return n = !1, a[g] = !0
            }) : n = !1 : !1 === n ? layui.each(a[t], function (e, t) {
                if (t[l] || t[g]) return a[g] = !0
            }) : (n = !1, i = 0, layui.each(a[t], function (e, t) {
                t[l] && i++
            }), n = a[t].length ? a[t].length === i : a[l], a[g] = !n && 0 < i), a[l] = n, d.push(A.extend({}, a)), d = a[p] ? d.concat(this.updateParentCheckStatus(P.cache[e][a[p]], n)) : d
        }, function (e, t, a) {
            var n = this,
                i = n.getOptions(),
                l = i.tree,
                d = i.id,
                r = i.elem.next(),
                o = (e.length ? e : r).find(".laytable-cell-radio, .laytable-cell-checkbox").children("input").last(),
                i = "radio" === o.attr("type");
            if (a) {
                a = function () {
                    var e = function (e) {
                        layui.stope(e)
                    };
                    o.parent().on("click", e), o.next().click(), o.parent().off("click", e)
                };
                i ? t && !o.prop("checked") && a() : "boolean" === layui.type(t) && o.prop("checked") === t || a()
            } else {
                var c, a = n.getNodeDataByIndex(e.attr("data-index")),
                    u = P.config.checkName;
                if (!i) return t = "boolean" === layui.type(t) ? t : !a[u], i = n.updateStatus(a ? [a] : P.cache[d], function (e) {
                    e[P.config.disabledName] || (e[u] = t, e[g] = !1)
                }, a && -1 !== ["parent", "none"].indexOf(l.data.cascade)), d = r.find(i.map(function (e) {
                    return 'tr[lay-data-index="' + e[z] + '"] input[name="layTableCheckbox"]:not(:disabled)'
                }).join(",")), n.setRowCheckedClass(d.closest("tr"), t), d.prop({
                    checked: t,
                    indeterminate: !1
                }), a && a[p] && (c = n.getNodeDataByIndex(a[p])), n.updateCheckStatus(c, t);
                a && (n.updateStatus(null, function (e) {
                    var t;
                    e[u] && (t = r.find('tr[lay-data-index="' + e[z] + '"] input[type="radio"][lay-type="layTableRadio"]'), e[u] = !1, n.setRowCheckedClass(t.closest("tr"), !1), t.prop("checked", !1))
                }), a[u] = t, n.setRowCheckedClass(e, t), n.setRowCheckedClass(e.siblings(), !1), e.find('input[type="radio"][lay-type="layTableRadio"]').prop("checked", t))
            }
        });
    B.on("checkbox", function (e) {
        var t = e.config,
            a = t.elem.next(),
            t = t.id;
        a.hasClass(m) && (a = j(t), t = e.checked, o(e), e.isAll = u.call(a, e.tr, t))
    }), B.setRowChecked = function (a, e) {
        var t, n, i, l, d, r, o, c = j(a);
        c && (t = c.getOptions().elem.next(), i = (e = e || {}).index, n = e.checked, e = e.callbackFlag, i = "string" === layui.type(i) ? i : i[z], r = c.getNodeDataByIndex(i)) && (l = function (e) {
            o.push(e), t.find('tr[lay-data-index="' + e + '"]').length || (e = c.getNodeDataByIndex(e)[p]) && l(e)
        }, (d = t.find('tr[lay-data-index="' + i + '"]')).length || (r = r[p], o = [], l(r), layui.each(o.reverse(), function (e, t) {
            B.expandNode(a, {
                index: t,
                expandFlag: !0
            })
        }), d = t.find('tr[lay-data-index="' + i + '"]')), u.call(c, d, n, e))
    }, B.checkAllNodes = function (e, t) {
        var a, e = j(e);
        e && (a = e.getOptions().elem.next(), u.call(e, a.find('tr[data-index="NONE"]'), !!t))
    }, B.getData = function (e, t) {
        var a, n = j(e);
        if (n) return a = [], layui.each(A.extend(!0, [], P.cache[e] || []), function (e, t) {
            a.push(t)
        }), t ? n.treeToFlat(a) : a
    }, B.reloadAsyncNode = function (a, e) {
        var t, n, i = j(a);
        i && (t = i.getOptions().tree)["async"] && t["async"].enable && (n = i.getNodeDataByIndex(e)) && (n[X] = !1, n[H] = !1, n[V] = !1, layui.each(i.treeToFlat(n[t.customName.children]).reverse(), function (e, t) {
            B.removeNode(a, t[z], !0)
        }), B.expandNode(a, {
            index: e,
            expandFlag: !0,
            callbackFlag: !0
        }))
    }, B.getNodeById = function (e, t) {
        e = j(e);
        if (e) return e.getNodeById(t)
    }, B.getNodesByFilter = function (e, t, a) {
        var n, i, l, d = j(e);
        if (d) return i = d.getOptions(), n = (a = a || {}).isSingle, a = (a = a.parentNode) && a.data, i = d.treeToFlat(a ? a[i.tree.customName.children] || [] : P.cache[e]).filter(t), l = [], layui.each(i, function (e, t) {
            if (l.push(d.getNodeByIndex(t[z])), n) return !0
        }), l
    }, i.that = {}, B.reload = function (e, t, a, n) {
        e = j(e);
        if (e) return e.reload(t, a, n), i.call(e)
    }, B.render = function (e) {
        e = new a(e);
        return i.call(e)
    }, e("treeTable", B)
});
layui.define("component", function (e) {
    "use strict";
    var p = layui.$,
        C = layui.component({
            name: "tabs",
            config: {
                elem: ".layui-tabs",
                trigger: "click",
                headerMode: "auto"
            },
            CONST: {
                ELEM: "layui-tabs",
                HEADER: "layui-tabs-header",
                CLOSE: "layui-tabs-close",
                BODY: "layui-tabs-body",
                ITEM: "layui-tabs-item",
                CARD: "layui-tabs-card"
            },
            isRenderOnEvent: !1,
            render: function () {
                var a, i, n = this,
                    t = n.config;
                if (n.headerElem = ["." + C.CONST.HEADER + ":eq(0)", ">li"], n.bodyElem = ["." + C.CONST.BODY + ":eq(0)", ">." + C.CONST.ITEM], n.getContainer = function () {
                    var e = n.documentElem || t.elem;
                    return {
                        header: {
                            elem: e.find(n.headerElem[0]),
                            items: e.find(n.headerElem.join(""))
                        },
                        body: {
                            elem: e.find(n.bodyElem[0]),
                            items: e.find(n.bodyElem.join(""))
                        }
                    }
                }, "array" === layui.type(t.header)) {
                    if (0 === t.header.length) return;
                    "string" == typeof t.header[0] ? (n.headerElem = t.header.concat(), n.documentElem = p(document)) : (n.elemView = p('<div class="layui-tabs"></div>'), t.className && n.elemView.addClass(t.className), a = p('<ul class="layui-tabs-header"></ul>'), i = p('<div class="layui-tabs-body"></div>'), layui.each(t.header, function (e, t) {
                        t = n.renderHeaderItem(t);
                        a.append(t)
                    }), layui.each(t.body, function (e, t) {
                        t = n.renderBodyItem(t);
                        i.append(t)
                    }), n.elemView.append(a).append(i), t.elem.html(n.elemView))
                } else n.renderClose();
                "array" === layui.type(t.body) && "string" == typeof t.body[0] && (n.documentElem = p(document), n.bodyElem = t.body.concat());
                var e = n.data();
                "index" in t && e.index != t.index ? n.change(n.findHeaderItem(t.index), !0) : -1 === e.index && n.change(n.findHeaderItem(0), !0), n.roll("auto"), t.elem.hasClass(C.CONST.CLASS_HIDEV) && t.elem.removeClass(C.CONST.CLASS_HIDEV), "function" == typeof t.afterRender && t.afterRender(e), layui.event.call(t.elem[0], C.CONST.MOD_NAME, "afterRender(" + t.id + ")", e)
            },
            events: function () {
                var e, t = this,
                    a = t.config,
                    i = t.getContainer(),
                    n = C.CONST.MOD_NAME,
                    i = (t.documentElem ? i.header : a).elem,
                    a = a.trigger + (".lay_" + n + "_trigger"),
                    n = t.documentElem ? t.headerElem[1] : t.headerElem.join("");
                i.off(a).on(a, n, function () {
                    t.change(p(this))
                }), r.onresize || (p(window).on("resize", function () {
                    clearTimeout(e), e = setTimeout(function () {
                        layui.each(C.cache.id, function (e) {
                            e = C.getThis(e);
                            e && e.roll("init")
                        })
                    }, 50)
                }), r.onresize = !0)
            }
        }),
        r = {},
        t = C.Class;
    t.prototype.add = function (e) {
        var t, a, i = this,
            n = (i.config, i.getContainer()),
            r = i.renderHeaderItem(e),
            o = i.renderBodyItem(e),
            d = (/(before|after)/.test(e.mode) ? (a = i.data(), d = (t = e.hasOwnProperty("index")) ? i.findHeaderItem(e.index) : a.thisHeaderItem, t = t ? i.findBodyItem(e.index) : a.thisHeaderItem, d[e.mode](r), t[e.mode](o)) : (a = {
                prepend: "prepend",
                append: "append"
            } [e.mode || "append"] || "append", n.header.elem[a](r), n.body.elem[a](o)), i.change(r, !0), i.data());
        "function" == typeof e.done && e.done(d)
    }, t.prototype.close = function (e, t) {
        if (e && e[0]) {
            var a = this,
                i = a.config,
                n = e.index();
            if (e[0] && "false" !== e.attr("lay-closable")) {
                var r = a.data();
                if (!t)
                    if (!1 === layui.event.call(e[0], C.CONST.MOD_NAME, "beforeClose(" + i.id + ")", p.extend(r, {
                        index: e.index()
                    }))) return;
                e.hasClass(C.CONST.CLASS_THIS) && (e.next()[0] ? a.change(e.next(), !0) : e.prev()[0] && a.change(e.prev(), !0)), e.remove(), a.findBodyItem(n).remove(), a.roll("auto", n);
                r = a.data();
                layui.event.call(r.thisHeaderItem[0], C.CONST.MOD_NAME, "afterClose(" + i.id + ")", r)
            }
        }
    }, t.prototype.closeMult = function (e, t) {
        var a, i = this,
            n = i.config,
            r = i.getContainer(),
            o = i.data(),
            d = r.header.items,
            l = r.body.items,
            r = '[lay-closable="false"]',
            s = ":not(" + r + ")",
            r = (t = t === undefined ? o.index : t, d.each(function (e) {
                var t = p(this).attr("lay-closable");
                t && l.eq(e).attr("lay-closable", t)
            }), "false" !== o.thisHeaderItem.attr("lay-closable") && ("all" !== e && e ? t !== o.index && i.change(i.findHeaderItem(t), !0) : (a = d.filter(":gt(" + o.index + ")" + r).eq(0), o = p(d.filter(":lt(" + o.index + ")" + r).get().reverse()).eq(0), a[0] ? i.change(a, !0) : o[0] && i.change(o, !0))), ("other" === e ? (d.eq(t).siblings(s).remove(), l.eq(t).siblings(s)) : "right" === e ? (d.filter(":gt(" + t + ")" + s).remove(), l.filter(":gt(" + t + ")" + s)) : (d.filter(s).remove(), l.filter(s))).remove(), i.roll("auto"), i.data());
        layui.event.call(r.thisHeaderItem[0], C.CONST.MOD_NAME, "afterClose(" + n.id + ")", r)
    }, t.prototype.change = function (e, t) {
        if (e && e[0]) {
            var a = this,
                i = a.config,
                n = e.index(),
                r = e.find("a"),
                r = "string" == typeof r.attr("href") && "_blank" === r.attr("target"),
                o = "string" == typeof e.attr("lay-unselect");
            if (!r && !o) {
                r = a.data();
                if (!t)
                    if (!1 === layui.event.call(e[0], C.CONST.MOD_NAME, "beforeChange(" + i.id + ")", p.extend(r, {
                        from: {
                            index: r.index,
                            headerItem: r.thisHeaderItem
                        },
                        to: {
                            index: e.index(),
                            headerItem: e
                        }
                    }))) return;
                e.addClass(C.CONST.CLASS_THIS).siblings().removeClass(C.CONST.CLASS_THIS), a.findBodyItem(n).addClass(C.CONST.CLASS_SHOW).siblings().removeClass(C.CONST.CLASS_SHOW), a.roll("auto", n);
                r = a.data();
                layui.event.call(r.thisHeaderItem[0], C.CONST.MOD_NAME, "afterChange(" + i.id + ")", r)
            }
        }
    }, t.prototype.renderHeaderItem = function (e) {
        var t = this.config,
            a = p(e.headerItem || t.headerItem || "<li></li>");
        return a.html(e.title || "New Tab"), layui.each(e, function (e, t) {
            /^(title|content|mode|done)$/.test(e) || a.attr("lay-" + e, t)
        }), this.appendClose(a, e), a
    }, t.prototype.renderBodyItem = function (e) {
        var t = this.config,
            t = p(e.bodyItem || t.bodyItem || '<div class="' + C.CONST.ITEM + '"></div>');
        return t.html(e.content || ""), t
    }, t.prototype.appendClose = function (e, t) {
        var a = this;
        a.config.closable && "false" !== (t = t || {}).closable && "false" !== e.attr("lay-closable") && !e.find("." + C.CONST.CLOSE)[0] && ((t = p('<i class="layui-icon layui-icon-close layui-unselect ' + C.CONST.CLOSE + '"></i>')).on("click", function () {
            return a.close(p(this).parent()), !1
        }), e.append(t))
    }, t.prototype.renderClose = function () {
        var e = this,
            t = e.config,
            a = e.getContainer();
        t.closable ? a.header.items.each(function () {
            e.appendClose(p(this))
        }) : a.header.items.each(function () {
            p(this).find("." + C.CONST.CLOSE).remove()
        })
    }, t.prototype.roll = function (e, i) {
        var n = this,
            t = n.config,
            a = n.getContainer(),
            r = a.header.elem,
            o = a.header.items,
            a = r.prop("scrollWidth"),
            d = Math.ceil(r.outerWidth()),
            l = r.data("left") || 0,
            s = "scroll" === t.headerMode,
            c = "layui-tabs-scroll",
            f = "layui-tabs-bar",
            u = ["layui-icon-prev", "layui-icon-next"],
            h = {
                elem: p('<div class="' + c + ' layui-unselect"></div>'),
                bar: p(['<div class="' + f + '">', '<i class="layui-icon ' + u[0] + '" lay-mode="prev"></i>', '<i class="layui-icon ' + u[1] + '" lay-mode="next"></i>', "</div>"].join(""))
            };
        if ("normal" !== t.headerMode) {
            var m, y = r.parent("." + c);
            if (s || !s && d < a) y[0] || (t.elem.hasClass(C.CONST.CARD) && h.elem.addClass(C.CONST.CARD), r.wrap(h.elem), r.after(h.bar), h.bar.children().on("click", function () {
                var e = p(this).attr("lay-mode");
                p(this).hasClass(C.CONST.CLASS_DISABLED) || e && n.roll(e)
            }));
            else if (!s) {
                if (!y[0]) return;
                y.find("." + f).remove(), r.unwrap().css("left", 0).data("left", 0)
            }
            "init" !== e && (a = r.prop("scrollWidth"), d = r.outerWidth(), y = r.parent("." + c), "prev" === e ? ((m = -l - d) < 0 && (m = 0), o.each(function (e, t) {
                t = p(t), t = Math.ceil(t.position().left);
                if (m <= t) return r.css("left", -t).data("left", -t), !1
            })) : "auto" === e ? function () {
                i = isNaN(i) ? n.data().index : i;
                var e = o.eq(i);
                if (e[0]) {
                    var t = Math.ceil(e.position().left);
                    if (0 < (a = t - (e.prev().outerWidth() || 0)) && (a -= 1), l + a < 0) return l = 0 <= a ? a : 0, r.css("left", -l).data("left", -l);
                    var a = t + e.outerWidth() + (e.next().outerWidth() || 0) + 1;
                    0 < l + a - d && (l = a - d, r.css("left", -l).data("left", -l))
                }
            }() : o.each(function (e, t) {
                var t = p(t),
                    a = Math.ceil(t.position().left);
                if (a + t.outerWidth() >= d - l) return r.css("left", -a).data("left", -a), !1
            }), l = r.data("left") || 0, y.find("." + u[0])[l < 0 ? "removeClass" : "addClass"](C.CONST.CLASS_DISABLED), y.find("." + u[1])[0 < parseFloat(l + a) - d ? "removeClass" : "addClass"](C.CONST.CLASS_DISABLED))
        }
    }, t.prototype.findHeaderItem = function (e) {
        var t, a;
        if ("number" == typeof e || "string" == typeof e && e) return (a = (t = this.getContainer().header.items).filter('[lay-id="' + e + '"]'))[0] ? a : t.eq(e)
    }, t.prototype.findBodyItem = function (e) {
        return this.getContainer().body.items.eq(e)
    }, t.prototype.data = function () {
        var e = this.config,
            t = this.getContainer(),
            a = t.header.items.filter("." + C.CONST.CLASS_THIS),
            i = a.index();
        return {
            options: e,
            container: t,
            thisHeaderItem: a,
            thisBodyItem: this.findBodyItem(i),
            index: i,
            length: t.header.items.length
        }
    }, p.extend(C, {
        add: function (e, t) {
            e = C.getThis(e);
            e && e.add(t)
        },
        close: function (e, t, a) {
            e = C.getThis(e);
            e && (t === undefined && (t = e.data().index), e.close(e.findHeaderItem(t), a))
        },
        closeMult: function (e, t, a, i) {
            e = C.getThis(e);
            e && e.closeMult(t, a, i)
        },
        change: function (e, t, a) {
            e = C.getThis(e);
            e && e.change(e.findHeaderItem(t), a)
        },
        data: function (e) {
            e = C.getThis(e);
            return e ? e.data() : {}
        },
        getHeaderItem: function (e, t) {
            e = C.getThis(e);
            if (e) return e.findHeaderItem(t)
        },
        getBodyItem: function (e, t) {
            e = C.getThis(e);
            if (e) return e.findBodyItem(t)
        },
        refresh: function (e) {
            e = C.getThis(e);
            e && e.roll("auto")
        }
    }), p(function () {
        C.render()
    }), e(C.CONST.MOD_NAME, C)
});
layui.define(["form", "util"], function (e) {
    "use strict";
    var p = layui.$,
        i = layui.form,
        y = layui.layer,
        f = layui.util,
        a = "tree",
        t = {
            config: {
                customName: {
                    id: "id",
                    title: "title",
                    children: "children"
                }
            },
            index: layui[a] ? layui[a].index + 1e4 : 0,
            set: function (e) {
                var i = this;
                return i.config = p.extend({}, i.config, e), i
            },
            on: function (e, i) {
                return layui.onevent.call(this, a, e, i)
            }
        },
        n = function () {
            var i = this,
                e = i.config,
                a = e.id || i.index;
            return n.that[a] = i, {
                config: n.config[a] = e,
                reload: function (e) {
                    i.reload.call(i, e)
                },
                getChecked: function () {
                    return i.getChecked.call(i)
                },
                setChecked: function (e) {
                    return i.setChecked.call(i, e)
                }
            }
        },
        m = "layui-hide",
        u = "layui-disabled",
        k = "layui-tree-set",
        C = "layui-tree-iconClick",
        v = "layui-icon-addition",
        x = "layui-icon-subtraction",
        b = "layui-tree-entry",
        g = "layui-tree-main",
        w = "layui-tree-txt",
        N = "layui-tree-pack",
        F = "layui-tree-spread",
        T = "layui-tree-setLineShort",
        L = "layui-tree-showLine",
        S = "layui-tree-lineExtend",
        l = function (e) {
            var i = this;
            i.index = ++t.index, i.config = p.extend({}, i.config, t.config, e), i.render()
        };
    l.prototype.config = {
        data: [],
        showCheckbox: !1,
        showLine: !0,
        accordion: !1,
        onlyIconControl: !1,
        isJump: !1,
        edit: !1,
        text: {
            defaultNodeName: "\u672a\u547d\u540d",
            none: "\u65e0\u6570\u636e"
        }
    }, l.prototype.reload = function (e) {
        var a = this;
        layui.each(e, function (e, i) {
            "array" === layui.type(i) && delete a.config[e]
        }), a.config = p.extend(!0, {}, a.config, e), a.render()
    }, l.prototype.render = function () {
        var e = this,
            i = e.config,
            a = (i.customName = p.extend({}, t.config.customName, i.customName), e.checkids = [], p('<div class="layui-tree layui-border-box' + (i.showCheckbox ? " layui-form" : "") + (i.showLine ? " layui-tree-line" : "") + '" lay-filter="LAY-tree-' + e.index + '"></div>')),
            n = (e.tree(a), i.elem = p(i.elem));
        if (n[0]) {
            if (e.key = i.id || e.index, e.elem = a, e.elemNone = p('<div class="layui-tree-emptyText">' + i.text.none + "</div>"), n.html(e.elem), 0 == e.elem.find(".layui-tree-set").length) return e.elem.append(e.elemNone);
            i.showCheckbox && e.renderForm("checkbox"), e.elem.find(".layui-tree-set").each(function () {
                var e = p(this);
                e.parent(".layui-tree-pack")[0] || e.addClass("layui-tree-setHide"), !e.next()[0] && e.parents(".layui-tree-pack").eq(1).hasClass("layui-tree-lineExtend") && e.addClass(T), e.next()[0] || e.parents(".layui-tree-set").eq(0).next()[0] || e.addClass(T)
            }), e.events()
        }
    }, l.prototype.renderForm = function (e) {
        i.render(e, "LAY-tree-" + this.index)
    }, l.prototype.tree = function (r, e) {
        var d = this,
            s = d.config,
            o = s.customName,
            e = e || s.data;
        layui.each(e, function (e, i) {
            var a, n, t = i[o.children] && 0 < i[o.children].length,
                l = p('<div class="layui-tree-pack" ' + (i.spread ? 'style="display: block;"' : "") + "></div>"),
                c = p(['<div data-id="' + i[o.id] + '" class="layui-tree-set' + (i.spread ? " layui-tree-spread" : "") + (i.checked ? " layui-tree-checkedFirst" : "") + '">', '<div class="layui-tree-entry">', '<div class="layui-tree-main">', s.showLine ? t ? '<span class="layui-tree-iconClick layui-tree-icon"><i class="layui-icon ' + (i.spread ? "layui-icon-subtraction" : "layui-icon-addition") + '"></i></span>' : '<span class="layui-tree-iconClick"><i class="layui-icon layui-icon-file"></i></span>' : '<span class="layui-tree-iconClick"><i class="layui-tree-iconArrow ' + (t ? "" : m) + '"></i></span>', s.showCheckbox ? '<input type="checkbox" name="' + (i.field || "layuiTreeCheck_" + i[o.id]) + '" same="layuiTreeCheck" lay-skin="primary" ' + (i.disabled ? "disabled" : "") + ' value="' + i[o.id] + '">' : "", s.isJump && i.href ? '<a href="' + i.href + '" target="_blank" class="' + w + '">' + (i[o.title] || i.label || s.text.defaultNodeName) + "</a>" : '<span class="' + w + (i.disabled ? " " + u : "") + '">' + (i[o.title] || i.label || s.text.defaultNodeName) + "</span>", "</div>", s.edit ? (a = {
                    add: '<i class="layui-icon layui-icon-add-1"  data-type="add"></i>',
                    update: '<i class="layui-icon layui-icon-edit" data-type="update"></i>',
                    del: '<i class="layui-icon layui-icon-delete" data-type="del"></i>'
                }, n = ['<div class="layui-btn-group layui-tree-btnGroup">'], !0 === s.edit && (s.edit = ["update", "del"]), "object" == typeof s.edit ? (layui.each(s.edit, function (e, i) {
                    n.push(a[i] || "")
                }), n.join("") + "</div>") : void 0) : "", "</div></div>"].join(""));
            t && (c.append(l), d.tree(l, i[o.children])), r.append(c), c.prev("." + k)[0] && c.prev().children(".layui-tree-pack").addClass("layui-tree-showLine"), t || c.parent(".layui-tree-pack").addClass("layui-tree-lineExtend"), d.spread(c, i), s.showCheckbox && (i.checked && d.checkids.push(i[o.id]), d.checkClick(c, i)), s.edit && d.operate(c, i)
        })
    }, l.prototype.spread = function (n, t) {
        var l = this,
            c = l.config,
            e = n.children("." + b),
            i = e.children("." + g),
            a = i.find('input[same="layuiTreeCheck"]'),
            r = e.find("." + C),
            e = e.find("." + w),
            d = c.onlyIconControl ? r : i,
            s = "";
        d.on("click", function (e) {
            var i = n.children("." + N),
                a = (d.children(".layui-icon")[0] ? d : d.find(".layui-tree-icon")).children(".layui-icon");
            i[0] ? n.hasClass(F) ? (n.removeClass(F), i.slideUp(200), a.removeClass(x).addClass(v), l.updateFieldValue(t, "spread", !1)) : (n.addClass(F), i.slideDown(200), a.addClass(x).removeClass(v), l.updateFieldValue(t, "spread", !0), c.accordion && ((i = n.siblings("." + k)).removeClass(F), i.children("." + N).slideUp(200), i.find(".layui-tree-icon").children(".layui-icon").removeClass(x).addClass(v))) : s = "normal"
        }), e.on("click", function () {
            p(this).hasClass(u) || (s = n.hasClass(F) ? c.onlyIconControl ? "open" : "close" : c.onlyIconControl ? "close" : "open", a[0] && l.updateFieldValue(t, "checked", a.prop("checked")), c.click && c.click({
                elem: n,
                state: s,
                data: t
            }))
        })
    }, l.prototype.updateFieldValue = function (e, i, a) {
        i in e && (e[i] = a)
    }, l.prototype.setCheckbox = function (e, i, a) {
        var t, n = this,
            l = n.config.customName,
            c = a.prop("checked");
        a.prop("disabled") || ("object" != typeof i[l.children] && !e.find("." + N)[0] || e.find("." + N).find('input[same="layuiTreeCheck"]').each(function (e) {
            this.disabled || ((e = i[l.children][e]) && n.updateFieldValue(e, "checked", c), n.updateFieldValue(this, "checked", c))
        }), (t = function (e) {
            var i, a, n;
            e.parents("." + k)[0] && (a = (e = e.parent("." + N)).parent(), n = e.prev().find('input[same="layuiTreeCheck"]'), c ? n.prop("checked", c) : (e.find('input[same="layuiTreeCheck"]').each(function () {
                this.checked && (i = !0)
            }), i || n.prop("checked", !1)), t(a))
        })(e), n.renderForm("checkbox"))
    }, l.prototype.checkClick = function (a, n) {
        var t = this,
            l = t.config;
        a.children("." + b).children("." + g).on("click", 'input[same="layuiTreeCheck"]+', function (e) {
            layui.stope(e);
            var e = p(this).prev(),
                i = e.prop("checked");
            e.prop("disabled") || (t.setCheckbox(a, n, e), t.updateFieldValue(n, "checked", i), l.oncheck && l.oncheck({
                elem: a,
                checked: i,
                data: n
            }))
        })
    }, l.prototype.operate = function (r, d) {
        var s = this,
            o = s.config,
            u = o.customName,
            e = r.children("." + b),
            h = e.children("." + g);
        e.children(".layui-tree-btnGroup").on("click", ".layui-icon", function (e) {
            layui.stope(e);
            var i, e = p(this).data("type"),
                n = r.children("." + N),
                t = {
                    data: d,
                    type: e,
                    elem: r
                };
            if ("add" == e) {
                n[0] || (o.showLine ? (h.find("." + C).addClass("layui-tree-icon"), h.find("." + C).children(".layui-icon").addClass(v).removeClass("layui-icon-file")) : h.find(".layui-tree-iconArrow").removeClass(m), r.append('<div class="layui-tree-pack"></div>'));
                var a, l = o.operate && o.operate(t),
                    c = {};
                if (c[u.title] = o.text.defaultNodeName, c[u.id] = l, s.tree(r.children("." + N), [c]), o.showLine && (n[0] ? (n.hasClass(S) || n.addClass(S), r.find("." + N).each(function () {
                    p(this).children("." + k).last().addClass(T)
                }), (n.children("." + k).last().prev().hasClass(T) ? n.children("." + k).last().prev() : n.children("." + k).last()).removeClass(T), !r.parent("." + N)[0] && r.next()[0] && n.children("." + k).last().removeClass(T)) : (l = r.siblings("." + k), a = 1, c = r.parent("." + N), layui.each(l, function (e, i) {
                    p(i).children("." + N)[0] || (a = 0)
                }), (1 == a ? (l.children("." + N).addClass(L), l.children("." + N).children("." + k).removeClass(T), r.children("." + N).addClass(L), c.removeClass(S), c.children("." + k).last().children("." + N).children("." + k).last()) : r.children("." + N).children("." + k)).addClass(T))), !o.showCheckbox) return;
                h.find('input[same="layuiTreeCheck"]')[0].checked && (r.children("." + N).children("." + k).last().find('input[same="layuiTreeCheck"]')[0].checked = !0), s.renderForm("checkbox")
            } else "update" == e ? (l = h.children("." + w).html(), h.children("." + w).html(""), h.append('<input type="text" class="layui-tree-editInput">'), h.children(".layui-tree-editInput").val(f.unescape(l)).focus(), i = function (e) {
                var i = f.escape(e.val().trim()) || o.text.defaultNodeName;
                e.remove(), h.children("." + w).html(i), t.data[u.title] = i, o.operate && o.operate(t)
            }, h.children(".layui-tree-editInput").blur(function () {
                i(p(this))
            }), h.children(".layui-tree-editInput").on("keydown", function (e) {
                13 === e.keyCode && (e.preventDefault(), i(p(this)))
            })) : y.confirm('\u786e\u8ba4\u5220\u9664\u8be5\u8282\u70b9 "<span style="color: #999;">' + (d[u.title] || "") + '</span>" \u5417\uff1f', function (e) {
                var l, a, i;
                o.operate && o.operate(t), t.status = "remove", y.close(e), r.prev("." + k)[0] || r.next("." + k)[0] || r.parent("." + N)[0] ? (r.siblings("." + k).children("." + b)[0] ? (o.showCheckbox && (l = function (e) {
                    var i, a, n, t;
                    e.parents("." + k)[0] && (i = e.siblings("." + k).children("." + b), a = (e = e.parent("." + N).prev()).find('input[same="layuiTreeCheck"]')[0], n = 1, (t = 0) == a.checked) && (i.each(function (e, i) {
                        i = p(i).find('input[same="layuiTreeCheck"]')[0];
                        0 != i.checked || i.disabled || (n = 0), i.disabled || (t = 1)
                    }), 1 == n) && 1 == t && (a.checked = !0, s.renderForm("checkbox"), l(e.parent("." + k)))
                })(r), o.showLine && (e = r.siblings("." + k), a = 1, i = r.parent("." + N), layui.each(e, function (e, i) {
                    p(i).children("." + N)[0] || (a = 0)
                }), 1 == a ? (n[0] || (i.removeClass(S), e.children("." + N).addClass(L), e.children("." + N).children("." + k).removeClass(T)), (r.next()[0] ? i.children("." + k).last() : r.prev()).children("." + N).children("." + k).last().addClass(T), r.next()[0] || r.parents("." + k)[1] || r.parents("." + k).eq(0).next()[0] || r.prev("." + k).addClass(T)) : !r.next()[0] && r.hasClass(T) && r.prev().addClass(T))) : (e = r.parent("." + N).prev(), o.showLine ? (e.find("." + C).removeClass("layui-tree-icon"), e.find("." + C).children(".layui-icon").removeClass(x).addClass("layui-icon-file"), (i = e.parents("." + N).eq(0)).addClass(S), i.children("." + k).each(function () {
                    p(this).children("." + N).children("." + k).last().addClass(T)
                })) : e.find(".layui-tree-iconArrow").addClass(m), r.parents("." + k).eq(0).removeClass(F), r.parent("." + N).remove()), r.remove()) : (r.remove(), s.elem.append(s.elemNone))
            })
        })
    }, l.prototype.events = function () {
        var i = this,
            t = i.config;
        i.elem.find(".layui-tree-checkedFirst");
        i.setChecked(i.checkids), i.elem.find(".layui-tree-search").on("keyup", function () {
            var e = p(this),
                a = e.val(),
                e = e.nextAll(),
                n = [];
            e.find("." + w).each(function () {
                var i, e = p(this).parents("." + b); - 1 != p(this).html().indexOf(a) && (n.push(p(this).parent()), (i = function (e) {
                    e.addClass("layui-tree-searchShow"), e.parent("." + N)[0] && i(e.parent("." + N).parent("." + k))
                })(e.parent("." + k)))
            }), e.find("." + b).each(function () {
                var e = p(this).parent("." + k);
                e.hasClass("layui-tree-searchShow") || e.addClass(m)
            }), 0 == e.find(".layui-tree-searchShow").length && i.elem.append(i.elemNone), t.onsearch && t.onsearch({
                elem: n
            })
        }), i.elem.find(".layui-tree-search").on("keydown", function () {
            p(this).nextAll().find("." + b).each(function () {
                p(this).parent("." + k).removeClass("layui-tree-searchShow " + m)
            }), p(".layui-tree-emptyText")[0] && p(".layui-tree-emptyText").remove()
        })
    }, l.prototype.getChecked = function () {
        var t = this,
            e = t.config,
            l = e.customName,
            i = [],
            a = [],
            c = (t.elem.find(".layui-form-checked").each(function () {
                i.push(p(this).prev()[0].value)
            }), function (e, n) {
                layui.each(e, function (e, a) {
                    layui.each(i, function (e, i) {
                        if (a[l.id] == i) return t.updateFieldValue(a, "checked", !0), delete(i = p.extend({}, a))[l.children], n.push(i), a[l.children] && (i[l.children] = [], c(a[l.children], i[l.children])), !0
                    })
                })
            });
        return c(p.extend({}, e.data), a), a
    }, l.prototype.setChecked = function (l) {
        this.config;
        this.elem.find("." + k).each(function (e, i) {
            var a = p(this).data("id"),
                n = p(i).children("." + b).find('input[same="layuiTreeCheck"]'),
                t = n.next();
            if ("number" == typeof l) {
                if (a.toString() == l.toString()) return n[0].checked || t.click(), !1
            } else "object" == typeof l && layui.each(l, function (e, i) {
                if (i.toString() == a.toString() && !n[0].checked) return t.click(), !0
            })
        })
    }, n.that = {}, n.config = {}, t.reload = function (e, i) {
        e = n.that[e];
        return e.reload(i), n.call(e)
    }, t.getChecked = function (e) {
        return n.that[e].getChecked()
    }, t.setChecked = function (e, i) {
        return n.that[e].setChecked(i)
    }, t.render = function (e) {
        e = new l(e);
        return n.call(e)
    }, e(a, t)
});
layui.define(["laytpl", "form"], function (e) {
    "use strict";
    var d = layui.$,
        n = layui.laytpl,
        t = layui.form,
        a = "transfer",
        i = {
            config: {},
            index: layui[a] ? layui[a].index + 1e4 : 0,
            set: function (e) {
                var t = this;
                return t.config = d.extend({}, t.config, e), t
            },
            on: function (e, t) {
                return layui.onevent.call(this, a, e, t)
            }
        },
        l = function () {
            var t = this,
                e = t.config,
                a = e.id || t.index;
            return l.that[a] = t, {
                config: l.config[a] = e,
                reload: function (e) {
                    t.reload.call(t, e)
                },
                getData: function () {
                    return t.getData.call(t)
                }
            }
        },
        s = "layui-hide",
        u = "layui-btn-disabled",
        c = "layui-none",
        r = "layui-transfer-box",
        h = "layui-transfer-header",
        o = "layui-transfer-search",
        f = "layui-transfer-data",
        y = function (e) {
            return ['<div class="layui-transfer-box" data-index="' + (e = e || {}).index + '">', '<div class="layui-transfer-header">', '<input type="checkbox" name="' + e.checkAllName + '" lay-filter="layTransferCheckbox" lay-type="all" lay-skin="primary" title="{{= d.data.title[' + e.index + "] || 'list" + (e.index + 1) + "' }}\">", "</div>", "{{# if(d.data.showSearch){ }}", '<div class="layui-transfer-search">', '<i class="layui-icon layui-icon-search"></i>', '<input type="text" class="layui-input" placeholder="\u5173\u952e\u8bcd\u641c\u7d22">', "</div>", "{{# } }}", '<ul class="layui-transfer-data"></ul>', "</div>"].join("")
        },
        p = ['<div class="layui-transfer layui-form layui-border-box" lay-filter="LAY-transfer-{{= d.index }}">', y({
            index: 0,
            checkAllName: "layTransferLeftCheckAll"
        }), '<div class="layui-transfer-active">', '<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="0">', '<i class="layui-icon layui-icon-next"></i>', "</button>", '<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="1">', '<i class="layui-icon layui-icon-prev"></i>', "</button>", "</div>", y({
            index: 1,
            checkAllName: "layTransferRightCheckAll"
        }), "</div>"].join(""),
        v = function (e) {
            var t = this;
            t.index = ++i.index, t.config = d.extend({}, t.config, i.config, e), t.render()
        };
    v.prototype.config = {
        title: ["\u5217\u8868\u4e00", "\u5217\u8868\u4e8c"],
        width: 200,
        height: 360,
        data: [],
        value: [],
        showSearch: !1,
        id: "",
        text: {
            none: "\u65e0\u6570\u636e",
            searchNone: "\u65e0\u5339\u914d\u6570\u636e"
        }
    }, v.prototype.reload = function (e) {
        var t = this;
        t.config = d.extend({}, t.config, e), t.render()
    }, v.prototype.render = function () {
        var e = this,
            t = e.config,
            a = e.elem = d(n(p, {
                open: "{{",
                close: "}}"
            }).render({
                data: t,
                index: e.index
            })),
            i = t.elem = d(t.elem);
        i[0] && (t.data = t.data || [], t.value = t.value || [], t.id = "id" in t ? t.id : elem.attr("id") || e.index, e.key = t.id, i.html(e.elem), e.layBox = e.elem.find("." + r), e.layHeader = e.elem.find("." + h), e.laySearch = e.elem.find("." + o), e.layData = a.find("." + f), e.layBtn = a.find(".layui-transfer-active .layui-btn"), e.layBox.css({
            width: t.width,
            height: t.height
        }), e.layData.css({
            height: (i = t.height - e.layHeader.outerHeight(), t.showSearch && (i -= e.laySearch.outerHeight()), i - 2)
        }), e.renderData(), e.events())
    }, v.prototype.renderData = function () {
        var e = this,
            t = e.config,
            l = [{
                checkName: "layTransferLeftCheck",
                views: []
            }, {
                checkName: "layTransferRightCheck",
                views: []
            }];
        e.parseData(function (a) {
            var i = a.selected ? 1 : 0,
                n = ["<li>", '<input type="checkbox" name="' + l[i].checkName + '" lay-skin="primary" lay-filter="layTransferCheckbox" title="' + a.title + '"' + (a.disabled ? " disabled" : "") + (a.checked ? " checked" : "") + ' value="' + a.value + '">', "</li>"].join("");
            i ? layui.each(t.value, function (e, t) {
                t == a.value && a.selected && (l[i].views[e] = n)
            }) : l[i].views.push(n), delete a.selected
        }), e.layData.eq(0).html(l[0].views.join("")), e.layData.eq(1).html(l[1].views.join("")), e.renderCheckBtn()
    }, v.prototype.renderForm = function (e) {
        t.render(e, "LAY-transfer-" + this.index)
    }, v.prototype.renderCheckBtn = function (c) {
        var r = this,
            o = r.config;
        c = c || {}, r.layBox.each(function (e) {
            var t = d(this),
                a = t.find("." + f),
                t = t.find("." + h).find('input[type="checkbox"]'),
                i = a.find('input[type="checkbox"]'),
                n = 0,
                l = !1;
            i.each(function () {
                var e = d(this).data("hide");
                (this.checked || this.disabled || e) && n++, this.checked && !e && (l = !0)
            }), t.prop("checked", l && n === i.length), r.layBtn.eq(e)[l ? "removeClass" : "addClass"](u), c.stopNone || (i = a.children("li:not(." + s + ")").length, r.noneView(a, i ? "" : o.text.none))
        }), r.renderForm("checkbox")
    }, v.prototype.noneView = function (e, t) {
        var a = d('<p class="layui-none">' + (t || "") + "</p>");
        e.find("." + c)[0] && e.find("." + c).remove(), t.replace(/\s/g, "") && e.append(a)
    }, v.prototype.setValue = function () {
        var e = this.config,
            t = [];
        return this.layBox.eq(1).find("." + f + ' input[type="checkbox"]').each(function () {
            d(this).data("hide") || t.push(this.value)
        }), e.value = t, this
    }, v.prototype.parseData = function (t) {
        var i = this.config,
            n = [];
        return layui.each(i.data, function (e, a) {
            a = ("function" == typeof i.parseData ? i.parseData(a) : a) || a, n.push(a = d.extend({}, a)), layui.each(i.value, function (e, t) {
                t == a.value && (a.selected = !0)
            }), t && t(a)
        }), i.data = n, this
    }, v.prototype.getData = function (e) {
        var t = this.config,
            i = [];
        return this.setValue(), layui.each(e || t.value, function (e, a) {
            layui.each(t.data, function (e, t) {
                delete t.selected, a == t.value && i.push(t)
            })
        }), i
    }, v.prototype.transfer = function (e, t) {
        var a, i = this,
            n = i.config,
            l = i.layBox.eq(e),
            c = [],
            t = (t ? ((a = (t = t).find('input[type="checkbox"]'))[0].checked = !1, l.siblings("." + r).find("." + f).append(t.clone()), t.remove(), c.push(a[0].value), i.setValue()) : l.each(function (e) {
                d(this).find("." + f).children("li").each(function () {
                    var e = d(this),
                        t = e.find('input[type="checkbox"]'),
                        a = t.data("hide");
                    t[0].checked && !a && (t[0].checked = !1, l.siblings("." + r).find("." + f).append(e.clone()), e.remove(), c.push(t[0].value)), i.setValue()
                })
            }), i.renderCheckBtn(), l.siblings("." + r).find("." + o + " input"));
        "" !== t.val() && t.trigger("keyup"), n.onchange && n.onchange(i.getData(c), e)
    }, v.prototype.events = function () {
        var n = this,
            l = n.config;
        n.elem.on("click", 'input[lay-filter="layTransferCheckbox"]+', function () {
            var e = d(this).prev(),
                t = e[0].checked,
                a = e.parents("." + r).eq(0).find("." + f);
            e[0].disabled || ("all" === e.attr("lay-type") && a.find('input[type="checkbox"]').each(function () {
                this.disabled || (this.checked = t)
            }), setTimeout(function () {
                n.renderCheckBtn({
                    stopNone: !0
                })
            }, 0))
        }), n.elem.on("dblclick", "." + f + ">li", function (e) {
            var t = d(this),
                a = t.children('input[type="checkbox"]'),
                i = t.parent().parent().data("index");
            a[0].disabled || !1 !== ("function" == typeof l.dblclick ? l.dblclick({
                elem: t,
                data: n.getData([a[0].value])[0],
                index: i
            }) : null) && n.transfer(i, t)
        }), n.layBtn.on("click", function () {
            var e = d(this),
                t = e.data("index");
            e.hasClass(u) || n.transfer(t)
        }), n.laySearch.find("input").on("keyup", function () {
            var i = this.value,
                e = d(this).parents("." + o).eq(0).siblings("." + f),
                t = e.children("li"),
                t = (t.each(function () {
                    var e = d(this),
                        t = e.find('input[type="checkbox"]'),
                        a = t[0].title,
                        a = ("cs" !== l.showSearch && (a = a.toLowerCase(), i = i.toLowerCase()), -1 !== a.indexOf(i));
                    e[a ? "removeClass" : "addClass"](s), t.data("hide", !a)
                }), n.renderCheckBtn(), t.length === e.children("li." + s).length);
            n.noneView(e, t ? l.text.searchNone : "")
        })
    }, l.that = {}, l.config = {}, i.reload = function (e, t) {
        e = l.that[e];
        return e.reload(t), l.call(e)
    }, i.getData = function (e) {
        return l.that[e].getData()
    }, i.render = function (e) {
        e = new v(e);
        return l.call(e)
    }, e(a, i)
});
layui.define(["jquery", "lay"], function (e) {
    "use strict";
    var o = layui.$,
        l = layui.lay,
        t = (layui.hint(), layui.device(), {
            config: {},
            set: function (e) {
                var n = this;
                return n.config = o.extend({}, n.config, e), n
            },
            on: function (e, n) {
                return layui.onevent.call(this, r, e, n)
            }
        }),
        r = "carousel",
        s = "layui-this",
        u = "layui-carousel-left",
        c = "layui-carousel-right",
        m = "layui-carousel-prev",
        h = "layui-carousel-next",
        a = "layui-carousel-arrow",
        d = "layui-carousel-ind",
        n = function (e) {
            var n = this;
            n.config = o.extend({}, n.config, t.config, e), n.render()
        };
    n.prototype.config = {
        width: "600px",
        height: "280px",
        full: !1,
        arrow: "hover",
        indicator: "inside",
        autoplay: !0,
        interval: 3e3,
        anim: "",
        trigger: "click",
        index: 0
    }, n.prototype.render = function () {
        var e = this,
            n = e.config,
            i = o(n.elem);
        if (1 < i.length) return layui.each(i, function () {
            t.render(o.extend({}, n, {
                elem: this
            }))
        }), e;
        o.extend(n, l.options(i[0])), n.elem = o(n.elem), n.elem[0] && (e.elemItem = n.elem.find(">*[carousel-item]>*"), n.index < 0 && (n.index = 0), n.index >= e.elemItem.length && (n.index = e.elemItem.length - 1), n.interval < 800 && (n.interval = 800), n.full ? n.elem.css({
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: 9999
        }) : n.elem.css({
            width: n.width,
            height: n.height
        }), n.elem.attr("lay-anim", n.anim), e.elemItem.eq(n.index).addClass(s), e.indicator(), e.arrow(), e.autoplay(), 1 < e.elemItem.length) && e.events()
    }, n.prototype.reload = function (e) {
        var n = this;
        clearInterval(n.timer), n.config = o.extend({}, n.config, e), n.render()
    }, n.prototype.prevIndex = function () {
        var e = this.config.index - 1;
        return e = e < 0 ? this.elemItem.length - 1 : e
    }, n.prototype.nextIndex = function () {
        var e = this.config.index + 1;
        return e = e >= this.elemItem.length ? 0 : e
    }, n.prototype.addIndex = function (e) {
        var n = this.config;
        n.index = n.index + (e = e || 1), n.index >= this.elemItem.length && (n.index = 0)
    }, n.prototype.subIndex = function (e) {
        var n = this.config;
        n.index = n.index - (e = e || 1), n.index < 0 && (n.index = this.elemItem.length - 1)
    }, n.prototype.autoplay = function () {
        var e = this,
            n = e.config,
            i = e.elemItem.length;
        n.autoplay && (clearInterval(e.timer), 1 < i) && (e.timer = setInterval(function () {
            e.slide()
        }, n.interval))
    }, n.prototype.arrow = function () {
        var n = this,
            e = n.config,
            i = n.elemItem.length,
            t = o(['<button type="button" class="layui-icon ' + ("updown" === e.anim ? "layui-icon-up" : "layui-icon-left") + " " + a + '" lay-type="sub"></button>', '<button type="button" class="layui-icon ' + ("updown" === e.anim ? "layui-icon-down" : "layui-icon-right") + " " + a + '" lay-type="add"></button>'].join(""));
        e.elem.attr("lay-arrow", e.arrow), e.elem.find("." + a)[0] && e.elem.find("." + a).remove(), 1 < i ? e.elem.append(t) : t.remove(), t.on("click", function () {
            var e = o(this).attr("lay-type");
            n.slide(e)
        })
    }, n.prototype["goto"] = function (e) {
        var n = this,
            i = n.config;
        e > i.index ? n.slide("add", e - i.index) : e < i.index && n.slide("sub", i.index - e)
    }, n.prototype.indicator = function () {
        var n, e = this,
            i = e.config,
            t = e.elemItem.length,
            a = e.elemInd = o(['<div class="' + d + '"><ul>', (n = [], layui.each(e.elemItem, function (e) {
                n.push("<li" + (i.index === e ? ' class="layui-this"' : "") + "></li>")
            }), n.join("")), "</ul></div>"].join(""));
        i.elem.attr("lay-indicator", i.indicator), i.elem.find("." + d)[0] && i.elem.find("." + d).remove(), 1 < t ? i.elem.append(a) : a.remove(), "updown" === i.anim && a.css("margin-top", -a.height() / 2), a.find("li").on("hover" === i.trigger ? "mouseover" : i.trigger, function () {
            e["goto"](o(this).index())
        })
    }, n.prototype.slide = function (e, n) {
        var i = this,
            t = i.elemItem,
            a = t.length,
            o = i.config,
            l = o.index,
            d = o.elem.attr("lay-filter");
        i.haveSlide || a <= 1 || ("sub" === e ? (i.subIndex(n), t.eq(o.index).addClass(m), setTimeout(function () {
            t.eq(l).addClass(c), t.eq(o.index).addClass(c)
        }, 50)) : (i.addIndex(n), t.eq(o.index).addClass(h), setTimeout(function () {
            t.eq(l).addClass(u), t.eq(o.index).addClass(u)
        }, 50)), setTimeout(function () {
            t.removeClass(s + " " + m + " " + h + " " + u + " " + c), t.eq(o.index).addClass(s), i.haveSlide = !1
        }, 350), i.elemInd.find("li").eq(o.index).addClass(s).siblings().removeClass(s), i.haveSlide = !0, a = {
            index: o.index,
            prevIndex: l,
            item: t.eq(o.index)
        }, "function" == typeof o.change && o.change(a), layui.event.call(this, r, "change(" + d + ")", a))
    }, n.prototype.events = function () {
        var t, a, o = this,
            e = o.config;
        e.elem.data("haveEvents") || (e.elem.on("mouseenter touchstart", function () {
            "always" !== o.config.autoplay && clearInterval(o.timer)
        }).on("mouseleave touchend", function () {
            "always" !== o.config.autoplay && o.autoplay()
        }), t = e.elem, a = "updown" === e.anim, l.touchSwipe(t, {
            onTouchEnd: function (e, n) {
                var i = Date.now() - n.timeStart,
                    n = a ? n.distanceY : n.distanceX;
                (.25 < Math.abs(n / i) || Math.abs(n) > t[a ? "height" : "width"]() / 3) && o.slide(0 < n ? "" : "sub")
            }
        }), e.elem.data("haveEvents", !0))
    }, t.render = function (e) {
        return new n(e)
    }, e(r, t)
});
layui.define(["jquery", "lay"], function (e) {
    "use strict";
    var u = layui.jquery,
        r = layui.lay,
        c = {
            config: {},
            index: layui.rate ? layui.rate.index + 1e4 : 0,
            set: function (e) {
                var a = this;
                return a.config = u.extend({}, a.config, e), a
            },
            on: function (e, a) {
                return layui.onevent.call(this, l, e, a)
            }
        },
        l = "rate",
        h = "layui-icon-rate",
        f = "layui-icon-rate-solid",
        o = "layui-icon-rate-half",
        s = "layui-icon-rate-solid layui-icon-rate-half",
        v = "layui-icon-rate layui-icon-rate-half",
        a = function (e) {
            var a = this;
            a.index = ++c.index, a.config = u.extend({}, a.config, c.config, e), a.render()
        };
    a.prototype.config = {
        length: 5,
        text: !1,
        readonly: !1,
        half: !1,
        value: 0,
        theme: ""
    }, a.prototype.render = function () {
        var e = this,
            a = e.config,
            l = u(a.elem);
        if (1 < l.length) return layui.each(l, function () {
            c.render(u.extend({}, a, {
                elem: this
            }))
        }), e;
        u.extend(a, r.options(l[0]));
        for (var t = a.theme ? 'style="color: ' + a.theme + ';"' : "", i = (a.elem = u(a.elem), a.value > a.length && (a.value = a.length), parseInt(a.value) === a.value || a.half || (a.value = Math.ceil(a.value) - a.value < .5 ? Math.ceil(a.value) : Math.floor(a.value)), '<ul class="layui-rate" ' + (a.readonly ? "readonly" : "") + ">"), n = 1; n <= a.length; n++) {
            var o = '<li class="layui-inline"><i class="layui-icon ' + (n > Math.floor(a.value) ? h : f) + '" ' + t + "></i></li>";
            a.half && parseInt(a.value) !== a.value && n == Math.ceil(a.value) ? i = i + '<li><i class="layui-icon layui-icon-rate-half" ' + t + "></i></li>" : i += o
        }
        i += "</ul>" + (a.text ? '<span class="layui-inline">' + a.value + "\u661f" : "") + "</span>";
        var l = a.elem,
            s = l.next(".layui-rate");
        s[0] && s.remove(), e.elemTemp = u(i), a.span = e.elemTemp.next("span"), a.setText && a.setText(a.value), l.html(e.elemTemp), l.addClass("layui-inline"), a.readonly || e.action()
    }, a.prototype.setvalue = function (e) {
        this.config.value = e, this.render()
    }, a.prototype.action = function () {
        var n = this.config,
            t = this.elemTemp,
            i = t.find("i").width(),
            l = t.children("li");
        l.each(function (e) {
            var a = e + 1,
                l = u(this);
            l.on("click", function (e) {
                n.value = a, n.half && e.pageX - u(this).offset().left <= i / 2 && (n.value = n.value - .5), n.text && t.next("span").text(n.value + "\u661f"), n.choose && n.choose(n.value), n.setText && n.setText(n.value)
            }), l.on("mousemove", function (e) {
                t.find("i").each(function () {
                    u(this).addClass(h).removeClass(s)
                }), t.find("i:lt(" + a + ")").each(function () {
                    u(this).addClass(f).removeClass(v)
                }), n.half && e.pageX - u(this).offset().left <= i / 2 && l.children("i").addClass(o).removeClass(f)
            }), l.on("mouseleave", function () {
                t.find("i").each(function () {
                    u(this).addClass(h).removeClass(s)
                }), t.find("i:lt(" + Math.floor(n.value) + ")").each(function () {
                    u(this).addClass(f).removeClass(v)
                }), n.half && parseInt(n.value) !== n.value && t.children("li:eq(" + Math.floor(n.value) + ")").children("i").addClass(o).removeClass("layui-icon-rate-solid layui-icon-rate")
            })
        }), r.touchSwipe(t, {
            onTouchMove: function (e, a) {
                var i;
                Date.now() - a.timeStart <= 200 || (a = e.touches[0].pageX, e = t.width() / n.length, a = (a - t.offset().left) / e, (i = (i = (e = a % 1) <= .5 && n.half ? .5 + (a - e) : Math.ceil(a)) > n.length ? n.length : i) < 0 && (i = 0), l.each(function (e) {
                    var a = u(this).children("i"),
                        l = Math.ceil(i) - e == 1,
                        t = Math.ceil(i) > e,
                        e = i - e == .5;
                    t ? (a.addClass(f).removeClass(v), n.half && e && a.addClass(o).removeClass(f)) : a.addClass(h).removeClass(s), a.toggleClass("layui-rate-hover", l)
                }), n.value = i, n.text && t.next("span").text(n.value + "\u661f"), n.setText && n.setText(n.value))
            },
            onTouchEnd: function (e, a) {
                Date.now() - a.timeStart <= 200 || (t.find("i").removeClass("layui-rate-hover"), n.choose && n.choose(n.value), n.setText && n.setText(n.value))
            }
        })
    }, a.prototype.events = function () {}, c.render = function (e) {
        e = new a(e);
        return function () {
            var a = this;
            return {
                setvalue: function (e) {
                    a.setvalue.call(a, e)
                },
                config: a.config
            }
        }.call(e)
    }, e(l, c)
});
layui.define("jquery", function (o) {
    "use strict";
    var w = layui.$,
        l = function (o) {};
    l.prototype.load = function (o) {
        var i, n, r, l, c, m, e, t, a, f, s, u, p, d, y, g = this,
            h = 0,
            v = w((o = o || {}).elem);
        if (v[0]) return c = w(o.scrollElem || document), m = "mb" in o ? o.mb : 50, e = !("isAuto" in o) || o.isAuto, t = o.moreText || "\u52a0\u8f7d\u66f4\u591a", a = o.end || "\u6ca1\u6709\u66f4\u591a\u4e86", f = "top" === (o.direction || "bottom"), g._cleanup(v, c), s = o.scrollElem && o.scrollElem !== document, p = w('<div class="layui-flow-more"><a href="javascript:;">' + (u = "<cite>" + t + "</cite>") + "</a></div>"), v.find(".layui-flow-more")[0] || v[f ? "prepend" : "append"](p), d = function (o, l) {
            var e = s ? c.prop("scrollHeight") : document.documentElement.scrollHeight,
                t = c.scrollTop();
            o = w(o), p[f ? "after" : "before"](o), (l = 0 == l || null) ? p.html(a) : p.find("a").html(u), n = l, i = null, r && r(), f && (o = s ? c.prop("scrollHeight") : document.documentElement.scrollHeight, 1 === h ? c.scrollTop(o) : 1 < h && c.scrollTop(t + (o - e)))
        }, (y = function () {
            i = !0, p.find("a").html('<i class="layui-anim layui-anim-rotate layui-anim-loop layui-icon ">&#xe63e;</i>'), "function" == typeof o.done && o.done(++h, d)
        })(), p.find("a").on("click.flow", function () {
            w(this);
            n || i || y()
        }), o.isLazyimg && (r = g.lazyimg({
            elem: o.elem + " img",
            scrollElem: o.scrollElem,
            direction: o.direction
        })), e && c.on("scroll.flow", function () {
            var e = w(this),
                t = e.scrollTop();
            l && clearTimeout(l), !n && v.width() && (l = setTimeout(function () {
                var o = (s ? e : w(window)).height(),
                    l = s ? e.prop("scrollHeight") : document.documentElement.scrollHeight;
                (f ? t <= m : l - t - o <= m) && !i && y()
            }, 100))
        }), g
    }, l.prototype.lazyimg = function (o) {
        var l, m = this,
            a = 0,
            f = w((o = o || {}).scrollElem || document),
            s = o.elem || "img",
            n = "top" === (o.direction || "bottom"),
            u = o.scrollElem && o.scrollElem !== document,
            p = function (l, o) {
                var e, t = f.scrollTop(),
                    o = t + o,
                    i = u ? l.offset().top - f.offset().top + t : l.offset().top;
                (n ? i + l.height() : i) >= t && i <= o && l.attr("lay-src") && (e = l.attr("lay-src"), layui.img(e, function () {
                    var o = m.lazyimg.elem.eq(a);
                    l.attr("src", e).removeAttr("lay-src"), o[0] && r(o), a++
                }, function () {
                    m.lazyimg.elem.eq(a);
                    l.removeAttr("lay-src")
                }))
            },
            r = function (o, l) {
                var e = (u ? l || f : w(window)).height(),
                    t = f.scrollTop(),
                    i = t + e;
                if (m.lazyimg.elem = w(s), o) p(o, e);
                else
                    for (var n = 0; n < m.lazyimg.elem.length; n++) {
                        var r = m.lazyimg.elem.eq(n),
                            c = u ? r.offset().top - f.offset().top + t : r.offset().top;
                        if (p(r, e), a = n, i < c) break
                    }
            };
        return r(), f.on("scroll.lazyimg", function () {
            var o = w(this);
            l && clearTimeout(l), l = setTimeout(function () {
                r(null, o)
            }, 50)
        }), r
    }, l.prototype._cleanup = function (o, l) {
        l.off("scroll.flow").off("scroll.lazyimg"), o.find(".layui-flow-more").find("a").off("click.flow")
    }, o("flow", new l)
});
layui.define(["lay", "util", "element", "tabs", "form"], function (e) {
    "use strict";
    var x = layui.$,
        D = layui.util,
        S = layui.element,
        I = layui.tabs,
        N = layui.form,
        W = layui.layer,
        A = (layui.hint(), {
            ELEM_VIEW: "layui-code-view",
            ELEM_TAB: "layui-tab",
            ELEM_HEADER: "layui-code-header",
            ELEM_FULL: "layui-code-full",
            ELEM_PREVIEW: "layui-code-preview",
            ELEM_ITEM: "layui-code-item",
            ELEM_SHOW: "layui-show",
            ELEM_LINE: "layui-code-line",
            ELEM_LINE_NUM: "layui-code-line-number",
            ELEM_LN_MODE: "layui-code-ln-mode",
            CDDE_DATA_CLASS: "LayuiCodeDataClass",
            LINE_RAW_WIDTH: 45
        }),
        T = {
            elem: "",
            about: "",
            ln: !0,
            header: !1,
            encode: !0,
            copy: !0,
            text: {
                code: D.escape("</>"),
                preview: "Preview"
            },
            wordWrap: !0,
            lang: "text",
            highlighter: !1,
            langMarker: !1
        },
        R = layui.code ? layui.code.index + 1e4 : 0,
        j = function (e) {
            return String(e).replace(/\s+$/, "").replace(/^\n|\n$/, "")
        };
    e("code", function (l, e) {
        var o, i, t, a, n, d, c, s, r, u, y, p, E, f, h, v, m, L, _, M, C, g = {
                config: l = x.extend(!0, {}, T, l),
                reload: function (e) {
                    layui.code(this.updateOptions(e))
                },
                updateOptions: function (e) {
                    return delete(e = e || {}).elem, x.extend(!0, l, e)
                },
                reloadCode: function (e) {
                    layui.code(this.updateOptions(e), "reloadCode")
                }
            },
            w = x(l.elem);
        return 1 < w.length ? layui.each(l.obverse ? w : w.get().reverse(), function () {
            layui.code(x.extend({}, l, {
                elem: this
            }), e)
        }) : (o = l.elem = x(l.elem))[0] && (x.extend(!0, l, lay.options(o[0]), (i = {}, layui.each(["title", "height", "encode", "skin", "about"], function (e, t) {
            var a = o.attr("lay-" + t);
            "string" == typeof a && (i[t] = a)
        }), i)), l.encode = (l.encode || l.preview) && !l.codeRender, l.code = l.code || (t = [], o.children("textarea").each(function () {
            t.push(j(this.value))
        }), 0 === t.length && t.push(j(o.html())), t.join("")), w = function (e) {
            "function" == typeof l.codeRender && (e = l.codeRender(String(e), l));
            var t = String(e).split(/\r?\n/g);
            return {
                lines: t,
                html: e = x.map(t, function (e, t) {
                    return ['<div class="' + A.ELEM_LINE + '">', l.ln ? ['<div class="' + A.ELEM_LINE_NUM + '">', D.digit(t + 1) + ".", "</div>"].join("") : "", '<div class="layui-code-line-content">', e || " ", "</div>", "</div>"].join("")
                })
            }
        }, a = l.code, n = function (e) {
            return "function" == typeof l.codeParse ? l.codeParse(e, l) : e
        }, "reloadCode" === e ? o.children(".layui-code-wrap").html(w(n(a)).html) : (d = layui.code.index = ++R, o.attr("lay-code-index", d), (M = A.CDDE_DATA_CLASS in o.data()) && o.attr("class", o.data(A.CDDE_DATA_CLASS) || ""), M || o.data(A.CDDE_DATA_CLASS, o.attr("class")), c = {
            copy: {
                className: "file-b",
                title: ["\u590d\u5236\u4ee3\u7801"],
                event: function (e) {
                    var t = D.unescape(n(l.code)),
                        a = "function" == typeof l.onCopy;
                    lay.clipboard.writeText({
                        text: t,
                        done: function () {
                            if (a && !1 === l.onCopy(t, !0)) return;
                            W.msg("\u5df2\u590d\u5236", {
                                icon: 1
                            })
                        },
                        error: function () {
                            if (a && !1 === l.onCopy(t, !1)) return;
                            W.msg("\u590d\u5236\u5931\u8d25", {
                                icon: 2
                            })
                        }
                    })
                }
            }
        }, function b() {
            var e = o.parent("." + A.ELEM_PREVIEW),
                t = e.children("." + A.ELEM_TAB),
                a = e.children("." + A.ELEM_ITEM + "-preview");
            return t.remove(), a.remove(), e[0] && o.unwrap(), b
        }(), l.preview && (M = "LAY-CODE-DF-" + d, f = l.layout || ["code", "preview"], s = "iframe" === l.preview, E = x('<div class="' + A.ELEM_PREVIEW + '">'), C = x('<div class="layui-tab layui-tab-brief">'), r = x('<div class="layui-tab-title">'), _ = x('<div class="' + [A.ELEM_ITEM, A.ELEM_ITEM + "-preview", "layui-border"].join(" ") + '">'), u = x('<div class="layui-code-tools"></div>'), l.id && E.attr("id", l.id), E.addClass(l.className), C.attr("lay-filter", M), layui.each(f, function (e, t) {
            var a = x('<li lay-id="' + t + '">');
            0 === e && a.addClass("layui-this"), a.html(l.text[t]), r.append(a)
        }), x.extend(c, {
            full: {
                className: "screen-full",
                title: ["\u6700\u5927\u5316\u663e\u793a", "\u8fd8\u539f\u663e\u793a"],
                event: function (e) {
                    var e = e.elem,
                        t = e.closest("." + A.ELEM_PREVIEW),
                        a = "layui-icon-" + this.className,
                        i = "layui-icon-screen-restore",
                        l = this.title,
                        o = x("html,body"),
                        n = "layui-scrollbar-hide";
                    e.hasClass(a) ? (t.addClass(A.ELEM_FULL), e.removeClass(a).addClass(i), e.attr("title", l[1]), o.addClass(n)) : (t.removeClass(A.ELEM_FULL), e.removeClass(i).addClass(a), e.attr("title", l[0]), o.removeClass(n))
                }
            },
            window: {
                className: "release",
                title: ["\u5728\u65b0\u7a97\u53e3\u9884\u89c8"],
                event: function (e) {
                    D.openWin({
                        content: n(l.code)
                    })
                }
            }
        }), l.copy && ("array" === layui.type(l.tools) ? -1 === l.tools.indexOf("copy") && l.tools.unshift("copy") : l.tools = ["copy"]), u.on("click", ">i", function () {
            var e = x(this),
                t = e.data("type"),
                e = {
                    elem: e,
                    type: t,
                    options: l,
                    rawCode: l.code,
                    finalCode: D.unescape(n(l.code))
                };
            c[t] && "function" == typeof c[t].event && c[t].event(e), "function" == typeof l.toolsEvent && l.toolsEvent(e)
        }), l.addTools && l.tools && (l.tools = [].concat(l.tools, l.addTools)), layui.each(l.tools, function (e, t) {
            var a = "object" == typeof t,
                i = a ? t : c[t] || {
                    className: t,
                    title: [t]
                },
                l = i.className || i.type,
                o = i.title || [""],
                a = a ? i.type || l : t;
            a && (c[a] || ((t = {})[a] = i, x.extend(c, t)), u.append('<i class="layui-icon layui-icon-' + l + '" data-type="' + a + '" title="' + o[0] + '"></i>'))
        }), o.addClass(A.ELEM_ITEM).wrap(E), C.append(r), l.tools && C.append(u), o.before(C), s && _.html('<iframe allowtransparency="true" frameborder="0"></iframe>'), y = function (e) {
            var t = e.children("iframe")[0];
            s && t ? t.srcdoc = n(l.code) : e.html(l.code), setTimeout(function () {
                "function" == typeof l.done && l.done({
                    container: e,
                    options: l,
                    render: function () {
                        N.render(e.find(".layui-form")), S.render(), I.render({
                            elem: ["." + A.ELEM_PREVIEW, ".layui-tabs"].join(" ")
                        })
                    }
                })
            }, 3)
        }, "preview" === f[0] ? (_.addClass(A.ELEM_SHOW), o.before(_), y(_)) : o.addClass(A.ELEM_SHOW).after(_), l.previewStyle = [l.style, l.previewStyle].join(""), _.attr("style", l.previewStyle), S.on("tab(" + M + ")", function (e) {
            var t = x(this),
                a = x(e.elem).closest("." + A.ELEM_PREVIEW).find("." + A.ELEM_ITEM),
                e = a.eq(e.index);
            a.removeClass(A.ELEM_SHOW), e.addClass(A.ELEM_SHOW), "preview" === t.attr("lay-id") && y(e), L()
        })), p = x('<code class="layui-code-wrap"></code>'), o.addClass((E = ["layui-code-view layui-border-box"], l.wordWrap || E.push("layui-code-nowrap"), E.join(" "))), (C = l.theme || l.skin) && (o.removeClass("layui-code-theme-dark layui-code-theme-light"), o.addClass("layui-code-theme-" + C)), l.highlighter && o.addClass([l.highlighter, "language-" + l.lang, "layui-code-hl"].join(" ")), f = w(l.encode ? D.escape(n(a)) : a), h = f.lines, o.html(p.html(f.html)), l.ln && o.append('<div class="layui-code-ln-side"></div>'), l.height && p.css("max-height", l.height), l.codeStyle = [l.style, l.codeStyle].join(""), l.codeStyle && p.attr("style", function (e, t) {
            return (t || "") + l.codeStyle
        }), v = [{
            selector: ">.layui-code-wrap>.layui-code-line{}",
            setValue: function (e, t) {
                e.style["padding-left"] = t + "px"
            }
        }, {
            selector: ">.layui-code-wrap>.layui-code-line>.layui-code-line-number{}",
            setValue: function (e, t) {
                e.style.width = t + "px"
            }
        }, {
            selector: ">.layui-code-ln-side{}",
            setValue: function (e, t) {
                e.style.width = t + "px"
            }
        }], m = lay.style({
            target: o[0],
            id: "DF-code-" + d,
            text: x.map(x.map(v, function (e) {
                return e.selector
            }), function (e, t) {
                return ['.layui-code-view[lay-code-index="' + d + '"]', e].join(" ")
            }).join("")
        }), L = function b() {
            var e, i;
            return l.ln && (e = Math.floor(h.length / 100), i = p.children("." + A.ELEM_LINE).last().children("." + A.ELEM_LINE_NUM).outerWidth(), o.addClass(A.ELEM_LN_MODE), e) && A.LINE_RAW_WIDTH < i && lay.getStyleRules(m, function (e, t) {
                try {
                    v[t].setValue(e, i)
                } catch (a) {}
            }), b
        }(), l.header && ((_ = x('<div class="' + A.ELEM_HEADER + '"></div>')).html(l.title || l.text.code), o.prepend(_)), M = x('<div class="layui-code-fixbar"></div>'), l.copy && !l.preview && ((C = x(['<span class="layui-code-copy">', '<i class="layui-icon layui-icon-file-b" title="\u590d\u5236"></i>', "</span>"].join(""))).on("click", function () {
            c.copy.event()
        }), M.append(C)), l.langMarker && M.append('<span class="layui-code-lang-marker">' + l.lang + "</span>"), l.about && M.append(l.about), o.append(M), l.preview || setTimeout(function () {
            "function" == typeof l.done && l.done({})
        }, 3), l.elem.length === 1 + d && "function" == typeof l.allDone && l.allDone())), g
    })
}), layui["layui.all"] || layui.addcss("modules/code.css?v=6", "skincodecss");
//# sourceMappingURL=layui.js.map