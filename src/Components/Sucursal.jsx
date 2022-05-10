import React, { Component } from "react";
import {
  Col,
  Row,
  Container,
  ListGroup,
  ListGroupItem,
  ToastHeader,
  Spinner,
} from "reactstrap";

export class Sucursal extends Component {
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
      <div className="container-sucursal">
        <div className="titulo-sucursal">
          <span>
            En cualquiera de nuestras sucursales podra encontrar una amplia
            variedad de productos
          </span>
        </div>
        <div className="items-sucursal">
          <div className="datos-sucursal">
            <div className="mapa-sucursal">
              <iframe
                title="mySucursal"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.535955135257!2d-101.6183805578403!3d19.518590723028034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59e20edc39f50bba!2sAbarrotera%20De%20Patzcuaro%20S.A.%20De%20C.V.!5e0!3m2!1ses!2smx!4v1631108415240!5m2!1ses!2smx"
                width="100%"
                loading="lazy"
              />
            </div>
            <div className="info-sucursal">
              <p>Nos encontramos ubicados:</p>
              <p> En Libramiento Iganacio Zaragoza # 356B</p>
              <p>Colonia el centro</p>
              <p>Con horarios: lunes a viernes 7:00 am a 8:30 pm</p>
              <p>Sábado: 7:00 AM a 8:30 PM Domingo: 7:00 AM a 2:00 PM</p>
            </div>
          </div>
        </div>
        <div className="items-sucursal">
          <div className="datos-sucursal">
            <div className="mapa-sucursal">
              <iframe
                title="mySucursal"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.0933298830868!2d-101.61558582965148!3d19.509533297175185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d97d5b61d1711%3A0x95d13ef21bd88f41!2sSuper%20ABATZ%20medio%20mayoreo!5e0!3m2!1ses-419!2smx!4v1636060314508!5m2!1ses-419!2smx"
                width="100%"
                loading="lazy"
              />
            </div>
            <div className="info-sucursal">
              <p>Nos encontramos ubicados:</p>
              <p> bernal jiménez #61</p>
              <p>Colonia el centro</p>
              <p>Con horarios: lunes a viernes 7:00 am a 8:30 pm</p>
              <p>Sábado: 7:00 AM a 8:30 PM Domingo: 7:00 AM a 2:00 PM</p>
            </div>
          </div>
        </div>
        <div className="items-sucursal">
          <div className="datos-sucursal">
            <div className="mapa-sucursal">
              <iframe
                title="mySucursal"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d954.7613595394765!2d-101.60309025015675!3d19.51281181881597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d9795791836bd%3A0xe9fe2a3671c8eb5!2sSuper%20ABATZ%20Pueblita!5e0!3m2!1ses-419!2smx!4v1636060426104!5m2!1ses-419!2smx"
                width="100%"
                loading="lazy"
              />
            </div>
            <div className="info-sucursal">
              <p>Nos encontramos ubicados:</p>
              <p>asencio</p>
              <p>Colonia pueblita</p>
              <p>Con horarios: lunes a viernes 7:00 am a 8:30 pm</p>
              <p>Sábado: 7:00 AM a 8:30 PM Domingo: 7:00 AM a 2:00 PM</p>
            </div>
          </div>
        </div>

      
          <div className="titulo-sucursal">
            <span>recuerda que en abatz Tus Ganancias llegan RAPIDO</span>
          </div>
        
      </div>
    );
  }
}

export default Sucursal;
