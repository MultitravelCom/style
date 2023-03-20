document.addEventListener("DOMContentLoaded", ()=>{
    const removeHidden = document.getElementsByClassName("master-selector-option");
    const displayMaster = document.getElementsByClassName("master-selector");
   
    if(removeHidden.classList.contains("hidden")){
        removeHidden.classList.remove("hidden");
        displayMaster.style.display = 'inline-block';
    };
});