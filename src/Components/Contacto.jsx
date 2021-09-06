import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,


} from "reactstrap";

export class Contacto extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={4}>
            <Row>
              
            <h2>Que podemos hacer por ti </h2>
            <br />
              
           
             <p>Comunicate a nuestros siguientes modulos de atencion</p>
           
             <p>Tel:4343422648 o 434345968451</p>
             <p>Correo electronico: abarrotera_patzcuaro@hotmail.com
abatzcxc@gmail.com</p>
            </Row>
          </Col>
          <Col xs="auto ">
            <Form>
              <FormGroup>
                <Row>
                  <Col xs="2">
                    <Label for="exampleEmail">Correo</Label>
                  </Col>
                  <Col xs="10">
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="ejemplo@gmail.com"
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col xs="2">
                    <Label for="examplePassword">Telefono</Label>
                  </Col>
                  <Col xs="10">
                    <Input
                      type="text"
                      name="telefono"
                      id="exampletelefono"
                      placeholder="Telefono o celular"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xs="2">
                    <Label for="exampleText">Descripcion </Label>
                  </Col>
                  <Col xs="10">
                    <Input type="textarea" name="text" id="Descripcion" placeholder="Describe tu problema, queja o suferencia" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xs="2">
                    <Label for="exampleFile">
                      Adjunte el archivo de queja o sugerencia
                    </Label>
                  </Col>
                  <Col xs="10">
                    <Input type="file" name="file" id="exampleFile" />
                  </Col>
                </Row>
              </FormGroup>
              <Row>
                <Col xs="10">
                  <FormGroup check>
                    <Col sm={{ size: 10, offset: 2 }}>
                      <Button>Enviar</Button>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contacto;
