window.addEventListener('load', () => {
    let bookingData = document.querySelector('.booking-data__data');
    // let insurances = bookingData.querySelector('.confirm-booking__insurances');
    let payment = bookingData.querySelector('.booking-payment');
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="confirm-booking__section banner__promo">    
        <div class="promo__ar">
            <div class="promo__ar__icon">
                <i class="glyphicon glyphicon-agent" aria-hidden="true"></i>
            </div>
            <div class="promo__ar_parrafo">
                <h3>¿Sabías que tenemos 6 cuotas sin interés con Aerolíneas Argentinas?</h3>
                <p>Estas son ofertas exclusivas offline en vuelos por Argentina</p>
            </div>
            <a target="_blank" href="https://wa.link/v9ejqn">
                <button class="btn btn-primary promo__ar__btn">Contactarme</button>
            </a>
        </div>
    </div>
    `;
    bookingData.insertBefore(newDiv, payment);
});




