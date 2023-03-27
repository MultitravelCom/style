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
                <p>Pagá en 6 cuotas sin interes tus vuelos con Aerolíneas Argentinas a través de nuestra atención personalizada.</p>
            </div>
            <button class="btn btn-primary promo__ar__btn">Descubrir</button>
        </div>
    </div>
    `;
    bookingData.insertBefore(newDiv, payment);
});




