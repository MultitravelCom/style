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

  const ContainerCopyTaxFlight = document.querySelector(".flight-selection")  
  ReactDOM.render(<CopyTaxFlight />, ContainerCopyTaxFlight);