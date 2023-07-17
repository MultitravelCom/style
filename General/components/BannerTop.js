function Button(props) {

    const handleClick = (event) => {
        event.preventDefault();
        window.open(props.link, '_blank');
    }

    return (
        <button className={props.style} onClick={handleClick}>{props.text}</button>
    );
}

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

const BannerTop = () => {

    const showPackageImages = window.location.pathname.includes('/packages');
    const UrlImg = cambiarUrlImg();
    const UrlImgPaquetes = cambiarUrlImg();
    const isMobile = window.innerWidth <= 767;

    return (
        <>
            <div className="container-fluid main__container__bannerTop scroll-mobile">
                <div id="bannerTop__left" className="main__container_left">
                    {isMobile ? (
                        // <a href="https://www.example.com/mobile-link" target="_blank">
                        <img className="bannerTop__img"
                            alt=""
                            srcSet={
                                showPackageImages
                                    ? `${UrlImgPaquetes}/Paquetes/bannerMobile-1.webp`
                                    : `${UrlImg}/bannerMobile-2.webp`
                            }
                        />
                        // </a>
                    ) : (
                        <a href="https://www.multitravel.com/venta-personalizada/argentina" target="_blank">
                            <picture>
                                <source
                                    media="(min-width: 1024px)"
                                    srcSet={
                                        showPackageImages
                                            ? `${UrlImgPaquetes}/Paquetes/bannerDesktop-1.webp`
                                            : `${UrlImg}/bannerDesktop-1.webp`
                                    }
                                />
                                <source
                                    media="(min-width: 768px) and (max-width: 1023px)"
                                    srcSet={
                                        showPackageImages
                                            ? `${UrlImgPaquetes}/Paquetes/bannerDesktop-1.webp`
                                            : `${UrlImg}/bannerDesktop-1.webp`
                                    }
                                />
                                <img className="bannerTop__img"
                                    alt=""
                                    srcSet={
                                        showPackageImages
                                            ? `${UrlImgPaquetes}/Paquetes/bannerDesktop-1.webp`
                                            : `${UrlImg}/bannerDesktop-1.webp`
                                    }
                                />
                            </picture>
                        </a>
                    )}
                    {showPackageImages && (
                        <Button style="btn btnStyleBannerPre" link="https://www.multitravel.com/venta-personalizada/caribe" text="Ver Más" />
                    )}
                </div>
                <div id="bannerTop__center" className="main__container_center">
                    {isMobile ? (
                        <a href={"https://www.multitravel.com/venta-personalizada/argentina"} target="_blank">
                            <img className="bannerTop__img"
                                alt=""
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/Paquetes/bannerMobile-2.webp`
                                        : `${UrlImg}/bannerMobile-1.webp`
                                }
                            />
                        </a>
                    ) : (
                        // <a href="https://www.multitravel.com/venta-personalizada/argentina" target="_blank">
                        <picture>
                            <source
                                media="(min-width: 1024px)"
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/Paquetes/bannerDesktop-2.webp`
                                        : `${UrlImg}/bannerDesktop-2.webp`
                                }
                            />
                            <source
                                media="(min-width: 768px) and (max-width: 1023px)"
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/Paquetes/bannerDesktop-2.webp`
                                        : `${UrlImg}/bannerDesktop-2.webp`
                                }
                            />
                            <img className="bannerTop__img"
                                alt=""
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/Paquetes/bannerDesktop-2.webp`
                                        : `${UrlImg}/bannerDesktop-2.webp`
                                }
                            />
                        </picture>
                        // </a>
                    )}
                    {showPackageImages && (
                        <Button style="btn btnStyleBannerPre" link={showPackageImages ? "https://www.multitravel.com/venta-personalizada/argentina" : "https://www.multitravel.com/venta-personalizada/argentina"} text="Ver Más" />
                    )}
                </div>
                <div id="bannerTop__right" className="main__container_right">
                    {isMobile ? (
                        // <a href={"https://www.multitravel.com/venta-personalizada/brasil"} target="_blank">
                            <img className="bannerTop__img"
                                alt=""
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/Paquetes/bannerMobile-3.webp`
                                        : `${UrlImg}/bannerMobile-3.webp`
                                }
                            />
                        // </a>
                    ) : (
                        // <a href="https://www.multitravel.com/venta-personalizada/argentina" target="_blank">
                        <picture>
                            <source
                                media="(min-width: 1024px)"
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/Paquetes/bannerDesktop-3.webp`
                                        : `${UrlImg}/bannerDesktop-3.webp`
                                }
                            />
                            <source
                                media="(min-width: 768px) and (max-width: 1023px)"
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/Paquetes/bannerDesktop-3.webp`
                                        : `${UrlImg}/bannerDesktop-3.webp`
                                }
                            />
                            <img className="bannerTop__img"
                                alt=""
                                srcSet={
                                    showPackageImages
                                        ? `${UrlImgPaquetes}/Paquetes/bannerDesktop-3.webp`
                                        : `${UrlImg}/bannerDesktop-3.webp`
                                }
                            />
                        </picture>
                        // </a>
                    )}
                    {showPackageImages && (
                        <Button style="btn btnStyleBannerPre" link={showPackageImages ? "https://www.multitravel.com/venta-personalizada/brasil" : "https://www.multitravel.com/venta-personalizada/brasil"} text="Ver Más" />
                    )}
                </div>
            </div>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('home-content-5')).render(<BannerTop />);
