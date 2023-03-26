window.addEventListener('load', () => {
    let bookingData = document.querySelector('.booking-data__data');
    let divs = bookingData.querySelectorAll('div');
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <h1>Test</h1>
    `
    bookingData.insertBefore(newDiv, divs[5]);
});