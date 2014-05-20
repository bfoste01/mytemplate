(function() {
    function X(d) {
        var b = z,
            f;
        d: {
            f = b.className.split(/\s+/);
            for (var c = 0, a = f.length; c < a; c += 1) {
                if (f[c] === d) {
                    f = !0;
                    break d;
                }
            }
            f = !1;
        }
        f || (b.className += ("" === b.className ? "" : " ") + d);
    }

    function H(b, a, c) {
        this.b = null != b ? b : null;
        this.c = null != a ? a : null;
        this.e = null != c ? c : null;
    }

    function O(b, a) {
        return b.b > a.b || b.b === a.b && b.c > a.c || b.b === a.b && b.c === a.c && b.e > a.e ? 1 : b.b < a.b || b.b === a.b && b.c < a.c || b.b === a.b && b.c === a.c && b.e < a.e ? -1 : 0;
    }

    function K(b, a) {
        return 0 === O(b, a) || 1 === O(b, a);
    }

    function R() {
        var c = F.exec(Y[1]),
            d = null,
            b = null,
            a = null;
        c && (null !== c[1] && c[1] && (d = parseInt(c[1], 10)), null !== c[2] && c[2] && (b = parseInt(c[2], 10)), null !== c[3] && c[3] && (a = parseInt(c[3], 10)));
        return new H(d, b, a);
    }

    function I() {
        var a = ab;
        return 3 === a.a || 7 === a.a || 6 === a.a || 9 === a.a || 8 === a.a || 5 === a.a ? "grayscale" : 1 === a.a && K(a.f, new H(6, 2)) && 1 === a.d ? "grayscale" : "unknown";
    }
    var M = window;
    var F = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    var ab, W = M.navigator.userAgent,
        Q = 0,
        Z = new H,
        U = 0,
        L = new H,
        Y = null;
    if (Y = /(?:iPod|iPad|iPhone).*? OS ([\d_]+)/.exec(W)) {
        U = 3, L = R();
    } else {
        if (Y = /(?:BB\d{2}|BlackBerry).*?Version\/([^\s]*)/.exec(W)) {
            U = 9, L = R();
        } else {
            if (Y = /Android ([^;)]+)|Android/.exec(W)) {
                U = 5, L = R();
            } else {
                if (Y = /Windows Phone(?: OS)? ([^;)]+)/.exec(W)) {
                    U = 8, L = R();
                } else {
                    if (Y = /Linux ([^;)]+)|Linux/.exec(W)) {
                        U = 4, L = R();
                    } else {
                        if (Y = /OS X ([^;)]+)/.exec(W)) {
                            U = 2, L = R();
                        } else {
                            if (Y = /Windows NT ([^;)]+)/.exec(W)) {
                                U = 1, L = R();
                            } else {
                                if (Y = /CrOS ([^;)]+)/.exec(W)) {
                                    U = 6, L = R();
                                }
                            }
                        }
                    }
                }
            }
        }
    } if (Y = /MSIE ([\d\w\.]+)/.exec(W)) {
        Q = 1, Z = R();
    } else {
        if (Y = /Trident.*rv:([\d\w\.]+)/.exec(W)) {
            Q = 1, Z = R();
        } else {
            if (Y = /OPR\/([\d.]+)/.exec(W)) {
                Q = 4, Z = R();
            } else {
                if (Y = /Opera Mini.*Version\/([\d\.]+)/.exec(W)) {
                    Q = 4, Z = R();
                } else {
                    if (Y = /Opera(?: |.*Version\/|\/)([\d\.]+)/.exec(W)) {
                        Q = 4, Z = R();
                    } else {
                        if (Y = /Firefox\/([\d\w\.]+)|Firefox/.exec(W)) {
                            Q = 3, Z = R();
                        } else {
                            if (Y = /(?:Chrome|CrMo|CriOS)\/([\d\.]+)/.exec(W)) {
                                Q = 2, Z = R();
                            } else {
                                if (Y = /Silk\/([\d\._]+)/.exec(W)) {
                                    Q = 7, Z = R();
                                } else {
                                    if (5 === U || 9 === U) {
                                        Q = 6;
                                    } else {
                                        if (Y = /Version\/([\d\.\w]+).*Safari/.exec(W)) {
                                            Q = 5, Z = R();
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
    ab = new function(c, a, d, b) {
        this.d = c;
        this.g = a;
        this.a = d;
        this.f = b;
    }(Q, Z, U, L);
    var D = I(),
        P, V = I();
    P = "unknown" !== V ? V : 2 === ab.a || 4 === ab.a ? "subpixel" : 1 === ab.a ? K(ab.f, new H(6, 0)) ? "subpixel" : 1 === ab.d ? K(ab.g, new H(7, 0)) ? "subpixel" : "grayscale" : "subpixel" : "unknown";
    var z = M.document.documentElement,
        aa;
    if (1 === ab.a) {
        var B, G;
        if (!(G = 2 === ab.d)) {
            var k;
            (k = 4 === ab.d) || (k = -1 === O(ab.f, new H(6, 0)));
            G = k;
        }
        if (G) {
            B = "gdi";
        } else {
            var A;
            if (K(ab.f, new H(6, 0))) {
                var j;
                if (j = 1 === ab.d) {
                    var q = ab.g,
                        J = new H(8, 0);
                    j = 0 === O(q, J) || -1 === O(q, J);
                }
                A = j ? "gdi" : "directwrite";
            } else {
                A = "unknown";
            }
            B = A;
        }
        aa = B;
    } else {
        aa = 8 === ab.a ? "directwrite" : 2 === ab.a || 3 === ab.a ? "coretext" : 5 === ab.a || 4 === ab.a || 6 === ab.a || 7 === ab.a || 9 === ab.a ? "freetype" : "unknown";
    }
    X("tr-" + aa);
    "unknown" === D && "unknown" !== P && (D += "-" + P);
    X("tr-aa-" + D);
})();
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
            $("body").css({
                "margin-top": "255px"
            });
        } else {
            $("body").css({
                "margin-top": "199px"
            });
        }
        $(".show_navigation").css({
            display: "none"
        });
        $(".close_navigation").css({
            display: "block"
        });
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
        });
    });
});
var disqus_shortname = "ericlagergren";
(function() {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = true;
    a.src = "//" + disqus_shortname + ".disqus.com/embed.js";
    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(a);
})();
$(document).ready(function() {
    $("#note").click(function(a) {
        a.preventDefault();
        $("#note-body").slideToggle("slow");
    });
});
var hashTagActive = "";
$(".scroll").click(function(b) {
    if (hashTagActive != this.hash) {
        b.preventDefault();
        var a = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            a = $(document).height() - $(window).height();
        } else {
            a = $(this.hash).offset().top;
        }
        $("html,body").animate({
            scrollTop: a
        }, 2000, "swing");
        hashTagActive = this.hash;
    }
});
$(".to-top").hide();
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $(".to-top").fadeIn();
    } else {
        $(".to-top").fadeOut();
    }
});