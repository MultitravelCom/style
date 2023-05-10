async function changeText() {
    const span = document.querySelector('.promocodes__container tr:nth-child(3) td span');

    if (!span) {
        await new Promise(resolve => setTimeout(resolve, 100));
        await changeText();
    } else {
        span.textContent = 'Ingresá tu código promocional';
    }
}

async function agreeBtn() {
    const confirmBooking = document.querySelector('.confirm-booking__promocodes');

    const newElementBookingCupons = document.createElement('div');
    newElementBookingCupons.classList.add('container__conocer__cupones');
    newElementBookingCupons.innerHTML =
        `<div class="container__conocer__cupones__p">
            <p>Conoce y elegí de nuestros diferentes cupones el que más te convenga</p>
        </div>
        <div class="container__conocer__cupones__btn">
            <button class="cupones__btn__style">Conocer cupones</button>
        </div>
    `;
    
    // Espera a que el elemento padre exista antes de agregar el nuevo elemento
    while (!confirmBooking) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    confirmBooking.appendChild(newElementBookingCupons);
}

async function showPromocodesDiv() {
    // Espera a que el elemento exista antes de intentar mostrarlo
    while (true) {
        const promocodesDiv = document.querySelector('.confirm-booking__promocodes');
        if (promocodesDiv) {
            promocodesDiv.style.display = 'block';
            break;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

// Ejecuta las funciones en orden y asegúrate de que se completen antes de continuar con la siguiente
async function run() {
    await changeText();
    await agreeBtn();
    await showPromocodesDiv();
}

run();
