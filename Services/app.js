import Componente from "./Componente";

function App() {
  return (
    <>
      <h1>Hola, que tal?</h1>
      <Componente />
    </>
  );
}



ReactDOM.render(<App />, document.querySelector("#root"));
