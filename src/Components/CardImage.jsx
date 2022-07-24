// import ModalOfertas from "./ModalOfertas"; por el momento ya no pondremos el modal, por que es un paso mas que estaria haciendo, ya en caso de agregar el carrito de compras pues hay si se haria esta parte
import axios from "axios";
import React from "react";

import "../App.css";

export class CardImage extends React.Component {
  state = {
    subir:true,
    currentPage: 1,
    todosPerPage: 20,
    items: [],
    bandera: false,

    //img: "https://picsum.photos/318/180"
  };

  _valorReal(precio, porcentaje) {
    const resultado = precio - (precio * porcentaje) / 100;
    return resultado.toFixed(2);
  }
  //Este metodo se encarga de realizar la actualizacion de la pagina
  _handleClick = (event) => {
   
    this.setState({ currentPage: parseInt(event.target.id)});
    
    if (this.state.subir === true) {
      window.scrollTo({
        top: 10,
        behavior: "auto",
      });
    }
  };

  componentDidMount() {

    axios
      .get(
        `https://mario-94.github.io/pruebaJson/bd/bd.json?page=${this.state.paginaInicio}`
      )
      .then((res) => {
        const { products, paginasTotales } = res.data; //items= son los datos que traemos de la consulta, y paginasTotales, son todas las paginas que podemos mostrar, esto depende de los items que tengo
        // console.log((items).length)
        this.setState({ items: products, bandera: true, paginasTotales });
        // console.log(paginasTotales);
      })
      .catch((e) => {
        console.log("Revisar su conexion", e);
      });
  }
  render() {
    const { items, currentPage, todosPerPage } = this.state;
    // Logic for displaying current todos
    const page = parseInt(currentPage);
    const start = (page - 1) * todosPerPage;
    const end = page * todosPerPage;
    const currentTodos = items.slice(start, end);
    const renderTodos = currentTodos.map((dato, index) => {
      return (
        <div key={index}>
          {/* Esta es la imagen */}

          <div className="item-card">
            <img
              className="card_img"
              alt="Producto"
              src={`https://abattz.com/img/productos/${dato.Articulo}.jpg`}
              title="Articulo"
            />
            <div className="card-info-item">
              <p className="card-description ">
                <b>{dato.Descripcion1}</b>
              </p>
              {/*con toFixed(2) controlo el punto decimal de dos carecteres*/}

              <span className="precio-real">
                <b>$</b>
                {this._valorReal(dato.Precio, dato.Porcentaje)}
              </span>
              <p className="precio-item">
                PRECIO POR:
                <b className="unidad-medida"> {dato.Unidad}</b>
              </p>
            </div>
          </div>
        </div>
      );
      // return (<l key={index}>{todo.Articulo}</li>);
    });
    //logica para mostrar el numero de paginas
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    // Este es el encargado de mostrar los items a mostrar
    const renderPageNumbers = pageNumbers.map((number, index) => {
      return (
        <div key={index}>
          <ul>
            <li className="item-pagination">
              {/* el id lo utilizo para cambiar entre hojas
               */}
              <div id={number} onClick={this._handleClick}>
                {number}
              </div>
            </li>
          </ul>
        </div>
      );
    });
    return (
      <div>
        {this.state.bandera === true ? (
          <div>
            {/* En esta parte es donde inicia la representacion de las cardImg */}
            {/* <span class="ir-arriba icon-arrow-up2"></span> */}

            <div className="container-CardItems">{renderTodos}</div>
            <div className="container-pagination">{renderPageNumbers}</div>
          </div>
        ) : (
          <div className="spinner"></div>
        )}
      </div>
    );
  }
}
export default CardImage;
