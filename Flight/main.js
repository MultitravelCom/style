window.addEventListener('load', () => {
  // // ********************************* MULT-127 *********************************
  // seleccionar el div a mover
  const divAMover = document.querySelector('.hidden-lg.col-xs-6.col-sm-2.pull-right');

  // seleccionar el div debajo del cual se moverá el div a mover
  const divObjetivo = document.getElementById('flight-searcher-more-options');

  // mover el div a mover justo debajo del div objetivo
  divObjetivo.parentNode.insertBefore(divAMover, divObjetivo.nextSibling);
  // // ***************************************************************************
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



