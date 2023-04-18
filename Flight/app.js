const BannerSearchResult = () => {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  };
  
  const App = () => {
    useEffect(() => {
      const placeholder = document.querySelector('.results-list__body.js-results-list-placeholder');
  
      if (placeholder) {
        const newDiv = document.createElement('div');
        placeholder.insertBefore(newDiv, placeholder.childNodes[1]);
        ReactDOM.render(<BannerSearchResult />, newDiv);
      }
    }, []);
  
    return (
      <div>
        <div className="results-list__body js-results-list-placeholder"></div>
      </div>
    );
  };
  