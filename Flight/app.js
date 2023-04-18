// const BannerSearchResult = () => {
//     return (
//       <div>
//         <h1>Test</h1>
//       </div>
//     );
//   };
  
  const waitForElement = async () => {
    while (true) {
      const parentDiv = document.querySelector('.results-list__body');
      const firstItemDiv = parentDiv.querySelector('.results-list__item');
      if (parentDiv && firstItemDiv) {
        const newDiv = document.createElement('div');
        newDiv.textContent = 'Nuevo div creado';
        parentDiv.insertBefore(newDiv, firstItemDiv.nextSibling);
        break;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  waitForElement();