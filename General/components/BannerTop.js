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

            </div>
            <div id="bannerTop__center" className="main__container_center">

            </div>
            <div id="bannerTop__rigth" className="main__container_right">

            </div>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<BannerTop />);