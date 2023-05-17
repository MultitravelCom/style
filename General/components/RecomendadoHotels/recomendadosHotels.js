let divTaxAdded = false;

function onResultsListChange(mutationsList, observer) {
  for(let mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      let itemsResults = mutation.target.querySelectorAll('.results-list__item');
      if (itemsResults.length > 0) {
        itemsResults.forEach(function(item) {
          if (!item.querySelector('.divTaxCopyStyle')) {
            let priceResults = item.querySelector('.info-card__price');
            const taxIncludedElement = priceResults.querySelector('.bestprice__taxincluded');
            if (taxIncludedElement) {
              let newDivTaxCopy = document.createElement('div');
              newDivTaxCopy.textContent = 'Incluye impuesto pais y percepciones';
              newDivTaxCopy.classList.add("divTaxCopyStyle");
              priceResults.appendChild(newDivTaxCopy);
              taxIncludedElement.style.display = 'none';
            }
          }
        });
      }
    }
  }
}

const resultsObserver = new MutationObserver(onResultsListChange);

resultsObserver.observe(document.querySelector('.js-results-list-placeholder'), { childList: true, subtree: true });

onResultsListChange([{ target: document.querySelector('.js-results-list-placeholder'), addedNodes: [document.querySelector('.js-results-list-placeholder')] }], resultsObserver);
