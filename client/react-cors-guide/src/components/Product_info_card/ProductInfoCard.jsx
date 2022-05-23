import React, { render, useState, useEffect } from "react";
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

	const [products, setProducts] = useState([]);
	useEffect(() => {
		setProducts(getItems());
	}, [products]);

	async function getItems() {
		const items = await api.getItems();

		console.log(items);
	}

	return (
		<Card className="product_card">
			<Card.Body>
				<Card.Text> Details:, </Card.Text>
				<div>
					<showProductDescription products={products} />
				</div>
				<div id="data">items</div>
				<showProductDescription />y<Card.Text> Color: </Card.Text>
				<Size_Filter />
				<Button_Counter />
				<Button>Add to basked button</Button>
			</Card.Body>
		</Card>
	);
};

function showProductDescription({ products }) {
	return <p>{`Descrption: ${products}`}</p>;
}
export default Product_Info_Card;
