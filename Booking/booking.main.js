window.addEventListener('load', () => {
    let bookingData = document.querySelector('.booking-data');
    let divs = bookingData.querySelectorAll('div');
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <h1>Test</h1>
    `
    bookingData.insertBefore(newDiv, divs[3].parentNode.nextSibling);
});