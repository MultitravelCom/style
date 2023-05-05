window.addEventListener('load', () => {
  console.log("test");
  // Mover div fuera del mas opciones.
  let divToMove = document.getElementsByClassName("checkbox")[0];
  let divDestination = document.getElementsByClassName("singledestination-only")[0];

  divDestination.appendChild(divToMove);
  //    Cambio de copy de Multiple vuelos a multiple destinos.
  document.getElementById("flight-searcher-roundtrip-multi").nextSibling.nodeValue = "Multidestino";
  document.querySelector('.radio').style.display = 'inline-block';

  // Cambiar texto al btn filtrar y agregar un icons.

  const textBtn = document.querySelector('.btn-tertiary');
  textBtn.textContent = 'Filtrar';


  // ********************************* MULT-127 *********************************
  const btnBuscar = document.querySelector('.hidden-lg.col-xs-6.col-sm-2.pull-right');
  const destinoUnico = document.querySelector('.singledestination-only');

  // Crear un observador de mutación
  const observer = new MutationObserver(mutations => {
    // Iterar a través de todas las mutaciones
    mutations.forEach(mutation => {
      // Comprobar si la clase cambió a "collapse in"
      if (mutation.attributeName === 'class' && destinoUnico.classList.contains('collapse') && destinoUnico.classList.contains('in')) {
        // Mover el botón debajo del elemento destinoUnico
        destinoUnico.parentNode.insertBefore(btnBuscar, destinoUnico.nextSibling);
      }
    });
  });
  console.log("test");

  // Observar los cambios en la clase de destinoUnico
  observer.observe(destinoUnico, { attributes: true });
  // ***************************************************************************
  // ********************************* MULT-114 *********************************
  const calendarContainers = document.querySelectorAll('.js-calendar-container');

  calendarContainers.forEach((container) => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target.classList.contains('closed')) {
          // mostrar el botón
          const filterButton = document.querySelector('.results-list__filter-toggle-wrapper');
          filterButton.style.display = 'block';
        } else {
          // ocultar el botón
          const filterButton = document.querySelector('.results-list__filter-toggle-wrapper');
          filterButton.style.display = 'none';
        }
      });
    });

    observer.observe(container, { attributes: true });
  });
});



