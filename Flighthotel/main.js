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
    const btnMoreOptions = document.querySelector('.btn-more-options');
    const divAMover = document.querySelector('.hidden-lg.col-xs-6.col-sm-2.pull-right');
    const divSingleDestination = document.querySelector('.singledestination-only.collapse');
    
    btnMoreOptions.addEventListener('click', () => {
      if (divSingleDestination.classList.contains('in')) {
        divSingleDestination.appendChild(divAMover);
      } else {
        // Si el div singledestination-only collapse no tiene la clase "in",
        // significa que se ha cerrado, entonces movemos el botón de vuelta a su lugar original.
        const parentDiv = document.querySelector('.searcher-bar');
        parentDiv.insertBefore(divAMover, parentDiv.children[1]);
      }
    });
  });