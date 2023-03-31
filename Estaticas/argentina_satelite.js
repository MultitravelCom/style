
document.addEventListener('DOMContentLoaded', function () {
    const destinos = [
        {
            id: 1,
            destino: "Mendoza",
            img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/mendoza%20(1).jpg",
            className: "uno",
        },
        {
            id: 2,
            destino: "Bariloche",
            img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/barilo-1.jpg",
            className: "dos",
        },
        {
            id: 3,
            destino: "El calafate",
            img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/calafate%20(1).jpg",
            className: "tres",
        },
    ];
    
  
    const Card = ({ linkWa, destino, img, className }) => {
      return (
          <>
              <div className="carrusel__elemento">
                  <div className={`main__conteiner__s1__destacado__card ${className}`} style={{ height: '100%', width: '100%' }}>
                      <a href={linkWa} target="_blank">
                          <picture>
                              <source media="(min-width: 1024px)" srcSet={`${img}`} />
                              <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={`${img}`} />
                              <source media="(max-width: 767px)" srcSet={`${img}`} />
                              <img src={`${img}`} alt={`Imagen banner ${destino}`} />
                          </picture>
                      </a>
                  </div>
              </div>
          </>
      )
    }
  
    const DestinosList = () => {
      return (
          <>
              {destinos.map((destino) => (
                  <Card
                      key={destino.id}
                      linkWa={`https://wa.link/${destino.destino}`}
                      destino={destino.destino}
                      img={destino.img}
                      className={destino.className}
                  />
              ))}
          </>
      );
    };
  
    ReactDOM.createRoot(document.getElementById('carrusel__lista_uno')).render(<DestinosList />);
  
    const items = [
      { btnLeft: '.btnLeft', btnRight: '.btnRight', carrusel: '.carrusel__lista' },
      { btnLeft: '.btnLeft2', btnRight: '.btnRight2', carrusel: '.carrusel__lista2' }
    ];
  
    items.forEach(function(item) {
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
  
