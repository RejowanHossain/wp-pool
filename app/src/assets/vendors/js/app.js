$(document).ready(function() {
    //   "use strict";


    //   preloadder
    $(window).on('load', function() {
        //$("#loading").delay(2000).fadeOut(500);
        $("#loading").fadeOut(500);
    })



    // scroll to top
    //Top to back
    $(".top-btm").on('click', function() {
        $('html,body').animate({
            "scrollTop": "0"
        }, 1000)
    });

    //fade in fade out
    $(window).on('scroll', function() {
        var scrollValue = $(this).scrollTop();

        if (scrollValue >= 500) {
            $(".top-btm").fadeIn();
        } else {
            $(".top-btm").fadeOut();
        }
    });
    // hero slider
    $('.blog-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fas fa-arrow-left"><i/></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fas fa-arrow-right"><i/></button>',

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });





});


// responsive toggle menu

const hamburgerMenu = document.getElementById('toggleMenu');
const mobileMenu = document.getElementById('mobileMenu');
const closeNav = document.getElementById('close-navigation');

hamburgerMenu.addEventListener('click', function() {
    mobileMenu.style.display = 'block'

})

closeNav.addEventListener('click', function() {
    mobileMenu.style.display = 'none'

})