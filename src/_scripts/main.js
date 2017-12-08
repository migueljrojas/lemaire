// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
var Header = require('../_modules/header/header');
var Home = require('./home');
var Slider = require('../_modules/slider/slider');
var Faq = require('../_modules/faq/faq');

$(function() {
    require('../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min');
    require('../../bower_components/slick-carousel/slick/slick');

    new Header();
    new Home();
    new Slider();
    new Faq();
});
