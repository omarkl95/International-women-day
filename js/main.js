/*

	Template Name: Exhibit - Conference & Event HTML Template
	Author: Themewinter
	Author URI: https://themeforest.net/user/themewinter
	Description: Exhibit - Conference & Event HTML Template
	Version: 1.0
   =====================
   table of content 
   ====================
   1.   menu toogle
   2.   event counter
   3.   funfact
   4.   isotope grid
   5.   main slider
   6.   speaker popup
   7.   gallery
   8.   video popup
   9.   hero area image animation
   10.  wow animated
   11.  back to top
  
*/


jQuery(function ($) {

	$('.owl-carousel').owlCarousel({
		nav:true,
		navigation:true,
		center:false,
		mergeFit:true,

		loop:true,
		autoplay:true,
		margin:0,
		responsiveClass:true,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],

		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:3,
				nav:true,
				loop:false
			}
		}
	})

	/**-------------------------------------------------
	 *Fixed HEader
	 *----------------------------------------------------**/
	$(window).on('scroll', function () {

		/**Fixed header**/
		if ($(window).scrollTop() > 250) {
			$('.header').addClass('sticky fade_down_effect');
		} else {
			$('.header').removeClass('sticky fade_down_effect');
		}
	});

	/* ---------------------------------------------
	                  Menu Toggle 
	------------------------------------------------ */

	if ($(window).width() < 991) {
		$(".navbar-nav li a").on("click", function () {
			$(this).parent("li").find(".dropdown-menu").slideToggle();
			$(this).find("i").toggleClass("fa-angle-up fa-angle-down");
		});

	}

	/* ----------------------------------------------------------- */
	/*  Event counter 
	/* -----------------------------------------------------------*/
	//
	//	if ($('.countdown').length > 0) {
	//		$(".countdown").jCounter({
	//			date: '21 October 2020 12:00:00',
	//			fallback: function () {
	//				console.log("count finished!")
	//			}
	//		});
	//	}

	/*==========================================================
	  funfact 
	  ======================================================================*/
	var skl = true;
	$('.ts-funfact').appear();

	$('.ts-funfact').on('appear', function () {
		if (skl) {
			$('.counterUp').each(function () {
				var $this = $(this);
				jQuery({
					Counter: 0
				}).animate({
					Counter: $this.attr('data-counter')
				}, {
					duration: 8000,
					easing: 'swing',
					step: function () {
						var num = Math.ceil(this.Counter).toString();
						if (Number(num) > 99999) {
							while (/(\d+)(\d{3})/.test(num)) {
								num = num.replace(/(\d+)(\d{3})/, '');
							}
						}
						$this.html(num);
					}
				});
			});
			skl = false;
		}
	});

	/*=====================
	 isotop grid
	 ========================*/

	if ($('.grid').length > 0) {
		var $portfolioGrid = $('.grid'),
			colWidth = function () {
				var w = $portfolioGrid.width(),
					columnNum = 1,
					columnWidth = 0;
				if (w > 1200) {
					columnNum = 3;
				} else if (w > 900) {
					columnNum = 3;
				} else if (w > 600) {
					columnNum = 2;
				} else if (w > 450) {
					columnNum = 2;
				} else if (w > 385) {
					columnNum = 1;
				}
				columnWidth = Math.floor(w / columnNum);
				$portfolioGrid.find('.grid-item').each(function () {
					var $item = $(this),
						multiplier_w = $item.attr('class').match(/grid-item-w(\d)/),
						multiplier_h = $item.attr('class').match(/grid-item-h(\d)/),
						width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
						height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.3;
					$item.css({
						width: width,
						//height: height
					});
				});
				return columnWidth;
			},

			isotope = function () {
				$portfolioGrid.isotope({
					resizable: true,
					itemSelector: '.grid-item',
					masonry: {
						columnWidth: colWidth(),
						gutterWidth: 3
					}
				});
			};
		isotope();
		$(window).resize(isotope);
	} // End is_exists



	/*==========================================================
          main slider
  ======================================================================*/
	if ($('.main-slider').length > 0) {
		var bannerSlider = $(".main-slider");
		bannerSlider.owlCarousel({
			items: 1,
			mouseDrag: true,
			loop: true,
			touchDrag: true,
			autoplay: true,
			dots: true,
			autoplayTimeout: 5000,
			animateOut: 'fadeOut',
			autoplayHoverPause: true,
			smartSpeed: 250,

		});
	}

	/*=============================================================
			 speaker popup
	=========================================================================*/

	$('.ts-image-popup').magnificPopup({
		type: 'inline',
		closeOnContentClick: false,
		midClick: true,
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		zoom: {
			enabled: true,
			duration: 500, // don't foget to change the duration also in CSS
		},
		mainClass: 'mfp-fade',
	});

	/*=============================================================
				gallery
		=========================================================================*/

	$('.ts-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		midClick: true,
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		zoom: {
			enabled: true,
			duration: 500, // don't foget to change the duration also in CSS
		},
		mainClass: 'mfp-fade',
	});

	/*=============================================================
				video popup
		=========================================================================*/

	$('.ts-video-popup').magnificPopup({
		type: 'iframe',
		closeOnContentClick: false,
		midClick: true,
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		zoom: {
			enabled: true,
			duration: 500, // don't foget to change the duration also in CSS
		},
		mainClass: 'mfp-fade',
	});

	/*==========================================================
	wow animated
	 ======================================================================*/
	var wow = new WOW({
		animateClass: 'animated',
		mobile: true
	});
	wow.init();


	/* ----------------------------------------------------------- */
	/*  Back to top
	/* ----------------------------------------------------------- */

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > $(window).height()) {
			$(".BackTo").fadeIn('slow');
		} else {
			$(".BackTo").fadeOut('slow');
		}

	});
	$("body, html").on("click", ".BackTo", function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	});
	// scrollme.init();

	$('.popup').click(function () {
		$('.modal-bg').addClass('bg-active');
	});
	$('.modal-close').click(function () {
		$('.modal-bg').removeClass('bg-active');
	});


	$('.popup-v').click(function () {
		$('.modal-bg-v').addClass('bg-active-v');
	});
	$('.modal-close-v').click(function () {
		$('.modal-bg-v').removeClass('bg-active-v');
	});

	//	$("#join").appendTo($('#video'));

	$('.navbar a img').click(function () {
		$('html ,body').animate({
			scrollTop: 0
		}, 1000)
	});

	$('nav li a').click(function () {
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('scroll')).offset().top
		}, 2000);
	});
	$(window).scroll(function () {
		$('.box-main').each(function () {
			if ($(window).scrollTop() > $(this).offset().top - 1) {
				var boxId = $(this).attr('id');
				var lastBoxId = $('.box-main').last().attr('id');
				$('nav li').removeClass('active');
				console.log();
				if ($(window).scrollTop() >= $('body').height() - $('.box-main').last().height()) {
					$('nav li a[data-scroll="' + lastBoxId + '"]').parent().addClass('active');
				} else {
					$('nav li a[data-scroll="' + boxId + '"]').parent().addClass('active');
				}
			}
		});
	});


});

