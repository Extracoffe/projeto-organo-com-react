import { useState } from "react";
import Banner from "./componentes/Banner/Banner.jsx";
import Formulario from "./componentes/formulario/index.jsx";

function App() {
  const [colaboradores, setColaboradores] = useState("");

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
    </div>
  );
}

export default App;
