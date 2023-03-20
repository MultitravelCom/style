window.addEventListener('load', ()=>{
  let changeIcon = document.querySelectorAll('.glyphicon-supplement');

    changeIcon.forEach(el => {
     if(el.classList.contains("glyphicon-supplement")){
           el.classList.remove("glyphicon-supplement");
           el.classList.add("glyphicon-check-whl");
     }
  });
});