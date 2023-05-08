const taxesCopy = document.querySelectorAll('.results-list__page');

taxesCopy.forEach(element => {
    taxesCopy.textContent = 'Incluyen el impuesto país y las percepciones';
    taxesCopy.classList.add('display', 'inblock');
});