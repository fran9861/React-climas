import React from "react";
import PropTypes from "prop-types";

const Clima = ({ resultado }) => {
  // extraer los valores
  const { name, main, coord } = resultado;

  // Grados kelvin
  const kelvin = 273.15;

  if (!name) return null;
  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>
          El clima de {name} con longitud de {coord.lon} y latitud de{" "}
          {coord.lat} es:{" "}
        </h2>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
        </p>
        <p>
          Temperatura Máxima:{" "}
          {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}{" "}
          <span>&#x2103;</span>
        </p>
        <p>
          Temperatura Mínima:{" "}
          {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}{" "}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};
Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};
export default Clima;
