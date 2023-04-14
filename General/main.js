
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionar el div que contiene la clase .bestprice
const resultsWrapper = document.body;

// Crear un observador de mutación
const observer = new MutationObserver(() => {
  // Seleccionar todos los divs que contienen la clase .bestprice
  const divBestprices = document.querySelectorAll('.bestprice');

  // Recorrer todos los divs y agregar el nuevo div con el texto "Impuestos incluidos"
  divBestprices.forEach((divBestprice) => {
    const newDivBestprice = document.createElement('div');
    newDivBestprice.className = 'bestprice__title';
    newDivBestprice.innerHTML = '<span>Impuestos incluidos</span>';
    divBestprice.appendChild(newDivBestprice);
  });
});

// Configurar el observador para observar cambios en el nodo de resultados y sus hijos
observer.observe(resultsWrapper, { childList: true, subtree: true });
});