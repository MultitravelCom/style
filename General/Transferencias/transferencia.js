const TransferenciaComponent = () => {

    return (
        <>
            <div className="main__transferencia container">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet="https://multitravelcom.github.io/MT/Secciones/Booking-2/ComoPagar/ImagenDesktop.webp"
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1023px)"
                        srcSet="https://multitravelcom.github.io/MT/Secciones/Booking-2/ComoPagar/ImagenTablet.webp"
                    />
                    <source
                        media="(max-width: 767px)"
                        srcSet="https://multitravelcom.github.io/MT/Secciones/Booking-2/ComoPagar/ImagenMobile.webp"
                    />
                    <img
                        alt=""
                        src="https://multitravelcom.github.io/MT/Secciones/Booking-2/ComoPagar/ImagenDesktop.webp"
                    />
                </picture>
            </div>
        </>
    );
};

ReactDOM.render(<TransferenciaComponent />, document.getElementById(".booking-payment__info.prepayment"));
