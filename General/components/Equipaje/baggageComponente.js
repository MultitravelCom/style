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
                        <div className="main__bookingPaxes__btn" >
                            <Button text="< VOLVER" />
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