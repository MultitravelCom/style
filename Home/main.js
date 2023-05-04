window.addEventListener('load', () => {

    // *********** MULT-127 **********************

    // Obtener el botón por su clase
    const btn = document.querySelector('.btn-more-options');

    // Cambiar el texto del botón
    btn.textContent = 'Clase y equipaje';

    // Si el botón no tiene la clase "collapsed", también cambia el texto del atributo "data-toggle-text"
    if (!btn.classList.contains('collapsed')) {
        btn.setAttribute('data-toggle-text', 'Clase y equipaje');
    }
    // ***************************** **********************

    // seleccionar el elemento div por su clase
    let multiFlightDiv = $('.flights-searcher-roundtrip-multi');

    // seleccionar el label que contiene el texto que deseas cambiar
    let label = multiFlightDiv.find('label[for="flight-searcher-roundtrip-multi"]');

    // cambiar el texto del label
    label.text('Multidestino');
    document.querySelector('.radio').style.display = 'inline-block';

});