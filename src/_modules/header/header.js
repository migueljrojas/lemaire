'use strict';
var weather = require('../weather/jquery.simpleWeather.js');

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var main = $('main');
    var footer = $('footer');

    $('.header__hamburguer').on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
        main.toggleClass('-blur');
        footer.toggleClass('-blur');
    });

    $(function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                header.removeClass('-ontop');
            } else {
                header.addClass('-ontop');
            }
        });
    });

    $.simpleWeather({
        location: 'Ushuaia, AR',
        woeid: '',
        unit: 'c',
        success: function (weather) {
            var html;
            html = '<span class="temp">' + weather.temp + '&deg;' + weather.units.temp + '</span>';
            html += '<span class="icon icon-' + weather.code + '"></span>';
            html += '<span class="location">Ushuaia</span>';
            $("#weather").html(html);
        },
        error: function (error) {
            $("#weather").html('<p>' + error + '</p>');
        }
    });

    $('.header__lang select').on('change', function() {

        $.expr[":"].contains = $.expr.createPseudo(function(arg) {
            return function( elem ) {
                return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
            };
        });

        var lang = $(this).val();
        var $frame = $('.goog-te-menu-frame:first');

        console.log(lang);
        console.log($frame);

        if (!$frame.length > 0) {
            alert("Error: Could not find Google translate frame.");
            return false;
        }

        $frame.contents().find('.goog-te-menu2-item span.text:contains('+lang+')').get(0).click();
        return false;
    });
};

module.exports = Header;
