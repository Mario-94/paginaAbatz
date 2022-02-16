import './App.css'
import logo from "./images/Icono.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Productos from "./Components/Productos";
import Sucursal from "./Components/Sucursal";
import Rutas from "./Components/Rutas";
import Nosotros from "./Components/Nosotros";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faBasketShopping, faBuildingColumns, faRoute, faAddressCard, faHeadset, faBars } from '@fortawesome/free-solid-svg-icons'

// import Paginacion from './Components/Paginacion';
import {

} from "reactstrap";

function App() {
  return (
    <div>
      <Router>
        {/* navINdex funcionara como el navbar  */}

        {/* este lo tuilizare como si fuera el menu de hamburguesa */}
        <header>
          <div className='icon_menu'>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </header>

        {/* <NavbarToggler onClick={toggle} /> */}
        {/* <Collapse isOpen={isOpen} navbar> */}
        <div className='menu_side'>
          <div class="name_page">
            <img className='logo' src={logo} alt="logo" title='Abatz' />
            
            <h4>Abatz</h4>
          </div>
          <div className='option_menu'>
            <a className='selected'>
              <Link className='option' to="/">
                {/* agregar un icono de font awesome */}
                <FontAwesomeIcon icon={faStore} title='Abatz' />
                <h4> Inicio</h4>
              </Link>
            </a>
            <a>
              <Link className='option' to="/productos">
                <FontAwesomeIcon icon={faBasketShopping} title='Productos' />
                <h4> Productos </h4>
              </Link>
            </a>
            <a>
              <Link className='option' to="/sucursales">
                <FontAwesomeIcon icon={faBuildingColumns} title='Sucursales' />
                <h4> Sucursales</h4>
              </Link>
            </a>

            <a>
              <Link className='option' to="/rutas">
                <FontAwesomeIcon icon={faRoute} title='Rutas' />
                <h4>Rutas</h4>
              </Link>
            </a>
            <a>
              <Link className='option' to="/nosotros">
                <FontAwesomeIcon icon={faAddressCard} title='Acerca de nosotros' />
                <h4>Nosotros</h4>
              </Link>
            </a>
            <a>
              <Link className='option' to="/contacto">
                <FontAwesomeIcon icon={faHeadset} title='Contacto' />
                <h4>Contacto</h4>
              </Link>
            </a>
          </div>
        </div>

        {/* Se comento la linea de abajo por que no solo se utilizara para comprobar nuevos componentes */}
        {/* <Link  to="/pruebas">
               Pruebas
              </Link> */}

        {/* </Collapse> */}

        <main>
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
          {/* Esta solo es de pruebas */}
          {/* <Route>
          <Paginacion/>
        </Route> */}
        </Switch>
        </main>
      </Router>
      

{/*      
      <footer>

        <Footer />
      </footer> */}

    </div>
  );
}

export default App;
