import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {
  const [clima, setClima] = useState({
    ciudad: "",
    pais: "",
  });

  const { ciudad, pais } = clima;
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appID = "0ccde62ce6fcd58d8120c7ddb201468d";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado);
        setConsultar(false);
        if (resultado.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultarAPI();
    // eslint-disable-next-line
  }, [consultar]);
  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados" />;
  } else {
    componente = <Clima resultado={resultado} />;
  }
  return (
    <Fragment>
      <Header titulo="Clima React app" />
      <div className="contenedor-form">
        <div className="row">
          <div className="col m6 s12">
            <Formulario
              clima={clima}
              setClima={setClima}
              setConsultar={setConsultar}
            />
          </div>
          <div className="col m6 s12">{componente}</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
