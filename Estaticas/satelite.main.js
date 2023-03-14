window.addEventListener('load', function (e) {
    event.preventDefault()
    new Glider(document.querySelector(".carrusel__lista"), {
        slidesToShow: 1,
        slidesToScroll: 2,
        draggable: true,
        arrows: {
            prev: '.carrusel__anterior',
            next: '.carrusel__siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 450,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '2',
                slidesToScroll: '2',
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,

              }
            }
          ]
        });
});