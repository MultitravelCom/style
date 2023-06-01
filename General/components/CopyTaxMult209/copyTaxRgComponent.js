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
    const containerResultsList = document.querySelector('.results-list__body'); // Reemplaza '.results-list__body' por el selector de tu contenedor padre común

    const observerConfig = {
        rootNode: containerResultsList, // Observar cambios en el contenedor padre
        callback: () => {
            requestAnimationFrame(() => {
                const resultsListItems = containerResultsList.querySelectorAll('.results-list__item'); // Buscar los elementos dentro del contenedor padre
                resultsListItems.forEach((resultsListItem) => {
                    const placeholderDiv = resultsListItem.querySelector('.js-results-list-selection-placeholder'); // Buscar el elemento dentro de cada elemento results-list__item
                    if (placeholderDiv) {
                        console.log('Se detectó el elemento js-results-list-selection-placeholder');
                        renderCopyTaxFlight();
                    }
                });
            });
        },
        queries: [{ element: '.results-list__item' }],
    };

    const observer = new MutationSummary(observerConfig);
}

document.addEventListener('DOMContentLoaded', async function () {
    observarCambiosVirtualDOMFlight();
});
document.addEventListener('DOMContentLoaded', async function () {
    observarCambiosVirtualDOMFlight();
});