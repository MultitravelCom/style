document.addEventListener('DOMContentLoaded', ()=>{
    let moverA = document.querySelector('#home-content-1');
    let moverEn = document.querySelector('#banner__central')
    let primerHijo = moverA.firstChild;
    
    moverA.insertBefore(moverEn, primerHijo);
    primerHijo.style.display = 'inline-block';
});