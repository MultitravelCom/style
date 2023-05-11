function moveBaggageSelection() {
    const baggageSelections = document.querySelectorAll('.booking-paxes__baggage-selection');
    if (baggageSelections.length > 0) {
        const productElement = document.querySelector('.booking-data__product');
        productElement.insertAdjacentElement('afterend', baggageSelections[0]);

        // Agregar estilo display:flex al primer elemento
        baggageSelections[0].style.display = 'flex';

        const baggageSections = document.querySelectorAll('.baggage-selection__bag-section');
        if (baggageSections.length > 0) {
            // Agregar clase 'block' solo al primer elemento
            baggageSections[0].style.display = 'block';
        }
    } else {
        setTimeout(moveBaggageSelection, 100);
    }
}

// Inicia la función cuando la página haya terminado de cargar
window.addEventListener('load', moveBaggageSelection);


function Button(props) {

    const botonOriginal = document.querySelector('.page-header-bar__back-button');
    const hrefDelBotonOriginal = botonOriginal.getAttribute('href');

    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = hrefDelBotonOriginal;
    }

    return (
        <button id={props.id} className={props.style} onClick={handleClick}>{props.text}</button>
    );
}

const BaggagePax = () => {


    const [containerReady, setContainerReady] = React.useState(false);

    React.useEffect(() => {
        const container = document.querySelector('.booking-paxes__baggage-selection');
        if (container) {
            setContainerReady(true);
        }
    }, []);


    return (
        <>
            {containerReady &&
                <div className="main__bookingPaxes">
                    <div className="main__bookingPaxes__span">
                        <span>Cantidad de equipaje</span>
                    </div>

                    <div className="main__bookingPaxes__text">
                        <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
                        <p className="bookingPaxes__p">Si deseas volver atrás y ver diferentes vuelos con una diferente cantidad de equipaje, utiliza el botón a continuación y utiliza nuestros filtros para realizar tu búsqueda más precisa.</p>
                        <div className="main__bookingPaxes__style" >
                            <Button style="main__bookingPaxes__btn" onClick={handleClick} text="< VOLVER" />
                        </div>
                    </div>

                </div>
            }
        </>
    );

}

const bookingPaxesContainer = document.querySelector(".booking-paxes__baggage-selection");
const baggagePaxContainer = document.createElement("div");
bookingPaxesContainer.appendChild(baggagePaxContainer);
ReactDOM.render(<BaggagePax />, baggagePaxContainer);