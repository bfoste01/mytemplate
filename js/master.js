(function() {
    var ab = window;

    function aa(e) {
        var d = Z,
            h;
        e: {
            h = d.className.split(/\s+/);
            for (var c = 0, f = h.length; c < f; c += 1) {
                if (h[c] === e) {
                    h = !0;
                    break e
                }
            }
            h = !1
        }
        h || (d.className += ("" === d.className ? "" : " ") + e)
    }

    function Y(d, c, e) {
        this.b = null != d ? d : null;
        this.c = null != c ? c : null;
        this.e = null != e ? e : null
    }
    var X = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;

    function W(d, c) {
        return d.b > c.b || d.b === c.b && d.c > c.c || d.b === c.b && d.c === c.c && d.e > c.e ? 1 : d.b < c.b || d.b === c.b && d.c < c.c || d.b === c.b && d.c === c.c && d.e < c.e ? -1 : 0
    }

    function V(d, c) {
        return 0 === W(d, c) || 1 === W(d, c)
    }

    function U() {
        var e = X.exec(T[1]),
            d = null,
            f = null,
            c = null;
        e && (null !== e[1] && e[1] && (d = parseInt(e[1], 10)), null !== e[2] && e[2] && (f = parseInt(e[2], 10)), null !== e[3] && e[3] && (c = parseInt(e[3], 10)));
        return new Y(d, f, c)
    }

    function R() {
        var c = P;
        return 3 === c.a || 7 === c.a || 6 === c.a || 9 === c.a || 8 === c.a || 5 === c.a ? "grayscale" : 1 === c.a && V(c.f, new Y(6, 2)) && 1 === c.d ? "grayscale" : "unknown"
    }
    var P, N = ab.navigator.userAgent,
        L = 0,
        J = new Y,
        o = 0,
        j = new Y,
        T = null;
    if (T = /(?:iPod|iPad|iPhone).*? OS ([\d_]+)/.exec(N)) {
        o = 3, j = U()
    } else {
        if (T = /(?:BB\d{2}|BlackBerry).*?Version\/([^\s]*)/.exec(N)) {
            o = 9, j = U()
        } else {
            if (T = /Android ([^;)]+)|Android/.exec(N)) {
                o = 5, j = U()
            } else {
                if (T = /Windows Phone(?: OS)? ([^;)]+)/.exec(N)) {
                    o = 8, j = U()
                } else {
                    if (T = /Linux ([^;)]+)|Linux/.exec(N)) {
                        o = 4, j = U()
                    } else {
                        if (T = /OS X ([^;)]+)/.exec(N)) {
                            o = 2, j = U()
                        } else {
                            if (T = /Windows NT ([^;)]+)/.exec(N)) {
                                o = 1, j = U()
                            } else {
                                if (T = /CrOS ([^;)]+)/.exec(N)) {
                                    o = 6, j = U()
                                }
                            }
                        }
                    }
                }
            }
        }
    } if (T = /MSIE ([\d\w\.]+)/.exec(N)) {
        L = 1, J = U()
    } else {
        if (T = /Trident.*rv:([\d\w\.]+)/.exec(N)) {
            L = 1, J = U()
        } else {
            if (T = /OPR\/([\d.]+)/.exec(N)) {
                L = 4, J = U()
            } else {
                if (T = /Opera Mini.*Version\/([\d\.]+)/.exec(N)) {
                    L = 4, J = U()
                } else {
                    if (T = /Opera(?: |.*Version\/|\/)([\d\.]+)/.exec(N)) {
                        L = 4, J = U()
                    } else {
                        if (T = /Firefox\/([\d\w\.]+)|Firefox/.exec(N)) {
                            L = 3, J = U()
                        } else {
                            if (T = /(?:Chrome|CrMo|CriOS)\/([\d\.]+)/.exec(N)) {
                                L = 2, J = U()
                            } else {
                                if (T = /Silk\/([\d\._]+)/.exec(N)) {
                                    L = 7, J = U()
                                } else {
                                    if (5 === o || 9 === o) {
                                        L = 6
                                    } else {
                                        if (T = /Version\/([\d\.\w]+).*Safari/.exec(N)) {
                                            L = 5, J = U()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    P = new function(e, d, f, c) {
        this.d = e;
        this.g = d;
        this.a = f;
        this.f = c
    }(L, J, o, j);
    var i = R(),
        b, a = R();
    b = "unknown" !== a ? a : 2 === P.a || 4 === P.a ? "subpixel" : 1 === P.a ? V(P.f, new Y(6, 0)) ? "subpixel" : 1 === P.d ? V(P.g, new Y(7, 0)) ? "subpixel" : "grayscale" : "subpixel" : "unknown";
    var Z = ab.document.documentElement,
        S;
    if (1 === P.a) {
        var Q, O;
        if (!(O = 2 === P.d)) {
            var M;
            (M = 4 === P.d) || (M = -1 === W(P.f, new Y(6, 0)));
            O = M
        }
        if (O) {
            Q = "gdi"
        } else {
            var K;
            if (V(P.f, new Y(6, 0))) {
                var H;
                if (H = 1 === P.d) {
                    var m = P.g,
                        g = new Y(8, 0);
                    H = 0 === W(m, g) || -1 === W(m, g)
                }
                K = H ? "gdi" : "directwrite"
            } else {
                K = "unknown"
            }
            Q = K
        }
        S = Q
    } else {
        S = 8 === P.a ? "directwrite" : 2 === P.a || 3 === P.a ? "coretext" : 5 === P.a || 4 === P.a || 6 === P.a || 7 === P.a || 9 === P.a ? "freetype" : "unknown"
    }
    aa("tr-" + S);
    "unknown" === i && "unknown" !== b && (i += "-" + b);
    aa("tr-aa-" + i)
}());
(function(d, e, j, h, f, c, b) {
    d.GoogleAnalyticsObject = f;
    d[f] = d[f] || function() {
        (d[f].q = d[f].q || []).push(arguments)
    }, d[f].l = 1 * new Date();
    c = e.createElement(j), b = e.getElementsByTagName(j)[0];
    c.async = 1;
    c.src = h;
    b.parentNode.insertBefore(c, b)
})(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
ga("create", "UA-45524949-1", "ericlagergren.com");
ga("send", "pageview");
$(document).ready(function() {
    $(".show_navigation").click(function() {
        $(".nav-main").css({
            position: "fixed",
            width: "100%",
            margin: "0 auto",
            background: "#fff",
            "border-bottom": "1px dotted #333"
        });
        if ($(window).width() <= 1000) {
            $("body").css({"margin-top":"253px"})
        } else {
            $("body").css({
            "margin-top": "199px"
        })
        };
        $(".show_navigation").css({
            display: "none"
        });
        $(".close_navigation").css({
            display: "block"
        })
    });
    $(".close_navigation").click(function() {
        $(".nav-main").css({
            position: "relative",
            width: "100%",
            background: "#fff",
            "border-bottom": "none"
        });
        $("body").css({
            "margin-top": "0px"
        });
        $(".close_navigation").css({
            display: "none"
        });
        $(".show_navigation").css({
            display: "block"
        })
    })
});