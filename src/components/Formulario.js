import React from "react";
import styles from "./Formulario.module.css";
import PropTypes from "prop-types";
import useSelect from "../hooks/useSelect";

const Formulario = ({ guardarCategoria, guardarPais }) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  const PAISES = [
    { value: "ar", label: "Argentina" },
    { value: "de", label: "Alemania" },
    { value: "br", label: "Brazil" },
    { value: "ca", label: "Canada" },
    { value: "ch", label: "China" },
    { value: "co", label: "Colombia" },
    { value: "jp", label: "Japón" },
    { value: "ru", label: "Rusia" },
    { value: "uk", label: "Reino Unido" },
    { value: "us", label: "Estados Unidos" },
    { value: "fr", label: "Francia" },
    { value: "mx", label: "Mexico" },
  ];

  //utilizar custom hook
  const [categoria, pais, SelectNoticias] = useSelect(
    "general",
    "ar",
    OPCIONES,
    PAISES
  );

  //submit al form, pasar categoria y pais a app.js
  const buscarNoticias = (e) => {
    e.preventDefault();
    guardarCategoria(categoria);
    guardarPais(pais);
  };

  return (
    <div className={` ${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form action="">
          <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              name=""
              id=""
              value="Buscar"
              onClick={buscarNoticias}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  guardarPais: PropTypes.func.isRequired,
  guardarCategoria: PropTypes.func.isRequired,
};

export default Formulario;
