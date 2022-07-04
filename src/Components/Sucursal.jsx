import React, { Component } from "react";
import Super from "../images/fachada-super.jpeg";
import matriz from "../images/fachada-matriz.jpg";
import pueblita from "../images/fachada-pueblita.jpg";
import "../App.css";

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
      <div className="spinner"></div>
    ) : (
      <div className="container-sucursal">
        <div className="titulo-sucursal">
          <span>
            En cualquiera de nuestras sucursales podrá encontrar una amplia
            variedad de productos
          </span>
        </div>
        {/* Matriz */}
        <div className="items-sucursal">
          <div className="datos-sucursal">
            <img src={matriz} alt="" />

            <div className="contacto-sucursal">
              <h4>Abarrotera De Patzcuaro S.A. De C.V.</h4>
              <div className="estilo-card-datos">
                <p>Comercio al medio mayoreo</p>
                <span className="dirreccion-sucursal">Domicilio: </span>

                <span> En Libramiento Iganacio Zaragoza #250 Col. centro</span>
              </div>
            </div>
            <div>
              <div className="contacto-sucursal">
                <div>Teléfonos</div>
                <div className="contacto-sucursal-datos">
                  <p>434-342-26-48</p>
                  <p>434-596-84-51</p>
                </div>
              </div>
              <div className="contacto-sucursal">
                <div>Email</div>
                <div className="contacto-sucursal-datos">
                  abarrotera_patzcuaro @hotmail.com abatzcxc@gmail.com
                </div>
              </div>
              <div className="contacto-sucursal">
                <div>Código postal</div>
                <div className="contacto-sucursal-datos">61600</div>
              </div>
            </div>

            <div className="mapa-sucursal">
              <iframe
                title="mySucursal"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.535955135257!2d-101.6183805578403!3d19.518590723028034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59e20edc39f50bba!2sAbarrotera%20De%20Patzcuaro%20S.A.%20De%20C.V.!5e0!3m2!1ses!2smx!4v1631108415240!5m2!1ses!2smx"
                width="100%"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Super */}
        <div className="items-sucursal">
          <div className="datos-sucursal">
            <img src={Super} alt="" />

            <div className="contacto-sucursal">
              <h4>Super ABATZ medio mayoreo</h4>
              <div className="estilo-card-datos">
                <p>Comercio al medio mayoreo</p>
                <span className="dirreccion-sucursal">Domicilio: </span>
                <span> Bernal Jiménez #61 Colonia El Centro</span>
              </div>
            </div>
            <div>
              <div className="contacto-sucursal">
                <div>Teléfonos</div>
                <div className="contacto-sucursal-datos">434-68-80-038</div>
              </div>
              <div className="contacto-sucursal">
                <div>Email</div>
                <div className="contacto-sucursal-datos">
                  abatzcxc@gmail.com
                </div>
              </div>
              <div className="contacto-sucursal">
                <div>Código postal</div>
                <div className="contacto-sucursal-datos">61600</div>
              </div>
            </div>

            <div className="mapa-sucursal">
              <iframe
                title="mySucursal"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.0933298830868!2d-101.61558582965148!3d19.509533297175185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d97d5b61d1711%3A0x95d13ef21bd88f41!2sSuper%20ABATZ%20medio%20mayoreo!5e0!3m2!1ses-419!2smx!4v1636060314508!5m2!1ses-419!2smx"
                width="100%"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* pueblita */}
        <div className="items-sucursal">
          <div className="datos-sucursal">
            <img src={pueblita} alt="" />

            <div className="contacto-sucursal">
              <h4>Super ABATZ Pueblita</h4>
              <div className="estilo-card-datos">
                <p>Comercio al medio mayoreo</p>
                <span className="dirreccion-sucursal">Domicilio: </span>
                <span> Ascencio #68 Pátzcuaro, Mich.</span>
              </div>
            </div>
            <div>
              <div className="contacto-sucursal">
                <div>Teléfonos</div>
                <div className="contacto-sucursal-datos">434-34-22-648</div>
              </div>
              <div className="contacto-sucursal">
                <div>Email</div>
                <div className="contacto-sucursal-datos">
                  abatzcxc@gmail.com
                </div>
              </div>
              <div className="contacto-sucursal">
                <div>Código postal</div>
                <div className="contacto-sucursal-datos">61600</div>
              </div>
            </div>

            <div className="mapa-sucursal">
              <iframe
                title="mySucursal"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d954.7613595394765!2d-101.60309025015675!3d19.51281181881597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d9795791836bd%3A0xe9fe2a3671c8eb5!2sSuper%20ABATZ%20Pueblita!5e0!3m2!1ses-419!2smx!4v1636060426104!5m2!1ses-419!2smx"
                width="100%"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="titulo-sucursal">
          <span>Tus Ganancias llegan RAPIDO</span>
        </div>
      </div>
    );
  }
}

export default Sucursal;
