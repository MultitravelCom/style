
document.addEventListener('DOMContentLoaded', () => {
    let divBestprices = document.querySelectorAll('.bestprice');
    divBestprices.forEach((divBestprice) => {

        let newDivBestprice = document.createElement('div');
        newDivBestprice.className = 'bestprice__title';
        newDivBestprice.innerHTML = `<span>Impuestos incluidos</span>`;

        divBestprice.appendChild(newDivBestprice);
    })
});