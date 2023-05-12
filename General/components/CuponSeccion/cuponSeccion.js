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

const CuponsCondicion = () => {
  return (
    <>
      <div className="main__cupon__text--condiciones">
        <div className="modal__content-title-circle">
          <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
          <p>{cupon.destino}</p>
        </div>
        <div className="modal__content-title-calendar">
          <div className="main__warningPric__icon glyphicon glyphicon-calendar"></div>
          <p>{cupon.fecha}</p>
        </div>
      </div>
    </>
  )
}

const CuponsComponente = () => {
  return (
    <>
      <div className="main__cupon">
        <div className="main__cupon__img"></div>
        <div className="main__cupon__text">
          <p>{cupon.titple}</p>
        </div>
        <CuponsCondicion />
      </div>
    </>
  )
}

const ModalComponent = () => {
  return (
    <>
      <div class="overlay__cup<h2>Te damos la bienvenida a nuestra cuponera</h2>
              <span class="close">X</span>ones" id="overlay__cupones">
    < div class="modal__cupones" >
      <div class="modal-content">
        <div class="modal__content-title">

        </div>
      </div>
        </ >
      </div >
    </>
  )
}