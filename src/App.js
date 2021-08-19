import "./App.css";
import Example from "./Components/NavBar";
function App() {
  return (
    <div className="App">
      {/* header  */}
      <header>
        <div>
          <Example />
        </div>
      </header>
      {/* body */}
      <body>
        <figure class="text-start">
          <blockquote class="blockquote">
            <p>
              Por que tu economia nos interesa, Abarrotera de Pátzcuaro desde
              1957 cuidando tu economia{" "}
            </p>
          </blockquote>
          <figcaption class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
      </body>

      {/* footer */}

      <footer>
        <div class="card">
          <div class="card-header"></div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
