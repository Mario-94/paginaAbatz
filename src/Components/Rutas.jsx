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
          <span>
            abarrotera de patzcuaro cuenta con una extensa infraestructura en
            distribución contando con 52 zonas de distribución dentro del
            estado.
          </span>
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
            <li>Cuentas eslieciales</li>
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
            <FontAwesomeIcon icon={faTruck} />
            Puruándiro
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Panindícuaro
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Cuanajo
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Huiramba
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Puruarán
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Nueva Italia
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Tingambato
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            La Huacana
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Pátzcuaro
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Buena Vista
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
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
            <FontAwesomeIcon icon={faTruck} />
            Ihuatzio
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Uruapan
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Paracho de Verduzco
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Zinapécuaro
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Huaniqueo de Morales
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Erongarícuaro
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Santa Clara del Cobre
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Uriangato - Morelia
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Morelia
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Opopeo
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Tecario
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Pedernales
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Taretan
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Acuitzio del Canje
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            Cherán
          </li>
          <div
            className={
              isListRuta ? "oculta-rutas-estilo" : "mostrar-rutas-estilo"
            }
          >
            <li>
              <FontAwesomeIcon icon={faTruck} />
              Coeneo
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              Comanja
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              Cucuchucho
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              Cuitzeo del Porvenir
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              El Pueblito
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              La Vitela
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              Lagunillas
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              Lombardía
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              Matugeo
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              Nahuatzen
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              Pátzcuaro
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              San Francisco Pichátaro
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              Puácuaro
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              San ángel
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              Tocuaro
            </li>
            <li>
              <FontAwesomeIcon icon={faTruck} />
              Turicato
            </li>
            <li>
              <FontAwesomeIcon className=" " icon={faTruck} />
              Tzintzuntzan
            </li>
            <li>
              <FontAwesomeIcon className=" " icon={faTruck} />
              San Francisco Uricho
            </li>
            <li>
              <FontAwesomeIcon className=" " icon={faTruck} />
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
