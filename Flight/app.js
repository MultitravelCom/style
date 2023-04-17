const BannerSearchResult = () => {
    return (
        <>
            <h1>Test</h1>
        </>
    );
};

document.addEventListener('DOMContentLoaded', () => {
    async function crearDivYRenderizarComponente(componente) {
        let placeholder = document.querySelector('.js-results-list-placeholder');

        while (!placeholder) {
            await new Promise(resolve => setTimeout(resolve, 500));
            placeholder = document.querySelector('.js-results-list-placeholder');
        }

        const newDiv = document.createElement('div');
        placeholder.insertBefore(newDiv, placeholder.childNodes[1]);

        ReactDOM.render(componente, newDiv);
    }

    crearDivYRenderizarComponente(<BannerSearchResult />);
});