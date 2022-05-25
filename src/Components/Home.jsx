import React, { Component } from "react";

import "../App.css";
import tienda from "../images/tienda.jpg";
import Paginacion from "./Paginacion";
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
            
            <section className="seccion-info">
              <div className="home-item">
                <div className="info-home">
                <h3>
                    Nos encontramos ubicados en Lib. Gral. Ignacion #250 Col.
                    Centro Pátzcuaro
                  </h3>
                  <h2>En abatz donde tus ganancias llegan rapido</h2>
                 

                  <img src={tienda} className="" />
                
                <div className="mapa">
                  <iframe
                    title="myFrame"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.535955135257!2d-101.6183805578403!3d19.518590723028034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59e20edc39f50bba!2sAbarrotera%20De%20Patzcuaro%20S.A.%20De%20C.V.!5e0!3m2!1ses!2smx!4v1631108415240!5m2!1ses!2smx"
                    // width="100%"
                    loading="lazy"
                    alt="mapaHome"
                  />
                </div>
                  
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
