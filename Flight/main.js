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

    const btnFiltrar = document.querySelector('.results-list__filter-toggle-wrapper');
    const calendar = document.querySelector('.calendar-container');

    calendar.addEventListener('change', function () {
        if (calendar.classList.contains('closed')) {
            btnFiltrar.style.display = 'block';
        } else {
            btnFiltrar.style.display = 'none';
        }
    });

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

