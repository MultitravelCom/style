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

function showPromocodesDiv() {
  setTimeout(function () {
    const promocodesDiv = document.querySelector('.confirm-booking__promocodes');
    if (promocodesDiv) {
      promocodesDiv.style.display = 'block';
    }
  }, 5000);
}

let modalCupones = document.getElementById('myModal');
modalCupones.innerHTML = `
  <div class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <p>Aquí puedes agregar cualquier contenido que desees mostrar en el modal.</p>
    </div>
  </div>
`;

// const Cupones = () => {
//   return (
//     <div class="modal__content">
//       <div class="modal__content-uno-title">
//         <div class="modal__content-uno-logo">
//         </div>
//         <div class="modal__content-title-circleCalendar">
//           <div class="modal__content-title-h3">
//             <h2>10% OFF en vuelos y paquetes</h2>
//           </div>
//           <div class="modal__content-title-circle">
//             <div class="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
//             <p>En paquetes, el descuento se aplica solo al aéreo.
//               Tope de descuento $25.000. Cantidad limitada.</p>
//           </div>
//           <div class="modal__content-title-calendar">
//             <div class="main__warningPric__icon glyphicon glyphicon-calendar"></div>
//             <p>Disponi ble hasta el 10/05/2023 hasta las 23:59.</p>
//           </div>
//         </div>
//       </div>
//       <div class="modal__content-cupon">
//         <h2>MULTITRAVELHOTSALE10</h2>
//         <span>Copia el siguiente código</span>
//       </div>
//     </div>
//   )
// }