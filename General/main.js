

document.addEventListener('DOMContentLoaded', ()=>{
    let divBestprice = document.querySelector('.bestprice');
    let newDivBestprice = document.createElement('div');
    newDivBestprice.className = 'bestprice__title';
    newDivBestprice.innerHTML = `<span>Impuestos incluidos</span>`;
    
    divBestprice.appendChild(newDivBestprice);
});