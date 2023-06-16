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
});

function reemplazarTextos() {
  let targetNode = document.body;

  let mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      let addedNodes = Array.from(mutation.addedNodes);
      let matches = addedNodes.filter(function(node) {
        return node.matches && node.matches('.select2-dropdown.select2-dropdown--below');
      });

      if (matches.length > 0) {
        console.log('Se encontró el menú desplegable');

        let desplegable = matches[0];
        let opciones = desplegable.querySelectorAll('.select2-results__option');

        opciones.forEach(function(opcion) {
          let texto = opcion.innerText;
          console.log('Texto encontrado:', texto);

          if (texto === 'Con equipaje incluido') {
            opcion.innerText = 'Con equipaje a despechar';
          } else if (texto === 'Sin equipaje incluido') {
            opcion.innerText = 'Sin equipaje a despechar';
          }
        });
      }
    });
  });

  let config = { childList: true, subtree: true };

  document.addEventListener('click', function(event) {
    if (event.target.matches('.select2.select2-container.select2-container--default.select2-container--below.select2-container--focus')) {
      let isOpen = event.target.classList.contains('select2-container--open');

      if (isOpen) {
        console.log('Se hizo clic en el selector');
        mutationObserver.observe(targetNode, config);
      }
    }
  });
}
reemplazarTextos();
