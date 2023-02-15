jQuery(
  (function ($) {
    /*-- Strict mode enabled --*/
    ("use strict");
    topRatedCarousel();

    /* Variables */
    var navigation = $(".site-navigation");
    var navmeu = $(".nav-menu");
    var navlist = $(".nav-list");
    var openmenu = ".open-menu";
    var closemenu = ".close-menu";
    var bgmenu = ".bg-close-menu";

    /* Header functionality */
    /* Open menu */
    $(openmenu).on("click", function () {
      $(navigation).toggleClass("active");
      $(navmeu).toggleClass("active");
    });

    /* Close menu */
    $(closemenu).on("click", function () {
      $(navigation).removeClass("active");
      $(navmeu).removeClass("active");
    });

    /* Owl carousel functionality */
    $(function() {
      $(window).on("scroll", function() {
          if($(window).scrollTop() > 50) {
              $(".header").addClass("active");
          } else {
              //remove the background property so it comes transparent again (defined in your css)
             $(".header").removeClass("active");
          }
      });
  });
    /*  Top rated carousel */
    function topRatedCarousel() {
      var topRatedItems = ".top-items";
      $(topRatedItems).addClass("owl-carousel");
      $(topRatedItems).owlCarousel({
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
          0: {
            items: 2,
            dots: true,
            margin: 5,
          },
          601: {
            items: 3,
            margin: 20,
          },
          1024: {
            margin: 40,
          },
        },
      });
    }
  })(jQuery)
);
