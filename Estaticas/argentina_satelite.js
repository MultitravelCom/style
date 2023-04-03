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

    const Card = ({ destinos }) => {
        return (
          <div class="carrusel__elemento">
            {destinos.map((destino) => (
              <div className="carrusel__elemento">
                <div
                  className={`main__conteiner__s1__destacado__card ${destino.className}`}
                  style={{ height: "100%", width: "100%" }}
                >
                  <a href={destino.linkWa} target="_blank">
                    <picture>
                      <source media="(min-width: 1024px)" srcSet={`${destino.img}`} />
                      <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={`${destino.img}`} />
                      <source media="(max-width: 767px)" srcSet={`${destino.img}`} />
                      <img src={`${destino.img}`} alt={`Imagen banner ${destino.destino}`} />
                    </picture>
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
      };
      
      const DestinosList = () => {
        return (
          <>
            <Card destinos={destinos} />
          </>
        );
      };
      
      ReactDOM.render(<DestinosList />, document.getElementById("carrusel__lista_uno"));
