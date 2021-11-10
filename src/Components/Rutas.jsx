import React, { Component } from "react";
import {Container} from 'reactstrap'

export class Rutas extends Component {
  render() {
    return (
      <div>
        <h1>
          Abatzcuenta con una extensa infraestructura en distribución en el
          estado con 23 zonas de distribución a nivel estatal.
        </h1>
        <h2>Nuestros canales de distribución</h2>
        <hr />
        <h2>Estan dedicados a cubir las necesidades de nuestros clientes.</h2>
        <div>
          <ul>
            <ol>
              <li>Mayoreo</li>
              <li>Medio mayoreo</li>
              <li>Cuentas especiales</li>
              <li>Tradicionales</li>
              <li>Consumidor final</li>
            </ol>
          </ul>
        </div>



        <Container>
        <iframe src="https://www.google.com/maps/d/embed?mid=1punp5PvCJz4mQUsSn_PaCTAUZy3nxLWR" width="100%" height="480"  title="myMaps"></iframe>
        </Container>
      </div>
    );
  }
}

export default Rutas;
