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


    const copyTaxRg = path.includes('/flights') || path.includes('/booking/') || path.includes('/hotels/');
    if (copyTaxRg) {
        const copyTaxRegStyle = document.createElement('link');
        const copyTaxRegJs = document.createElement('script');

        copyTaxRegJs.src = 'https://multitravelcom.github.io/style/General/components/CopyTaxMult209/copyTaxRg.js';

        copyTaxRegStyle.href = "https://multitravelcom.github.io/style/General/components/CopyTaxMult209/copyTaxRgStyle.css";
        copyTaxRegStyle.rel = "stylesheet";

        head.appendChild(copyTaxRegStyle);
        head.appendChild(copyTaxRegJs);
    }
    const copyTaxRgComponent = path.includes('/flights/results');

    // if (copyTaxRgComponent) {
    //     const copyTaxRgComponentJs = document.createElement('script');
    //     copyTaxRgComponentJs.src = 'https://multitravelcom.github.io/style/General/components/CopyTaxMult209/copyTaxRgComponent.js';
    //     copyTaxRgComponentJs.type = "text/babel";

    //     head.appendChild(copyTaxRgComponentJs);
    // }

    const priceFinalFlight = path.includes('/results');
    if (priceFinalFlight) {
        const priceFinalFlightScript = document.createElement('script');

        priceFinalFlightScript.src = 'https://multitravelcom.github.io/style/General/components/PrecioFinalFlight/finalPriceFlight.js';


        head.appendChild(priceFinalFlightScript);
    }
    const bannerTop = path.includes('/results') || path.includes('/booking/');
    if (!bannerTop) {
        const bannerTopStyle = document.createElement('link');
        // const bannerTopScript = document.createElement('script');

        // bannerTopScript.src = 'https://multitravelcom.github.io/style/General/components/BannerTop.js';
        // bannerTopScript.type = "text/babel";

        bannerTopStyle.href = "https://multitravelcom.github.io/style/General/components/styleBannerTop.css";
        bannerTopStyle.rel = "stylesheet";

        head.appendChild(bannerTopStyle);
        // head.appendChild(bannerTopScript);
    }

    const recomendadoHotels = path.includes('/hotels/');
    if (recomendadoHotels) {
        const recomendadoHotelsStyle = document.createElement('link');
        const recomendadoHotelsJs = document.createElement('script');

        recomendadoHotelsJs.src = 'https://multitravelcom.github.io/style/General/components/RecomendadoHotels/recomendadosHotels.js';

        recomendadoHotelsStyle.href = "https://multitravelcom.github.io/style/General/components/RecomendadoHotels/recomendadosHotels.css";
        recomendadoHotelsStyle.rel = "stylesheet";

        head.appendChild(recomendadoHotelsStyle);
        head.appendChild(recomendadoHotelsJs);
    }

    const copyBaggage = path.includes('/flights/booking');
    if (copyBaggage) {
        const copyBaggageStyle = document.createElement('link');
        const copyBaggageScript = document.createElement('script');

        copyBaggageScript.src = 'https://multitravelcom.github.io/style/General/components/Equipaje/baggageComponente.js';
        copyBaggageScript.type = "text/babel";

        copyBaggageStyle.href = "https://multitravelcom.github.io/style/General/components/Equipaje/baggageComponenteStyle.css";
        copyBaggageStyle.rel = "stylesheet";

        head.appendChild(copyBaggageScript);
        head.appendChild(copyBaggageStyle);
    }

    // ******************************** MULT-258 ****************************************************************

    if (path.includes('/results') || path.includes('/details') || path.includes('/flights/booking') || path.includes('/hotels/booking') || path.includes('/booking')) {
        const metaTag = document.createElement('meta');
        metaTag.name = 'robots';
        metaTag.content = 'noindex';

        const headElement = document.getElementsByTagName('head')[0];
        headElement.appendChild(metaTag);
    }

}
addHeaderLinks();
// ***********************************MULT-287 /Ocultar nacionalidad*************************
function ocultarNacionalidad() {
    const element = document.querySelector('label[for="hotel-searcher-nationality"]');
    const parent = element.closest('.col-xs-12.col-sm-12.col-md-3');
    parent.style.display = 'none';

    if (window.innerWidth >= 768) {
        const elementFixedProduct = document.querySelector('.searcher__fixed-product');
        const parentFixedProduct = elementFixedProduct.closest('.col-xs-12.col-sm-12.col-md-3');
        parentFixedProduct.style.width = '50%';
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    ocultarNacionalidad()
});

