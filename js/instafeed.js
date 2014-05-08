(function(b) {
    b.fn.instagram = function(d) {
        function g(h) {
            return b("<div>").addClass("instagram-placeholder").attr("id", h.id).append(b("<a>").attr("href", h.images.standard_resolution.url).attr("rel", "lightbox-instagram").attr("title", h.caption.text + " // &hearts; " + h.likes.count).append(b("<img>").addClass("instagram-image").attr("src", h.images.low_resolution.url)))
        }

        function e() {
            var h = c,
                i = {};
            null != a.hash ? h += "/tags/" + a.hash + "/media/recent" : null != a.search ? (h += "/media/search", i.lat = a.search.lat, i.lng = a.search.lng, null != a.search.max_timestamp && (i.max_timestamp = a.search.max_timestamp), null != a.search.min_timestamp && (i.min_timestamp = a.search.min_timestamp), null != a.search.distance && (i.distance = a.search.distance)) : h += "/media/popular";
            null != a.accessToken && (i.access_token = a.accessToken);
            null != a.clientId && (i.client_id = a.clientId);
            return h += "?" + b.param(i)
        }
        var f = this,
            c = "https://api.instagram.com/v1",
            a = {
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
        d && b.extend(a, d);
        null != a.onLoad && "function" == typeof a.onLoad && a.onLoad();
        e();
        b.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: !1,
            url: e(),
            success: function(h) {
                null != a.onComplete && "function" == typeof a.onComplete && a.onComplete(h.data);
                for (var j = null == a.show ? h.data.length : a.show, i = 0; i < j; i++) {
                    f.append(g(h.data[i]))
                }
            }
        });
        return this
    }
})(jQuery);
$(document).ready(function() {
    $(".instagram").instagram({
        hash: "esladitl",
        show: "50",
        clientId: "cb66b4fcf1df460083f93529747571dd"
    })
});
$(window).load(function() {
    (function(aw) {
        function an() {
            var a = ak.scrollLeft(),
                d = ak.width();
            aw([ar, ah]).css("left", a + d / 2);
            P && aw(aj).css({
                left: a,
                top: ak.scrollTop(),
                width: d,
                height: ak.height()
            })
        }

        function aa(a) {
            a ? aw("object").add(O ? "select" : "embed").each(function(d, c) {
                U[d] = [c, c.style.visibility];
                c.style.visibility = "hidden"
            }) : (aw.each(U, function(d, c) {
                c[0].style.visibility = c[1]
            }), U = []);
            a = a ? "bind" : "unbind";
            ak[a]("scroll resize", an);
            aw(document)[a]("keydown", Z)
        }

        function Z(a) {
            a = a.keyCode;
            var c = aw.inArray;
            return 0 <= c(a, au.closeKeys) ? T() : 0 <= c(a, au.nextKeys) ? Y() : 0 <= c(a, au.previousKeys) ? X() : !1
        }

        function X() {
            return av(ag)
        }

        function Y() {
            return av(af)
        }

        function av(b) {
            0 <= b && (ao = b, W = aq[ao][0], ag = (ao || (au.loop ? aq.length : 0)) - 1, af = (ao + 1) % aq.length || (au.loop ? 0 : -1), Q(), ar.className = "lbLoading", ac = new Image, ac.onload = ap, ac.src = W);
            return !1
        }

        function ap() {
            ar.className = "";
            aw(ai).css({
                backgroundImage: "url(" + W + ")",
                visibility: "hidden",
                display: ""
            });
            if (660 >= $(window).height()) {
                (aw([ab, ae, ad]).height(660 - 715 % $(window).height()), aw([ab, ae, ad]).width(660 - 715 % $(window).height()))
            } else {
                (aw(ab).width(660), aw([ab, ae, ad]).height(660))
            }
            aw(S).html(aq[ao][1] || "");
            aw(o).html((1 < aq.length && au.counterText || "").replace(/{x}/, ao + 1).replace(/{y}/, aq.length));
            0 <= ag && (j.src = aq[ag][0]);
            0 <= af && (i.src = aq[af][0]);
            am = ai.offsetWidth;
            al = ai.offsetHeight;
            var a = Math.max(0, R - al / 2);
            ar.offsetHeight != al && aw(ar).animate({
                height: al,
                top: a
            }, au.resizeDuration, au.resizeEasing);
            ar.offsetWidth != am && aw(ar).animate({
                width: am,
                marginLeft: -am / 2
            }, au.resizeDuration, au.resizeEasing);
            aw(ar).queue(function() {
                aw(ah).css({
                    width: am,
                    top: a + al,
                    height: 55,
                    marginLeft: -am / 2,
                    visibility: "hidden",
                    display: ""
                });
                aw(S).css({
                    height: 15
                });
                aw(ai).css({
                    display: "none",
                    visibility: "",
                    opacity: ""
                }).fadeIn(au.imageFadeDuration, at)
            })
        }

        function at() {
            0 <= ag && aw(ae).show();
            0 <= af && aw(ad).show();
            aw(V).css("marginTop", -V.offsetHeight).animate({
                marginTop: 0
            }, au.captionAnimationDuration);
            ah.style.visibility = ""
        }

        function Q() {
            ac.onload = null;
            ac.src = j.src = i.src = W;
            aw([ar, ai, V]).stop(!0);
            aw([ae, ad, ai, ah]).hide()
        }

        function T() {
            0 <= ao && (Q(), ao = ag = af = -1, aw(ar).hide(), aw(aj).stop().fadeOut(au.overlayFadeDuration, aa));
            return !1
        }
        var ak = aw(window),
            au, aq, ao = -1,
            W, ag, af, P, R, am, al, O = !window.XMLHttpRequest,
            U = [],
            ac = {}, j = new Image,
            i = new Image,
            aj, ar, ai, ab, ae, ad, ah, V, S, o;
        aw(function() {
            aw("body").append(aw([aj = aw('<div id="lbOverlay" />').click(T)[0], ar = aw('<div id="lbCenter" />')[0], ah = aw('<div id="lbBottomContainer" />')[0]]).css("display", "none"));
            ai = aw('<div id="lbImage" />').appendTo(ar).append(ab = aw('<div style="position: relative;" />').append([ae = aw('<a id="lbPrevLink" href="#" />').click(X)[0], ad = aw('<a id="lbNextLink" href="#" />').click(Y)[0]])[0])[0];
            V = aw('<div id="lbBottom" />').appendTo(ah).append([aw('<a id="lbCloseLink" href="#" />').click(T)[0], S = aw('<div id="lbCaption" />')[0], o = aw('<div id="lbNumber" />')[0], aw('<div style="clear: both;" />')[0]])[0]
        });
        aw.slimbox = function(c, b, a) {
            au = aw.extend({
                loop: !1,
                overlayOpacity: 0.8,
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
            }, a);
            "string" == typeof c && (c = [
                [c, b]
            ], b = 0);
            R = ak.scrollTop() + ak.height() / 2.155;
            am = au.initialWidth;
            al = au.initialHeight;
            aw(ar).css({
                top: Math.max(0, R - al / 2),
                width: am,
                height: al,
                marginLeft: -am / 2
            }).show();
            if (P = O || aj.currentStyle && "fixed" != aj.currentStyle.position) {
                aj.style.position = "absolute"
            }
            aw(aj).css("opacity", au.overlayOpacity).fadeIn(au.overlayFadeDuration);
            an();
            aa(1);
            aq = c;
            au.loop = au.loop && 1 < aq.length;
            return av(b)
        };
        aw.fn.slimbox = function(a, h, g) {
            h = h || function(b) {
                return [b.href, b.title]
            };
            g = g || function() {
                return !0
            };
            var f = this;
            return f.unbind("click").click(function() {
                var e = this,
                    c = 0,
                    d, m = 0,
                    b;
                d = aw.grep(f, function(l, k) {
                    return g.call(e, l, k)
                });
                for (b = d.length; m < b; ++m) {
                    d[m] == e && (c = m), d[m] = h(d[m], m)
                }
                return aw.slimbox(d, c, a)
            })
        }
    })(jQuery);
    /android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent) || jQuery(function(b) {
        b("a[rel^='lightbox']").slimbox({}, null, function(c) {
            return this == c || 8 < this.rel.length && this.rel == c.rel
        })
    })
});
$(window).load(function() {
    $(".instagram-image").hover(function() {
        $(this).fadeTo("400", 0.7)
    }, function() {
        $(this).fadeTo("100", 1)
    })
});