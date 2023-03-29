const Secciones = (props) => {
    const { className } = props;
    return (
        <>
            <div className={`col-md-4 col-xs-12 hover__s3 ${className}`}>
                <a href={props.url} target="_blank">
                    <div className="main__conteiner__s3__piensa__parrafo">
                        <p>{props.seccion}</p>
                    </div>
                </a>
            </div>
        </>
    );
};

// Componente BennerTop

const BannerTop = () => {
  return(
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

const LoMejorDe = () => {
    const path = window.location.pathname;

    if (path === '/flights/') {
        return (
            <>
                <h2 className="main__conteiner__titulo">Multitravel.com piensa en todo</h2>
                <div className="main__conteiner">
                    <div className="main__conteiner__s3__piensa row-cols-3">
                        <Secciones seccion="Alojamientos" url="https://www.multitravel.com/hotels/" className="uno__s3" />
                        <Secciones seccion="Paquetes" url="https://www.multitravel.com/packages/flighthotel/" className="dos__s3" />
                        <Secciones seccion="Asistencias" url="https://www.multitravel.com/insurances/" className="tres__s3" />
                    </div>
                </div>
            </>
        );
    } else if (path === '/hotels/') {
        return (
            <>
                <h2 className="main__conteiner__titulo">Multitravel.com piensa en todo</h2>
                <div className="main__conteiner">
                    <div className="main__conteiner__s3__piensa row-cols-3">
                        <Secciones seccion="Paquetes" url="https://www.multitravel.com/hotels/" className="uno__s3" />
                        <Secciones seccion="Vuelos" url="https://www.multitravel.com/flights/" className="dos__s3" />
                        <Secciones seccion="Asistencias" url="https://www.multitravel.com/insurances/" className="tres__s3" />
                    </div>
                </div>
            </>
        );
    }else if (path === '/packages/flighthotel/') {
        return (
            <>
                <h2 className="main__conteiner__titulo">Multitravel.com piensa en todo</h2>
                <div className="main__conteiner">
                    <div className="main__conteiner__s3__piensa row-cols-3">
                    <Secciones seccion="Alojamientos" url="https://www.multitravel.com/hotels/" className="uno__s3" />
                        <Secciones seccion="Vuelos" url="https://www.multitravel.com/flights/" className="dos__s3" />
                        <Secciones seccion="Asistencias" url="https://www.multitravel.com/insurances/" className="tres__s3" />
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <h2 className="main__conteiner__titulo">Multitravel.com piensa en todo</h2>
                <div className="main__conteiner">
                    <div className="main__conteiner__s3__piensa row-cols-3">
                        <Secciones seccion="Alojamientos" url="https://www.multitravel.com/hotels/" className="uno__s3" />
                        <Secciones seccion="Vuelos" url="https://www.multitravel.com/flights/" className="dos__s3" />
                        <Secciones seccion="Paquetes" url="https://www.multitravel.com/packages/flighthotel/" className="tres__s3" />
                    </div>
                </div>
            </>
        );
    };
}

ReactDOM.render(<LoMejorDe />, document.getElementById('root__s3'));
ReactDOM.render(<BannerTop />, document.getElementById('home-content-5'));
