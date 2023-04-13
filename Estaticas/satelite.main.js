document.addEventListener('DOMContentLoaded', function () {
  const items = [
    { btnLeft: '.btnLeft', btnRight: '.btnRight', carrusel: '.carrusel__lista' },
    { btnLeft: '.btnLeft2', btnRight: '.btnRight2', carrusel: '.carrusel__lista2' },
    { btnLeft: '.btnLeft3', btnRight: '.btnRight3', carrusel: '.carrusel__lista3' },
  ];

  items.forEach(function (item) {
    const btnLeft = document.querySelector(item.btnLeft);
    const btnRight = document.querySelector(item.btnRight);

    btnLeft.addEventListener('click', function (event) {
      event.preventDefault();
    });

    btnRight.addEventListener('click', function (event) {
      event.preventDefault();
    });

    new Glider(document.querySelector(item.carrusel), {
      slidesToShow: 1.20,
      slidesToScroll: 0.50,
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
            slidesToScroll: '1',
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

const telefonoAr = document.querySelector(".pull-left hidden-xs");

const div = document.createElement(div);

div.innerHTML = `
<div class="btn-group upper-menu__phone-wrapper">
  <a target="_blank" href="https://wa.link/v9ejqn">

    <span class="glyphicon glyphicon-whatsapp-bottomless" aria-hidden="true"></span>

    <span class="sr-only">Teléfono</span>

    <span id="upper-menu-phone-container"><span class="text-nowrap phone text-nowrap quicklink-elem-label phone" dir="ltr">11 4979 1876</span></span>
  </a>
</div>
`
telefonoAr.appendChild(div);
