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
    const copyTaxRg = path.includes('/flights');
    const priceFinalFlight = path.includes('onefiveb2b.juniper.es/flights/results');

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
        const priceFinalFlight = document.createElement('script');
    
        priceFinalFlight.src = 'https://multitravelcom.github.io/style/General/components/PrecioFinalFlight/finalPriceFlight.js';


        head.appendChild(priceFinalFlight);
    }

}
addHeaderLinks();