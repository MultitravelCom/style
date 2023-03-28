import React from "react";
import { Seccions } from './componentSeccion';

const App = () => {
    return (
        <>
            <h2 className="main__conteiner__titulo">Multitravel.com piensa en todo</h2>
            <div className="main__conteiner">
                <div className="main__conteiner__s3__piensa row-cols-3">
                    <Seccions />
                    <div className="col-md-4 col-xs-12 dos__s3 hover__s3">
                        <a href="https://www.multitravel.com/flights/" target="_blank">
                            <div className="main__conteiner__s3__piensa__parrafo">
                                <p>Vuelos</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4 col-xs-12 tres__s3 hover__s3">
                        <a href="https://www.multitravel.com/packages/" target="_blank">
                            <div className="main__conteiner__s3__piensa__parrafo">
                                <p>Paquetes</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root__s3'));
