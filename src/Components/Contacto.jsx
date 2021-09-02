import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class Contacto extends Component {
  
  render() {
    return (
      <div>
       <Form>
      <FormGroup>
        <Label for="exampleEmail">Correo</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="ejemplo@gmail.com" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Contraseña</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Contraseña" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Mensaje </Label>
        <Input type="textarea" name="text" id="Descripcion" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">Archivo</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
         Adjunte la queja o sugerencia
        </FormText>
      </FormGroup>
  
      <Button>Eviar</Button>
    </Form>
    </div>
    );
  }
}

export default Contacto;
