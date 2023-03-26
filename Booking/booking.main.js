window.addEventListener('load', () => {
    let bookingData = document.querySelector('.booking-data__data');
    let divs = bookingData.querySelectorAll('div');
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <h1>Test</h1>
    `
    bookingData.appendChild(newDiv, divs[3]);
});