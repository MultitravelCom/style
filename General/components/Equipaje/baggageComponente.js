const BaggagePax = () => {
    return (
        <div className="main__warningPric">
            <span>Cantidad de equipaje</span>
            <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
            <p className="main__warningPric__icon__p">Si deseas volver atrás y ver diferentes vuelos con una diferente cantidad de equipaje, utiliza el botón a continuación y utiliza nuestros filtros para realizar tu búsqueda más precisa.</p>
            <div>
                <Button id={destino.title} link={destino.linkWa} text="< VOLVER" />
            </div>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"));