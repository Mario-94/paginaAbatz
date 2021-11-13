import React, { useState } from "react";
// https://cdn7.kiwilimon.com//brightcove/6926/6926.jpg/
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

const ModalOfertas = (props) => {
  const { descripcion, producto, precioAnterior, precioNuevo, unidad, img } =
    props;
  // Modal open state
  //se utiliza para cambiar el modal si esta abierto o cerrado
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* Button que aparece en la card  */}
      <Button color="danger" onClick={toggle}>
        Información
      </Button>
      {/* En esta parte inicial el modal */}
      <Modal isOpen={modal} toggle={toggle} size="lg" centered>
        <ModalHeader toggle={toggle}>{descripcion}</ModalHeader>
        {/* Este container lo utilizo para darle el estilo a el modal donde aparecera la imagen del producto junto con toda su descripcion */}
        <Container>
          {/* Con este Row le indico que este dividido para dos filas y las Col que agrege respetaran el tamaño de las filas */}
          <Row xs="2">
            <Col>
              <CardImg alt="Card image cap" src={img} top width="10%" />
            </Col>
            <Col>
            <ModalBody>{descripcion}</ModalBody>
            </Col>
            {/* ejemplo */}
           <Col>
            <ModalBody>Estas son de ejemplo</ModalBody>
            </Col>
            <Col>
            <ModalBody>Estas son de ejemplo</ModalBody>
            </Col>
          </Row>
          <ModalFooter>
            <Button onClick={toggle}>Cerrar</Button>
          </ModalFooter>
        </Container>
      </Modal>
    </div>
  );
};

export default ModalOfertas;
