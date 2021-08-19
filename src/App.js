import "./App.css";
import  Example  from "./Components/NavBar";
function App() {
  return (
    <div className="App">
      {/* header  */}
      <header >
      <div>
      <Example/>  
      </div>
        
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
