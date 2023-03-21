window.addEventListener('load', ()=>{
// Mover div fuera del mas opciones.
    let divToMove = document.getElementsByClassName("checkbox")[0];
    let divDestination = document.getElementsByClassName("singledestination-only")[0];

    divDestination.appendChild(divToMove);  
//    Cambio de copy de Multiple vuelos a multiple destinos.
document.getElementById("flight-searcher-roundtrip-multi").nextSibling.nodeValue = "Multidestino";
document.querySelector('.radio').style.display = 'inline-block';

// Cambiar texto al btn filtrar y agregar un icons.

const icon = document.createElement('i');
icon.className = 'glyphicon glyphicon-loungroom';

const textBtn = document.querySelector('.btn-tertiary');
textBtn.textContent = 'Filtrar';
textBtn.appendChild(icon);

document.querySelector('.results-list__filter-toggle-wrapper').style.display = 'inline-block';

const breakpoint = window.matchMedia('(max-width: 767px)');

function aplicarEstilos() {
    if (breakpoint.matches) {
        document.querySelector('.results-list__filter-toggle-wrapper').style.display = 'inline-block';
      elemento.style.backgroundColor = 'red';
    } else {
        document.querySelector('.results-list__filter-toggle-wrapper').style.display = 'none';
      elemento.style.backgroundColor = 'blue';
    }
  };

  aplicarEstilos();

  window.addEventListener('resize', aplicarEstilos);

});