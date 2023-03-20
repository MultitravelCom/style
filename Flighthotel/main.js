document.addEventListener("DOMContentLoaded", ()=>{
    const removeHidden = document.querySelectorAll(".master-selector-option");
    const displayMaster = document.querySelector(".master-selector");
   
    if(removeHidden.classList.contains("hidden")){
        removeHidden.classList.remove("hidden");
        displayMaster.style.display = 'inline-block';
    };
});