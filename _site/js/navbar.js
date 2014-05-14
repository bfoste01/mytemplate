 $(document).ready(function() {
	  	   var navwidth = ($("#navigation").width());
				$(".show_navigation").click(function() {
				$("#navigation").fadeIn(0).animate({marginRight: "0px"},0),
				$(".close_navigation").fadeIn(300),
				$(".site").animate({"left": - (navwidth - 30)}, 370),
				$(".show_navigation").fadeOut(500);
	  });
		
		$("#navigation li").click(function() {
			var navwidth = ($("#navigation").width());
				$(".site").delay(500).animate({"left": 0}, 750),
				$("#navigation").delay(200).animate({marginRight: - navwidth}, 400).fadeOut(1000),
				$(".close_navigation").delay(600).fadeOut(300),
				$(".show_navigation").delay(100).fadeIn(300);
		});
		
		$(".close_navigation").click(function() {
			var navwidth = ($("#navigation").width());
				$("#navigation").animate({marginRight: - navwidth}, 50).fadeOut(1000),
				$(".close_navigation").fadeOut(400),
				$(".site").animate({"left": 0}, 500),
				$(".show_navigation").delay(450).fadeIn(600);
		});
	});
