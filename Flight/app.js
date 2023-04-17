// const BannerSearchResult = () => {
//     return (
//         <div className='container'>
//             <div>
//                 <span>¿Necesitas ayuda con tu reserva?</span>
//                 <p>Contactate con nosotros a través de WhatsApp y recibí atención personalizada</p>
//             </div>
//             <div>
//                 <picture>
//                     <source media="(min-width: 1024px)" srcSet="https://multitravelcom.github.io/MT/Secciones/MediosPagos/ahora12/ahora12-01.webp" />
//                     <source media="(min-width: 768px) and (max-width: 1023px)" srcSet="https://multitravelcom.github.io/MT/Secciones/MediosPagos/ahora12/ahora12-02.webp" />
//                     <source media="(max-width: 767px)" srcSet="https://multitravelcom.github.io/MT/Secciones/MediosPagos/ahora12/ahora12-03.webp" />
//                     <img alt={`Imagen banner Ahora12`} src="https://multitravelcom.github.io/MT/Secciones/MediosPagos/ahora12/ahora12-01.webp" />
//                 </picture>
//             </div>
//             <button>contactarme</button>
//         </div>
//     );
// };

function RenderizarBannerSearchResult() {
    React.useEffect(() => {
        const placeholder = document.querySelector('.results-list__body.js-results-list-placeholder');
        const firstChild = placeholder.firstChild;
        const newDiv = document.createElement('div');
        newDiv.id = 'newDiv';
        placeholder.insertBefore(newDiv, firstChild.nextSibling);

        // Renderizar componente dentro del nuevo div
    }, []);

    return (
        <div className='container'>
            <div>
                <span>¿Necesitas ayuda con tu reserva?</span>
                <p>Contactate con nosotros a través de WhatsApp y recibí atención personalizada</p>
            </div>
            <div>
                <picture>
                    <source media="(min-width: 1024px)" srcSet="https://multitravelcom.github.io/MT/Secciones/MediosPagos/ahora12/ahora12-01.webp" />
                    <source media="(min-width: 768px) and (max-width: 1023px)" srcSet="https://multitravelcom.github.io/MT/Secciones/MediosPagos/ahora12/ahora12-02.webp" />
                    <source media="(max-width: 767px)" srcSet="https://multitravelcom.github.io/MT/Secciones/MediosPagos/ahora12/ahora12-03.webp" />
                    <img alt={`Imagen banner Ahora12`} src="https://multitravelcom.github.io/MT/Secciones/MediosPagos/ahora12/ahora12-01.webp" />
                </picture>
            </div>
            <button>contactarme</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("newDiv"));