import axios from 'axios';
import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Spinner,
} from 'reactstrap';
import atencion from '../images/atencionCliente.jpg';

export class Contacto extends Component {
  state = {
    isLoading: true,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    description: '',
  };

  _handleChange = (e) => {
    //en esta parte hacemos la actualizacion de los datos trayendo el valor con el campo valor de nuestro formulario, haciendo referencia al valor del target name
    const {name, value}=e.target;
    this.setState({[name]:value})
  };
  _handleSubmit = async (e) => {

    try {
      //en esta constante traemmos todos los datos que se actualizaron en el metodo handleChange
      const datos=this.state
      
      //en esta parte realizamos envio del formulario
      axios.post(`http://localhost:5000/email`, { datos })
        .then(res => {
         // console.log(res);
        })
        alert('Tus datos fueron enviados con exito, espera una respuesta pronto')

    } catch (error) {
      console.log(error)
    }

  };
  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }
  render() {
    const {firstName,lastName,phoneNumber,email,description}=this.state
    // con esta linea controlaremos la carga del componente, permitiendo cargar el componente, de tal manera que en caso de alguna falla esta mostrara como que esta cargando
    return this.state.isLoading ? (
      <Spinner color="danger"></Spinner>
    ) : (
      <div className='container-contacto'>
       <div className='imagen-contacto' >

          <img src={atencion}  alt="mapaContacto" />
       </div>
          {/* en esta parte es el mensaje  */}
          <h1>Dejanos tu mensaje </h1>
          <hr width="100%" />
          {/* aqui empieza el formulario */}
          <form onSubmit={this._handleSubmit}> {/* Este metodo permite enviar la informacion a nuesta api */}
            <Row>
              {/* Esta parte es el nombre y apellido */}
              <Col xs="6">
                <Input
                  type="text"
                  value={firstName}
                  onChange={this._handleChange} /* Este metodo nos permite cambiar los datos por los que el usuario registre en los diferentes campos */
                  name="firstName"//este nombre tiene que ser igual al que usamos en el useState para poder acceder a el
                  id="Name"
                  required
                  placeholder="Nombre(s)"
                />
              </Col>

              <Col xs="6">
                <Input
                  type="text"
                  value={lastName}
                  onChange={this._handleChange}
                  name="lastName"
                  id="lastName"
                  required
                  placeholder="Apellido"
                />
                <br />
              </Col>
              {/* en esta parte es el corre y numero telefonico */}
              <Col xs="6">
                <Input
                  type="text"
                  value={email}
                  onChange={this._handleChange}
                  name="email"
                  required
                  id="email"
                  placeholder="Email"
                />
              </Col>

              <Col xs="6">
                <Input
                  type="text"
                  value={phoneNumber}
                  onChange={this._handleChange}
                  name="phoneNumber"
                  id="phoneNumber"
                  required
                  placeholder="Telefono o celular"
                />
                <br />
              </Col>
              <Col>
                <Input
                  type="textarea"
                  value={description}
                  onChange={this._handleChange}
                  name="description"
                  id="description"
                  required
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
          </form>
        </div>
      
    );
  }
}

export default Contacto;
