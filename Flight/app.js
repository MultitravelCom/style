const BannerSearchResult = () => {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  };
  
  const ExampleComponent = () => {
    const [shouldRender, setShouldRender] = React.useState(false);
  
    React.useEffect(() => {
      const checkForElements = () => {
        const totalLineDiv = document.querySelector(".results-list__body");
        const conceptDiv = document.querySelector(".results-list__item").nextElementSibling;
        if (totalLineDiv && conceptDiv) {
          setShouldRender(true);
        } else {
          setTimeout(checkForElements, 100);
        }
      };
      checkForElements();
    }, []);
  
    return shouldRender ? (
      <div className="results-list__body">
        <span className="flight-selection__breakdown-concept">TEST</span>
      </div>
    ) : null;
  };