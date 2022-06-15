import React, { Component } from "react";
import "../App.css";
import googleplay from "../images/googleplay.png";

export class Footer extends Component {
  render() {
    return (
      <div className="container-footer">
        <div className="item-footer">
          <p>ABARROTERA DE PATZCUARO SA DE CV
          <br />
          <br />
           Nos ubicamos en: LIB GRAL IG Z #250COL CENTRO PATZCUARO, MICHOACN CP
            61600
            </p>
        </div>
        <div className="item-footer">
          <div>
            <span>Telefonos:</span><br />
            <span>434-342-26-48</span><br />
            <span>434-596-84-51</span><br />
            <span>443-504-9561</span><br />
            <span>E-mail: abarrotera_patzcuaro@hotmail.com</span><br />
            <span>abatzcxc@gmail.com</span>
          </div>
        </div>

        <div className="item-footer">
          <div className="redes-sociales">
            <span>Redes sociales:</span><br />
            <span>
              <a
                href="https://www.facebook.com/people/Abarrotera-De-P%C3%A1tzcuaro-SA-CV/100013669020380/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Matriz
              </a>
            </span><br />
            <span>
              <a
                href="https://www.facebook.com/people/Abarrotera-De-P%C3%A1tzcuaro-SA-CV/100013669020380/"
                target="_blank"
                rel="noopener noreferrer"
              >
                super abatz medio mayoreo
              </a>
            </span><br />
            <span>
              <a
                href="https://www.facebook.com/people/Abarrotera-De-P%C3%A1tzcuaro-SA-CV/100013669020380/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Super Abatz Pueblita:
              </a>
            </span><br />

            <a
              href="https://play.google.com/store/apps/details?id=com.dimsi.abatz_final"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="googleplay" src={googleplay} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
