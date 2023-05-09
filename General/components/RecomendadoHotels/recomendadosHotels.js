// ***************************** MULT-209 *********************************************
function addTaxCopyToPriceResults(priceResults) {
    let newDivTaxCopy = document.createElement('div');
    newDivTaxCopy.textContent = 'Incluyen el impuesto país y las percepciones';
    newDivTaxCopy.classList.add("DivTaxCopyStyle");
    priceResults.appendChild(newDivTaxCopy);
  }
  
  function observeResultsList() {
    const resultsListHotels = document.querySelector('.js-results-list-placeholder');
    if (!resultsListHotels) {
      return; // si el selector no existe, no hacemos nada
    }
  
    const itemsResults = resultsListHotels.querySelectorAll('.results-list__item');
    if (itemsResults.length > 0) {
      itemsResults.forEach(function(item) {
        const priceResults = item.querySelector('.info-card__price');
        addTaxCopyToPriceResults(priceResults);
      });
    } else {
      const itemsResultsObserver = new MutationObserver(function(mutationsList, observer) {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const addedNodes = mutation.addedNodes;
            for (const node of addedNodes) {
              if (node.classList && node.classList.contains('results-list__item')) {
                const priceResults = node.querySelector('.info-card__price');
                addTaxCopyToPriceResults(priceResults);
              }
            }
          }
        }
      });
      itemsResultsObserver.observe(resultsListHotels, { childList: true, subtree: true });
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    observeResultsList();
  });
// **************************************************************************