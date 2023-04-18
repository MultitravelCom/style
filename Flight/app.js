const BannerSearchResult = () => {
    return (
        <>
            <div className="container">
                <div>
                    <h2>¿Necesitas ayuda con tu reserva?</h2>
                    <p>Contactate con nosotros a través de WhatsApp y recibí atención personalizada</p>
                </div>
                <div>
                    <picture>
                        <source media="(min-width: 1024px)" srcset="https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/barilo-1.jpg" />
                        <source media="(min-width: 768px) and (max-width: 1023px)" srcset="https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/barilo-2.jpg" />
                        <source media="(max-width: 767px)" srcset="https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/barilo-3.jpg" />
                        <img id="a1" src="https://multitravelcom.github.io/MT/TravelSale2023/LandingOFF/Nacional/barilo-1.jpg" alt="Imagen banner Bariloche promo" />
                    </picture>
                </div>
                <button className="btnStyleBannerSearch">Contactarme</button>
            </div>
        </>
    );
};

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