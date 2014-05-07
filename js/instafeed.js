(function (e) {
    e.fn.instagram = function (t) {
        function s(t) {
            if (t.caption == null) { //originally was: if (t.caption !== null) which threw errors
                var n = " " // var n = t.caption.text + "  -  "
            } else {
                var n = t.caption.text + "  -  "//var n = " "
            }
            return e("<div>").addClass("instagram-placeholder").attr("id", t.id).append(e("<a>").attr("href", t.images.standard_resolution.url).attr("rel", "lightbox-instagram").attr("title", t.caption.text + " " + "//" + " " + "&hearts;" + " " + t.likes.count).append(e("<img>").addClass("instagram-image").attr("src", t.images.low_resolution.url)))
        }

        function o() {
            var t = r,
                n = {};
            if (i.hash != null) {
                t += "/tags/" + i.hash + "/media/recent"
            } else if (i.search != null) {
                t += "/media/search";
                n.lat = i.search.lat;
                n.lng = i.search.lng;
                i.search.max_timestamp != null && (n.max_timestamp = i.search.max_timestamp);
                i.search.min_timestamp != null && (n.min_timestamp = i.search.min_timestamp);
                i.search.distance != null && (n.distance = i.search.distance)
            } else {
                t += "/media/popular"
            }
            i.accessToken != null && (n.access_token = i.accessToken);
            i.clientId != null && (n.client_id = i.clientId);
            t += "?" + e.param(n);
            return t
        }
        var n = this,
            r = "https://api.instagram.com/v1",
            i = {
                hash: null,
                search: null,
                accessToken: null,
                clientId: String,
                show: null,
                onLoad: null,
                onComplete: null,
                maxId: null,
                minId: null,
                next_url: null,
                next_max_id: null,
                pagination: null
            };
        t && e.extend(i, t);
        i.onLoad != null && typeof i.onLoad == "function" && i.onLoad();
        var queryString = "&count=40"
        var url = o() + queryString
        e.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: o(),
            success: function (e) {
                i.onComplete != null && typeof i.onComplete == "function" && i.onComplete(e.data);
                var t = i.show == null ? e.data.length : i.show;
                for (var r = 0; r < t; r++) {
                    n.append(s(e.data[r]))
                }
            }
        });
        return this
    }
})(jQuery);
$(document).ready(function () {
    $(".instagram").instagram({
        hash: "esladitl", //put specific #hashtag here
        show: "50", //numeric value between 0 (0 pictures) and 20 (20 pictures)
        clientId: "cb66b4fcf1df460083f93529747571dd" //clientId here. will be long string, e.g. cb66g4fcf1df360083f83629747571hd
    })
});
$(window).load(function () {
    (function (e) {
        function L() {
            var n = t.scrollLeft(),
                r = t.width();
            e([b, T]).css("left", n + r / 2);
            if (a) {
                e(y).css({
                    left: n,
                    top: t.scrollTop(),
                    width: r,
                    height: t.height()
                })
            }
        }

        function A(n) {
            if (n) {
                e("object").add(h ? "select" : "embed").each(function (e, t) {
                    p[e] = [t, t.style.visibility];
                    t.style.visibility = "hidden"
                })
            } else {
                e.each(p, function (e, t) {
                    t[0].style.visibility = t[1]
                });
                p = []
            }
            var r = n ? "bind" : "unbind";
            t[r]("scroll resize", L);
            e(document)[r]("keydown", O)
        }

        function O(t) {
            var r = t.keyCode,
                i = e.inArray;
            return i(r, n.closeKeys) >= 0 ? j() : i(r, n.nextKeys) >= 0 ? _() : i(r, n.previousKeys) >= 0 ? M() : false
        }

        function M() {
            return D(o)
        }

        function _() {
            return D(u)
        }

        function D(e) {
            if (e >= 0) {
                i = e;
                s = r[i][0];
                o = (i || (n.loop ? r.length : 0)) - 1;
                u = (i + 1) % r.length || (n.loop ? 0 : -1);
                B();
                b.className = "lbLoading";
                v = new Image;
                v.onload = P;
                v.src = s
            }
            return false
        }

        function P() {
            b.className = "";
            e(w).css({
                backgroundImage: "url(" + s + ")",
                visibility: "hidden",
                display: ""
            });
            if ($(window).height() <= 660) { //e(E).height) {
                e([E, S, x]).height(660 - (715 % $(window).height() )), //assumes IG doesn't change image dimensions
                e([E, S, x]).width(660 - (715 % $(window).height() )) // if they do, change '660' to new image dimensions
            }
            else {
                e(E).width(660),
                e([E, S, x]).height(660)
            }
            e(C).html(r[i][1] || "");
            e(k).html((r.length > 1 && n.counterText || "").replace(/{x}/, i + 1).replace(/{y}/, r.length));
            if (o >= 0) {
                m.src = r[o][0]
            }
            if (u >= 0) {
                g.src = r[u][0]
            }
            l = w.offsetWidth;
            c = w.offsetHeight;
            var t = Math.max(0, f - c / 2);
            if (b.offsetHeight != c) {
                e(b).animate({
                    height: c,
                    top: t
                }, n.resizeDuration, n.resizeEasing)
            }
            if (b.offsetWidth != l) {
                e(b).animate({
                    width: l,
                    marginLeft: -l / 2
                }, n.resizeDuration, n.resizeEasing)
            }
            e(b).queue(function () {
                e(T).css({
                    width: l,
                    top: t + c,
                    height: 55,
                    marginLeft: -l / 2,
                    visibility: "hidden",
                    display: ""
                });
                e(C).css({
                    height: 15, //this can be completely removed if you're fine with > 1 line of caption text
                })
                e(w).css({
                    display: "none",
                    visibility: "",
                    opacity: ""
                }).fadeIn(n.imageFadeDuration, H)
            })
        }

        function H() {
            if (o >= 0) {
                e(S).show()
            }
            if (u >= 0) {
                e(x).show()
            }
            e(N).css("marginTop", -N.offsetHeight).animate({
                marginTop: 0
            }, n.captionAnimationDuration);
            T.style.visibility = ""
        }

        function B() {
            v.onload = null;
            v.src = m.src = g.src = s;
            e([b, w, N]).stop(true);
            e([S, x, w, T]).hide()
        }

        function j() {
            if (i >= 0) {
                B();
                i = o = u = -1;
                e(b).hide();
                e(y).stop().fadeOut(n.overlayFadeDuration, A)
            }
            return false
        }
        var t = e(window),
            n, r, i = -1,
            s, o, u, a, f, l, c, h = !window.XMLHttpRequest,
            p = [],
            d = document.documentElement,
            v = {}, m = new Image,
            g = new Image,
            y, b, w, E, S, x, T, N, C, k;
        e(function () {
            e("body").append(e([y = e('<div id="lbOverlay" />').click(j)[0], b = e('<div id="lbCenter" />')[0], T = e('<div id="lbBottomContainer" />')[0]]).css("display", "none"));
            w = e('<div id="lbImage" />').appendTo(b).append(E = e('<div style="position: relative;" />').append([S = e('<a id="lbPrevLink" href="#" />').click(M)[0], x = e('<a id="lbNextLink" href="#" />').click(_)[0]])[0])[0];
            N = e('<div id="lbBottom" />').appendTo(T).append([e('<a id="lbCloseLink" href="#" />').click(j)[0], C = e('<div id="lbCaption" />')[0], k = e('<div id="lbNumber" />')[0], e('<div style="clear: both;" />')[0]])[0]
        });
        e.slimbox = function (i, s, o) {
            n = e.extend({
                loop: false, // to change these options, please see slimbox2 documentation
                overlayOpacity: .8,
                overlayFadeDuration: 400,
                resizeDuration: 400,
                resizeEasing: "swing",
                initialWidth: 250,
                initialHeight: 250,
                imageFadeDuration: 400,
                captionAnimationDuration: 400,
                counterText: "Image {x} of {y}",
                closeKeys: [27, 88, 67],
                previousKeys: [37, 80],
                nextKeys: [39, 78]
            }, o);
            if (typeof i == "string") {
                i = [
                    [i, s]
                ];
                s = 0
            }
            f = t.scrollTop() + t.height() / 2.155; 
            l = n.initialWidth;
            c = n.initialHeight;
            e(b).css({
                top: Math.max(0, f - c / 2),
                width: l,
                height: c,
                marginLeft: -l / 2
            }).show();
            a = h || y.currentStyle && y.currentStyle.position != "fixed";
            if (a) {
                y.style.position = "absolute"
            }
            e(y).css("opacity", n.overlayOpacity).fadeIn(n.overlayFadeDuration);
            L();
            A(1);
            r = i;
            n.loop = n.loop && r.length > 1;
            return D(s)
        };
        e.fn.slimbox = function (t, n, r) {
            n = n || function (e) {
                return [e.href, e.title]
            };
            r = r || function () {
                return true
            };
            var i = this;
            return i.unbind("click").click(function () {
                var s = this,
                    o = 0,
                    u, a = 0,
                    f;
                u = e.grep(i, function (e, t) {
                    return r.call(s, e, t)
                });
                for (f = u.length; a < f; ++a) {
                    if (u[a] == s) {
                        o = a
                    }
                    u[a] = n(u[a], a)
                }
                return e.slimbox(u, o, t)
            })
        }
    })(jQuery);
    if (!/android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)) {
        jQuery(function (e) {
            e("a[rel^='lightbox']").slimbox({}, null, function (e) {
                return this == e || this.rel.length > 8 && this.rel == e.rel
            })
        })
    }
});
$(window).load(function () {
    $(".instagram-image").hover(function () {
        $(this).fadeTo("400", .7) // changes opacity and speed of which it changes (number is in ms)
    }, function () {
        $(this).fadeTo("100", 1) //same as above
    })
})