window.addEventListener('load', () => {
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
  const button = document.querySelector('.col-xs-2 col-sm-2.col-md-2.pull-right');

  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        const addedNode = mutation.addedNodes[0];
        if (addedNode.classList.contains('singledestination-only') && addedNode.classList.contains('collapse') && addedNode.classList.contains('in')) {
          // Aquí mueves el botón debajo del div "singledestination-only collapse in"
        }
      }
    }
  });
  const parent = document.querySelector('#flight-searcher-more-options');
  observer.observe(parent, { childList: true });

  const singleDestination = document.querySelector('.singledestination-only.collapse.in');
  singleDestination.insertAdjacentElement('afterend', button);
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



