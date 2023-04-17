window.addEventListener('load', () => {
    // Mover div fuera del mas opciones.
    let divToMove = document.getElementsByClassName("checkbox")[0];
    let divDestination = document.getElementsByClassName("singledestination-only")[0];

    divDestination.appendChild(divToMove);
    //    Cambio de copy de Multiple vuelos a multiple destinos.
    document.getElementById("flight-searcher-roundtrip-multi").nextSibling.nodeValue = "Multidestino";
    document.querySelector('.radio').style.display = 'inline-block';

    // Cambiar texto al btn filtrar y agregar un icons.

    const textBtn = document.querySelector('.btn-tertiary');
    textBtn.textContent = 'Filtrar';

    document.querySelector('.results-list__filter-toggle-wrapper').style.display = 'inline-block';

    const breakpoint = window.matchMedia('(max-width: 992px)');

    function aplicarEstilos() {
        if (breakpoint.matches) {
            document.querySelector('.results-list__filter-toggle-wrapper').style.display = 'inline-block';
        } else {
            document.querySelector('.results-list__filter-toggle-wrapper').style.display = 'none';
        }
    };

    aplicarEstilos();

    window.addEventListener('resize', aplicarEstilos);

});

const BannerSearchResult = () => {
    return (
        <>
            <div className='container'>
                <div className=''>
                    <span>¿Necesitas ayuda con tu reserva?</span>
                    <p>Contactate con nosotros a través de WhatsApp y recibí atención personalizada</p>
                </div>
                <div className=''>
                    <source media="(min-width: 1024px)" srcSet="https://multitravelcom.github.io/MT/Secciones/MediosPagos/ahora12/ahora12-01.webp" />
                    <source media="(min-width: 768px) and (max-width: 1023px)" srcSet="https://multitravelcom.github.io/MT/Secciones/MediosPagos/ahora12/ahora12-02.webp" />
                    <source media="(max-width: 767px)" srcSet="https://multitravelcom.github.io/MT/Secciones/MediosPagos/ahora12/ahora12-03.webp" />
                    <img alt={`Imagen banner Ahora12`} src="https://multitravelcom.github.io/MT/Secciones/MediosPagos/ahora12/ahora12-01.webp" />
                </div>
                <button>contactarme</button>
            </div>
        </>
    )
};

function RenderizarBannerSearchResult() {
    React.useEffect(() => {
        const placeholder = document.querySelector('.results-list__body.js-results-list-placeholder');
        const firstChild = placeholder.firstChild;
        const newDiv = document.createElement('div');
        placeholder.insertBefore(newDiv, firstChild.nextSibling);

        // Renderizar componente dentro del nuevo div
        ReactDOM.render(<BannerSearchResult />, newDiv);
    }, []);

    return <div />;
}
