document.addEventListener('DOMContentLoaded', () => {
    // Mover div fuera del mas opciones.
    let divToMove = document.getElementsByClassName("checkbox")[0];
    let divDestination = document.getElementsByClassName("searcher-row")[0];

    divDestination.appendChild(divToMove);

    //    Cambio de copy de Multiple vuelos a multiple destinos.
    let radioMulti = document.getElementById("flights-searcher-roundtrip-multi");
    radioMulti.nextElementSibling.querySelector('label').textContent = "Multidestino";
});
