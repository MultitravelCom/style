const CopyTaxFlight = () => {
  const [shouldShowComponent, setShouldShowComponent] = React.useState(false);

  React.useEffect(() => {
    const handleDOMChange = () => {
      const flightSelectionBox = document.querySelector('.flight-selection__box');
      setShouldShowComponent(flightSelectionBox !== null);
    };

    // Observar cambios en el DOM usando MutationObserver
    const observer = new MutationObserver(handleDOMChange);
    const targetNode = document.documentElement;
    const config = { childList: true, subtree: true };

    observer.observe(targetNode, config);

    // Detener la observación cuando el componente se desmonta
    return () => observer.disconnect();
  }, []);

  return shouldShowComponent ? (
    <div className="main_container_copyTaxFlight">
      <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
      <p className="main__warningPric__icon__p">
        En caso de vuelos internacionales, los precios siempre incluyen impuesto país y percepciones.
      </p>
    </div>
  ) : null;
};


const App = () => {
    return (
      <div>
        <CopyTaxFlight />
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementsByClassName('flight-selection__box'));