window.addEventListener('load', () => {

    function agregarElementoBooking(referenceSelector, index = -1, tries = 10) {
        const referenceNode = document.querySelector(referenceSelector);
        if (!referenceNode && tries > 0) {
            // Si el nodo de referencia no se encuentra y todavía hay intentos disponibles, se reintentará después de 100ms
            setTimeout(() => agregarElementoBooking(referenceSelector, index, tries - 1), 200);
            return;
        }

        if (!referenceNode) {
            return; // Si no se encuentra el nodo de referencia después de varios intentos, se sale de la función
        }

        const newElement = document.createElement('div');
        newElement.classList.add('booking-breakdown__table', 'main__warningPrice');
        newElement.innerHTML = `
        <div class="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
        <p>En caso de producto internacional, los precios siempre incluyen impuesto país y percepciones RG4815 Y RG5272.</p>
      `;

        if (index === -1 || index >= referenceNode.children.length) {
            referenceNode.appendChild(newElement);
        } else {
            referenceNode.insertBefore(newElement, referenceNode.children[index]);
        }

        if (newElement.innerHTML.trim() === "") {
            // Si el elemento aún no tiene contenido visible, se reintentará después de un ciclo de animación
            requestAnimationFrame(() => agregarElementoBooking(referenceSelector, index, tries - 1));
        }
    }

    agregarElementoBooking('.booking-breakdown__item.booking-breakdown__item--total.booking-breakdown__item--total-price.booking-breakdown__item--is-pay-web');
    agregarElementoBooking('.booking-breakdown__item.booking-breakdown__item--total.booking-breakdown__item--total-price.booking-breakdown__item--is-pay-web:nth-of-type(2)');
});
