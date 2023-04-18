const BannerSearchResult = () => {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  };
  
  const waitForElement = async () => {
    while (true) {
      const totalLineDiv = document.querySelector('.results-list__body');
      const conceptDiv = document.querySelector('.results-list__item').nextSibling;
      if (totalLineDiv && conceptDiv) {
        const newSpan = document.createElement('span');
        newSpan.className = 'flight-selection__breakdown-concept';
        newSpan.textContent = 'TEST';
        totalLineDiv.insertBefore(newSpan, totalLineDiv.firstChild);
        break;
      }
      
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  waitForElement();
  