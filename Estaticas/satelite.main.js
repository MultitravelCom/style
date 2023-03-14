window.addEventListener('load', function () {
    new Glider(document.querySelector(".carusel__lista"), {
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: true,
        dots: '.dots',
        arrows: {
            prev: '.carrusel__anterior',
            next: '.carrusel__siguiente'
        }
        });
});