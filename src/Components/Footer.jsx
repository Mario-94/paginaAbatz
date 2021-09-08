import React, { Component } from "react";
import "../App.css";
import { Row, Col, Container } from "reactstrap";
import face from "../images/face.svg";
export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col>
              <p>Redes sociales</p>
              <img width="40" src={face} alt="logo" />
            </Col>
            <Col>
              <p>ABARROTERA DE PATZCUARO SA DE CV.</p>
            </Col>
            <Col>
              LIB. GRAL. IG. S/N COL CENTRO PATZCUARO, MICHOACAN CP: 61600
            </Col>
            <Col>
              <p>Contactos:</p>
              <p>
                TEL: 434-342-26-48  
              </p>
              <p>TEL: 434-596-84-51</p>
              <p>E-mail:
                abarrotera_patzcuaro@hotmail.com abatzcxc@gmail.com</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
