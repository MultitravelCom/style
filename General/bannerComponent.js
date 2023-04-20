const insertNewDivSearchResult = async () => {
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

insertNewDivSearchResult();

function Button(props) {

    const handleClick = (event) => {
        event.preventDefault();
        window.open(props.link, '_blank');
    }

    return (
        <button className="btnStyleBannerSearch" onClick={handleClick}>{props.text}</button>
    );
}

const BannerSearchResult = () => {
    return (
        <>
            <div className="container_fluid">
                <div className="main__container__text">
                    <h2>¿Necesitas ayuda con tu reserva?</h2>
                    <p>Contactate con nosotros a través de WhatsApp y recibí atención personalizada</p>
                </div>
                <div className="main__container__img">
                    <picture>
                        <source media="(min-width: 1024px)" srcset="https://multitravelcom.github.io/MT/Secciones/ResultadoBusqueda/busqueda.webp" />
                        <source media="(min-width: 768px) and (max-width: 1023px)" srcset="https://multitravelcom.github.io/MT/Secciones/ResultadoBusqueda/busqueda.webp" />
                        <source media="(max-width: 767px)" srcset="https://multitravelcom.github.io/MT/Secciones/ResultadoBusqueda/busqueda.webp" />
                        <img className="main__container__img__img" src="https://multitravelcom.github.io/MT/Secciones/ResultadoBusqueda/busqueda.webp" alt="Imagen banner contacto personalizado" />
                    </picture>
                </div>
                <Button link="https://wa.link/j47nea" text="Contactarme" />
            </div>
        </>
    );
};