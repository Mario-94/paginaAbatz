import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import atencion from '../images/atencionCliente.jpg'

export class Contacto extends Component {
  render() {
    return (
      <Container hover>
        <img src={atencion} width="100%" alt="mapaContacto"/>
        {/* en esta parte es el mensaje  */}
        <h1>Dejanos tu mensaje </h1>
        <hr width="100%" />
        {/* aqui empieza el formulario */}
        <Form>
          <Row>
            {/* Esta parte es el nombre y apellido */}
            <Col xs="6">
              <Input
                type="text"
                name="name"
                id="Name"
                placeholder="Nombre(s)"
              />
            </Col>

            <Col xs="6">
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Apellido"
              />
              <br />
            </Col>
            {/* en esta parte es el corre y numero telefonico */}
            <Col xs="6">
              <Input type="text" name="email" id="email" placeholder="Email" />
            </Col>

            <Col xs="6">
              <Input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Telefono o celular"
              />
              <br />
            </Col>
            <Col>
              <Input
                type="textarea"
                name="email"
                id="exampleTextarea"
                placeholder="Descripcion"
              />
              <br />
            </Col>
            <FormGroup check>
              <Col xs="12">
                <Button>Enviar</Button>
              </Col>
            </FormGroup>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Contacto;
