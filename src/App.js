import "./App.css";
import logo from "./images/Icono.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Productos from "./Components/Productos"
import Sucursal from "./Components/Sucursal";
import Rutas from "./Components/Rutas";
import Nosotros from "./Components/Nosotros";
import Contacto from "./Components/Contacto";
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
      <Router>
        <div >
          <nav className="navBar">
            <ul>
              <li>
                <Link to="/">
                  <img className="logo" src={logo} alt="logo" />
                </Link>
              </li>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/productos">Productos</Link>
              </li>
              <li>
                <Link to="/sucursales">Sucursales</Link>
              </li>
              <li>
                <Link to="/rutas">Rutas</Link>
              </li>
              <li>
                <Link to="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/productos"><Productos/></Route>
            <Route path="/sucursales">
              <Sucursal />
            </Route>
            <Route exact path="/rutas"><Rutas/></Route>
            <Route path="/nosotros"><Nosotros/></Route>
            <Route path="/contacto"><Contacto/></Route>
          </Switch>
        </div>
      </Router>


      <Footer/>
    </div>
  );
}

export default App;
