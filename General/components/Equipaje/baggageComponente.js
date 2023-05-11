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
                <div className="main__warningPric">
                    <span>Cantidad de equipaje</span>
                    <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
                    <p className="main__warningPric__icon__p">Si deseas volver atrás y ver diferentes vuelos con una diferente cantidad de equipaje, utiliza el botón a continuación y utiliza nuestros filtros para realizar tu búsqueda más precisa.</p>
                    <div>
                        <Button id={destino.title} text="< VOLVER" />
                    </div>
                </div>
            }
        </>
    );

}

ReactDOM.render(<BaggagePax />, document.querySelector("booking-paxes__baggage-selection"));