document.addEventListener('DOMContentLoaded', ()=>{
    // Mover div fuera del mas opciones.
    let divToMove = document.getElementById("home-content-1");
    let divDestination = document.getElementById("test-card");
    
        divDestination.appendChild(divToMove);
    });