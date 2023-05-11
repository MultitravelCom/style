const CopyTaxFlight = () => {
    const [flightSelectionBoxExists, setFlightSelectionBoxExists] = useState(false);
  
    useEffect(() => {
      const flightSelectionBox = document.querySelector('.flight-selection__box');
      if (flightSelectionBox) {
        setFlightSelectionBoxExists(true);
  
        const ContainerCopyTaxFlight = document.createElement('div');
        ContainerCopyTaxFlight.classList.add('booking-breakdown__table', 'main__warningPrice');
        flightSelectionBox.before(ContainerCopyTaxFlight);
  
        ReactDOM.render(
          <CopyTaxFlight />,
          ContainerCopyTaxFlight
        );
      } else {
        setFlightSelectionBoxExists(false);
      }
    }, []);
  
    return (
      <>
        {flightSelectionBoxExists && (
          <div className="main_container_copyTaxFlight">
            <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
            <p>En caso de vuelos internacionales, los precios siempre incluyen impuesto país y percepciones.</p>
          </div>
        )}
      </>
    );
  };
  