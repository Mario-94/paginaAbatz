import React, { Component } from "react";
import "../App.css";
import googleplay from "../images/googleplay.png";

export class Footer extends Component {
  render() {
    return (
      <div className="container-footer">
        <div className="item-footer">
          <span>ABARROTERA DE PATZCUARO SA DE CV</span>
        </div>
        <div className="item-footer">
          <span>
            nos ubicamos en: 
            LIB GRAL IG Z #250COL CENTRO PATZCUARO, MICHOACN CP 61600
          </span>
        </div>

        <div className="item-footer">
          <div>
            <p>Telefonos:</p>
            <p>434-342-26-48  </p>
            <p>434-596-84-51</p>
            <p>443-504-9561</p>
            <p>E-mail: abarrotera_patzcuaro @hotmail.com</p>
            <p>abatzcxc@gmail.com</p>
          </div>
        </div>

        <div className="item-footer">
          <div className="redes-sociales">
            <p>Redes sociales:</p>
            <p>
              <a href="https://www.facebook.com/people/Abarrotera-De-P%C3%A1tzcuaro-SA-CV/100013669020380/"  target="_blank" rel="noopener noreferrer">
                Matriz
              </a>
            </p>
            <p>
              <a href="https://www.facebook.com/people/Abarrotera-De-P%C3%A1tzcuaro-SA-CV/100013669020380/"  target="_blank" rel="noopener noreferrer">
                Super Abatz medio mayoreo
              </a>
            </p>

            <p>
              <a href="https://www.facebook.com/people/Abarrotera-De-P%C3%A1tzcuaro-SA-CV/100013669020380/" target="_blank" rel="noopener noreferrer">
                Super Abatz Pueblita:
              </a>
            </p>

            <a href="https://play.google.com/store/apps/details?id=com.dimsi.abatz_final" target="_blank" rel="noopener noreferrer">
              <img className="googleplay" src={googleplay} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
