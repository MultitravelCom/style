function Button(props) {
    const handleClick = (event) => {
        event.preventDefault();
        window.open(props.link, '_blank');
    }

    return (
        <button id={props.id} className="btn_Style_Venta_Per" onClick={handleClick}>{props.text}</button>
    );
}

const BannerNoResult= () => {
return(
  <>
    <div className ="container">
        <div className="bannerNoResultr_text">
        <h2>Lo sentimos</h2>
            <p>En este momento no contamos con disponibilidad para esta búsqueda</p>
            <p>Te invitamos a modificar la fecha o a comunicarte con nuestro equipo de atención personalizada</p>
            <Button link={destino.linkWa} text="Contactarme" />
        </div>
        <div className="bannerNoResultr_img">
            <img alt="icono signo de interrogación" src="" />
        </div>
    </div>
  </>  
)
}