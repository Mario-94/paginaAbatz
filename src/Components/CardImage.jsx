import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
  CardGroup,
  Spinner,
} from "reactstrap";
// import ModalOfertas from "./ModalOfertas"; por el momento ya no pondremos el modal, por que es un paso mas que estaria haciendo, ya en caso de agregar el carrito de compras pues hay si se haria esta parte
import axios from "axios";
import React from "react";
import "../App.css";
export default class CardImage extends React.Component {
  state = {
    currentPage: 1,
    todosPerPage: 21,
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
    this.setState({ currentPage: parseInt(event.target.id) });
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:5000/ofertasAlmacen?page=${this.state.paginaInicio}`
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
        <Row xs="4" key={index}>
          <Col>
            <CardGroup>
              <Card>
                <CardImg
                  alt="Card image cap"
                  src={`https://abattz.com/img/AppAbatz/${dato.Articulo}.jpg`}
                  className="imagenes"
                />
                <CardBody>
                  <CardTitle tag="h5"> {dato.Descripcion1}</CardTitle>
                  {/*con toFixed(2) controlo el punto decimal de dos carecteres*/}
                  <CardTitle tag="h5">
                    {" "}
                    ${this._valorReal(dato.Precio, dato.Porcentaje)}
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Precio por:{dato.Unidad}
                  </CardSubtitle>
                  <CardText></CardText>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      );
      // return (<li key={index}>{todo.Articulo}</li>);
    });
    //logica para mostrar el numero de paginas
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    // Este es el encargado de mostrar los items a mostrar
    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <ul key={number} className="pagination">
          <li>
            {/* el id lo utilizo para cambiar entre hojas
             */}
            <a id={number} onClick={this._handleClick}>
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
            {renderTodos}
            <div className="prueba">{renderPageNumbers}</div>
          </div>
        ) : (
          <Spinner color="danger" type="border">
            {console.log("Error 500")}
          </Spinner>
        )}
      </div>
    );
  }
}
