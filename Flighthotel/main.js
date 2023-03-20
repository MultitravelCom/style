window.addEventListener('load', ()=>{
    let displayMaster = document.querySelector('.master-selector');
    let removeHidden = document.querySelectorAll(".master-selector-option");
    
    removeHidden.forEach(el =>{
        el.classList.remove("hidden")
    });
        displayMaster.style.display = 'inline-block';

        // ***********************************************************************************

        let changeIcon = document.querySelector('.result-option-package__item-product');

        changeIcon.forEach(el => {
         if(el.classList.contains("glyphicon-supplement")){
               el. classList.remove("glyphicon-supplement");
               el.classList.add("glyphicon-check-whl");
         }
      });

});