document.addEventListener("DOMContentLoaded", ()=>{
    let flighthotel = document.querySelector('.flighthotel');
    let displayMaster = flighthotel.document.querySelector('.master-selector');
    let removeHidden = document.querySelector(".master-selector-option");
   
    if(removeHidden.classList.contains("hidden")){
        removeHidden.classList.remove("hidden");
        displayMaster.style.display = 'inline-block';
    };
});