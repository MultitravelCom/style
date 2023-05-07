window.addEventListener('load', () => {
    //*************************************** MULT-209 *************************** */
    function agregarElemento(referenceSelector) {
        const referenceNode = document.querySelector(referenceSelector);
      
        const newElement = document.createElement('div');
        newElement.classList.add('booking-breakdown__table', 'main__warningPrice');
        newElement.innerHTML = `
          <div class="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
          <p>En caso de producto internacional, los precios siempre incluyen el impuesto país y las percepciones RG4815 Y RG5272.</p>
        `;
      
        referenceNode.insertAdjacentElement('afterend', newElement);
      }

      agregarElemento('.booking-breakdown__item.booking-breakdown__item--total.booking-breakdown__item--total-price.booking-breakdown__item--is-pay-web');
      agregarElemento('.flight-selection__box > :nth-child(3) ~ :nth-child(4)');
      //****************************************************************** */
});
