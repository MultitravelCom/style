const CopyTaxFlight = () => {
    const shouldShowComponent = document.querySelector('.flight-selection__box') !== null;
  
    return shouldShowComponent ? (
      <div className="main_container_copyTaxFlight">
        <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
        <p className="main__warningPric__icon__p">En caso de vuelos internacionales, los precios siempre incluyen impuesto país y percepciones.</p>
      </div>
    ) : null;
  };
  
  // Inserta el componente CopyTaxFlight en el lugar deseado
  const flightBestPrices = document.querySelector('.flight-bestprices');
  const ContainerCopyTaxFlight = document.createElement('div');
  ContainerCopyTaxFlight.classList.add('booking-breakdown__table');
  flightBestPrices.after(ContainerCopyTaxFlight);
  
  ReactDOM.render(<CopyTaxFlight />, ContainerCopyTaxFlight);