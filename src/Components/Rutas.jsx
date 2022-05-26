import React, { useState } from "react";
import '../App.css'

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
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1yxxqnN_DABfECC0jfYwSCmGo3HQZV4-4&ehbc=2E312F" />
        </div>
      </div>
      <div className="rutas-data">
        <ol className="rutas-lista">
          <li>Ario de Rosales </li>
          <li>Zacapu</li>
          <li>Quiroga</li>
          <li>Villa Madero</li>
          <li>Erongarícuaro</li>
          
         
            <li> Puruándiro</li>
            <li>Panindícuaro</li>
            <li>Cuanajo</li>
            <li>Huiramba</li>
            <li>Puruarán</li>
            <li>Nueva Italia</li>
            <li>Tingambato</li>
            <li>La Huacana</li>
            <li>Pátzcuaro</li>
            <li>Buena Vista</li>
            <li>Zirahuén</li>
            <li>El Cahulote</li>
            <li>Tacámbaro</li>
            
            <li>Ihuatzio</li>
            <li>Uruapan</li>
            <li>Paracho de Verduzco</li>
            <li>Zinapécuaro</li>
            <li>Huaniqueo de Morales</li>
            <li>Erongarícuaro</li>
            <li>Santa Clara del Cobre</li>
            <li>Uriangato - Morelia</li>
            <li>Morelia</li>
            <li>Opopeo</li>
            <li>Tecario</li>
            <li>Pedernales</li>
            <li>Taretan</li>
            <li>Acuitzio del Canje</li>
            <li>Cherán</li>
            <div className={isListRuta ? "oculta-rutas-estilo" : "mostrar-rutas-estilo"}>
            <li>Coeneo</li>
            <li>Comanja</li>
            <li>Cucuchucho</li>
            <li>Cuitzeo del Porvenir</li>
            <li>El Pueblito</li>
            <li>La Vitela</li>
            <li>Lagunillas</li>
            <li>Lombardía</li>
            <li>Matugeo</li>
            <li>Nahuatzen</li>
            <li>Pátzcuaro</li>
            <li>San Francisco Pichátaro</li>
            <li>Puácuaro</li>
            <li>San ángel</li>
            <li>Tocuaro</li>
            <li>Turicato</li>
            <li>Tzintzuntzan</li>
            <li>San Francisco Uricho</li>
            <li>Villa Jiménez</li>
          </div>
          <div onClick={handleClick}>
            {isListRuta ? (
              <div className={isListRuta ? "bottom-mostrar-rutas" : "bottom-ocultar-rutas"}>
                mostrar más...
              </div>
            ) : (
              <div className={isListRuta ? "bottom-ocultar-rutas" : "bottom-mostrar-rutas"}><h3>ocultar</h3></div>
            )}
          </div>
        </ol>
      </div>
    </div>
  );
}

export default Rutas;
