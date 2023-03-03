import Componente from "./Componente";

function App() {
  return (
     <div>
      <h1>Hola, que tal?</h1>
      <Componente />
    </div>
  );
}



ReactDOM.render(<App />, document.querySelector("#root"));
