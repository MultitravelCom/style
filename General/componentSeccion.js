const Secciones = (props) => {
    const { className } = props;
    return (
        <>
            <div className={`col-md-4 col-xs-12 hover__s3 ${className}`}>
                <a href={props.url} target="_blank">
                    <div className="main__conteiner__s3__piensa__parrafo">
                        <p>{props.seccion}</p>
                    </div>
                </a>
            </div>
        </>
    );
};

export default Secciones;