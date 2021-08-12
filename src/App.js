import "./App.css";
import { NavBar } from "./Components/NavBar";
function App() {
  return (
    <div className="App">
      {/* header  */}
      <header className="App-header">
        <NavBar>Inicio</NavBar>
      </header>
      {/* body */}
      <body>
        <p>En esta parte ira toda la informacio de la empreza </p>
      </body>

      {/* footer */}

      <footer></footer>
    </div>
  );
}

export default App;
