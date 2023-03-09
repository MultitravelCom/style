document.addEventListener('DOMContentLoaded', () => {
    let divToMove = document.querySelector(".sliding-offers-v3");
    let divDestination = document.getElementById("test-card");
  
        divDestination.appendChild(divToMove);

        console.log(divToMove,divDestination );
});