const insertNewDivSearchResultFlight = async () => {
    while (true) {
        const parentDiv = document.querySelector('.results-list__body');
        const firstChdtDiv = document.querySelector('.results-list__item');

        if (parentDiv && firstChdtDiv) {
            const newDiv = document.createElement('div');
            firstChdtDiv.after(newDiv);
            ReactDOM.render(<BannerSearchResult />, newDiv);
            break;
        }

        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

insertNewDivSearchResultFlight();