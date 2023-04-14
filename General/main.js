
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
 // Función para esperar la carga de elementos en el modal
const waitForElement = async () => {
    while (true) {
      const totalLineDiv = document.querySelector('.flight-selection__breakdown-line--total');
      const conceptDiv = document.querySelector('.flight-selection__breakdown-concept');
      if (totalLineDiv && conceptDiv) {
        const newSpan = document.createElement('span');
        newSpan.className = 'flight-selection__breakdown-concept';
        newSpan.textContent = 'Precio Final';
        totalLineDiv.insertBefore(newSpan, totalLineDiv.firstChild);
        conceptDiv.style.display = 'none';
        break;
      }
      // Esperar 100ms y volver a intentar
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  // Función para detectar la selección de los checkboxes
  const handleCheckboxSelection = () => {
    const departureCheckbox = document.querySelector('input[name="result-option-radio-departure"]:checked');
    const returnCheckbox = document.querySelector('input[name="result-option-radio-return"]:checked');
    if (departureCheckbox && returnCheckbox) {
      // Ambos checkboxes están seleccionados, activar la función de espera
      waitForElement();
    }
  }
  
  // Agregar evento de escucha a los checkboxes
  const departureCheckbox = document.querySelector('input[name="result-option-radio-departure"]');
  const returnCheckbox = document.querySelector('input[name="result-option-radio-return"]');
  departureCheckbox.addEventListener('change', handleCheckboxSelection);
  returnCheckbox.addEventListener('change', handleCheckboxSelection);
  
    waitForElementFlight();
});