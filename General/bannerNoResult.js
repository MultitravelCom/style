function Button(props) {
    const handleClick = (event) => {
        event.preventDefault();
        window.open(props.link, '_blank');
    }

    return (
        <button id={props.id} className={props.style} onClick={handleClick}>{props.text}</button>
    );
}

const BannerNoResult = () => {
return(
  <>
    <div className ="container container__bannerNoResultr">
        <div className="bannerNoResultr_text">
        <h2>Lo sentimos</h2>
            <p className= "bannerNoResultr_text__p1">En este momento no contamos con disponibilidad para esta búsqueda</p>
            <p className= "bannerNoResultr_text__p2">Te invitamos a modificar la fecha o a comunicarte con nuestro equipo de atención personalizada</p>
            <Button className="btn btn_Style_NoResult" link="https://wa.link/j47nea" text="Contactarme" />
        </div>
        <div className="bannerNoResultr_img">
            <img alt="icono signo de interrogación" src="https://multitravelcom.github.io/style/General/img/iconresultado.png" />
        </div>
    </div>
  </>  
)
}

ReactDOM.createRoot(document.querySelector('.msg-box--no-results')).render(<BannerNoResult />);