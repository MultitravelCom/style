window.addEventListener('load', () => {
  let changeIcon = document.querySelectorAll('.glyphicon-supplement');

  changeIcon.forEach(el => {
    if (el.classList.contains("glyphicon-supplement")) {
      el.classList.remove("glyphicon-supplement");
      el.classList.add("glyphicon-check-whl");
    }
  });


  // no-results
  let noResultDiv = document.createElement("div");
  noResultDiv.className = "msg-box-b msg-box--no-results-b";
  noResultDiv.innerHTML =
    `
    <h2 class="no-results__title">Lo sentimos</h2>
    <div class="no-results__content">           
        <p>En este momento no contamos con disponibilidad para esta búsqueda</p>
        <p>Te invitamos a modificar la fecha o a comunicarte con nuestro equipo de atención personalizada</p>
    </div>
    <div class="btnNoResult">
        <button type="button" class="btn btn-primary">Contactarme</button>
    </div>
  `;
  document.querySelector(".results-list__body").appendChild(noResultDiv);
});