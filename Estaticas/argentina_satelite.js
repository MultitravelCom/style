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
    {
        id: 10,
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/mendoza%20(1).jpg",
        className: "uno",
    },
];

const App = () => {

    // const [gliderInitialized, setGliderInitialized] = React.useState(false);

    // React.useEffect(() => {
    //     if (!gliderInitialized) {

    //         const items = [
    //             { btnLeft: '.btnLeft', btnRight: '.btnRight', carrusel: '.carrusel__lista' },
    //             { btnLeft: '.btnLeft2', btnRight: '.btnRight2', carrusel: '.carrusel__lista2' },
    //             { btnLeft: '.btnLeft3', btnRight: '.btnRight3', carrusel: '.carrusel__lista3' },
    //         ];

    //         items.forEach(function (item) {
    //             const btnLeft = document.querySelector(item.btnLeft);
    //             const btnRight = document.querySelector(item.btnRight);

    //             btnLeft.addEventListener("click", function (event) {
    //                 event.preventDefault();
    //             });

    //             btnRight.addEventListener("click", function (event) {
    //                 event.preventDefault();
    //             });

    //             new Glider(document.querySelector(item.carrusel), {
    //                 slidesToShow: 1.2,
    //                 slidesToScroll: 0.5,
    //                 draggable: true,
    //                 arrows: {
    //                     prev: item.btnLeft,
    //                     next: item.btnRight,
    //                 },
    //                 responsive: [
    //                     {
    //                         // screens greater than >= 775px
    //                         breakpoint: 450,
    //                         settings: {
    //                             // Set to `auto` and provide item width to adjust to viewport
    //                             slidesToShow: "2.2",
    //                             slidesToScroll: "1",
    //                         },
    //                     },
    //                     {
    //                         // screens greater than >= 1024px
    //                         breakpoint: 1024,
    //                         settings: {
    //                             slidesToShow: 4,
    //                             slidesToScroll: 1,
    //                         },
    //                     },
    //                 ],
    //                 rewind: true,
    //             });
    //         });

    //         setGliderInitialized(true);
    //     }
    // }, [gliderInitialized]);

    return (
        <div className="carrusel__elemento">
                <div className="main__conteiner__s1__destacado__card uno" style={{ height: "100%", width: "100%" }}>
                    <picture>
                        <map name="image-map">
                            <area target="_blank" alt="bariloche" title="bariloche" href="https://wa.link/ncvo1x" coords="35.97%, 64.23%, 77.62%, 78.34%" shape="rect" />
                        </map>
                        <source media="(min-width: 1024px)" srcSet="
        https://multitravelcom.github.io/MT/Evento/PreViaje/Bariloche/barilo-a%20(1).webp
      " />
                        <source media="(min-width: 768px) and (max-width: 1023px)" srcSet="
        https://multitravelcom.github.io/MT/Evento/PreViaje/Bariloche/barilo-a%20(2).webp
      " />
                        <source media="(max-width: 767px)" srcSet="
        https://multitravelcom.github.io/MT/Evento/PreViaje/Bariloche/barilo-a%20(3).webp
      " />
                        <img src="https://multitravelcom.github.io/MT/Evento/PreViaje/Bariloche/barilo-a%20(1).webp" useMap="#image-map" />
                    </picture>
                </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("seccionBariloche"));
