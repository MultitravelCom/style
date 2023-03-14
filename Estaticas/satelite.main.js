new Glider(document.querySelector(".carrusel__lista"), {
    slidesToShow: 1,
    slidesToScroll: 2,
    draggable: true,
    arrows: {
      prev: '.carrusel__anterior',
      next: '.carrusel__siguiente',
      // Agrega el manejador de eventos `click` al botón de siguiente (`next`)
      // del carrusel para detener la recarga de la página y mostrar el siguiente
      // elemento en el carrusel.
      nextFunc: function() {
        const btn = document.querySelector('.carrusel__siguiente');
        btn.addEventListener('click', function(event) {
          event.preventDefault();
          // Agrega la lógica para mostrar el siguiente elemento en el carrusel.
          // ...
        });
      }
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