const CopyTaxFlight = () => {
    return (
      <div className="main_container_copyTaxFlight">
        <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
        <p className="main__warningPric__icon__p">
          En caso de vuelos internacionales, los precios siempre incluyen impuesto país y percepciones.
        </p>
      </div>
    );
  };
  
  const App = () => {
    React.useEffect(() => {
      const observer = new MutationObserver((mutationsList) => {
        const breakdownContainer = document.querySelector('.flight-selection__breakdown');
        const copyTaxFlightContainer = breakdownContainer.querySelector('.main_container_copyTaxFlight');
  
        if (breakdownContainer && !copyTaxFlightContainer) {
          const newCopyTaxFlightContainer = document.createElement('div');
          newCopyTaxFlightContainer.className = 'main_container_copyTaxFlight';
          breakdownContainer.appendChild(newCopyTaxFlightContainer);
  
          ReactDOM.render(<CopyTaxFlight />, newCopyTaxFlightContainer);
        }
      });
  
      const targetNode = document.body;
      const config = { childList: true, subtree: true };
  
      observer.observe(targetNode, config);
  
      return () => observer.disconnect();
    }, []);
  
    return null;
  };
  