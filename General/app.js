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

const App = () => {
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
    }else if (path === '/flighthotel/') {
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

    ReactDOM.render(<App />, document.getElementById('root__s3'));
