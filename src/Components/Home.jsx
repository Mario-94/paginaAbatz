import React, { Component } from "react";
import "../App.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <h3>aqui ira el mapa</h3>
        <h1 className="homeOferta">Ofertas de la semana </h1>

        <div className="row ">
          <div className="column">
            <h2>Articulo</h2>
            <p>Imagen</p>
            <p>Descripcion</p>
            <p>precio</p>
          </div>
          <div className="column">
            <h2>Articulo</h2>
            <p>Imagen</p>
            <p>Descripcion</p>
            <p>precio</p>
          </div>
          <div className="column">
            <h2>Articulo</h2>
            <p>Imagen</p>
            <p>Descripcion</p>
            <p>precio</p>
          </div>
          <div className="column">
            <h2>Articulo</h2>
            <p>Imagen</p>
            <p>Descripcion</p>
            <p>precio</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
