window.addEventListener('load', ()=>{
// Mover div fuera del mas opciones.
    let divToMove = document.getElementsByClassName("checkbox")[0];
    let divDestination = document.getElementsByClassName("singledestination-only")[0];

    divDestination.appendChild(divToMove);  
//    Cambio de copy de Multiple vuelos a multiple destinos.
document.getElementById("flight-searcher-roundtrip-multi").nextSibling.nodeValue = "Multidestino";
document.querySelector('.radio').style.display = 'inline-block';
});

// Cambiar texto al btn filtrar.
const textBtn = document.querySelector('.btn-tertiary');
textBtn.textContent = 'Filtrar';

