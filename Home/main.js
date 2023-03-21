window.addEventListener('load', () => {
    // Mover div fuera del mas opciones.
    let divToMove = document.getElementsByClassName("checkbox")[0];
    let divDestination = document.getElementsByClassName("singledestination-only")[0];

    divDestination.appendChild(divToMove);

    //    Cambio de copy de Multiple vuelos a multiple destinos.
    document.getElementById("flights-searcher-roundtrip-multi").nextSibling.nodeValue = "Multidestino";
    document.querySelector('.radio').style.display = 'inline-block';
    
    // Activa la solapa vuelos
    const secondNavItem = document.querySelector('.nav-elem:nth-child(2)');
        secondNavItem.classList.contains('active') ? null : secondNavItem.classList.add('active');
});