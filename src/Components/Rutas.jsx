import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  ToastHeader,
  Spinner,
} from "reactstrap";

export class Rutas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }
  render() {
    return this.state.isLoading ? (
      <Spinner color="danger"></Spinner>
    ) : (
      <div>
        <ToastHeader>
          <h2>
            {" "}
            Abatzcuenta con una extensa infraestructura en distribución en el
            estado con 23 zonas de distribución a nivel estatal.
          </h2>
        </ToastHeader>
        <ListGroup flush>

        <h2> Nuestros canales de distribucion estan dedicados a cubir las necesidades de nuestros clientes.</h2>
       <ListGroupItem disabled> 
       <ul>
            <ol>
              <h4>
              <li>Mayoreo</li>
              <li>Medio mayoreo</li>
              <li>Cuentas especiales</li>
              <li>Tradicionales</li>
              <li>Consumidor final</li>
              </h4>
            </ol>
          </ul>

       
       </ListGroupItem>
        <Container>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1punp5PvCJz4mQUsSn_PaCTAUZy3nxLWR"
            width="100%"
            height="480"
            title="myMaps"
          ></iframe>
        </Container>
        </ListGroup>
      </div>
    );
  }
}

export default Rutas;
