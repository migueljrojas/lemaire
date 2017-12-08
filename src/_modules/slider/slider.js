'use strict';

// Constructor
var Slider = function() {
    var slider = $('._slider');
    var sliderMulti = $('._slider-multi');

    if (slider) {
        slider.each(function(){
            $(this).slick({
                dots: true,
                autoplay: true
            });
        });
    }

    if (sliderMulti) {
        sliderMulti.each(function(){
            $(this).slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        });
    }
};

module.exports = Slider;
