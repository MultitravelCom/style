window.addEventListener('load', function () {

    const btnLesft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');

    btnLesft.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que la página se recargue
    
    // Agrega la lógica para mostrar el siguiente elemento en el carrusel
  });

  btnRight.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que la página se recargue
    
    // Agrega la lógica para mostrar el siguiente elemento en el carrusel
  });
  
    new Glider(document.querySelector(".carrusel__lista"), {
        slidesToShow: 1,
        slidesToScroll: 1,
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
                slidesToScroll: '1',
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,

              }
            }
          ]
        });
});
