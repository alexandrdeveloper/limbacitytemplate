$(function() {

	$('.catalog-list').on('click', 'a:not(.catalog__link_active)', function(e) {
		e.preventDefault();
		$(this)
			.addClass('catalog__link_active').siblings().removeClass('catalog__link_active')
			.closest('div.catalog__row').find('div.catalog-output__item').removeClass('catalog-output__item_active').eq($(this).index()).addClass('catalog-output__item_active');
	});	

	$('.navbar-catalog__init').on('click', function(e) {
		e.preventDefault();
		$('.catalog').toggleClass('catalog_visible');
		$('.menu-toggle').removeClass('menu-toggle_active').addClass('menu-toggle_return');			
	});

	$('.menu-toggle').on('click', function(e) {
		e.preventDefault();
		if ($(this).hasClass('menu-toggle_active')) {
			$(this).removeClass('menu-toggle_active');
			$('.header').removeClass('header-sm-visible');
		} else if ($(this).hasClass('menu-toggle_return')) {
			$(this).removeClass('menu-toggle_return').addClass('menu-toggle_active');
			$('.catalog').removeClass('catalog_visible');
		} else {
			$(this).addClass('menu-toggle_active');
			$('.header').addClass('header-sm-visible');
		}		
					
	});


	$('.header-top__authorise-enter').on('click', function(e) {
		e.preventDefault();
		$('.authorise-form').toggleClass('authorise-form_visible');			
	});

	$(document).mouseup(function (e){ 
		var div = $(".authorise-form"); 
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.authorise-form').removeClass('authorise-form_visible');
		}
	});

	/***** Banner on Home Page *****/

	$('.image-slider').slick({
		slidesToShow: 1,
		arrows: true,
		dots: true,
		autoplay: true,
		asNavFor: $('.banner__text-slider'),
	});

	$('.banner__text-slider').slick({
		slidesToShow: 1,
		arrows: false,
		fade: true,
		asNavFor: $('.image-slider'),

	});

});
	

