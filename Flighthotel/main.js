document.addEventListener("DOMContentLoaded"), ()=>{
    const removeHidden = document.querySelectorAll(".master-selector-option");
   
    if(removeHidden.contains("hidden")){
        removeHidden.classList.remove("hidden");
        document.querySelector(".master-selector").style.display = 'inline-block';
    };
}