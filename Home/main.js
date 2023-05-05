window.addEventListener('load', () => {

    // *********** MULT-127 **********************
    // Obtener el botón por su clase
    const btnMoreOptions = document.querySelector('.btn-more-options');

    // Cambiar el texto del botón y añadir el icono
    btnMoreOptions.innerHTML = 'Clase y equipaje <span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>';

    // Si el botón no tiene la clase "collapsed", también cambia el texto del atributo "data-toggle-text"
    if (!btnMoreOptions.classList.contains('collapsed')) {
        btnMoreOptions.setAttribute('data-toggle-text', 'Cabina y equipaje');
    }
    // // Obtener el label por su etiqueta "for"
    // const labelFlights = document.querySelector('label[for="flights-searcher-flightclass"]');

    // // Reemplazar el texto "Clase" por "Cabina"
    // labelFlights.textContent = labelFlights.textContent.replace('Clase', 'Cabina');
    // // Obtener el elemento span que contiene el texto "clase"
    // const labelFlightsClassSpan = document.querySelector('#select2-flights-searcher-flightclass-container');

    // // // Reemplazar el texto "clase" por "cabina"
    // // labelFlightsClassSpan.textContent = labelFlightsClassSpan.textContent.replace('clase', 'cabina');

    // Mostrar el botón una vez que se cargue el DOM
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
    // let multiFlightDiv = $('.flights-searcher-roundtrip-multi');

    // // seleccionar el label que contiene el texto que deseas cambiar
    // let label = multiFlightDiv.find('label[for="flight-searcher-roundtrip-multi"]');

    // // cambiar el texto del label
    // label.text('Multidestino');
    // document.querySelector('.radio').style.display = 'inline-block';

});