import React, { useState } from "react";
import logo from "../images/Icono.png";
import { Link } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faBuildingColumns,
  faRoute,
  faAddressCard,
  faHeadset,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  function handleClick() {
    setIsNavExpanded(!isNavExpanded);
  }
  return (
    <div className="navBar-container">
      {/* navINdex funcionara como el navbar  */}
      {/* este lo tuilizare como si fuera el menu de hamburguesa */}
      <div className="nav-logo-abatz">
        <img src={logo} alt="logo" title="Abatz" className="logo" />{" "}
        <div className="tituloAbatz"> ABATZ</div>
      </div>
      <FontAwesomeIcon
        className="hamburger"
        icon={faBars}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      />
      <div className="navBar">
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <div className="navBarItems">
            <Link className="" onClick={handleClick} to="/">
              {/* agregar un icono de font awesome */}
              <FontAwesomeIcon className="" icon={faStore} title="Abatz" />
              Inicio
            </Link>

            {/* se comento la linea de abajo por qu por lo pronto aun no presentremos las lineas que maneja la abarrotera, por que hay que preguntar bien como seran las lineas */}
            {/* <a>
              <Link className=""' to="/productos">
                <FontAwesomeIcon icon={faBasketShopping} title='Productos' />
                <h4> Productos </h4>
              </Link>
            </a> */}

            <Link className="" onClick={handleClick} to="/sucursales">
              <FontAwesomeIcon icon={faBuildingColumns} title="Sucursales" />
              Sucursales
            </Link>

            <Link className="" onClick={handleClick} to="/rutas">
              <FontAwesomeIcon icon={faRoute} title="Rutas" />
              RUTAS
            </Link>

            <Link className="" onClick={handleClick} to="/nosotros">
              <FontAwesomeIcon
                icon={faAddressCard}
                title="Acerca de nosotros"
              />
              Nosotros
            </Link>

            <Link className="" onClick={handleClick} to="/contacto">
              <FontAwesomeIcon icon={faHeadset} title="Contacto" />
              Contacto
            </Link>

            {/* Se comento la linea de abajo por que no solo se utilizara para comprobar nuevos componentes */}
            {/* <Link  to="/pruebas">
               Pruebas
              </Link> */}

            {/* </Collapse> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
