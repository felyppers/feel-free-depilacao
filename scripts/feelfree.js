(function($) {

    // Handle menu bar fixing
    function handleMenuBar(){
        if ($('#home').hasClass("fixed")){
            $('#logo-container').css('display','table');
        } else {
            $('#logo-container').css('display','none');
            if ($('.slides').width() < 768){
                $('.slides').css('height',$(window).height()-$('#home').height());
            }
        }
    }

    // EVENTS
    $(document).ready(function(){
        handleMenuBar();
    });
    $(document).scroll(function(){
        handleMenuBar();
    });
    $(window).resize(_.debounce(function(){
        handleMenuBar();
    },100));

    // HYPERLINKS
    $(".button-menu").click(function() {
        if (!$('#home').hasClass("fixed")) {
            $('html, body').animate({
                scrollTop: $("#about").offset().top - 70
            }, 1000);
        }
    });

    $(".button-home").click(function() {
        $('html, body').animate({
            scrollTop: $("#index").offset().top
        }, 1000);
    });

    $(".button-about").click(function() {
        if ($('#home').hasClass("fixed")) {
            $('html, body').animate({
                scrollTop: $("#about").offset().top
            }, 1000);
        } else {
            $('html, body').animate({
                scrollTop: $("#about").offset().top - 70
            }, 1000);
        }
    });

    $(".button-services").click(function() {
        if ($('#home').hasClass("fixed")) {
            $('html, body').animate({
                scrollTop: $("#services").offset().top
            }, 1000);
        } else {
            $('html, body').animate({
                scrollTop: $("#services").offset().top - 70
            }, 1000);
        }
    });

    $(".button-offers").click(function() {
        if ($('#home').hasClass("fixed")) {
            $('html, body').animate({
                scrollTop: $("#offers").offset().top
            }, 1000);
        } else {
            $('html, body').animate({
                scrollTop: $("#offers").offset().top - 70
            }, 1000);
        }
    });

    $(".button-contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

})(jQuery);