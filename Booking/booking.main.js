window.addEventListener('load', () => {
    let bookingData = document.querySelector('.booking-data__data');
    // let insurances = bookingData.querySelector('.confirm-booking__insurances');
    let payment = bookingData.querySelector('.booking-payment');
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="confirm-booking__section">    
        <div class="promo__ar">
            <div class="promo__ar__icon">
                <i class="glyphicon glyphicon-agent" aria-hidden="true"></i>
            </div>
            <div class="">
                <p>Pagá en 6 cuotas sin interes tus vuelos con Aerolineas Argentinas.</p>
            </div>
            <button>Descubrir</button>
        </div>
    </div>
    `;
    bookingData.insertBefore(newDiv, payment);
});




