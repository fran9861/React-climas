import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Formulario = ({ clima, setClima, setConsultar }) => {
  // state para erroes
  const [error, setError] = useState(false);
  //extraer ciudad y pais
  const { ciudad, pais } = clima;
  //función que pone los elementos en el state
  const handleChange = (e) => {
    // actualizar el state
    setClima({
      ...clima,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //validar
    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //pasar al componenete principal
    setConsultar(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <div className="input-field col s12">
        <input type="text" name="ciudad" id="ciudad" onChange={handleChange} />
        <label htmlFor="ciudad">Ciudad:</label>
      </div>
      <div className="input-field col s12">
        <select name="pais" id="pais" onChange={handleChange}>
          <option value="">---Seleccione un país---</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">país:</label>
      </div>
      <div className="input-field col s12">
        <button
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        >
          Buscar Clima
        </button>
      </div>
    </form>
  );
};
Formulario.propTypes = {
  clima: PropTypes.object.isRequired,
  setClima: PropTypes.func.isRequired,
  setConsultar: PropTypes.func.isRequired,
};
export default Formulario;
