'use strict';

var Home = function() {
    var cards = $('.home__topcards__card');
    var slides = $('.home__destinations__slide');

    cards.each(function(){
        $(this).click(function(){
            cards.removeClass('-open');
            $(this).addClass('-open');
        });
    });

    slides.each(function(){
        $(this).on('mouseenter', function(){
            $(this).addClass('-hover');
        });
        $(this).on('mouseleave', function(){
            $(this).removeClass('-hover');
        });
    });


};

module.exports = Home;
