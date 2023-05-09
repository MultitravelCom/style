window.addEventListener('load', () => {

    function agregarElemento(referenceSelector, index = -1) {
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
  
    function onElementAddedToDOM(selector, callback) {
      const observer = new MutationObserver(mutationsList => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            for (const node of mutation.addedNodes) {
              if (node.nodeType === Node.ELEMENT_NODE && node.matches(selector)) {
                if (!node.querySelector('.main__warningPrice')) {
                  agregarElemento(selector);
                  console.log('Element added to DOM:', node);
                }
                callback();
              }
            }
          }
        }
      });
  
      observer.observe(document.documentElement, { childList: true, subtree: true });
    }

  
    // Invoca la función addWarningElements en la carga inicial de la página.
    addWarningElements('.booking-breakdown__item.booking-breakdown__item--total.booking-breakdown__item--total-price.booking-breakdown__item--is-pay-web:nth-of-type(2)');
    addWarningElements('.js-results-list-selection-placeholder');
  
    // Observa si se agrega algún nodo que coincida con el selector '.js-results-list-selection-placeholder', y si es así, invoca la función addWarningElements.
    onElementAddedToDOM('.js-results-list-selection-placeholder', () => {
      addWarningElements('.js-results-list-selection-placeholder');
    });
  
  });
  