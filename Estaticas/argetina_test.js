const head = document.head || document.getElementsByTagName('head')[0];
const meta = document.createElement('meta');

meta.setAttribute('name', 'description');
meta.setAttribute('content', 'Compará paquetes a Argentina y conseguí los mejores precios en alojamiento y vuelos a Bariloche, Iguazú y Mendoza. Solicitá atención personalizada por whatsapp');

head.appendChild(meta);
document.title = "Paquetes turísticos a Argentina | Multitravel.com"

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
verificarYActualizarMeta();

// BD
const destinos1 = [
    {
        id: "a1",
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/Bariloche-1.webp",
        className: "uno",
        linkWa: "https://wa.link/ncvo1x",
        title: "Paquete a Bariloche",
        priceBaja: "$121.860",
        price: "$161.201",
        events: "si"
    },
    {
        id: "a2",
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/Bariloche-2.webp",
        className: "uno",
        linkWa: "https://wa.link/s507zo",
        title: "Paquete a Bariloche",
        priceBaja: "$171.120",
        price: "$214.560",
        events: "si"
    },
    {
        id: "a3",
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/Bariloche-3.webp",
        className: "uno",
        linkWa: "https://wa.link/duchkz",
        title: "Paquete a Bariloche",
        priceBaja: "$213.100",
        price: "$276.900",
        events: "si"
    },
    {
        id: "a4",
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/Bariloche-4.webp",
        className: "uno",
        linkWa: "https://wa.link/2z5hpp",
        title: "Hotel Villa Sofia",
        priceBaja: "$35.375",
        price: "$63.590",
        events: "si"
    },
    {
        id: "a5",
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/Bariloche-5.webp",
        className: "uno",
        linkWa: "https://wa.link/dv0ucs",
        title: "Hotel Kenton Palace Bariloche",
        priceBaja: "$55.640",
        price: "$67.555",
        events: "si"
    },
    {
        id: "a6",
        destino: "Bariloche",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/Bariloche-6.webp",
        className: "uno",
        linkWa: "https://wa.link/dv0ucs",
        title: "Hotel Design Suites Bariloche",
        priceBaja: "$75.135",
        price: "$79.700",
        events: "si"
    },
];
const destinos2 = [
    {
        id: "b1",
        destino: "Iguazu",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/Iguazu-7.webp",
        className: "uno",
        linkWa: "https://wa.link/hxjkgq",
        title: "Paquete a Iguazú",
        priceBaja: "$138.910",
        price: "$160.200",
        events: "si"
    },
    {
        id: "b2",
        destino: "Iguazu",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/Iguazu-8.webp",
        className: "uno",
        linkWa: "https://wa.link/2rmvhq",
        title: "Paquete a Iguazús",
        priceBaja: "$189.840",
        price: "$250.370",
        events: "si"
    },
    {
        id: "b3",
        destino: "Iguazu",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/Iguazu-9.webp",
        className: "uno",
        linkWa: "https://wa.link/wbq74i",
        title: "Hotel Merit Iguazú",
        priceBaja: "$56.210",
        price: "$63.370",
        events: "si"
    },
    {
        id: "b4",
        destino: "Iguazu",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/Iguazu-10.webp",
        className: "uno",
        linkWa: "https://wa.link/s6nxus",
        title: "Hotel Complejo Americano",
        priceBaja: "$38.100",
        price: "$76.160",
        events: "si"
    },
    {
        id: "b5",
        destino: "Iguazu",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/Iguazu-11.webp",
        className: "uno",
        linkWa: "https://wa.link/37zsyv",
        title: "Hotel Tourbillon",
        priceBaja: "$41.830",
        price: "$55.700",
        events: "si"
    },
    {
        id: "b6",
        destino: "Iguazu",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/Iguazu-12.webp",
        className: "uno",
        linkWa: "https://wa.link/37zsyv",
        title: "Hotel Iguazu Grand",
        priceBaja: "$139.820",
        price: "$150.500",
        events: "No"
    },
];
const destinos3 = [
    {
        id: "c1",
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/mendoza-13.webp",
        className: "uno",
        linkWa: "https://wa.link/61efbi",
        title: "Paquete a Mendoza",
        priceBaja: "$122.690",
        price: "$144.335",
        events: "si"
    },
    {
        id: "c2",
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/mendoza-14.webp",
        className: "uno",
        linkWa: "https://wa.link/sbfl7y",
        title: "Paquete a Mendoza",
        priceBaja: "$183.700",
        price: "$171.300",
        events: "si"
    },
    {
        id: "c3",
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/mendoza-15.webp",
        className: "uno",
        linkWa: "https://wa.link/vs8baw",
        title: "Paquete a Mendoza",
        priceBaja: "$223.100",
        price: "$216.5000",
        events: "si"
    },
    {
        id: "c4",
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/mendoza-16.webp",
        className: "uno",
        linkWa: "https://wa.link/u8ym55",
        title: "Hotel Crillón",
        priceBaja: "$39.770",
        price: "$57.960",
        events: "si"
    },
    {
        id: "c5",
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/mendoza-17.webp",
        className: "uno",
        linkWa: "https://wa.link/wz0152",
        title: "Hotel Cordón del Plata",
        priceBaja: "$29.110",
        price: "$50.570",
        events: "si"
    },
    {
        id: "c6",
        destino: "Mendoza",
        img: "https://multitravelcom.github.io/MT/Evento/Landings-Doble/Argentina/mendoza-18.webp",
        className: "uno",
        linkWa: "https://wa.link/wz0152",
        title: "Hotel Huentala",
        priceBaja: "$97.430",
        price: "$110.200",
        events: "si"
    },
];
const btnStyles = [
    { carrusel: "carrusel__lista", btnLeft: "btnLeft", btnRight: "btnRight", title: 'Vuelos Bariloche – Alojamientos Bariloche – Paquetes Bariloche', destino: "Bariloche" },
    { carrusel: "carrusel__lista2", btnLeft: "btnLeft2", btnRight: "btnRight2", title: 'Vuelos Iguazú – Alojamientos Cataratas – Paquetes Cataratas', destino: "Iguazu" },
    { carrusel: "carrusel__lista3", btnLeft: "btnLeft3", btnRight: "btnRight3", title: 'Vuelos Mendoza – Alojamientos Mendoza – Paquetes Mendoza', destino: "Mendoza" },
];
// *****************************************************
const mapDataByDestino = (apiData) => {
    return apiData.reduce((result, item) => {
        const destino = item.attributes.Destino;
        if (!result[destino]) {
            result[destino] = [];
        }
        result[destino].push(item.attributes);
        return result;
    }, {});
};
// ************** BITRIX ********************
const BitrixFormComponent = ({ isVisible }) => {
    const [isScriptLoaded, setIsScriptLoaded] = React.useState(false);

    React.useEffect(() => {
        if (isVisible && !isScriptLoaded) {
            const script = document.createElement("script");
            script.async = true;
            script.src = "https://cdn.bitrix24.com/b19657597/crm/form/loader_56.js";
            script.setAttribute("data-b24-form", "inline/56/aj4a4r");
            script.setAttribute("data-skip-moving", "true");
            document.getElementById("bitrix-form-container").appendChild(script);

            setIsScriptLoaded(true);
        } else if (!isVisible && isScriptLoaded) {
            const scriptElement = document.querySelector('script[data-b24-form="inline/56/aj4a4r"]');
            if (scriptElement) {
                scriptElement.remove();
            }

            setIsScriptLoaded(false);
        }
    }, [isVisible, isScriptLoaded]);

    return <div id="bitrix-form-container" />;
};
const ButtonBitrixForm = () => {
    const isMobile = window.innerWidth < 454;

    const handleCallButtonClick = (event) => {
        event.preventDefault();
        if (isMobile) {
            window.location.href = 'tel:08003480003';
        }
    };

    return isMobile ? (
        <div className="bitrixFormTitle-button">
            <button onClick={handleCallButtonClick} className="style__btn__britrix">Llamar</button>
        </div>
    ) : null;
}
const BitrixFormTitle = () => {
    return (
        <div className="BitrixFormTitle">
            <div className="bitrixFormTitle_text">
                <p class="single-line">Completa tus datos para que te contacte un especialista.</p>
            </div>
            <ButtonBitrixForm />
        </div>
    )
}
// **************** FETCH API **********************
async function fetchDataFromAPI() {
    try {
        const response = await fetch('https://32tpwbxjq7.us-east-1.awsapprunner.com/api/whatsapp-activo');
        if (!response.ok) {
            throw new Error('No se pudo obtener los datos de la API');
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function fetchDataFromAPIPrice() {
    try {
        console.log('fetchDataFromAPIPrice se está ejecutando');

        const response = await fetch('https://32tpwbxjq7.us-east-1.awsapprunner.com/api/landing-argentinas');
        if (!response.ok) {
            throw new Error('No se pudo obtener los datos de la API');
        }
        const responseDataPrice = await response.json();
        return responseDataPrice;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
// ************** COMPONENTES ********************
const BannerTop = () => {
    return (
        <div className="main_conteiner__s1_medio__paquetes">
            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcSet="
            https://multitravelcom.github.io/MT/Evento/PreViaje/Banners/bannerLanding%20(1).webp
          "
                />
                <source
                    media="(min-width: 768px) and (max-width: 1023px)"
                    srcSet="
            https://multitravelcom.github.io/MT/Evento/PreViaje/Banners/bannerLanding%20(2).webp
          "
                />
                <source
                    media="(max-width: 767px)"
                    srcSet="
            https://multitravelcom.github.io/MT/Evento/PreViaje/Banners/bannerLanding%20(3).webp
          "
                />
                <img
                    className="main_conteiner__s1_medio__paquetes__img"
                    src="https://multitravelcom.github.io/MT/TravelSale2023/Banners/BannerLanding%20(1).jpg"
                    alt="Imagen banner promociones"
                />
            </picture>
        </div>
    )
}

const BannerTravelSale = () => {
    return (
        <>
            <div className="main__container_BannerTravelSale">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet="
                        https://multitravelcom.github.io/MT/Evento/TravelSale-2023/Banner-Landing/Banner-Desktop.webp
          "
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1023px)"
                        srcSet="
                        https://multitravelcom.github.io/MT/Evento/TravelSale-2023/Banner-Landing/Banner-Desktop.webp
                    "
                    />
                    <source
                        media="(max-width: 767px)"
                        srcSet="
                        https://multitravelcom.github.io/MT/Evento/TravelSale-2023/Banner-Landing/Banner-Mobile.webp
                    "
                    />
                    <img
                        className="main_conteiner__s1_medio__paquetes__img"
                        src="            https://multitravelcom.github.io/MT/Evento/TravelSale-2023/Banner-Landing/Banner-Desktop.webp
                    "
                        alt="Imagen banner promociones"
                    />
                </picture>
            </div>
        </>
    )
}

function ButtonLading(props) {
    const svgWA = (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M7.54108 2.0471C6.72767 2.0471 5.96119 2.2044 5.24164 2.51901C4.52208 2.82313 3.89378 3.24522 3.35672 3.7853C2.81966 4.32537 2.39992 4.95721 2.0975 5.68081C1.78465 6.4044 1.62823 7.17519 1.62823 7.99316C1.70123 8.56994 1.81072 9.12051 1.95672 9.64485C2.10272 10.1692 2.28521 10.6726 2.50421 11.155L2.48856 11.092L1.89415 13.5932L4.44387 13.0426C4.88186 13.3257 5.36417 13.546 5.8908 13.7033C6.41743 13.8606 6.97273 13.9392 7.55672 13.9392C8.37013 13.9392 9.13661 13.7819 9.85616 13.4673C10.5757 13.1527 11.2014 12.728 11.7333 12.1932C12.2651 11.6583 12.6874 11.0291 13.0003 10.3055C13.3131 9.58193 13.4696 8.81114 13.4696 7.99316C13.4696 7.17519 13.3131 6.4044 13.0003 5.68081C12.6874 4.95721 12.2651 4.32537 11.7333 3.7853C11.2014 3.24522 10.5757 2.82313 9.85616 2.51901C9.13661 2.2044 8.37013 2.0471 7.55672 2.0471C7.54629 2.0471 7.54108 2.0471 7.54108 2.0471ZM11.2796 10.2898L10.7947 10.9819C10.7739 11.0134 10.7504 11.037 10.7243 11.0527C10.6982 11.0684 10.6748 11.0816 10.6539 11.092H10.6383V11.1078C10.1273 11.4119 9.61631 11.5692 9.10532 11.5797C8.59434 11.6007 8.11203 11.5325 7.6584 11.3752C7.20476 11.2179 6.78502 10.9977 6.39918 10.7145C6.01333 10.4419 5.68484 10.1587 5.4137 9.86507C4.62115 9.02612 4.13102 8.28942 3.94331 7.65496C3.7556 7.02051 3.79732 6.35721 4.06845 5.66507C4.13102 5.52874 4.19098 5.40028 4.24834 5.27968C4.3057 5.15908 4.36566 5.0411 4.42823 4.92575L4.41259 4.95721C4.44387 4.92575 4.46733 4.89953 4.48298 4.87856C4.49862 4.85758 4.51687 4.84185 4.53772 4.83137L5.25728 4.43811C5.27813 4.41713 5.30421 4.40403 5.33549 4.39878C5.36678 4.39354 5.39806 4.39092 5.42935 4.39092C5.49191 4.39092 5.54927 4.40403 5.60141 4.43024C5.65355 4.45646 5.69005 4.49579 5.71091 4.54822V4.56395L6.60253 6.10552C6.61296 6.1265 6.62339 6.15271 6.63381 6.18418C6.64424 6.21564 6.64946 6.2471 6.64946 6.27856C6.64946 6.34148 6.63381 6.39916 6.60253 6.45159C6.57124 6.50403 6.52953 6.54597 6.47739 6.57743V6.59316L5.75784 7.00215C5.71612 7.01264 5.67441 7.02051 5.6327 7.02575C5.59098 7.03099 5.54927 7.03361 5.50756 7.03361C5.45542 7.03361 5.40849 7.03099 5.36678 7.02575C5.32506 7.02051 5.28335 7.01264 5.24164 7.00215H5.25728C5.21556 7.30627 5.29117 7.62612 5.48409 7.9617C5.67702 8.29728 5.97162 8.65384 6.36789 9.03137C6.69117 9.33549 7.07702 9.64747 7.52543 9.96732C7.97385 10.2872 8.41705 10.3842 8.85504 10.2583C8.71948 10.0905 8.65691 9.94635 8.66733 9.82575C8.67776 9.70515 8.70383 9.61339 8.74555 9.55047L9.23046 8.85833C9.26175 8.8059 9.30346 8.76657 9.3556 8.74036C9.40774 8.71414 9.45989 8.70103 9.51203 8.70103C9.55374 8.70103 9.59024 8.70365 9.62152 8.70889C9.65281 8.71414 9.67888 8.72725 9.69974 8.74822H9.71538L11.1858 9.77069C11.2379 9.80215 11.277 9.8441 11.3031 9.89653C11.3292 9.94897 11.3422 10.0066 11.3422 10.0696C11.3422 10.1115 11.337 10.1508 11.3266 10.1875C11.3161 10.2243 11.3005 10.2583 11.2796 10.2898ZM7.54108 14.9932C7.54108 14.9932 7.53586 14.9932 7.52543 14.9932C6.93102 14.9932 6.35746 14.9198 5.80476 14.7729C5.25206 14.6261 4.72543 14.4216 4.22488 14.1595L4.2718 14.1752L0.486328 14.9932L1.39359 11.1864C1.1746 10.7145 0.997315 10.2138 0.861747 9.68418C0.726179 9.15459 0.632324 8.60665 0.580183 8.04036V7.99316C0.580183 7.02837 0.757464 6.12125 1.11203 5.27182C1.47702 4.42238 1.97497 3.68043 2.60588 3.04597C3.23679 2.41152 3.9746 1.91077 4.81929 1.54373C5.66398 1.17669 6.56603 0.993165 7.52543 0.993165C8.49527 0.993165 9.40253 1.17669 10.2472 1.54373C11.0919 1.91077 11.8297 2.41152 12.4606 3.04597C13.0915 3.68043 13.5895 4.42238 13.9545 5.27182C14.309 6.12125 14.4863 7.02837 14.4863 7.99316C14.4863 8.95796 14.309 9.86507 13.9545 10.7145C13.5895 11.564 13.0915 12.3059 12.4606 12.9404C11.8297 13.5748 11.0919 14.0756 10.2472 14.4426C9.40253 14.8096 8.50048 14.9932 7.54108 14.9932Z" fill="white" />
        </svg>
    );
    const svgPhone = (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M2.31054 1.0886C2.36264 1.03652 2.40692 0.989647 2.44339 0.947984C2.47986 0.906321 2.51373 0.880281 2.54499 0.869865L3.95167 0.166801C3.99335 0.14597 4.04024 0.127743 4.09234 0.112119C4.14444 0.0964956 4.20175 0.0886841 4.26427 0.0886841C4.38931 0.0886841 4.50393 0.122535 4.60812 0.190237C4.71232 0.257939 4.79047 0.349077 4.84257 0.463651L6.35867 3.46339C6.37951 3.50505 6.39774 3.55192 6.41337 3.604C6.429 3.65608 6.43681 3.70816 6.43681 3.76024C6.43681 3.89564 6.40295 4.01542 6.33522 4.11958C6.26749 4.22374 6.18153 4.30186 6.07733 4.35394L4.67064 5.08825C4.60812 5.09866 4.543 5.10908 4.47527 5.11949C4.40754 5.12991 4.33721 5.13512 4.26427 5.13512C4.17049 5.13512 4.07411 5.12731 3.97512 5.11168C3.87613 5.09606 3.78495 5.07262 3.70159 5.04138C3.5974 5.61424 3.71722 6.22877 4.06108 6.88496C4.40494 7.54116 4.93114 8.24422 5.63969 8.99415C5.93145 9.29621 6.25447 9.6191 6.60874 9.96282C6.96302 10.2961 7.33813 10.5982 7.73409 10.869C8.13005 11.1398 8.54163 11.3481 8.96885 11.4939C9.39606 11.6293 9.81807 11.6502 10.2349 11.5564C9.9952 11.2335 9.89101 10.9575 9.92227 10.7284C9.95352 10.4992 10.0108 10.3326 10.0942 10.2284L11.0789 8.94728C11.1414 8.86396 11.2195 8.79886 11.3133 8.75199C11.4071 8.70512 11.5061 8.68168 11.6103 8.68168C11.6832 8.68168 11.7562 8.6947 11.8291 8.72074C11.902 8.74678 11.9646 8.78063 12.0167 8.82229L14.7206 10.9002C14.804 10.9627 14.8691 11.0409 14.916 11.1346C14.9629 11.2283 14.9863 11.3273 14.9863 11.4314C14.9863 11.5148 14.9733 11.5903 14.9473 11.658C14.9212 11.7257 14.8873 11.7908 14.8457 11.8533L13.8454 13.1344C13.8141 13.1761 13.775 13.2125 13.7281 13.2438C13.6812 13.275 13.6265 13.3011 13.564 13.3219V13.3531C12.5429 13.8635 11.5478 14.1083 10.5787 14.0875C9.60967 14.077 8.69793 13.9 7.8435 13.5563C6.98907 13.2125 6.21279 12.7542 5.51465 12.1814C4.8061 11.6189 4.20175 11.0461 3.70159 10.4628C2.99304 9.63993 2.43037 8.87437 2.01357 8.1661C1.59678 7.45783 1.30763 6.78341 1.14612 6.14284C0.98461 5.50227 0.945535 4.87472 1.02889 4.26019C1.10183 3.65608 1.28939 3.03634 1.59157 2.40098C1.71661 2.14059 1.83904 1.90102 1.95887 1.68229C2.0787 1.46356 2.20634 1.25004 2.3418 1.04173L2.31054 1.0886Z" fill="#2A8BFE" />
        </svg>
    );

    const handleClick = (event) => {
        event.preventDefault();
        props.onClick();
    };

    return (
        <button id={props.id} className={`btn_Style_Venta_Per ${props.className}`} onClick={handleClick}>
            {props.svgType === 'whatsapp' && svgWA}
            {props.svgType === 'phone' && svgPhone}
            <span>
                {props.text}
            </span>
        </button>
    );
}

function mostrarSeccion() {
    let url = window.location.href; // Obtener la URL completa
    let hash = url.substring(url.indexOf("#") + 1); // Obtener el ancla de la URL

    let seccion = document.getElementById(hash); // Buscar el elemento con el ID del ancla

    if (seccion) {
        seccion.scrollIntoView(); // Mostrar la sección si existe
    } else {
        setTimeout(mostrarSeccion, 500); // Intentar nuevamente después de 500 milisegundos
    }
}
mostrarSeccion();

function shouldShowEvent() {
    const startDate = new Date("2023-08-27T22:00:00");
    const endDate = new Date("2023-09-02T23:00:00");
    const now = new Date();

    return now >= startDate && now <= endDate;
}
const EventImg = (props) => {
    if (shouldShowEvent()) {
        return (
            <div className={props.style}>
                <img
                    alt={`Imagen evento promocion`}
                    src={"https://multitravelcom.github.io/components/MULT324/logotravelsale.svg"}
                />
            </div>
        );
    }
};
// const WarningPrice = () => {
//     return (
//         <div className="container main__warningPrice">
//             <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
//             <p>Los precios publicados no aplican para fines de semana largo y vacaciones de invierno y verano.
//                 De todas maneras puedes comunicarte con nuestros especialistas para que te den información al respecto.</p>
//         </div>

//     )
// }
const Card = ({ destinos, onContactClick }) => {
    const [openModal, setOpenModal] = React.useState(false);
    const [buttonSwitch, setButtonSwitch] = React.useState();
    const [data, setData] = React.useState([]);
    const [pricesByDestino, setPricesByDestino] = React.useState({});

    const handleBannerClick = () => {
        if (window.innerWidth <= 768) {
            window.location.href = 'tel:08003480003';
        } else {
            setOpenModal(true);
        }
    };

    const handleWhatsAppClick = () => {
        const whatsappURL = 'https://wa.link/64zdo9';
        window.open(whatsappURL, '_blank');
    };

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await fetchDataFromAPI();
                setData(responseData);
                setButtonSwitch(responseData.data?.attributes?.Whatsapp_Activo ? "A" : "B");
            } catch (error) {
                console.error(error);
            }
        };

        const fetchDataPrecio = async () => {
            try {
                const responseDataPrecio = await fetchDataFromAPIPrice();
                console.log('Datos de la API:', responseDataPrecio); // Agrega este console.log

                const prices = responseDataPrecio.data.reduce((acc, item) => {
                    const destino = item.attributes.Destino;
                    const card = item.attributes.Card;
                    if (!acc[destino]) {
                        acc[destino] = [];
                    }
                    acc[destino][card] = {
                        Tarifa_Temporada_Alta: item.attributes.Tarifa_Temporada_Alta,
                        Tarifa_Temporada_Baja: item.attributes.Tarifa_Temporada_Baja,
                    };
                    console.log(`Destino: ${destino}, Card: ${card}, Tarifa_Temporada_Alta: ${item.attributes.Tarifa_Temporada_Alta}, Tarifa_Temporada_Baja: ${item.attributes.Tarifa_Temporada_Baja}`);

                    return acc;
                }, {});
                setPricesByDestino(prices);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
        fetchDataPrecio();
    }, []);
    return (
        destinos.map((destino) => (
            <div key={destino.id} className="carrusel__elemento">
                <div className="main__conteiner__s1__destacado__card uno" style={{ height: "100%", width: "100%" }}>
                    {destino.events === "si" && shouldShowEvent() && (
                        <EventImg style="eventImg" />
                    )}
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={destino.img} />
                        <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={destino.img} />
                        <source media="(max-width: 767px)" srcSet={destino.img} />
                        <img alt={`Imagen banner ${destino.title}`} src={destino.img} />
                    </picture>
                    <div className="main_container_priceStyle">
                        <div className="priceStyle left">{pricesByDestino[destino.title][destino.card]?.Tarifa_Temporada_Baja}</div>
                        <div className="priceStyle right">{pricesByDestino[destino.title][destino.card]?.Tarifa_Temporada_Alta}</div>
                    </div>
                    <div className="main__container__buttonsCars">
                        <>
                            <ButtonLading
                                id={destino.title}
                                className={buttonSwitch === "A" ? "btn_Whatsapp" : "btn_FormBitrix"}
                                text={buttonSwitch === "A" ? "Whatsapp" : "Agendar llamada"}
                                onClick={buttonSwitch === "A" ? handleWhatsAppClick : () => onContactClick(destino.id)}
                                svgType={buttonSwitch === "A" ? 'whatsapp' : null}
                            />
                            <ButtonLading
                                id={destino.id}
                                className="classOpenModal"
                                text={buttonSwitch === "A" ? "Llamar" : "Llamar Ahora"}
                                onClick={handleBannerClick}
                                svgType={buttonSwitch === "A" ? 'phone' : null}
                            />
                        </>
                    </div>
                </div>
            </div>
        )));
};
const CardContainer = ({ btnStyles, destinos, onContactClick }) => {
    const { title, btnRight, btnLeft, carrusel, destino } = btnStyles;

    React.useEffect(() => {
        const btnLeftElement = document.querySelector(`.${btnLeft}`);
        const btnRightElement = document.querySelector(`.${btnRight}`);

        btnLeftElement.addEventListener('click', function (event) {
            event.preventDefault();
        });

        btnRightElement.addEventListener('click', function (event) {
            event.preventDefault();
        });

        new Glider(document.querySelector(`.${carrusel}`), {
            slidesToShow: 1.2,
            slidesToScroll: 0.5,
            draggable: true,
            arrows: {
                prev: btnLeftElement,
                next: btnRightElement,
            },
            responsive: [
                {
                    // screens greater than >= 775px
                    breakpoint: 450,
                    settings: {
                        // Set to `auto` and provide item width to adjust to viewport
                        slidesToShow: "2.2",
                        slidesToScroll: "1",
                    },
                },
                {
                    // screens greater than >= 775px
                    breakpoint: 760,
                    settings: {
                        // Set to `auto` and provide item width to adjust to viewport
                        slidesToShow: "3.2",
                        slidesToScroll: "1",
                    },
                },
                {
                    // screens greater than >= 1024px
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    },
                },
            ],
            rewind: true,
        });
    }, [btnLeft, btnRight, carrusel]);

    return (
        <>
            <div key={title} className="main__conteiner__s1">
                <div className="main__conteiner__s1__titulo" id={`seccion${destino}`}>
                    <h2 key={title}>
                        <strong>{title}</strong>
                    </h2>
                </div>
                <div className="carrusel__contenedor">
                    <button
                        aria-label="Anterior"
                        className={`carrusel__anterior ${btnLeft}`}
                    >
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <div className={carrusel} id={destinos.title}>
                        <Card destinos={destinos} onContactClick={onContactClick} />
                    </div>
                    <button
                        aria-label="Siguiente"
                        className={`carrusel__siguiente ${btnRight}`}
                    >
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </>
    )
};
const Loader = () => {
    return (
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    );
};

// ************************************************

function App() {
    const [loaded, setLoaded] = React.useState(false);
    const [ocultarComponente, setOcultarComponente] = React.useState(true);
    const [selectedFormId, setSelectedFormId] = React.useState(false);
    const [isFormVisible, setIsFormVisible] = React.useState(false);



    React.useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 2000);

        const intervalo = setInterval(() => {
            const fechaDeseada = new Date("2023-04-25T19:40:00");
            const fechaActual = new Date();

            if (fechaActual >= fechaDeseada) {
                setOcultarComponente(false);
                clearInterval(intervalo);
            }
        }, 1000);

        return () => clearInterval(intervalo);

    }, []);

    const handleOpenForm = (formId) => {
        setSelectedFormId(formId);
        setIsFormVisible(true);

    };

    const handleCloseForm = () => {
        setSelectedFormId(null);
        setIsFormVisible(false);
    };
    return (
        <>
            {loaded ? (
                <>
                    <div className="main_conteiner__s1_medio top_mkt">
                        <BannerTop />
                    </div>
                    {shouldShowEvent()
                        ?
                        <div className="main_conteiner__s2_bannerTravelSale">
                            <BannerTravelSale />
                        </div>
                        :
                        null
                    }
                    <div className="main__conteiner main__conteiner-principal container">
                        <div className="carrusel">
                            <CardContainer btnStyles={btnStyles[0]} destinos={destinos1} onContactClick={handleOpenForm} />

                            <CardContainer btnStyles={btnStyles[1]} destinos={destinos2} onContactClick={handleOpenForm} />

                            <CardContainer btnStyles={btnStyles[2]} destinos={destinos3} onContactClick={handleOpenForm} />
                        </div>
                    </div>
                    {isFormVisible && (
                        <div className="modalBitrix">
                            <div className="modal-content-Bitrix">
                                <span className="close-button-bitrix" onClick={handleCloseForm}>
                                    &times;
                                </span>
                                <BitrixFormTitle />
                                <BitrixFormComponent isVisible={isFormVisible} formId={selectedFormId} />
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <Loader />
            )}
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));