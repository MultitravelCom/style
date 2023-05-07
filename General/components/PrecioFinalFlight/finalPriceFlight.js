
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
    const hotelResultDealsItems = document.querySelectorAll('.results-list__item:has(.deals) .hotel-result');

    hotelResultDealsItems.forEach((item) => {
        item.classList.add('recomendado');
    });
}
if (window.location.pathname.includes("/hotels/")) {
    setTimeout(recommendedStyle, 500);
}
if (window.location.pathname.includes("/flights/")) {
    waitForElementFlight();
}