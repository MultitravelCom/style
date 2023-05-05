document.addEventListener('DOMContentLoaded', () => {
    const tabla = document.querySelector('.promocodes__container');

    const td = tabla.querySelector('td');

    const tercerTr = td.querySelector('tr:nth-child(3)');
    const spantercerTr = tercerTr.querySelector('span');

    spantercerTr.textContent = 'Ingresá tu código promocional';

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
});