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
      <Container className="themed-container" fluid={true}>
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
                <Input type="textarea" name="text" id="Descripcion" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col xs="2">
                <Label  for="exampleFile">
                  Adjunte el archivo de queja o sugerencia
                </Label>
              </Col>
              <Col xs="10">
                <Input  type="file" name="file" id="exampleFile" />
              </Col>
            </Row>
          </FormGroup>
          <Row>
            <Col xs="10">
          <FormGroup check >
           
              <Col sm={{ size: 10, offset: 2 }}>
                <Button>Enviar</Button>
              </Col>
          
          </FormGroup>
          </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Contacto;
