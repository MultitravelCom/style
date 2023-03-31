const destinos = [
    {
        id: 1,
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/mendoza%20(1).jpg",
    },
    {
        id: 1,
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/barilo%20(1).jpg",
    },
    {
        id: 1,
        destino: "El calafate",
        img: "https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/calafate%20(1).jpg",
    },
];

const Card = ({ linkWa, destino, img }) => {
    return (
        <>
            <div className="carrusel__elemento">
                <div className="main__conteiner__s1__destacado__card" style="height: 100%; width: 100%;">
                    <a href={linkWa} target="_blank">
                        <picture>
                            <source media="(min-width: 1024px)" srcSet={`${img}`} />
                            <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={`${img}`} />
                            <source media="(max-width: 767px)" srcSet={`${img}`} />
                            <img src={`${img}`} alt={`Imagen banner ${destino}`} />
                        </picture>
                    </a>
                </div>
            </div>
        </>
    )
}

const DestinosList = () => {
    return (
        <>
            {destinos.map((destino) => (
                <Card
                    key={destino.id}
                    linkWa={`https://wa.link/${destino.destino}`}
                    destino={destino.destino}
                    img={destino.img}
                />
            ))}
        </>
    );
};

ReactDOM.createRoot(document.getElementById('carrusel__lista_uno')).render(<DestinosList />);