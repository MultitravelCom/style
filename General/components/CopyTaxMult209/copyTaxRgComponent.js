const CopyTaxFlight = () => {
    return (
        <div className="main_container_copyTaxFlight">
            <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
            <p className="main__warningPric__icon__p">En caso de vuelos internacionales, los precios siempre incluyen impuesto país y percepciones.</p>
        </div>
    );
};


function renderCopyTaxFlight() {
    const flightBestPrices = document.querySelector('.flight-bestprices');
    const ContainerCopyTaxFlight = document.createElement('div');
    ContainerCopyTaxFlight.classList.add('booking-breakdown__table');
    flightBestPrices.after(ContainerCopyTaxFlight);

    ReactDOM.render(<CopyTaxFlight />, ContainerCopyTaxFlight);
}

function observarCambiosVirtualDOMFlight() {
    const observerConfig = {
        rootNode: document.documentElement,
        callback: () => {
            requestAnimationFrame(() => {
                const placeholderDiv = document.querySelector('.js-results-list-selection-placeholder');
                if (placeholderDiv) {
                    console.log('Se detectó el elemento js-results-list-selection-placeholder');

                    renderCopyTaxFlight();

                }
            });
        },
        queries: [{ element: '.js-results-list-selection-placeholder' }],
    };

    const observer = new MutationSummary(observerConfig);
}

document.addEventListener('DOMContentLoaded', async function () {
    observarCambiosVirtualDOMFlight();
});