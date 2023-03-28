const Secciones = (props) => {
    return (
        <>
            <div className="col-md-4 col-xs-12 hover__s3">
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
    return (
        <>
            <h2 className="main__conteiner__titulo">Multitravel.com piensa en todo</h2>
            <div className="main__conteiner">
                <div className="main__conteiner__s3__piensa row-cols-3">
                    <Secciones seccion="Alojamientos" url="https://www.multitravel.com/hotels/"/>
                    <Secciones seccion="Vuelos" url="https://www.multitravel.com/flights/"/>
                    <Secciones seccion="Paquetes" url="https://www.multitravel.com/packages/flighthotel/"/>
                </div>
            </div>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root__s3'));
