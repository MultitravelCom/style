document.addEventListener('DOMContentLoaded', function (event) {

    const spanPromocodes = document.querySelector(".promocodes__container td:nth-of-type(3) span");
    spanPromocodes.textContent = "Ingresa el código de promoción y aprovecha los descuentos adicionales en tu reserva.";

    const padre = document.querySelector('.confirm-booking__promocodes');
    const nuevoDiv = document.createElement('div');

    nuevoDiv.classList.add('booking-data__data__text');
    nuevoDiv.innerHTML =
        `<div class="booking-data__data__text__h2">
    <h2>Aprovecha nuestro cupón 10% OFF en vuelos y paquetes</h2>
</div>
<div class="booking-data__data__text__p">
    <p>En paquetes, el descuento se aplica solo al aéreo.
    Tope de descuento $25.000. Cantidad limitada.</p>
</div>
<div class="booking-data__data__text__span">
    <span>Código</span>
    <p>MULTITRAVELHOTSALE10</p>
</div>
`;

    padre.appendChild(nuevoDiv);
});