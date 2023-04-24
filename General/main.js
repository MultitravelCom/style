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
    async function recommendedStyle() {
        while (true) {
            const infoCard = document.querySelector('.info-card__content:has(.deals)');
            if (infoCard) {
                infoCard.classList.add('deals-available');
                infoCard.style.backgroundColor = 'red';
                console.log("test");
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
    if (window.location.pathname.includes("/hotels/")) {
        recommendedStyle();
    }
    if (window.location.pathname.includes("/flights/")) {
        waitForElementFlight();
    }
});