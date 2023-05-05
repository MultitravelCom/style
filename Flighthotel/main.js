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
    const botonMasOpciones = document.querySelector('.btn-more-options');
    const divAMover = document.querySelector('.hidden-lg.col-xs-6.col-sm-2.pull-right');
    const contenedorPadre = botonMasOpciones.parentElement.parentElement;
    
    botonMasOpciones.addEventListener('click', function() {
      if (botonMasOpciones.getAttribute('aria-expanded') === 'true') {
        contenedorPadre.insertAdjacentElement('beforeend', divAMover);
      } else {
        contenedorPadre.insertAdjacentElement('afterbegin', divAMover);
      }
    });
  });