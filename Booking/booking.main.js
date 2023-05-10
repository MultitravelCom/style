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
    newElementBookingCupons.id = 'openModalBtnContainer';
    newElementBookingCupons.classList.add('container__conocer__cupones');
    newElementBookingCupons.innerHTML = `
      <div class="container__conocer__cupones__p">
          <p>Conoce y elegí de nuestros diferentes cupones el que más te convenga</p>
      </div>
      <div class="container__conocer__cupones__btn">
          <button id="openModalBtn" class="cupones__btn__style">Conocer cupones</button>
      </div>
    `;
  
    const confirmBooking = document.querySelector('.container__conocer__cupones__btn');
    const openModalBtnContainer = newElementBookingCupons.querySelector('#openModalBtnContainer');
    const openModalBtn = newElementBookingCupons.querySelector('#openModalBtn');
  
    openModalBtn.addEventListener('click', function(event) {
      event.preventDefault();
      const modalCupones = document.createElement('div');
      modalCupones.id = 'modalCuponera';
      modalCupones.innerHTML = `
      <div class="modal">
      <div class="modal-content">
          <span class="close">X</span>
          <div class="row">
              <div class="col-md-12 col-lg-4">Contenido del primer div</div>
              <div class="col-md-12 col-lg-4">Contenido del segundo div</div>
              <div class="col-md-12 col-lg-4">Contenido del tercer div</div>
          </div>
      </div>
  </div>
      `;
      document.body.appendChild(modalCupones);
  
      const modal = document.getElementById('modalCuponera');
      const closeModalBtn = modal.querySelector('.close');
      closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
      });
  
      modal.style.display = 'block';
    });
  
    confirmBooking.appendChild(openModalBtnContainer);
  }
  
  async function showPromocodesDiv() {
    while (true) {
      const promocodesDiv = document.querySelector('.confirm-booking__promocodes');
      if (promocodesDiv) {
        promocodesDiv.style.display = 'block';
        break;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  async function run() {
    await changeText();
    await agreeBtn();
    await showPromocodesDiv();
  }
  
  run();
  