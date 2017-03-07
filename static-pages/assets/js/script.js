$(document).ready(function() {
	var swiperMainSlider = new Swiper('#main-slider .swiper-container', {
		pagination: '#main-slider .swiper-pagination',
		paginationClickable: true,
		nextButton: '#main-slider .swiper-button-next',
		prevButton: '#main-slider .swiper-button-prev',
		spaceBetween: 30
	});
	var swiperTopProducts = new Swiper('#top-products .swiper-container', {
		slidesPerView: 3,
		paginationClickable: true,
		spaceBetween: 260,
		nextButton: '#top-products .swiper-button-next',
		prevButton: '#top-products .swiper-button-prev',
		breakpoints: {
			1200: {
				spaceBetween: 160
			},
			992: {
				spaceBetween: 60
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			360: {
				slidesPerView: 1,
				spaceBetween: 10
			}
		}
	});
	var swiperCustomers = new Swiper('#customers .swiper-container', {
		slidesPerView: 4,
		paginationClickable: true,
		spaceBetween: 50,
		nextButton: '#customers .swiper-button-next',
		prevButton: '#customers .swiper-button-prev',
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			}
		}
	});
	$('#navbar-collapse li').hover(function(){
      // debugger
      $('.dark-bg').removeAttr("hidden");
      $(this).find('.navigator:not(:animated)').slideDown(300);
  });
	$('#navbar-collapse li').mouseleave(function(){
      // debugger
      $('.dark-bg').attr("hidden", "hidden");
      $(this).find('.navigator').slideUp(300);
  });
})