// ***************************** MULT-209 *********************************************
function observeResultsList() {
    const resultsListHotels = document.querySelector('.results-list__item');
    if (!resultsListHotels) {
      console.log('No se encontró el selector ".results-list__item"');
      return;
    }
  
    const itemsResults = resultsListHotels.querySelectorAll('.results-list__item');
    console.log(`Se encontraron ${itemsResults.length} elementos con clase "results-list__item"`);
  
    if (itemsResults.length > 0) {
      itemsResults.forEach(function(item) {
        const priceResults = item.querySelector('.info-card__price');
        console.log('Agregando copia de impuestos a', priceResults);
        addTaxCopyToPriceResults(priceResults);
      });
    } else {
      const itemsResultsObserver = new MutationObserver(function(mutationsList, observer) {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const addedNodes = mutation.addedNodes;
            console.log(`Se detectaron ${addedNodes.length} nodos añadidos`);
            for (const node of addedNodes) {
              if (node.classList && node.classList.contains('results-list__item')) {
                console.log('Se agregó un elemento con clase "results-list__item"');
                const priceResults = node.querySelector('.info-card__price');
                console.log('Agregando copia de impuestos a', priceResults);
                addTaxCopyToPriceResults(priceResults);
              }
            }
          }
        }
      });
      itemsResultsObserver.observe(resultsListHotels, { childList: true, subtree: true });
      console.log('Observando cambios en "results-list__item"');
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded!');
    observeResultsList();
  });
// **************************************************************************