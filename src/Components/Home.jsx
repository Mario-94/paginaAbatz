import React, { Component } from "react";
import { Container, Media, Col, Row } from "reactstrap";
import "../App.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <h3>aqui ira el mapa</h3>
        <h1>Ofertas de la semana</h1>
        <div>
          <Container>
            <Row xs="1" sm="2" md="4">
              <Col xs="6">
                <Media>
                  <Media body>
                    <Media heading>Articulo</Media>
                    <Media heading> Unidad</Media>
                    <Media heading> Precio</Media>
                  </Media>
                  <Media right top href="#">
                    <Media
                      object
                      src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                      width="160"
                      height="160"
                      alt="Generic placeholder image"
                    />
                  </Media>
                </Media>
              </Col>
              <Col xs="6">
                <Media>
                  <Media body>
                    <Media heading>Articulo</Media>
                    <Media heading> Unidad</Media>
                    <Media heading> Precio</Media>
                  </Media>
                  <Media right top href="#">
                    <Media
                      object
                      src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                      width="160"
                      height="160"
                      alt="Generic placeholder image"
                    />
                  </Media>
                </Media>
              </Col>
              <Col xs="6">
                <Media>
                  <Media body>
                    <Media heading>Articulo</Media>
                    <Media heading> Unidad</Media>
                    <Media heading> Precio</Media>
                  </Media>
                  <Media right top href="#">
                    <Media
                      object
                      src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                      width="160"
                      height="160"
                      alt="Generic placeholder image"
                    />
                  </Media>
                </Media>
              </Col>
              <Col xs="6">
                <Media>
                  <Media body>
                    <Media heading>Articulo</Media>
                    <Media heading> Unidad</Media>
                    <Media heading> Precio</Media>
                  </Media>
                  <Media right top href="#">
                    <Media
                      object
                      src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                      width="160"
                      height="160"
                      alt="Generic placeholder image"
                    />
                  </Media>
                </Media>
              </Col>
              <Col xs="6">
                <Media>
                  <Media body>
                    <Media heading>Articulo</Media>
                    <Media heading> Unidad</Media>
                    <Media heading> Precio</Media>
                  </Media>
                  <Media right top href="#">
                    <Media
                      object
                      src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                      width="160"
                      height="160"
                      alt="Generic placeholder image"
                    />
                  </Media>
                </Media>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
