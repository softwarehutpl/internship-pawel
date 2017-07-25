
import $ from 'jquery';

$(document).ready(function(){

$('.header__center__contener__slider-place__slider').slick({
  dots:true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
});



});




export {slick};