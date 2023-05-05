document.addEventListener('DOMContentLoaded', () => {

    async function waitForElementFlight() {
        while (true) {
            const divTaxes = document.querySelectorAll('.results-list__item');
            const divCopyTaxes = document.querySelectorAll('.bestprice__amount');
            if (divTaxes.length > 0) {
                for (let i = 0; i < divCopyTaxes.length; i++) {
                    const newDivTax = document.createElement('span');
                    newDivTax.className = 'renderPriceTag';
                    newDivTax.className = 'renderPriceTagStyle';
                    newDivTax.innerHTML = '<span>Precio Final</span>';
                    divCopyTaxes[i].insertBefore(newDivTax, divCopyTaxes[i].firstChild);
                }
                break;
            }
            // Esperar 100ms y volver a intentar
            await new Promise(resolve => setTimeout(resolve, 100));
        }

    }
    async function recommendedStyle() {
        const hotelResultDealsItems = document.querySelectorAll('.results-list__item:has(.deals) .hotel-result');

        hotelResultDealsItems.forEach((item) => {
            item.classList.add('recomendado');
        });
    }
    if (window.location.pathname.includes("/hotels/")) {
        setTimeout(recommendedStyle, 500);
    }
    if (window.location.pathname.includes("/flights/")) {
        waitForElementFlight();
    }

    // // ********************************* MULT-127 *********************************
    // // seleccionar el div a mover
    // const divAMover = document.querySelector('.hidden-lg.col-xs-6.col-sm-2.pull-right');
  
    // // seleccionar el div debajo del cual se moverá el div a mover
    // const divObjetivo = document.getElementById('flight-searcher-more-options');
  
    // // mover el div a mover justo debajo del div objetivo
    // divObjetivo.parentNode.insertBefore(divAMover, divObjetivo.nextSibling);
    // // ***************************************************************************
    // Mover div fuera del mas opciones.
    let divToMove = document.getElementsByClassName("checkbox")[0];
    let divDestination = document.getElementsByClassName("singledestination-only")[0];
  
    divDestination.appendChild(divToMove);
    //    Cambio de copy de Multiple vuelos a multiple destinos.
    document.getElementById("flight-searcher-roundtrip-multi").nextSibling.nodeValue = "Multidestino";
    document.querySelector('.radio').style.display = 'inline-block';
  
  });