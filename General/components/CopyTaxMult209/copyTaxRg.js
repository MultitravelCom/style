function agregarElemento(referenceSelector, index = -1) {

    console.log('agregarElemento llamado');
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

function observarCambiosEnDOM() {
    const targetNode = document.querySelector('.js-results-list-placeholder');

    if (!targetNode) {
        return;
    }

    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const addedNodes = Array.from(mutation.addedNodes);
                addedNodes.forEach((node) => {
                    if (node.nodeType !== Node.ELEMENT_NODE) {
                        return;
                    }
                    const currentItem = node.querySelector('.results-list__item--current-flight');
                    if (currentItem) {
                        const flightSelectionBox = currentItem.closest('.flight-selection__box');
                        agregarElemento('.flight-selection__box');
                    }
                });
            }
        }
    });

    observer.observe(targetNode, { childList: true, subtree: true });
}

observarCambiosEnDOM();



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

