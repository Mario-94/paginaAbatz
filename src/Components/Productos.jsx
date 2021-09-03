import React, { Component } from "react";
import { Media, Col, Row, Container } from "reactstrap";
export class Productos extends Component {
  render() {
    return (
      <div>
        <div>
          <p>
            aqui ira la parte de prouctos que maneja la empresa, es un carusel{" "}
          </p>
        </div>
        <div>
            <h1>Categoria de productos</h1>
            <hr />
        <Container>
            <Row xs="1" sm="2" md="4">
              <Col xs="6">
                <Media>
                  <Media body>
                    Carnes frias
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

export default Productos;
