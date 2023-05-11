const observeFlightSelectionBox = () => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes) {
                mutation.addedNodes.forEach((node) => {
                    if (node.classList && node.classList.contains('flight-selection__box')) {
                        renderCopyTaxFlight();
                    }
                });
            }
            if (mutation.removedNodes) {
                mutation.removedNodes.forEach((node) => {
                    if (node.classList && node.classList.contains('flight-selection__box')) {
                        unmountCopyTaxFlight();
                    }
                });
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
};


const CopyTaxFlight = () => {

    React.useEffect(() => {
        observeFlightSelectionBox();

        return () => {
            unmountCopyTaxFlight();
        };
    }, []);

    return (
        <div className="main_container_copyTaxFlight">
            <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
            <p className="main__warningPric__icon__p">En caso de vuelos internacionales, los precios siempre incluyen impuesto país y percepciones.</p>
        </div>
    );
};


const renderCopyTaxFlight = () => {
    const flightBestPrices = document.querySelector('.flight-selection__box');
    const ContainerCopyTaxFlight = document.createElement('div');
    ContainerCopyTaxFlight.classList.add('booking-breakdown__table', 'main__warningPrice');
    flightBestPrices.before(ContainerCopyTaxFlight);

    ReactDOM.render(<CopyTaxFlight />, ContainerCopyTaxFlight);
};

const unmountCopyTaxFlight = () => {
    const container = document.querySelector('.booking-breakdown__table.main__warningPrice');
    if (container) {
        ReactDOM.unmountComponentAtNode(container);
        container.remove();
    }
};