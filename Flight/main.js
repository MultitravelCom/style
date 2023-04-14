window.addEventListener('load', ()=>{
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

document.addEventListener('DOMContentLoaded', () => {
    async function waitForElement() {
      while (true) {
        const divTaxes = document.querySelectorAll('.results-list__item');
        if (divTaxes.length > 0) {
            divTaxes.forEach((divTax) => {
            const newDivTax = document.createElement('span');
            newDivTax.className = 'renderPriceTag';
            newDivTax.innerHTML = '<span>Precio Final</span>';
            divTax.appendChild(newDivTax);
          });
          break;
        }
        // Esperar 100ms y volver a intentar
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    // Llamar a la función para esperar a que se cargue la clase .bestprice
    waitForElement();
    });