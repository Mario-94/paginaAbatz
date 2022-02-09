import './App.css'
import { useState } from "react";
import logo from "./images/Icono.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Productos from "./Components/Productos";
import Sucursal from "./Components/Sucursal";
import Rutas from "./Components/Rutas";
import Nosotros from "./Components/Nosotros";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";
import Paginacion from './Components/Paginacion';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
 
} from "reactstrap";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Router>
        <Navbar className="navIndex" light expand="md" id="header">
          <Link className="navIndex" to="/">
            <img width="100" src={logo} alt="logo" />
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <Link className="navIndex" to="/">
                Inicio
              </Link>
              {/* Este     &nbsp;  lo utilizo para separar momentaneamente los nav */}
              &nbsp;
              <Link className="navIndex" to="/productos">
                Productos
              </Link>
              &nbsp;
              <Link className="navIndex" to="/sucursales">
                Sucursales
              </Link>
              &nbsp;
              <Link className="navIndex" to="/rutas">
                Rutas
              </Link>
              &nbsp;
              <Link className="navIndex" to="/nosotros">
                Nosotros
              </Link>
              &nbsp;
              <Link className="navIndex" to="/contacto">
                Contacto
              </Link>
              <Link className="navIndex" to="/pruebas">
               Pruebas
              </Link>
            </Nav>
          </Collapse>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <div className="espacio">
        <Switch>
          
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/productos">
            <Productos />
          </Route>
          <Route path="/sucursales">
            <Sucursal />
          </Route>
          <Route exact path="/rutas">
            <Rutas />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
        <Route>
          <Paginacion/>
        </Route>
        </Switch>
        </div>
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;