function getNormalisedDatetime(dString) { // yyyy-mm-dd hh:mm:ss
	var parts = dString.split(" ");
	var dParts = parts[0].split("-");
	var tParts = parts[1].split(":");
	return new Date(dParts[0], dParts[1] - 1, dParts[2], tParts[0], tParts[1], tParts[2]);
}

function pad(num) {
	return ("0" + num).slice(-2);
}
// Update the count down every 1 second
var x = setInterval(function () {

	// Set the date we're counting down to
	var countDownDate = new Date("2021-03-08T00:16:00+02:00").getTime();
	countDownDate.toLocaleString();

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	var timepassed = now - countDownDate;
	var d = Math.floor(timepassed / (1000 * 86400));
	var h = Math.floor((timepassed % (1000 * 86400)) / (1000 * 60 * 60));
	var m = Math.floor((timepassed % (1000 * 3600)) / (1000 * 60));
	var s = Math.floor((timepassed % (1000 * 60)) / 1000);


	// Display the result in the element with id="countdown"
	document.getElementById("timer").innerHTML = "<div> <span>" + pad(days) + " <h6> Days</h6></span> </div>  " + "<div><span>" + pad(hours) + " <h6> Hours</h6> </span> </div>" + "<div> <span>" + pad(minutes) + " <h6> Minutes</h6> </span> </div> " + "<div> <span>" + pad(seconds) + " <h6> seconds</h6> </span> </div> ";

	// If the count down is finished, write some text 
	var btn = document.getElementById('join');
	var start = document.getElementById('start-event');
	if (distance < 0) {
		document.getElementById("timer").innerHTML = " ";
	}
}, 1000);



