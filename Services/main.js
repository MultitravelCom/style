document.addEventListener('DOMContentLoaded', () => {
    let divToMove = document.getElementsByClassName("sliding-offers-v3");
    let divDestination = document.getElementById("test-card");
  
        divDestination.appendChild(divToMove);
  });