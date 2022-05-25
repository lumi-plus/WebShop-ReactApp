import React, { render, useState } from "react";
import "./ProductInfoCard.css";
import { Container, Row, Col, Grid, Card, Button } from "react-bootstrap";
import Size_Filter from "../SizeFilter/SizeFilter";
import Button_Counter from "../Button_Counter/Button_Counter";
import * as api from "../../API.js";

const Product_Info_Card = () => {
	const [product, setProduct] = useState(
		api.getItem(25).then((p) => setProduct(p))
	);

	// const [inputValueQuantity, setInputQuantity] = useState('');
	// const [inputValueSize, setInputSize] = useState('');

	//const ides = item.itemDescription;

	// const item = api.getItem(20);

	return (
		<Card className="product_card">
			<Card.Body>
				<Card.Text className="card_body">{product.itemName}</Card.Text>
				<Card.Text className="card_body">{product.itemPrice}€</Card.Text>
				<Card.Text className="padding">
					<b>Details:</b> {product.itemDescription}{" "}
				</Card.Text>
				<Card.Text>
					<b>Color: </b> {product.itemColor}{" "}
				</Card.Text>
				<Size_Filter />
				<Button_Counter />
				<Button>Add to basked button</Button>
			</Card.Body>
		</Card>
	);
};

export default Product_Info_Card;
