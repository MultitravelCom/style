document.addEventListener('DOMContentLoaded', ()=>{
    // Acomoda #bannerCentral al top y cambia la clase de none a inline.
    let moverA = document.querySelector('#home-content-1');
    let moverEn = document.querySelector('#banner__central')
    let primerHijo = moverA.firstChild;
    
    moverA.insertBefore(moverEn, primerHijo);
    moverEn.style.display = 'inline-block';

// Cambiar Copy B1
const textBtn = document.querySelector('.booking-data__section-subtitle');
textBtn.textContent = 'Indica el detalle de tu vuelo y hotel';

document.querySelector('.booking-data__section-subtitle').style.display = 'inline-block';

});
