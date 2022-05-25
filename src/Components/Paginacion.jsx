import React, { Component } from "react";
import axios from "axios";
import "../App.css";
class Paginacion extends Component {
  state = {
    todos: [],
    currentPage: 1,
    todosPerPage: 21,
    bandera: false,
  };
  //Este metodo se encarga de realizar la actualizacion de la pagina
  _handleClick = (event) => {
    this.setState({ currentPage: parseInt(event.target.id) });
  };
  componentDidMount() {
    axios
      .get(`http://localhost:5000/ofertasAlmacen`)
      .then((res) => {
        const { products } = res.data;
        this.setState({ todos: products, bandera: true });
      })
      .catch((e) => {
        console.log(`error ${e}`);
      });
  }
  render() {
    const { todos, currentPage, todosPerPage } = this.state;
    // Logic for displaying current todos
    const page = parseInt(currentPage);
    const start = (page - 1) * todosPerPage;
    const end = page * todosPerPage;
    const currentTodos = todos.slice(start, end);
    const renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{todo.Articulo}</li>;
    });
    //logica para mostrar el numero de paginas
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    // Este es el encargado de mostrar los items a mostrar
    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        // <ul
        //     key={number}
        //     id={number}
        //     onClick={this._handleClick}
        // >
        //     {number}
        // </ul>

        <ul key={number} className="pagination">
          <li>
            <a className="active" id={number} onClick={this._handleClick}>
              {number}
            </a>
          </li>
        </ul>
      );
    });
    return (
      <div>
        {this.state.bandera === true ? (
          <div>
            <div>{renderTodos}</div>
            <div>{renderPageNumbers}</div>
          </div>
        ) : (
          <div>cargando</div>
        )}
      </div>
    );
  }
}
export default Paginacion;
