import React, { useState } from "react";
import "../App.css";
import {
  TabContent,
  CardSubtitle,
  CardBody,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardImg,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";
import classnames from "classnames";

const Productos = (props) => {
  const [activeTab, setActiveTab] = useState("1");//este 1 funciona para que siempre este en el tab numero 1 tengamos algo para mostrar

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <div>
        {/* En esta seccion estan las tarjetas de las lineas que maneja la abarrotera  */}
        <Container>
          <Row>
            <h1>Marcas que manejamos </h1>
            <Col>
              <img
                className="marcas"
                src="https://grupobimbo-com-custom01-assets.s3.amazonaws.com/s3fs-public/grupo-bimbo-millward-brown_0.jpg"
                alt="Card img cap"
              />
            </Col>
            <Col>
              <img
                className="marcas"
                src="https://assets.entrepreneur.com/content/3x2/2000/20190723142420-coca-cola.jpeg?width=600&crop=16:9"
                alt="Card img cap"
              />
            </Col>
            <Col>
              <img
                className="marcas"
                src="https://assets.entrepreneur.com/content/3x2/2000/20190723142420-coca-cola.jpeg?width=600&crop=16:9"
                alt="Card img cap"
              />
            </Col>
            <Col>
              <img
                className="marcas"
                src="https://assets.entrepreneur.com/content/3x2/2000/20190723142420-coca-cola.jpeg?width=600&crop=16:9"
                alt="Card img cap"
              />
            </Col>
            <Col>
              <img
                className="marcas"
                src="https://grupobimbo-com-custom01-assets.s3.amazonaws.com/s3fs-public/grupo-bimbo-millward-brown_0.jpg"
                alt="Card img cap"
              />
            </Col>
            <Col>
              <img
                className="marcas"
                src="https://grupobimbo-com-custom01-assets.s3.amazonaws.com/s3fs-public/grupo-bimbo-millward-brown_0.jpg"
                alt="Card img cap"
              />
            </Col>
            <Col>
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
          <div>
            {/* el nav funciona para las pestañas que son de la categoria de productos que manejan */}
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  PRODUCTOS FRESCOS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  CARNES FRIAS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  LACTEOS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "4" })}
                  onClick={() => {
                    toggle("4");
                  }}
                >
                  ALIMENTOS BASICOS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "5" })}
                  onClick={() => {
                    toggle("5");
                  }}
                >
                  PAN CEREAL Y OTRAS PASTAS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "6" })}
                  onClick={() => {
                    toggle("6");
                  }}
                >
                  ARTICULOS PARA EL HOGAR
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "7" })}
                  onClick={() => {
                    toggle("7");
                  }}
                >
                  FIESTA
                </NavLink>
              </NavItem>
            </Nav>
            {/* Este es el contenido de los tab de categoria de productos */}
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <Col xs="6">
                      <Card>
                        <CardImg
                          top
                          width="100%"
                          src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                          alt="Cardimagecap"
                        />
                        <CardBody>
                          <CardTitle tag="h5">Card title</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">
                            Card subtitle
                          </CardSubtitle>
                          <CardText>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col xs="6">
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                        alt="Cardimagecap"
                      />
                      <CardBody>
                        <CardTitle tag="h5">carnes frias</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                          carnes frias
                        </CardSubtitle>
                        <CardText>descripcion</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col xs="6">
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                        alt="Cardimagecap"
                      />
                      <CardBody>
                        <CardTitle tag="h5">Lacteos</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                          lacteos
                        </CardSubtitle>
                        <CardText>descripcion</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4">
                <Row>
                  <Col xs="6">
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                        alt="Cardimagecap"
                      />
                      <CardBody>
                        <CardTitle tag="h5">alementos basicos</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                          alimetos basicos
                        </CardSubtitle>
                        <CardText>descripcion</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="5">
                <Row>
                  <Col xs="6">
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                        alt="Cardimagecap"
                      />
                      <CardBody>
                        <CardTitle tag="h5">
                          pan cereal y otras pastas
                        </CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                          pan cereal y otras pastas
                        </CardSubtitle>
                        <CardText>descripcion</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="6">
                <Row>
                  <Col xs="6">
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                        alt="Cardimagecap"
                      />
                      <CardBody>
                        <CardTitle tag="h5">articulos para el hogar</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                          articulos para el hogar
                        </CardSubtitle>
                        <CardText>descripcion</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="7">
                <Row>
                  <Col xs="6">
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                        alt="Cardimagecap"
                      />
                      <CardBody>
                        <CardTitle tag="h5">fiesta</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                          FIESTA
                        </CardSubtitle>
                        <CardText>descripcion</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="8">
                <Row>
                  <Col xs="6">
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        src="https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/"
                        alt="Cardimagecap"
                      />
                      <CardBody>
                        <CardTitle tag="h5">carnes frias</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                          carnes frias
                        </CardSubtitle>
                        <CardText>descripcion</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Productos;
