jQuery(document).ready(function () {

    //Preloader
    jQuery(window).load(function () {
        jQuery('#preloader').fadeOut();
        jQuery('.loading').delay(350).fadeOut('slow');
    });
    /// avatar class added
    jQuery("img.avatar").addClass("media-object pull-left");
    jQuery('a.comment-reply-link').addClass("btn btn-primary");
    jQuery('a.comment-edit-link').addClass("btn btn-primary");
    jQuery('.wysija-submit').addClass("btn btn-primary");

    // Fixed Top bar
    jQuery(window).bind('scroll', function () {
        var navHeight = jQuery(window).height();

        if (jQuery(window).scrollTop() >= navHeight) {
            jQuery('#home').addClass('fixed');
        }
        else {
            jQuery('#home').removeClass('fixed');
        }
    });

    //jQuery('.para').parallax("50%", 0.3);

    // WOW - animated content
    new WOW().init();

    // Top Arrow
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 1000) {
            jQuery('a.top').fadeIn('slow');
        } else {
            jQuery('a.top').fadeOut('slow');
        }
    });

    // SLIDER
    jQuery('.slides').superslides({
        animation: 'fade',
        play: 7000, // change value if you want to increase or decrese speed
        autoplay: 0,
        animation_speed: 800 // change time interval during slide change
    });

    // Images carousel
    if (jQuery('.img-carousel').length) {
        jQuery('.img-carousel').owlCarousel({
            autoplay: false,
            loop: jQuery('.img-carousel > .item').size() > 1 ? true : false,
            margin: 0,
            dots: true,
            nav: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            responsiveRefreshRate: 100,
            responsive: {
                0: {items: 1},
                479: {items: 1},
                768: {items: 1},
                991: {items: 1},
                1024: {items: 1}
            }
        });
    }

    // Gallery Overlay
    jQuery('ul.galleryImg li a').append('<div></div>');

    // smooth page Scroll nav.navbar a[href^=#],
    jQuery('a.top[href^="#"], a.read[href^="#"]').click(function (event) {
        event.preventDefault();
        jQuery('html,body').animate({
                scrollTop: jQuery(this.hash).offset().top},
            1000);
    });
    jQuery("ul.nav li a").click(function (event) {
        // check if window is small enough so dropdown is created
        jQuery(".navbar-collapse").removeClass("in").addClass("collapse");

    });


    // Services Carousel delay
    jQuery('#serviceList').carousel({
        interval: false // set value like 5000 for making auto and increase or decrease for delay
    });

    // Subscription Form Validation
    jQuery("#subscribeForm input").focus(function () {
        jQuery(this).prev("label").hide();
        jQuery(this).prev().prev("label").hide();
    });

    // Contact Form
    jQuery('.loader').hide();
    jQuery("input, textarea").focus(function () {
        jQuery(this).prev("label").hide();
        jQuery(this).prev().prev("label").hide();
    });
});