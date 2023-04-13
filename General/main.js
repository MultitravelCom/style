
const bodyNode = document.querySelector('body');
const observerConfig = { childList: true, subtree: true };

const handleMutation = (mutationList) => {
  mutationList.forEach((mutation) => {
    const addedNodes = mutation.addedNodes;
    addedNodes.forEach((node) => {
      if (node.classList && node.classList.contains('bestprice')) {
        const newDivBestprice = document.createElement('div');
        newDivBestprice.className = 'bestprice__title';
        newDivBestprice.innerHTML = `<span>Impuestos incluidos</span>`;
        node.appendChild(newDivBestprice);
      }
    });
  });
};

const observer = new MutationObserver(handleMutation);
observer.observe(bodyNode, observerConfig);