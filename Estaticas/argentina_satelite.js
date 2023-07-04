const head = document.head || document.getElementsByTagName('head')[0];
const meta = document.createElement('meta');

meta.setAttribute('name', 'description');
meta.setAttribute('content', 'Compará paquetes a Argentina y conseguí los mejores precios en alojamiento y vuelos a Bariloche, Iguazú y Mendoza. Solicitá atención personalizada por whatsapp');

head.appendChild(meta);
document.title = "Paquetes turísticos a Argentina | Multitravel.com"

function verificarYActualizarMeta() {
    let metaTag = document.querySelector('meta[property="og:image"]');

    if (metaTag) {
        metaTag.setAttribute("content", "https://multitravelcom.github.io/MT/multitravel.webp");
    } else {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("property", "og:image");
        metaTag.setAttribute("content", "https://multitravelcom.github.io/MT/multitravel.webp");

        let head = document.querySelector("head");
        head.appendChild(metaTag);
    }
    console.log("La etiqueta meta ha sido verificada o actualizada correctamente.");
}
verificarYActualizarMeta();

// const linkWaHeader = document.querySelector('.btn-group.upper-menu__phone-wrapper a');
// const linkWaFixed = document.querySelector('.whatsAppFixes a');
// const linkWaHeaderMobile = document.querySelector('.btn.upper-menu__phone-wrapper.features_item a');
// linkWaHeader.href = 'https://wa.link/xetnro';
// linkWaFixed.href = 'https://wa.link/xetnro';
// linkWaHeaderMobile.href = 'https://wa.link/xetnro';

// BD
const destinos1 = [
    {
        id: "a1",
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Bariloche/barilo-a%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/ncvo1x",
        title: "Paquete a Bariloche",
        price: "$80.790",
        events: "si"
    },
    {
        id: "a2",
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Bariloche/barilo-b%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/s507zo",
        title: "Paquete a Bariloche",
        price: "$107.790 ",
        events: "si"
    },
    {
        id: "a3",
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Bariloche/barilo-c%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/duchkz",
        title: "Paquete a Bariloche",
        price: "$134.790",
        events: "No"
    },
    {
        id: "a4",
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Bariloche/barilo-d%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/2z5hpp",
        title: "Hotel Villa Sofia",
        price: "$24.020 ",
        events: "si"
    },
    {
        id: "a5",
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Bariloche/barilo-e%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/dv0ucs",
        title: "Hotel Kenton Palace Bariloche",
        price: "$33.945 ",
        events: "si"
    },
    {
        id: "a6",
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Bariloche/barilo-f%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/dv0ucs",
        title: "Hotel Design Suites Bariloche",
        price: "$46.390 ",
        events: "si"
    },
];
const destinos2 = [
    {
        id: "b1",
        destino: "Iguazu",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Cataratas/iguazu-a%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/hxjkgq",
        title: "Paquete a Iguazú",
        price: "$70.750 ",
        events: "si"
    },
    {
        id: "b2",
        destino: "Iguazu",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Cataratas/iguazu-b%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/2rmvhq",
        title: "Paquete a Iguazús",
        price: "$98.100 ",
        events: "si"
    },
    {
        id: "b3",
        destino: "Iguazu",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Cataratas/iguazu-c%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/wbq74i",
        title: "Hotel Merit Iguazú",
        price: "$31.060 ",
        events: "si"
    },
    {
        id: "b4",
        destino: "Iguazu",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Cataratas/iguazu-d%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/s6nxus",
        title: "Hotel Marcopolo Suites Iguazú",
        price: "$31.345 ",
        events: "si"
    },
    {
        id: "b5",
        destino: "Iguazu",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Cataratas/iguazu-e%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/37zsyv",
        title: "Hotel Tourbillon",
        price: "$31.510 ",
        events: "No"
    },
    {
        id: "b6",
        destino: "Iguazu",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Cataratas/iguazu-f%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/37zsyv",
        title: "Hotel Iguazu Grand",
        price: "$77.370",
        events: "No"
    },
];
const destinos3 = [
    {
        id: "c1",
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Mendoza/mendoza-a%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/61efbi",
        title: "Paquete a Mendoza",
        price: "$75.140 ",
        events: "si"
    },
    {
        id: "c2",
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Mendoza/mendoza-b%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/sbfl7y",
        title: "Paquete a Mendoza",
        price: "$100.780",
        events: "si"
    },
    {
        id: "c3",
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Mendoza/mendoza-c%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/vs8baw",
        title: "Paquete a Mendoza",
        price: "$128.529",
        events: "si"
    },
    {
        id: "c4",
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Mendoza/mendoza-d%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/u8ym55",
        title: "Hotel Crillón",
        price: "$24.760",
        events: "si"
    },
    {
        id: "c5",
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Mendoza/mendoza-e%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/wz0152",
        title: "Hotel Cordón del Plata",
        price: "$24.900",
        events: "si"
    },
    {
        id: "c6",
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/Evento/PreViaje/Mendoza/mendoza-f%20(1).webp",
        className: "uno",
        linkWa: "https://wa.link/wz0152",
        title: "Hotel Huentala",
        price: "$53.670 ",
        events: "si"
    },
];
const btnStyles = [
    { carrusel: "carrusel__lista", btnLeft: "btnLeft", btnRight: "btnRight", title: 'Vuelos Bariloche – Alojamientos Bariloche – Paquetes Bariloche', destino: "Bariloche" },
    { carrusel: "carrusel__lista2", btnLeft: "btnLeft2", btnRight: "btnRight2", title: 'Vuelos Iguazú – Alojamientos Cataratas – Paquetes Cataratas', destino: "Iguazu" },
    { carrusel: "carrusel__lista3", btnLeft: "btnLeft3", btnRight: "btnRight3", title: 'Vuelos Mendoza – Alojamientos Mendoza – Paquetes Mendoza', destino: "Mendoza" },
];
// *****************************************************
// ************** COMPONENTES ********************
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

