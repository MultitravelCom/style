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

    // document.querySelector('.results-list__filter-toggle-wrapper').style.display = 'inline-block';

    // const breakpoint = window.matchMedia('(max-width: 992px)');

    // function aplicarEstilos() {
    //     if (breakpoint.matches) {
    //         document.querySelector('.results-list__filter-toggle-wrapper').style.display = 'inline-block';
    //     } else {
    //         document.querySelector('.results-list__filter-toggle-wrapper').style.display = 'none';
    //     }
    // };

    // aplicarEstilos();

    // window.addEventListener('resize', aplicarEstilos);

});

function init() {
    const boton = document.querySelector('.js-results-list-filter-toggle');
    const inputIda = document.querySelector('#flight-searcher-_ctl1__ctl1__ctl1_pageBody_pageHeader_searcher__ctl0_ctlDateSelector-start-date-input');
    const inputVuelta = document.querySelector('#flight-searcher-_ctl1__ctl1__ctl1_pageBody_pageHeader_searcher__ctl0_ctlDateSelector-end-date-input');
  
    const checkInputs = function() {
      if (inputIda.value && inputVuelta.value) {
        boton.style.display = '';
      } else {
        boton.style.display = 'none';
      }
    };
  
    inputIda.addEventListener('change', checkInputs);
    inputVuelta.addEventListener('change', checkInputs);
  }
  
  document.addEventListener('DOMContentLoaded', init);


