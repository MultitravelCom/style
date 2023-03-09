document.addEventListener('DOMContentLoaded', ()=>{
    let moverDiv = document.querySelector('#home-content-1');
    let moverA = document.querySelector('.main_conteiner__s1_medio__paquetes');

    moverA.insertBefore(moverDiv, moverA.firstChild);
});