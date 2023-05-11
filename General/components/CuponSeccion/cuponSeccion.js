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