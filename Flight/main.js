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
 const botonMasOpciones = document.querySelector('.btn-more-options');
 const divAMover = document.querySelector('.hidden-lg.col-xs-6.col-sm-2.pull-right');
 const contenedorPadre = botonMasOpciones.parentElement.parentElement;
 
 botonMasOpciones.addEventListener('click', function() {
   if (botonMasOpciones.getAttribute('aria-expanded') === 'true') {
     contenedorPadre.insertAdjacentElement('beforeend', divAMover);
   } else {
     contenedorPadre.insertAdjacentElement('afterbegin', divAMover);
   }
 });

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



