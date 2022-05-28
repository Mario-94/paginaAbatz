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

      <div className="navBar">
        {/* este lo tuilizare como si fuera el menu de hamburguesa */}
        <div className="nav-logo-abatz">
          <img src={logo} alt="logo" title="Abatz" className="logo" />{" "}
          <a>ABATZ</a>
        </div>
        <FontAwesomeIcon
          className="hamburger"
          icon={faBars}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        />
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <div className="navBarItems">
            <Link className="" to="/">
              {/* agregar un icono de font awesome */}
              <FontAwesomeIcon className="" icon={faStore} title="Abatz" />
              Inicio
            </Link>
          </div>
          <div className="navBarItems">
            <Link className="" to="/sucursales">
              <FontAwesomeIcon icon={faBuildingColumns} title="Sucursales" />
              Sucursales
            </Link>
          </div>
          <div className="navBarItems">
            <Link className="" to="/rutas">
              <FontAwesomeIcon icon={faRoute} title="Rutas" />
              RUTAS
            </Link>
          </div>
          <div className="navBarItems">
            <Link className="" to="/nosotros">
              <FontAwesomeIcon
                icon={faAddressCard}
                title="Acerca de nosotros"
              />
              Nosotros
            </Link>
          </div>
          <div className="navBarItems">
            <Link className="" to="/contacto">
              <FontAwesomeIcon icon={faHeadset} title="Contacto" />
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
