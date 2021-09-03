import React, { Component } from "react";
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
  Table,
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
             
              
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Productos;
