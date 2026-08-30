(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 60483, e => {
    "use strict";
    var t = e.i(24688);

    function r(e, t) {
        return (...e) => {
            try {
                return t(...e)
            } catch {
                throw Error(void 0)
            }
        }
    }
    let n = r(0, t.useTranslations);
    r(0, t.useFormatter), e.s(["useTranslations", 0, n])
}, 68960, (e, t, r) => {
    t.exports = e.r(71190)
}, 4609, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        formatUrl: function() {
            return u
        },
        formatWithValidation: function() {
            return c
        },
        urlObjectKeys: function() {
            return i
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let o = e.r(44066)._(e.r(62252)),
        l = /https?|ftp|gopher|file/;

    function u(e) {
        let {
            auth: t,
            hostname: r
        } = e, n = e.protocol || "", a = e.pathname || "", u = e.hash || "", i = e.query || "", c = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (c += ":" + e.port)), i && "object" == typeof i && (i = String(o.urlQueryToSearchParams(i)));
        let f = e.search || i && `?${i}` || "";
        return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || l.test(n)) && !1 !== c ? (c = "//" + (c || ""), a && "/" !== a[0] && (a = "/" + a)) : c || (c = ""), u && "#" !== u[0] && (u = "#" + u), f && "?" !== f[0] && (f = "?" + f), a = a.replace(/[?#]/g, encodeURIComponent), f = f.replace("#", "%23"), `${n}${c}${a}${f}${u}`
    }
    let i = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function c(e) {
        return u(e)
    }
}, 20086, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(31308);

    function a(e, t) {
        let r = (0, n.useRef)(null),
            a = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = a.current;
                t && (a.current = null, t())
            } else e && (r.current = o(e, n)), t && (a.current = o(t, n))
        }, [e, t])
    }

    function o(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 75922, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(21016),
        a = e.r(30858);

    function o(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, n.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, a.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}, 62590, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 4209, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return g
        },
        useLinkStatus: function() {
            return b
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let o = e.r(44066),
        l = e.r(82513),
        u = o._(e.r(31308)),
        i = e.r(4609),
        c = e.r(92156),
        f = e.r(20086),
        s = e.r(21016),
        p = e.r(97766);
    e.r(69616);
    let h = e.r(40728),
        d = e.r(98293),
        m = e.r(75922),
        y = e.r(11838);

    function g(t) {
        var r, n;
        let a, o, g, [b, v] = (0, u.useOptimistic)(d.IDLE_LINK_STATUS),
            x = (0, u.useRef)(null),
            {
                href: L,
                as: j,
                children: R,
                prefetch: _ = null,
                passHref: S,
                replace: O,
                shallow: C,
                scroll: k,
                onClick: T,
                onMouseEnter: E,
                onTouchStart: M,
                legacyBehavior: w = !1,
                onNavigate: A,
                transitionTypes: $,
                ref: U,
                unstable_dynamicOnHover: z,
                ...N
            } = t;
        a = R, w && ("string" == typeof a || "number" == typeof a) && (a = (0, l.jsx)("a", {
            children: a
        }));
        let I = u.default.useContext(c.AppRouterContext),
            B = !1 !== _,
            D = !1 !== _ ? null === (n = _) || "auto" === n ? y.FetchStrategy.PPR : y.FetchStrategy.Full : y.FetchStrategy.PPR,
            K = "string" == typeof(r = j || L) ? r : (0, i.formatUrl)(r);
        if (w) {
            if (a ?.$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            o = u.default.Children.only(a)
        }
        let W = w ? o && "object" == typeof o && o.ref : U,
            F = u.default.useCallback(e => (null !== I && (x.current = (0, d.mountLinkInstance)(e, K, I, D, B, v)), () => {
                x.current && ((0, d.unmountLinkForCurrentNavigation)(x.current), x.current = null), (0, d.unmountPrefetchableInstance)(e)
            }), [B, K, I, D, v]),
            q = {
                ref: (0, f.useMergedRef)(F, W),
                onClick(t) {
                    w || "function" != typeof T || T(t), w && o.props && "function" == typeof o.props.onClick && o.props.onClick(t), !I || t.defaultPrevented || function(t, r, n, a, o, l, i) {
                        if ("u" > typeof window) {
                            let c, {
                                nodeName: f
                            } = t.currentTarget;
                            if ("A" === f.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, m.isLocalURL)(r)) {
                                a && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), l) {
                                let e = !1;
                                if (l({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: s
                            } = e.r(97039);
                            u.default.startTransition(() => {
                                s(r, a ? "replace" : "push", !1 === o ? h.ScrollBehavior.NoScroll : h.ScrollBehavior.Default, n.current, i)
                            })
                        }
                    }(t, K, x, O, k, A, $)
                },
                onMouseEnter(e) {
                    w || "function" != typeof E || E(e), w && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), I && B && (0, d.onNavigationIntent)(e.currentTarget, !0 === z)
                },
                onTouchStart: function(e) {
                    w || "function" != typeof M || M(e), w && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), I && B && (0, d.onNavigationIntent)(e.currentTarget, !0 === z)
                }
            };
        return (0, s.isAbsoluteUrl)(K) ? q.href = K : w && !S && ("a" !== o.type || "href" in o.props) || (q.href = (0, p.addBasePath)(K)), g = w ? u.default.cloneElement(o, q) : (0, l.jsx)("a", { ...N,
            ...q,
            children: a
        }), (0, l.jsx)(P.Provider, {
            value: b,
            children: g
        })
    }
    e.r(62590);
    let P = (0, u.createContext)(d.IDLE_LINK_STATUS),
        b = () => (0, u.useContext)(P);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 79786, 34687, 93438, 8160, e => {
    "use strict";
    var t = e.i(28549);

    function r(e) {
        let t;
        return ("object" == typeof e ? null == e.host && null == e.hostname : !/^[a-z]+:/i.test(e)) && (null == (t = "object" == typeof e ? e.pathname : e) || !!t.startsWith("/"))
    }

    function n(e, t) {
        let r = e;
        return /^\/(\?.*)?$/.test(t) && (t = t.slice(1)), r += t
    }

    function a(e, t, r) {
        return "string" == typeof e ? e : e[t] || r
    }

    function o(e) {
        let r = function() {
                try {
                    return "true" === t.default.env._next_intl_trailing_slash
                } catch {
                    return !1
                }
            }(),
            [n, ...a] = e.split("#"),
            o = a.join("#"),
            l = n;
        if ("/" !== l) {
            let e = l.endsWith("/");
            r && !e ? l += "/" : !r && e && (l = l.slice(0, -1))
        }
        return o && (l += "#" + o), l
    }

    function l(e, t) {
        let r, n = o(e),
            a = o(t);
        return (r = n.replace(/\/\[\[(\.\.\.[^\]]+)\]\]/g, "(?:/(.*))?").replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "(?:/(.*))?").replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)").replace(/\[([^\]]+)\]/g, "([^/]+)"), RegExp(`^${r}$`)).test(a)
    }

    function u(e, t) {
        return "never" !== t.mode && t.prefixes ?.[e] || i(e)
    }

    function i(e) {
        return "/" + e
    }

    function c(e) {
        return e.includes("[[...")
    }

    function f(e) {
        return e.includes("[...")
    }

    function s(e) {
        return e.includes("[")
    }

    function p(e, t) {
        let r = e.split("/"),
            n = t.split("/"),
            a = Math.max(r.length, n.length);
        for (let e = 0; e < a; e++) {
            let t = r[e],
                a = n[e];
            if (!t && a) return -1;
            if (t && !a) return 1;
            if (t || a) {
                if (!s(t) && s(a)) return -1;
                if (s(t) && !s(a)) return 1;
                if (!f(t) && f(a)) return -1;
                if (f(t) && !f(a)) return 1;
                if (!c(t) && c(a)) return -1;
                if (c(t) && !c(a)) return 1
            }
        }
        return 0
    }

    function h(e) {
        return e.sort(p)
    }
    e.s(["getLocaleAsPrefix", 0, i, "getLocalePrefix", 0, u, "getLocalizedTemplate", 0, a, "getSortedPathnames", 0, h, "hasPathnamePrefixed", 0, function(e, t) {
        return t === e || t.startsWith(`${e}/`)
    }, "isLocalizableHref", 0, r, "isPromise", 0, function(e) {
        return "function" == typeof e.then
    }, "matchesPathname", 0, l, "normalizeTrailingSlash", 0, o, "prefixPathname", 0, n, "unprefixPathname", 0, function(e, t) {
        return e.replace(RegExp(`^${t}`), "") || "/"
    }], 79786);
    var d = e.i(4209),
        m = e.i(68960),
        y = e.i(31308),
        g = e.i(24688);

    function P(e) {
        let t = new URLSearchParams;
        for (let [r, n] of Object.entries(e)) Array.isArray(n) ? n.forEach(e => {
            t.append(r, String(e))
        }) : t.set(r, String(n));
        return "?" + t.toString()
    }

    function b(e, t = window.location.pathname) {
        return "/" === e ? t : t.replace(e, "")
    }

    function v(e, t, r, n) {
        if (!e || n === r || null == n || !t) return;
        let a = b(t),
            {
                name: o,
                ...l
            } = e;
        l.path || (l.path = "" !== a ? a : "/");
        let u = `${o}=${n};`;
        for (let [e, t] of Object.entries(l)) u += `${"maxAge"===e?"max-age":e}`, "boolean" != typeof t && (u += "=" + t), u += ";";
        document.cookie = u
    }
    e.s(["applyPathnamePrefix", 0, function(e, t, a, o) {
        let l, {
            mode: i
        } = a.localePrefix;
        if (void 0 !== o) l = o;
        else if (r(e)) {
            let e = a.domains ?.find(e => e.locales.includes(t)),
                r = e ?.localePrefix || i;
            "always" === r ? l = !0 : "as-needed" === r && (l = e ? t !== e.defaultLocale : t !== a.defaultLocale)
        }
        return l ? n(u(t, a.localePrefix), e) : e
    }, "compileLocalizedPathname", 0, function({
        pathname: e,
        locale: t,
        params: r,
        pathnames: n,
        query: l
    }) {
        function u(e) {
            let u, i = n[e];
            return i ? (u = a(i, t, e), r && Object.entries(r).forEach(([e, t]) => {
                let r, n;
                Array.isArray(t) ? (r = `(\\[)?\\[...${e}\\](\\])?`, n = t.map(e => String(e)).join("/")) : (r = `\\[${e}\\]`, n = String(t)), u = u.replace(RegExp(r, "g"), n)
            }), u = new URL(u = u.replace(/\[\[\.\.\..+\]\]/g, ""), "http://l").pathname) : u = e, u = o(u), l && (u += P(l)), u
        }
        if ("string" == typeof e) return u(e); {
            let {
                pathname: t,
                ...r
            } = e;
            return { ...r,
                pathname: u(t)
            }
        }
    }, "getBasePath", 0, b, "getRoute", 0, function(e, t, r) {
        let n = h(Object.keys(r)),
            o = decodeURI(t);
        for (let t of n) {
            let n = r[t];
            if ("string" == typeof n) {
                if (l(n, o)) return t
            } else if (l(a(n, e, t), o)) return t
        }
        return t
    }, "normalizeNameOrNameWithParams", 0, function(e) {
        return "string" == typeof e ? {
            pathname: e
        } : e
    }, "serializeSearchParams", 0, P], 34687), e.s(["default", 0, v], 93438);
    var x = e.i(82513),
        L = (0, y.forwardRef)(function({
            href: e,
            locale: t,
            localeCookie: r,
            onClick: n,
            prefetch: a,
            ...o
        }, l) {
            let u = (0, g.useLocale)(),
                i = null != t && t !== u,
                c = (0, m.usePathname)();
            return i && (a = !1), (0, x.jsx)(d.default, {
                ref: l,
                href: e,
                hrefLang: i ? t : void 0,
                onClick: function(e) {
                    v(r, c, u, t), n && n(e)
                },
                prefetch: a,
                ...o
            })
        });
    e.s(["default", 0, L], 8160)
}, 56904, e => {
    "use strict";
    var t = e.i(68960),
        r = e.i(31308),
        n = e.i(24688),
        a = r["use".trim()],
        o = e.i(79786),
        l = e.i(8160),
        u = e.i(34687),
        i = e.i(82513),
        c = e.i(93438);
    let {
        Link: f,
        redirect: s,
        usePathname: p,
        useRouter: h,
        getPathname: d
    } = function(e) {
        let {
            Link: f,
            config: s,
            getPathname: p,
            ...h
        } = function(e, n) {
            var c, f, s;
            let p = { ...c = n || {},
                    localePrefix: "object" == typeof(s = c.localePrefix) ? s : {
                        mode: s || "always"
                    },
                    localeCookie: !!((f = c.localeCookie) ?? 1) && {
                        name: "NEXT_LOCALE",
                        sameSite: "lax",
                        ..."object" == typeof f && f
                    },
                    localeDetection: c.localeDetection ?? !0,
                    alternateLinks: c.alternateLinks ?? !0
                },
                h = p.pathnames,
                d = (0, r.forwardRef)(function({
                    href: t,
                    locale: r,
                    ...n
                }, u) {
                    let c, f;
                    "object" == typeof t ? (c = t.pathname, f = t.params) : c = t;
                    let s = (0, o.isLocalizableHref)(t),
                        d = e(),
                        y = (0, o.isPromise)(d) ? a(d) : d,
                        g = s ? m({
                            locale: r || y,
                            href: null == h ? c : {
                                pathname: c,
                                params: f
                            },
                            forcePrefix: null != r || void 0
                        }) : c;
                    return (0, i.jsx)(l.default, {
                        ref: u,
                        href: "object" == typeof t ? { ...t,
                            pathname: g
                        } : g,
                        locale: r,
                        localeCookie: p.localeCookie,
                        ...n
                    })
                });

            function m(e) {
                let t, {
                    forcePrefix: r,
                    href: n,
                    locale: a
                } = e;
                return null == h ? "object" == typeof n ? (t = n.pathname, n.query && (t += (0, u.serializeSearchParams)(n.query))) : t = n : t = (0, u.compileLocalizedPathname)({
                    locale: a,
                    ...(0, u.normalizeNameOrNameWithParams)(n),
                    pathnames: p.pathnames
                }), (0, u.applyPathnamePrefix)(t, a, p, r)
            }

            function y(e) {
                return function(t, ...r) {
                    return e(m(t), ...r)
                }
            }
            return {
                config: p,
                Link: d,
                redirect: y(t.redirect),
                permanentRedirect: y(t.permanentRedirect),
                getPathname: m
            }
        }(n.useLocale, e);
        return { ...h,
            Link: f,
            usePathname: function() {
                let e, a, l = (e = (0, t.usePathname)(), a = (0, n.useLocale)(), (0, r.useMemo)(() => {
                        if (!e) return e;
                        let t = e,
                            r = (0, o.getLocalePrefix)(a, s.localePrefix);
                        if ((0, o.hasPathnamePrefixed)(r, e)) t = (0, o.unprefixPathname)(e, r);
                        else if ("never" !== s.localePrefix.mode && s.localePrefix.prefixes) {
                            let r = (0, o.getLocaleAsPrefix)(a);
                            (0, o.hasPathnamePrefixed)(r, e) && (t = (0, o.unprefixPathname)(e, r))
                        }
                        return t
                    }, [s.localePrefix, a, e])),
                    i = (0, n.useLocale)();
                return (0, r.useMemo)(() => l && s.pathnames ? (0, u.getRoute)(i, l, s.pathnames) : l, [i, l])
            },
            useRouter: function() {
                let e = (0, t.useRouter)(),
                    a = (0, n.useLocale)(),
                    o = (0, t.usePathname)();
                return (0, r.useMemo)(() => {
                    function t(e) {
                        return function(t, r) {
                            let {
                                locale: n,
                                ...l
                            } = r || {}, u = [p({
                                href: t,
                                locale: n || a,
                                forcePrefix: null != n || void 0
                            })];
                            Object.keys(l).length > 0 && u.push(l), (0, c.default)(s.localeCookie, o, a, n), e(...u)
                        }
                    }
                    return { ...e,
                        push: t(e.push),
                        replace: t(e.replace),
                        prefetch: t(e.prefetch)
                    }
                }, [a, o, e])
            },
            getPathname: p
        }
    }({
        locales: ["en", "es", "pt-BR", "ja", "ko", "zh-TW"],
        defaultLocale: "en",
        localePrefix: "as-needed"
    });
    e.s(["usePathname", 0, p, "useRouter", 0, h], 56904)
}, 88019, e => {
    "use strict";
    var t = e.i(31308);
    e.s(["useReducedMotion", 0, function() {
        let [e, r] = (0, t.useState)(!1);
        return (0, t.useEffect)(() => {
            let e = window.matchMedia("(prefers-reduced-motion: reduce)");
            r(e.matches);
            let t = e => r(e.matches);
            return e.addEventListener("change", t), () => e.removeEventListener("change", t)
        }, []), e
    }])
}]);