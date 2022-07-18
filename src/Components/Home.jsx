import React, { Component } from "react";
import "../App.css";
// import tienda from "../images/tienda.jpg";
import CardImage from "./CardImage";
import CarruselImagenes from "./Carousel";
import axios from "axios";
export class Home extends Component {
  // dejamos el spinner para ahora que pintemos las ofertas en lo que obtenemos respuesta del servidor, se dejara como muestra

  state = { isLoading: true, fechas: [] };

  componentDidMount() {
    axios
      .get(`https://mario-94.github.io/pruebaJson/bd/bd.json`)
      .then((res) => {
        const fechas = res.data;

        this.setState({ fechas, isLoading: false });
      })
      .catch((e) => {
        console.log("Revisar su conexion", e);
      });
  }
  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <div className="spinner"></div>
        ) : (
          <div className="home-container">
            <div className="mensaje-home">
              <h3>
              En abatz tus ganancias llegan rápido
              </h3>
            </div>
            <section className="seccion-info">
              <div className="home-item">
                <div className="info-home">                 
                  <CarruselImagenes className="carruselImg-Container" />
                </div>

                <h2 className="ofertasSemana">
                  Ofertas de la semana del
                  <b> {this.state.fechas.products[1].fechaInicio} </b>
                  al
                  <b> {this.state.fechas.products[1].fechaFin} </b>
                </h2>
              </div>
            </section>

            {/* <Paginacion/> */}
            <div className="container-Card">
              <CardImage />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
