// ***************************** MULT-209 *********************************************

async function addTaxCopyToPriceResults() {
    let resultsListHotels = null;
  
    // Espera a que se cargue el selector donde debe ir el nuevo div
    while (!resultsListHotels) {
      await new Promise(resolve => setTimeout(resolve, 100));
      resultsListHotels = document.querySelector('.js-results-list-placeholder');
    }
  
    // Agrega el nuevo div a cada elemento con la clase results-list__item
    const itemsResults = resultsListHotels.querySelectorAll('.results-list__item');
    itemsResults.forEach(item => {
      const priceResults = item.querySelector('.info-card__price');
      const newDivTaxCopy = document.createElement('div');
      newDivTaxCopy.textContent = 'Incluyen el impuesto país y las percepciones';
      newDivTaxCopy.classList.add("DivTaxCopyStyle");
      priceResults.appendChild(newDivTaxCopy);
    });
  }
  
  // Llama a la función cada vez que se agregue un nuevo elemento con la clase results-list__item
  function observeResultsList() {
    const resultsListHotels = document.querySelector('.js-results-list-placeholder');
    if (!resultsListHotels) {
      return; // si el selector no existe, no hacemos nada
    }
  
    const itemsResults = resultsListHotels.querySelectorAll('.results-list__item');
    itemsResults.forEach(item => {
      const priceResults = item.querySelector('.info-card__price');
      const newDivTaxCopy = document.createElement('div');
      newDivTaxCopy.textContent = 'Incluyen el impuesto país y las percepciones';
      newDivTaxCopy.classList.add("DivTaxCopyStyle");
      priceResults.appendChild(newDivTaxCopy);
    });
  
    const itemsResultsObserver = new MutationObserver((mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const addedNodes = mutation.addedNodes;
          for (const node of addedNodes) {
            if (node.classList && node.classList.contains('results-list__item')) {
              const priceResults = node.querySelector('.info-card__price');
              const newDivTaxCopy = document.createElement('div');
              newDivTaxCopy.textContent = 'Incluyen el impuesto país y las percepciones';
              newDivTaxCopy.classList.add("DivTaxCopyStyle");
              priceResults.appendChild(newDivTaxCopy);
            }
          }
        }
      }
    });
    itemsResultsObserver.observe(resultsListHotels, { childList: true, subtree: true });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    addTaxCopyToPriceResults();
    observeResultsList();
  });
// **************************************************************************