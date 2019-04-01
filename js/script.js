$(document).ready(function(){
    $('.slick-carousel').slick({
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<div class="slick-prev slick-arrow"><i class="material-icons">arrow_back_ios</i></div>',
        nextArrow: '<div class="slick-next slick-arrow"><i class="material-icons">arrow_forward_ios</i></div>',
    });
});