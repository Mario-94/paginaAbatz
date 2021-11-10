import React, { Component } from "react";
import "../App.css";
import { Row, Col, Container, NavLink, Nav } from "reactstrap";
import face from "../images/face.svg";

export class Footer extends Component {
  render() {
    return (
      <div>
        <Container className="footer" fluid>
          <Row xs="3">
            <Col xs="2" >
              <p>Redes sociales</p>
              <Nav>
                <NavLink
                  active
                  href="https://www.facebook.com/ABATZ-1090409927663523/?hc_ref=ARQPgDU9ZQqdSa8fzmozuS4VHwAYuWWKg05GDc6CgWh6UgqTlpO8mFXsgnHJ2_kJYEs&fref=nf&__tn__=kC-R"
                >
                  <img width="40" src={face} alt="logo" />
                </NavLink>
              </Nav>
            </Col>
            <Col >
              <p>ABARROTERA DE PATZCUARO SA DE CV.</p>
              LIB. GRAL. IG. #250 COL CENTRO PATZCUARO, MICHOACAN CP: 61600
            </Col>
            {/* con este controlo el de contacto */}
            <Col xs="6" >
              <p>Contactos:</p>

              <p>TEL: 434-342-26-48</p>

              <p>TEL: 434-596-84-51</p>

              <p className="letraFooter">
                E-mail: abarrotera_patzcuaro@hotmail.com 
                
                abatzcxc@gmail.com
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
