import React, { render, useState } from "react";
import "./ProductInfoCard.css";
import { Container, Row, Col, Grid, Card, Button } from "react-bootstrap";
import Size_Filter from "../SizeFilter/SizeFilter";
import Button_Counter from "../Button_Counter/Button_Counter";
import * as api from "../../API.js";

const Product_Info_Card = () => {
	//const [product, getProduct] = useState(api.getItem(21));

	// const [inputValueQuantity, setInputQuantity] = useState('');
	// const [inputValueSize, setInputSize] = useState('');

	//const ides = item.itemDescription;

	return (
		<Card className="product_card">
			<Card.Body>
				<Card.Text> Details:, </Card.Text>
				<h1> </h1>

				<Card.Text> Color: </Card.Text>
				<Size_Filter />
				<Button_Counter />
				<Button>Add to basked button</Button>
			</Card.Body>
		</Card>
	);
};

export default Product_Info_Card;
