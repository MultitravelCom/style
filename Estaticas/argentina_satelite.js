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

const DestinosList = () => {

    return (
        <>
            <div className="main__conteiner__s1">
                <div className="main__conteiner__s1__titulo">
                    <h3><strong>Descuentos Imbatibles por Argentina</strong></h3>
                </div>
            </div>
            <div className="carrusel__contenedor">
                <button aria-label="Anterior" className="carrusel__anterior btnLeft">
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </button>
                <div className="carrusel__lista">
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
                </div>
                <button aria-label="Siguiente" className="carrusel__siguiente btnRight">
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>
        </>
    );
};

ReactDOM.createRoot(document.getElementById('carrusel__lista_uno')).render(<DestinosList />);
