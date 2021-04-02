import Header from "./components/Header";
import Formulario from "./components/Formulario";
import React, { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <Header titulo={"Buscador de noticias"}></Header>
      <div className="container white">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;
