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
            <p>En caso de producto internacional, los precios siempre incluyen impuesto país y percepciones RG4815 Y RG5272.</p>
        `;

        const infoCardPrice = referenceNode.querySelector('.info-card__price');
        const taxIncludedElement = infoCardPrice.querySelector('.bestprice .bestprice__taxincluded');
        if (taxIncludedElement) {
            infoCardPrice.appendChild(newElement);
        }

        if (taxIncludedElement) {
            taxIncludedElement.style.display = 'none';
        }

        if (index === -1 || index >= referenceNode.children.length) {
            referenceNode.appendChild(newElement);
        } else {
            referenceNode.insertBefore(newElement, referenceNode.children[index]);
        }
    }

    agregarElementoBooking('.booking-breakdown__item.booking-breakdown__item--total.booking-breakdown__item--total-price.booking-breakdown__item--is-pay-web');

    agregarElementoBooking('.booking-breakdown__item.booking-breakdown__item--total.booking-breakdown__item--total-price.booking-breakdown__item--is-pay-web:nth-of-type(2)');

});
