document.addEventListener('DOMContentLoaded', () => {
    let divToMove = document.getElementById("test-card");
    let divDestination = document.getElementById("home-content-1");
  
    if (divToMove && divDestination) { // Verifica si los elementos existen
      divDestination.appendChild(divToMove);
    }
  });