document.addEventListener('DOMContentLoaded', function () {

    const btnLesft = document.querySelector('.btnLeft');
    const btnRight = document.querySelector('.btnRight');

    const btnLesft2 = document.querySelector('.btnLeft2');
    const btnRight2 = document.querySelector('.btnRight2');

    btnLesft.addEventListener('click', function(event) {
    event.preventDefault(); 
  });

  btnRight.addEventListener('click', function(event) {
    event.preventDefault(); 
  });

  btnLesft2.addEventListener('click', function(event) {
    event.preventDefault(); 
  });

  btnRight2.addEventListener('click', function(event) {
    event.preventDefault(); 
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
                slidesToScroll: 1,

              }
            }
          ]
      });

    new Glider(document.querySelector(".carrusel__lista2"), {
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
                  slidesToScroll: 1,
  
                }
              }
            ]
      });
});


