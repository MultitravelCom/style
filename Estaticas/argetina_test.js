const head = document.head || document.getElementsByTagName('head')[0];
const meta = document.createElement('meta');

meta.setAttribute('name', 'description');
meta.setAttribute('content', 'Compará paquetes a Argentina y conseguí los mejores precios en alojamiento y vuelos a Bariloche, Iguazú y Mendoza. Solicitá atención personalizada por whatsapp');

head.appendChild(meta);
document.title = "Paquetes turísticos a Argentina | Multitravel.com"

const linkWaHeader = document.querySelector('.btn-group.upper-menu__phone-wrapper a');
const linkWaFixed = document.querySelector('.whatsAppFixes a');
const linkWaHeaderMobile = document.querySelector('.btn.upper-menu__phone-wrapper.features_item a');
linkWaHeader.href = 'https://wa.link/xetnro';
linkWaFixed.href = 'https://wa.link/xetnro';
linkWaHeaderMobile.href = 'https://wa.link/xetnro';

// ************** Ancla *****************************
function mostrarSeccion() {
    let url = window.location.href; // Obtener la URL completa
    let hash = url.substring(url.indexOf("#") + 1); // Obtener el ancla de la URL

    let seccion = document.getElementById(hash); // Buscar el elemento con el ID del ancla

    if (seccion) {
        seccion.scrollIntoView(); // Mostrar la sección si existe
    } else {
        setTimeout(mostrarSeccion, 500); // Intentar nuevamente después de 500 milisegundos
    }
}
mostrarSeccion(); // Llamar a la función para mostrar la sección al cargar el componente
// ************************************************
// BD
const fetchDestinos = async () => {
    const response = await fetch('https://raw.githubusercontent.com/MultitravelCom/style/main/Estaticas/data.json');
    const data = await response.json();
    return data;
};

