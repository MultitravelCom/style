window.addEventListener('load', () => {
    const bookingData = document.querySelector('.booking-data');
const bookingDataDivs = bookingData.querySelectorAll('div');
const bookingDataData = bookingDataDivs[1];
const bookingDataDataDivs = bookingDataData.querySelectorAll('div');
const confirmBookingInsurances = bookingDataDataDivs[1];
const nuevoDiv = document.createElement('div');
nuevoDiv.innerHTML = '<p>test</p>';
bookingDataData.insertBefore(nuevoDiv, confirmBookingInsurances.nextSibling);
});