// window.addEventListener('load', () => {
//   // // ********************************* MULT-127 *********************************
//   // seleccionar el div a mover
//   const divAMover = document.querySelector('.hidden-lg.col-xs-6.col-sm-2.pull-right');

//   // seleccionar el div debajo del cual se moverá el div a mover
//   const divObjetivo = document.getElementById('flight-searcher-more-options');

//   // mover el div a mover justo debajo del div objetivo
//   divObjetivo.parentNode.insertBefore(divAMover, divObjetivo.nextSibling);
//   // // ***************************************************************************
//   // Mover div fuera del mas opciones.
//   let divToMove = document.getElementsByClassName("checkbox")[0];
//   let divDestination = document.getElementsByClassName("singledestination-only")[0];

//   divDestination.appendChild(divToMove);
//   //    Cambio de copy de Multiple vuelos a multiple destinos.
//   document.getElementById("flight-searcher-roundtrip-multi").nextSibling.nodeValue = "Multidestino";
//   document.querySelector('.radio').style.display = 'inline-block';

//   // Cambiar texto al btn filtrar y agregar un icons.

//   const textBtn = document.querySelector('.btn-tertiary');
//   textBtn.textContent = 'Filtrar';

//   // ********************************* MULT-114 *********************************
//   const calendarContainers = document.querySelectorAll('.js-calendar-container');

//   calendarContainers.forEach((container) => {
//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (mutation.target.classList.contains('closed')) {
//           // mostrar el botón
//           const filterButton = document.querySelector('.results-list__filter-toggle-wrapper');
//           filterButton.style.display = 'block';
//         } else {
//           // ocultar el botón
//           const filterButton = document.querySelector('.results-list__filter-toggle-wrapper');
//           filterButton.style.display = 'none';
//         }
//       });
//     });

//     observer.observe(container, { attributes: true });
//   });
// });


// window.addEventListener('load', () => {

//   // *********** MULT-127 **********************
//   // Obtener el botón por su clase
//   const btnMoreOptions = document.querySelector('.btn-more-options');

//   // Cambiar el texto del botón y añadir el icono
//   btnMoreOptions.innerHTML = 'Clase y equipaje <span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>';

//   // Si el botón no tiene la clase "collapsed", también cambia el texto del atributo "data-toggle-text"
//   if (!btnMoreOptions.classList.contains('collapsed')) {
//     btnMoreOptions.setAttribute('data-toggle-text', 'Clase y equipaje');
//   }

//   btnMoreOptions.style.display = 'inline-block';


//   // Mover div fuera del mas opciones.
//   let divToMove = document.getElementsByClassName("checkbox")[0];
//   let divDestination = document.getElementsByClassName("singledestination-only")[0];

//   divDestination.appendChild(divToMove);
//   //    Cambio de copy de Multiple vuelos a multiple destinos.
//   document.getElementById("flights-searcher-roundtrip-multi").nextSibling.nodeValue = "Multidestino";
//   document.querySelector('.radio').style.display = 'inline-block';

//   // seleccionar el div a mover
//   const divAMover = document.querySelector('.hidden-lg.col-xs-6.col-sm-2.pull-right');

//   // seleccionar el div debajo del cual se moverá el div a mover
//   const divObjetivo = document.getElementById('flights-searcher-more-options');

//   // mover el div a mover justo debajo del div objetivo
//   divObjetivo.parentNode.insertBefore(divAMover, divObjetivo.nextSibling);
//   // ***************************************************************************
//   // // seleccionar el elemento div por su clase
//    let multiFlightDiv = $('.flights-searcher-roundtrip-multi');

//   // // seleccionar el label que contiene el texto que deseas cambiar
//   let label = multiFlightDiv.find('label[for="flight-searcher-roundtrip-multi"]');

//   // // cambiar el texto del label
//    label.text('Multidestino');
//   document.querySelector('.radio').style.display = 'inline-block';
// });

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
});
