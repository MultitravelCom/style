// Seleccionar el elemento padre que contiene todos los elementos 'bestprice'
let parentElement = document.body; // por ejemplo, aquí se está seleccionando el body, pero podría ser cualquier otro elemento

// Crear un observer para detectar cambios en el DOM
let observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    // Verificar si se agregó un nuevo elemento con la clase 'bestprice'
    let newDivBestprice = mutation.target.querySelector('.bestprice');
    if (newDivBestprice) {
      // Agregar el nuevo elemento al elemento 'bestprice'
      let titleElement = document.createElement('div');
      titleElement.className = 'bestprice__title';
      titleElement.innerHTML = '<span>Impuestos incluidos</span>';
      newDivBestprice.appendChild(titleElement);
    }
  });
});

// Configurar el observer para observar cambios en el elemento padre y sus hijos
let observerConfig = { childList: true, subtree: true };
observer.observe(parentElement, observerConfig);