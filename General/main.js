
document.addEventListener('DOMContentLoaded', () => {
    // Función para agregar el nuevo div con el texto "Impuestos incluidos"
function addTaxes() {
    const divBestprices = document.querySelectorAll('.bestprice');
    divBestprices.forEach((divBestprice) => {
      const newDivBestprice = document.createElement('div');
      newDivBestprice.className = 'bestprice__title';
      newDivBestprice.innerHTML = '<span>Impuestos incluidos</span>';
      divBestprice.appendChild(newDivBestprice);
    });
  }
  
  // Intervalo para comprobar si el elemento ya está presente en el DOM
  const interval = setInterval(() => {
    const divBestprices = document.querySelectorAll('.bestprice');
    if (divBestprices.length > 0) {
      clearInterval(interval);
      addTaxes();
    }
  }, 1000);
});