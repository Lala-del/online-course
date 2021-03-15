
(function($) { "use strict";

$(function() {
	var header = $(".start-style");
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
	
		if (scroll >= 10) {
			header.removeClass('start-style').addClass("scroll-on");
		} else {
			header.removeClass("scroll-on").addClass('start-style');
		}
	});
});		
	
//Animation

$(document).ready(function() {
	$('body.hero-anime').removeClass('hero-anime');
});

//Menu On Hover
	
$('body').on('mouseenter mouseleave','.nav-item',function(e){
		if ($(window).width() > 750) {
			var _d=$(e.target).closest('.nav-item');_d.addClass('show');
			setTimeout(function(){
			_d[_d.is(':hover')?'addClass':'removeClass']('show');
			},1);
		}
});	

//Switch light/dark

$("#switch").on('click', function () {
	if ($("body").hasClass("dark")) {
		$("body").removeClass("dark");
		$("#switch").removeClass("switched");
	}
	else {
		$("body").addClass("dark");
		$("#switch").addClass("switched");
	}
});  

})(jQuery); 


/// owl carousel 

$(document).ready(function() {
	var owl = $('#company');
	owl.owlCarousel({
	  items: 4,
	  dots:false,
	  loop: true,
	  margin: 10,
	  autoplay: true,
	  autoplayTimeout: 1000,
	  autoplayHoverPause: false
	});
	$('.play').on('click', function() {
	  owl.trigger('play.owl.autoplay', [1000])
	})
	$('.stop').on('click', function() {
	  owl.trigger('stop.owl.autoplay')
	})
  })
 
  $(document).ready(function() {
	var owl = $('#university');
	owl.owlCarousel({
	  items: 4,
	  loop: true,
	  dots:false,
	  margin: 10,
	  autoplay: true,
	  autoplayTimeout: 1000,
	  autoplayHoverPause: false
	});
  })