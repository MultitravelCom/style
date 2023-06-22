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
    let selectElementNew = document.querySelector('select[name="baggageincluded"]');
    let labelElementNew = document.querySelector('label[for="flights-searcher-baggageincluded"]');
    let spanElementNew = document.querySelector('#select2-flights-searcher-baggageincluded-container');

    if (selectElementNew && labelElementNew && spanElementNew) {
      let optionElementsNew = selectElementNew.querySelectorAll('option');

      for (let i = 0; i < optionElementsNew.length; i++) {
        if (optionElementsNew[i].textContent.includes("Con equipaje incluido")) {
          optionElementsNew[i].textContent = optionElementsNew[i].textContent.replace("Con equipaje incluido", "Con equipaje a despachar");
        }
        if (optionElementsNew[i].textContent.includes("Sin equipaje incluido")) {
          optionElementsNew[i].textContent = optionElementsNew[i].textContent.replace("Sin equipaje incluido", "Sin equipaje a despachar");
        }
      }

      let selectedOptionText = selectElementNew.options[selectElementNew.selectedIndex].textContent;
      if (selectedOptionText.includes("Sin equipaje incluido")) {
        spanElementNew.textContent = "Sin equipaje a despachar";
        spanElementNew.setAttribute('title', 'Sin equipaje a despachar');
      }
      if (selectedOptionText.includes("Con equipaje incluido")) {
        spanElementNew.textContent = "Con equipaje a despachar";
        spanElementNew.setAttribute('title', 'Con equipaje a despachar');
      }

      labelElementNew.textContent = "Equipaje a despachar";
    }
  }

  document.querySelector('select[name="baggageincluded"]').addEventListener('click', changeSelectText);

  changeSelectText();

  function reemplazarTextoEquipaje(segment) {
    let equipajeElement = segment.querySelector('.flight-segments__segment-info > div:nth-child(5)');
    let equipajeTexto = equipajeElement.textContent.trim();
  
    if (equipajeTexto === 'Equipaje:  Incluído') {
      equipajeElement.textContent = 'Equipaje: A despachar Incluido';
    }
  }
  
  function observeSegmentChanges(segment) {
    let observer = new MutationObserver(function (mutationsList) {
      for (let i = 0; i < mutationsList.length; i++) {
        let mutation = mutationsList[i];
        if (mutation.attributeName === 'style') {
          let target = mutation.target;
          let displayValue = getComputedStyle(target).display;
  
          if (displayValue === 'block') {
            reemplazarTextoEquipaje(target);
          }
        }
      }
    });
  
    observer.observe(segment, { attributes: true });
  }
  
  function observarCambiosResultadoVuelos() {
    let resultsList = document.querySelector('.results-list__body.js-results-list-placeholder');
    let resultItems = resultsList.querySelectorAll('.results-list__item');
  
    resultItems.forEach(function (resultItem) {
      let departureSegments = resultItem.querySelectorAll('.flight-result__route.flight-result__route--departure .result-option__extended-info.flight-selection__segments.js-flight-segments');
      let returnSegments = resultItem.querySelectorAll('.flight-result__route.flight-result__route--return .result-option__extended-info.flight-selection__segments.js-flight-segments');
  
      departureSegments.forEach(observeSegmentChanges);
      returnSegments.forEach(observeSegmentChanges);
    });
  }
  
  observarCambiosResultadoVuelos();
});
