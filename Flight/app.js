const BannerSearchResult = () => {
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