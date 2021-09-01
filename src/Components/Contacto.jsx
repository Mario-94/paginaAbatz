import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class Contacto extends Component {
  render() {
    return (
      
       <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Correo</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Ejemplo@correo.com" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Contraseña</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="Contraseña" />
        </Col>
      </FormGroup>
     
      <FormGroup row>
        <Label for="exampleText" sm={2}>Descripcion</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>Adjuntar archivo</Label>
        <Col sm={10}>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Adjunte algun archivo referente a su queja o sugerencia
          </FormText>
        </Col>
      </FormGroup>
    
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Enviar</Button>
        </Col>
      </FormGroup>
    </Form>
      
    );
  }
}

export default Contacto;
