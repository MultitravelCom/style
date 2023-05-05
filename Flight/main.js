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
// Obtener el botón "btn-more-options" y el div "hidden-lg"
var btnMoreOptions = document.querySelector('.btn-more-options');
var divHidden = document.querySelector('.hidden-lg');

// Añadir un evento "click" al botón "btn-more-options"
btnMoreOptions.addEventListener('click', function() {
  // Obtener el div "singledestination-only collapse in"
  var divCollapse = document.querySelector('.singledestination-only.collapse.in');

  // Si el panel de opciones está desplegado
  if (divCollapse) {
    // Mover el div "hidden-lg" justo debajo del "singledestination-only collapse in"
    divCollapse.parentNode.insertBefore(divHidden, divCollapse.nextSibling);
  } else {
    // Volver a poner el div "hidden-lg" en su posición original
    var divSearcher = document.querySelector('.col-sm-6.col-md-4.col-lg-3');
    divSearcher.appendChild(divHidden);
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



