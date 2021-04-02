import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import axios from "axios";

function App() {
  //definir la categoria y noticias
  const [pais, guardarPais] = useState("ar");
  const [categoria, guardarCategoria] = useState("general");

  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const apiKey = "3e5fada629e34541b126fc88f0dc227b";
      const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${apiKey}`;
      const res = axios.get(url);
      res.then((res) => guardarNoticias(res.data.articles));
    };
    consultarAPI();
  }, [categoria, pais]);

  return (
    <Fragment>
      <Header titulo={"Noticias"}></Header>
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
          guardarPais={guardarPais}
        />
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
