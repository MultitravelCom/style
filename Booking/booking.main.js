document.addEventListener('DOMContentLoaded', function (event) {

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

async function cambiarTexto() {
    await new Promise(resolve => {
        document.addEventListener("DOMContentLoaded", resolve);
    });

    // Definir una variable para el temporizador
    let timer;

    // Función para buscar el span y cambiar su texto
    function buscarSpan() {
        const span = document.querySelector('.promocodes__container td:nth-child(2) span');
        if (span) {
            span.textContent = 'Ingresá tu código promocional';
            clearTimeout(timer); // Detener el temporizador
        }
    }

    // Ejecutar la función de búsqueda después de 100 ms
    timer = setTimeout(buscarSpan, 100);
}

cambiarTexto();