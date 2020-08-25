$(function() {
	$('.authorise-form').hide();

	if ($(window).innerWidth() <= 960) {
		$('.catalog__link').removeClass('catalog__link_active');
	}

	$('.catalog-list').on('click', 'a:not(.catalog__link_active)', function(e) {
		e.preventDefault();
		$(this)
			.addClass('catalog__link_active').siblings().removeClass('catalog__link_active')
			.closest('div.catalog__row').find('div.catalog-output__item').removeClass('catalog-output__item_active').eq($(this).index()).addClass('catalog-output__item_active');
		$('.catalog-list').toggleClass('catalog-list_moved');	
		$('.catalog-output').toggleClass('catalog-output_moved');	
	});	


	
	$('.navbar-catalog__init').on('click', function(e) {
		e.preventDefault();		
		$('.menu-toggle').removeClass('menu-toggle_active').addClass('menu-toggle_return');
		$('.catalog').slideToggle();	
		$('.navbar-catalog__init-burger').toggleClass('navbar-catalog__init-burger_active');				
	});

	$('.catalog-return').on('click', function(e) {
		e.preventDefault();
		if ($('.catalog-list').hasClass('catalog-list_moved') && $('.catalog-output').hasClass('catalog-output_moved')) {
			$('.catalog-list').removeClass('catalog-list_moved');	
			$('.catalog-output').removeClass('catalog-output_moved');
			$('.catalog__link').removeClass('catalog__link_active');
		}
		
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

	$(document).mouseup(function (e){ 
		var div = $(".catalog__container, .navbar-catalog__init"); 
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.catalog').slideUp();
			$('.navbar-catalog__init-burger').removeClass('navbar-catalog__init-burger_active');
		}
	})
	

	$('.header-top__authorise-enter').on('click', function(e) {
		e.preventDefault();
		$('.authorise-form').slideToggle(300).css({'display': 'flex'});			
	});


	$(document).mouseup(function (e){ 
		var div = $(".authorise-form, .header-top__authorise-enter"); 
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.authorise-form').slideUp(300);

		}
	});


	$(document).mouseup(function (e){ 
		var div = $(".modal__window"); 
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.modal').fadeOut(300);
			$('body').removeClass('no-scroll');
		}
	});
	$('.modal__close').on('click', function(e) {
		e.preventDefault();
		$('body').removeClass('no-scroll');
		$('.modal').fadeOut(300);
	});

	$('.shopping-table__cell-order .theme-btn').on('click', function(e) {
		e.preventDefault();
		$('body').addClass('no-scroll');
		$('.modal').fadeIn(300);
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

	let headerNavbar = $('.header-navbar');
	let body = $('body');

	 $(document).on('scroll', function () {
        var position = body.scrollTop(),
        navbar_position = headerNavbar.offset().top;
        if (position - navbar_position < 0) { 
            headerNavbar.addClass('header-navbar_fixed');
        } else {
            headerNavbar.removeClass('header-navbar_fixed');
        }
    });

	 let rubricActive = $('.rubric__item_active');
	 let rubricActiveText = rubricActive.text();
	 let rubricToggle = $('.rubric-mobile-toggle');
	 let rubricList = $('.rubric__list');

	 rubricToggle.text(rubricActiveText);



	rubricToggle.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('rubric-mobile-toggle_active');
		rubricList.slideToggle(300);
	})

	$('.rubric-mobile-close').on('click', function() {
		rubricList.slideUp(300);
		rubricToggle.removeClass('rubric-mobile-toggle_active');
	});


	

});
	