const btnStyles = [
    { carrusel: "carrusel__lista", btnLeft: "btnLeft", btnRight: "btnRight", title: 'Vuelos Bariloche – Alojamientos Bariloche – Paquetes Bariloche', destino: "Bariloche" },
    { carrusel: "carrusel__lista2", btnLeft: "btnLeft2", btnRight: "btnRight2", title: 'Vuelos Iguazú – Alojamientos Cataratas – Paquetes Cataratas', destino: "Iguazu" },
    { carrusel: "carrusel__lista3", btnLeft: "btnLeft3", btnRight: "btnRight3", title: 'Vuelos Mendoza – Alojamientos Mendoza – Paquetes Mendoza', destino: "Mendoza" },
];
// const destinos1 = [
//     {
//         id: "a1",
//         destino: "Bariloche",
//         img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Bariloche/barilo-a%20(1).webp",
//         className: "uno",
//         linkWa: "https://wa.link/ncvo1x",
//         title: "Paquete a Bariloche 7 noches",
//         price: "$142.300"
//     },
//     {
//         id: "a2",
//         destino: "Bariloche",
//         img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Bariloche/barilo-b%20(1).webp",
//         className: "uno",
//         linkWa: "https://wa.link/s507zo",
//         title: "Paquete a Bariloche 5 noches",
//         price: "$119.100"
//     },
//     {
//         id: "a3",
//         destino: "Bariloche",
//         img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Bariloche/barilo-c%20(1).webp",
//         className: "uno",
//         linkWa: "https://wa.link/duchkz",
//         title: "Hotel Villa Sofia",
//         price: "$24.200"
//     },
//     {
//         id: "a4",
//         destino: "Bariloche",
//         img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Bariloche/barilo-d%20(1).webp",
//         className: "uno",
//         linkWa: "https://wa.link/2z5hpp",
//         title: "Hotel Desing Suites",
//         price: "$35.300"
//     },
//     {
//         id: "a5",
//         destino: "Bariloche",
//         img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Bariloche/barilo-e%20(1).webp",
//         className: "uno",
//         linkWa: "https://wa.link/dv0ucs",
//         title: "Vuelo a Bariloche",
//         price: "$18.600"
//     },
// ];
// const destinos2 = [
//     {
//         id: "b1",
//         destino: "Iguazu",
//         img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Cataratas/iguazu-a%20(1).webp",
//         className: "uno",
//         linkWa: "https://wa.link/hxjkgq",
//         title: "Paquete Iguazú 5 noches",
//         price: "$85.800"
//     },
//     {
//         id: "b2",
//         destino: "Iguazu",
//         img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Cataratas/iguazu-b%20(1).webp",
//         className: "uno",
//         linkWa: "https://wa.link/2rmvhq",
//         title: "Paquete Iguazú 3 noches",
//         price: "$66.500"
//     },
//     {
//         id: "b3",
//         destino: "Iguazu",
//         img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Cataratas/iguazu-c%20(1).webp",
//         className: "uno",
//         linkWa: "https://wa.link/wbq74i",
//         title: "Hotel Kelta",
//         price: "$17.700"
//     },
//     {
//         id: "b4",
//         destino: "Iguazu",
//         img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Cataratas/iguazu-d%20(1).webp",
//         className: "uno",
//         linkWa: "https://wa.link/s6nxus",
//         title: "Hotel Raices Esturión",
//         price: "$24.700"
//     },
//     {
//         id: "b5",
//         destino: "Iguazu",
//         img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Cataratas/iguazu-e%20(1).webp",
//         className: "uno",
//         linkWa: "https://wa.link/37zsyv",
//         title: "Vuelo a Iguzú",
//         price: "$22.900"
//     },
// ];
// const destinos3 = [
//     {
//         id: "c1",
//         destino: "Mendoza",
//         img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Mendoza/mendoza-a%20(1).webp",
//         className: "uno",
//         linkWa: "https://wa.link/61efbi",
//         title: "Paquete Mendoza 7 noches",
//         price: "$117.200"
//     },
//     {
//         id: "c2",
//         destino: "Mendoza",
//         img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Mendoza/mendoza-b%20(1).webp",
//         className: "uno",
//         linkWa: "https://wa.link/sbfl7y",
//         title: "Paquete Mendoza 5 noches",
//         price: "$99.800"
//     },
//     {
//         id: "c3",
//         destino: "Mendoza",
//         img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Mendoza/mendoza-c%20(1).webp",
//         className: "uno",
//         linkWa: "https://wa.link/vs8baw",
//         title: "Hotel Cordón del Plata",
//         price: "$15.900"
//     },
//     {
//         id: "c4",
//         destino: "Mendoza",
//         img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Mendoza/mendoza-d%20(1).webp",
//         className: "uno",
//         linkWa: "https://wa.link/u8ym55",
//         title: "Hotel Raices Aconcagua",
//         price: "$28.200"
//     },
//     {
//         id: "c5",
//         destino: "Mendoza",
//         img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Mendoza/mendoza-e%20(1).webp",
//         className: "uno",
//         linkWa: "https://wa.link/wz0152",
//         title: "Vuelo a Mendoza",
//         price: "$24.100"

//     },
// ];

// *****************************************************
// ************** COMPONENTES ********************

function Button(props) {
    const handleClick = (event) => {
        event.preventDefault();
        window.open(props.link, '_blank');
    }

    return (
        <button id={props.id} className="btn_Style_Venta_Per" onClick={handleClick}>{props.text}</button>
    );
}

