window.addEventListener('load', ()=>{
    let divToMove = document.getElementsByClassName("checkbox");
    let divDestination = document.getElementsByClassName("searcher-row");

    divDestination.appendChild(divToMove);
});