window.onload = function () {

    async function observeMutation(elementToObserve, callback) {
        while (!document.querySelector(elementToObserve)) {
            // Esperar hasta que el elemento esté disponible en el DOM
            await new Promise(resolve => requestAnimationFrame(resolve));
        }

        const observer = new MutationObserver(callback);
        observer.observe(document.querySelector(elementToObserve), { childList: true, subtree: true });
        return observer;
    }

    // ***************************** MULT-209 *********************************************
    const itemsResults = document.querySelectorAll('.results-list__item');
    // let resultsListHotels = document.querySelector('.js-results-list-placeholder');
    
    observeMutation(resultsListHotels, function (mutationsList, observer) {
        
        itemsResults.forEach(function (item) {
            const priceResults = item.querySelector('.info-card__price');
            const newDivTaxCopy = document.createElement('div');
            newDivTaxCopy.textContent = 'Incluyen el impuesto país y las percepciones';
            newDivTaxCopy.classList.add("DivTaxCopyStyle");

            priceResults.appendChild(newDivTaxCopy);
        });
    });
}
// **************************************************************************