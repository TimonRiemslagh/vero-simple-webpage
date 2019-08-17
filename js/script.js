var albums = [
    {
        "title": "Raku",
        "photos": [
            "./img/slide1.JPG",
            "./img/slide2.JPG",
            "./img/slide3.JPG",
            "./img/slide4.JPG"
        ]
    },
    {
        "title": "Raku 2",
        "photos": [
            "./img/slide1.JPG",
            "./img/slide2.JPG",
            "./img/slide3.JPG",
            "./img/slide4.JPG"
        ]
    },
    {
        "title": "Raku 3",
        "photos": [
            "./img/slide1.JPG",
            "./img/slide2.JPG",
            "./img/slide3.JPG",
            "./img/slide4.JPG"
        ]
    }
];

function setAlbum($wrapper, album) {
    var albumHtml = '<h2>' + album["title"] + '</h2><div class="album-grid">';
    album["photos"].forEach(function(photo) {
        albumHtml += '<img src="' + photo + '" class="blue-background image" alt="">';
    });
    albumHtml += '</div>';
    $wrapper.append(albumHtml);
}

function setCarousel() {
    var $carousel = $('[data-slick-carousel]');
    $carousel.html('');
    content["slides"].forEach(function(slide) {
        var slideHtml = '<div class="slick-carousel__image" style="background-image: url(\'' + slide + '\')" alt=""></div>';
        $carousel.append(slideHtml);
    });
}

$(document).ready(function(){
    var $wrapper = $('#photos');
    $wrapper.html('');

    albums.forEach(function(album) {
        setAlbum($wrapper, album);
    });

    //setCarousel();

    // $('.slick-carousel').slick({
    //     dots: true,
    //     infinite: true,
    //     arrows: true,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     prevArrow: '<div class="slick-prev slick-arrow"><i class="material-icons">arrow_back_ios</i></div>',
    //     nextArrow: '<div class="slick-next slick-arrow"><i class="material-icons">arrow_forward_ios</i></div>',
    // });
});