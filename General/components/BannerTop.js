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
        return 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal';
    } else {
        return 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerHotWeek/';
    }
}

const BannerTop = () => {

    const showPackageImages = window.location.pathname.includes('/packages');
    const UrlImg = cambiarUrlImg();

    return (
        <>
            <div className="container-fluid main__container__bannerTop scroll-mobile">
                <div id="bannerTop__left" className="main__container_left">
                    <picture>
                        <source
                            media="(min-width: 1024px)"
                            srcSet={
                                showPackageImages
                                    ? `${UrlImg}/Paquetes/bannerDesktop-1.webp`
                                    : `${UrlImg}/bannerDesktop-1.webp`
                            }
                        />
                        <source
                            media="(min-width: 768px) and (max-width: 1023px)"
                            srcSet={
                                showPackageImages
                                    ? `${UrlImg}/Paquetes/bannerDesktop-1.webp`
                                    : `${UrlImg}/bannerDesktop-1.webp`
                            }

                        />
                        <source
                            media="(max-width: 767px)"
                            srcSet={
                                showPackageImages
                                    ? `${UrlImg}/Paquetes/bannerMobile-1.webp`
                                    : `${UrlImg}/bannerMobile-1.webp`
                            }
                        />
                        <img className="bannerTop__img"
                            alt=""
                            srcSet={
                                showPackageImages
                                    ? `${UrlImg}/Paquetes/bannerDesktop-1.webp`
                                    : `${UrlImg}/bannerDesktop-1.webp`
                            }
                        />
                    </picture>
                    {showPackageImages && (<Button style="btn btnStyleBannerPre" link="https://www.multitravel.com/venta-personalizada/argentina" text="Ver Más" />)}
                </div>
                <div id="bannerTop__center" className="main__container_center">
                    <picture>
                        <source
                            media="(min-width: 1024px)"
                            srcSet={
                                showPackageImages
                                    ? `${UrlImg}/Paquetes/bannerDesktop-2.webp`
                                    : `${UrlImg}/bannerDesktop-2.webp`
                            }
                        />
                        <source
                            media="(min-width: 768px) and (max-width: 1023px)"
                            srcSet={
                                showPackageImages
                                    ? `${UrlImg}/Paquetes/bannerDesktop-2.webp`
                                    : `${UrlImg}/bannerDesktop-2.webp`
                            }
                        />
                        <source
                            media="(max-width: 767px)"
                            srcSet={
                                showPackageImages

                                    ? `${UrlImg}/Paquetes/bannerMobile-2.webp`
                                    : `${UrlImg}/bannerMobile-2.webp`
                            }
                        />
                        <img className="bannerTop__img"
                            alt=""
                            srcSet={
                                showPackageImages
                                    ? `${UrlImg}/Paquetes/bannerDesktop-2.webp`
                                    : `${UrlImg}/bannerDesktop-2.webp`
                            }
                        />
                    </picture>
                    {showPackageImages && (<Button style="btn btnStyleBannerPre" link="https://www.multitravel.com/venta-personalizada/argentina" text="Ver Más" />)}

                </div>
                <div id="bannerTop__rigth" className="main__container_right">
                    <picture>
                        <source
                            media="(min-width: 1024px)"
                            srcSet={
                                showPackageImages
                                    ? `${UrlImg}/Paquetes/bannerDesktop-3.webp`
                                    : `${UrlImg}/bannerDesktop-3.webp`
                            }
                        />
                        <source
                            media="(min-width: 768px) and (max-width: 1023px)"
                            srcSet={
                                showPackageImages
                                    ? `${UrlImg}/Paquetes/bannerDesktop-3.webp`
                                    : `${UrlImg}/bannerDesktop-3.webp`
                            }
                        />
                        <source
                            media="(max-width: 767px)"
                            srcSet={
                                showPackageImages
                                    ? `${UrlImg}/Paquetes/bannerMobile-3.webp`
                                    : `${UrlImg}/bannerMobile-3.webp`
                            }
                        />
                        <img className="bannerTop__img"
                            alt=""
                            srcSet={
                                showPackageImages
                                    ? `${UrlImg}/Paquetes/bannerDesktop-3.webp`
                                    : `${UrlImg}/bannerDesktop-3.webp`
                            }
                        />
                    </picture>
                    {showPackageImages && (<Button style="btn btnStyleBannerPre" link="https://www.multitravel.com/venta-personalizada/brasil" text="Ver Más" />)};
                </div>
            </div>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('home-content-5')).render(<BannerTop />);