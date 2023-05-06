function addHeaderLinks() {
    const head = document.head || document.getElementsByTagName('head')[0];

    const linkStyle = document.createElement('link');

    linkStyle.rel = 'stylesheet';
    linkStyle.href = 'https://multitravelcom.github.io/style/General/components/styleBannerTop.css';

    head.appendChild(linkStyle);
}
addHeaderLinks();

function Button(props) {

    const handleClick = (event) => {
        event.preventDefault();
        window.open(props.link, '_blank');
    }

    return (
        <button className={props.style} onClick={handleClick}>{props.text}</button>
    );
}

const BannerTop = () => {
    const showPackageImages = window.location.pathname.includes('/packages');

    return (
        <div className="container-fluid main__container__bannerTop scroll-mobile">
            <div id="bannerTop__left" className="main__container_left">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={
                            showPackageImages
                                ? 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/Paquetes/bannerDesktop-1.webp'
                                : 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-1.webp'
                        }
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1023px)"
                        srcSet={
                            showPackageImages
                                ? 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/Paquetes/bannerDesktop-1.webp'
                                : 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-1.webp'
                        }

                    />
                    <source
                        media="(max-width: 767px)"
                        srcSet={
                            showPackageImages
                                ? 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/Paquetes/bannerMobile-1.webp'
                                : 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerMobile-1.webp'
                        }
                    />
                    <img
                        alt=""
                        srcSet={
                            showPackageImages
                                ? 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/Paquetes/bannerDesktop-1.webp'
                                : 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-1.webp'
                        }
                    />
                </picture>
                {showPackageImages && (<Button style="btn btnStyleBannerPre" link="https://www.multitravel.com/venta-personalizada/brasil" text="Ver Más" />)}
            </div>
            <div id="bannerTop__center" className="main__container_center">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={
                            showPackageImages
                                ? 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/Paquetes/bannerDesktop-2.webp'
                                : 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-2.webp'
                        }
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1023px)"
                        srcSet={
                            showPackageImages
                                ? 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/Paquetes/bannerDesktop-2.webp'
                                : 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-2.webp'
                        }
                    />
                    <source
                        media="(max-width: 767px)"
                        srcSet={
                            showPackageImages
                                ? 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/Paquetes/bannerMobile-2.webp'
                                : 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerMobile-2.webp'
                        }
                    />
                    <img
                        alt=""
                        srcSet={
                            showPackageImages
                                ? 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/Paquetes/bannerDesktop-2.webp'
                                : 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-2.webp'
                        }
                    />
                </picture>
                {showPackageImages && (<Button style="btn btnStyleBannerPre" link="https://www.multitravel.com/venta-personalizada/argentina" text="Ver Más" />)};

            </div>
            <div id="bannerTop__rigth" className="main__container_right">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={
                            showPackageImages
                                ? 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/Paquetes/bannerDesktop-3.webp'
                                : 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-3.webp'
                        }
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1023px)"
                        srcSet={
                            showPackageImages
                                ? 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/Paquetes/bannerDesktop-3.webp'
                                : 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-3.webp'
                        }
                    />
                    <source
                        media="(max-width: 767px)"
                        srcSet={
                            showPackageImages
                                ? 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/Paquetes/bannerMobile-3.webp'
                                : 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerMobile-3.webp'
                        }
                    />
                    <img
                        alt=""
                        srcSet={
                            showPackageImages
                                ? 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/Paquetes/bannerDesktop-3.webp'
                                : 'https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-3.webp'
                        }
                    />
                </picture>
                {showPackageImages && (<Button style="btn btnStyleBannerPre" link="https://www.multitravel.com/venta-personalizada/argentina" text="Ver Más" />)};
            </div>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('home-content-5')).render(<BannerTop />);