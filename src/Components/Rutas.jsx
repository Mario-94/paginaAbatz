import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck,faTruckMoving,faTruckFast,faCarSide } from "@fortawesome/free-solid-svg-icons";

function Rutas() {
  const [isListRuta, setIsListRuta] = useState(true);
  function handleClick() {
    setIsListRuta(!isListRuta);
  }

  return (
    <div className="container-rutas">
      <div className="rutas-data">
        <div className="encabezadoRutas">
          <b>
            Abarrotera de Pàtzcuaro cuenta con una extensa infraestructura en
            distribución contando con 52 zonas de distribución dentro del
            estado.
          </b>
        </div>
      </div>
      <div className="rutas-data">
        <div className="texto-rutas">
          <h2 className="encabezadoRutas">
            Nuestros canales de distribucion estan dedicados a cubir las
            necesidades de nuestros clientes.
          </h2>
          <ol>
            <li>Mayoreo</li>
            <li>Medio mayoreo</li>
            <li>Cuentas esenciales</li>
            <li>Tradicionales</li>
            <li>Consumidor final</li>
          </ol>
        </div>
      </div>
      <div className="rutas-data">
        <div className="mapa-rutas">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1yxxqnN_DABfECC0jfYwSCmGo3HQZV4-4&ehbc=2E312F"
            title="frameRutas"
          />
        </div>
      </div>
      <div className="rutas-data">
        <ol className="rutas-lista">
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Ario de Rosales
          </li>

          <li>
            <FontAwesomeIcon icon={faTruckMoving} />
            Zacapu
          </li>
          <li>
            <FontAwesomeIcon icon={faTruckFast} />
            Quiroga
          </li>
          <li>
            <FontAwesomeIcon icon={faCarSide} />
            Villa Madero
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Erongarícuaro
          </li>

          <li>
            <FontAwesomeIcon icon={faTruckMoving} />
            Puruándiro
          </li>
          <li>
            <FontAwesomeIcon icon={faTruckFast} />
            Panindícuaro
          </li>
          <li>
            <FontAwesomeIcon icon={faCarSide} />
            Cuanajo
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Huiramba
          </li>
          <li>
            <FontAwesomeIcon icon={faTruckMoving} />
            Puruarán
          </li>
          <li>
            <FontAwesomeIcon icon={faTruckFast} />
            Nueva Italia
          </li>
          <li>
            <FontAwesomeIcon icon={faCarSide} />
            Tingambato
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            La Huacana
          </li>
          <li>
            <FontAwesomeIcon icon={faTruckMoving} />
            Pátzcuaro
          </li>
          <li>
            <FontAwesomeIcon icon={faTruckFast} />
            Buena Vista
          </li>
          <li>
            <FontAwesomeIcon icon={faCarSide} />
            Zirahuén
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            El Cahulote
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Tacámbaro
          </li>

          <li>
            <FontAwesomeIcon icon={faTruckMoving} />
            Ihuatzio
          </li>
          <li>
            <FontAwesomeIcon icon={faTruckFast} />
            Uruapan
          </li>
          <li>
            <FontAwesomeIcon icon={faCarSide} />
            Paracho de Verduzco
          </li>
          <li>
            
            Zinapécuaro
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Huaniqueo de Morales
          </li>
          <li>
            <FontAwesomeIcon icon={faTruckMoving} />
            Erongarícuaro
          </li>
          <li>
            <FontAwesomeIcon icon={faTruckFast} />
            Santa Clara del Cobre
          </li>
          <li>
            <FontAwesomeIcon icon={faCarSide} />
            Uriangato - Morelia
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Morelia
          </li>
          <li>
            <FontAwesomeIcon icon={faTruckMoving} />
            Opopeo
          </li>
          <li>
            <FontAwesomeIcon icon={faTruckFast} />
            Tecario
          </li>
          <li>
            <FontAwesomeIcon icon={faCarSide} />
            Pedernales
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Taretan
          </li>
          <li>
            <FontAwesomeIcon icon={faTruckMoving} />
            Acuitzio del Canje
          </li>
          <li>
            <FontAwesomeIcon icon={faTruckFast} />
            Cherán
          </li>
          <div
            className={
              isListRuta ? "oculta-rutas-estilo" : "mostrar-rutas-estilo"
            }
          >
            <li>
              <FontAwesomeIcon icon={faCarSide} />
              Coeneo
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              Comanja
            </li>
            <li>
              <FontAwesomeIcon icon={faTruckMoving} />
              Cucuchucho
            </li>
            <li>
              <FontAwesomeIcon icon={faTruckFast} />
              Cuitzeo del Porvenir
            </li>
            <li>
              <FontAwesomeIcon icon={faCarSide} />
              El Pueblito
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              La Vitela
            </li>
            <li>
              <FontAwesomeIcon icon={faTruckMoving} />
              Lagunillas
            </li>
            <li>
              <FontAwesomeIcon icon={faTruckFast} />
              Lombardía
            </li>
            <li>
              <FontAwesomeIcon icon={faCarSide} />
              Matugeo
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              Nahuatzen
            </li>
            <li>
              <FontAwesomeIcon icon={faTruckMoving} />
              Pátzcuaro
            </li>
            <li>
              <FontAwesomeIcon icon={faTruckFast} />
              San Francisco Pichátaro
            </li>
            <li>
              <FontAwesomeIcon icon={faCarSide} />
              Puácuaro
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              San ángel
            </li>
            <li>
              <FontAwesomeIcon icon={faTruckMoving} />
              Tocuaro
            </li>
            <li>
              <FontAwesomeIcon icon={faTruckFast} />
              Turicato
            </li>
            <li>
              <FontAwesomeIcon icon={faCarSide} />
              Tzintzuntzan
            </li>
            <li>
            <FontAwesomeIcon icon={faTruckFast} />
              San Francisco Uricho
            </li>
            <li>
            <FontAwesomeIcon icon={faTruckMoving} />
              Villa Jiménez
            </li>
          </div>
          <div onClick={handleClick}>
            {isListRuta ? (
              <div
                className={
                  isListRuta ? "bottom-mostrar-rutas" : "bottom-ocultar-rutas"
                }
              >
                mostrar más...
              </div>
            ) : (
              <div
                className={
                  isListRuta ? "bottom-ocultar-rutas" : "bottom-mostrar-rutas"
                }
              >
                <h3>ocultar</h3>
              </div>
            )}
          </div>
        </ol>
      </div>
    </div>
  );
}

export default Rutas;
