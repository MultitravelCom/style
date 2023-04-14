
document.addEventListener('DOMContentLoaded', () => {
    async function waitForElement() {
        while (true) {
          const divBestprices = document.querySelectorAll('.bestprice');
          if (divBestprices.length > 0) {
            // La clase .bestprice existe, entonces ejecutar tu función aquí
            divBestprices.forEach((divBestprice) => {
              const newDivBestprice = document.createElement('div');
              newDivBestprice.className = 'bestprice__title';
              newDivBestprice.innerHTML = '<span>Impuestos incluidos</span>';
              divBestprice.appendChild(newDivBestprice);
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