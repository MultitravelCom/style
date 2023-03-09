document.addEventListener('DOMContentLoaded', () => {
    let divToMove = document.querySelector("#home-content-1");
    let divDestination = document.getElementById("test-card");
  
        divDestination.appendChild(divToMove);

        console.log(divToMove,divDestination );
});