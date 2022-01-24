import React, { Component } from "react";
import { Col, Row, Container, Spinner, NavLink,Nav,NavItem,TabPane,TabContent } from "reactstrap";
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
      <div className="ajustePagina">
        {this.state.isLoading ? (
          <Spinner color="danger" type="grow"></Spinner>
        ) : (
          <Container>
        
            <Row xs="2">
              <Col>
                <br />
                <iframe
                  title="myFrame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.535955135257!2d-101.6183805578403!3d19.518590723028034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59e20edc39f50bba!2sAbarrotera%20De%20Patzcuaro%20S.A.%20De%20C.V.!5e0!3m2!1ses!2smx!4v1631108415240!5m2!1ses!2smx"
                  width="100%"
                  height="460"
                  loading="lazy"
                  alt="mapaHome"
                />
              </Col>
              <Col>
                <h3>
                  Nos encontramos ubicados en Lib. Gral. Ignacion #250 Col.
                  Centro Patzcuaro
                </h3>
                <h2>Te esperamos</h2>
                <img src={tienda} width="100%" alt="imgTienda" />
              </Col>
            </Row>
            <h1 className="espacio">Ofertas de la semana</h1>
            {/* <Nav>
              <NavItem>
                <NavLink className="active"
                >
Super
                </NavLink>
              </NavItem>
            </Nav> */}
         <CardImage/>
          </Container>
        )}
        {/* en eesta parte pondremos lo que son la funcion de las pestañas */}
          {/* <TabContent activeTab="1">
    <TabPane tabId="1">
      <Row>
        <Col sm="12">
          <h4>
            Tab 1 Contents
          </h4>
        </Col>
      </Row>
    </TabPane>
    </TabContent> */}
      </div>
    );
  }
}

export default Home;
