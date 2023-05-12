const TransferenciaComponent = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    return (
        <>
            {isVisible && (
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
            )}
        </>
    );
};

const paymentInfoContainers = document.querySelectorAll('.booking-payment__info');
const secondPaymentInfoContainer = paymentInfoContainers[1];

document.querySelector('#mostrar-pago-btn').addEventListener('click', function () {
    if (!secondPaymentInfoContainer.classList.contains('hidden')) {
        setIsVisible(true);
    }
});

ReactDOM.render(<TransferenciaComponent />, secondPaymentInfoContainer);
