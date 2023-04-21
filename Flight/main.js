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

    document.querySelector('.results-list__filter-toggle-wrapper').style.display = 'inline-block';

    const calendarContainer = document.querySelector('.js-calendar-container');
const button = document.querySelector('.results-list__filter-toggle');
const breakpoint = window.matchMedia('(max-width: 992px)');

function aplicarEstilos() {
  if (breakpoint.matches) {
    button.style.display = 'inline-block';
  } else {
    button.style.display = 'none';
  }
}

const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    // Comprueba si se han añadido o eliminado las clases 'opened' o 'closed'
    if (calendarContainer.classList.contains('opened')) {
      // Oculta el botón
      button.style.display = 'none';
    } else if (calendarContainer.classList.contains('closed')) {
      // Muestra el botón
      aplicarEstilos();
    }
  });
});

// Observa cambios en la clase del calendario
observer.observe(calendarContainer, { attributes: true });

// Aplica estilos al cargar la página
aplicarEstilos();

    window.addEventListener('resize', aplicarEstilos);

});

