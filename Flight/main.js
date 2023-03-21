document.addEventListener('DOMContentLoaded', ()=>{
// Mover div fuera del mas opciones.
    let divToMove = document.getElementsByClassName("checkbox")[0];
    let divDestination = document.getElementsByClassName("singledestination-only")[0];

    divDestination.appendChild(divToMove);  
//    Cambio de copy de Multiple vuelos a multiple destinos.
document.getElementById("flight-searcher-roundtrip-multi").nextSibling.nodeValue = "Multidestino";
document.querySelector('.radio').style.display = 'inline-block';
});

// Cambiar texto al btn filtrar.
let filtrar = Document.querySelector('.results-list__filter-toggle-wrapper').nextSibling.nodeValue = "Filtrar";

