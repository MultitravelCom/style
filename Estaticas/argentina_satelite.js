const destinos = [
    {
        id: 1,
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/mendoza%20(1).jpg",
        className: "uno",
        linkWa: "https://wa.link/wc5s7c",
    },
    {
        id: 2,
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/barilo-1.jpg",
        className: "dos",
        linkWa: "https://wa.link/wc5s7c",
    },
    {
        id: 3,
        destino: "El calafate",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/calafate%20(1).jpg",
        className: "tres",
        linkWa: "https://wa.link/wc5s7c",
    },
    {
        id: 4,
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/mendoza%20(1).jpg",
        className: "uno",
        linkWa: "https://wa.link/wc5s7c",
    },
    {
        id: 5,
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/barilo-1.jpg",
        className: "dos",
        linkWa: "https://wa.link/wc5s7c",
    },
    {
        id: 6,
        destino: "El calafate",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/calafate%20(1).jpg",
        className: "tres",
        linkWa: "https://wa.link/wc5s7c",
    },
    {
        id: 7,
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/mendoza%20(1).jpg",
        className: "uno",
        linkWa: "https://wa.link/wc5s7c",
    },
    {
        id: 8,
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/barilo-1.jpg",
        className: "dos",
    },
    {
        id: 9,
        destino: "El calafate",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/calafate%20(1).jpg",
        className: "tres",
        linkWa: "https://wa.link/wc5s7c",
    },
    {
        id: 10,
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/mendoza%20(1).jpg",
        className: "uno",
        linkWa: "https://wa.link/wc5s7c",
    },
];
const titles = [
    { title: 'Descuentos Imbatibles por Argentina' },
];

const items = [
    { btnLeft: ".btnLeft", btnRight: ".btnRight", carrusel: ".carrusel__lista" },
    { btnLeft: ".btnLeft2", btnRight: ".btnRight2", carrusel: ".carrusel__lista2" },
    { btnLeft: ".btnLeft3", btnRight: ".btnRight3", carrusel: ".carrusel__lista3" },
  ]

const initializeGlider = (items) => {
    items.forEach(function (item) {
      const btnLeft = document.querySelector(item.btnLeft);
      const btnRight = document.querySelector(item.btnRight);

      btnLeft.addEventListener("click", function (event) {
        event.preventDefault();
      });

      btnRight.addEventListener("click", function (event) {
        event.preventDefault();
      });

      new Glider(document.querySelector(item.carrusel), {
        slidesToShow: 1.2,
        slidesToScroll: 0.5,
        draggable: true,
        arrows: {
          prev: item.btnLeft,
          next: item.btnRight,
        },
        responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: "2.2",
              slidesToScroll: "1",
            },
          },
          {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
        ],
        rewind: true,
      });
    });
  };

const TitleContainer = ({ titles }) => {
    return (
      <div className="main__conteiner__s1">
        <div className="main__conteiner__s1__titulo">
          <h3>
            <strong>{titles[0].title}</strong>
          </h3>
        </div>
      </div>
    );
  };

  const CardContainer = ({ items }) => {
      React.useEffect(() => {
        initializeGlider(items);
      }, []);
  
    return (
      <div className="carrusel__contenedor">
        <button
          aria-label="Anterior"
          className={`carrusel__anterior ${items.btnLeft}`}
        >
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <div className={items.carrusel} id="seccionBariloche">
          <Card destinos={destinos} />
        </div>
        <button
          aria-label="Siguiente"
          className={`carrusel__siguiente ${items.btnRight}`}
        >
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    );
  };

const Card = ({ destinos }) => {
    return (
        destinos.map((destino) => (
            <div  key={destino.id} className="carrusel__elemento">
                <div className="main__conteiner__s1__destacado__card uno" style={{ height: "100%", width: "100%" }}>
                    <picture>
                        <map name="image-map">
                            <area target="_blank" alt="bariloche" title={destino.destino} href={destino.linkWa} coords="35.97%, 64.23%, 77.62%, 78.34%" shape="rect" />
                        </map>
                        <source media="(min-width: 1024px)" srcSet={destino.img} />
                        <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={destino.img} />
                        <source media="(max-width: 767px)" srcSet={destino.img} />
                        <img src={destino.img} useMap="#image-map" />
                    </picture>
                </div>
            </div>
        )));
};

const App = () => {
  
    return (
      <>
        <TitleContainer titles={titles} />
        <CardContainer  />
      </>
    );
  }

  
ReactDOM.render(<App />, document.getElementById("containerCarrusel"));


