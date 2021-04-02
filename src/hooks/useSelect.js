import React, { useState } from "react";

const useSelect = (categoriaInicial, paisInicial, categorias, paises) => {
  //state del custom hook
  const [pais, actualizarPais] = useState(paisInicial);
  const [categoria, actualizarCategoria] = useState(categoriaInicial);

  const SelectNoticias = () => {
    return (
      <div>
        <label>País</label>
        <select
          className="browser-default"
          value={pais}
          onChange={(e) => actualizarPais(e.target.value)}
        >
          {paises.map((pais) => (
            <option key={pais.value} value={pais.value}>
              {pais.label}
            </option>
          ))}
        </select>
        <label>Categoría</label>
        <select
          className="browser-default"
          value={categoria}
          onChange={(e) => actualizarCategoria(e.target.value)}
        >
          {categorias.map((categoria) => (
            <option key={categoria.value} value={categoria.value}>
              {categoria.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return [categoria, pais, SelectNoticias];
};

export default useSelect;
