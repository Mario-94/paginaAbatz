import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row,
} from "reactstrap";
import "../App.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <h3>aqui ira el mapa</h3>
        <h1>Ofertas de la semana</h1>
        <div>
          <Row>
            <Col sm="6">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Articulo nombre</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Precio
                  </CardSubtitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Unidad
                  </CardSubtitle>
                  <CardText>Descripcion</CardText>
                  <Button>Ver producto</Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Articulo nombre</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Precio
                  </CardSubtitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Unidad
                  </CardSubtitle>
                  <CardText>Descripcion</CardText>
                  <Button>Ver producto</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
