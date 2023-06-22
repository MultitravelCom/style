window.addEventListener('load', () => {

  // *********** MULT-127 **********************
  // Obtener el botón por su clase
  const btnMoreOptions = document.querySelector('.btn-more-options');

  // Cambiar el texto del botón y añadir el icono
  btnMoreOptions.innerHTML = 'Clase y equipaje a despachar <span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>';

  // Si el botón no tiene la clase "collapsed", también cambia el texto del atributo "data-toggle-text"
  if (!btnMoreOptions.classList.contains('collapsed')) {
    btnMoreOptions.setAttribute('data-toggle-text', 'Clase y equipaje a despachar');
  }

  btnMoreOptions.style.display = 'inline-block';


  // Mover div fuera del mas opciones.
  let divToMove = document.getElementsByClassName("checkbox")[0];
  let divDestination = document.getElementsByClassName("singledestination-only")[0];

  divDestination.appendChild(divToMove);
  //    Cambio de copy de Multiple vuelos a multiple destinos.
  document.getElementById("flights-searcher-roundtrip-multi").nextSibling.nodeValue = "Multidestino";
  document.querySelector('.radio').style.display = 'inline-block';

  // seleccionar el div a mover
  const divAMover = document.querySelector('.hidden-lg.col-xs-6.col-sm-2.pull-right');

  // seleccionar el div debajo del cual se moverá el div a mover
  const divObjetivo = document.getElementById('flights-searcher-more-options');

  // mover el div a mover justo debajo del div objetivo
  divObjetivo.parentNode.insertBefore(divAMover, divObjetivo.nextSibling);
  // ***************************************************************************
  // // seleccionar el elemento div por su clase
  let multiFlightDiv = $('.flights-searcher-roundtrip-multi');

  // // seleccionar el label que contiene el texto que deseas cambiar
  let label = multiFlightDiv.find('label[for="flight-searcher-roundtrip-multi"]');

  // // cambiar el texto del label
  label.text('Multidestino');
  document.querySelector('.radio').style.display = 'inline-block';
  // *************************************************************************************************
  // MULT-277
  function changeSelectText() {
    let selectElements = document.querySelectorAll('select[name="baggageincluded"], select[name="flight-searcher-baggageincluded"]');
    let labelElements = document.querySelectorAll('label[for="flights-searcher-baggageincluded"], label[for="flight-searcher-baggageincluded"]');
    let spanElements = document.querySelectorAll('#select2-flights-searcher-baggageincluded-container, #select2-flight-searcher-baggageincluded-container');

    for (let i = 0; i < selectElements.length; i++) {
      let selectElement = selectElements[i];
      let labelElement = labelElements[i];
      let spanElement = spanElements[i];

      if (selectElement && labelElement && spanElement) {
        let optionElements = selectElement.querySelectorAll('option');

        for (let j = 0; j < optionElements.length; j++) {
          if (optionElements[j].textContent.includes("Con equipaje incluido")) {
            optionElements[j].textContent = optionElements[j].textContent.replace("Con equipaje incluido", "Con equipaje a despachar");
          }
          if (optionElements[j].textContent.includes("Sin equipaje incluido")) {
            optionElements[j].textContent = optionElements[j].textContent.replace("Sin equipaje incluido", "Sin equipaje a despachar");
          }
        }

        let selectedOptionText = selectElement.options[selectElement.selectedIndex].textContent;
        if (selectedOptionText.includes("Sin equipaje incluido")) {
          spanElement.textContent = "Sin equipaje a despachar";
          spanElement.setAttribute('title', 'Sin equipaje a despachar');
        }
        if (selectedOptionText.includes("Con equipaje incluido")) {
          spanElement.textContent = "Con equipaje a despachar";
          spanElement.setAttribute('title', 'Con equipaje a despachar');
        }

        labelElement.textContent = "Equipaje a despachar";
      }
    }
  }

  let selectElements = document.querySelectorAll('select[name="baggageincluded"], select[name="flight-searcher-baggageincluded"]');
  for (let i = 0; i < selectElements.length; i++) {
    let selectElement = selectElements[i];
    selectElement.addEventListener('focus', changeSelectText);
  }

  changeSelectText();


});
