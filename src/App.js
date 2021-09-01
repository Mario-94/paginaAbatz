import "./App.css";
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
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

function App ()  {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="App">
      <Router>

          <Navbar color="danger" light expand="md">
            <NavbarBrand>
              <Link className="navIndex" to="/">
                <img className="logo" src={logo} alt="logo" />
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link className="navIndex" to="/">
                    Inicio
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="navIndex" to="/productos">Productos</Link>
                </NavItem>
                <NavItem>
                  <Link  className="navIndex" to="/sucursales">Sucursales</Link>
                </NavItem>
                <NavItem>
                  <Link className="navIndex" to="/rutas">Rutas</Link>
                </NavItem>
                <NavItem>
                  <Link className="navIndex" to="/nosotros">Nosotros</Link>
                </NavItem>
                <NavItem>
                  <Link className="navIndex" to="/contacto">Contacto</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
          </Switch>

      </Router>

      <Footer />
    </div>
  );
};

export default App;
