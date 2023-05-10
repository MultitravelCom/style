async function changeText() {
    const span = document.querySelector('.promocodes__container tr:nth-child(3) td span');

    if (!span) {
        await new Promise(resolve => setTimeout(resolve, 100));
        changeText();
        return;
    }

    span.textContent = 'Ingresá tu código promocional';
}

changeText();

async function agreeBtn() {
    const confirmBooking = document.querySelector('.confirm-booking__promocodes');

    const newElementBookingCupons = document.createElement('div');
    newElementBookingCupons.classList.add('container__conocer__cupones');
    newElementBookingCupons.innerHTML =
            `<div class="container__conocer cupones__p">
                    <p>Conoce y elegí de nuestros diferentes cupones el que más te convenga</p>
            </div>
            <div class="container__conocer cupones__btn">
                <button class="cupones__btn__style">Conocer cupones</button>
            </div>
    `;
    confirmBooking.appendChild(newElementBookingCupons);

}

function showPromocodesDiv() {
    setTimeout(function () {
        const promocodesDiv = document.querySelector('.confirm-booking__promocodes');
        if (promocodesDiv) {
            promocodesDiv.style.display = 'block';
        }
    }, 5000);
}