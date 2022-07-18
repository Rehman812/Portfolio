$(document).ready(function() {
  
$(window).scroll(function() {
	var height = $(window).scrollTop();
  if(height > 20) {
		$('.navbar').addClass('sticky');
	} else {
		$('.navbar').removeClass('sticky');
	}

	if(height > 500) {
		$('.scroll-up-btn').addClass('show');
		}
		else {
		$('.scroll-up-btn').removeClass('show');
		}
});



//slide up script

$('.scroll-up-btn').click(function(){
	$('html').animate({scrollTop: 0});

});






//typing animation script

var typed= new Typed('.typing',{
	strings: ['Developer', "Freelancer", 'Designer', "Youtuber", "Blogger"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});







 $('.menu-btn').click(function(){
   
   $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");

 });


 

$('.carousel').owlCarousel({






	margin: 20,
	loop: true,
	autoplayTimeOut: 2000,
	autoplayHoverPause: true,
	responsive: {
		0 : {
			items: 1,
			nav: false
		},

		600 : {
			items: 2,
			nav: false
		},
		1000 : {
			items: 3,
			nav: false
		}

		
	}

});

});