function Button(props) {
    const handleClick = (event) => {
        event.preventDefault();

        if (window.innerWidth <= 767) {
            // Llamar a un número en dispositivos móviles
            window.location.href = 'tel:08003480003';
        }
    };

    return (
        <button id={props.id} className="btn_Style_Venta_Per" onClick={handleClick}>{props.text}</button>
    );
}


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

function shouldShowEvent() {
    const startDate = new Date("2023-05-07T23:59:00");
    const endDate = new Date("2023-05-10T23:59:00");
    const now = new Date();

    return now >= startDate && now <= endDate;
}

const EventImg = (props) => {
    const { shouldShowEvent } = props;

    if (!shouldShowEvent()) {
        return (
            <div className={props.style}>
                <img
                    alt={`Imagen evento promocion`}
                    src={"https://multitravelcom.github.io/MT/HotSale2023/iconCardsOff/iconHotWeek.webp"}
                />
            </div>
        );
    }

    return (
        <div className={props.style}>
            <img
                alt={`Imagen evento promocion`}
                src={"https://multitravelcom.github.io/MT/HotSale2023/iconCardsOff/logohotsale.webp"}
            />
        </div>
    );
};

const WarningPrice = () => {
    return (
        <div className="container main__warningPrice">
            <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
            <p>Los precios publicados no aplican para fines de semana largo y vacaciones de invierno y verano.
                De todas maneras puedes comunicarte con nuestros especialistas para que te den información al respecto.</p>
        </div>

    )
}


