function addHeaderLinks() {
    const head = document.head || document.getElementsByTagName('head')[0];
  
    const bannerNoResult = document.createElement('script');
    const bannerNoResultStyle = document.createElement('link');

    bannerNoResult.src = 'https://multitravelcom.github.io/style/General/bannerNoResult.js';
    bannerNoResult.textContent = "text/babel";

    bannerNoResultStyle.src = "https://multitravelcom.github.io/style/General/style.css";
    bannerNoResultStyle.rel = "stylesheet";

    head.appendChild(bannerNoResult);
    head.appendChild(bannerNoResultStyle);
  }
  addHeaderLinks();