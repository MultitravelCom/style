document.addEventListener('DOMContentLoaded', () => {
    let divToMove = document.getElementsByClassName("sliding-offers-v3");
    let divDestination = document.getElementById("test-card");
  
    if (divToMove && divDestination) { // Verifica si los elementos existen
      divDestination.appendChild(divToMove);
    }
  });