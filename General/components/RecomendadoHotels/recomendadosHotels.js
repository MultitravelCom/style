// ***************************** MULT-209 *********************************************

let resultsListHotels = document.querySelector('.js-results-list-placeholder');
let itemsResults = resultsListHotels.querySelectorAll('.results-list__item');

itemsResults.forEach(function(item) {
  let priceResults = item.querySelector('.info-card__price');
  let newDivTaxCopy = document.createElement('div');
  newDivTaxCopy.textContent = 'Incluyen el impuesto país y las percepciones';
  newDivTaxCopy.classList.add("bestprice__title");

  priceResults.appendChild(newDivTaxCopy);
});
// **************************************************************************