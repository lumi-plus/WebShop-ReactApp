import Carousel from "react-bootstrap/Carousel";
import React, { render, useState } from "react";
import "./Carousel.css";
import * as api from "../../API.js";

//import { Wrapper } from "./Carousel.styles";

/* Needs te fetch correct images and alt text */

const Carousel_Product = ({ id }) => {
  const [product, setProduct] = useState(
    api.getItem(id).then((p) => setProduct(p))
  );
  return (
    <div className="carousel_product">
      <Carousel interval={2000} variant="dark">
        <Carousel.Item className="carousel-img-container">
          <img className="d-block" src={product.itemIMG1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="carousel-img-container">
          <img className="d-block" src={product.itemIMG2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item className="carousel-img-container">
          <img className="d-block" src={product.itemIMG3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item className="carousel-img-container">
          <img className="d-block" src={product.itemIMG4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

//const Product_Text = () => {};

export default Carousel_Product;
