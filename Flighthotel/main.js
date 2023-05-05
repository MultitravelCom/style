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

  });