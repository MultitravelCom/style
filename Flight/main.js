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

    const breakpoint = window.matchMedia('(max-width: 992px)');

    function aplicarEstilos() {
        if (breakpoint.matches) {
            document.querySelector('.results-list__filter-toggle-wrapper').style.display = 'inline-block';
        } else {
            document.querySelector('.results-list__filter-toggle-wrapper').style.display = 'none';
        }
    };

    aplicarEstilos();

    window.addEventListener('resize', aplicarEstilos);

});

const startDate = document.querySelector('.date.start-date');
const filterToggle = document.querySelector('.results-list__filter-toggle');

// Crea una nueva instancia del observador de mutaciones
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    // Comprueba si se ha añadido o eliminado la clase 'active'
    if (startDate.classList.contains('active')) {
      // Añade el z-index
      filterToggle.style.zIndex = '-1';
    } else {
      // Elimina el z-index
      filterToggle.style.zIndex = '';
    }
  });
});

// Observa los cambios en el elemento con la clase 'date start-date'
observer.observe(startDate, { attributes: true });

