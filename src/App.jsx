import { useState } from "react";
import Banner from "./componentes/Banner/Banner.jsx";
import Formulario from "./componentes/formulario/index.jsx";
import Time from "./componentes/Time/index.jsx";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Back-End",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Data-Science",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Devops",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

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
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
        />
      ))}
    </div>
  );
}

export default App;
