
document.addEventListener('DOMContentLoaded', () => {
// Seleccionar los divs que contienen las clases .bestprice y .product-price
const bestPriceDivs = document.querySelectorAll('.bestprice');
const productPriceDivs = document.querySelectorAll('.details-card');

// Crear un observador de mutación
const observer = new MutationObserver(() => {
  // Recorrer todos los divs que contienen la clase .bestprice y agregar el nuevo div con el texto "Impuestos incluidos"
  bestPriceDivs.forEach((divBestprice) => {
    const newDivBestprice = document.createElement('div');
    newDivBestprice.className = 'bestprice__title';
    newDivBestprice.innerHTML = '<span>Impuestos incluidos</span>';
    divBestprice.appendChild(newDivBestprice);
  });

  // Recorrer todos los divs que contienen la clase .product-price y agregar el nuevo div con el texto "Impuestos incluidos"
  productPriceDivs.forEach((divProductPrice) => {
    const newDivProductPrice = document.createElement('div');
    newDivProductPrice.className = 'product-price__title';
    newDivProductPrice.innerHTML = '<span>Impuestos incluidos</span>';
    divProductPrice.appendChild(newDivProductPrice);
  });
});

// Configurar el observador para observar cambios en los nodos de las clases y sus hijos
bestPriceDivs.forEach((divBestprice) => {
  observer.observe(divBestprice, { childList: true, subtree: true });
});

productPriceDivs.forEach((divProductPrice) => {
  observer.observe(divProductPrice, { childList: true, subtree: true });
});
});