var z = setInterval(function () {

		// Set the date we're counting down to
		var countDowntimev = new Date("2021-03-08T00:16:00+02:00").getTime();
		countDowntimev.toLocaleString();

		// Get todays date and time
		var nowTimev = new Date().getTime();

		// Find the distance between now an the count down date
		var distance = countDowntimev - nowTimev;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		var timepassed = nowTimev - countDowntimev;
		var d = Math.floor(timepassed / (1000 * 86400));
		var h = Math.floor((timepassed % (1000 * 86400)) / (1000 * 60 * 60));
		var m = Math.floor((timepassed % (1000 * 3600)) / (1000 * 60));
		var s = Math.floor((timepassed % (1000 * 60)) / 1000);

		// If the count down is finished, write some text 
		var btn = document.getElementById('join');
		var start = document.getElementById('start-event');
		var reg = document.getElementById('reg');
		var video = document.getElementById('video');
		var play = document.getElementById('play');
		var ov = document.getElementById('ov');
		if (distance < 0) {
			video.onended = function () {
				this.webkitExitFullscreen();
				ov.style.display = 'block';
				btn.style.display = 'block';
			}
			document.getElementById("countv").innerHTML = " ";
			play.style.display = 'block';
			reg.style.display = 'none';
			start.style.display = 'none';
		}
	},
	1000);

var playV = document.getElementById('play-v');
var video = document.getElementById('video');
var closeV = document.getElementById('close-v');
playV.addEventListener('click', function () {
	video.play();
});
closeV.addEventListener('click', function () {
	video.pause();
});
//var y = setInterval(function () {
//
//	// Set the date we're counting down to
//	var countDowntime = new Date("2020-08-16T16:43:00+02:00").getTime();
//	countDowntime.toLocaleString();
//
//	// Get todays date and time
//	var nowTime = new Date().getTime();
//
//	// Find the distance between now an the count down date
//	var distance = countDowntime - nowTime;
//
//	// Time calculations for days, hours, minutes and seconds
//	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//	var timepassed = nowTime - countDowntime;
//	var d = Math.floor(timepassed / (1000 * 86400));
//	var h = Math.floor((timepassed % (1000 * 86400)) / (1000 * 60 * 60));
//	var m = Math.floor((timepassed % (1000 * 3600)) / (1000 * 60));
//	var s = Math.floor((timepassed % (1000 * 60)) / 1000);
//
//
//	// Display the result in the element with id="countdown"
//	//	document.getElementById("count").innerHTML = "<section> <span>" + pad(days) + " <h6> Days</h6></span> </section>  " + "<section><span>" + pad(hours) + " <h6> Hours</h6> </span> </section>" + "<section> <span>" + pad(minutes) + " <h6> Minutes</h6> </span> </section> " + "<section> <span>" + pad(seconds) + " <h6> seconds</h6> </span> </section> ";
//
//	// If the count down is finished, write some text 
//	var btn = document.getElementById('join');
//	var start = document.getElementById('start-event');
//	var reg = document.getElementById('reg');
//	var video = document.getElementById('video');
//	if (distance < 0) {
//		document.getElementById("count").innerHTML = " ";
//		btn.style.display = 'block';
//		start.style.display = 'none';
//		reg.style.display = 'none';
//		video.style.display = 'none';
//	}
//}, 1000);
