import React, { Component } from "react";
import "../App.css";
import honradez from "../images/honradez.png";
import AmorAlTrabajo from "../images/AmorAlTrabajo.png";
import Gratitud from "../images/Gratitud.png";
import honestidad from "../images/honestidad.png";
import puntualidad from "../images/puntualidad.png";
import RespetoPorElDerecho from "../images/RespetoPorElDerecho.png";
import responsabilidad from "../images/responsabilidad.png";
import tenacidad from "../images/tenacidad.png";
export class Nosotros extends Component {
  render() {
    return (
      <div className="container-acerdaDe">
        <div className="acercaDeNosotros">
          <h1>Quiénes somos?</h1>
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
              "Somos una empresa especializada en la distribución de productos
              de abarrote en la región y sus alrededores, con personal
              productivo y enfocado al logro de objetivos con atención
              personalizada a nuestros clientes y con entrega de producto máximo
              24HRS".
            </p>
          </div>
          <div className="acercaVision">
            <h1>Visión</h1>
            <p>
              "Ser una empresa líder en la distribución de abarrote en la región
              de Pátzcuaro y sus alrededores y con presencia competitiva al
              interior de Michoacán".
            </p>
          </div>
        </div>
        <div className="acercaDeNosotros">
          <div className="valores">
            <h1>Valores</h1>
            <section className="cuadro-valores">
              <img src={honradez} alt="" />
              <img src={AmorAlTrabajo} alt="" />
              <img src={Gratitud} alt="" />
              <img src={honestidad} alt="" />
              <img src={puntualidad} alt="" />
              <img src={RespetoPorElDerecho} alt="" />
              <img src={responsabilidad} alt="" />
              <img src={tenacidad} alt="" />
            </section>
            {/*  <ul className="cuadro-valores">
              <li>
                <strong>Tenacidad: </strong>Proponemos lograr un objetivo no
                parar hasta lograrlo.
              </li>
              <li>
                <strong>Honradez:</strong> Basamos nuestro actor en la sinceridad de pensamiento y acción.
                El respeto a las cosas ajenas y la no intervención en la vida y
                asuntos personales de nuestros compañeros.
              </li>
              <li>
                <strong>Puntualidad:</strong> La buena organización y efectiva
                planeación, nos obliga a cumplir con nuestro compromiso en
                tiempo y forma.
              </li>
              <li>
                <strong>Responsabilidad:</strong> Es hacer nuestro trabajo,
                concluir con la tarea encomendada, es responder por nuestra
                actividad y aceptar con seriedad nuestros compromisos.
              </li>
              <li>
                <strong>Honestidad:</strong> Es tener la verdad como principio
                básico, que nuestras acciones sean correctas, nos hacen ser
                congruentes con nuestro sistema de creencias tener conciencia de
                lo que llevamos a cabo en nuestro actuar y pensar, con el
                objetivo de tener confianza en nosotros mismos.
              </li>
              <li>
                <strong>Gratitud:</strong> La amistad, la bondad entre nosotros
                nos brindan solidad, y al final de nuestra jornada laboral
                podemos dar la gracias por trabajar en equipo y pertenecer a una
                empresa que permita tener un desarrollo laboral continuo.
              </li>
              <li>
                <strong>Respeto por el derecho:</strong> Tomar en cuenta a todos
                nuestros compañeros, rechazar cualquier propósito de ofensa o
                agresión, tenemos la convicción de escuchar y aceptar puntos de
                vista diferentes a los nuestros.
              </li>
              <li>
                <strong>Amor al trabajo:</strong> Trabajar con gusto, que sean
                nuestras actividades y logros que obtenemos un alimento diario
                que me mantenga motivado(a)
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Nosotros;
