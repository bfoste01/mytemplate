$(document).ready(function() {
    var e = $("#navigation").width();
    $(".show_navigation").click(function() {
        $("#navigation").fadeIn(0).animate({
            marginRight: "0px"
        }, 0), $(".close_navigation").fadeIn(600), $("#site").animate({
            left: -(e - 30)
        }, 370), $(".show_navigation").fadeOut(0)
    });
    $(".close_navigation").click(function() {
        var e = $("#navigation").width();
        $("#navigation").animate({
            marginRight: -e
        }, 50).fadeOut(1e3), $(".close_navigation").fadeOut(0), $(".site").animate({
            right: 0
        }, 370), $(".show_navigation").fadeIn(600)
    })
});