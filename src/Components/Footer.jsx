import React, { Component } from "react";
import "../App.css";

export class Footer extends Component {
  render() {
    return (
      <div className="container-footer">
        <div className="item-footer">
          <div className="redes-sociales">
            Rede social:
            <a href="https://www.facebook.com/people/Abarrotera-De-P%C3%A1tzcuaro-SA-CV/100013669020380/">Facebook</a>
          </div>
        </div>

        <div className="item-footer">
          <div className="contacto">
            <span>ABARROTERA DE PATZCUARO SA DE CV</span>
          </div>
        </div>
        <div className="item-footer">
          <div className="contacto">
            <span>
              LIB GRAL IG Z S/N COL CENTRO PATZCUARO, MICHOACÃN CP 61600
            </span>
          </div>
        </div>
        <div className="item-footer">
          <div className="contacto">
            <p>
              TEL:
            
              434-342-26-48
               434-596-84-51 </p>
               <p>E-mail:
               abarrotera_patzcuaro
               @hotmail.com 
              </p>
              <p>abatzcxc@gmail.com</p>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
