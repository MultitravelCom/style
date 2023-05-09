function observeMutation(elementToObserve, callback) {
    const observer = new MutationObserver(callback);
    observer.observe(elementToObserve, { childList: true, subtree: true });
    return observer;
}

// ***************************** MULT-209 *********************************************
let resultsListHotels = document.querySelector('.js-results-list-placeholder');
let itemsResults = resultsListHotels.querySelectorAll('.results-list__item');

observeMutation(resultsListHotels, function (mutationsList, observer) {


    itemsResults.forEach(function (item) {
        let priceResults = item.querySelector('.info-card__price');
        let newDivTaxCopy = document.createElement('div');
        newDivTaxCopy.textContent = 'Incluyen el impuesto país y las percepciones';
        newDivTaxCopy.classList.add("DivTaxCopyStyle");

        priceResults.appendChild(newDivTaxCopy);
    });
});

// **************************************************************************