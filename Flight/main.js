window.addEventListener('load', () => {
    // Mover div fuera del mas opciones.
    let divToMove = document.getElementsByClassName("checkbox")[0];
    let divDestination = document.getElementsByClassName("singledestination-only")[0];

    divDestination.appendChild(divToMove);
    //    Cambio de copy de Multiple vuelos a multiple destinos.
    document.getElementById("flight-searcher-roundtrip-multi").nextSibling.nodeValue = "Multidestino";
    document.querySelector('.radio').style.display = 'inline-block';

    // Cambiar texto al btn filtrar

    const textBtn = document.querySelector('.btn-tertiary');
    textBtn.textContent = 'Filtrar';

    const breakpoint = window.matchMedia('(max-width: 992px)');
    const startDate = document.querySelector('.date.start-date');
    const filterToggle = document.querySelector('.results-list__filter-toggle');
    
    function toggleFilterToggleZIndex() {
      filterToggle.style.zIndex = startDate.classList.contains('active') ? '-1' : '';
    }
    
    function toggleFilterToggleVisibility() {
      const display = breakpoint.matches ? 'inline-block' : 'none';
      filterToggle.style.display = display;
    }
    
    function observeStartDate() {
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.attributeName === 'class') {
            toggleFilterToggleZIndex();
          }
        });
      });
      observer.observe(startDate, { attributes: true });
    }
    
    toggleFilterToggleVisibility();
    toggleFilterToggleZIndex();
    observeStartDate();
    window.addEventListener('resize', toggleFilterToggleVisibility);

});


