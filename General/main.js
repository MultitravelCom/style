
document.addEventListener('DOMContentLoaded', () => {
   // Selecciona el elemento que quieres observar
const resultsWrapper = document.querySelector('.js-results-wrapper');

// Crea un nuevo observador de mutaciones
const observer = new MutationObserver((mutationsList) => {
  for(let mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes.length) {
      mutation.addedNodes.forEach((node) => {
        // Si el nodo agregado tiene la clase 'bestprice'
        if (node.classList && node.classList.contains('bestprice')) {
          // Agrega el contenido deseado
          const newDivBestprice = document.createElement('div');
          newDivBestprice.className = 'bestprice__title';
          newDivBestprice.innerHTML = '<span>Impuestos incluidos</span>';

          node.appendChild(newDivBestprice);
        }
      });
    }
  }
});

// Configura el observador para que observe cambios en el DOM
observer.observe(resultsWrapper, { childList: true, subtree: true });
});