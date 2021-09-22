import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import "../App.css";
import { ModalOfertas } from "./modalOfertas";
import tienda from "../images/tienda.jpg";

export class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="6" sm="6">
              <br />
               <iframe
                title="myFrame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.535955135257!2d-101.6183805578403!3d19.518590723028034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59e20edc39f50bba!2sAbarrotera%20De%20Patzcuaro%20S.A.%20De%20C.V.!5e0!3m2!1ses!2smx!4v1631108415240!5m2!1ses!2smx"
                width="100%"
                height="100%"
                loading="lazy"
                alt="mapaHome"
              ></iframe> 
            </Col>
            <Col xs="6">
              <h3>
                Nos encontramos ubicados en Lib. Gral. Ignacion #250 Col. Centro
                Patzcuaro
              </h3>
              <h2>Te esperamos</h2>
              <img src={tienda} width="100%" alt="imgTienda" />
            </Col>
          </Row>
        </Container>
        <br />
        <div>
        <h1>Ofertas de la semana</h1>
        <ModalOfertas />
        </div>
        
      </div>
    );
  }
}

export default Home;
