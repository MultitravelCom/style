document.addEventListener('DOMContentLoaded', ()=>{
    // Mover div fuera del mas opciones.
    let divToMove = document.getElementById("home-content-1");
        let divDestination = document.getElementsByClassName("main_conteiner__s1_medio top_mkt")[0];
    
        divDestination.appendChild(divToMove);
    });