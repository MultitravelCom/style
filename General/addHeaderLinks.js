function addHeaderLinks() {
    const head = document.head || document.getElementsByTagName('head')[0];

    const bannerNoResultStyle = document.createElement('link');
    const bannerNoResult = document.createElement('script');

    bannerNoResult.src = 'https://multitravelcom.github.io/style/General/bannerNoResult.js';
    bannerNoResult.type = "text/babel";

    bannerNoResultStyle.href = "https://multitravelcom.github.io/style/General/noResultStyle.css";
    bannerNoResultStyle.rel = "stylesheet";

    head.appendChild(bannerNoResultStyle);
    head.appendChild(bannerNoResult);


    const path = window.location.pathname;
    const copyTaxRg = path.includes('/flights') || path.includes('/booking/');
    const priceFinalFlight = path.includes('/results');
    const bannerTop = path.includes('/results') || path.includes('/booking/');

    if(copyTaxRg){
        const copyTaxRegStyle = document.createElement('link');
        const copyTaxRegJs = document.createElement('script');
    
        copyTaxRegJs.src = 'https://multitravelcom.github.io/style/General/components/CopyTaxMult209/copyTaxRg.js';
    
        copyTaxRegStyle.href = "https://multitravelcom.github.io/style/General/components/CopyTaxMult209/copyTaxRgStyle.css";
        copyTaxRegStyle.rel = "stylesheet";
    
        head.appendChild(copyTaxRegStyle);
        head.appendChild(copyTaxRegJs);
    }

    if(priceFinalFlight){
        const priceFinalFlightScript = document.createElement('script');
    
        priceFinalFlightScript.src = 'https://multitravelcom.github.io/style/General/components/PrecioFinalFlight/finalPriceFlight.js';


        head.appendChild(priceFinalFlightScript);
    }

    if(!bannerTop){
        const bannerTopStyle = document.createElement('link');
        const bannerTopScript = document.createElement('script');
    
        bannerTopScript.src = 'https://multitravelcom.github.io/style/General/components/BannerTop.js';
        bannerTopScript.type = "text/babel";
    
        bannerTopStyle.href = "https://multitravelcom.github.io/style/General/components/styleBannerTop.css";
        bannerTopStyle.rel = "stylesheet";
    
        head.appendChild(bannerTopStyle);
        head.appendChild(bannerTopScript);
    }

    
    // if(cuponSeccion){
    //     const cuponSeccionScript = document.createElement('script');
    //     const cuponSeccionStyle = document.createElement('link');

    //     cuponSeccionScript.src = 'https://multitravelcom.github.io/style/General/components/CuponSeccion/cuponSeccion.js';

    
    //     cuponSeccionStyle.href = "https://multitravelcom.github.io/style/General/components/CuponSeccion/cuponSeccion.css";
    //     cuponSeccionStyle.rel = "stylesheet";

    //     head.appendChild(cuponSeccionStyle);
    //     head.appendChild(cuponSeccionScript);
    // }

}
addHeaderLinks();



