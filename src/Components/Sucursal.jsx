import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
export class Sucursal extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="6" sm="6">
              <iframe
                title="myFrame2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.535955135257!2d-101.6183805578403!3d19.518590723028034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59e20edc39f50bba!2sAbarrotera%20De%20Patzcuaro%20S.A.%20De%20C.V.!5e0!3m2!1ses!2smx!4v1631108415240!5m2!1ses!2smx"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </Col>
            <Col xs="6">
              <h2>Nos encontraos en el libramiento</h2>
            </Col>
            <Col xs="6" sm="6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.18491575461!2d-101.61563461120409!3d19.509833266187616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d969d8af92a07%3A0xba8750f324628c3f!2sFarmacia%20Guadalajara!5e0!3m2!1ses!2smx!4v1631919227578!5m2!1ses!2smx"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </Col>
            <Col xs="6">
              <h2>Nos encontraos en el libramiento</h2>
            </Col>
            <Col xs="6" sm="6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.684832818513!2d-101.60608862922017!3d19.512190802798557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe9fe2a3671c8eb5!2sSuper%20ABATZ%20Pueblita!5e0!3m2!1ses!2smx!4v1631919573982!5m2!1ses!2smx" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
            </Col>
            <Col xs="6">
              <h2>Nos encontraos en el libramiento</h2>
            </Col>
            
          </Row>
        </Container>
      </div>
    );
  }
}

export default Sucursal;
