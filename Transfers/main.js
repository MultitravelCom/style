document.addEventListener('DOMContentLoaded', ()=>{
    let moverDiv = document.querySelector('#test');
    let moverA = document.querySelector('#home-content-1');

    moverA.insertBefore(moverDiv, moverA.firstChild);
});