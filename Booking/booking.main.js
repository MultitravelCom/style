window.addEventListener('load', () => {
    let bookingData = document.querySelector('.booking-data__data');
    let insurances = bookingData.querySelector('.confirm-booking__insurances');
    let payment = bookingData.querySelector('.booking-payment');
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <h1>Test</h1>
    `;
    bookingData.insertBefore(newDiv, payment);
});




