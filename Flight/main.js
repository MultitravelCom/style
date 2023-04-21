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

    const breakpoint = window.matchMedia('(max-width: 992px)');

    function aplicarEstilos() {
        if (breakpoint.matches) {
            // document.querySelector('.results-list__filter-toggle-wrapper').style.display = 'inline-block';
        } else {
            document.querySelector('.results-list__filter-toggle-wrapper').style.display = 'none';
        }
    };

    aplicarEstilos();

    window.addEventListener('resize', aplicarEstilos);

    // Selecciona el elemento que quieres observar
const calendarContainer = document.querySelector('.js-calendar-container');

// Crea una instancia del MutationObserver
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    // Comprueba si se han añadido o eliminado las clases 'opened' o 'closed'
    if (calendarContainer.classList.contains('opened')) {
      // Oculta el botón
      document.querySelector('.results-list__filter-toggle').style.display = 'none';
    } else if (calendarContainer.classList.contains('closed')) {
      // Muestra el botón
      document.querySelector('.results-list__filter-toggle').style.display = 'inline-block';
    }
  });
});

// Configura las opciones del MutationObserver
const config = { attributes: true };

// Inicia el MutationObserver y observa los cambios en el elemento
observer.observe(calendarContainer, config);

});

