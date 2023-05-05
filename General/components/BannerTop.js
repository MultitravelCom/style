function addHeaderLinks() {
    const head = document.head || document.getElementsByTagName('head')[0];

    const linkStyle = document.createElement('link');

    linkStyle.rel = 'stylesheet';
    linkStyle.href = 'https://multitravelcom.github.io/style/General/components/styleBannerTop.css';

    head.appendChild(linkStyle);
}
addHeaderLinks();

const BannerTop = () => {
    return (
        <div className="container-fluid main__container__bannerTop scroll-mobile">
            <div id="bannerTop__left" className="main__container_left">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet="https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-1.webp"
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1023px)"
                        srcSet="https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-1.webp"
                    />
                    <source
                        media="(max-width: 767px)"
                        srcSet="https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerMobile-1.webp"
                    />
                    <img
                        alt=""
                        src="https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-1.webp"
                    />
                </picture>
            </div>
            <div id="bannerTop__center" className="main__container_center">
            <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet="https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-2.webp"
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1023px)"
                        srcSet="https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-2.webp"
                    />
                    <source
                        media="(max-width: 767px)"
                        srcSet="https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerMobile-2.webp"
                    />
                    <img
                        alt=""
                        src="https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-2.webp"
                    />
                </picture>
            </div>
            <div id="bannerTop__rigth" className="main__container_right">
            <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet="https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-3.webp"
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1023px)"
                        srcSet="https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-3.webp"
                    />
                    <source
                        media="(max-width: 767px)"
                        srcSet="https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerMobile-3.webp"
                    />
                    <img
                        alt=""
                        src="https://multitravelcom.github.io/MT/Secciones/BannerPrincipal/bannerDesktop-3.webp"
                    />
                </picture>
            </div>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('home-content-5')).render(<BannerTop />);