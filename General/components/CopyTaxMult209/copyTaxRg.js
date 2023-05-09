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
                  setTimeout(() => {
                    callback();
                  }, 1000); // espera 1 segundo antes de llamar al callback
                  observer.disconnect(); // desconecta el observer para que no siga observando cambios en el DOM
                  break; // detiene el bucle for para evitar ejecutar el callback varias veces
                }
              }
            }
          }
        });
      
        observer.observe(document.documentElement, { childList: true, subtree: true });
        
        // Agregar otro observer para detectar cuándo se agrega el elemento .js-results-list-selection-placeholder al DOM
        const placeholderObserver = new MutationObserver(mutationsList => {
          for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
              for (const node of mutation.addedNodes) {
                if (node.nodeType === Node.ELEMENT_NODE && node.matches('.js-results-list-selection-placeholder')) {
                  // Llamar a la función agregarElemento() cuando se agrega el elemento .js-results-list-selection-placeholder al DOM
                  agregarElemento('.js-results-list-selection-placeholder');
                  // Desconectar el observer para que no siga observando cambios en el DOM
                  placeholderObserver.disconnect();
                  break; // Detener el bucle for para evitar ejecutar el callback varias veces
                }
              }
            }
          }
        });
      
        // Observar el elemento body y todos sus descendientes
        placeholderObserver.observe(document.body, { childList: true, subtree: true });
      }
      
    onElementAddedToDOM('.results-list__item--current-flight', () => {
        agregarElemento('.js-results-list-selection-placeholder');
      });

    agregarElemento('.booking-breakdown__item.booking-breakdown__item--total.booking-breakdown__item--total-price.booking-breakdown__item--is-pay-web');
    
    agregarElemento('.booking-breakdown__item.booking-breakdown__item--total.booking-breakdown__item--total-price.booking-breakdown__item--is-pay-web:nth-of-type(2)');
    //****************************************************************** */
});
