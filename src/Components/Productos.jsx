import React, { Component } from "react";
import "../App.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
export class Productos extends Component {
  render() {
    return (
      <div>
        <div>
          {/* En esta seccion estan las tarjetas de las lineas que maneja la abarrotera  */}
          <Container>
            <Row>
              <h1>Marcas que manejamos </h1>
              <Col >
                <img
                  className="marcas"
                  src="https://grupobimbo-com-custom01-assets.s3.amazonaws.com/s3fs-public/grupo-bimbo-millward-brown_0.jpg"
                  alt="Card img cap"
                />
              </Col>
              <Col >
                <img
                  className="marcas"
                  src="https://assets.entrepreneur.com/content/3x2/2000/20190723142420-coca-cola.jpeg?width=600&crop=16:9"
                  alt="Card img cap"
                />
              </Col>
              <Col >
                <img
                  className="marcas"
                  src="https://assets.entrepreneur.com/content/3x2/2000/20190723142420-coca-cola.jpeg?width=600&crop=16:9"
                  alt="Card img cap"
                />
              </Col>
              <Col >
                <img
                  className="marcas"
                  src="https://assets.entrepreneur.com/content/3x2/2000/20190723142420-coca-cola.jpeg?width=600&crop=16:9"
                  alt="Card img cap"
                />
              </Col>
              <Col >
                <img
                  className="marcas"
                  src="https://grupobimbo-com-custom01-assets.s3.amazonaws.com/s3fs-public/grupo-bimbo-millward-brown_0.jpg"
                  alt="Card img cap"
                />
              </Col>
              <Col >
                <img
                  className="marcas"
                  src="https://grupobimbo-com-custom01-assets.s3.amazonaws.com/s3fs-public/grupo-bimbo-millward-brown_0.jpg"
                  alt="Card img cap"
                />
              </Col>
              <Col >
                <img
                  className="marcas"
                  src="https://grupobimbo-com-custom01-assets.s3.amazonaws.com/s3fs-public/grupo-bimbo-millward-brown_0.jpg"
                  alt="Card img cap"
                />
              </Col>
            </Row>
          </Container>
        </div>
        {/* empieza la seccion de productos por categoria el primer h1 es el mensaje y lo demas son las card delos productos conde estara la descripcion y el boton se esta pensando en un nuevo modulo o un modal */}
        <div>
          <h1>Categoria de productos</h1>
        </div>
        <div>
          <Container>
            <Row>
              <Col xs="6" sm="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="6" sm="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="6" sm="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="6" sm="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Productos;
