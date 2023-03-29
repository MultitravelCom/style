// Componente BennerTop
const BannerTop = () => {
    return (
        <>
            <div className="main_conteiner__s1_medio bannerTop">
                <div className="main_conteiner__s1_medio__paquetes">
                    <a href="https://www.multitravel.com/venta-personalizada/travelsale" target="_blank">
                        <picture>
                            <source media="(min-width: 1024px)" srcset="
                        https://multitravelcom.github.io/MT/TravelSale2023/Banners/BannerProductos%20(1).jpg
                " />
                            <source media="(min-width: 768px) and (max-width: 1023px)" srcset="
                        https://multitravelcom.github.io/MT/TravelSale2023/Banners/BannerProductos%20(2).jpg
                " />
                            <source media="(max-width: 767px)" srcset="
                        https://multitravelcom.github.io/MT/TravelSale2023/Banners/BannerProductos%20(3).jpg
                " />
                            <img src="https://multitravelcom.github.io/MT/TravelSale2023/Banners/BannerProductos%20(1).jpg"
                                alt="Imagen banner promociones" />
                        </picture>
                    </a>
                </div>
            </div>
        </>
    );
};

// Lo mejor de Multitravel.com


const Secciones = ({ seccion, url, className }) => {
    return (
        <>
            <div className={`col-md-4 col-xs-12 hover__s3 ${className}`}>
                <a href={url} target="_blank">
                    <div className="main__conteiner__s3__piensa__parrafo">
                        <p>{seccion}</p>
                    </div>
                </a>
            </div>
        </>
    );
};


const Ofertas = (props) => {
    return (
        <>
            <h2 className="main__conteiner__titulo">Más ofertas en TravelSale</h2>
            <div className="main__conteiner">
                <div className="main__conteiner__s3__piensa row-cols-3">
                    <Secciones seccion={props.seccion1} url={props.url1} className={props.className1} />
                    <Secciones seccion={props.seccion2} url={props.url2} className={props.className2} />
                    <Secciones seccion={props.seccion3} url={props.url3} className={props.className3} />
                </div>
            </div>
        </>
    );
}

const LoMejorDe = () => {
    const path = window.location.pathname;

    if (path === '/flights/') {
        return (
            <>
                <Ofertas
                    seccion1="Alojamientos"
                    url1="https://www.multitravel.com/hotels/"
                    className1="uno__s3"
                    seccion2="Paquetes"
                    url2="https://www.multitravel.com/packages/flighthotel/"
                    className2="dos__s3"
                    seccion3="Asistencias"
                    url3="https://www.multitravel.com/insurances/"
                    className3="tres__s3"
                />
            </>
        );
    } else if (path === '/hotels/') {
        return (
            <>
                <Ofertas
                    seccion1="Paquetes"
                    url1="https://www.multitravel.com/hotels/"
                    className1="uno__s3"
                    seccion2="Vuelos"
                    url2="https://www.multitravel.com/flights/"
                    className2="dos__s3"
                    seccion3="Asistencias"
                    url3="https://www.multitravel.com/insurances/"
                    className3="tres__s3"
                />
            </>
        );
    } else if (path === '/packages/flighthotel/') {
        return (
            <>
                <Ofertas
                    seccion1="Alojamientos"
                    url1="https://www.multitravel.com/hotels/"
                    className1="uno__s3"
                    seccion2="Vuelos"
                    url2="https://www.multitravel.com/flights/"
                    className2="dos__s3"
                    seccion3="Asistencias"
                    url3="https://www.multitravel.com/insurances/"
                    className3="tres__s3"
                />
            </>
        );
    } else {
        return (
            <>
                <Ofertas
                    seccion1="Alojamientos"
                    url1="https://www.multitravel.com/hotels/"
                    className1="uno__s3"
                    seccion2="Vuelos"
                    url2="https://www.multitravel.com/flights/"
                    className2="dos__s3"
                    seccion3="Paquetes"
                    url3="https://www.multitravel.com/packages/flighthotel/"
                    className3="tres__s3"
                />
            </>
        );
    };
}

ReactDOM.render(<LoMejorDe />, document.getElementById('root__s3'));
ReactDOM.render(<BannerTop />, document.getElementById('home-content-5'));

