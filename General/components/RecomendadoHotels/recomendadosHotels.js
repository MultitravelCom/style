let divTaxAdded = false;

function onResultsListChange(mutationsList, observer) {
  for(let mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      let itemsResults = mutation.target.querySelectorAll('.results-list__item');
      if (itemsResults.length > 0) {
        itemsResults.forEach(function(item) {
          if (!item.querySelector('.bestprice__title')) {
            let priceResults = item.querySelector('.info-card__price');
            let newDivTaxCopy = document.createElement('div');
            newDivTaxCopy.textContent = 'Incluyen el impuesto país y las percepciones';
            newDivTaxCopy.classList.add("DivTaxCopy");
            priceResults.appendChild(newDivTaxCopy);
          }
        });
      }
    }
  }
}

const resultsObserver = new MutationObserver(onResultsListChange);

resultsObserver.observe(document.querySelector('.js-results-list-placeholder'), { childList: true, subtree: true });

onResultsListChange([{ target: document.querySelector('.js-results-list-placeholder'), addedNodes: [document.querySelector('.js-results-list-placeholder')] }], resultsObserver);
