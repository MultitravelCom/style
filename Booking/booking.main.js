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
    const newElementBookingCupons = document.createElement('div');
    newElementBookingCupons.id = 'openModalBtnContainer'; // Agrega un id al nuevo div
    newElementBookingCupons.classList.add('container__conocer__cupones');
    newElementBookingCupons.innerHTML = `
    <div class="container__conocer__cupones__p">
        <p>Conoce y elegí de nuestros diferentes cupones el que más te convenga</p>
    </div>
    <div class="container__conocer__cupones__btn">
        <button id="openModalBtn" class="cupones__btn__style">Conocer cupones</button>
    </div>
`;

    // ...

    const openModalBtn = newElementBookingCupons.querySelector('#openModalBtn');
    const openModalBtnContainer = newElementBookingCupons.querySelector('#openModalBtnContainer'); // Obtén el div que contiene el botón

    openModalBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const modalCupones = document.createElement('div');
        modalCupones.id = 'modalCuponera';
        modalCupones.innerHTML = `
        <div class="modal">
            <div class="modal-content">
                <span class="close">X</span>
                <p>Aquí puedes agregar cualquier contenido que desees mostrar en el modal.</p>
            </div>
        </div>
    `;
        document.body.appendChild(modalCupones);

        const modal = document.getElementById("modalCuponera");
        const closeModalBtn = modal.querySelector('.close');
        closeModalBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });

        modal.style.display = "block";
    });

    // Agrega el div que contiene el botón al elemento padre
    confirmBooking.appendChild(openModalBtnContainer);
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
