const BannerTop = () => {
    return (
        <div className="container-fluid main__container__bannerTop">
            <div className="scroll-mobile">
                <div id="bannerTop__left" className="main__container_left">

                </div>
                <div id="bannerTop__center" className="main__container_center">

                </div>
                <div id="bannerTop__rigth" className="main__container_right">

                </div>

            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<BannerTop />);