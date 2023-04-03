document.addEventListener("DOMContentLoaded", function (event) {

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
            </>
        )
    }

    const CardCarrusel = () => {
        return (
            <div className="carrusel__elemento">
                {destinos.map((destino) => (
                    <Card
                        key={destino.id}
                        linkWa={`https://wa.link/${destino.destino}`}
                        destino={destino.destino}
                        img={destino.img}
                        className={destino.className}
                    />
                ))}
            </div>
        )
    };

    const DestinosList = () => {
        const [gliderInitialized, setGliderInitialized] = React.useState(false);

        React.useEffect(() => {
            if (!gliderInitialized) {
                const items = [
                    {
                        btnLeft: ".btnLeft",
                        btnRight: ".btnRight",
                        carrusel: ".carrusel__lista",
                    },
                ];

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

                setGliderInitialized(true);
            }
        }, [gliderInitialized]);

        return (
            <>
                <div className="main__conteiner__s1">
                    <div className="main__conteiner__s1__titulo">
                        <h3>
                            <strong>Descuentos Imbatibles por Argentina</strong>
                        </h3>
                    </div>
                </div>
                <div className="carrusel__contenedor">
                    <button aria-label="Anterior" className="carrusel__anterior btnLeft">
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <div className="carrusel__lista">
                        <CardCarrusel />
                    </div>
                    <button aria-label="Siguiente" className="carrusel__siguiente btnRight">
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>
            </>
        );
    };

    ReactDOM.render(<DestinosList />, document.getElementById("carrusel__lista_uno"));
});