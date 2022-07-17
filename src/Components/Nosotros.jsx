import React, { Component } from "react";
import "../App.css";
import logo from "../images/Icono.png";
import noventaVeinticuatro from "../images/logo-9024.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
// import honradez from "../images/honradez.png";
// import AmorAlTrabajo from "../images/AmorAlTrabajo.png";
// import Gratitud from "../images/Gratitud.png";
// import honestidad from "../images/honestidad.png";
// import puntualidad from "../images/puntualidad.png";
// import RespetoPorElDerecho from "../images/RespetoPorElDerecho.png";
// import responsabilidad from "../images/responsabilidad.png";
// import tenacidad from "../images/tenacidad.png";

export class Nosotros extends Component {
  render() {
    return (
      <div className="container-acerdaDe">
        <div className="acercaDeNosotros">
          <h1>Quiénes somos?</h1>
          <img src={logo} alt="logo" title="Abatz" className="logo-nosotros" />
          <p>
            "Somos una empresa distribuidora de comestibles y productos afines
            en el mercado del abarrote, dentro de la región de Michoacán y con
            presencia en Guanajuato. Fundada en 1993 por Antonio Villagómez
            Vera, actual director general, nuestro éxito es impulsado por la
            productividad de nuestro personal, siempre enfocados en alcanzar
            nuestros objetivos, y en nuestra pronta atención al cliente en un
            máximo de 24HRS".
          </p>
        </div>
        <div className="misionVision">
          <div className="acercaMision">
            <h1>Misión</h1>
            <p>
              "Especializados en la distribución de productos básicos para el
              hogar, con personal productivo y con la infrestructura apropiada
              para ofrecer un servicio personalizado en nuestros puntos de venta
              en Pátzcuaro, y con entrega ágil y eficiente máximo a las 24 horas
              para nuestro clientes al interior del estado de Michoacán".
            </p>
          </div>
          <img
            src={noventaVeinticuatro}
            alt=""
            className="noventaVeintiCuatro-nosotros"
          />
          <div className="acercaVision">
            <h1>Visión</h1>
            <p>
              "Ser la empresa líder en la distribución de productos básicos para
              el hogar en la ciudad de Pátzcuaro y con presencia competitiva al
              interior del estado de Michoacán, distinguiéndose por su servicio
              en 24 horas".
            </p>
          </div>
        </div>
        <div className="acercaDeNosotros">
          <div className="valores">
            <h1>Valores</h1>

            <ul className="cuadro-valores">
              <p className=" integrate">
                La integracion entre un equipo de trabajo es la clave, es por
                eso que en ABATZ fomentamos los siguientes valores, para que
                nuestros empleados y clientes se sientan integrados en esta
                familia:
              </p>

              <li>
                <FontAwesomeIcon icon={faBagShopping} title="Valores"className="valoresList" />
                Respeto
              </li>
              <li>
                <FontAwesomeIcon icon={faBagShopping} title="Valores"className="valoresList" />
                Integridad
              </li>
              <li>
                <FontAwesomeIcon icon={faBagShopping} title="Valores"className="valoresList" />
                Gratitud
              </li>
              <li>
                <FontAwesomeIcon icon={faBagShopping} title="Valores"className="valoresList" />
                Calidad
              </li>
              <li>
                <FontAwesomeIcon icon={faBagShopping} title="Valores"className="valoresList" />
                Confianza
              </li>
              <li>
                <FontAwesomeIcon icon={faBagShopping} title="Valores"className="valoresList" />
                Honestidad
              </li>
              <li>
                <FontAwesomeIcon icon={faBagShopping} title="Valores"className="valoresList" />
                Compromiso
              </li>
              <li>
                <FontAwesomeIcon icon={faBagShopping} title="Valores"className="valoresList" />
                Responsabilidad
              </li>
              <li>
                <FontAwesomeIcon icon={faBagShopping} title="Valores"className="valoresList" />
                Equipo
              </li>
              <li>
                <FontAwesomeIcon icon={faBagShopping} title="Valores"className="valoresList" />
                Pasion
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Nosotros;
