import {
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Container, Row, Col

} from "reactstrap";
import ModalOfertas from "./ModalOfertas";
import axios from 'axios';
import React from 'react'

export default class CardImage extends React.Component{
  
     state={
        datos:[],
        img:"https://picsum.photos/318/180"
    }
    componentDidMount() {
    axios.get('http://localhost:5000/ofertas')
    .then(res => {
      const datos = res.data;
      this.setState({ datos })
    }).catch(error =>{
      console.error(error)
    })
   }
    render() {
        return (
            <div>

           <Container> 
           <Row xs="3">
            {this.state.datos!==[] 
            ?

           this.state.datos.map((dato,index)=>
         <Col>
          <Card>
            <CardImg
              alt="Card image cap"
              src={this.state.img}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5"> {dato.Descripcion1}</CardTitle>
             { /*con toFixed(2) controlo el punto decimal de dos carecteres*/} 
              <CardTitle tag="h5"> ${(dato.CostoBase).toFixed(2)}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h7">
          Precio por:{dato.UnidadVenta}

              </CardSubtitle>
              <CardText>
              
              </CardText>
              <ModalOfertas descripcion={dato.Descripcion1} producto={'titulo'} img={this.state.img}/>
            </CardBody>
          </Card>
          </Col>           
           )
          
            : console.error()}
            </Row>
      </Container>
            </div>
        )
  }
}
