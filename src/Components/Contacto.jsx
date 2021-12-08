import axios from "axios";
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Spinner,
} from "reactstrap";
import atencion from "../images/atencionCliente.jpg";

export class Contacto extends Component {
  state = {
    isLoading: true,
    name: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    description: "",
  };

  _handleChange = (e) => {
    this.setState({
      name: e.target.value,
      lastName: e.target.value,
      phoneNumber: e.target.value,
      email: e.target.value,
      description: e.target.value,
    });
  };
  _handleSubmit = async(e) => {
    e.preventDefault();
    const { name, lastName,email, phoneNumber, description } = this.state;
axios.post(`http://localhost:5000/email`,{name,lastName,email,phoneNumber,description}).then(res=>{
  console.log(res);
  console.log(res.data)
})
  };
  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }
  render() {
    // con esta linea controlaremos la carga del componente, permitiendo cargar el componente, de tal manera que en caso de alguna falla esta mostrara como que esta cargando
    return this.state.isLoading ? (
      <Spinner color="danger"></Spinner>
    ) : (
      <div>
        <Container>
          <img src={atencion} width="100%" alt="mapaContacto" />
          {/* en esta parte es el mensaje  */}
          <h1>Dejanos tu mensaje </h1>
          <hr width="100%" />
          {/* aqui empieza el formulario */}
          <Form onSubmit={this._handleSubmit}>
            <Row>
              {/* Esta parte es el nombre y apellido */}
              <Col xs="6">
                <Input
                  type="text"
                  onChange={this._handleChange}
                  name="name"
                  id="Name"
                  placeholder="Nombre(s)"
                />
              </Col>

              <Col xs="6">
                <Input
                  type="text"
                  onChange={this._handleChange}
                  name="lastName"
                  id="lastName"
                  placeholder="Apellido"
                />
                <br />
              </Col>
              {/* en esta parte es el corre y numero telefonico */}
              <Col xs="6">
                <Input
                  type="text"
                  onChange={this._handleChange}
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </Col>

              <Col xs="6">
                <Input
                  type="text"
                  onChange={this._handleChange}
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Telefono o celular"
                />
                <br />
              </Col>
              <Col>
                <Input
                  type="textarea"
                  onChange={this._handleChange}
                  name="description"
                  id="description"
                  placeholder="Descripcion"
                />
                <br />
              </Col>
              <FormGroup check>
                <Col xs="12">
                  <Button type="submit">Enviar</Button>
                </Col>
              </FormGroup>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Contacto;
