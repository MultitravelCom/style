function Button(props) {

    const handleClick = (event) => {
        event.preventDefault();
        window.history.back();
    }

    return (
        <button id={props.id} className={props.style} onClick={handleClick}>{props.text}</button>
    );
}

const BaggagePax = () => {
    return (
        <div className="main__warningPric">
            <span>Cantidad de equipaje</span>
            <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
            <p className="main__warningPric__icon__p">Si deseas volver atrás y ver diferentes vuelos con una diferente cantidad de equipaje, utiliza el botón a continuación y utiliza nuestros filtros para realizar tu búsqueda más precisa.</p>
            <div>
                <Button id={destino.title} text="< VOLVER" />
            </div>
        </div>
    )
}

const flightBestPrices = document.querySelector('.flight-bestprices');
const ContainerCopyTaxFlight = document.createElement('div');
ContainerCopyTaxFlight.classList.add('booking-breakdown__table');
flightBestPrices.appendChild(ContainerCopyTaxFlight);

ReactDOM.render(<BaggagePax />, document.querySelector("booking-paxes__baggage-selection"));