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
    const copyTaxRg = path.includes('/results');

    if(copyTaxRg){
        const copyTaxRegStyle = document.createElement('link');
        const copyTaxRegJs = document.createElement('script');
    
        copyTaxRegStyle.src = 'https://multitravelcom.github.io/style/General/components/CopyTaxMult209/copyTaxRg.js';
        copyTaxRegStyle.type = "text/babel";
    
        copyTaxRegJs.href = "https://multitravelcom.github.io/style/General/noResultStyle.css";
        copyTaxRegJs.rel = "stylesheet";
    
        head.appendChild(copyTaxRegStyle);
        head.appendChild(copyTaxRegJs);
    }

}
addHeaderLinks();