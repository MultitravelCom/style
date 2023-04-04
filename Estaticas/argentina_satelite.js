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
    {
        id: 4,
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/mendoza%20(1).jpg",
        className: "uno",
    },
    {
        id: 5,
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/barilo-1.jpg",
        className: "dos",
    },
    {
        id: 6,
        destino: "El calafate",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/calafate%20(1).jpg",
        className: "tres",
    },
    {
        id: 7,
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/mendoza%20(1).jpg",
        className: "uno",
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
    },
];

const Card = ({ destinos }) => {
    return (
        <>
            {destinos.map((destino) => (
                <div className="carrusel__elemento">
                    <div className={`main__conteiner__s1__destacado__card ${destino.className}`}>
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
        </>
    );
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
                {
                    btnLeft: ".btnLeft2",
                    btnRight: ".btnRight2",
                    carrusel: ".carrusel__lista2",
                },
                {
                    btnLeft: ".btnLeft3",
                    btnRight: ".btnRight3",
                    carrusel: ".carrusel__lista3",
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
            <div className="carrusel__lista">
                <Card destinos={destinos} />
            </div>
        </>
    );
};

ReactDOM.render(<DestinosList />, document.getElementById("container_carrusel"));
