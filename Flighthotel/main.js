window.addEventListener('load', ()=>{
    let displayMaster = document.querySelector('.master-selector');
    let removeHidden = document.querySelector(".master-selector-option");
   
        removeHidden.classList.remove("hidden");
        displayMaster.style.display = 'inline-block';
});