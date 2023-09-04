$(function(){

  $('.slider__inner').slick({
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><img src="../images/home_page/prev-arrow.png">',
    nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><img src="../images/home_page/next-arrow.png">'
    });

});

var mixer = mixitup(".categories__box");