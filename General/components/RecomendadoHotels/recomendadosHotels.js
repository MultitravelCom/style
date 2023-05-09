let divTaxAdded = false;

// Función que se ejecuta cuando se agrega un nuevo elemento con la clase 'results-list__item'
function onResultsListChange(mutationsList, observer) {
  for(let mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      // Verifica si se agregó un elemento con la clase 'results-list__item'
      let itemsResults = mutation.target.querySelectorAll('.results-list__item');
      if (itemsResults.length > 0) {
        itemsResults.forEach(function(item) {
          if (!divTaxAdded) {
            let priceResults = item.querySelectorAll('.info-card__price');
            priceResults.forEach(function(priceResult) {
              let newDivTaxCopy = document.createElement('div');
              newDivTaxCopy.textContent = 'Incluyen el impuesto país y las percepciones';
              newDivTaxCopy.classList.add("DivTaxCopy");
              priceResult.appendChild(newDivTaxCopy);
            });
            divTaxAdded = true;
          }
        });
      }
    }
  }
}

// Crea una instancia de MutationObserver para observar cambios en el DOM
const resultsObserver = new MutationObserver(onResultsListChange);

// Observa cambios en el elemento con la clase 'js-results-list-placeholder' y sus hijos
resultsObserver.observe(document.querySelector('.js-results-list-placeholder'), { childList: true, subtree: true });

// Ejecuta la función por primera vez en caso de que el elemento ya esté presente en el DOM
onResultsListChange([{ target: document.querySelector('.js-results-list-placeholder'), addedNodes: [document.querySelector('.js-results-list-placeholder')] }], resultsObserver);
