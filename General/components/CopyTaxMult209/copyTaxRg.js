function agregarElemento(referenceSelector, index = -1) {
    console.log('agregarElemento llamado');
    const referenceNode = document.querySelector(referenceSelector);

    if (!referenceNode) {
        return;
    }

    const newElement = document.createElement('div');
    newElement.classList.add('booking-breakdown__table', 'main__warningPrice');
    newElement.innerHTML = `
    <div class="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
    <p>En caso de producto internacional, los precios siempre incluyen el impuesto país y las percepciones RG4815 Y RG5272.</p>
  `;

    if (index === -1 || index >= referenceNode.children.length) {
        referenceNode.appendChild(newElement);
    } else {
        referenceNode.insertBefore(newElement, referenceNode.children[index]);
    }
}

function revisarElemento() {
    const currentItem = document.querySelector('.results-list__item--current-flight');
    if (currentItem) {
        const flightSelectionBox = currentItem.closest('.js-results-list-selection-placeholder');
        if (flightSelectionBox) {
            agregarElemento(flightSelectionBox);
            clearInterval(intervalId); // detiene la revisión periódica una vez que se ha encontrado el elemento
        }
    }
}

let intervalId = setInterval(revisarElemento, 500);


window.addEventListener('load', () => {

    function agregarElementoBooking(referenceSelector, index = -1) {
        const referenceNode = document.querySelector(referenceSelector);
        if (!referenceNode) {
            return; // si no se encuentra el elemento de referencia, se sale de la función
        }

        const newElement = document.createElement('div');
        newElement.classList.add('booking-breakdown__table', 'main__warningPrice');
        newElement.innerHTML = `
        <div class="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
        <p>En caso de producto internacional, los precios siempre incluyen el impuesto país y las percepciones RG4815 Y RG5272.</p>
      `;

        if (index === -1 || index >= referenceNode.children.length) {
            referenceNode.appendChild(newElement);
        } else {
            referenceNode.insertBefore(newElement, referenceNode.children[index]);
        }
    }

    agregarElementoBooking('.booking-breakdown__item.booking-breakdown__item--total.booking-breakdown__item--total-price.booking-breakdown__item--is-pay-web');

    agregarElementoBooking('.booking-breakdown__item.booking-breakdown__item--total.booking-breakdown__item--total-price.booking-breakdown__item--is-pay-web:nth-of-type(2)');

});

