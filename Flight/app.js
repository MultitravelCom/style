const BannerSearchResult = () => {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  };
  
  const waitForElement = async () => {
    while (true) {
      const parentDiv = document.querySelector('.results-list__body');
      const targetDiv = document.querySelector('.results-list__item');
  
      if (parentDiv && targetDiv) {
        const newDiv = document.createElement('div');
        targetDiv.after(newDiv);
        ReactDOM.render(<BannerSearchResult />, newDiv);
        break;
      }
  
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  waitForElement();