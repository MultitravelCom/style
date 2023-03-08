document.addEventListener('DOMContentLoaded', () => {
    let divToMove = document.getElementById("home-sliding-offers-2");
    let divDestination = document.getElementById("test-card");
  
    if (divToMove && divDestination) { // Verifica si los elementos existen
      divDestination.appendChild(divToMove);
    }
  });