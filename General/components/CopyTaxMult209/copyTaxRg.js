window.addEventListener('load', () => {

    function agregarElemento(referenceSelector, index = -1) {
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

    function onElementAddedToDOM(selector, callback) {
        const observer = new MutationObserver(mutationsList => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    for (const node of mutation.addedNodes) {
                        if (node.nodeType === Node.ELEMENT_NODE && node.matches(selector)) {
                            callback();
                            console.log('Element added to DOM:', node);
                        }
                    }
                }
            }
        });

        observer.observe(document.documentElement, { childList: true, subtree: true });
    }

    onElementAddedToDOM('.js-results-list-selection-placeholder', () => {
        agregarElemento('.js-results-list-selection-placeholder > .flight-selection > .flight-selection__box:nth-child(3)');
      });

    agregarElemento('.booking-breakdown__item.booking-breakdown__item--total.booking-breakdown__item--total-price.booking-breakdown__item--is-pay-web');
    
    agregarElemento('.booking-breakdown__item.booking-breakdown__item--total.booking-breakdown__item--total-price.booking-breakdown__item--is-pay-web:nth-of-type(2)');
    //****************************************************************** */
});
