document.addEventListener('DOMContentLoaded', () => {

    const padre = document.querySelector('.booking-data__data');
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

     // Obtener el span que contiene el texto a cambiar
     const spanPromocodes = document.querySelector('.promocodes__container td:nth-child(2) span');

     // Cambiar el texto del span
     spanPromocodes.textContent = 'Ingresá tu código promocional';
});