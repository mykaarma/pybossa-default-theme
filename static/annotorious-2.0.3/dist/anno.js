! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("Annotorious", [], e) : "object" == typeof exports ? exports.Annotorious = e() : t.Annotorious = e()
}(window, function() {
    return r = {}, o.m = n = [function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "version", function() {
            return I
        }), n.d(e, "Children", function() {
            return b
        }), n.d(e, "render", function() {
            return R
        }), n.d(e, "hydrate", function() {
            return N
        }), n.d(e, "unmountComponentAtNode", function() {
            return H
        }), n.d(e, "createPortal", function() {
            return C
        }), n.d(e, "createFactory", function() {
            return z
        }), n.d(e, "cloneElement", function() {
            return B
        }), n.d(e, "isValidElement", function() {
            return F
        }), n.d(e, "findDOMNode", function() {
            return $
        }), n.d(e, "PureComponent", function() {
            return l
        }), n.d(e, "memo", function() {
            return p
        }), n.d(e, "forwardRef", function() {
            return h
        }), n.d(e, "unstable_batchedUpdates", function() {
            return q
        }), n.d(e, "StrictMode", function() {
            return W
        }), n.d(e, "Suspense", function() {
            return _
        }), n.d(e, "SuspenseList", function() {
            return S
        }), n.d(e, "lazy", function() {
            return x
        });
        var r = n(2);
        n.d(e, "useState", function() {
            return r.k
        }), n.d(e, "useReducer", function() {
            return r.i
        }), n.d(e, "useEffect", function() {
            return r.d
        }), n.d(e, "useLayoutEffect", function() {
            return r.g
        }), n.d(e, "useRef", function() {
            return r.j
        }), n.d(e, "useImperativeHandle", function() {
            return r.f
        }), n.d(e, "useMemo", function() {
            return r.h
        }), n.d(e, "useCallback", function() {
            return r.a
        }), n.d(e, "useContext", function() {
            return r.b
        }), n.d(e, "useDebugValue", function() {
            return r.c
        }), n.d(e, "useErrorBoundary", function() {
            return r.e
        });
        var a = n(1);

        function o(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function i(t, e) {
            for (var n in t)
                if ("__source" !== n && !(n in e)) return !0;
            for (var r in e)
                if ("__source" !== r && t[r] !== e[r]) return !0;
            return !1
        }
        n.d(e, "createElement", function() {
            return a.f
        }), n.d(e, "createContext", function() {
            return a.e
        }), n.d(e, "createRef", function() {
            return a.g
        }), n.d(e, "Fragment", function() {
            return a.b
        }), n.d(e, "Component", function() {
            return a.a
        });
        var u, c, s, l = (u = a.a, s = u, (c = f).prototype = Object.create(s.prototype), (c.prototype.constructor = c).__proto__ = s, f.prototype.shouldComponentUpdate = function(t, e) {
            return i(this.props, t) || i(this.state, e)
        }, f);

        function f(t) {
            var e;
            return (e = u.call(this, t) || this).isPureReactComponent = !0, e
        }

        function p(e, r) {
            function n(t) {
                var e = this.props.ref,
                    n = e == t.ref;
                return !n && e && (e.call ? e(null) : e.current = null), r ? !r(this.props, t) || !n : i(this.props, t)
            }

            function t(t) {
                return this.shouldComponentUpdate = n, Object(a.f)(e, t)
            }
            return t.prototype.isReactComponent = !0, t.displayName = "Memo(" + (e.displayName || e.name) + ")", t.t = !0, t
        }
        var d = a.i.__b;
        a.i.__b = function(t) {
            t.type && t.type.t && t.ref && (t.props.ref = t.ref, t.ref = null), d && d(t)
        };
        var y = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

        function h(r) {
            function t(t, e) {
                var n = o({}, t);
                return delete n.ref, r(n, t.ref || e)
            }
            return t.$$typeof = y, (t.render = t).prototype.isReactComponent = t.t = !0, t.displayName = "ForwardRef(" + (r.displayName || r.name) + ")", t
        }

        function m(t, r) {
            return t ? Object(a.k)(t).reduce(function(t, e, n) {
                return t.concat(r(e, n))
            }, []) : null
        }
        var b = {
                map: m,
                forEach: m,
                count: function(t) {
                    return t ? Object(a.k)(t).length : 0
                },
                only: function(t) {
                    if (1 !== (t = Object(a.k)(t)).length) throw new Error("Children.only() expects only one child.");
                    return t[0]
                },
                toArray: a.k
            },
            g = a.i.__e;

        function v(t) {
            return t && ((t = o({}, t)).__c = null, t.__k = t.__k && t.__k.map(v)), t
        }

        function _() {
            this.__u = 0, this.o = null, this.__b = null
        }

        function w(t) {
            var e = t.__.__c;
            return e && e.u && e.u(t)
        }

        function x(e) {
            var n, r, o;

            function t(t) {
                if (n || (n = e()).then(function(t) {
                        r = t.default || t
                    }, function(t) {
                        o = t
                    }), o) throw o;
                if (!r) throw n;
                return Object(a.f)(r, t)
            }
            return t.displayName = "Lazy", t.t = !0, t
        }

        function S() {
            this.i = null, this.l = null
        }
        a.i.__e = function(t, e, n) {
            if (t.then)
                for (var r, o = e; o = o.__;)
                    if ((r = o.__c) && r.__c) return r.__c(t, e.__c);
            g(t, e, n)
        }, (_.prototype = new a.a).__c = function(t, e) {
            var n = this;
            null == n.o && (n.o = []), n.o.push(e);

            function r() {
                i || (i = !0, o ? o(a) : a())
            }
            var o = w(n.__v),
                i = !1;
            e.__c = e.componentWillUnmount, e.componentWillUnmount = function() {
                r(), e.__c && e.__c()
            };
            var a = function() {
                var t;
                if (!--n.__u)
                    for (n.__v.__k[0] = n.state.u, n.setState({
                            u: n.__b = null
                        }); t = n.o.pop();) t.forceUpdate()
            };
            n.__u++ || n.setState({
                u: n.__b = n.__v.__k[0]
            }), t.then(r, r)
        }, _.prototype.render = function(t, e) {
            return this.__b && (this.__v.__k[0] = v(this.__b), this.__b = null), [Object(a.f)(a.a, null, e.u ? null : t.children), e.u && t.fallback]
        };

        function O(t, e, n) {
            if (++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.l.size))
                for (n = t.i; n;) {
                    for (; 3 < n.length;) n.pop()();
                    if (n[1] < n[0]) break;
                    t.i = n = n[2]
                }
        }(S.prototype = new a.a).u = function(n) {
            var r = this,
                o = w(r.__v),
                i = r.l.get(n);
            return i[0]++,
                function(t) {
                    function e() {
                        r.props.revealOrder ? (i.push(t), O(r, n, i)) : t()
                    }
                    o ? o(e) : e()
                }
        }, S.prototype.render = function(t) {
            this.i = null, this.l = new Map;
            var e = Object(a.k)(t.children);
            t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
            for (var n = e.length; n--;) this.l.set(e[n], this.i = [1, 0, this.i]);
            return t.children
        }, S.prototype.componentDidUpdate = S.prototype.componentDidMount = function() {
            var n = this;
            n.l.forEach(function(t, e) {
                O(n, e, t)
            })
        };
        var E, A = ((E = k.prototype).getChildContext = function() {
            return this.props.context
        }, E.render = function(t) {
            return t.children
        }, k);

        function k() {}

        function j(t) {
            var e = this,
                n = t.container,
                r = Object(a.f)(A, {
                    context: e.context
                }, t.vnode);
            return e.s && e.s !== n && (e.v.parentNode && e.s.removeChild(e.v), Object(a.c)(e.h), e.p = !1), t.vnode ? e.p ? (n.__k = e.__k, Object(a.j)(r, n), e.__k = n.__k) : (e.v = document.createTextNode(""), Object(a.h)("", n), n.appendChild(e.v), e.p = !0, e.s = n, Object(a.j)(r, n, e.v), e.__k = e.v.__k) : e.p && (e.v.parentNode && e.s.removeChild(e.v), Object(a.c)(e.h)), e.h = r, e.componentWillUnmount = function() {
                e.v.parentNode && e.s.removeChild(e.v), Object(a.c)(e.h)
            }, null
        }

        function C(t, e) {
            return Object(a.f)(j, {
                vnode: t,
                container: e
            })
        }
        var P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
        a.a.prototype.isReactComponent = {};
        var T = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;

        function R(t, e, n) {
            if (null == e.__k)
                for (; e.firstChild;) e.removeChild(e.firstChild);
            return Object(a.j)(t, e), "function" == typeof n && n(), t ? t.__c : null
        }

        function N(t, e, n) {
            return Object(a.h)(t, e), "function" == typeof n && n(), t ? t.__c : null
        }
        var D = a.i.event;

        function M(t, e) {
            t["UNSAFE_" + e] && !t[e] && Object.defineProperty(t, e, {
                configurable: !1,
                get: function() {
                    return this["UNSAFE_" + e]
                },
                set: function(t) {
                    this["UNSAFE_" + e] = t
                }
            })
        }
        a.i.event = function(t) {
            D && (t = D(t));
            var e = !(t.persist = function() {}),
                n = !1,
                r = t.stopPropagation;
            t.stopPropagation = function() {
                r.call(t), e = !0
            };
            var o = t.preventDefault;
            return t.preventDefault = function() {
                o.call(t), n = !0
            }, t.isPropagationStopped = function() {
                return e
            }, t.isDefaultPrevented = function() {
                return n
            }, t.nativeEvent = t
        };
        var U = {
                configurable: !0,
                get: function() {
                    return this.class
                }
            },
            L = a.i.vnode;
        a.i.vnode = function(i) {
            i.$$typeof = T;
            var t, e, n, r = i.type,
                o = i.props;
            if (r) {
                if (o.class != o.className && (U.enumerable = "className" in o, null != o.className && (o.class = o.className), Object.defineProperty(o, "className", U)), "function" != typeof r) {
                    for (n in o.defaultValue && void 0 !== o.value && (o.value || 0 === o.value || (o.value = o.defaultValue), delete o.defaultValue), Array.isArray(o.value) && o.multiple && "select" === r && (Object(a.k)(o.children).forEach(function(t) {
                            -1 != o.value.indexOf(t.props.value) && (t.props.selected = !0)
                        }), delete o.value), o)
                        if (t = P.test(n)) break;
                    if (t)
                        for (n in e = i.props = {}, o) e[P.test(n) ? n.replace(/[A-Z0-9]/, "-$&").toLowerCase() : n] = o[n]
                }! function() {
                    var t = i.type,
                        e = i.props;
                    if (e && "string" == typeof t) {
                        var n, r = {};
                        for (var o in e) /^on(Ani|Tra|Tou)/.test(o) && (e[o.toLowerCase()] = e[o], delete e[o]), r[o.toLowerCase()] = o;
                        r.ondoubleclick && (e.ondblclick = e[r.ondoubleclick], delete e[r.ondoubleclick]), r.onbeforeinput && (e.onbeforeinput = e[r.onbeforeinput], delete e[r.onbeforeinput]), r.onchange && ("textarea" === t || "input" === t.toLowerCase() && !/^fil|che|ra/i.test(e.type)) && (e[n = r.oninput || "oninput"] || (e[n] = e[r.onchange], delete e[r.onchange]))
                    }
                }(), "function" == typeof r && !r.m && r.prototype && (M(r.prototype, "componentWillMount"), M(r.prototype, "componentWillReceiveProps"), M(r.prototype, "componentWillUpdate"), r.m = !0)
            }
            L && L(i)
        };
        var I = "16.8.0";

        function z(t) {
            return a.f.bind(null, t)
        }

        function F(t) {
            return !!t && t.$$typeof === T
        }

        function B(t) {
            return F(t) ? a.d.apply(null, arguments) : t
        }

        function H(t) {
            return !!t.__k && (Object(a.j)(null, t), !0)
        }

        function $(t) {
            return t && (t.base || 1 === t.nodeType && t) || null
        }
        var q = function(t, e) {
                return t(e)
            },
            W = a.b;
        e.default = {
            useState: r.k,
            useReducer: r.i,
            useEffect: r.d,
            useLayoutEffect: r.g,
            useRef: r.j,
            useImperativeHandle: r.f,
            useMemo: r.h,
            useCallback: r.a,
            useContext: r.b,
            useDebugValue: r.c,
            version: "16.8.0",
            Children: b,
            render: R,
            hydrate: N,
            unmountComponentAtNode: H,
            createPortal: C,
            createElement: a.f,
            createContext: a.e,
            createFactory: z,
            cloneElement: B,
            createRef: a.g,
            Fragment: a.b,
            isValidElement: F,
            findDOMNode: $,
            Component: a.a,
            PureComponent: l,
            memo: p,
            forwardRef: h,
            unstable_batchedUpdates: q,
            StrictMode: a.b,
            Suspense: _,
            SuspenseList: S,
            lazy: x
        }
    }, function(t, e, n) {
        "use strict";
        n.d(e, "j", function() {
            return g
        }), n.d(e, "h", function() {
            return v
        }), n.d(e, "f", function() {
            return l
        }), n.d(e, "b", function() {
            return k
        }), n.d(e, "g", function() {
            return f
        }), n.d(e, "a", function() {
            return j
        }), n.d(e, "d", function() {
            return _
        }), n.d(e, "e", function() {
            return U
        }), n.d(e, "k", function() {
            return y
        }), n.d(e, "c", function() {
            return D
        }), n.d(e, "i", function() {
            return w
        });
        var w, r, o, i, a, u, c, x = {},
            S = [],
            s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

        function O(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function E(t) {
            var e = t.parentNode;
            e && e.removeChild(t)
        }

        function l(t, e, n) {
            var r, o = arguments,
                i = {};
            for (r in e) "key" !== r && "ref" !== r && (i[r] = e[r]);
            if (3 < arguments.length)
                for (n = [n], r = 3; r < arguments.length; r++) n.push(o[r]);
            if (null != n && (i.children = n), "function" == typeof t && null != t.defaultProps)
                for (r in t.defaultProps) void 0 === i[r] && (i[r] = t.defaultProps[r]);
            return A(t, i, e && e.key, e && e.ref, null)
        }

        function A(t, e, n, r, o) {
            var i = {
                type: t,
                props: e,
                key: n,
                ref: r,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                constructor: void 0,
                __v: o
            };
            return null == o && (i.__v = i), w.vnode && w.vnode(i), i
        }

        function f() {
            return {}
        }

        function k(t) {
            return t.children
        }

        function j(t, e) {
            this.props = t, this.context = e
        }

        function C(t, e) {
            if (null == e) return t.__ ? C(t.__, t.__.__k.indexOf(t) + 1) : null;
            for (var n; e < t.__k.length; e++)
                if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
            return "function" == typeof t.type ? C(t) : null
        }

        function p(t) {
            (!t.__d && (t.__d = !0) && r.push(t) && !o++ || a !== w.debounceRendering) && ((a = w.debounceRendering) || i)(d)
        }

        function d() {
            for (var t; o = r.length;) t = r.sort(function(t, e) {
                return t.__v.__b - e.__v.__b
            }), r = [], t.some(function(t) {
                var e, n, r, o, i, a, u;
                t.__d && (a = (i = (e = t).__v).__e, (u = e.__P) && (n = [], o = R(u, i, (r = O({}, i)).__v = r, e.__n, void 0 !== u.ownerSVGElement, null, n, null == a ? C(i) : a), b(n, i), o != a && function t(e) {
                    var n, r;
                    if (null != (e = e.__) && null != e.__c) {
                        for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
                            if (null != (r = e.__k[n]) && null != r.__e) {
                                e.__e = e.__c.base = r.__e;
                                break
                            } return t(e)
                    }
                }(i)))
            })
        }

        function P(t, e, n, r, o, i, a, u, c, s) {
            var l, f, p, d, y, h, m, b, g, v = r && r.__k || S,
                _ = v.length;
            for (c == x && (c = null != a ? a[0] : _ ? C(r, 0) : null), n.__k = [], l = 0; l < e.length; l++)
                if (null != (d = n.__k[l] = null == (d = e[l]) || "boolean" == typeof d ? null : "string" == typeof d || "number" == typeof d ? A(null, d, null, null, d) : Array.isArray(d) ? A(k, {
                        children: d
                    }, null, null, null) : null != d.__e || null != d.__c ? A(d.type, d.props, d.key, null, d.__v) : d)) {
                    if (d.__ = n, d.__b = n.__b + 1, null === (p = v[l]) || p && d.key == p.key && d.type === p.type) v[l] = void 0;
                    else
                        for (f = 0; f < _; f++) {
                            if ((p = v[f]) && d.key == p.key && d.type === p.type) {
                                v[f] = void 0;
                                break
                            }
                            p = null
                        }
                    if (y = R(t, d, p = p || x, o, i, a, u, c, s), (f = d.ref) && p.ref != f && (b = b || [], p.ref && b.push(p.ref, null, d), b.push(f, d.__c || y, d)), null != y) {
                        if (null == m && (m = y), (g = void 0) !== d.__d) g = d.__d, d.__d = void 0;
                        else if (a == p || y != c || null == y.parentNode) {
                            t: if (null == c || c.parentNode !== t) t.appendChild(y), g = null;
                                else {
                                    for (h = c, f = 0;
                                        (h = h.nextSibling) && f < _; f += 2)
                                        if (h == y) break t;
                                    t.insertBefore(y, c), g = c
                                }
                            "option" == n.type && (t.value = "")
                        }
                        c = void 0 !== g ? g : y.nextSibling, "function" == typeof n.type && (n.__d = c)
                    } else c && p.__e == c && c.parentNode != t && (c = C(p))
                } if (n.__e = m, null != a && "function" != typeof n.type)
                for (l = a.length; l--;) null != a[l] && E(a[l]);
            for (l = _; l--;) null != v[l] && D(v[l], v[l]);
            if (b)
                for (l = 0; l < b.length; l++) N(b[l], b[++l], b[++l])
        }

        function y(t) {
            return null == t || "boolean" == typeof t ? [] : Array.isArray(t) ? S.concat.apply([], t.map(y)) : [t]
        }

        function h(t, e, n) {
            "-" === e[0] ? t.setProperty(e, n) : t[e] = "number" == typeof n && !1 === s.test(e) ? n + "px" : null == n ? "" : n
        }

        function T(t, e, n, r, o) {
            var i, a, u, c, s;
            if (o ? "className" === e && (e = "class") : "class" === e && (e = "className"), "style" === e)
                if (i = t.style, "string" == typeof n) i.cssText = n;
                else {
                    if ("string" == typeof r && (i.cssText = "", r = null), r)
                        for (c in r) n && c in n || h(i, c, "");
                    if (n)
                        for (s in n) r && n[s] === r[s] || h(i, s, n[s])
                }
            else "o" === e[0] && "n" === e[1] ? (a = e !== (e = e.replace(/Capture$/, "")), e = ((u = e.toLowerCase()) in t ? u : e).slice(2), n ? (r || t.addEventListener(e, m, a), (t.l || (t.l = {}))[e] = n) : t.removeEventListener(e, m, a)) : "list" !== e && "tagName" !== e && "form" !== e && "type" !== e && "size" !== e && !o && e in t ? t[e] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== e && (e !== (e = e.replace(/^xlink:?/, "")) ? null == n || !1 === n ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(e) ? t.removeAttribute(e) : t.setAttribute(e, n))
        }

        function m(t) {
            this.l[t.type](w.event ? w.event(t) : t)
        }

        function R(t, e, n, r, o, i, a, u, c) {
            var s, l, f, p, d, y, h, m, b, g, v, _ = e.type;
            if (void 0 !== e.constructor) return null;
            (s = w.__b) && s(e);
            try {
                t: if ("function" == typeof _) {
                    if (m = e.props, b = (s = _.contextType) && r[s.__c], g = s ? b ? b.props.value : s.__ : r, n.__c ? h = (l = e.__c = n.__c).__ = l.__E : ("prototype" in _ && _.prototype.render ? e.__c = l = new _(m, g) : (e.__c = l = new j(m, g), l.constructor = _, l.render = M), b && b.sub(l), l.props = m, l.state || (l.state = {}), l.context = g, l.__n = r, f = l.__d = !0, l.__h = []), null == l.__s && (l.__s = l.state), null != _.getDerivedStateFromProps && (l.__s == l.state && (l.__s = O({}, l.__s)), O(l.__s, _.getDerivedStateFromProps(m, l.__s))), p = l.props, d = l.state, f) null == _.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(), null != l.componentDidMount && l.__h.push(l.componentDidMount);
                    else {
                        if (null == _.getDerivedStateFromProps && m !== p && null != l.componentWillReceiveProps && l.componentWillReceiveProps(m, g), !l.__e && null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(m, l.__s, g) || e.__v === n.__v) {
                            for (l.props = m, l.state = l.__s, e.__v !== n.__v && (l.__d = !1), (l.__v = e).__e = n.__e, e.__k = n.__k, l.__h.length && a.push(l), s = 0; s < e.__k.length; s++) e.__k[s] && (e.__k[s].__ = e);
                            break t
                        }
                        null != l.componentWillUpdate && l.componentWillUpdate(m, l.__s, g), null != l.componentDidUpdate && l.__h.push(function() {
                            l.componentDidUpdate(p, d, y)
                        })
                    }
                    l.context = g, l.props = m, l.state = l.__s, (s = w.__r) && s(e), l.__d = !1, l.__v = e, l.__P = t, s = l.render(l.props, l.state, l.context), null != l.getChildContext && (r = O(O({}, r), l.getChildContext())), f || null == l.getSnapshotBeforeUpdate || (y = l.getSnapshotBeforeUpdate(p, d)), v = null != s && s.type == k && null == s.key ? s.props.children : s, P(t, Array.isArray(v) ? v : [v], e, n, r, o, i, a, u, c), l.base = e.__e, l.__h.length && a.push(l), h && (l.__E = l.__ = null), l.__e = !1
                } else null == i && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = function(t, e, n, r, o, i, a, u) {
                    var c, s, l, f, p, d = n.props,
                        y = e.props;
                    if (o = "svg" === e.type || o, null != i)
                        for (c = 0; c < i.length; c++)
                            if (null != (s = i[c]) && ((null === e.type ? 3 === s.nodeType : s.localName === e.type) || t == s)) {
                                t = s, i[c] = null;
                                break
                            } if (null == t) {
                        if (null === e.type) return document.createTextNode(y);
                        t = o ? document.createElementNS("http://www.w3.org/2000/svg", e.type) : document.createElement(e.type, y.is && {
                            is: y.is
                        }), i = null, u = !1
                    }
                    if (null === e.type) d !== y && t.data != y && (t.data = y);
                    else {
                        if (null != i && (i = S.slice.call(t.childNodes)), l = (d = n.props || x).dangerouslySetInnerHTML, f = y.dangerouslySetInnerHTML, !u) {
                            if (null != i)
                                for (d = {}, p = 0; p < t.attributes.length; p++) d[t.attributes[p].name] = t.attributes[p].value;
                            (f || l) && (f && l && f.__html == l.__html || (t.innerHTML = f && f.__html || ""))
                        }(function(t, e, n, r, o) {
                            var i;
                            for (i in n) "children" === i || "key" === i || i in e || T(t, i, null, n[i], r);
                            for (i in e) o && "function" != typeof e[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === e[i] || T(t, i, e[i], n[i], r)
                        })(t, y, d, o, u), f ? e.__k = [] : (c = e.props.children, P(t, Array.isArray(c) ? c : [c], e, n, r, "foreignObject" !== e.type && o, i, a, x, u)), u || ("value" in y && void 0 !== (c = y.value) && c !== t.value && T(t, "value", c, d.value, !1), "checked" in y && void 0 !== (c = y.checked) && c !== t.checked && T(t, "checked", c, d.checked, !1))
                    }
                    return t
                }(n.__e, e, n, r, o, i, a, c);
                (s = w.diffed) && s(e)
            }
            catch (t) {
                e.__v = null, w.__e(t, e, n)
            }
            return e.__e
        }

        function b(t, e) {
            w.__c && w.__c(e, t), t.some(function(e) {
                try {
                    t = e.__h, e.__h = [], t.some(function(t) {
                        t.call(e)
                    })
                } catch (t) {
                    w.__e(t, e.__v)
                }
            })
        }

        function N(t, e, n) {
            try {
                "function" == typeof t ? t(e) : t.current = e
            } catch (t) {
                w.__e(t, n)
            }
        }

        function D(t, e, n) {
            var r, o, i;
            if (w.unmount && w.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || N(r, null, e)), n || "function" == typeof t.type || (n = null != (o = t.__e)), t.__e = t.__d = void 0, null != (r = t.__c)) {
                if (r.componentWillUnmount) try {
                    r.componentWillUnmount()
                } catch (t) {
                    w.__e(t, e)
                }
                r.base = r.__P = null
            }
            if (r = t.__k)
                for (i = 0; i < r.length; i++) r[i] && D(r[i], e, n);
            null != o && E(o)
        }

        function M(t, e, n) {
            return this.constructor(t, n)
        }

        function g(t, e, n) {
            var r, o, i;
            w.__ && w.__(t, e), o = (r = n === u) ? null : n && n.__k || e.__k, t = l(k, null, [t]), i = [], R(e, (!r && n || e).__k = t, o || x, x, void 0 !== e.ownerSVGElement, n && !r ? [n] : !o && e.childNodes.length ? S.slice.call(e.childNodes) : null, i, n || x, r), b(i, t)
        }

        function v(t, e) {
            g(t, e, u)
        }

        function _(t, e) {
            var n, r;
            for (r in e = O(O({}, t.props), e), 2 < arguments.length && (e.children = S.slice.call(arguments, 2)), n = {}, e) "key" !== r && "ref" !== r && (n[r] = e[r]);
            return A(t.type, n, e.key || t.key, e.ref || t.ref, null)
        }

        function U(t) {
            var e = {},
                o = {
                    __c: "__cC" + c++,
                    __: t,
                    Consumer: function(t, e) {
                        return t.children(e)
                    },
                    Provider: function(t) {
                        var n, r = this;
                        return this.getChildContext || (n = [], this.getChildContext = function() {
                            return e[o.__c] = r, e
                        }, this.shouldComponentUpdate = function(e) {
                            r.props.value !== e.value && n.some(function(t) {
                                t.context = e.value, p(t)
                            })
                        }, this.sub = function(t) {
                            n.push(t);
                            var e = t.componentWillUnmount;
                            t.componentWillUnmount = function() {
                                n.splice(n.indexOf(t), 1), e && e.call(t)
                            }
                        }), t.children
                    }
                };
            return (o.Consumer.contextType = o).Provider.__ = o
        }
        w = {
            __e: function(t, e) {
                for (var n, r; e = e.__;)
                    if ((n = e.__c) && !n.__) try {
                        if (n.constructor && null != n.constructor.getDerivedStateFromError && (r = !0, n.setState(n.constructor.getDerivedStateFromError(t))), null != n.componentDidCatch && (r = !0, n.componentDidCatch(t)), r) return p(n.__E = n)
                    } catch (e) {
                        t = e
                    }
                throw t
            }
        }, j.prototype.setState = function(t, e) {
            var n = this.__s !== this.state ? this.__s : this.__s = O({}, this.state);
            "function" == typeof t && (t = t(n, this.props)), t && O(n, t), null != t && this.__v && (e && this.__h.push(e), p(this))
        }, j.prototype.forceUpdate = function(t) {
            this.__v && (this.__e = !0, t && this.__h.push(t), p(this))
        }, j.prototype.render = k, r = [], o = 0, i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = x, c = 0
    }, function(t, e, n) {
        "use strict";
        n.d(e, "k", function() {
            return y
        }), n.d(e, "i", function() {
            return h
        }), n.d(e, "d", function() {
            return m
        }), n.d(e, "g", function() {
            return b
        }), n.d(e, "j", function() {
            return g
        }), n.d(e, "f", function() {
            return v
        }), n.d(e, "h", function() {
            return _
        }), n.d(e, "a", function() {
            return w
        }), n.d(e, "b", function() {
            return x
        }), n.d(e, "c", function() {
            return S
        }), n.d(e, "e", function() {
            return O
        });
        var o, i, r, a = n(1),
            u = 0,
            c = [],
            s = a.i.__r,
            l = a.i.diffed,
            f = a.i.__c,
            p = a.i.unmount;

        function d(t, e) {
            a.i.__h && a.i.__h(i, t, u || e), u = 0;
            var n = i.__H || (i.__H = {
                __: [],
                __h: []
            });
            return t >= n.__.length && n.__.push({}), n.__[t]
        }

        function y(t) {
            return u = 1, h(C, t)
        }

        function h(t, e, n) {
            var r = d(o++, 2);
            return r.t = t, r.__c || (r.__c = i, r.__ = [n ? n(e) : C(void 0, e), function(t) {
                var e = r.t(r.__[0], t);
                r.__[0] !== e && (r.__[0] = e, r.__c.setState({}))
            }]), r.__
        }

        function m(t, e) {
            var n = d(o++, 3);
            !a.i.__s && j(n.__H, e) && (n.__ = t, n.__H = e, i.__H.__h.push(n))
        }

        function b(t, e) {
            var n = d(o++, 4);
            !a.i.__s && j(n.__H, e) && (n.__ = t, n.__H = e, i.__h.push(n))
        }

        function g(t) {
            return u = 5, _(function() {
                return {
                    current: t
                }
            }, [])
        }

        function v(t, e, n) {
            u = 6, b(function() {
                "function" == typeof t ? t(e()) : t && (t.current = e())
            }, null == n ? n : n.concat(t))
        }

        function _(t, e) {
            var n = d(o++, 7);
            return j(n.__H, e) ? (n.__H = e, n.__h = t, n.__ = t()) : n.__
        }

        function w(t, e) {
            return u = 8, _(function() {
                return t
            }, e)
        }

        function x(t) {
            var e = i.context[t.__c],
                n = d(o++, 9);
            return n.__c = t, e ? (null == n.__ && (n.__ = !0, e.sub(i)), e.props.value) : t.__
        }

        function S(t, e) {
            a.i.useDebugValue && a.i.useDebugValue(e ? e(t) : t)
        }

        function O(t) {
            var e = d(o++, 10),
                n = y();
            return e.__ = t, i.componentDidCatch || (i.componentDidCatch = function(t) {
                e.__ && e.__(t), n[1](t)
            }), [n[0], function() {
                n[1](void 0)
            }]
        }

        function E() {
            c.some(function(e) {
                if (e.__P) try {
                    e.__H.__h.forEach(A), e.__H.__h.forEach(k), e.__H.__h = []
                } catch (t) {
                    return e.__H.__h = [], a.i.__e(t, e.__v), !0
                }
            }), c = []
        }

        function A(t) {
            "function" == typeof t.u && t.u()
        }

        function k(t) {
            t.u = t.__()
        }

        function j(n, t) {
            return !n || t.some(function(t, e) {
                return t !== n[e]
            })
        }

        function C(t, e) {
            return "function" == typeof e ? e(t) : e
        }
        a.i.__r = function(t) {
            s && s(t), o = 0;
            var e = (i = t.__c).__H;
            e && (e.__h.forEach(A), e.__h.forEach(k), e.__h = [])
        }, a.i.diffed = function(t) {
            l && l(t);
            var e = t.__c;
            e && e.__H && e.__H.__h.length && (1 !== c.push(e) && r === a.i.requestAnimationFrame || ((r = a.i.requestAnimationFrame) || function(t) {
                function e() {
                    clearTimeout(r), cancelAnimationFrame(n), setTimeout(t)
                }
                var n, r = setTimeout(e, 100);
                "undefined" != typeof window && (n = requestAnimationFrame(e))
            })(E))
        }, a.i.__c = function(t, n) {
            n.some(function(e) {
                try {
                    e.__h.forEach(A), e.__h = e.__h.filter(function(t) {
                        return !t.__ || k(t)
                    })
                } catch (t) {
                    n.some(function(t) {
                        t.__h && (t.__h = [])
                    }), n = [], a.i.__e(t, e.__v)
                }
            }), f && f(t, n)
        }, a.i.unmount = function(t) {
            p && p(t);
            var e = t.__c;
            if (e && e.__H) try {
                e.__H.__.forEach(A)
            } catch (t) {
                a.i.__e(t, e.__v)
            }
        }
    }, function(t, e) {
        function n() {}
        n.prototype = {
            on: function(t, e, n) {
                var r = this.e || (this.e = {});
                return (r[t] || (r[t] = [])).push({
                    fn: e,
                    ctx: n
                }), this
            },
            once: function(t, e, n) {
                var r = this;

                function o() {
                    r.off(t, o), e.apply(n, arguments)
                }
                return o._ = e, this.on(t, o, n)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, o = n.length; r < o; r++) n[r].fn.apply(n[r].ctx, e);
                return this
            },
            off: function(t, e) {
                var n = this.e || (this.e = {}),
                    r = n[t],
                    o = [];
                if (r && e)
                    for (var i = 0, a = r.length; i < a; i++) r[i].fn !== e && r[i].fn._ !== e && o.push(r[i]);
                return o.length ? n[t] = o : delete n[t], this
            }
        }, t.exports = n, t.exports.TinyEmitter = n
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var o = n(12),
            r = Object.prototype.toString;

        function a(t) {
            return "[object Array]" === r.call(t)
        }

        function u(t) {
            return void 0 === t
        }

        function c(t) {
            return null !== t && "object" === i(t)
        }

        function s(t) {
            return "[object Function]" === r.call(t)
        }

        function l(t, e) {
            if (null != t)
                if ("object" !== i(t) && (t = [t]), a(t))
                    for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
                else
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t)
        }
        t.exports = {
            isArray: a,
            isArrayBuffer: function(t) {
                return "[object ArrayBuffer]" === r.call(t)
            },
            isBuffer: function(t) {
                return null !== t && !u(t) && null !== t.constructor && !u(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
            },
            isFormData: function(t) {
                return "undefined" != typeof FormData && t instanceof FormData
            },
            isArrayBufferView: function(t) {
                var e = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer;
                return e
            },
            isString: function(t) {
                return "string" == typeof t
            },
            isNumber: function(t) {
                return "number" == typeof t
            },
            isObject: c,
            isUndefined: u,
            isDate: function(t) {
                return "[object Date]" === r.call(t)
            },
            isFile: function(t) {
                return "[object File]" === r.call(t)
            },
            isBlob: function(t) {
                return "[object Blob]" === r.call(t)
            },
            isFunction: s,
            isStream: function(t) {
                return c(t) && s(t.pipe)
            },
            isURLSearchParams: function(t) {
                return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
            },
            isStandardBrowserEnv: function() {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
            },
            forEach: l,
            merge: function n() {
                var r = {};

                function t(t, e) {
                    "object" === i(r[e]) && "object" === i(t) ? r[e] = n(r[e], t) : r[e] = t
                }
                for (var e = 0, o = arguments.length; e < o; e++) l(arguments[e], t);
                return r
            },
            deepMerge: function n() {
                var r = {};

                function t(t, e) {
                    "object" === i(r[e]) && "object" === i(t) ? r[e] = n(r[e], t) : "object" === i(t) ? r[e] = n({}, t) : r[e] = t
                }
                for (var e = 0, o = arguments.length; e < o; e++) l(arguments[e], t);
                return r
            },
            extend: function(n, t, r) {
                return l(t, function(t, e) {
                    n[e] = r && "function" == typeof t ? o(t, r) : t
                }), n
            },
            trim: function(t) {
                return t.replace(/^\s*/, "").replace(/\s*$/, "")
            }
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var o, u = TypeError,
            c = Object.getOwnPropertyDescriptor;
        if (c) try {
            c({}, "")
        } catch (t) {
            c = null
        }

        function i() {
            throw new u
        }
        var a = c ? function() {
                try {
                    return i
                } catch (t) {
                    try {
                        return c(arguments, "callee").get
                    } catch (t) {
                        return i
                    }
                }
            }() : i,
            s = n(51)(),
            l = Object.getPrototypeOf || function(t) {
                return t.__proto__
            },
            f = o,
            p = o,
            d = o,
            y = o,
            h = "undefined" == typeof Uint8Array ? o : l(Uint8Array),
            m = {
                "%Array%": Array,
                "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? o : ArrayBuffer,
                "%ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? o : ArrayBuffer.prototype,
                "%ArrayIteratorPrototype%": s ? l([][Symbol.iterator]()) : o,
                "%ArrayPrototype%": Array.prototype,
                "%ArrayProto_entries%": Array.prototype.entries,
                "%ArrayProto_forEach%": Array.prototype.forEach,
                "%ArrayProto_keys%": Array.prototype.keys,
                "%ArrayProto_values%": Array.prototype.values,
                "%AsyncFromSyncIteratorPrototype%": o,
                "%AsyncFunction%": p,
                "%AsyncFunctionPrototype%": o,
                "%AsyncGenerator%": o,
                "%AsyncGeneratorFunction%": d,
                "%AsyncGeneratorPrototype%": o,
                "%AsyncIteratorPrototype%": y && s && Symbol.asyncIterator ? y[Symbol.asyncIterator]() : o,
                "%Atomics%": "undefined" == typeof Atomics ? o : Atomics,
                "%Boolean%": Boolean,
                "%BooleanPrototype%": Boolean.prototype,
                "%DataView%": "undefined" == typeof DataView ? o : DataView,
                "%DataViewPrototype%": "undefined" == typeof DataView ? o : DataView.prototype,
                "%Date%": Date,
                "%DatePrototype%": Date.prototype,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": Error,
                "%ErrorPrototype%": Error.prototype,
                "%eval%": eval,
                "%EvalError%": EvalError,
                "%EvalErrorPrototype%": EvalError.prototype,
                "%Float32Array%": "undefined" == typeof Float32Array ? o : Float32Array,
                "%Float32ArrayPrototype%": "undefined" == typeof Float32Array ? o : Float32Array.prototype,
                "%Float64Array%": "undefined" == typeof Float64Array ? o : Float64Array,
                "%Float64ArrayPrototype%": "undefined" == typeof Float64Array ? o : Float64Array.prototype,
                "%Function%": Function,
                "%FunctionPrototype%": Function.prototype,
                "%Generator%": o,
                "%GeneratorFunction%": f,
                "%GeneratorPrototype%": o,
                "%Int8Array%": "undefined" == typeof Int8Array ? o : Int8Array,
                "%Int8ArrayPrototype%": "undefined" == typeof Int8Array ? o : Int8Array.prototype,
                "%Int16Array%": "undefined" == typeof Int16Array ? o : Int16Array,
                "%Int16ArrayPrototype%": "undefined" == typeof Int16Array ? o : Int8Array.prototype,
                "%Int32Array%": "undefined" == typeof Int32Array ? o : Int32Array,
                "%Int32ArrayPrototype%": "undefined" == typeof Int32Array ? o : Int32Array.prototype,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": s ? l(l([][Symbol.iterator]())) : o,
                "%JSON%": "object" === ("undefined" == typeof JSON ? "undefined" : r(JSON)) ? JSON : o,
                "%JSONParse%": "object" === ("undefined" == typeof JSON ? "undefined" : r(JSON)) ? JSON.parse : o,
                "%Map%": "undefined" == typeof Map ? o : Map,
                "%MapIteratorPrototype%": "undefined" != typeof Map && s ? l((new Map)[Symbol.iterator]()) : o,
                "%MapPrototype%": "undefined" == typeof Map ? o : Map.prototype,
                "%Math%": Math,
                "%Number%": Number,
                "%NumberPrototype%": Number.prototype,
                "%Object%": Object,
                "%ObjectPrototype%": Object.prototype,
                "%ObjProto_toString%": Object.prototype.toString,
                "%ObjProto_valueOf%": Object.prototype.valueOf,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": "undefined" == typeof Promise ? o : Promise,
                "%PromisePrototype%": "undefined" == typeof Promise ? o : Promise.prototype,
                "%PromiseProto_then%": "undefined" == typeof Promise ? o : Promise.prototype.then,
                "%Promise_all%": "undefined" == typeof Promise ? o : Promise.all,
                "%Promise_reject%": "undefined" == typeof Promise ? o : Promise.reject,
                "%Promise_resolve%": "undefined" == typeof Promise ? o : Promise.resolve,
                "%Proxy%": "undefined" == typeof Proxy ? o : Proxy,
                "%RangeError%": RangeError,
                "%RangeErrorPrototype%": RangeError.prototype,
                "%ReferenceError%": ReferenceError,
                "%ReferenceErrorPrototype%": ReferenceError.prototype,
                "%Reflect%": "undefined" == typeof Reflect ? o : Reflect,
                "%RegExp%": RegExp,
                "%RegExpPrototype%": RegExp.prototype,
                "%Set%": "undefined" == typeof Set ? o : Set,
                "%SetIteratorPrototype%": "undefined" != typeof Set && s ? l((new Set)[Symbol.iterator]()) : o,
                "%SetPrototype%": "undefined" == typeof Set ? o : Set.prototype,
                "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? o : SharedArrayBuffer,
                "%SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? o : SharedArrayBuffer.prototype,
                "%String%": String,
                "%StringIteratorPrototype%": s ? l("" [Symbol.iterator]()) : o,
                "%StringPrototype%": String.prototype,
                "%Symbol%": s ? Symbol : o,
                "%SymbolPrototype%": s ? Symbol.prototype : o,
                "%SyntaxError%": SyntaxError,
                "%SyntaxErrorPrototype%": SyntaxError.prototype,
                "%ThrowTypeError%": a,
                "%TypedArray%": h,
                "%TypedArrayPrototype%": h ? h.prototype : o,
                "%TypeError%": u,
                "%TypeErrorPrototype%": u.prototype,
                "%Uint8Array%": "undefined" == typeof Uint8Array ? o : Uint8Array,
                "%Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? o : Uint8Array.prototype,
                "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? o : Uint8ClampedArray,
                "%Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? o : Uint8ClampedArray.prototype,
                "%Uint16Array%": "undefined" == typeof Uint16Array ? o : Uint16Array,
                "%Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? o : Uint16Array.prototype,
                "%Uint32Array%": "undefined" == typeof Uint32Array ? o : Uint32Array,
                "%Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? o : Uint32Array.prototype,
                "%URIError%": URIError,
                "%URIErrorPrototype%": URIError.prototype,
                "%WeakMap%": "undefined" == typeof WeakMap ? o : WeakMap,
                "%WeakMapPrototype%": "undefined" == typeof WeakMap ? o : WeakMap.prototype,
                "%WeakSet%": "undefined" == typeof WeakSet ? o : WeakSet,
                "%WeakSetPrototype%": "undefined" == typeof WeakSet ? o : WeakSet.prototype
            },
            b = n(8).call(Function.call, String.prototype.replace),
            g = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
            v = /\\(\\)?/g;
        t.exports = function(t, e) {
            if ("string" != typeof t || 0 === t.length) throw new TypeError("intrinsic name must be a non-empty string");
            if (1 < arguments.length && "boolean" != typeof e) throw new TypeError('"allowMissing" argument must be a boolean');
            for (var o, n = (o = [], b(t, g, function(t, e, n, r) {
                    o[o.length] = n ? b(r, v, "$1") : e || t
                }), o), r = function(t, e) {
                    if (!(t in m)) throw new SyntaxError("intrinsic " + t + " does not exist!");
                    if (void 0 === m[t] && !e) throw new u("intrinsic " + t + " exists, but is not available. Please file an issue!");
                    return m[t]
                }("%" + (0 < n.length ? n[0] : "") + "%", e), i = 1; i < n.length; i += 1)
                if (null != r)
                    if (c && i + 1 >= n.length) {
                        var a = c(r, n[i]);
                        if (!(e || n[i] in r)) throw new u("base intrinsic for " + t + " exists, but the property is not available.");
                        r = a ? a.get || a.value : r[n[i]]
                    } else r = r[n[i]];
            return r
        }
    }, function(t, e, n) {
        var y, h, m = n(69),
            b = n(70),
            g = 0,
            v = 0;
        t.exports = function(t, e, n) {
            var r, o = e && n || 0,
                i = e || [],
                a = (t = t || {}).node || y,
                u = void 0 !== t.clockseq ? t.clockseq : h;
            null != a && null != u || (r = m(), null == a && (a = y = [1 | r[0], r[1], r[2], r[3], r[4], r[5]]), null == u && (u = h = 16383 & (r[6] << 8 | r[7])));
            var c = void 0 !== t.msecs ? t.msecs : (new Date).getTime(),
                s = void 0 !== t.nsecs ? t.nsecs : v + 1,
                l = c - g + (s - v) / 1e4;
            if (l < 0 && void 0 === t.clockseq && (u = u + 1 & 16383), (l < 0 || g < c) && void 0 === t.nsecs && (s = 0), 1e4 <= s) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            g = c, h = u;
            var f = (1e4 * (268435455 & (c += 122192928e5)) + (v = s)) % 4294967296;
            i[o++] = f >>> 24 & 255, i[o++] = f >>> 16 & 255, i[o++] = f >>> 8 & 255, i[o++] = 255 & f;
            var p = c / 4294967296 * 1e4 & 268435455;
            i[o++] = p >>> 8 & 255, i[o++] = 255 & p, i[o++] = p >>> 24 & 15 | 16, i[o++] = p >>> 16 & 255, i[o++] = u >>> 8 | 128, i[o++] = 255 & u;
            for (var d = 0; d < 6; ++d) i[o + d] = a[d];
            return e || b(i)
        }
    }, function(t, e, n) {
        "use strict";
        var r, o = this && this.__extends || (r = function(t, e) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            a = this && this.__assign || function() {
                return (a = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            u = this && this.__rest || function(t, e) {
                var n = {};
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
                return n
            },
            i = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            },
            c = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(n(0)),
            l = c(n(73)),
            f = i(n(11));

        function p(t) {
            return t && t.replace(/&nbsp;|\u202F|\u00A0/g, " ")
        }
        var d, y = (d = s.Component, o(h, d), h.prototype.render = function() {
            var e = this,
                t = this.props,
                n = t.tagName,
                r = t.html,
                o = t.innerRef,
                i = u(t, ["tagName", "html", "innerRef"]);
            return s.createElement(n || "div", a(a({}, i), {
                ref: "function" == typeof o ? function(t) {
                    o(t), e.el.current = t
                } : o || this.el,
                onInput: this.emitChange,
                onBlur: this.props.onBlur || this.emitChange,
                onKeyUp: this.props.onKeyUp || this.emitChange,
                onKeyDown: this.props.onKeyDown || this.emitChange,
                contentEditable: !this.props.disabled,
                dangerouslySetInnerHTML: {
                    __html: r
                }
            }), this.props.children)
        }, h.prototype.shouldComponentUpdate = function(t) {
            var e = this.props,
                n = this.getEl();
            return !n || p(t.html) !== p(n.innerHTML) || e.disabled !== t.disabled || e.tagName !== t.tagName || e.className !== t.className || e.innerRef !== t.innerRef || !l.default(e.style, t.style)
        }, h.prototype.componentDidUpdate = function() {
            var t = this.getEl();
            t && (this.props.html !== t.innerHTML && (t.innerHTML = this.lastHtml = this.props.html), function(t) {
                var e = document.createTextNode("");
                t.appendChild(e);
                var n, r, o = document.activeElement === t;
                null !== e && null !== e.nodeValue && o && (null !== (n = window.getSelection()) && ((r = document.createRange()).setStart(e, e.nodeValue.length), r.collapse(!0), n.removeAllRanges(), n.addRange(r)), t instanceof HTMLElement && t.focus())
            }(t))
        }, h.propTypes = {
            html: f.string.isRequired,
            onChange: f.func,
            disabled: f.bool,
            tagName: f.string,
            className: f.string,
            style: f.object,
            innerRef: f.oneOfType([f.object, f.func])
        }, h);

        function h() {
            var o = null !== d && d.apply(this, arguments) || this;
            return o.lastHtml = o.props.html, o.el = "function" == typeof o.props.innerRef ? {
                current: null
            } : s.createRef(), o.getEl = function() {
                return (o.props.innerRef && "function" != typeof o.props.innerRef ? o.props.innerRef : o.el).current
            }, o.emitChange = function(t) {
                var e, n, r = o.getEl();
                r && (e = r.innerHTML, o.props.onChange && e !== o.lastHtml && (n = Object.assign({}, t, {
                    target: {
                        value: e
                    }
                }), o.props.onChange(n)), o.lastHtml = e)
            }, o
        }
        e.default = y
    }, function(t, e, n) {
        "use strict";
        var r = n(49);
        t.exports = Function.prototype.bind || r
    }, function(t, e, i) {
        "use strict";
        var n, r, o = function() {
                return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n
            },
            a = (r = {}, function(t) {
                if (void 0 === r[t]) {
                    var e = document.querySelector(t);
                    if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
                        e = e.contentDocument.head
                    } catch (t) {
                        e = null
                    }
                    r[t] = e
                }
                return r[t]
            }),
            f = [];

        function p(t) {
            for (var e = -1, n = 0; n < f.length; n++)
                if (f[n].identifier === t) {
                    e = n;
                    break
                } return e
        }

        function c(t, e) {
            for (var n = {}, r = [], o = 0; o < t.length; o++) {
                var i = t[o],
                    a = e.base ? i[0] + e.base : i[0],
                    u = n[a] || 0,
                    c = "".concat(a, " ").concat(u);
                n[a] = u + 1;
                var s = p(c),
                    l = {
                        css: i[1],
                        media: i[2],
                        sourceMap: i[3]
                    }; - 1 !== s ? (f[s].references++, f[s].updater(l)) : f.push({
                    identifier: c,
                    updater: function(e, t) {
                        var n, r, o; {
                            var i;
                            o = t.singleton ? (i = m++, n = h = h || d(t), r = y.bind(null, n, i, !1), y.bind(null, n, i, !0)) : (n = d(t), r = function(t, e, n) {
                                var r = n.css,
                                    o = n.media,
                                    i = n.sourceMap;
                                o ? t.setAttribute("media", o) : t.removeAttribute("media");
                                i && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */"));
                                if (t.styleSheet) t.styleSheet.cssText = r;
                                else {
                                    for (; t.firstChild;) t.removeChild(t.firstChild);
                                    t.appendChild(document.createTextNode(r))
                                }
                            }.bind(null, n, t), function() {
                                ! function(t) {
                                    if (null === t.parentNode) return;
                                    t.parentNode.removeChild(t)
                                }(n)
                            })
                        }
                        return r(e),
                            function(t) {
                                if (t) {
                                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                                    r(e = t)
                                } else o()
                            }
                    }(l, e),
                    references: 1
                }), r.push(c)
            }
            return r
        }

        function d(t) {
            var e, n = document.createElement("style"),
                r = t.attributes || {};
            if (void 0 !== r.nonce || (e = i.nc) && (r.nonce = e), Object.keys(r).forEach(function(t) {
                    n.setAttribute(t, r[t])
                }), "function" == typeof t.insert) t.insert(n);
            else {
                var o = a(t.insert || "head");
                if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                o.appendChild(n)
            }
            return n
        }
        var u, s = (u = [], function(t, e) {
            return u[t] = e, u.filter(Boolean).join("\n")
        });

        function y(t, e, n, r) {
            var o, i, a = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
            t.styleSheet ? t.styleSheet.cssText = s(e, a) : (o = document.createTextNode(a), (i = t.childNodes)[e] && t.removeChild(i[e]), i.length ? t.insertBefore(o, i[e]) : t.appendChild(o))
        }
        var h = null,
            m = 0;
        t.exports = function(t, a) {
            (a = a || {}).singleton || "boolean" == typeof a.singleton || (a.singleton = o());
            var u = c(t = t || [], a);
            return function(t) {
                if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
                    for (var e = 0; e < u.length; e++) {
                        var n = p(u[e]);
                        f[n].references--
                    }
                    for (var r = c(t, a), o = 0; o < u.length; o++) {
                        var i = p(u[o]);
                        0 === f[i].references && (f[i].updater(), f.splice(i, 1))
                    }
                    u = r
                }
            }
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(n) {
            var c = [];
            return c.toString = function() {
                return this.map(function(t) {
                    var e = function(t, e) {
                        var n = t[1] || "",
                            r = t[3];
                        if (!r) return n;
                        if (e && "function" == typeof btoa) {
                            var o = function(t) {
                                    var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                                        n = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);
                                    return "/*# ".concat(n, " */")
                                }(r),
                                i = r.sources.map(function(t) {
                                    return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */")
                                });
                            return [n].concat(i).concat([o]).join("\n")
                        }
                        return [n].join("\n")
                    }(t, n);
                    return t[2] ? "@media ".concat(t[2], " {").concat(e, "}") : e
                }).join("")
            }, c.i = function(t, e, n) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                var r = {};
                if (n)
                    for (var o = 0; o < this.length; o++) {
                        var i = this[o][0];
                        null != i && (r[i] = !0)
                    }
                for (var a = 0; a < t.length; a++) {
                    var u = [].concat(t[a]);
                    n && r[u[0]] || (e && (u[2] ? u[2] = "".concat(e, " and ").concat(u[2]) : u[2] = e), c.push(u))
                }
            }, c
        }
    }, function(t, e, n) {
        t.exports = n(74)()
    }, function(t, e, n) {
        "use strict";
        t.exports = function(n, r) {
            return function() {
                for (var t = new Array(arguments.length), e = 0; e < t.length; e++) t[e] = arguments[e];
                return n.apply(r, t)
            }
        }
    }, function(t, e, n) {
        "use strict";
        var a = n(4);

        function u(t) {
            return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        t.exports = function(t, e, n) {
            if (!e) return t;
            var r, o, i = n ? n(e) : a.isURLSearchParams(e) ? e.toString() : (r = [], a.forEach(e, function(t, e) {
                null != t && (a.isArray(t) ? e += "[]" : t = [t], a.forEach(t, function(t) {
                    a.isDate(t) ? t = t.toISOString() : a.isObject(t) && (t = JSON.stringify(t)), r.push(u(e) + "=" + u(t))
                }))
            }), r.join("&"));
            return i && (-1 !== (o = t.indexOf("#")) && (t = t.slice(0, o)), t += (-1 === t.indexOf("?") ? "?" : "&") + i), t
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return !(!t || !t.__CANCEL__)
        }
    }, function(u, t, c) {
        "use strict";
        (function(t) {
            var n = c(4),
                r = c(34),
                e = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function o(t, e) {
                !n.isUndefined(t) && n.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
            }
            var i, a = {
                adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (i = c(16)), i),
                transformRequest: [function(t, e) {
                    return r(e, "Accept"), r(e, "Content-Type"), n.isFormData(t) || n.isArrayBuffer(t) || n.isBuffer(t) || n.isStream(t) || n.isFile(t) || n.isBlob(t) ? t : n.isArrayBufferView(t) ? t.buffer : n.isURLSearchParams(t) ? (o(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : n.isObject(t) ? (o(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t
                }],
                transformResponse: [function(t) {
                    if ("string" == typeof t) try {
                        t = JSON.parse(t)
                    } catch (t) {}
                    return t
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(t) {
                    return 200 <= t && t < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            n.forEach(["delete", "get", "head"], function(t) {
                a.headers[t] = {}
            }), n.forEach(["post", "put", "patch"], function(t) {
                a.headers[t] = n.merge(e)
            }), u.exports = a
        }).call(this, c(33))
    }, function(t, e, f) {
        "use strict";
        var p = f(4),
            d = f(35),
            y = f(13),
            h = f(37),
            m = f(40),
            b = f(41),
            g = f(17);
        t.exports = function(l) {
            return new Promise(function(n, r) {
                var o = l.data,
                    i = l.headers;
                p.isFormData(o) && delete i["Content-Type"];
                var t, e, a = new XMLHttpRequest;
                l.auth && (t = l.auth.username || "", e = l.auth.password || "", i.Authorization = "Basic " + btoa(t + ":" + e));
                var u, c, s = h(l.baseURL, l.url);
                if (a.open(l.method.toUpperCase(), y(s, l.params, l.paramsSerializer), !0), a.timeout = l.timeout, a.onreadystatechange = function() {
                        var t, e;
                        a && 4 === a.readyState && (0 !== a.status || a.responseURL && 0 === a.responseURL.indexOf("file:")) && (t = "getAllResponseHeaders" in a ? m(a.getAllResponseHeaders()) : null, e = {
                            data: l.responseType && "text" !== l.responseType ? a.response : a.responseText,
                            status: a.status,
                            statusText: a.statusText,
                            headers: t,
                            config: l,
                            request: a
                        }, d(n, r, e), a = null)
                    }, a.onabort = function() {
                        a && (r(g("Request aborted", l, "ECONNABORTED", a)), a = null)
                    }, a.onerror = function() {
                        r(g("Network Error", l, null, a)), a = null
                    }, a.ontimeout = function() {
                        var t = "timeout of " + l.timeout + "ms exceeded";
                        l.timeoutErrorMessage && (t = l.timeoutErrorMessage), r(g(t, l, "ECONNABORTED", a)), a = null
                    }, p.isStandardBrowserEnv() && (u = f(42), (c = (l.withCredentials || b(s)) && l.xsrfCookieName ? u.read(l.xsrfCookieName) : void 0) && (i[l.xsrfHeaderName] = c)), "setRequestHeader" in a && p.forEach(i, function(t, e) {
                        void 0 === o && "content-type" === e.toLowerCase() ? delete i[e] : a.setRequestHeader(e, t)
                    }), p.isUndefined(l.withCredentials) || (a.withCredentials = !!l.withCredentials), l.responseType) try {
                    a.responseType = l.responseType
                } catch (t) {
                    if ("json" !== l.responseType) throw t
                }
                "function" == typeof l.onDownloadProgress && a.addEventListener("progress", l.onDownloadProgress), "function" == typeof l.onUploadProgress && a.upload && a.upload.addEventListener("progress", l.onUploadProgress), l.cancelToken && l.cancelToken.promise.then(function(t) {
                    a && (a.abort(), r(t), a = null)
                }), void 0 === o && (o = null), a.send(o)
            })
        }
    }, function(t, e, n) {
        "use strict";
        var a = n(36);
        t.exports = function(t, e, n, r, o) {
            var i = new Error(t);
            return a(i, e, n, r, o)
        }
    }, function(t, e, n) {
        "use strict";
        var c = n(4);
        t.exports = function(e, n) {
            n = n || {};
            var r = {},
                t = ["url", "method", "params", "data"],
                o = ["headers", "auth", "proxy"],
                i = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
            c.forEach(t, function(t) {
                void 0 !== n[t] && (r[t] = n[t])
            }), c.forEach(o, function(t) {
                c.isObject(n[t]) ? r[t] = c.deepMerge(e[t], n[t]) : void 0 !== n[t] ? r[t] = n[t] : c.isObject(e[t]) ? r[t] = c.deepMerge(e[t]) : void 0 !== e[t] && (r[t] = e[t])
            }), c.forEach(i, function(t) {
                void 0 !== n[t] ? r[t] = n[t] : void 0 !== e[t] && (r[t] = e[t])
            });
            var a = t.concat(o).concat(i),
                u = Object.keys(n).filter(function(t) {
                    return -1 === a.indexOf(t)
                });
            return c.forEach(u, function(t) {
                void 0 !== n[t] ? r[t] = n[t] : void 0 !== e[t] && (r[t] = e[t])
            }), r
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            this.message = t
        }
        r.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, r.prototype.__CANCEL__ = !0, t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(8),
            o = n(5),
            i = o("%Function.prototype.apply%"),
            a = o("%Function.prototype.call%"),
            u = o("%Reflect.apply%", !0) || r.call(a, i);
        t.exports = function() {
            return u(r, a, arguments)
        }, t.exports.apply = function() {
            return u(r, i, arguments)
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function a(t, e, n, r) {
            var o;
            e in t && ("function" != typeof(o = r) || "[object Function]" !== i.call(o) || !r()) || (f ? l(t, e, {
                configurable: !0,
                enumerable: !1,
                value: n,
                writable: !0
            }) : t[e] = n)
        }

        function o(t, e, n) {
            var r = 2 < arguments.length ? n : {},
                o = u(e);
            c && (o = s.call(o, Object.getOwnPropertySymbols(e)));
            for (var i = 0; i < o.length; i += 1) a(t, o[i], e[o[i]], r[o[i]])
        }
        var u = n(54),
            c = "function" == typeof Symbol && "symbol" === r(Symbol("foo")),
            i = Object.prototype.toString,
            s = Array.prototype.concat,
            l = Object.defineProperty,
            f = l && function() {
                var t = {};
                try {
                    for (var e in l(t, "x", {
                            enumerable: !1,
                            value: t
                        }), t) return !1;
                    return t.x === t
                } catch (t) {
                    return !1
                }
            }();
        o.supportsDescriptors = !!f, t.exports = o
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var o = Object.prototype.toString;
        t.exports = function(t) {
            var e = o.call(t);
            return "[object Arguments]" === e || "[object Array]" !== e && null !== t && "object" === r(t) && "number" == typeof t.length && 0 <= t.length && "[object Function]" === o.call(t.callee)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(56),
            o = n(57),
            i = n(58)("String.prototype.replace"),
            a = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
            u = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
        t.exports = function() {
            var t = o(r(this));
            return i(i(t, a, ""), u, "")
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(23);
        t.exports = function() {
            return String.prototype.trim && "Ã¢â‚¬â€¹" === "Ã¢â‚¬â€¹".trim() ? String.prototype.trim : r
        }
    }, function(t, e, n) {
        t.exports = n(28)
    }, function(t, e, n) {
        "use strict";

        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function r(t) {
            u(!1, t)
        }

        function i(t) {
            var e = t % 100,
                n = e % 10;
            return 11 != e && 1 == n ? 0 : 2 <= n && n <= 4 && !(12 <= e && e <= 14) ? 1 : 2
        }
        var a = n(45),
            u = n(47),
            d = n(48),
            y = n(50),
            h = String.prototype.replace,
            m = String.prototype.split,
            b = "||||",
            g = {
                pluralTypes: {
                    arabic: function(t) {
                        if (t < 3) return t;
                        var e = t % 100;
                        return 3 <= e && e <= 10 ? 3 : 11 <= e ? 4 : 5
                    },
                    bosnian_serbian: i,
                    chinese: function() {
                        return 0
                    },
                    croatian: i,
                    french: function(t) {
                        return 1 < t ? 1 : 0
                    },
                    german: function(t) {
                        return 1 !== t ? 1 : 0
                    },
                    russian: i,
                    lithuanian: function(t) {
                        return t % 10 == 1 && t % 100 != 11 ? 0 : 2 <= t % 10 && t % 10 <= 9 && (t % 100 < 11 || 19 < t % 100) ? 1 : 2
                    },
                    czech: function(t) {
                        return 1 === t ? 0 : 2 <= t && t <= 4 ? 1 : 2
                    },
                    polish: function(t) {
                        if (1 === t) return 0;
                        var e = t % 10;
                        return 2 <= e && e <= 4 && (t % 100 < 10 || 20 <= t % 100) ? 1 : 2
                    },
                    icelandic: function(t) {
                        return t % 10 != 1 || t % 100 == 11 ? 1 : 0
                    },
                    slovenian: function(t) {
                        var e = t % 100;
                        return 1 == e ? 0 : 2 == e ? 1 : 3 == e || 4 == e ? 2 : 3
                    }
                },
                pluralTypeToLanguages: {
                    arabic: ["ar"],
                    bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
                    chinese: ["id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh"],
                    croatian: ["hr", "hr-HR"],
                    german: ["fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv", "tr"],
                    french: ["fr", "tl", "pt-br"],
                    russian: ["ru", "ru-RU"],
                    lithuanian: ["lt"],
                    czech: ["cs", "cs-CZ", "sk"],
                    polish: ["pl"],
                    icelandic: ["is"],
                    slovenian: ["sl-SL"]
                }
            };

        function v(t, e) {
            var n, r, o = (n = t.pluralTypeToLanguages, r = {}, a(n, function(t, e) {
                a(t, function(t) {
                    r[t] = e
                })
            }), r);
            return o[e] || o[m.call(e, /-/, 1)[0]] || o.en
        }

        function c(t) {
            return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }
        var _ = /%\{(.*?)\}/g;

        function s(t, e, n, r, o) {
            if ("string" != typeof t) throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
            if (null == e) return t;
            var i, a, u, c, s = t,
                l = r || _,
                f = o || g,
                p = "number" == typeof e ? {
                    smart_count: e
                } : e;
            return null != p.smart_count && s && (i = m.call(s, b), s = y(i[a = f, u = n || "en", c = p.smart_count, a.pluralTypes[v(a, u)](c)] || i[0])), s = h.call(s, l, function(t, e) {
                return d(p, e) && null != p[e] ? p[e] : t
            })
        }

        function l(t) {
            var e = t || {};
            this.phrases = {}, this.extend(e.phrases || {}), this.currentLocale = e.locale || "en";
            var n = e.allowMissing ? s : null;
            this.onMissingKey = "function" == typeof e.onMissingKey ? e.onMissingKey : n, this.warn = e.warn || r, this.tokenRegex = function(t) {
                var e = t && t.prefix || "%{",
                    n = t && t.suffix || "}";
                if (e === b || n === b) throw new RangeError('"' + b + '" token is reserved for pluralization');
                return new RegExp(c(e) + "(.*?)" + c(n), "g")
            }(e.interpolation), this.pluralRules = e.pluralRules || g
        }
        l.prototype.locale = function(t) {
            return t && (this.currentLocale = t), this.currentLocale
        }, l.prototype.extend = function(t, r) {
            a(t, function(t, e) {
                var n = r ? r + "." + e : e;
                "object" === o(t) ? this.extend(t, n) : this.phrases[n] = t
            }, this)
        }, l.prototype.unset = function(t, r) {
            "string" == typeof t ? delete this.phrases[t] : a(t, function(t, e) {
                var n = r ? r + "." + e : e;
                "object" === o(t) ? this.unset(t, n) : delete this.phrases[n]
            }, this)
        }, l.prototype.clear = function() {
            this.phrases = {}
        }, l.prototype.replace = function(t) {
            this.clear(), this.extend(t)
        }, l.prototype.t = function(t, e) {
            var n, r, o = null == e ? {} : e;
            return "string" == typeof this.phrases[t] ? n = this.phrases[t] : "string" == typeof o._ ? n = o._ : r = this.onMissingKey ? (0, this.onMissingKey)(t, o, this.currentLocale, this.tokenRegex, this.pluralRules) : (this.warn('Missing translation for key: "' + t + '"'), t), "string" == typeof n && (r = s(n, o, this.currentLocale, this.tokenRegex, this.pluralRules)), r
        }, l.prototype.has = function(t) {
            return d(this.phrases, t)
        }, l.transformPhrase = function(t, e, n) {
            return s(t, e, n)
        }, t.exports = l
    }, , function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(12),
            i = n(29),
            a = n(18);

        function u(t) {
            var e = new i(t),
                n = o(i.prototype.request, e);
            return r.extend(n, i.prototype, e), r.extend(n, e), n
        }
        var c = u(n(15));
        c.Axios = i, c.create = function(t) {
            return u(a(c.defaults, t))
        }, c.Cancel = n(19), c.CancelToken = n(43), c.isCancel = n(14), c.all = function(t) {
            return Promise.all(t)
        }, c.spread = n(44), t.exports = c, t.exports.default = c
    }, function(t, e, n) {
        "use strict";
        var o = n(4),
            r = n(13),
            i = n(30),
            a = n(31),
            u = n(18);

        function c(t) {
            this.defaults = t, this.interceptors = {
                request: new i,
                response: new i
            }
        }
        c.prototype.request = function(t, e) {
            "string" == typeof t ? (t = e || {}).url = arguments[0] : t = t || {}, (t = u(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
            var n = [a, void 0],
                r = Promise.resolve(t);
            for (this.interceptors.request.forEach(function(t) {
                    n.unshift(t.fulfilled, t.rejected)
                }), this.interceptors.response.forEach(function(t) {
                    n.push(t.fulfilled, t.rejected)
                }); n.length;) r = r.then(n.shift(), n.shift());
            return r
        }, c.prototype.getUri = function(t) {
            return t = u(this.defaults, t), r(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
        }, o.forEach(["delete", "get", "head", "options"], function(n) {
            c.prototype[n] = function(t, e) {
                return this.request(o.merge(e || {}, {
                    method: n,
                    url: t
                }))
            }
        }), o.forEach(["post", "put", "patch"], function(r) {
            c.prototype[r] = function(t, e, n) {
                return this.request(o.merge(n || {}, {
                    method: r,
                    url: t,
                    data: e
                }))
            }
        }), t.exports = c
    }, function(t, e, n) {
        "use strict";
        var r = n(4);

        function o() {
            this.handlers = []
        }
        o.prototype.use = function(t, e) {
            return this.handlers.push({
                fulfilled: t,
                rejected: e
            }), this.handlers.length - 1
        }, o.prototype.eject = function(t) {
            this.handlers[t] && (this.handlers[t] = null)
        }, o.prototype.forEach = function(e) {
            r.forEach(this.handlers, function(t) {
                null !== t && e(t)
            })
        }, t.exports = o
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(32),
            i = n(14),
            a = n(15);

        function u(t) {
            t.cancelToken && t.cancelToken.throwIfRequested()
        }
        t.exports = function(e) {
            return u(e), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
                delete e.headers[t]
            }), (e.adapter || a.adapter)(e).then(function(t) {
                return u(e), t.data = o(t.data, t.headers, e.transformResponse), t
            }, function(t) {
                return i(t) || (u(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
            })
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(4);
        t.exports = function(e, n, t) {
            return r.forEach(t, function(t) {
                e = t(e, n)
            }), e
        }
    }, function(t, e) {
        var n, r, o = t.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function u(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (t) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (t) {
                r = a
            }
        }();
        var c, s = [],
            l = !1,
            f = -1;

        function p() {
            l && c && (l = !1, c.length ? s = c.concat(s) : f = -1, s.length && d())
        }

        function d() {
            if (!l) {
                var t = u(p);
                l = !0;
                for (var e = s.length; e;) {
                    for (c = s, s = []; ++f < e;) c && c[f].run();
                    f = -1, e = s.length
                }
                c = null, l = !1,
                    function(e) {
                        if (r === clearTimeout) return clearTimeout(e);
                        if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                        try {
                            r(e)
                        } catch (t) {
                            try {
                                return r.call(null, e)
                            } catch (t) {
                                return r.call(this, e)
                            }
                        }
                    }(t)
            }
        }

        function y(t, e) {
            this.fun = t, this.array = e
        }

        function h() {}
        o.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            s.push(new y(t, e)), 1 !== s.length || l || u(d)
        }, y.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function(t) {
            return []
        }, o.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    }, function(t, e, n) {
        "use strict";
        var o = n(4);
        t.exports = function(n, r) {
            o.forEach(n, function(t, e) {
                e !== r && e.toUpperCase() === r.toUpperCase() && (n[r] = t, delete n[e])
            })
        }
    }, function(t, e, n) {
        "use strict";
        var o = n(17);
        t.exports = function(t, e, n) {
            var r = n.config.validateStatus;
            !r || r(n.status) ? t(n) : e(o("Request failed with status code " + n.status, n.config, null, n.request, n))
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e, n, r, o) {
            return t.config = e, n && (t.code = n), t.request = r, t.response = o, t.isAxiosError = !0, t.toJSON = function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                }
            }, t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(38),
            o = n(39);
        t.exports = function(t, e) {
            return t && !r(e) ? o(t, e) : e
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
        }
    }, function(t, e, n) {
        "use strict";
        var i = n(4),
            a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        t.exports = function(t) {
            var e, n, r, o = {};
            return t && i.forEach(t.split("\n"), function(t) {
                if (r = t.indexOf(":"), e = i.trim(t.substr(0, r)).toLowerCase(), n = i.trim(t.substr(r + 1)), e) {
                    if (o[e] && 0 <= a.indexOf(e)) return;
                    o[e] = "set-cookie" === e ? (o[e] ? o[e] : []).concat([n]) : o[e] ? o[e] + ", " + n : n
                }
            }), o
        }
    }, function(t, e, n) {
        "use strict";
        var r, o, i, a = n(4);

        function u(t) {
            var e = t;
            return o && (i.setAttribute("href", e), e = i.href), i.setAttribute("href", e), {
                href: i.href,
                protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                host: i.host,
                search: i.search ? i.search.replace(/^\?/, "") : "",
                hash: i.hash ? i.hash.replace(/^#/, "") : "",
                hostname: i.hostname,
                port: i.port,
                pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
            }
        }
        t.exports = a.isStandardBrowserEnv() ? (o = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a"), r = u(window.location.href), function(t) {
            var e = a.isString(t) ? u(t) : t;
            return e.protocol === r.protocol && e.host === r.host
        }) : function() {
            return !0
        }
    }, function(t, e, n) {
        "use strict";
        var u = n(4);
        t.exports = u.isStandardBrowserEnv() ? {
            write: function(t, e, n, r, o, i) {
                var a = [];
                a.push(t + "=" + encodeURIComponent(e)), u.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), u.isString(r) && a.push("path=" + r), u.isString(o) && a.push("domain=" + o), !0 === i && a.push("secure"), document.cookie = a.join("; ")
            },
            read: function(t) {
                var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                return e ? decodeURIComponent(e[3]) : null
            },
            remove: function(t) {
                this.write(t, "", Date.now() - 864e5)
            }
        } : {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(19);

        function o(t) {
            if ("function" != typeof t) throw new TypeError("executor must be a function.");
            var e;
            this.promise = new Promise(function(t) {
                e = t
            });
            var n = this;
            t(function(t) {
                n.reason || (n.reason = new r(t), e(n.reason))
            })
        }
        o.prototype.throwIfRequested = function() {
            if (this.reason) throw this.reason
        }, o.source = function() {
            var e;
            return {
                token: new o(function(t) {
                    e = t
                }),
                cancel: e
            }
        }, t.exports = o
    }, function(t, e, n) {
        "use strict";
        t.exports = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
    }, function(t, e, n) {
        "use strict";
        var o = n(46),
            i = Object.prototype.toString,
            a = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, n) {
            if (!o(e)) throw new TypeError("iterator must be a function");
            var r;
            3 <= arguments.length && (r = n), ("[object Array]" === i.call(t) ? function(t, e, n) {
                for (var r = 0, o = t.length; r < o; r++) a.call(t, r) && (null == n ? e(t[r], r, t) : e.call(n, t[r], r, t))
            } : "string" == typeof t ? function(t, e, n) {
                for (var r = 0, o = t.length; r < o; r++) null == n ? e(t.charAt(r), r, t) : e.call(n, t.charAt(r), r, t)
            } : function(t, e, n) {
                for (var r in t) a.call(t, r) && (null == n ? e(t[r], r, t) : e.call(n, t[r], r, t))
            })(t, e, r)
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var o, i, a = Function.prototype.toString,
            u = "object" === ("undefined" == typeof Reflect ? "undefined" : r(Reflect)) && null !== Reflect && Reflect.apply;
        if ("function" == typeof u && "function" == typeof Object.defineProperty) try {
            o = Object.defineProperty({}, "length", {
                get: function() {
                    throw i
                }
            }), i = {}
        } catch (t) {
            u = null
        } else u = null;

        function c(t) {
            try {
                var e = a.call(t);
                return s.test(e)
            } catch (t) {
                return
            }
        }
        var s = /^\s*class\b/,
            l = Object.prototype.toString,
            f = "function" == typeof Symbol && "symbol" === r(Symbol.toStringTag);
        t.exports = u ? function(t) {
            if (!t) return !1;
            if ("function" != typeof t && "object" !== r(t)) return !1;
            if ("function" == typeof t && !t.prototype) return !0;
            try {
                u(t, null, o)
            } catch (t) {
                if (t !== i) return !1
            }
            return !c(t)
        } : function(t) {
            if (!t) return !1;
            if ("function" != typeof t && "object" !== r(t)) return !1;
            if ("function" == typeof t && !t.prototype) return !0;
            if (f) return function(t) {
                try {
                    return c(t) ? !1 : (a.call(t), !0)
                } catch (t) {
                    return !1
                }
            }(t);
            if (c(t)) return !1;
            var e = l.call(t);
            return "[object Function]" === e || "[object GeneratorFunction]" === e
        }
    }, function(t, e, n) {
        "use strict";
        var r = function() {};
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(8);
        t.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
    }, function(t, e, n) {
        "use strict";
        var c = Array.prototype.slice,
            s = Object.prototype.toString;
        t.exports = function(e) {
            var n = this;
            if ("function" != typeof n || "[object Function]" !== s.call(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
            for (var r, t, o = c.call(arguments, 1), i = Math.max(0, n.length - o.length), a = [], u = 0; u < i; u++) a.push("$" + u);
            return r = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(function() {
                if (this instanceof r) {
                    var t = n.apply(this, o.concat(c.call(arguments)));
                    return Object(t) === t ? t : this
                }
                return n.apply(e, o.concat(c.call(arguments)))
            }), n.prototype && ((t = function() {}).prototype = n.prototype, r.prototype = new t, t.prototype = null), r
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(20),
            o = n(21),
            i = n(23),
            a = n(24),
            u = n(59),
            c = r(a());
        o(c, {
            getPolyfill: a,
            implementation: i,
            shim: u
        }), t.exports = c
    }, function(o, t, i) {
        "use strict";
        (function(t) {
            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var n = t.Symbol,
                r = i(53);
            o.exports = function() {
                return "function" == typeof n && ("function" == typeof Symbol && ("symbol" === e(n("foo")) && ("symbol" === e(Symbol("bar")) && r())))
            }
        }).call(this, i(52))
    }, function(t, e) {
        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var r = function() {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (t) {
            "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (r = window)
        }
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        t.exports = function() {
            if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
            if ("symbol" === i(Symbol.iterator)) return !0;
            var t = {},
                e = Symbol("test"),
                n = Object(e);
            if ("string" == typeof e) return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
            for (e in t[e] = 42, t) return !1;
            if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
            if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
            var r = Object.getOwnPropertySymbols(t);
            if (1 !== r.length || r[0] !== e) return !1;
            if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
            if ("function" == typeof Object.getOwnPropertyDescriptor) {
                var o = Object.getOwnPropertyDescriptor(t, e);
                if (42 !== o.value || !0 !== o.enumerable) return !1
            }
            return !0
        }
    }, function(t, e, n) {
        "use strict";
        var r = Array.prototype.slice,
            o = n(22),
            i = Object.keys,
            a = i ? function(t) {
                return i(t)
            } : n(55),
            u = Object.keys;
        a.shim = function() {
            return Object.keys ? function() {
                var t = Object.keys(arguments);
                return t && t.length === arguments.length
            }(1, 2) || (Object.keys = function(t) {
                return o(t) ? u(r.call(t)) : u(t)
            }) : Object.keys = a, Object.keys || a
        }, t.exports = a
    }, function(t, e, n) {
        "use strict";

        function p(t) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var d, y, h, r, m, b, g, v, o, _, i;
        Object.keys || (d = Object.prototype.hasOwnProperty, y = Object.prototype.toString, h = n(22), r = Object.prototype.propertyIsEnumerable, m = !r.call({
            toString: null
        }, "toString"), b = r.call(function() {}, "prototype"), g = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], v = function(t) {
            var e = t.constructor;
            return e && e.prototype === t
        }, o = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
        }, _ = function() {
            if ("undefined" == typeof window) return !1;
            for (var t in window) try {
                if (!o["$" + t] && d.call(window, t) && null !== window[t] && "object" === p(window[t])) try {
                    v(window[t])
                } catch (t) {
                    return !0
                }
            } catch (t) {
                return !0
            }
            return !1
        }(), i = function(t) {
            var e = null !== t && "object" === p(t),
                n = "[object Function]" === y.call(t),
                r = h(t),
                o = e && "[object String]" === y.call(t),
                i = [];
            if (!e && !n && !r) throw new TypeError("Object.keys called on a non-object");
            var a = b && n;
            if (o && 0 < t.length && !d.call(t, 0))
                for (var u = 0; u < t.length; ++u) i.push(String(u));
            if (r && 0 < t.length)
                for (var c = 0; c < t.length; ++c) i.push(String(c));
            else
                for (var s in t) a && "prototype" === s || !d.call(t, s) || i.push(String(s));
            if (m)
                for (var l = function(t) {
                        if ("undefined" == typeof window || !_) return v(t);
                        try {
                            return v(t)
                        } catch (t) {
                            return !1
                        }
                    }(t), f = 0; f < g.length; ++f) l && "constructor" === g[f] || !d.call(t, g[f]) || i.push(g[f]);
            return i
        }), t.exports = i
    }, function(t, e, n) {
        "use strict";
        var r = n(5)("%TypeError%");
        t.exports = function(t, e) {
            if (null == t) throw new r(e || "Cannot call method on " + t);
            return t
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var o = n(5),
            i = o("%String%"),
            a = o("%TypeError%");
        t.exports = function(t) {
            if ("symbol" === r(t)) throw new a("Cannot convert a Symbol value to a string");
            return i(t)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(5),
            o = n(20),
            i = o(r("String.prototype.indexOf"));
        t.exports = function(t, e) {
            var n = r(t, !!e);
            return "function" == typeof n && i(t, ".prototype.") ? o(n) : n
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(21),
            o = n(24);
        t.exports = function() {
            var t = o();
            return r(String.prototype, {
                trim: t
            }, {
                trim: function() {
                    return String.prototype.trim !== t
                }
            }), t
        }
    }, function(t, e, n) {
        var r = {
            "./messages_ar.json": 61,
            "./messages_de.json": 62,
            "./messages_es.json": 63,
            "./messages_gl.json": 64,
            "./messages_hi.json": 65,
            "./messages_it.json": 66,
            "./messages_sv.json": 67,
            "./messages_ur.json": 68
        };

        function o(t) {
            var e = i(t);
            return n(e)
        }

        function i(t) {
            if (n.o(r, t)) return r[t];
            var e = new Error("Cannot find module '" + t + "'");
            throw e.code = "MODULE_NOT_FOUND", e
        }
        o.keys = function() {
            return Object.keys(r)
        }, o.resolve = i, (t.exports = o).id = 60
    }, function(t) {
        t.exports = JSON.parse('{"Add a comment...":"Ã˜Â¥Ã˜Â¶Ã˜Â§Ã™ÂÃ˜Â© Ã˜ÂªÃ˜Â¹Ã™â€žÃ™Å Ã™â€š","Add a reply...":"Ã˜Â¥Ã˜Â¶Ã˜Â§Ã™ÂÃ˜Â© Ã˜Â±Ã˜Â¯","Add tag...":"Ã˜Â¥Ã˜Â¶Ã˜Â§Ã™ÂÃ˜Â© Ã˜Â¹Ã™â€žÃ˜Â§Ã™â€¦Ã˜Â©","Cancel":"Ã˜Â¥Ã™â€žÃ˜ÂºÃ˜Â§Ã˜Â¡","Close":"Ã˜Â¥Ã˜ÂºÃ™â€žÃ˜Â§Ã™â€š","Edit":"Edit","Delete":"Delete","Ok":"Ã˜ÂªÃ™â€¦"}')
    }, function(t) {
        t.exports = JSON.parse('{"Add a comment...":"Kommentar schreiben...","Add a reply...":"Antwort schreiben...","Add tag...":"Tag...","Cancel":"Abbrechen","Close":"Schliessen","Edit":"Bearbeiten","Delete":"LÃƒÂ¶schen","Ok":"Ok"}')
    }, function(t) {
        t.exports = JSON.parse('{"Add a comment...":"Agregar un comentario...","Add a reply...":"Agregar una respuesta...","Add tag...":"Etiquetar...","Cancel":"Cancelar","Close":"Cerrar","Edit":"Edit","Delete":"Delete","Ok":"Ok"}')
    }, function(t) {
        t.exports = JSON.parse('{"Add a comment...":"Engadir un comentario...","Add a reply...":"Engadir unha resposta...","Add tag...":"Etiquetar...","Cancel":"Cancelar","Close":"Pechar","Edit":"Edit","Delete":"Delete","Ok":"Ok"}')
    }, function(t) {
        t.exports = JSON.parse('{"Add a comment...":"Ã Â¤Å¸Ã Â¤Â¿Ã Â¤ÂªÃ Â¥ÂÃ Â¤ÂªÃ Â¤Â£Ã Â¥â‚¬ Ã Â¤Å“Ã Â¥â€¹Ã Â¤Â¡Ã Â¤Â¼Ã Â¥â€¡Ã Â¤â€š","Add a reply...":"Ã Â¤Å“Ã Â¤ÂµÃ Â¤Â¾Ã Â¤Â¬ Ã Â¤Â¦Ã Â¥â€¡Ã Â¤â€š","Add tag...":"Ã Â¤Å¸Ã Â¥Ë†Ã Â¤â€” Ã Â¤Â²Ã Â¤â€”Ã Â¤Â¾Ã Â¤ÂÃ Â¤Â","Cancel":"Ã Â¤Â°Ã Â¤Â¦Ã Â¥ÂÃ Â¤Â¦ Ã Â¤â€¢Ã Â¤Â°Ã Â¥â€¡Ã Â¤â€š","Close":"Ã Â¤Â¬Ã Â¤â€šÃ Â¤Â¦ Ã Â¤â€¢Ã Â¤Â°Ã Â¥â€¡Ã Â¤â€š","Edit":"Ã Â¤Â¸Ã Â¤â€šÃ Â¤ÂªÃ Â¤Â¾Ã Â¤Â¦Ã Â¤Â¿Ã Â¤Â¤ Ã Â¤â€¢Ã Â¤Â°Ã Â¥â€¡Ã Â¤â€š","Delete":"Ã Â¤Â¹Ã Â¤Å¸Ã Â¤Â¾Ã Â¤ÂÃ Â¤Â","Ok":"Ã Â¤ Ã Â¥â‚¬Ã Â¤â€¢ Ã Â¤Â¹Ã Â¥Ë†"}')
    }, function(t) {
        t.exports = JSON.parse('{"Add a comment...":"Commenta...","Add a reply...":"Rispondi...","Add tag...":"Aggiungi tag...","Cancel":"Annulla","Close":"Chiudi","Edit":"Edit","Delete":"Delete","Ok":"Ok"}')
    }, function(t) {
        t.exports = JSON.parse('{"Add a comment...":"Skriv en kommentar...","Add a reply...":"Skriv ett svar...","Add tag...":"Tagg...","Cancel":"Cancel","Close":"StÃƒÂ¤ng","Edit":"Edit","Delete":"Delete","Ok":"Ok"}')
    }, function(t) {
        t.exports = JSON.parse('{"Add a comment...":"Ã˜ÂªÃ˜Â¨Ã˜ÂµÃ˜Â±Ã›Â ÃšÂ©Ã˜Â±Ã›Å’ÃšÂº","Add a reply...":"Ã˜Â¬Ã™Ë†Ã˜Â§Ã˜Â¨ Ã˜Â¯Ã›Å’ÃšÂº","Add tag...":"Ã™Â¹Ã›Å’ÃšÂ¯ Ã™â€žÃšÂ¯Ã˜Â§Ã˜Â¦Ã›Å’ÃšÂº","Cancel":"Ã™â€¦Ã™â€ Ã˜Â³Ã™Ë†Ã˜Â® ÃšÂ©Ã˜Â±Ã›Å’ÃšÂº","Close":"Ã˜Â¨Ã™â€ Ã˜Â¯ ÃšÂ©Ã˜Â±Ã›Å’ÃšÂº","Edit":"Ã˜ÂªÃ˜Â±Ã™â€¦Ã›Å’Ã™â€¦ ÃšÂ©Ã˜Â±Ã›Å’ÃšÂº","Delete":"Ã›ÂÃ™Â¹Ã˜Â§Ã˜Â¦Ã›Å’ÃšÂº","Ok":"Ã™Â¹ÃšÂ¾Ã›Å’ÃšÂ© Ã›ÂÃ›â€™"}')
    }, function(t, e) {
        var n, r, o = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        o ? (n = new Uint8Array(16), t.exports = function() {
            return o(n), n
        }) : (r = new Array(16), t.exports = function() {
            for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), r[e] = t >>> ((3 & e) << 3) & 255;
            return r
        })
    }, function(t, e) {
        for (var r = [], n = 0; n < 256; ++n) r[n] = (n + 256).toString(16).substr(1);
        t.exports = function(t, e) {
            var n = e || 0;
            return [r[t[n++]], r[t[n++]], r[t[n++]], r[t[n++]], "-", r[t[n++]], r[t[n++]], "-", r[t[n++]], r[t[n++]], "-", r[t[n++]], r[t[n++]], "-", r[t[n++]], r[t[n++]], r[t[n++]], r[t[n++]], r[t[n++]], r[t[n++]]].join("")
        }
    }, function(t, e, n) {
        var r = n(9),
            o = n(72);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [t.i, o, ""]
        ]);
        var i = {
            insert: "head",
            singleton: !1
        };
        r(o, i);
        t.exports = o.locals || {}
    }, function(t, e, n) {
        (e = n(10)(!1)).push([t.i, ".r6o-drawing{cursor:none}.r6o-relations-layer.readonly .handle rect{pointer-events:none}.r6o-relations-layer{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.r6o-relations-layer circle{stroke:#515151;stroke-width:0.4;fill:#3f3f3f}.r6o-relations-layer path{stroke:#595959;stroke-linecap:round;stroke-linejoin:round;fill:transparent}.r6o-relations-layer path.connection{stroke-width:1.6;stroke-dasharray:2,3}.r6o-relations-layer path.arrow{stroke-width:1.8;fill:#7f7f7f}.r6o-relations-layer .handle rect{stroke-width:1;stroke:#595959;fill:#fff;pointer-events:auto;cursor:pointer}.r6o-relations-layer .handle text{font-size:10px}.r6o-relations-layer .hover{stroke:rgba(63,63,63,0.9);stroke-width:1.4;fill:transparent}\n", ""]), t.exports = e
    }, function(t, e, n) {
        "use strict";

        function d(t) {
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var y = Array.isArray,
            h = Object.keys,
            m = Object.prototype.hasOwnProperty;
        t.exports = function t(e, n) {
            if (e === n) return !0;
            if (e && n && "object" == d(e) && "object" == d(n)) {
                var r, o, i = y(e),
                    a = y(n);
                if (i && a) {
                    if ((f = e.length) != n.length) return !1;
                    for (r = f; 0 != r--;)
                        if (!t(e[r], n[r])) return !1;
                    return !0
                }
                if (i != a) return !1;
                var u = e instanceof Date,
                    c = n instanceof Date;
                if (u != c) return !1;
                if (u && c) return e.getTime() == n.getTime();
                var s = e instanceof RegExp,
                    l = n instanceof RegExp;
                if (s != l) return !1;
                if (s && l) return e.toString() == n.toString();
                var f, p = h(e);
                if ((f = p.length) !== h(n).length) return !1;
                for (r = f; 0 != r--;)
                    if (!m.call(n, p[r])) return !1;
                for (r = f; 0 != r--;)
                    if (!t(e[o = p[r]], n[o])) return !1;
                return !0
            }
            return e != e && n != n
        }
    }, function(t, e, n) {
        "use strict";
        var u = n(75);

        function r() {}

        function o() {}
        o.resetWarningCache = r, t.exports = function() {
            function t(t, e, n, r, o, i) {
                if (i !== u) {
                    var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw a.name = "Invariant Violation", a
                }
            }

            function e() {
                return t
            }
            var n = {
                array: t.isRequired = t,
                bool: t,
                func: t,
                number: t,
                object: t,
                string: t,
                symbol: t,
                any: t,
                arrayOf: e,
                element: t,
                elementType: t,
                instanceOf: e,
                node: t,
                objectOf: e,
                oneOf: e,
                oneOfType: e,
                shape: e,
                exact: e,
                checkPropTypes: o,
                resetWarningCache: r
            };
            return n.PropTypes = n
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function(t, e, n) {
        var r = n(9),
            o = n(77);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [t.i, o, ""]
        ]);
        var i = {
            insert: "head",
            singleton: !1
        };
        r(o, i);
        t.exports = o.locals || {}
    }, function(t, e, n) {
        (e = n(10)(!1)).push([t.i, ".r6o-editor{top:0;left:0}.a9s-annotationlayer{position:absolute;top:0;left:0;width:100%;height:100%}.a9s-annotationlayer .a9s-annotation rect,.a9s-annotationlayer .a9s-selection rect{fill:transparent;cursor:pointer;vector-effect:non-scaling-stroke}.a9s-annotationlayer .a9s-annotation rect.inner,.a9s-annotationlayer .a9s-selection rect.inner{stroke:#fff;stroke-width:1px}.a9s-annotationlayer .a9s-annotation rect.inner:hover,.a9s-annotationlayer .a9s-selection rect.inner:hover{stroke:#fff000}.a9s-annotationlayer .a9s-annotation rect.outer,.a9s-annotationlayer .a9s-selection rect.outer{stroke:rgba(0,0,0,0.7);stroke-width:3px}.a9s-annotationlayer .a9s-selection rect.inner{stroke:#fff000}.a9s-annotationlayer .a9s-annotation.editable rect.inner{stroke:#fff000;cursor:move}.a9s-annotationlayer .a9s-annotation.editable rect.inner:hover{fill:rgba(255,240,0,0.1)}.a9s-annotationlayer .resize-handle rect{fill:transparent;shape-rendering:crispEdges;stroke-linecap:round}.a9s-annotationlayer .resize-handle rect.handle-inner{stroke:#fff}.a9s-annotationlayer .resize-handle rect.handle-outer{stroke:#000}.a9s-annotationlayer .resize-handle:hover rect.handle-inner{stroke:#fff000}.a9s-annotationlayer .resize-handle.topleft rect{cursor:nw-resize}.a9s-annotationlayer .resize-handle.topleft .handle-outer{stroke-dasharray:13 26 13}.a9s-annotationlayer .resize-handle.topleft .handle-inner{stroke-dasharray:11 22 12}.a9s-annotationlayer .resize-handle.topright rect{cursor:ne-resize}.a9s-annotationlayer .resize-handle.topright .handle-outer{stroke-dasharray:26 26}.a9s-annotationlayer .resize-handle.topright .handle-inner{stroke-dasharray:22 22}.a9s-annotationlayer .resize-handle.bottomright rect{cursor:se-resize}.a9s-annotationlayer .resize-handle.bottomright .handle-outer{stroke-dasharray:0 13 26 13}.a9s-annotationlayer .resize-handle.bottomright .handle-inner{stroke-dasharray:0 11 22 11}.a9s-annotationlayer .resize-handle.bottomleft rect{cursor:sw-resize}.a9s-annotationlayer .resize-handle.bottomleft .handle-outer{stroke-dasharray:0 26 26}.a9s-annotationlayer .resize-handle.bottomleft .handle-inner{stroke-dasharray:0 22 22}\n", ""]), t.exports = e
    }, function(t, e, n) {
        var r = n(9),
            o = n(79);
        "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [t.i, o, ""]
        ]);
        var i = {
            insert: "head",
            singleton: !1
        };
        r(o, i);
        t.exports = o.locals || {}
    }, function(t, e, n) {
        (e = n(10)(!1)).push([t.i, ".r6o-btn{background-color:#4483c4;border:1px solid #4483c4;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;font-size:14px;margin:0;outline:none;text-decoration:none;white-space:nowrap;padding:6px 18px;min-width:70px;vertical-align:middle;-webkit-border-radius:2px;-khtml-border-radius:2px;-moz-border-radius:2px;border-radius:2px}.r6o-btn *{vertical-align:middle}.r6o-btn .icon{margin-right:4px}.r6o-btn:disabled{border-color:#a3c2e2 !important;background-color:#a3c2e2 !important}.r6o-btn:hover{background-color:#4f92d7;border-color:#4f92d7}.r6o-btn.outline{border:1px solid #4483c4;color:#4483c4;background-color:transparent;text-shadow:none}.r6o-annotation{background-color:rgba(255,165,0,0.2);border-bottom:2px solid orange;cursor:pointer}.r6o-selection{background-color:rgba(207,207,255,0.63);cursor:pointer}.hide-selection::selection,.hide-selection ::selection{background:transparent}.hide-selection::-moz-selection .hide-selection ::-moz-selection{background:transparent}.r6o-editable-text{max-height:120px;overflow:auto;outline:none;min-height:2em;font-size:14px;font-family:'Lato', sans-serif}.r6o-editable-text:empty:not(:focus):before{content:attr(data-placeholder);color:#c2c2c2}.r6o-widget.comment{font-size:14px;min-height:3em;background-color:#fff;position:relative;padding:8px 10px}.r6o-widget.comment .lastmodified{border:1px solid #e5e5e5;display:inline-block;border-radius:2px;padding:4px 5px;line-height:100%;font-size:12px}.r6o-widget.comment .lastmodified .lastmodified-at{color:#757575;padding-left:3px}.r6o-widget.comment .arrow-down{position:absolute;height:20px;width:20px;top:9px;right:9px;line-height:22px;background-color:#fff;text-align:center;-webkit-font-smoothing:antialiased;border:1px solid #e5e5e5;cursor:pointer;-webkit-border-radius:1px;-khtml-border-radius:1px;-moz-border-radius:1px;border-radius:1px}.r6o-widget.comment .arrow-down.menu-open{border-color:#4483c4}.r6o-widget.comment .comment-dropdown-menu{position:absolute;top:32px;right:8px;background-color:#fff;border:1px solid #e5e5e5;list-style-type:none;margin:0;padding:5px 0;z-index:9999;-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.2);-moz-box-shadow:0 2px 4px rgba(0,0,0,0.2);box-shadow:0 2px 4px rgba(0,0,0,0.2)}.r6o-widget.comment .comment-dropdown-menu li{padding:0 15px;cursor:pointer}.r6o-widget.comment .comment-dropdown-menu li:hover{background-color:#ecf0f1}.r6o-widget.comment.editable{background-color:#ecf0f1}.tags:empty{display:none}.tags{background-color:#ecf0f1;border-bottom:1px solid #e5e5e5;padding:1px 3px}.tags ul,.tags li{padding:0;margin:0;display:inline}.tags li{display:inline-block;margin:1px 1px 1px 0;padding:0;vertical-align:middle;overflow:hidden;font-size:12px;background-color:#fff;border:1px solid #d6d7d9;cursor:pointer;position:relative;line-height:180%;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-border-radius:2px;-khtml-border-radius:2px;-moz-border-radius:2px;border-radius:2px;-webkit-box-shadow:0 0 4px rgba(0,0,0,0.1);-moz-box-shadow:0 0 4px rgba(0,0,0,0.1);box-shadow:0 0 4px rgba(0,0,0,0.1)}.tags li .label{padding:2px 8px;display:inline-block}.tags li .delete-wrapper{display:inline-block;padding:2px 0;color:#fff;width:0;height:100%;background-color:#4483c4;-webkit-border-top-right-radius:2px;-webkit-border-bottom-right-radius:2px;-khtml-border-radius-topright:2px;-khtml-border-radius-bottomright:2px;-moz-border-radius-topright:2px;-moz-border-radius-bottomright:2px;border-top-right-radius:2px;border-bottom-right-radius:2px}.tags li .delete-wrapper .delete{padding:2px 6px}.tags li .delete-wrapper .delete .icon{height:11px;padding-bottom:1px}.tags li .delete-wrapper svg{vertical-align:text-top}.tags li .delete-enter-active{width:24px;transition:width 200ms}.tags li .delete-enter-done{width:24px}.tags li .delete-exit{width:24px}.tags li .delete-exit-active{width:0;transition:width 200ms}.tags input{padding:0 3px;min-width:80px;outline:none;border:none;line-height:170%;background-color:transparent;color:#3f3f3f}.tags input::-webkit-input-placeholder{color:#c2c2c2}.tags input::-moz-placeholder{color:#c2c2c2}.tags input:-moz-placeholder{color:#c2c2c2}.tags input:-ms-input-placeholder{color:#c2c2c2}.type-selector{display:flex;border-bottom:1px solid #e5e5e5}.type-selector .type{flex:1;text-align:center;padding:7px;font-size:14px}.type-selector .type{cursor:pointer;border-right:1px solid #e5e5e5}.type-selector .type:last-child{border-right:none}.type-selector .type:hover{background-color:#f5f7f7}.type-selector .icon{margin:0 3px 1px 0;height:13px}.r6o-editor{position:absolute;z-index:99999;margin-top:18px;margin-left:-14px;width:400px;color:#3f3f3f;opacity:0;font-family:'Lato', sans-serif;font-size:17px;line-height:27px;-webkit-transition:opacity 0.1s ease-in-out;-moz-transition:opacity 0.1s ease-in-out;transition:opacity 0.1s ease-in-out}.r6o-editor .arrow{position:absolute;overflow:hidden;top:-12px;left:12px;width:28px;height:12px}.r6o-editor .arrow:after{content:'';position:absolute;top:5px;left:5px;width:18px;height:18px;background-color:#fff;-webkit-backface-visibility:hidden;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.r6o-editor .inner{background-color:#fff;-webkit-border-radius:2px;-khtml-border-radius:2px;-moz-border-radius:2px;border-radius:2px;-webkit-box-shadow:2px 2px 42px rgba(0,0,0,0.4);-moz-box-shadow:2px 2px 42px rgba(0,0,0,0.4);box-shadow:2px 2px 42px rgba(0,0,0,0.4)}.r6o-editor .inner .r6o-widget:first-child{-webkit-border-top-left-radius:2px;-webkit-border-top-right-radius:2px;-khtml-border-radius-topleft:2px;-khtml-border-radius-topright:2px;-moz-border-radius-topleft:2px;-moz-border-radius-topright:2px;border-top-left-radius:2px;border-top-right-radius:2px}.r6o-editor .inner .r6o-widget{border-bottom:1px solid #e5e5e5}.r6o-editor .footer{text-align:right;padding:8px 0}.r6o-editor .footer .r6o-btn{margin-right:8px}.r6o-editor.align-right{margin-left:8px}.r6o-editor.align-right .arrow{left:auto;right:12px}.r6o-editor.align-bottom{margin-bottom:14px}.r6o-editor.align-bottom .arrow{top:auto;bottom:-12px}.r6o-editor.align-bottom .arrow::after{top:-11px;box-shadow:none}.r6o-relation-editor{position:absolute;font-family:'Lato', sans-serif;font-size:17px;line-height:27px;-webkit-box-shadow:0 1px 14px rgba(0,0,0,0.4);-moz-box-shadow:0 1px 14px rgba(0,0,0,0.4);box-shadow:0 1px 14px rgba(0,0,0,0.4);-webkit-border-radius:3px;-khtml-border-radius:3px;-moz-border-radius:3px;border-radius:3px;transform:translate(-50%, -50%);background-color:#fff}.r6o-relation-editor svg{vertical-align:middle;shape-rendering:geometricPrecision}.r6o-relation-editor *{line-height:31px;box-sizing:border-box}.r6o-relation-editor .input-wrapper{height:34px;padding:10px 6px;margin-right:68px;font-size:14px;min-width:80px;background-color:#ecf0f1;cursor:text;-webkit-border-top-left-radius:3px;-webkit-border-bottom-left-radius:3px;-khtml-border-radius-topleft:3px;-khtml-border-radius-bottomleft:3px;-moz-border-radius-topleft:3px;-moz-border-radius-bottomleft:3px;border-top-left-radius:3px;border-bottom-left-radius:3px}.r6o-relation-editor .input{outline:none;line-height:14px;white-space:pre}.r6o-relation-editor .input:empty:before{content:attr(data-placeholder);color:#aeb0b4}.r6o-relation-editor .buttons{position:absolute;display:inline-flex;top:0;right:0}.r6o-relation-editor .buttons span{height:34px;display:inline-block;width:34px;text-align:center;font-size:14px;cursor:pointer;padding:1px 0}.r6o-relation-editor .buttons .delete{background-color:#fff;color:#9ca4b1;border-left:1px solid #e5e5e5}.r6o-relation-editor .buttons .delete:hover{background-color:#f6f6f6}.r6o-relation-editor .buttons .ok{background-color:#4483c4;color:#fff;-webkit-border-top-right-radius:3px;-webkit-border-bottom-right-radius:3px;-khtml-border-radius-topright:3px;-khtml-border-radius-bottomright:3px;-moz-border-radius-topright:3px;-moz-border-radius-bottomright:3px;border-top-right-radius:3px;border-bottom-right-radius:3px}.r6o-relation-editor .buttons .ok:hover{background-color:#4f92d7}.noselect{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n", ""]), t.exports = e
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "Annotorious", function() {
            return $e
        }), n.d(e, "init", function() {
            return qe
        }), n.d(e, "parseRectFragment", function() {
            return Xt
        }), n.d(e, "toRectFragment", function() {
            return Yt
        }), n.d(e, "drawRect", function() {
            return Zt
        }), n.d(e, "getRectSize", function() {
            return Qt
        }), n.d(e, "getCorners", function() {
            return te
        }), n.d(e, "setRectSize", function() {
            return ee
        }), n.d(e, "rectArea", function() {
            return ne
        }), n.d(e, "RubberbandRectSelector", function() {
            return Ae
        });
        var b = n(0),
            r = n(3),
            f = n.n(r),
            o = n(25),
            u = n.n(o),
            i = 0,
            g = {
                setServerTime: function(t) {
                    var e = Date.now();
                    i = t - e
                },
                getCurrentTimeAdjusted: function() {
                    return new Date(Date.now() + i).toISOString()
                },
                toClientTime: function(t) {
                    return Date.parse(t) - i
                }
            },
            a = new(n(26))({
                allowMissing: !0
            });
        a.init = function(t) {
            a.locale(t), a.extend(n(60)("./messages_".concat(t, ".json")))
        };
        var v = a,
            _ = n(2),
            w = function(t, e, n) {
                var r = t.getBoundingClientRect(),
                    o = window,
                    i = o.scrollX,
                    a = o.scrollY;
                e.className = "r6o-editor", e.style.opacity = 1;
                var u = n.getBoundingClientRect(),
                    c = u.left,
                    s = u.top,
                    l = u.right,
                    f = u.height;
                e.style.top = "".concat(s + f - r.top, "px"), e.style.left = "".concat(c + i - r.left, "px");
                var p, d, y = e.getBoundingClientRect();
                y.right > window.innerWidth && (e.classList.add("align-right"), e.style.left = "".concat(l - y.width + i - r.left, "px")), y.bottom > window.innerHeight && (p = s + a, d = r.bottom + a, e.classList.add("align-bottom"), e.style.top = "auto", e.style.bottom = "".concat(d - p, "px"))
            };

        function x(t, e) {
            if (null == t) return {};
            var n, r = function(t, e) {
                if (null == t) return {};
                var n, r, o = {},
                    i = Object.keys(t);
                for (r = 0; r < i.length; r++) n = i[r], 0 <= e.indexOf(n) || (o[n] = t[n]);
                return o
            }(t, e);
            if (Object.getOwnPropertySymbols)
                for (var o = Object.getOwnPropertySymbols(t), i = 0; i < o.length; i++) n = o[i], 0 <= e.indexOf(n) || Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
            return r
        }

        function c(e, t) {
            var n, r = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)), r
        }

        function S(o) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(i), !0).forEach(function(t) {
                    var e, n, r;
                    e = o, r = i[n = t], n in e ? Object.defineProperty(e, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = r
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach(function(t) {
                    Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return o
        }

        function O(t) {
            return function(t) {
                if (Array.isArray(t)) return l(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }(t) || s(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function E(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(t, e) || s(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function s(t, e) {
            if (t) {
                if ("string" == typeof t) return l(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
            }
        }

        function l(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }
        var p = function(r) {
            var t, e, n, o, i, a, u = E(Object(_.k)(), 2),
                c = u[0],
                s = u[1],
                l = Object(_.j)();
            Object(_.d)(function() {
                var t, e = r.applyTemplate && (null === (t = r.annotation) || void 0 === t ? void 0 : t.isSelection),
                    n = e ? r.annotation.clone({
                        body: O(r.applyTemplate)
                    }) : r.annotation;
                if ((null == c ? void 0 : c.isEqual(n)) || (null == c ? void 0 : c.isSelection) && (null == n ? void 0 : n.isSelection) || s(n), e && r.applyImmediately && r.onAnnotationCreated(n.toAnnotation()), l.current) return m()
            }, [r.selectedElement, (t = r.selectedElement, e = t.getBoundingClientRect(), n = e.top, o = e.left, i = e.width, a = e.height, "".concat(n, ", ").concat(o, ", ").concat(i, ", ").concat(a))]);

            function f(t) {
                var e = {},
                    n = g.user;
                return !t.draft && n && (e.creator = {}, n.id && (e.creator.id = n.id), n.displayName && (e.creator.name = n.displayName), t.created ? t.modified = g.getCurrentTimeAdjusted() : t.created = g.getCurrentTimeAdjusted()), e
            }

            function p(t) {
                return s(c.clone({
                    body: [].concat(O(c.bodies), [S(S({}, t), f(t))])
                }))
            }

            function d(e, n) {
                return s(c.clone({
                    body: c.bodies.map(function(t) {
                        return t === e ? S(S({}, n), f(n)) : t
                    })
                }))
            }

            function y(e) {
                return s(c.clone({
                    body: c.bodies.filter(function(t) {
                        return t !== e
                    })
                }))
            }

            function h() {
                function t(t) {
                    return t.clone({
                        body: t.bodies.map(function(t) {
                            var e = t.draft,
                                n = x(t, ["draft"]);
                            return e ? S(S({}, n), f(n)) : n
                        })
                    })
                }
                0 === c.bodies.length ? c.isSelection ? r.onCancel() : r.onAnnotationDeleted(r.annotation) : c.isSelection ? r.onAnnotationCreated(t(c).toAnnotation()) : r.onAnnotationUpdated(t(c), r.annotation)
            }
            var m = function() {
                if (window.ResizeObserver) {
                    var t = new ResizeObserver(function() {
                        w(r.wrapperEl, l.current, r.selectedElement)
                    });
                    return t.observe(r.wrapperEl),
                        function() {
                            return t.disconnect()
                        }
                }
                w(r.wrapperEl, l.current, r.selectedElement)
            };
            return b.default.createElement("div", {
                ref: l,
                className: "r6o-editor"
            }, b.default.createElement("div", {
                className: "arrow"
            }), b.default.createElement("div", {
                className: "inner"
            }, b.default.Children.map(r.children, function(t) {
                return b.default.cloneElement(t, S(S({}, t.props), {}, {
                    annotation: c,
                    readOnly: r.readOnly,
                    onAppendBody: p,
                    onUpdateBody: d,
                    onRemoveBody: y,
                    onSaveAndClose: h
                }))
            }), r.readOnly ? b.default.createElement("div", {
                className: "footer"
            }, b.default.createElement("button", {
                className: "r6o-btn",
                onClick: r.onCancel
            }, v.t("Close"))) : b.default.createElement("div", {
                className: "footer"
            }, b.default.createElement("button", {
                className: "r6o-btn outline",
                onClick: r.onCancel
            }, v.t("Cancel")), b.default.createElement("button", {
                className: "r6o-btn ",
                onClick: h
            }, v.t("Ok")))))
        };
        var d = n(6),
            y = n.n(d);

        function h(e, t) {
            var n, r = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)), r
        }

        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach(function(t) {
                    k(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        function A(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function k(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        var j = function() {
            function r(t, e) {
                var n = this;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, r), k(this, "clone", function(t) {
                    return new r(m(m({}, n.underlying), t), n.opts)
                }), k(this, "selector", function(e) {
                    var t = n.underlying.target;
                    if (t.selector) return (Array.isArray(t.selector) ? t.selector : [t.selector]).find(function(t) {
                        return t.type === e
                    })
                }), this.underlying = t, this.opts = e
            }
            var t, e, n;
            return t = r, (e = [{
                key: "isEqual",
                value: function(t) {
                    return !(!t || "Annotation" !== (null == t ? void 0 : t.type)) && (this.underlying === t.underlying || !(!this.underlying.id || !t.underlying.id) && this.underlying.id === t.underlying.id)
                }
            }, {
                key: "readOnly",
                get: function() {
                    var t;
                    return null === (t = this.opts) || void 0 === t ? void 0 : t.readOnly
                }
            }, {
                key: "id",
                get: function() {
                    return this.underlying.id
                }
            }, {
                key: "type",
                get: function() {
                    return this.underlying.type
                }
            }, {
                key: "motivation",
                get: function() {
                    return this.underlying.motivation
                }
            }, {
                key: "body",
                get: function() {
                    return this.underlying.body
                }
            }, {
                key: "target",
                get: function() {
                    return this.underlying.target
                }
            }, {
                key: "bodies",
                get: function() {
                    return Array.isArray(this.underlying.body) ? this.underlying.body : [this.underlying.body]
                },
                set: function(t) {
                    this.underlying.body = t
                }
            }, {
                key: "targets",
                get: function() {
                    return Array.isArray(this.underlying.target) ? this.underlying.target : [this.underlying.target]
                }
            }, {
                key: "quote",
                get: function() {
                    return this.selector("TextQuoteSelector").exact
                }
            }, {
                key: "start",
                get: function() {
                    return this.selector("TextPositionSelector").start
                }
            }, {
                key: "end",
                get: function() {
                    return this.selector("TextPositionSelector").end
                }
            }]) && A(t.prototype, e), n && A(t, n), r
        }();

        function C(e, t) {
            var n, r = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)), r
        }

        function P(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? C(Object(n), !0).forEach(function(t) {
                    R(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        function T(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function R(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        k(j, "create", function(t) {
            var e = {
                "@context": "http://www.w3.org/ns/anno.jsonld",
                type: "Annotation",
                id: "#".concat(y()()),
                body: []
            };
            return new j(m(m({}, e), t))
        });
        var N = function() {
            function r(t) {
                var n = this;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, r), R(this, "clone", function(t) {
                    var e = new r(JSON.parse(JSON.stringify(n._stub.target)));
                    return t && (e._stub = P(P({}, e._stub), t)), e
                }), R(this, "selector", function(e) {
                    var t = n._stub.target;
                    if (t.selector) return (Array.isArray(t.selector) ? t.selector : [t.selector]).find(function(t) {
                        return t.type === e
                    })
                }), R(this, "toAnnotation", function() {
                    var t = Object.assign({}, n._stub, {
                        "@context": "http://www.w3.org/ns/anno.jsonld",
                        type: "Annotation",
                        id: "#".concat(y()())
                    });
                    return new j(t)
                }), this._stub = {
                    type: "Selection",
                    body: [],
                    target: t
                }
            }
            var t, e, n;
            return t = r, (e = [{
                key: "isEqual",
                value: function(t) {
                    return !!t && this._stub === t._stub
                }
            }, {
                key: "type",
                get: function() {
                    return this._stub.type
                }
            }, {
                key: "body",
                get: function() {
                    return this._stub.body
                }
            }, {
                key: "target",
                get: function() {
                    return this._stub.target
                }
            }, {
                key: "bodies",
                get: function() {
                    return this._stub.body
                }
            }, {
                key: "quote",
                get: function() {
                    return this.selector("TextQuoteSelector").exact
                }
            }, {
                key: "isSelection",
                get: function() {
                    return !0
                }
            }]) && T(t.prototype, e), n && T(t, n), r
        }();
        "ontouchstart" in window || navigator.maxTouchPoints;
        n(71);

        function D(t) {
            return b.default.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1000 940",
                width: t.width
            }, b.default.createElement("metadata", null, "IcoFont Icons"), b.default.createElement("title", null, "simple-down"), b.default.createElement("glyph", {
                glyphName: "simple-down",
                unicode: "Ã®ÂªÂ²",
                horizAdvX: "1000"
            }), b.default.createElement("path", {
                fill: "currentColor",
                d: "M200 392.6l300 300 300-300-85.10000000000002-85.10000000000002-214.89999999999998 214.79999999999995-214.89999999999998-214.89999999999998-85.10000000000002 85.20000000000005z"
            }))
        }

        function M(t) {
            return b.default.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "180 150 700 800",
                width: t.width
            }, b.default.createElement("metadata", null, "IcoFont Icons"), b.default.createElement("title", null, "close"), b.default.createElement("glyph", {
                glyphName: "close",
                unicode: "Ã®Â»Â¤",
                horizAdvX: "1000"
            }), b.default.createElement("path", {
                fill: "currentColor",
                d: "M709.8 206.6c-64.39999999999998 65.50000000000003-128.89999999999998 131.20000000000002-194.19999999999993 197.6-8.600000000000023 8.699999999999989-22.400000000000034 8.800000000000011-31 0-65-66-129.70000000000005-131.8-194.5-197.6-8.600000000000023-8.699999999999989-22.400000000000034-8.599999999999994-30.900000000000034 0.09999999999999432-15.699999999999989 16.200000000000017-31.099999999999994 32.30000000000001-47.099999999999994 48.80000000000001-8.5 8.800000000000011-8.299999999999983 23 0.20000000000001705 31.69999999999999 63.099999999999966 64.19999999999999 127.89999999999998 130.10000000000002 193.59999999999997 197 8.600000000000023 8.699999999999989 8.5 22.80000000000001 0 31.599999999999966-65.19999999999999 66.40000000000009-130.2 132.5-194.7 198.10000000000002-8.5 8.700000000000045-8.5 22.800000000000068 0.20000000000001705 31.399999999999977l47.79999999999998 47.90000000000009c8.600000000000023 8.599999999999909 22.600000000000023 8.599999999999909 31.100000000000023-0.10000000000002274l194.2-197.30000000000007c8.600000000000023-8.699999999999932 22.399999999999977-8.699999999999932 31 0 64.70000000000005 65.80000000000007 129.20000000000005 131.4000000000001 194.20000000000005 197.5 8.599999999999909 8.700000000000045 22.5 8.800000000000068 31 0.10000000000002274 16-16.199999999999932 31.699999999999932-32.19999999999993 47.59999999999991-48.299999999999955 8.600000000000023-8.700000000000045 8.600000000000023-22.899999999999977 0.10000000000002274-31.600000000000023-63.799999999999955-65-128.5-130.89999999999998-194.19999999999993-197.79999999999995-8.600000000000023-8.700000000000045-8.600000000000023-22.900000000000034 0-31.600000000000023 65.19999999999993-66.40000000000003 130.0999999999999-132.5 194.5-198.20000000000005 8.599999999999909-8.699999999999989 8.5-22.799999999999955-0.10000000000002274-31.49999999999997l-47.80000000000007-48.099999999999994c-8.5-8.5-22.399999999999977-8.400000000000006-31 0.29999999999998295z"
            }))
        }
        var U = n(7),
            L = n.n(U);

        function I() {
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
                var e = this;
                do {
                    if (Element.prototype.matches.call(e, t)) return e;
                    e = e.parentElement || e.parentNode
                } while (null !== e && 1 === e.nodeType);
                return null
            })
        }
        I();

        function z(t, e) {
            $[t] = e
        }

        function F(t) {
            return $[t] || $.en_US
        }
        var B = ["second", "minute", "hour", "day", "week", "month", "year"],
            H = ["Ã§Â§â€™", "Ã¥Ë†â€ Ã©â€™Å¸", "Ã¥Â°ÂÃ¦â€”Â¶", "Ã¥Â¤Â©", "Ã¥â€˜Â¨", "Ã¤Â¸ÂªÃ¦Å“Ë†", "Ã¥Â¹Â´"],
            $ = {},
            q = [60, 60, 24, 7, 365 / 7 / 12, 12];

        function W(t) {
            return t instanceof Date ? t : !isNaN(t) || /^\d+$/.test(t) ? new Date(parseInt(t)) : (t = (t || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2"), new Date(t))
        }

        function V(t, e) {
            for (var n = t < 0 ? 1 : 0, r = t = Math.abs(t), o = 0; t >= q[o] && o < q.length; o++) t /= q[o];
            return (0 === (o *= 2) ? 9 : 1) < (t = Math.floor(t)) && (o += 1), e(t, o, r)[n].replace("%s", t.toString())
        }

        function J(t, e) {
            return ((e ? W(e) : new Date) - W(t)) / 1e3
        }
        var G = "timeago-id";

        function K(t) {
            return parseInt(t.getAttribute(G))
        }
        var X = {},
            Y = function(t) {
                clearTimeout(t), delete X[t]
            };

        function Z(t, e, n, r) {
            Y(K(t));
            var o = r.relativeDate,
                i = r.minInterval,
                a = J(e, o);
            t.innerText = V(a, n);
            var u, c = setTimeout(function() {
                Z(t, e, n, r)
            }, Math.min(1e3 * Math.max(function(t) {
                for (var e = 1, n = 0, r = Math.abs(t); t >= q[n] && n < q.length; n++) t /= q[n], e *= q[n];
                return r = (r %= e) ? e - r : e, Math.ceil(r)
            }(a), i || 1), 2147483647));
            X[c] = 0, u = c, t.setAttribute(G, u)
        }

        function Q(t) {
            t ? Y(K(t)) : Object.keys(X).forEach(Y)
        }
        z("en_US", function(t, e) {
            if (0 === e) return ["just now", "right now"];
            var n = B[Math.floor(e / 2)];
            return 1 < t && (n += "s"), [t + " " + n + " ago", "in " + t + " " + n]
        }), z("zh_CN", function(t, e) {
            if (0 === e) return ["Ã¥Ë†Å¡Ã¥Ë†Å¡", "Ã§â€°â€¡Ã¥Ë†Â»Ã¥ÂÅ½"];
            var n = H[~~(e / 2)];
            return [t + " " + n + "Ã¥â€°Â", t + " " + n + "Ã¥ÂÅ½"]
        });
        var tt, et, nt = (tt = function(t, e) {
                return (tt = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                tt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            rt = function() {
                return (rt = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            ot = function(t, e) {
                var n = {};
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
                return n
            };

        function it() {
            var t = null !== et && et.apply(this, arguments) || this;
            return t.dom = null, t
        }
        var at = (et = b.default.Component, nt(it, et), it.prototype.componentDidMount = function() {
            this.renderTimeAgo()
        }, it.prototype.componentDidUpdate = function() {
            this.renderTimeAgo()
        }, it.prototype.renderTimeAgo = function() {
            var t, e, n, r, o = this.props,
                i = o.live,
                a = o.datetime,
                u = o.locale,
                c = o.opts;
            Q(this.dom), !1 !== i && (this.dom.setAttribute("datetime", "" + ((r = a) instanceof Date ? r.getTime() : r)), t = this.dom, e = u, n = c, (t.length ? t : [t]).forEach(function(t) {
                Z(t, t.getAttribute("datetime"), F(e), n || {})
            }))
        }, it.prototype.componentWillUnmount = function() {
            Q(this.dom)
        }, it.prototype.render = function() {
            var t, e, n = this,
                r = this.props,
                o = r.datetime,
                i = (r.live, r.locale),
                a = r.opts,
                u = ot(r, ["datetime", "live", "locale", "opts"]);
            return b.default.createElement("time", rt({
                ref: function(t) {
                    n.dom = t
                }
            }, u), (t = i, V(J(o, (e = a) && e.relativeDate), F(t))))
        }, it.defaultProps = {
            live: !0,
            className: ""
        }, it);

        function ut(t) {
            var e, n, r = Object(_.j)();

            function o() {
                e.current && !e.current.contains(event.target) && n()
            }
            return e = r, n = function() {
                return t.onClickOutside()
            }, Object(_.d)(function() {
                return document.addEventListener("mousedown", o),
                    function() {
                        return document.removeEventListener("mousedown", o)
                    }
            }), b.default.createElement("ul", {
                ref: r,
                className: "comment-dropdown-menu"
            }, b.default.createElement("li", {
                onClick: t.onEdit
            }, v.t("Edit")), b.default.createElement("li", {
                onClick: t.onDelete
            }, v.t("Delete")))
        }

        function ct(t) {
            return (ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function st(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function lt(t, e) {
            return (lt = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function ft(i) {
            var a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e, n, r, o = dt(i);
                return e = a ? (t = dt(this).constructor, Reflect.construct(o, arguments, t)) : o.apply(this, arguments), n = this, !(r = e) || "object" !== ct(r) && "function" != typeof r ? pt(n) : r
            }
        }

        function pt(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function dt(t) {
            return (dt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function yt(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        var ht = function() {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && lt(t, e)
            }(i, b["Component"]);
            var t, e, n, o = ft(i);

            function i() {
                var e;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, i);
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return yt(pt(e = o.call.apply(o, [this].concat(n))), "onKeyDown", function(t) {
                    13 === t.which && t.ctrlKey && e.props.onSaveAndClose()
                }), yt(pt(e), "onRender", function(t) {
                    t && e.props.editable && t.focus()
                }), e
            }
            return t = i, (e = [{
                key: "render",
                value: function() {
                    return b.default.createElement(L.a, {
                        innerRef: this.onRender,
                        className: "r6o-editable-text",
                        html: this.props.content,
                        "data-placeholder": this.props.placeholder || v.t("Add a tag here..."),
                        disabled: !this.props.editable,
                        onChange: this.props.onChange,
                        onKeyDown: this.onKeyDown
                    })
                }
            }]) && st(t.prototype, e), n && st(t, n), i
        }();

        function mt(e, t) {
            var n, r = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)), r
        }

        function bt(o) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? mt(Object(i), !0).forEach(function(t) {
                    var e, n, r;
                    e = o, r = i[n = t], n in e ? Object.defineProperty(e, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = r
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : mt(Object(i)).forEach(function(t) {
                    Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return o
        }

        function gt(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(t, e) || function(t, e) {
                if (!t) return;
                if ("string" == typeof t) return vt(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vt(t, e)
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function vt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }

        function _t(e) {
            var t = gt(Object(_.k)(!1), 2),
                n = t[0],
                r = t[1],
                o = gt(Object(_.k)(!1), 2),
                i = o[0],
                a = o[1],
                u = e.body.creator && b.default.createElement("div", {
                    className: "lastmodified"
                }, b.default.createElement("span", {
                    className: "lastmodified-by"
                }, e.body.creator.name), e.body.created && b.default.createElement("span", {
                    className: "lastmodified-at"
                }, b.default.createElement(at, {
                    datetime: g.toClientTime(e.body.created)
                })));
            return e.readOnly ? b.default.createElement("div", {
                className: "r6o-widget comment"
            }, b.default.createElement("div", {
                className: "value"
            }, e.body.value), u) : b.default.createElement("div", {
                className: n ? "r6o-widget comment editable" : "r6o-widget comment"
            }, b.default.createElement(ht, {
                editable: n,
                content: e.body.value,
                onChange: function(t) {
                    e.onUpdate(e.body, bt(bt({}, e.body), {}, {
                        value: t.target.value
                    }))
                },
                onSaveAndClose: e.onSaveAndClose
            }), u, b.default.createElement("div", {
                className: i ? "icon arrow-down menu-open" : "icon arrow-down",
                onClick: function() {
                    return a(!i)
                }
            }, b.default.createElement(D, {
                width: 12
            })), i && b.default.createElement(ut, {
                onEdit: function() {
                    e.body.draft = !0, r(!0), a(!1)
                },
                onDelete: function() {
                    e.onDelete(e.body), a(!1)
                },
                onClickOutside: function() {
                    return a(!1)
                }
            }))
        }

        function wt(e, t) {
            var n, r = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)), r
        }

        function xt(o) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? wt(Object(i), !0).forEach(function(t) {
                    var e, n, r;
                    e = o, r = i[n = t], n in e ? Object.defineProperty(e, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = r
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : wt(Object(i)).forEach(function(t) {
                    Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return o
        }

        function St(t) {
            return "TextualBody" === t.type && (!t.hasOwnProperty("purpose") || "commenting" === t.purpose || "replying" === t.purpose)
        }

        function Ot(r) {
            var t, e, n = r.annotation ? r.annotation.bodies.filter(St) : [],
                o = (t = n.slice().reverse().find(function(t) {
                    return t.draft && !t.creator
                }), e = 1 < n.length, t || {
                    type: "TextualBody",
                    value: "",
                    purpose: e ? "replying" : "commenting",
                    draft: !0
                }),
                i = n.filter(function(t) {
                    return t != o
                });
            return b.default.createElement(b.default.Fragment, null, i.map(function(t, e) {
                return b.default.createElement(_t, {
                    key: e,
                    readOnly: r.readOnly,
                    body: t,
                    onUpdate: r.onUpdateBody,
                    onDelete: r.onRemoveBody,
                    onSaveAndClose: r.onSaveAndClose
                })
            }), !r.readOnly && r.annotation && b.default.createElement("div", {
                className: "r6o-widget comment editable"
            }, b.default.createElement(ht, {
                content: o.value,
                editable: !0,
                placeholder: 0 < i.length ? v.t("Add a reply...") : v.t("Add a tag here..."),
                onChange: function(t) {
                    var e = o.value.trim(),
                        n = t.target.value.trim();
                    0 === e.length && 0 < n.length ? r.onAppendBody(xt(xt({}, o), {}, {
                        value: n
                    })) : 0 < e.length && 0 === n.length ? r.onRemoveBody(o) : r.onUpdateBody(o, xt(xt({}, o), {}, {
                        value: n
                    }))
                },
                onSaveAndClose: function() {
                    return r.onSaveAndClose()
                }
            })))
        }

        function Et() {
            return (Et = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }).apply(this, arguments)
        }

        function At(t, e) {
            if (null == t) return {};
            for (var n, r = {}, o = Object.keys(t), i = 0; i < o.length; i++) n = o[i], 0 <= e.indexOf(n) || (r[n] = t[n]);
            return r
        }

        function kt(t, e) {
            t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
        }
        n(11);

        function jt(t, e) {
            return t.replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
        }
        var Ct = !1,
            Pt = b.default.createContext(null),
            Tt = "unmounted",
            Rt = "exited",
            Nt = "entering",
            Dt = "entered",
            Mt = "exiting",
            Ut = function(i) {
                function t(t, e) {
                    var n, r = i.call(this, t, e) || this,
                        o = e && !e.isMounting ? t.enter : t.appear;
                    return r.appearStatus = null, t.in ? o ? (n = Rt, r.appearStatus = Nt) : n = Dt : n = t.unmountOnExit || t.mountOnEnter ? Tt : Rt, r.state = {
                        status: n
                    }, r.nextCallback = null, r
                }
                kt(t, i), t.getDerivedStateFromProps = function(t, e) {
                    return t.in && e.status === Tt ? {
                        status: Rt
                    } : null
                };
                var e = t.prototype;
                return e.componentDidMount = function() {
                    this.updateStatus(!0, this.appearStatus)
                }, e.componentDidUpdate = function(t) {
                    var e, n = null;
                    t !== this.props && (e = this.state.status, this.props.in ? e !== Nt && e !== Dt && (n = Nt) : e !== Nt && e !== Dt || (n = Mt)), this.updateStatus(!1, n)
                }, e.componentWillUnmount = function() {
                    this.cancelNextCallback()
                }, e.getTimeouts = function() {
                    var t, e, n = this.props.timeout,
                        r = t = e = n;
                    return null != n && "number" != typeof n && (r = n.exit, t = n.enter, e = void 0 !== n.appear ? n.appear : t), {
                        exit: r,
                        enter: t,
                        appear: e
                    }
                }, e.updateStatus = function(t, e) {
                    void 0 === t && (t = !1), null !== e ? (this.cancelNextCallback(), e === Nt ? this.performEnter(t) : this.performExit()) : this.props.unmountOnExit && this.state.status === Rt && this.setState({
                        status: Tt
                    })
                }, e.performEnter = function(t) {
                    var e = this,
                        n = this.props.enter,
                        r = this.context ? this.context.isMounting : t,
                        o = this.props.nodeRef ? [r] : [b.default.findDOMNode(this), r],
                        i = o[0],
                        a = o[1],
                        u = this.getTimeouts(),
                        c = r ? u.appear : u.enter;
                    !t && !n || Ct ? this.safeSetState({
                        status: Dt
                    }, function() {
                        e.props.onEntered(i)
                    }) : (this.props.onEnter(i, a), this.safeSetState({
                        status: Nt
                    }, function() {
                        e.props.onEntering(i, a), e.onTransitionEnd(c, function() {
                            e.safeSetState({
                                status: Dt
                            }, function() {
                                e.props.onEntered(i, a)
                            })
                        })
                    }))
                }, e.performExit = function() {
                    var t = this,
                        e = this.props.exit,
                        n = this.getTimeouts(),
                        r = this.props.nodeRef ? void 0 : b.default.findDOMNode(this);
                    e && !Ct ? (this.props.onExit(r), this.safeSetState({
                        status: Mt
                    }, function() {
                        t.props.onExiting(r), t.onTransitionEnd(n.exit, function() {
                            t.safeSetState({
                                status: Rt
                            }, function() {
                                t.props.onExited(r)
                            })
                        })
                    })) : this.safeSetState({
                        status: Rt
                    }, function() {
                        t.props.onExited(r)
                    })
                }, e.cancelNextCallback = function() {
                    null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                }, e.safeSetState = function(t, e) {
                    e = this.setNextCallback(e), this.setState(t, e)
                }, e.setNextCallback = function(e) {
                    var n = this,
                        r = !0;
                    return this.nextCallback = function(t) {
                        r && (r = !1, n.nextCallback = null, e(t))
                    }, this.nextCallback.cancel = function() {
                        r = !1
                    }, this.nextCallback
                }, e.onTransitionEnd = function(t, e) {
                    this.setNextCallback(e);
                    var n, r, o, i = this.props.nodeRef ? this.props.nodeRef.current : b.default.findDOMNode(this),
                        a = null == t && !this.props.addEndListener;
                    i && !a ? (this.props.addEndListener && (r = (n = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback])[0], o = n[1], this.props.addEndListener(r, o)), null != t && setTimeout(this.nextCallback, t)) : setTimeout(this.nextCallback, 0)
                }, e.render = function() {
                    var t = this.state.status;
                    if (t === Tt) return null;
                    var e = this.props,
                        n = e.children,
                        r = (e.in, e.mountOnEnter, e.unmountOnExit, e.appear, e.enter, e.exit, e.timeout, e.addEndListener, e.onEnter, e.onEntering, e.onEntered, e.onExit, e.onExiting, e.onExited, e.nodeRef, At(e, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                    return b.default.createElement(Pt.Provider, {
                        value: null
                    }, "function" == typeof n ? n(t, r) : b.default.cloneElement(b.default.Children.only(n), r))
                }, t
            }(b.default.Component);

        function Lt() {}
        Ut.contextType = Pt, Ut.propTypes = {}, Ut.defaultProps = {
            in: !1,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            enter: !0,
            exit: !0,
            onEnter: Lt,
            onEntering: Lt,
            onEntered: Lt,
            onExit: Lt,
            onExiting: Lt,
            onExited: Lt
        }, Ut.UNMOUNTED = Tt, Ut.EXITED = Rt, Ut.ENTERING = Nt, Ut.ENTERED = Dt, Ut.EXITING = Mt;

        function It(i, t) {
            return i && t && t.split(" ").forEach(function(t) {
                return n = t, void((e = i).classList ? e.classList.add(n) : (o = n, ((r = e).classList ? o && r.classList.contains(o) : -1 !== (" " + (r.className.baseVal || r.className) + " ").indexOf(" " + o + " ")) || ("string" == typeof e.className ? e.className = e.className + " " + n : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + n))));
                var e, n, r, o
            })
        }

        function zt(r, t) {
            return r && t && t.split(" ").forEach(function(t) {
                return n = t, void((e = r).classList ? e.classList.remove(n) : "string" == typeof e.className ? e.className = jt(e.className, n) : e.setAttribute("class", jt(e.className && e.className.baseVal || "", n)));
                var e, n
            })
        }
        var Ft = Ut,
            Bt = function(r) {
                function t() {
                    for (var i, t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return (i = r.call.apply(r, [this].concat(e)) || this).appliedClasses = {
                        appear: {},
                        enter: {},
                        exit: {}
                    }, i.onEnter = function(t, e) {
                        var n = i.resolveArguments(t, e),
                            r = n[0],
                            o = n[1];
                        i.removeClasses(r, "exit"), i.addClass(r, o ? "appear" : "enter", "base"), i.props.onEnter && i.props.onEnter(t, e)
                    }, i.onEntering = function(t, e) {
                        var n = i.resolveArguments(t, e),
                            r = n[0],
                            o = n[1] ? "appear" : "enter";
                        i.addClass(r, o, "active"), i.props.onEntering && i.props.onEntering(t, e)
                    }, i.onEntered = function(t, e) {
                        var n = i.resolveArguments(t, e),
                            r = n[0],
                            o = n[1] ? "appear" : "enter";
                        i.removeClasses(r, o), i.addClass(r, o, "done"), i.props.onEntered && i.props.onEntered(t, e)
                    }, i.onExit = function(t) {
                        var e = i.resolveArguments(t)[0];
                        i.removeClasses(e, "appear"), i.removeClasses(e, "enter"), i.addClass(e, "exit", "base"), i.props.onExit && i.props.onExit(t)
                    }, i.onExiting = function(t) {
                        var e = i.resolveArguments(t)[0];
                        i.addClass(e, "exit", "active"), i.props.onExiting && i.props.onExiting(t)
                    }, i.onExited = function(t) {
                        var e = i.resolveArguments(t)[0];
                        i.removeClasses(e, "exit"), i.addClass(e, "exit", "done"), i.props.onExited && i.props.onExited(t)
                    }, i.resolveArguments = function(t, e) {
                        return i.props.nodeRef ? [i.props.nodeRef.current, t] : [t, e]
                    }, i.getClassNames = function(t) {
                        var e = i.props.classNames,
                            n = "string" == typeof e,
                            r = n ? (n && e ? e + "-" : "") + t : e[t];
                        return {
                            baseClassName: r,
                            activeClassName: n ? r + "-active" : e[t + "Active"],
                            doneClassName: n ? r + "-done" : e[t + "Done"]
                        }
                    }, i
                }
                kt(t, r);
                var e = t.prototype;
                return e.addClass = function(t, e, n) {
                    var r = this.getClassNames(e)[n + "ClassName"],
                        o = this.getClassNames("enter").doneClassName;
                    "appear" === e && "done" === n && o && (r += " " + o), "active" === n && t && t.scrollTop, r && (this.appliedClasses[e][n] = r, It(t, r))
                }, e.removeClasses = function(t, e) {
                    var n = this.appliedClasses[e],
                        r = n.base,
                        o = n.active,
                        i = n.done;
                    this.appliedClasses[e] = {}, r && zt(t, r), o && zt(t, o), i && zt(t, i)
                }, e.render = function() {
                    var t = this.props,
                        e = (t.classNames, At(t, ["classNames"]));
                    return b.default.createElement(Ft, Et({}, e, {
                        onEnter: this.onEnter,
                        onEntered: this.onEntered,
                        onEntering: this.onEntering,
                        onExit: this.onExit,
                        onExiting: this.onExiting,
                        onExited: this.onExited
                    }))
                }, t
            }(b.default.Component);
        Bt.defaultProps = {
            classNames: ""
        }, Bt.propTypes = {};
        var Ht = Bt;

        function $t(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(t, e) || function(t, e) {
                if (!t) return;
                if ("string" == typeof t) return qt(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qt(t, e)
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function qt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }

        function Wt(r) {
            var t = $t(Object(_.k)(!1), 2),
                o = t[0],
                i = t[1],
                e = $t(Object(_.k)(""), 2),
                n = e[0],
                a = e[1],
                u = r.annotation ? r.annotation.bodies.filter(function(t) {
                    return "tagging" === t.purpose
                }) : [];
            return b.default.createElement("div", {
                className: "tags"
            }, 0 < u.length && b.default.createElement("ul", null, u.map(function(t) {
                return b.default.createElement("li", {
                    key: t.value,
                    onClick: (n = t.value, function(t) {
                        i(o !== n && n)
                    })
                }, b.default.createElement("span", {
                    className: "label"
                }, t.value), !r.readOnly && b.default.createElement(Ht, {
                    in: o === t.value,
                    timeout: 200,
                    classNames: "delete"
                }, b.default.createElement("span", {
                    className: "delete-wrapper",
                    onClick: (e = t, function(t) {
                        t.stopPropagation(), r.onRemoveBody(e)
                    })
                }, b.default.createElement("span", {
                    className: "delete"
                }, b.default.createElement(M, {
                    width: 12
                })))));
                var e, n
            })), !r.readOnly && b.default.createElement("input", {
                type: "text",
                value: n,
                onChange: function(t) {
                    return a(t.target.value)
                },
                onKeyDown: function(t) {
                    13 === t.which && (r.onAppendBody({
                        type: "TextualBody",
                        purpose: "tagging",
                        value: n.trim()
                    }), a(""))
                },
                placeholder: v.t("Mention the damage type in the above box")
            }))
        }
        p.CommentWidget = Ot, p.TagWidget = Wt;
        var Vt = "http://www.w3.org/2000/svg";

        function Jt(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(t, e) || function(t, e) {
                if (!t) return;
                if ("string" == typeof t) return Gt(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Gt(t, e)
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Gt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }

        function Kt(t, e, n, r, o) {
            t.setAttribute("x", e), t.setAttribute("y", n), t.setAttribute("width", r), t.setAttribute("height", o)
        }
        var Xt = function(t) {
                var e = t.selector("FragmentSelector");
                if (null != e && e.conformsTo.startsWith("http://www.w3.org/TR/media-frags")) {
                    var n = e.value,
                        r = n.includes(":") ? n.substring(n.indexOf("=") + 1, n.indexOf(":")) : "pixel",
                        o = Jt((n.includes(":") ? n.substring(n.indexOf(":") + 1) : n.substring(n.indexOf("=") + 1)).split(",").map(parseFloat), 4);
                    return {
                        x: o[0],
                        y: o[1],
                        w: o[2],
                        h: o[3],
                        format: r
                    }
                }
            },
            Yt = function(t, e, n, r) {
                var o;
                return {
                    source: null === (o = g.image) || void 0 === o ? void 0 : o.src,
                    selector: {
                        type: "FragmentSelector",
                        conformsTo: "http://www.w3.org/TR/media-frags/",
                        value: "xywh=pixel:".concat(t, ",").concat(e, ",").concat(n, ",").concat(r)
                    }
                }
            },
            Zt = function(t, e, n, r) {
                var o = "Annotation" === t.type || "Selection" === t.type ? Xt(t) : {
                        x: t,
                        y: e,
                        w: n,
                        h: r
                    },
                    i = o.x,
                    a = o.y,
                    u = o.w,
                    c = o.h,
                    s = document.createElementNS(Vt, "g"),
                    l = document.createElementNS(Vt, "rect"),
                    f = document.createElementNS(Vt, "rect");
                return f.setAttribute("class", "inner"), Kt(f, i, a, u, c), l.setAttribute("class", "outer"), Kt(l, i, a, u, c), s.appendChild(l), s.appendChild(f), s
            },
            Qt = function(t) {
                var e = t.querySelector(".outer");
                return {
                    x: parseFloat(e.getAttribute("x")),
                    y: parseFloat(e.getAttribute("y")),
                    w: parseFloat(e.getAttribute("width")),
                    h: parseFloat(e.getAttribute("height"))
                }
            },
            te = function(t) {
                var e = Qt(t),
                    n = e.x,
                    r = e.y,
                    o = e.w,
                    i = e.h;
                return [{
                    x: n,
                    y: r
                }, {
                    x: n + o,
                    y: r
                }, {
                    x: n + o,
                    y: r + i
                }, {
                    x: n,
                    y: r + i
                }]
            },
            ee = function(t, e, n, r, o) {
                var i = t.querySelector(".inner"),
                    a = t.querySelector(".outer");
                Kt(i, e, n, r, o), Kt(a, e, n, r, o)
            },
            ne = function(t) {
                var e = Xt(t);
                return e.w * e.h
            };

        function re(t) {
            return (re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function oe(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(t, e) || function(t, e) {
                if (!t) return;
                if ("string" == typeof t) return ie(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ie(t, e)
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function ie(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }

        function ae(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function ue(t, e) {
            return (ue = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function ce(i) {
            var a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e, n, r, o = le(i);
                return e = a ? (t = le(this).constructor, Reflect.construct(o, arguments, t)) : o.apply(this, arguments), n = this, !(r = e) || "object" !== re(r) && "function" != typeof r ? se(n) : r
            }
        }

        function se(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function le(t) {
            return (le = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function fe(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        var pe = function(t, e, n) {
                var r = document.createElementNS(Vt, "g");
                r.setAttribute("class", "resize-handle ".concat(n)), r.setAttribute("transform-origin", "".concat(t, "px ").concat(e, "px"));
                var o = document.createElementNS(Vt, "rect");
                o.setAttribute("x", t - 5.5), o.setAttribute("y", e - 5.5), o.setAttribute("width", 11), o.setAttribute("height", 11), o.setAttribute("class", "handle-inner");
                var i = document.createElementNS(Vt, "rect");
                return i.setAttribute("x", t - 6.5), i.setAttribute("y", e - 6.5), i.setAttribute("width", 13), i.setAttribute("height", 13), i.setAttribute("class", "handle-outer"), r.appendChild(i), r.appendChild(o), r
            },
            de = function(t, e, n) {
                t.setAttribute("transform-origin", "".concat(e, "px ").concat(n, "px"));
                var r = t.querySelector(".handle-inner");
                r.setAttribute("x", e - 5.5), r.setAttribute("y", n - 5.5);
                var o = t.querySelector(".handle-outer");
                o.setAttribute("x", e - 6.5), o.setAttribute("y", n - 6.5)
            },
            ye = function(t, e) {
                var n = t.x,
                    r = t.y,
                    o = e.x,
                    i = e.y;
                return {
                    x: Math.min(n, o),
                    y: Math.min(r, i),
                    w: Math.abs(o - n),
                    h: Math.abs(i - r)
                }
            },
            he = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && ue(t, e)
                }(c, f.a);
                var t, e, n, u = ce(c);

                function c(t, e) {
                    var h;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), fe(se(h = u.call(this)), "enableResponsive", function() {
                        window.ResizeObserver && (h.resizeObserver = new ResizeObserver(function() {
                            var t = h.svg.getBoundingClientRect(),
                                e = h.svg.viewBox.baseVal,
                                n = e.width,
                                r = e.height,
                                o = n / t.width,
                                i = r / t.height;
                            h.handles.forEach(function(t) {
                                return t.setAttribute("transform", "scale(".concat(o, ", ").concat(i, ")"))
                            })
                        }), h.resizeObserver.observe(h.svg.parentNode))
                    }), fe(se(h), "setSize", function(t, e, n, r) {
                        ee(h.rectangle, t, e, n, r);
                        var o = oe(h.handles, 4),
                            i = o[0],
                            a = o[1],
                            u = o[2],
                            c = o[3];
                        de(i, t, e), de(a, t + n, e), de(u, t + n, e + r), de(c, t, e + r)
                    }), fe(se(h), "getMousePosition", function(t) {
                        var e = h.svg.createSVGPoint();
                        return e.x = t.clientX, e.y = t.clientY, e.matrixTransform(h.svg.getScreenCTM().inverse())
                    }), fe(se(h), "onGrab", function(i) {
                        return function(t) {
                            h.grabbedElem = i;
                            var e = h.getMousePosition(t),
                                n = Qt(h.rectangle),
                                r = n.x,
                                o = n.y;
                            h.mouseOffset = {
                                x: e.x - r,
                                y: e.y - o
                            }
                        }
                    }), fe(se(h), "onMouseMove", function(t) {
                        var e, n, r, o, i, a, u, c, s, l, f, p, d, y;
                        h.grabbedElem && (e = h.getMousePosition(t), h.grabbedElem === h.rectangle ? (r = (n = Qt(h.rectangle)).w, o = n.h, i = e.x - h.mouseOffset.x, a = e.y - h.mouseOffset.y, h.setSize(i, a, r, o), h.emit("update", {
                            x: i,
                            y: a,
                            w: r,
                            h: o
                        })) : (u = te(h.rectangle), s = (c = h.handles.indexOf(h.grabbedElem)) < 2 ? u[c + 2] : u[c - 2], f = (l = ye(e, s)).x, p = l.y, d = l.w, y = l.h, h.setSize(f, p, d, y), h.emit("update", {
                            x: f,
                            y: p,
                            w: d,
                            h: y
                        })))
                    }), fe(se(h), "onMouseUp", function(t) {
                        h.grabbedElem = null, h.mouseOffset = null
                    }), fe(se(h), "destroy", function() {
                        h.group.parentNode.removeChild(h.group), h.resizeObserver && h.resizeObserver.disconnect(), h.resizeObserver = null
                    }), h.annotation = t, h.svg = e.closest("svg");
                    var n = Xt(t),
                        r = n.x,
                        o = n.y,
                        i = n.w,
                        a = n.h;
                    return h.group = document.createElementNS(Vt, "g"), h.rectangle = Zt(r, o, i, a), h.rectangle.setAttribute("class", "a9s-annotation editable"), h.group.appendChild(h.rectangle), h.rectangle.querySelector(".inner").addEventListener("mousedown", h.onGrab(h.rectangle)), h.svg.addEventListener("mousemove", h.onMouseMove), h.svg.addEventListener("mouseup", h.onMouseUp), h.handles = [
                        [r, o, "topleft"],
                        [r + i, o, "topright"],
                        [r + i, o + a, "bottomright"],
                        [r, o + a, "bottomleft"]
                    ].map(function(t) {
                        var e = oe(t, 3),
                            n = e[0],
                            r = e[1],
                            o = e[2],
                            i = pe(n, r, o);
                        return i.addEventListener("mousedown", h.onGrab(i)), h.group.appendChild(i), i
                    }), e.appendChild(h.group), h.grabbedElem = null, h.mouseOffset = null, h.enableResponsive(), h
                }
                return t = c, (e = [{
                    key: "element",
                    get: function() {
                        return this.rectangle
                    }
                }]) && ae(t.prototype, e), n && ae(t, n), c
            }();

        function me(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function be(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        var ge = function() {
            function r(t, e, n) {
                var u = this;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, r), be(this, "dragTo", function(t, e) {
                    u.opposite = [t, e];
                    var n = u.bbox,
                        r = n.x,
                        o = n.y,
                        i = n.w,
                        a = n.h;
                    ee(u.shape, r, o, i, a)
                }), be(this, "getBoundingClientRect", function() {
                    return u.shape.getBoundingClientRect()
                }), be(this, "toSelection", function() {
                    var t = u.bbox,
                        e = t.x,
                        n = t.y,
                        r = t.w,
                        o = t.h;
                    return new N(Yt(e, n, r, o))
                }), be(this, "destroy", function() {
                    u.shape.parentNode.removeChild(u.shape), u.shape = null
                }), this.anchor = [t, e], this.opposite = [t + 2, e + 2], this.shape = Zt(t, e, 2, 2), this.shape.setAttribute("class", "a9s-selection"), this.shape.style.pointerEvents = "none", n.appendChild(this.shape)
            }
            var t, e, n;
            return t = r, (e = [{
                key: "bbox",
                get: function() {
                    var t = this.opposite[0] - this.anchor[0],
                        e = this.opposite[1] - this.anchor[1];
                    return {
                        x: 0 < t ? this.anchor[0] : this.opposite[0],
                        y: 0 < e ? this.anchor[1] : this.opposite[1],
                        w: Math.max(1, Math.abs(t)),
                        h: Math.max(1, Math.abs(e))
                    }
                }
            }]) && me(t.prototype, e), n && me(t, n), r
        }();

        function ve(t) {
            return (ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function _e(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function we(t, e) {
            return (we = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function xe(i) {
            var a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e, n, r, o = Oe(i);
                return e = a ? (t = Oe(this).constructor, Reflect.construct(o, arguments, t)) : o.apply(this, arguments), n = this, !(r = e) || "object" !== ve(r) && "function" != typeof r ? Se(n) : r
            }
        }

        function Se(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function Oe(t) {
            return (Oe = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Ee(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        var Ae = function() {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && we(t, e)
            }(o, f.a);
            var t, e, n, r = xe(o);

            function o(t) {
                var a;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, o), Ee(Se(a = r.call(this)), "_attachListeners", function() {
                    a.svg.addEventListener("mousemove", a.onMouseMove), document.addEventListener("mouseup", a.onMouseUp)
                }), Ee(Se(a), "_detachListeners", function() {
                    a.svg.removeEventListener("mousemove", a.onMouseMove), document.removeEventListener("mouseup", a.onMouseUp)
                }), Ee(Se(a), "_toSVG", function(t, e) {
                    var n = a.svg.createSVGPoint(),
                        r = a.svg.getBoundingClientRect(),
                        o = r.left,
                        i = r.top;
                    return n.x = t + o, n.y = e + i, n.matrixTransform(a.g.getScreenCTM().inverse())
                }), Ee(Se(a), "startDrawing", function(t) {
                    var e = a._toSVG(t.layerX, t.layerY),
                        n = e.x,
                        r = e.y;
                    a._attachListeners(), a.rubberband = new ge(n, r, a.g)
                }), Ee(Se(a), "stop", function() {
                    a.rubberband && (a.rubberband.destroy(), a.rubberband = null)
                }), Ee(Se(a), "onMouseMove", function(t) {
                    var e = a._toSVG(t.layerX, t.layerY),
                        n = e.x,
                        r = e.y;
                    a.rubberband.dragTo(n, r)
                }), Ee(Se(a), "onMouseUp", function(t) {
                    var e;
                    a._detachListeners(), 3 < a.rubberband.bbox.w ? ((e = a.rubberband.shape).annotation = a.rubberband.toSelection(), a.emit("complete", e)) : (a.emit("cancel", t), a.stop())
                }), a.svg = t.closest("svg"), a.g = t, a.rubberband = null, a
            }
            return t = o, (e = [{
                key: "isDrawing",
                get: function() {
                    return null != this.rubberband
                }
            }]) && _e(t.prototype, e), n && _e(t, n), o
        }();

        function ke(t) {
            return (ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function je(t, e) {
            return (je = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function Ce(i) {
            var a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e, n, r, o = Te(i);
                return e = a ? (t = Te(this).constructor, Reflect.construct(o, arguments, t)) : o.apply(this, arguments), n = this, !(r = e) || "object" !== ke(r) && "function" != typeof r ? Pe(n) : r
            }
        }

        function Pe(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function Te(t) {
            return (Te = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Re(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        var Ne = function() {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && je(t, e)
            }(l, f.a);
            var s = Ce(l);

            function l(t) {
                var i;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, l), Re(Pe(i = s.call(this)), "enableDrawing", function() {
                    i.readOnly || (i.disableSelectHover(), i.svg.addEventListener("mousedown", i.startDrawing))
                }), Re(Pe(i), "disableDrawing", function() {
                    i.svg.removeEventListener("mousedown", i.startDrawing), i.enableSelectHover()
                }), Re(Pe(i), "enableSelectHover", function() {
                    return i.svg.addEventListener("mousedown", i.selectCurrentHover)
                }), Re(Pe(i), "disableSelectHover", function() {
                    return i.svg.removeEventListener("mousedown", i.selectCurrentHover)
                }), Re(Pe(i), "startDrawing", function(t) {
                    return i.currentTool.startDrawing(t)
                }), Re(Pe(i), "selectCurrentHover", function() {
                    i.currentHover && i.selectShape(i.currentHover)
                }), Re(Pe(i), "addAnnotation", function(e) {
                    var n = Zt(e);
                    return n.setAttribute("class", "a9s-annotation"), n.setAttribute("data-id", e.id), n.annotation = e, i.g.appendChild(n), n.addEventListener("mouseenter", function(t) {
                        i.currentHover !== n && i.emit("mouseEnterAnnotation", e, t), i.currentHover = n
                    }), n.addEventListener("mouseleave", function(t) {
                        i.currentHover === n && i.emit("mouseLeaveAnnotation", e, t), i.currentHover = null
                    }), n
                }), Re(Pe(i), "redraw", function() {
                    var t = Array.from(i.g.querySelectorAll(".a9s-annotation")),
                        e = t.map(function(t) {
                            return t.annotation
                        });
                    e.sort(function(t, e) {
                        return ne(e) - ne(t)
                    }), t.forEach(function(t) {
                        return i.g.removeChild(t)
                    }), e.forEach(i.addAnnotation)
                }), Re(Pe(i), "findShape", function(t) {
                    var e = null != t && t.id ? t.id : t;
                    return i.g.querySelector('.a9s-annotation[data-id="'.concat(e, '"]'))
                }), Re(Pe(i), "selectAnnotation", function(t) {
                    i.selectedShape && i.deselect();
                    var e = i.findShape(t);
                    return e ? i.selectShape(e, !0) : i.deselect(), null == e ? void 0 : e.annotation
                }), Re(Pe(i), "selectShape", function(t, e) {
                    var n, r;
                    (null === (n = i.selectedShape) || void 0 === n ? void 0 : n.annotation) !== (null == t ? void 0 : t.annotation) && (i.selectedShape && i.selectedShape.annotation !== t.annotation && i.deselect(!0), r = t.annotation, i.readOnly || r.readOnly || i.headless ? i.emit("select", {
                        annotation: r,
                        element: t,
                        skipEvent: e
                    }) : (i.disableDrawing(), t.annotation.isSelection && i.disableSelectHover(), t.parentNode.removeChild(t), i.selectedShape = new he(r, i.g), i.selectedShape.on("update", function(t) {
                        var e = t.x,
                            n = t.y,
                            r = t.w,
                            o = t.h;
                        i.emit("updateTarget", i.selectedShape.element, Yt(e, n, r, o))
                    }), i.emit("select", {
                        annotation: r,
                        element: i.selectedShape.element,
                        skipEvent: e
                    })))
                }), Re(Pe(i), "deselect", function(t) {
                    var e;
                    i.selectedShape && (e = i.selectedShape.annotation, i.selectedShape.destroy(), i.selectedShape = null, e.isSelection || (i.addAnnotation(e), t || i.redraw())), i.enableDrawing()
                }), Re(Pe(i), "init", function(t) {
                    t.sort(function(t, e) {
                        return ne(e) - ne(t)
                    }), t.forEach(i.addAnnotation)
                }), Re(Pe(i), "addOrUpdateAnnotation", function(t, e) {
                    var n, r;
                    (null === (n = i.selectedShape) || void 0 === n ? void 0 : n.annotation) !== t && (null === (r = i.selectShape) || void 0 === r ? void 0 : r.annotation) != e || i.deselect(), e && i.removeAnnotation(e), i.removeAnnotation(t), i.addAnnotation(t), i.redraw()
                }), Re(Pe(i), "removeAnnotation", function(t) {
                    var e;
                    (null === (e = i.selectedShape) || void 0 === e ? void 0 : e.annotation) === t && i.deselect();
                    var n = i.findShape(t);
                    n && n.parentNode.removeChild(n)
                }), Re(Pe(i), "getAnnotations", function() {
                    return Array.from(i.g.querySelectorAll(".a9s-annotation")).map(function(t) {
                        return t.annotation
                    })
                }), Re(Pe(i), "setAnnotationsVisible", function(t) {
                    i.svg.style.display = t ? null : "none"
                }), Re(Pe(i), "destroy", function() {
                    i.currentTool = null, i.currentHover = null, i.svg.parentNode.removeChild(i.svg)
                });
                var e = t.wrapperEl,
                    n = t.imageEl,
                    r = t.readOnly,
                    o = t.headless;
                i.readOnly = r, i.headless = o;
                var a, u = n.naturalWidth,
                    c = n.naturalHeight;
                return i.svg = document.createElementNS(Vt, "svg"), i.svg.classList.add("a9s-annotationlayer"), 0 == u && 0 == c ? n.onload = function() {
                    return i.svg.setAttribute("viewBox", "0 0 ".concat(n.naturalWidth, " ").concat(n.naturalHeight))
                } : i.svg.setAttribute("viewBox", "0 0 ".concat(u, " ").concat(c)), i.g = document.createElementNS(Vt, "g"), i.svg.appendChild(i.g), e.appendChild(i.svg), i.selectedShape = null, r ? i.enableSelectHover() : ((a = new Ae(i.g)).on("complete", i.selectShape), a.on("cancel", i.selectCurrentHover), i.currentTool = a, i.enableDrawing()), i.currentHover = null, i
            }
            return l
        }();
        n(76);

        function De(t) {
            return (De = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Me(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function Ue(t, e) {
            return (Ue = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function Le(i) {
            var a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e, n, r, o = ze(i);
                return e = a ? (t = ze(this).constructor, Reflect.construct(o, arguments, t)) : o.apply(this, arguments), n = this, !(r = e) || "object" !== De(r) && "function" != typeof r ? Ie(n) : r
            }
        }

        function Ie(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function ze(t) {
            return (ze = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Fe(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        var Be = function() {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Ue(t, e)
            }(i, b["Component"]);
            var t, e, n, r = Le(i);

            function i() {
                var o;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, i);
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return Fe(Ie(o = r.call.apply(r, [this].concat(e))), "state", {
                    selectedAnnotation: null,
                    selectedDOMElement: null,
                    modifiedTarget: null,
                    applyTemplate: null,
                    applyImmediately: null
                }), Fe(Ie(o), "clearState", function() {
                    return o.setState({
                        selectedAnnotation: null,
                        selectedDOMElement: null,
                        modifiedTarget: null
                    })
                }), Fe(Ie(o), "handleSelect", function(t) {
                    var e = t.annotation,
                        n = t.element,
                        r = t.skipEvent;
                    e ? (o.setState({
                        selectedAnnotation: e,
                        selectedDOMElement: n
                    }), e.isSelection || r || o.props.onAnnotationSelected(e.clone())) : o.clearState()
                }), Fe(Ie(o), "handleUpdateTarget", function(t, e) {
                    return o.setState({
                        selectedDOMElement: t,
                        modifiedTarget: e
                    })
                }), Fe(Ie(o), "onCreateOrUpdateAnnotation", function(r) {
                    return function(t, e) {
                        var n = o.state.modifiedTarget ? t.clone({
                            target: o.state.modifiedTarget
                        }) : t.clone();
                        o.clearState(), o.annotationLayer.deselect(), o.annotationLayer.addOrUpdateAnnotation(n, e), o.props[r](n, null == e ? void 0 : e.clone())
                    }
                }), Fe(Ie(o), "onDeleteAnnotation", function(t) {
                    o.clearState(), o.annotationLayer.removeAnnotation(t), o.props.onAnnotationDeleted(t)
                }), Fe(Ie(o), "onCancelAnnotation", function() {
                    o.clearState(), o.annotationLayer.deselect()
                }), Fe(Ie(o), "addAnnotation", function(t) {
                    return o.annotationLayer.addOrUpdateAnnotation(t.clone())
                }), Fe(Ie(o), "removeAnnotation", function(t) {
                    return o.annotationLayer.removeAnnotation(t.clone())
                }), Fe(Ie(o), "setAnnotations", function(t) {
                    return o.annotationLayer.init(t.map(function(t) {
                        return t.clone()
                    }))
                }), Fe(Ie(o), "getAnnotations", function() {
                    return o.annotationLayer.getAnnotations().map(function(t) {
                        return t.clone()
                    })
                }), Fe(Ie(o), "setAnnotationsVisible", function(t) {
                    return o.annotationLayer.setAnnotationsVisible(t)
                }), Fe(Ie(o), "selectAnnotation", function(t) {
                    var e = o.annotationLayer.selectAnnotation(t);
                    if (e) return e.clone();
                    o.clearState()
                }), Fe(Ie(o), "applyTemplate", function(t, e) {
                    return o.setState({
                        applyTemplate: t,
                        applyImmediately: !e
                    })
                }), o
            }
            return t = i, (e = [{
                key: "componentDidMount",
                value: function() {
                    this.annotationLayer = new Ne(this.props), this.annotationLayer.on("mouseEnterAnnotation", this.props.onMouseEnterAnnotation), this.annotationLayer.on("mouseLeaveAnnotation", this.props.onMouseLeaveAnnotation), this.annotationLayer.on("select", this.handleSelect), this.annotationLayer.on("updateTarget", this.handleUpdateTarget)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.annotationLayer.destroy()
                }
            }, {
                key: "render",
                value: function() {
                    var t, e, n = this.state.selectedAnnotation && !this.props.headless,
                        r = this.props.headless && this.state.applyTemplate && (null === (t = this.state.selectedAnnotation) || void 0 === t ? void 0 : t.isSelection),
                        o = 1 == n || 1 == r,
                        i = this.props.readOnly || (null === (e = this.state.selectedAnnotation) || void 0 === e ? void 0 : e.readOnly);
                    return o && b.default.createElement(p, {
                        wrapperEl: this.props.wrapperEl,
                        annotation: this.state.selectedAnnotation,
                        selectedElement: this.state.selectedDOMElement,
                        readOnly: i,
                        applyTemplate: this.state.applyTemplate,
                        applyImmediately: this.state.applyImmediately,
                        onAnnotationCreated: this.onCreateOrUpdateAnnotation("onAnnotationCreated"),
                        onAnnotationUpdated: this.onCreateOrUpdateAnnotation("onAnnotationUpdated"),
                        onAnnotationDeleted: this.onDeleteAnnotation,
                        onCancel: this.onCancelAnnotation
                    }, this.props.children)
                }
            }]) && Me(t.prototype, e), n && Me(t, n), i
        }();
        n(78);

        function He(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        I();
        var $e = function t(e) {
                var r = this;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), He(this, "handleAnnotationSelected", function(t) {
                    return r._emitter.emit("selectAnnotation", t.underlying)
                }), He(this, "handleAnnotationCreated", function(t) {
                    return r._emitter.emit("createAnnotation", t.underlying)
                }), He(this, "handleAnnotationUpdated", function(t, e) {
                    return r._emitter.emit("updateAnnotation", t.underlying, e.underlying)
                }), He(this, "handleAnnotationDeleted", function(t) {
                    return r._emitter.emit("deleteAnnotation", t.underlying)
                }), He(this, "handleMouseEnterAnnotation", function(t, e) {
                    return r._emitter.emit("mouseEnterAnnotation", t.underlying, e)
                }), He(this, "handleMouseLeaveAnnotation", function(t, e) {
                    return r._emitter.emit("mouseLeaveAnnotation", t.underlying, e)
                }), He(this, "addAnnotation", function(t, e) {
                    return r._app.current.addAnnotation(new j(t, {
                        readOnly: e
                    }))
                }), He(this, "removeAnnotation", function(t) {
                    return r._app.current.removeAnnotation(new j(t))
                }), He(this, "loadAnnotations", function(t) {
                    return u.a.get(t).then(function(t) {
                        var e = t.data.map(function(t) {
                            return new j(t)
                        });
                        return r._app.current.setAnnotations(e), e
                    })
                }), He(this, "setAnnotations", function(t) {
                    var e = t.map(function(t) {
                        return new j(t)
                    });
                    r._app.current.setAnnotations(e)
                }), He(this, "getAnnotations", function() {
                    return r._app.current.getAnnotations().map(function(t) {
                        return t._annotation
                    })
                }), He(this, "setAnnotationsVisible", function(t) {
                    return r._app.current.setAnnotationsVisible(t)
                }), He(this, "selectAnnotation", function(t) {
                    var e = "Annotation" === (null == t ? void 0 : t.type) ? new j(t) : t,
                        n = r._app.current.selectAnnotation(e);
                    return null == n ? void 0 : n.underlying
                }), He(this, "applyTemplate", function(t, e) {
                    var n = Array.isArray(t) ? t : [t];
                    r._app.current.applyTemplate(n, e)
                }), He(this, "destroy", function() {
                    return b.default.unmountComponentAtNode(r._appContainerEl)
                }), He(this, "setAuthInfo", function(t) {
                    return g.user = t
                }), He(this, "clearAuthInfo", function() {
                    return g.user = null
                }), He(this, "setServerTime", function(t) {
                    return g.setServerTime(t)
                }), He(this, "on", function(t, e) {
                    return r._emitter.on(t, e)
                }), He(this, "off", function(t, e) {
                    return r._emitter.off(t, e)
                }), this._app = b.default.createRef(), this._emitter = new f.a;
                var n = e.image.nodeType ? e.image : document.getElementById(e.image);
                n.style.display = "block", g.image = n,
                    function(t) {
                        if (t) {
                            var e = "auto" === t ? window.navigator.userLanguage || window.navigator.language : t;
                            try {
                                v.init(e.split("-")[0].toLowerCase())
                            } catch (t) {
                                console.warn("Unsupported locale '".concat(e, "'. Falling back to default en."))
                            }
                        }
                    }(e.locale);
                var o = document.createElement("DIV");
                o.style.position = "relative", o.style.display = "inline-block", n.parentNode.insertBefore(o, n), o.appendChild(n), this._appContainerEl = document.createElement("DIV"), o.appendChild(this._appContainerEl);
                var i = p.CommentWidget,
                    a = p.TagWidget;
                b.default.render(b.default.createElement(Be, {
                    ref: this._app,
                    imageEl: n,
                    wrapperEl: o,
                    readOnly: e.readOnly,
                    headless: e.headless,
                    onAnnotationSelected: this.handleAnnotationSelected,
                    onAnnotationCreated: this.handleAnnotationCreated,
                    onAnnotationUpdated: this.handleAnnotationUpdated,
                    onAnnotationDeleted: this.handleAnnotationDeleted,
                    onMouseEnterAnnotation: this.handleMouseEnterAnnotation,
                    onMouseLeaveAnnotation: this.handleMouseLeaveAnnotation
                }, b.default.createElement(i, null), b.default.createElement(a, null)), this._appContainerEl)
            },
            qe = function(t) {
                return new $e(t)
            }
    }], o.c = r, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o(o.s = 80);

    function o(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports
    }
    var n, r
});