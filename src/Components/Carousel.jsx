import React from "react";
import { Carousel } from "react-responsive-carousel";
import logoNoventa from "../images/logo-9024.jpeg";
  const CarruselImagenes=() =>(
  <Carousel autoPlay infiniteLoop >
    <div className="items-carrusel">
      <img alt="" src={logoNoventa} />
    </div>
    <div className="items-carrusel">
      <img alt="" src={logoNoventa} />
    
    </div>
    <div className="items-carrusel">
      <img alt="" src={logoNoventa} />
      
    </div>
    <div className="items-carrusel">
      <img alt="" src={logoNoventa} />
      
    </div>
  </Carousel>
);

export default CarruselImagenes;