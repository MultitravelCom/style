const BannerSearchResult = () => {
    return (
        <>
            <div className='container'>
                <h1>Test</h1>
            </div>
        </>
    );
};

document.addEventListener('DOMContentLoaded', () => {
    async function crearDivYRenderizarComponente(componente) {
        let placeholder = document.querySelector('.results-list__body.js-results-list-placeholder');

        while (!placeholder) {
            await new Promise(resolve => setTimeout(resolve, 500));
            placeholder = document.querySelector('.results-list__body.js-results-list-placeholder');
        }

        const newDiv = document.createElement('div');
        placeholder.insertBefore(newDiv, placeholder.childNodes[1]);

        ReactDOM.render(componente, newDiv);
    }

    crearDivYRenderizarComponente(<BannerSearchResult />);
});