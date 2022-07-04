import React, { Component } from "react";
import "../App.css";
import tienda from "../images/tienda.jpg";
import CardImage from "./CardImage";
export class Home extends Component {
  // dejamos el spinner para ahora que pintemos las ofertas en lo que obtenemos respuesta del servidor, se dejara como muestra
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }
  componentDidMount() {
    this.setState({ isLoading: false });
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
                Nos encontramos ubicados en Lib. Gral. Ignacion #250 Col. Centro
                Pátzcuaro
              </h3>
            </div>
            <section className="seccion-info">
              <div className="home-item">
                <div className="info-home">
                  <h1><b>
                  En abatz  tus ganancias llegan rápido
                    </b></h1>
                </div>

                <h2 className="ofertasSemana">Ofertas de la semana</h2>
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
