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
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/barilo-1.jpg",
        className: "dos",
        linkWa: "https://wa.link/wc5s7c",
    },
    {
        id: 3,
        destino: "Mendoza",
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
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/calafate%20(1).jpg",
        className: "tres",
        linkWa: "https://wa.link/wc5s7c",
    },
    {
        id: 7,
        destino: "Bariloche",
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
        destino: "El calafate",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/mendoza%20(1).jpg",
        className: "uno",
        linkWa: "https://wa.link/wc5s7c",
    },
];
const titles = [
    { title: 'Descuentos Imbatibles por Argentina' },
    { title: 'Descuentos Imbatibles por Argentina' },
    { title: 'Descuentos Imbatibles por Argentina' },
];
const btnStyles = [
    { carrusel: "carrusel__lista", btnLeft: "btnLeft", btnRight: "btnRight" },
    { carrusel: "carrusel__lista2", btnLeft: "btnLeft2", btnRight: "btnRight2" },
    { carrusel: "carrusel__lista3", btnLeft: "btnLeft3", btnRight: "btnRight3" },
];


const TitleContainer = ({ titles }) => {
    return (
        <h3>
            <strong>{titles.title}</strong>
        </h3>
    )
};

const Card = ({ destinos }) => {
    return (
        destinos.map((destino) => (
            <div key={destino.id} className="carrusel__elemento">
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

const CardContainer = ({ btnStyles }) => {

    React.useEffect(() => {
        btnStyles.forEach((style) => {
            const btnLeft = document.querySelector(`.${style.btnLeft}`);
            const btnRight = document.querySelector(`.${style.btnRight}`);

            btnLeft.addEventListener('click', function (event) {
                event.preventDefault();
            });

            btnRight.addEventListener('click', function (event) {
                event.preventDefault();
            });

            new Glider(document.querySelector(`.${style.carrusel}`), {
                slidesToShow: 1.2,
                slidesToScroll: 0.5,
                draggable: true,
                arrows: {
                    prev: btnLeft,
                    next: btnRight,
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
    }, [btnStyles]);

    return (
        <div>
            {btnStyles.map((item) => (
                <div key={item.title} className="main__conteiner__s1">
                    <div className="main__conteiner__s1__titulo">
                        <TitleContainer titles={titles} />
                    </div>
                    <div className="carrusel__contenedor">
                        <button
                            aria-label="Anterior"
                            className={`carrusel__anterior ${item.btnLeft}`}
                        >
                            <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        </button>
                        <div className={item.carrusel} id="seccionBariloche">
                            <Card destinos={destinos} />
                        </div>
                        <button
                            aria-label="Siguiente"
                            className={`carrusel__siguiente ${item.btnRight}`}
                        >
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );


};

const MainContainer = ({ btnStyles }) => {
    return (
        <>
            <CardContainer btnStyles={btnStyles} />
        </>
    );
};

const App = () => {

    return (
        <>
            <MainContainer btnStyles={btnStyles} />;
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("containerCarrusel"));


