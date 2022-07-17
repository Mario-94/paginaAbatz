import React from "react";
import { Carousel } from "react-responsive-carousel";
import logoNoventa from "../images/logo-9024.jpeg";
  const CarruselImagenes=() =>(
  <Carousel autoPlay >
    <div className="items-carrusel">
      <img alt="" src={logoNoventa} />
    </div>
    <div className="items-carrusel">
      <img alt="" src={logoNoventa} />
      <p className="legend">Legend 2</p>
    </div>
    <div className="items-carrusel">
      <img alt="" src={logoNoventa} />
      <p className="legend">Legend 3</p>
    </div>
    <div className="items-carrusel">
      <img alt="" src={logoNoventa} />
      <p className="legend">Legend 4</p>
    </div>
  </Carousel>
);

export default CarruselImagenes;