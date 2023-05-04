window.addEventListener('load', () => {

    // *********** MULT-127 **********************
    // Obtener el botón por su clase
    const btn = document.querySelector('.btn-more-options');

    // Cambiar el texto del botón y añadir el icono
    btn.innerHTML = 'Cabina y equipaje <span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>';

    // Si el botón no tiene la clase "collapsed", también cambia el texto del atributo "data-toggle-text"
    if (!btn.classList.contains('collapsed')) {
        btn.setAttribute('data-toggle-text', 'Cabina y equipaje');
    }

    // Mostrar el botón una vez que se cargue el DOM
    btn.style.display = 'inline-block';


    // Mover div fuera del mas opciones.
    let divToMove = document.getElementsByClassName("checkbox")[0];
    let divDestination = document.getElementsByClassName("singledestination-only")[0];

    divDestination.appendChild(divToMove);
    //    Cambio de copy de Multiple vuelos a multiple destinos.
    document.getElementById("flights-searcher-roundtrip-multi").nextSibling.nodeValue = "Multidestino";
    document.querySelector('.radio').style.display = 'inline-block';
    // ***************************** **********************

    // seleccionar el elemento div por su clase
    let multiFlightDiv = $('.flights-searcher-roundtrip-multi');

    // seleccionar el label que contiene el texto que deseas cambiar
    let label = multiFlightDiv.find('label[for="flight-searcher-roundtrip-multi"]');

    // cambiar el texto del label
    label.text('Multidestino');
    document.querySelector('.radio').style.display = 'inline-block';

});