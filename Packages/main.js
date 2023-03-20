window.addEventListener('load', ()=>{
  let changeIcon = document.querySelectorAll('.result-option-package__item-product');

    changeIcon.forEach(el => {
     if(el.classList.contains("glyphicon-supplement")){
           el.classList.remove("glyphicon-supplement");
           el.classList.add("glyphicon-check-whl");
     }
  });
});