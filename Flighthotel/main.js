function addHeaderLinks() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const meta = document.createElement('meta');

  const bannerNoResult = document.createElement('script');
  bannerNoResult.src = 'https://multitravelcom.github.io/style/General/bannerNoResult.js';
  bannerNoResult.textContent = "text/babel";

  head.appendChild(bannerNoResult);
}
addHeaderLinks();

window.addEventListener('load', () => {
    let displayMaster = document.querySelector('.master-selector');
    let firstOption = displayMaster.querySelector('.master-selector-option:first-child');
    
    firstOption.classList.remove('hidden');
    displayMaster.style.display = 'inline-block';

    // ********************************* MULT-127 *********************************
    // Mueve el btn buscar asi abajo.
    // seleccionar el div a mover
    const divAMoverBtnBuscar = document.querySelector('.hidden-lg.col-xs-6.col-sm-2.pull-right');

    // seleccionar el div debajo del cual se moverá el div a mover
    const divObjetivoBtnBuscar = document.getElementById('flight-searcher-more-options');

    // mover el div a mover justo debajo del div objetivo
    divObjetivoBtnBuscar.parentNode.insertBefore(divAMoverBtnBuscar, divObjetivoBtnBuscar.nextSibling);
  });