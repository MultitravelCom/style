document.addEventListener("DOMContentLoaded", ()=>{
    const flighthotel = document.querySelector('.flighthotel');
    const displayMaster =flighthotel.document.querySelector('.master-selector');
    const removeHidden = document.querySelector(".master-selector-option");
   
    if(removeHidden.classList.contains("hidden")){
        removeHidden.classList.remove("hidden");
        displayMaster.style.display = 'inline-block';
    };
});