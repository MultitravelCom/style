window.addEventListener('load', () => {
    //*************************************** MULT-209 *************************** */
    const referenceNode = document.querySelector('.booking-breakdown__item.booking-breakdown__item--total.booking-breakdown__item--total-price.booking-breakdown__item--is-pay-web');

    const newElement = document.createElement('div');
    newElement.classList.add('mi-nuevo-componente');
    newElement.innerHTML = `
<div class="container main__warningPrice">
            <div class="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
            <p>Los precios publicados no aplican para fines de semana largo y vacaciones de invierno y verano.
                De todas maneras puedes comunicarte con nuestros especialistas para que te den información al respecto.</p>
        </div>
`;

    referenceNode.insertAdjacentElement('afterend', newElement);
//****************************************************************** */
});
