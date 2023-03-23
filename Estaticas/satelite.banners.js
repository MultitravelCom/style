import Componente from "./satelite.componentes";

const Banners = () => {
    return (
        <>
        <Componente />
            <div>
                <h1>Hola mundo desde React!</h1>
            </div>
        </>
    );
}

ReactDOM.render(<Banners />, document.getElementById('test'));