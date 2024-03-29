// function Button(props) {

//     const handleClick = (event) => {
//         event.preventDefault();
//         window.open(props.link, '_blank');
//     }

//     return (
//         <button className={props.style} onClick={handleClick}>{props.text}</button>
//     );
// }

function cambiarUrlImg() {
    const fechaActual = new Date();
    const fechaLimite = new Date('2023-05-10T23:59:00');
    const esAntesDeLaFechaLimite = fechaActual < fechaLimite;

    if (esAntesDeLaFechaLimite) {
        return 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/BannerA'; // Se va a mostrar. 
    } else {
        return 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/BannerB'; // Se esta mostrando.
    }
}

function scrollAncla(event, targetId) {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth",
        });
    }
}

// (event) => scrollAncla(event, null)

// ************* CUPONERA *****************************
const ToolTipButton = ({ visible }) => {
    return (
        <div className={`main_ToolTipButton ${visible ? 'visible' : ''}`}>
            <p>Copiado</p>
        </div>
    )
}
const CardCuponButtonTop = ({ textToCopy }) => {
    const [showTooltip, setShowTooltip] = React.useState(false);

    const handleCopyClick = (event) => {
        event.preventDefault();
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();

        try {
            document.execCommand('copy');
            setShowTooltip(true);
            console.log('Texto copiado al portapapeles:', textToCopy);
        } catch (error) {
            console.error('Error al copiar el texto:', error);
        }

        document.body.removeChild(textarea);

        setTimeout(() => {
            setShowTooltip(false);
        }, 2000);
    };

    return (

        <button className="cardCuponButtonStyle-bannerTop" onClick={handleCopyClick}>
            <div className="cardCuponButtonStyle__copy">
                Copiar
            </div>
            <div className="cardCuponButtonStyle__svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11.3335 8.93329V10.9333C11.3335 13.6 10.2668 14.6666 7.60016 14.6666H5.06683C2.40016 14.6666 1.3335 13.6 1.3335 10.9333V8.39996C1.3335 5.73329 2.40016 4.66663 5.06683 4.66663H7.06683" stroke="#0D4E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.3336 8.93329H9.20023C7.60023 8.93329 7.06689 8.39996 7.06689 6.79996V4.66663L11.3336 8.93329Z" stroke="#0D4E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.7334 1.33337H10.4001" stroke="#0D4E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.6665 3.33337C4.6665 2.22671 5.55984 1.33337 6.6665 1.33337H8.41317" stroke="#0D4E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.6668 5.33337V9.46004C14.6668 10.4934 13.8268 11.3334 12.7935 11.3334" stroke="#0D4E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.6665 5.33337H12.6665C11.1665 5.33337 10.6665 4.83337 10.6665 3.33337V1.33337L14.6665 5.33337Z" stroke="#0D4E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            {<ToolTipButton visible={showTooltip} />}
        </button>
    )
}
const CardCupon = () => {
    const [couponsData, setCouponsData] = React.useState([]);

    const getCouponsFetch = async () => {
        const res = await fetch('https://raw.githubusercontent.com/MultitravelCom/components/master/MULT205/cuponesDB.json');
        const data = await res.json();
        console.log(data)
        return data.cupones;
    }

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await getCouponsFetch();
            setCouponsData(data);
        };
        fetchData();
    }, []);

    return (
        <>
            {
                couponsData.map(({ id, cupon, imgBackground }) => (
                    <div className="main_cardCupon" key={id}>
                        <img className="main_cardCuponImg" srcSet={imgBackground} alt={`Cupón ${cupon}`} />
                        <h2 className="main_cardCupon_CuponCode">{cupon}</h2>
                        <CardCuponButtonTop textToCopy={cupon} />
                    </div>
                ))
            }
        </>
    )
}
const Cuponera = () => {
    return (
        <>
            <div className="grid-container">
                <CardCupon />
            </div>
        </>
    )
}
// **************TIMER***************
const shouldShowCuponera = () => {
    const startDate = new Date("2023-08-27T22:00:00");
    const endDate = new Date("2023-09-07T23:59:00");
    const now = new Date();

    return now >= startDate && now <= endDate;
};
// *************** DETECTAR URL PARA EL ID***************
function getBannerId() {
    const url = window.location.href;

    if (url.includes('/flighthotel')) {
        return 'flighthotel';
    } else {
        return 'no_flighthotel';
    }
}
// *********************************************
const BannerTop = () => {
    const [openModal, setOpenModal] = React.useState(false);


    const showHotelsCoupons = window.location.pathname.includes('/hotels');
    const showPackageImages = window.location.pathname.includes('/flighthotel/');
    const UrlImg = cambiarUrlImg();
    const UrlImgPaquetes = "https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/Paquetes";
    const isMobile = window.innerWidth <= 767;

    const bannerId = getBannerId();

    const handleBannerClick = (event) => {
        const clickedElementId = event.currentTarget.id;
        const isMobile = window.innerWidth <= 767;

        if (isMobile && clickedElementId === `bannerTop__left_no_flighthotel`) {
            setOpenModal(true);
        } else if (!isMobile && clickedElementId === `bannerTop__right_no_flighthotel`) {
            setOpenModal(true);
        }
    };

    return (
        <>
            {showHotelsCoupons && shouldShowCuponera() && (
                <div className="container main__container__CuponeraBannerTop" style={{ display: 'flex' }}>
                    <Cuponera />
                </div>
            )}

            <div className="container-fluid main__container__bannerTop scroll-mobile">
                <div id={`bannerTop__left_${bannerId}`} className="main__container_left">
                    {isMobile ? (
                        <a href={showPackageImages ? "https://ar.multitravel.com/venta-personalizada/argentina" : "https://ar.multitravel.com/hotels/"} target="_blank"
                            onClick={showPackageImages ? null : (event) => scrollAncla(event, "home-sliding-offers-2")}
                        >
                            <img className="bannerTop__img"
                                alt=""
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/bannerMobile-1.webp`
                                        : `${UrlImg}/bannerMobile-2.webp`
                                }
                            />
                        </a>
                    ) : (
                        <a href={showPackageImages ? "https://ar.multitravel.com/venta-personalizada/argentina" : "https://ar.multitravel.com/hotels/"} target="_blank"
                            onClick={showPackageImages ? null : (event) => scrollAncla(event, "home-sliding-offers-2")}
                        >
                            <picture>
                                <source
                                    media="(min-width: 1024px)"
                                    srcSet={
                                        showPackageImages
                                            ? `${UrlImgPaquetes}/bannerDesktop-1.webp`
                                            : `${UrlImg}/bannerDesktop-1.webp`
                                    }
                                />
                                <source
                                    media="(min-width: 768px) and (max-width: 1023px)"
                                    srcSet={
                                        showPackageImages
                                            ? `${UrlImgPaquetes}/bannerDesktop-1.webp`
                                            : `${UrlImg}/bannerDesktop-1.webp`
                                    }
                                />
                                <img className="bannerTop__img"
                                    alt=""
                                    srcSet={
                                        showPackageImages
                                            ? `${UrlImgPaquetes}/bannerDesktop-1.webp`
                                            : `${UrlImg}/bannerDesktop-1.webp`
                                    }
                                />
                            </picture>
                        </a>
                    )}
                    {/* {showPackageImages && (
                        <Button style="btn btnStyleBannerPre" link="https://ar.multitravel.com/venta-personalizada/caribe" text="Ver Más" />
                    )} */}
                </div>
                <div id={`bannerTop__center_${bannerId}`} className="main__container_center">
                    {isMobile ? (
                        <a href={showPackageImages ? "https://ar.multitravel.com/venta-personalizada/brasil" : "https://ar.multitravel.com/venta-personalizada/brasil"}
                            target="_blank"
                            onClick={showPackageImages ? null : null}
                        >

                            <img className="bannerTop__img"
                                alt=""
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/bannerMobile-2.webp`
                                        : `${UrlImg}/bannerMobile-1.webp`
                                }
                            />
                        </a>
                    ) : (
                        <a href={showPackageImages ? "https://ar.multitravel.com/venta-personalizada/brasil" : "https://ar.multitravel.com/venta-personalizada/brasil"}
                            target="_blank"
                            onClick={showPackageImages ? null : null}
                        >
                            <picture>
                                <source
                                    media="(min-width: 1024px)"
                                    srcSet={
                                        showPackageImages
                                            ? `${UrlImgPaquetes}/bannerDesktop-2.webp`
                                            : `${UrlImg}/bannerDesktop-2.webp`
                                    }
                                />
                                <source
                                    media="(min-width: 768px) and (max-width: 1023px)"
                                    srcSet={
                                        showPackageImages
                                            ? `${UrlImgPaquetes}/bannerDesktop-2.webp`
                                            : `${UrlImg}/bannerDesktop-2.webp`
                                    }
                                />
                                <img className="bannerTop__img"
                                    alt=""
                                    srcSet={
                                        showPackageImages
                                            ? `${UrlImgPaquetes}/bannerDesktop-2.webp`
                                            : `${UrlImg}/bannerDesktop-2.webp`
                                    }
                                />
                            </picture>
                        </a>
                    )}
                    {/* {showPackageImages && (
                        <Button style="btn btnStyleBannerPre" link={showPackageImages ? "https://ar.multitravel.com/venta-personalizada/argentina" : "https://ar.multitravel.com/venta-personalizada/argentina"} text="Ver Más" />
                    )} */}
                </div>
                <div id={`bannerTop__right_${bannerId}`} className="main__container_right">
                    {isMobile ? (
                        <a href={showPackageImages ? "https://ar.multitravel.com/venta-personalizada/caribe" : null} target="_blank"
                            onClick={showPackageImages ? null : null}
                        >
                            <img className="bannerTop__img"
                                alt=""
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/bannerMobile-3.webp`
                                        : `${UrlImg}/bannerMobile-3.webp`
                                }
                            />
                        </a>
                    ) : (
                        <a href={showPackageImages ? "https://ar.multitravel.com/venta-personalizada/caribe" : null} target="_blank"
                            onClick={showPackageImages ? null : null}
                        >
                            <picture>
                                <source
                                    media="(min-width: 1024px)"
                                    srcSet={
                                        showPackageImages
                                            ? `${UrlImgPaquetes}/bannerDesktop-3.webp`
                                            : `${UrlImg}/bannerDesktop-3.webp`
                                    }
                                />
                                <source
                                    media="(min-width: 768px) and (max-width: 1023px)"
                                    srcSet={
                                        showPackageImages
                                            ? `${UrlImgPaquetes}/bannerDesktop-3.webp`
                                            : `${UrlImg}/bannerDesktop-3.webp`
                                    }
                                />
                                <img className="bannerTop__img"
                                    alt=""
                                    srcSet={
                                        showPackageImages
                                            ? `${UrlImgPaquetes}/bannerDesktop-3.webp`
                                            : `${UrlImg}/bannerDesktop-3.webp`
                                    }
                                />
                            </picture>
                        </a>
                    )}
                    {/* {showPackageImages && (
                        <Button style="btn btnStyleBannerPre" link={showPackageImages ? "https://ar.multitravel.com/venta-personalizada/brasil" : "https://ar.multitravel.com/venta-personalizada/brasil"} text="Ver Más" />
                    )} */}
                </div>
                <Modal open={openModal} onClose={() => setOpenModal(false)} />
            </div>

        </>
    )
}
ReactDOM.createRoot(document.getElementById('home-content-5')).render(<BannerTop />);
