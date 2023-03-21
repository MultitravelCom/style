document.addEventListener('DOMContentLoaded', () => {
    // Mover div fuera del mas opciones.
    let divToMove = document.getElementsByClassName("checkbox")[0];
    let divDestination = document.getElementsByClassName("singledestination-only")[0];

    divDestination.appendChild(divToMove);

    //    Cambio de copy de Multiple vuelos a multiple destinos.
    document.getElementById("flights-searcher-roundtrip-multi").nextSibling.nodeValue = "Multidestino";
    document.querySelector('.radio').style.display = 'inline-block';
    
    // Activa la solapa vuelos
    let ulProducts = document.querySelectorAll('.navbar li');
    let secondNavItem = ulProducts.querySelector('.nav-elem:nth-child(2)');

    ulProducts.forEach(el =>{
        if(!secondNavItem.classList.contains('active') ){
            secondNavItem.classList.add('active');}
    }); 

});