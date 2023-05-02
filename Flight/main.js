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

    const calendarDiv = document.querySelector('.js-calendar-container');
    const filterButton = document.querySelector('.results-list__filter-toggle-wrapper');
    
    // Configuración del observador de mutaciones
    const observerConfig = { attributes: true, attributeFilter: ['class'] };
    
    // Función que se ejecuta cuando cambia el atributo "class" del div del calendario
    const handleMutation = (mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.attributeName === 'class') {
          const calendarClasses = mutation.target.classList;
          if (calendarClasses.contains('closed')) {
            filterButton.style.display = 'block';
          } else if (calendarClasses.contains('opened')) {
            filterButton.style.display = 'none';
          }
        }
      }
    };
    
    // Crea un nuevo observador de mutaciones
    const observer = new MutationObserver(handleMutation);
    
    // Inicia la observación del div del calendario
    observer.observe(calendarDiv, observerConfig);
});



