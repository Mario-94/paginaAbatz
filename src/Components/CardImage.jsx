import {
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,

} from "reactstrap";
import ModalOfertas from "./ModalOfertas";

const CardImage= (props)=>{
const { descripcion="Descripcion del producto", img="https://picsum.photos/318/180",titulo="Pepsi"}=props
  
    return (
      <div>
        <CardGroup>
          <Card>
            <CardImg
              alt="Card image cap"
              src={img}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">{titulo}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
              Descripcion del producto
              </CardSubtitle>
              <CardText>
               {descripcion}
              </CardText>
              <ModalOfertas descripcion={descripcion} producto={titulo} img={img}/>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src={img}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">{titulo}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
              Descripcion del producto
              </CardSubtitle>
              <CardText>
                {descripcion}
              </CardText>
              <ModalOfertas descripcion={descripcion} producto={titulo} img={img} />
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src={img}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">{titulo}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
              Descripcion del producto
              </CardSubtitle>
              <CardText>
                {descripcion}
              </CardText>
              <ModalOfertas descripcion={descripcion} producto={titulo} img={img}/>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  }
export default CardImage;
