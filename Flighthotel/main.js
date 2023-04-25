// window.addEventListener('load', ()=>{
//     let displayMaster = document.querySelector('.master-selector');
//     let removeHidden = document.querySelectorAll(".master-selector-option");
    
//     removeHidden.forEach(el =>{
//         el.classList.remove("hidden")
//     });
//         displayMaster.style.display = 'inline-block';

// });

// /* MULTI-126 */

window.addEventListener('load', () => {
    let displayMaster = document.querySelector('.master-selector');
    let firstOption = displayMaster.querySelector('.master-selector-option:first-child');
    
    firstOption.classList.remove('hidden');
    displayMaster.style.display = 'inline-block';
  });