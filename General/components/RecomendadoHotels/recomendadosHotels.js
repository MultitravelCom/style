// ***************************** MULT-209 *********************************************
document.addEventListener('DOMContentLoaded', function () {
    function addTaxCopyToResultsList() {
        let resultsListHotels = document.querySelector('.js-results-list-placeholder');

        if (resultsListHotels) {
            let itemsResults = resultsListHotels.querySelectorAll('.results-list__item');

            itemsResults.forEach(function (item) {
                let priceResults = item.querySelector('.info-card__price');
                let newDivTaxCopy = document.createElement('div');
                newDivTaxCopy.textContent = 'Incluyen el impuesto país y las percepciones';
                newDivTaxCopy.classList.add("DivTaxCopyStyle");

                priceResults.appendChild(newDivTaxCopy);
            });
        }
    }

    let resultsListObserver = new MutationObserver(function (mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                mutation.addedNodes.forEach(function (node) {
                    if (node.classList && node.classList.contains('js-results-list-placeholder')) {
                        addTaxCopyToResultsList();
                    }
                });
            }
        }
    });

    resultsListObserver.observe(document.body, { childList: true, subtree: true });

});
// **************************************************************************