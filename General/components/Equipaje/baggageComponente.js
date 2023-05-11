function moveBaggageSelection() {
    const baggageSelections = document.querySelectorAll('.booking-paxes__baggage-selection');
    if (baggageSelections.length > 0) {
      // Mueve el primer elemento al lugar correcto
      const productElement = document.querySelector('.booking-data__product');
      productElement.insertAdjacentElement('afterend', baggageSelections[0]);
      
      // Muestra el primer elemento
      baggageSelections[0].style.display = 'flex';
      
      // Oculta los demás elementos con el mismo selector
      for (let i = 1; i < baggageSelections.length; i++) {
        baggageSelections[i].style.display = 'none';
      }
    } else {
      // Si el elemento no existe aún, espera 100ms y vuelve a intentarlo
      setTimeout(moveBaggageSelection, 100);
    }
  }
  
  // Inicia la función cuando la página haya terminado de cargar
  window.addEventListener('load', moveBaggageSelection);


function Button(props) {

    const handleClick = (event) => {
        event.preventDefault();
        window.history.back();
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
                            <Button style="main__bookingPaxes__btn" text="< VOLVER" />
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