function addHeaderLinks() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const meta = document.createElement('meta');

    document.title = "Paquetes turísticos a Argentina | Multitravel.com"

    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'Compará paquetes a Argentina y conseguí los mejores precios en alojamiento y vuelos a Bariloche, Iguazú y Mendoza. Solicitá atención personalizada por whatsapp');

    const link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/glider-js@1.7.8/glider.min.css';

    const mailchimp = document.createElement('script');
    mailchimp.id = 'mcjs';
    mailchimp.async = true;
    mailchimp.src = 'https://chimpstatic.com/mcjs-connected/js/users/d09ee86703b1761e8337397e9/6e305f08d149ab3c55d2d9573.js';
    mailchimp.textContent = '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/d09ee86703b1761e8337397e9/6e305f08d149ab3c55d2d9573.js");';

    head.appendChild(meta);
    head.appendChild(link);
    head.appendChild(mailchimp);
}
addHeaderLinks();

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
mostrarSeccion();
// ************************************************
// ***************************  Conexion a BD ***************************************
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
    const [destinos, setDestinos] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);
  
    React.useEffect(() => {
      fetchDestinos().then(data => {
        setDestinos(data.destinos);
        setLoaded(true);
      });
    }, []);
  
    return (
      <>
        {loaded ? (
          destinos.length > 0 ? (
            destinos.map(destino => (
              <div key={destino.id} className="carrusel__elemento">
                <div
                  className="main__conteiner__s1__destacado__card uno"
                  style={{ height: "100%", width: "100%" }}
                >
                  <picture>
                    <map name={destino.id}>
                      <area
                        target="_blank"
                        alt={destino.title}
                        title={destino.title}
                        href={destino.linkWa}
                        coords={destino.coords}
                        shape="rect"
                      />
                    </map>
                    <source media="(min-width: 1024px)" srcSet={destino.img} />
                    <source
                      media="(min-width: 768px) and (max-width: 1023px)"
                      srcSet={destino.img}
                    />
                    <source media="(max-width: 767px)" srcSet={destino.img} />
                    <img
                      alt={`Imagen banner ${destino.title}`}
                      src={destino.img}
                      useMap={`#${destino.id}`}
                    />
                  </picture>
                  <div className="priceStyle">{destino.price}</div>
                  <Button
                    id={destino.id}
                    link={destino.linkWa}
                    text="Contactarme"
                  />
                </div>
              </div>
            ))
          ) : (
            <p>No hay destinos disponibles.</p>
          )
        ) : (
          <Loader />
        )}
      </>
    );
  };
const CardContainer = ({ btnStyles, destinos }) => {
    const { title, btnRight, btnLeft, carrusel, destino } = btnStyles;

    const setupGlider = () => {
        const btnLeftElement = document.querySelector(`.${btnLeft}`);
        const btnRightElement = document.querySelector(`.${btnRight}`);

        btnLeftElement.addEventListener('click', function (event) {
            event.preventDefault();
        });

        btnRightElement.addEventListener('click', function (event) {
            event.preventDefault();
        });

        new Glider(document.querySelector(`.${carrusel}`), {
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
    };

    React.useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
                    setupGlider();
                    observer.disconnect();
                }
            });
        });

        observer.observe(document.querySelector(`.${carrusel}`), {
            childList: true,
        });

        return () => {
            observer.disconnect();
        };
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
    );
};

const Loader = () => {
    return (
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    );
};

// ************************************************

function App() {
    const [loaded, setLoaded] = React.useState(false);
    const [destinos, setDestinos] = React.useState([]);

    React.useEffect(() => {
        fetchDestinos().then(data => {
            setDestinos(data.destinos);
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
                            <CardContainer btnStyles={btnStyles[0]} destinos={destinos.destinos1} />
                            <CardContainer btnStyles={btnStyles[1]} destinos={destinos.destinos2} />
                            <CardContainer btnStyles={btnStyles[2]} destinos={destinos.destinos3} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));


