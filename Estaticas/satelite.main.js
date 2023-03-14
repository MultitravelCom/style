window.addEventListener('load', function (e) {
    event.preventDefault()
    new Glider(document.querySelector(".carusel__lista"), {
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: true,
        arrows: {
            prev: '.carrusel__anterior',
            next: '.carrusel__siguiente'
        }
        });
});