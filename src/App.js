import "./App.css";
import logo from "./images/Icono.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* header  */}
      <header>
       
      <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/logo">
                  <img
                    src={logo}
                    display="block"
                    margin="0"
                    auto="true"
                    max-width="100%"
                    width="3%"
                  />
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
            <Route exact path="/"></Route>
            <Route exact path="/logo"></Route>
            <Route path="/productos"></Route>
            <Route path="/sucursales"></Route>
            <Route exact path="/rutas"></Route>
            <Route path="/nosotros"></Route>
            <Route path="/contacto"></Route>
          </Switch>
        </div>
      </Router>
            </div>
      </header>
      {/* body */}
      <body></body>

      {/* footer */}

      <footer></footer>
    </div>
  );
}

export default App;
