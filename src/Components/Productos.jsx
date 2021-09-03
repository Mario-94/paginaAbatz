import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";

export class Productos extends Component {
  render() {
    return (
      <div>
        <div>
          <p>
            aqui ira la parte de prouctos que maneja la empresa, es un carusel
          </p>
        </div>
        <div>
          <h1>Categoria de productos</h1>
        <hr />

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
                <CardText>Descripcion
                </CardText>
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
                <CardText>Descripcion
                </CardText>
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
                <CardText>Descripcion
                </CardText>
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

export default Productos;
