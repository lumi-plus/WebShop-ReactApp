import Carousel from "react-bootstrap/Carousel";
import React, { render, useState } from "react";
import "./Carousel.css";
import img1 from "../../resources/images/MAN-1/1.1_man.jpeg";
import img2 from "../../resources/images/MAN-1/1.2_man.jpeg";
import img3 from "../../resources/images/MAN-1/1.3_man.jpeg";
//import { Wrapper } from "./Carousel.styles";

/* Needs te fetch correct images and alt text */

const Carousel_Product = () => {
	return (
		<div className="carousel_product">
			<Carousel interval={2000} variant="dark">
				<Carousel.Item className="carousel-img-container">
					<img className="d-block" src={img1} alt="First slide" />
				</Carousel.Item>
				<Carousel.Item className="carousel-img-container">
					<img className="d-block" src={img2} alt="Second slide" />
				</Carousel.Item>
				<Carousel.Item className="carousel-img-container">
					<img className="d-block" src={img3} alt="Third slide" />
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

//const Product_Text = () => {};

export default Carousel_Product;