const BannerTop = () => {
    return (
        <div className="main_conteiner__s1_medio__paquetes">
            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcSet="
            https://multitravelcom.github.io/MT/Evento/PreViaje/Banners/bannerLanding%20(1).webp
          "
                />
                <source
                    media="(min-width: 768px) and (max-width: 1023px)"
                    srcSet="
            https://multitravelcom.github.io/MT/Evento/PreViaje/Banners/bannerLanding%20(2).webp
          "
                />
                <source
                    media="(max-width: 767px)"
                    srcSet="
            https://multitravelcom.github.io/MT/Evento/PreViaje/Banners/bannerLanding%20(3).webp
          "
                />
                <img
                    className="main_conteiner__s1_medio__paquetes__img"
                    src="https://multitravelcom.github.io/MT/TravelSale2023/Banners/BannerLanding%20(1).jpg"
                    alt="Imagen banner promociones"
                />
            </picture>
        </div>
    )
}
const Card = () => {

    const [destinos, setDestinos1] = React.useState([]);

    React.useEffect(() => {
        fetchDestinos().then(data => setDestinos1(data.destinos1));
        console.log(destinos);
    }, []);

    return (
        <>
            {destinos.length > 0 && destinos.map((destino) => (
                <div key={destino.id} className="carrusel__elemento">
                    <div className="main__conteiner__s1__destacado__card uno" style={{ height: "100%", width: "100%" }}>
                        <picture>
                            <map name={destino.id}>
                                <area target="_blank" alt={destino.title} title={destino.title} href={destino.linkWa} coords={destino.coords} shape="rect" />
                            </map>
                            <source media="(min-width: 1024px)" srcSet={destino.img} />
                            <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={destino.img} />
                            <source media="(max-width: 767px)" srcSet={destino.img} />
                            <img alt={`Imagen banner ${destino.title}`} src={destino.img} useMap={`#${destino.id}`} />
                        </picture>
                        <div className="priceStyle">
                            {destino.price}
                        </div>
                        <Button id={destino.id} link={destino.linkWa} text="Contactarme" />
                    </div>
                </div>
            ))}
        </>
    );
};
const CardContainer = ({ btnStyles }) => {
    const { title, btnRight, btnLeft, carrusel, destino } = btnStyles;
    const [destinos, setDestinos1] = React.useState([]);

    const initializeGlider = () => {
        const btnLeftElement = document.querySelector(`.${btnLeft}`);
        const btnRightElement = document.querySelector(`.${btnRight}`);
        const carruselElement = document.querySelector(`.${carrusel}`);

        btnLeftElement.addEventListener('click', function (event) {
            event.preventDefault();
        });

        btnRightElement.addEventListener('click', function (event) {
            event.preventDefault();
        });
    
        if (btnLeftElement && btnRightElement && carruselElement) {
          new Glider(carruselElement, {
            slidesToShow: 1.2,
            slidesToScroll: 0.5,
            draggable: true,
            arrows: {
              prev: btnLeftElement,
              next: btnRightElement,
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
                // screens greater than >= 775px
                breakpoint: 760,
                settings: {
                  // Set to `auto` and provide item width to adjust to viewport
                  slidesToShow: "3.2",
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
        }
      };
    
      React.useEffect(() => {
        window.onload = () => {
          initializeGlider();
        };
    
        fetchDestinos().then((data) => setDestinos1(data.destinos1));
      }, [btnLeft, btnRight, carrusel]);
    

    return (
        <>
            <div key={title} className="main__conteiner__s1">
                <div className="main__conteiner__s1__titulo" id={`seccion${destino}`}>
                    <h2 key={title}>
                        <strong>{title}</strong>
                    </h2>
                </div>
                <div className="carrusel__contenedor">
                    <button
                        aria-label="Anterior"
                        className={`carrusel__anterior ${btnLeft}`}
                    >
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <div className={carrusel} id={destinos.title}>
                        <Card destinos={destinos} />
                    </div>
                    <button
                        aria-label="Siguiente"
                        className={`carrusel__siguiente ${btnRight}`}
                    >
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </>
    )
};
const Loader = () => {
    return (
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    );
};

// ************************************************

function App() {
    const [loaded, setLoaded] = React.useState(false);
    const [destinos1, setDestinos1] = React.useState([]);
  
    React.useEffect(() => {
      fetchDestinos().then(data => {
        setDestinos1(data.destinos1);
        setLoaded(true);
      });
    }, []);
  
    return (
      <>
        {!loaded && <Loader />}
  
        {loaded && (
          <>
            <div className="main_conteiner__s1_medio top_mkt">
              <BannerTop />
            </div>
            <div className="main__conteiner main__conteiner-principal container">
              <div className="carrusel">
                <CardContainer btnStyles={btnStyles[0]} destinos={destinos1} />
                <CardContainer btnStyles={btnStyles[1]} destinos={destinos1} />
                <CardContainer btnStyles={btnStyles[2]} destinos={destinos1} />
              </div>
            </div>
          </>
        )}
      </>
    );
  }

ReactDOM.render(<App />, document.getElementById("root"));


