window.addEventListener('load', () => {
  // MULT-127
  const divAMover = document.querySelector('.hidden-lg.col-xs-6.col-sm-2.pull-right');
  const divObjetivo = document.getElementById('flight-searcher-more-options');
  divObjetivo.parentNode.insertBefore(divAMover, divObjetivo.nextSibling);

  const divToMove = document.getElementsByClassName("checkbox")[0];
  const divDestination = document.getElementsByClassName("singledestination-only")[0];
  divDestination.appendChild(divToMove);

  const multiFlightDiv = $('.flights-searcher-roundtrip-multi');
  const label = multiFlightDiv.find('label[for="flight-searcher-roundtrip-multi"]');
  label.text('Multidestino');
  document.querySelector('.radio').style.display = 'inline-block';

  // MULT-114
  const calendarContainers = document.querySelectorAll('.js-calendar-container');
  calendarContainers.forEach((container) => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const filterButton = document.querySelector('.results-list__filter-toggle-wrapper');
        filterButton.style.display = mutation.target.classList.contains('closed') ? 'block' : 'none';
      });
    });
    observer.observe(container, { attributes: true });
  });

  // Cambiar texto al botón Filtrar
  const textBtn = document.querySelector('.btn-tertiary');
  textBtn.textContent = 'Filtrar';

  // Cambiar texto y estilo del botón Más opciones
  const btnMoreOptions = document.querySelector('.btn-more-options');
  btnMoreOptions.innerHTML = 'Clase y equipaje a despachar <span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>';
  btnMoreOptions.setAttribute('data-toggle-text', 'Clase y equipaje a despachar');
  btnMoreOptions.style.display = 'inline-block';
  // *********************************************************************************************
  function detectarSelector() {
    // Observador para detectar cambios en el DOM
    const observadorSelector = new MutationObserver(function(mutationsList) {
      // Recorrer las mutaciones
      for (let mutation of mutationsList) {
        // Verificar si se agregó el selector deseado al DOM
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          const selectorEncontrado = Array.from(mutation.addedNodes).find(node => {
            return node.matches && node.matches('.select2.select2-container.select2-container--default.select2-container--below.select2-container--focus');
          });
          if (selectorEncontrado) {
            console.log('El selector está presente en el DOM.');
            // Aquí puedes agregar cualquier otra lógica que necesites cuando se detecte el selector
          }
        }
      }
    });
  
    // Configurar opciones para el observador
    const opcionesObservador = {
      childList: true, // Observar cambios en los hijos del nodo objetivo
      subtree: true, // Observar cambios en todos los niveles del DOM por debajo del nodo objetivo
    };
  
    // Elemento del DOM donde se espera que aparezca el selector deseado
    const nodoObjetivo = document.body; // Puedes cambiar esto por el elemento específico en el que esperas el selector
  
    // Iniciar la observación del nodo objetivo
    observadorSelector.observe(nodoObjetivo, opcionesObservador);
  }
  
  // Llamar a la función para iniciar la detección del selector
  detectarSelector();
});

