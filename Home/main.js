window.addEventListener('load', () => {

  // *********** MULT-127 **********************
  // Obtener el botón por su clase
  const btnMoreOptions = document.querySelector('.btn-more-options');

  // Cambiar el texto del botón y añadir el icono
  btnMoreOptions.innerHTML = 'Clase y equipaje a despachar <span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>';

  // Si el botón no tiene la clase "collapsed", también cambia el texto del atributo "data-toggle-text"
  if (!btnMoreOptions.classList.contains('collapsed')) {
    btnMoreOptions.setAttribute('data-toggle-text', 'Clase y equipaje a despachar');
  }

  btnMoreOptions.style.display = 'inline-block';


  // Mover div fuera del mas opciones.
  let divToMove = document.getElementsByClassName("checkbox")[0];
  let divDestination = document.getElementsByClassName("singledestination-only")[0];

  divDestination.appendChild(divToMove);
  //    Cambio de copy de Multiple vuelos a multiple destinos.
  document.getElementById("flights-searcher-roundtrip-multi").nextSibling.nodeValue = "Multidestino";
  document.querySelector('.radio').style.display = 'inline-block';

  // seleccionar el div a mover
  const divAMover = document.querySelector('.hidden-lg.col-xs-6.col-sm-2.pull-right');

  // seleccionar el div debajo del cual se moverá el div a mover
  const divObjetivo = document.getElementById('flights-searcher-more-options');

  // mover el div a mover justo debajo del div objetivo
  divObjetivo.parentNode.insertBefore(divAMover, divObjetivo.nextSibling);
  // ***************************************************************************
  // // seleccionar el elemento div por su clase
   let multiFlightDiv = $('.flights-searcher-roundtrip-multi');

  // // seleccionar el label que contiene el texto que deseas cambiar
  let label = multiFlightDiv.find('label[for="flight-searcher-roundtrip-multi"]');

  // // cambiar el texto del label
   label.text('Multidestino');
  document.querySelector('.radio').style.display = 'inline-block';

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
});