// **************** MULT-317 **********************************************************

function verificarYActualizarMeta() {
    let metaTag = document.querySelector('meta[property="og:image"]');

    if (metaTag) {

        metaTag.setAttribute("content", "https://multitravelcom.github.io/MT/multitravel.webp");
    } else {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("property", "og:image");
        metaTag.setAttribute("content", "https://multitravelcom.github.io/MT/multitravel.webp");

        let head = document.querySelector("head");
        head.appendChild(metaTag);
    }
}
function ocultarWhatsAppFixesHotels() {
    if (window.location.href.includes('/hotels/results') || window.location.href.includes('/flights/results')) {
        const elemento = document.querySelector('.whatsAppFixes');
        if (elemento) {
            if (window.innerWidth <= 768) {
                elemento.style.display = 'none';
            } else {
                elemento.style.display = 'block';
            }
        }
    }
}

function ocultarSuplementosAmichi() {
    let elements = document.querySelectorAll('.booking-data__section.booking-data__supplements.js-hotel-supplements-placeholder');

    if (elements) {
        elements.forEach(function(element) {
            console.los("Se encontraron elementos para ocultar.")
            element.style.display = 'none';
        });
    } else {
        console.log('No se encontraron elementos para ocultar.');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    verificarYActualizarMeta();
    ocultarWhatsAppFixesHotels();
    ocultarSuplementosAmichi();
});

//************************************ MULT-213*************************************************************** */
window.addEventListener('load', () => {

    let buttonNewsletter = document.querySelector('button[data-target="#-newsletter-container"]');
    let divNewsletter = buttonNewsletter.querySelector('.quicklink-elem-label');

    divNewsletter.textContent = 'Suscribite a nuestro Newsletter ';

    let modalNewsletter = document.querySelector('#-newsletter-container');
    let titleNewsletter = modalNewsletter.querySelector('.content-title');

    titleNewsletter.textContent = 'Suscribite a nuestro Newsletter ';
});

//*************************************************************************************************** */
// Desabilitar Script mailchimp en mobile.
function disableMailchimpMobile() {
    function isScreenResolutionAboveThreshold(thresholdWidth) {
        return window.innerWidth >= thresholdWidth;
    }

    // Obtener el elemento de script por su ID
    let scriptElement = document.getElementById("mcjs");

    if (scriptElement && !isScreenResolutionAboveThreshold(768)) {
        scriptElement.setAttribute("async", "true"); // Deshabilitar la ejecución del script
    }
    // *****************************************************
    const linkElement = document.createElement('link');

    linkElement.setAttribute('rel', 'alternate');
    linkElement.setAttribute('hreflang', 'es-ar');
    linkElement.setAttribute('href', 'https://ar.multitravel.com');


    document.head.appendChild(linkElement);
}

disableMailchimpMobile();
// ***********************************************************************
document.addEventListener('DOMContentLoaded', function () {
    function cambiarHrefNavBar() {
        const linkFlightsNav = document.querySelector('#menu-option-flights');
        if (linkFlightsNav) {
            linkFlightsNav.href = "https://multitravel.com.ar/flights";
        }
    }

    function cambiarHrefNavBarPaquetes() {
        const linkFlightsNav = document.querySelector('#menu-option-trips');
        if (linkFlightsNav) {
            linkFlightsNav.href = "https://multitravel.com.ar/paquetes-turisticos";
        }
    }

    function cambiarHreLogoHeader() {
        const linkHrefAloja = document.querySelector('#logo');
        if (linkHrefAloja) {
            linkHrefAloja.href = "https://multitravel.com.ar/";
        }
    }

    function cambiarHrefNavBarAloja() {
        const linkFlightsNav = document.querySelector('#menu-option-hotels');
        if (linkFlightsNav) {
            linkFlightsNav.href = "https://multitravel.com.ar/hotels";
        }
    }


    function homeElementDisplayNone() {
        const homeElementDisplayNone = document.getElementById('home');
        if (homeElementDisplayNone) {
            document.body.style.display = 'none';
        }
    }

    cambiarHreLogoHeader();
    cambiarHrefNavBar();
    cambiarHrefNavBarAloja()
    homeElementDisplayNone();
    cambiarHrefNavBarPaquetes();
});

function homeElementDisplayNone() {
    const homeElementDisplayNone = document.getElementById('home');
    if (homeElementDisplayNone) {
        document.body.style.display = 'none';
    }
}
homeElementDisplayNone();