document.addEventListener('DOMContentLoaded', function () {

  const items = [
    { btnLeft: '.btnLeft', btnRight: '.btnRight', carrusel: '.carrusel__lista' },
    { btnLeft: '.btnLeft2', btnRight: '.btnRight2', carrusel: '.carrusel__lista2' }
  ];

  items.forEach(function(item) {
    const btnLesft = document.querySelector(item.btnLeft);
    const btnRight = document.querySelector(item.btnRight);

    btnLesft.addEventListener('click', function (event) {
      event.preventDefault();
    });

    btnRight.addEventListener('click', function (event) {
      event.preventDefault();
    });

    new Glider(document.querySelector(item.carrusel), {
      slidesToShow: 1.20,
      slidesToScroll: 1.20,
      draggable: true,
      arrows: {
        prev: item.btnLeft,
        next: item.btnRight
      },
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 450,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: '2.20',
            slidesToScroll: '1.20',
          }
        }, {
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,

          }
        }
      ],
      rewind: true 
    });
  });
});

