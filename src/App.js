import './App.css'
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Home from "./Components/Home";
import Productos from "./Components/Productos";
import Sucursal from "./Components/Sucursal";
import Rutas from "./Components/Rutas";
import Nosotros from "./Components/Nosotros";
import Contacto from "./Components/Contacto"
import Footer from "./Components/Footer";
import Paginacion from './Components/Paginacion';
import NavBar from './Components/NavBar'
function App() {
  return (
    <div className='container'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          {/* Se comenta esta url o componente por que aun no se maneja bien las lineas de los productos */}
          {/* <Route path="/productos">
  <Productos />
</Route> */}
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
          {/* Esta solo es de pruebas */}
          {/* <Route>
<Paginacion/>
</Route> */}
          <Route path="/paginacion">
            <Paginacion />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
