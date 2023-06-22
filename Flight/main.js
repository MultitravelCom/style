document.addEventListener('DOMContentLoaded', function () {
  // MULT-

  function changeSelectText() {
    let selectElementNew = document.querySelector('select[name="baggageincluded"]');
    let labelElementNew = document.querySelector('label[for="flight-searcher-baggageincluded"]');
    let spanElementNew = document.querySelector('#select2-flight-searcher-baggageincluded-container');

    if (selectElementNew && labelElementNew && spanElementNew) {
      let optionElementsNew = selectElementNew.querySelectorAll('option');

      for (let i = 0; i < optionElementsNew.length; i++) {
        if (optionElementsNew[i].textContent.includes("Con equipaje incluido")) {
          optionElementsNew[i].textContent = optionElementsNew[i].textContent.replace("Con equipaje incluido", "Con equipaje a despachar");
        } else if (optionElementsNew[i].textContent.includes("Sin equipaje incluido")) {
          optionElementsNew[i].textContent = optionElementsNew[i].textContent.replace("Sin equipaje incluido", "Sin equipaje a despachar");
        }
      }

      if (spanElementNew.getAttribute('title') === "Con equipaje incluido") {
        spanElementNew.textContent = "Con equipaje a despachar";
      } else if (spanElementNew.getAttribute('title') === "Sin equipaje incluido") {
        spanElementNew.textContent = "Sin equipaje a despachar";
      }

      labelElementNew.textContent = "Equipaje a despachar";
    }
  }

  document.querySelector('select[name="baggageincluded"]').addEventListener('change', changeSelectText);

  changeSelectText();
  // MULT-127
  const divAMover = document.querySelector('.hidden-lg.col-xs-6.col-sm-2.pull-right');
  const divObjetivo = document.getElementById('flight-searcher-more-options');
  divObjetivo.parentNode.insertBefore(divAMover, divObjetivo.nextSibling);

  const divToMove = document.getElementsByClassName("checkbox")[0];
  const divDestination = document.getElementsByClassName("singledestination-only")[0];
  divDestination.appendChild(divToMove);

  const multiFlightDiv = $('.flights-searcher-roundtrip-multi');
  const label = multiFlightDiv.find('label[for="flight-searcher-roundtrip-multi"]');
  label.text('Multidestino');
  document.querySelector('.radio').style.display = 'inline-block';

  // MULT-114
  const calendarContainers = document.querySelectorAll('.js-calendar-container');
  calendarContainers.forEach((container) => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const filterButton = document.querySelector('.results-list__filter-toggle-wrapper');
        filterButton.style.display = mutation.target.classList.contains('closed') ? 'block' : 'none';
      });
    });
    observer.observe(container, { attributes: true });
  });

  // Cambiar texto al botón Filtrar
  const textBtn = document.querySelector('.btn-tertiary');
  textBtn.textContent = 'Filtrar';

  // Cambiar texto y estilo del botón Más opciones
  const btnMoreOptions = document.querySelector('.btn-more-options');
  btnMoreOptions.innerHTML = 'Clase y equipaje a despachar <span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>';
  btnMoreOptions.setAttribute('data-toggle-text', 'Clase y equipaje a despachar');
  btnMoreOptions.style.display = 'inline-block';
  // ********************************************************************************************

});

