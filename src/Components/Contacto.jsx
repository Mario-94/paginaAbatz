import axios from "axios";
import React, { Component } from "react";
import atencion from "../images/atencionCliente.jpg";
import "../App.css";
export class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      description: "",
      opcion: "Cliente",
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }
  render() {
    const selector = (e) => {
      this.setState({ opcion: e.target.value });
    };
    const _handleChange = (e) => {
      //en esta parte hacemos la actualizacion de los datos trayendo el valor con el campo valor de nuestro formulario, haciendo referencia al valor del target name
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
    const _handleSubmit = async (e) => {
      try {
        //en esta constante traemmos todos los datos que se actualizaron en el metodo handleChange
        const datos = this.state;

        //en esta parte realizamos envio del formulario

        axios.post(`http://localhost:5000/email`, { datos }).then((res) => {
          // console.log(res);
        });
        alert(
          "Tus datos fueron enviados con exito, espera una respuesta pronto"
        );
      } catch (error) {
        console.log(error);
      }
    };
    const { firstName, lastName, phoneNumber, email, description } = this.state;
    // con esta linea controlaremos la carga del componente, permitiendo cargar el componente, de tal manera que en caso de alguna falla esta mostrara como que esta cargando
    return this.state.isLoading ? (
      <div className="spinner"></div>
    ) : (
      <div className="container-contacto">
        <div className="mensaje-contacto">
          <b>Déjanos tu mensaje</b>
        </div>
<div className="prueba-contacto">
        <section className="contenedor-items">
          <div className="items-contactos ">
            {/* aqui empieza el formulario */}
            <form onSubmit={_handleSubmit}>
              {/* Este metodo permite enviar la informacion a nuesta api */}
              {/* Esta parte es el nombre y apellido */}
              <select
                name="select"
                className="datos"
                onChange={(e) => selector(e)}
              >
                <option value="Cliente">Cliente</option>
                <option value="Provedor">Provedor</option>
              </select>

              <div>
                <input
                  className="datos"
                  type="text"
                  value={firstName}
                  onChange={
                    _handleChange
                  } /* Este metodo nos permite cambiar los datos por los que el usuario registre en los diferentes campos */
                  name="firstName" //este nombre tiene que ser igual al que usamos en el useState para poder acceder a el
                  id="Name"
                  required
                  placeholder="Nombre(s)"
                />
              </div>
              <div>
                <input
                  className="datos"
                  type="text"
                  value={lastName}
                  onChange={_handleChange}
                  name="lastName"
                  id="lastName"
                  required
                  placeholder="Apellido"
                />
              </div>
              {/* en esta parte es el corre y numero telefonico */}
              <div>
                <input
                  className="datos"
                  type="text"
                  value={email}
                  onChange={_handleChange}
                  name="email"
                  required
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  className="datos"
                  type="text"
                  value={phoneNumber}
                  onChange={_handleChange}
                  name="phoneNumber"
                  id="phoneNumber"
                  required
                  placeholder="Telefono o celular"
                />
              </div>
              <div>
                <input
                  type="textarea"
                  value={description}
                  onChange={_handleChange}
                  name="description"
                  id="description"
                  required
                  placeholder="Descripcion"
                  className="datos"
                />
              </div>
              <div className="datos">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </section>
        
        <div className="items-contactos">
          <img src={atencion} alt="Contacto" />
        </div>
        </div>
      </div>
    );
  }
}

export default Contacto;
