$(function(){
	var swiper = new Swiper(".mainSwiper", {
	pagination: {
        el: ".swiper-pagination",
	},
    });

	$("header nav li").hover(
		function(){
			$(this).addClass("active");
			if($(this).children().length === 2){
			$(this).addClass("opened");
		}
		},
		function(){
			$(this).removeClass("active");
			if($(this).children().length === 2){
				$(this).removeClass("opened");
			}
		}
	);

	$("header > nav > ul > li").focusin(function(){
		$(this).addClass("active");
		if($(this).children().length === 2){
		$(this).addClass("opened");
	}
	});
	$("header > nav > ul > li").focusout(function(){
		$(this).removeClass("active");
		if($(this).children().length === 2){
		$(this).removeClass("opened");
	}
	});

	$("header nav li li").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
	);

	$("header nav li li a").focusin(function(){
		$(this).parent().addClass("active")
	});

	$("header nav li li a").focusout(function(){
		$(this).parent().removeClass("active")
	});

});