window.addEventListener('load', () => {

    // Mover div fuera del mas opciones.
    let divToMove = document.getElementsByClassName("checkbox")[0];
    let divDestination = document.getElementsByClassName("singledestination-only")[0];

    divDestination.appendChild(divToMove);

    //    Cambio de copy de Multiple vuelos a multiple destinos.
    // document.getElementById("flights-searcher-roundtrip-multi").nextSibling.nodeValue = "Multidestino";
    

    // seleccionar el elemento div por su clase
    let multiFlightDiv = $('.flights-searcher-roundtrip-multi');

    // seleccionar el label que contiene el texto que deseas cambiar
    let label = multiFlightDiv.find('label[for="flight-searcher-roundtrip-multi"]');

    // cambiar el texto del label
    label.text('Multidestino');

    document.querySelector('.radio').style.display = 'inline-block';

});