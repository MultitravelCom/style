const taxesCopy = document.querySelectorAll('.bestprice__taxincluded');

taxesCopy.forEach(element => {
    taxesCopy.textContent = 'Incluyen el impuesto país y las percepciones';
    taxesCopy.classList.add('display', 'inblock');
});