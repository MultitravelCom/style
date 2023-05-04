window.addEventListener('load', () => {


    // seleccionar el elemento div por su clase
    let multiFlightDiv = $('.flights-searcher-roundtrip-multi');

    // seleccionar el label que contiene el texto que deseas cambiar
    let label = multiFlightDiv.find('label[for="flight-searcher-roundtrip-multi"]');

    // cambiar el texto del label
    label.text('Multidestino');
    document.querySelector('.radio').style.display = 'inline-block';

});