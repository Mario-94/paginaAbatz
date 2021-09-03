import React, { Component } from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

export class Nosotros extends Component {
  render() {
    return (
      <div className="p-3 bg-danger my-3 rounded">
        
          <ToastHeader>Acerca de Nosotros</ToastHeader>
          <ToastBody>
            Somos una empresa dedicada a la venta de mayoreo y menudeo con mas
            de 80 años de experiencia durante este tiempo hemos podido llegar a
            mas de 50 dependencias pertenecientes al estado de michoacan,
            surtiendo cada una de las tiendas sean grandes o pequeñas
          </ToastBody>
        
      </div>
    );
  }
}

export default Nosotros;
