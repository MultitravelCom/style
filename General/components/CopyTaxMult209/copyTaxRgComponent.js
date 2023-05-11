const CopyTaxFlight = () => {
    return (
        <div className="main_container_copyTaxFlight">
            <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
            <p>En caso de vuelos internacionales, los precios siempre incluyen impuesto país y percepciones.</p>
        </div>
    );
};


const flightBestPrices = document.querySelector('.flight-selection__breakdown');
const ContainerCopyTaxFlight = document.createElement('div');
ContainerCopyTaxFlight.classList.add('booking-breakdown__table', 'main__warningPrice');
flightBestPrices.after(ContainerCopyTaxFlight);

ReactDOM.render(<CopyTaxFlight />, ContainerCopyTaxFlight);