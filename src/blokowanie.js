import $ from 'jquery';
import {slick} from './slick/slikinit.js';


var zanax = true;
var slider =   $('.header__center__contener__slider-place__slider');


$(document).ready(function(){
    var button =  $('.header__center__contener__slider-place__info__textowe__jubotron__btn');
    button.on('click', function(){
 
        if ( zanax == true)
            {
       slider.slick('slickPause');
       zanax = false;
            }
    else if (zanax == false) {
         slider.slick('slickPlay');
         zanax = true;
    }

});

});
