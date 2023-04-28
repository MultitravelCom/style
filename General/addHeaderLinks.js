function addHeaderLinks() {
    const head = document.head || document.getElementsByTagName('head')[0];
  
    const bannerNoResult = document.createElement('script');

    bannerNoResult.src = 'https://multitravelcom.github.io/style/General/bannerNoResult.js';
    bannerNoResult.type = "text/babel";


    head.appendChild(bannerNoResult);

  }
  addHeaderLinks();