const Card = ({ destinos }) => {
    return (
        destinos.map((destino) => (
            <div key={destino.id} className="carrusel__elemento">
                <div className="main__conteiner__s1__destacado__card uno" style={{ height: "100%", width: "100%" }}>
                    {destino.events === "no" && <EventImg style="eventImg" shouldShowEvent={shouldShowEvent} />}
                    <picture>
                        <map name={destino.id}>
                            <area target="_blank" alt={destino.title} title={destino.title} href={destino.linkWa} coords={destino.coords} shape="rect" />
                        </map>
                        <source media="(min-width: 1024px)" srcSet={destino.img} />
                        <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={destino.img} />
                        <source media="(max-width: 767px)" srcSet={destino.img} />
                        <img alt={`Imagen banner ${destino.title}`} src={destino.img} />
                    </picture>
                    <div className="priceStyle">{destino.price}</div>
                    <Button id={destino.title} link={destino.linkWa} text="Contactarme" />
                </div>
            </div>
        )));
};
const CardContainer = ({ btnStyles, destinos }) => {
    const { title, btnRight, btnLeft, carrusel, destino } = btnStyles;

    React.useEffect(() => {
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
function ButtonPre(props) {

    const handleClick = (event) => {
        event.preventDefault();
        window.open(props.link, '_blank');
    }

    return (
        <button className="btn btnStyleBannerPre" onClick={handleClick}>{props.text}</button>
    );
}
const BannerTopPreViaje = () => {
    return (
        <>
            <div id="containerPreViaje" className="container containerPreViaje">
                <row className="rowStyle">
                    <div className="main__container__left col-8">
                        <picture>
                            <source media="(min-width: 1024px)"
                                srcSet="https://multitravelcom.github.io/MT/Evento/PreViaje/bannerHome/bannerDesktop.webp" />
                            <source media="(min-width: 768px) and (max-width: 1023px)"
                                srcSet="https://multitravelcom.github.io/MT/Evento/PreViaje/bannerHome/bannerDesktop.webp" />
                            <source media="(max-width: 767px)"
                                srcSet="https://multitravelcom.github.io/MT/Evento/PreViaje/bannerHome/bannerDesktop.webp" />
                            <img alt="" src="https://multitravelcom.github.io/MT/Evento/PreViaje/bannerHome/bannerDesktop.webp" />
                        </picture>
                    </div>
                    <div className="main__container__right col-4">
                        <picture>
                            <source media="(min-width: 1024px)"
                                srcSet="https://multitravelcom.github.io/MT/Evento/PreViaje/bannerHome/bannerDesktop-2.webp" />
                            <source media="(min-width: 768px) and (max-width: 1023px)"
                                srcSet="https://multitravelcom.github.io/MT/Evento/PreViaje/bannerHome/bannerDesktop-2.webp" />
                            <source media="(max-width: 767px)"
                                srcSet="https://multitravelcom.github.io/MT/Evento/PreViaje/bannerHome/bannerMobile.webp" />
                            <img alt="" src="https://multitravelcom.github.io/MT/Evento/PreViaje/bannerHome/bannerDesktop-2.webp" />
                        </picture>
                        <ButtonPre link="https://www.multitravel.com/promociones/previaje" text="Ver más" />
                    </div>
                </row>
            </div>
        </>
    )
}
// ************************************************

function App() {
    const [loaded, setLoaded] = React.useState(false);
    const [ocultarComponente, setOcultarComponente] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 2000);

        const intervalo = setInterval(() => {
            const fechaDeseada = new Date("2023-04-25T19:40:00");
            const fechaActual = new Date();

            if (fechaActual >= fechaDeseada) {
                setOcultarComponente(false);
                clearInterval(intervalo);
            }
        }, 1000);

        return () => clearInterval(intervalo);

    }, []);

    return (
        <>
            {loaded ? (
                <>
                    <div className="main_conteiner__s1_medio top_mkt">
                        <BannerTop />
                    </div>
                    <div className="main__conteiner main__conteiner-principal container">
                        <div className="carrusel">
                            <CardContainer btnStyles={btnStyles[0]} destinos={destinos1} />
                            {!ocultarComponente ? null : (<BannerTopPreViaje />)}
                            <WarningPrice />
                            <CardContainer btnStyles={btnStyles[1]} destinos={destinos2} />
                            <WarningPrice />
                            <CardContainer btnStyles={btnStyles[2]} destinos={destinos3} />
                        </div>
                    </div>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));