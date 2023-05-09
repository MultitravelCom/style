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
        const observer = new MutationObserver((mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    for (const node of mutation.addedNodes) {
                        if (node.nodeType === Node.ELEMENT_NODE && node.matches(selector)) {
                            const observer2 = new MutationObserver((mutationsList2, observer2) => {
                                for (const mutation2 of mutationsList2) {
                                    if (mutation2.type === 'childList' && mutation2.target.classList.contains('modal-content')) {
                                        observer2.disconnect(); // se desconecta el observer2 para que no siga observando cambios en el DOM
                                        callback();
                                    }
                                }
                            });
                            observer2.observe(node.closest('.modal'), { childList: true, subtree: true });
                            break; // se detiene el bucle for para evitar ejecutar el callback varias veces
                        }
                    }
                }
            }
        });
        observer.observe(document.documentElement, { childList: true, subtree: true });
    }

    const resultsList = document.querySelector('.results-list');
    if (resultsList) {
      const observer = new MutationObserver(() => {
        const placeholderElements = resultsList.querySelectorAll('.js-results-list-selection-placeholder');
        placeholderElements.forEach((placeholderElement) => {
          agregarElemento(placeholderElement);
        });
      });
  
      observer.observe(resultsList, { childList: true });
    } else {
      onElementAddedToDOM('.results-list', () => {
          const placeholderElements = resultsList.querySelectorAll('.js-results-list-selection-placeholder');
          placeholderElements.forEach((placeholderElement) => {
            agregarElemento(placeholderElement);
          });
      });
    }

    onElementAddedToDOM('.results-list__item--current-flight', () => {
        agregarElemento('.js-results-list-selection-placeholder');
    });

    agregarElemento('.booking-breakdown__item.booking-breakdown__item--total.booking-breakdown__item--total-price.booking-breakdown__item--is-pay-web');

    agregarElemento('.booking-breakdown__item.booking-breakdown__item--total.booking-breakdown__item--total-price.booking-breakdown__item--is-pay-web:nth-of-type(2)');

});

