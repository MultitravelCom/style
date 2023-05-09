// ***************************** MULT-209 *********************************************
function addTaxCopyToPriceResults(priceResults) {
    let newDivTaxCopy = document.createElement('div');
    newDivTaxCopy.textContent = 'Incluyen el impuesto país y las percepciones';
    newDivTaxCopy.classList.add("DivTaxCopyStyle");
    priceResults.appendChild(newDivTaxCopy);
  }
  
  let itemsResults = document.querySelectorAll('.results-list__item');
  
  itemsResults.forEach(function(item) {
    let priceResults = item.querySelector('.info-card__price');
    addTaxCopyToPriceResults(priceResults);
  });
// **************************************************************************