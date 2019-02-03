(function($) {
    $(document).ready(function() {
        $(window).on('load', function() {
           $('#section-top .owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            nav: false
        });
           $('.section-top-category .toprod .owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            items: 4,
            nav: false
        });
           $('.section-bottom-category .subcategory-products .owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            items: 4,
            nav: false
        });
           $('.section-top-category .main .owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            nav: false
        });
           $('.subcategory-section .owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            nav: false
        });
           $('.profile-section .profile-right .favorite-products .owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            items: 4,
            nav: false
        });
           $('.profile-section .profile-right .last-viewed .owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            items: 4,
            nav: false
        });
           $('.profile-section-merchant .profile-right .favorite-products .owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            items: 4,
            nav: false
        });
           $('.profile-section-merchant .profile-right .last-viewed .owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            items: 4,
            nav: false
        });
           $('#toprod .owl-carousel').owlCarousel({
            loop: true,
            nav: true,
            responsiveClass: true,
            responsive:{
                0:{
                    items:1
                },
                500:{
                    items:2
                },
                1000:{
                    margin: 10,
                    items:3
                },
                1200:{
                    margin: 30,
                    items:4
                }
            }
        });
           $('#partners .owl-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            responsive:{
                0:{
                    items:2
                },
                500:{
                    items:3
                },
                1000:{
                    items:7,
                    nav:true
                }
            }
        });
    });
        $(document).ready(function () {
            if ($(window).width() > 1325){
                var mySwiper1 = new Swiper ('#toprod .swiper-container', {
                    slidesPerView: 4,
                    slidesPerColumn: 2,
                    spaceBetween: 30,
                    freeMode: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                })
            }
            if ($(window).width() < 1325){
                var mySwiper2 = new Swiper ('#toprod .swiper-container', {
                    slidesPerView: 'auto',
                    slidesPerColumn: 1,
                    spaceBetween: 20,
                    freeMode: true,
                })
            }
            var mySwiper3 = new Swiper ('.product-section #other-images .swiper-container', {
                slidesPerView: 'auto',
                slidesPerColumn: 1,
                spaceBetween: 8,
                freeMode: true,
            })
            if ($(window).width() < 1366){
                var mySwiper3 = new Swiper ('.product-section .related_items .swiper-container', {
                    slidesPerView: 'auto',
                    slidesPerColumn: 1,
                    spaceBetween: 20,
                    freeMode: true,
                })
            }
            if ($(window).width() >= 1366){
                if ($('.product-section .main').height() < $('.product-section .aside').height()){
                    $('.product-section .aside').height($('.product-section .main').height());
                    $('.product-section .aside .related_items').addClass('scroll');
                }
            }
        });
        $('#burger1').on('click', function(){
            $('#menu2').addClass('open');
            $('#overlay').addClass('open');
            return false;
        });
        $('#burger2').on('click', function(){
            $('#menu2').addClass('open');
            $('#overlay').addClass('open');
            return false;
        });
        $('#menuclosed').on('click', function(){
            $('#menu2').removeClass('open');
            $('#overlay').removeClass('open');
            return false;
        });
        $('#overlay').on('click', function(){
            $('#menu2').removeClass('open');
            $('#overlay').removeClass('open');
        });
        $('#category_button').on('click', function(){
            $('#category_button').toggleClass('open');
            $('#category_menu').toggleClass('open');
            return false;
        });
        $('#cart1').on('click', function(){
            $('#cartview').addClass('open12121');
            return false;
        });
        $('#cart1_hide').on('click', function(){
            $('#cartview').addClass('open');
            return false;
        });
        $('#cart2').on('click', function(){
            $('#cartview').addClass('open');
            return false;
        });
        $('#cart2_hide').on('click', function(){
            $('#cartview').addClass('open');
            return false;
        });
        $('#cancel').on('click', function(){
            $('#cartview').removeClass('open');
            return false;
        });
        $('#chaticon').on('click', function(){
            $('#chaticon').toggleClass('open');
        });
        $('#chaticon').on('click', function(){
            $('#chatwindow').toggleClass('open');
        });
        $("#zoom_01").elevateZoom({
            zoomType: 'inner',
            gallery:'gal1',
            cursor: 'pointer',
            galleryActiveClass: 'active',
            imageCrossfade: true
        });
        $("#zoom_01").bind("click", function(e) {
          var ez = $('#zoom_01').data('elevateZoom');
          $.fancybox(ez.getGalleryList());
          return false;
      });
    });
$('#mobile-filter-btn > button').on('click', function(){
    $('#filterview .brand').html($('.filter-section.brand').html());
    $('#filterview .feature').html($('.filter-section.feature').html());
    $('#filterview .color').html($('.filter-section.color').html());
            // $('#brand_filter').empty();
            $('#filterview').addClass('hover');
        });
    //doc ready end--------------------------------
    $(window).on('load', function(){
        if($('.section-bottom-category .subcategory-products .sub_menu .sub_list').length > 12) {
                // $('.section-bottom-category .owl-carousel .item').addClass('none');
                // alert('msg');
                console.log(('.section-bottom-category .subcategory-products .sub_menu .sub_list').length);
                // $('.section-bottom-category .owl-carousel .items').addClass('block');
            }
        });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 105) {
            $('#top_fixed').addClass('flex');
            $('#nav').addClass('fixed');
        } else {
            $('#top_fixed').removeClass('flex');
            $('#nav').removeClass('fixed');
        }
    });

    $(window).on('load', function(){
        if ($('#cartview .item').length > 2){
            $('#cartview').addClass('scroll');
        }else{
            $('#cartview').removeClass('scroll');
        }
    });
    $(window).scroll(function() {
        // if ($(window).scrollTop() > $(document).height()*0.85)
        if($(window).scrollTop() + $(window).height() > $(document).height() - 50)
        {
          $(".chat").addClass("fixed");
      } else {
          $(".chat").removeClass("fixed");
      }
  });
    $(document).ready(function() {
        $('.subcategory-section .buttons .list').click(function(event){
            event.preventDefault();
            $('.subcategory-section .buttons .list').addClass('active');
            $('.subcategory-section .buttons .grid').removeClass('active');
            $('.subcategory-section .block-content .row').addClass('list');
            $('.subcategory-section .block-content .row').removeClass('grid');
        });
        $('.subcategory-section .buttons .grid').click(function(event){
            event.preventDefault();
            $('.subcategory-section .buttons .grid').addClass('active');
            $('.subcategory-section .buttons .list').removeClass('active');
            $('.subcategory-section .block-content .row').addClass('grid');
            $('.subcategory-section .block-content .row').removeClass('list');
        });
    });
    if ($(window).width() < 992) {
        $("#menu2 .nav").swipe({
            swipeLeft: function() {
                console.log('123');
                $('#menu2').removeClass('open');
            }
        });
        $('.toprod').swipe({
            swipeRight: function() {
                    // $('#filterview').removeClass('hover');
                    // $('.filter').html($('#filterview').parent().html());
                    // $('#filterview').empty();
                    alert('msg');
                }
            });
    }
  $('#add-compare').on('click', function() {
    $(this).addClass('checked');
  });
}(jQuery));
