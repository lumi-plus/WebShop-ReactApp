import Carousel_Product from "../../components/Carousel/Carousel";
import Product_Info_Card from "../../components/Product_info_card/ProductInfoCard";
import { Container, Row, Col, Grid, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./TestPageLinnea.css";

// Needs to fetch product id and it's attrubtes

const Test_Page = () => {
	const queryParams = new URLSearchParams(window.location.search);
	const id = queryParams.get("id");

	console.log(id);
	const [itemId, setItemId] = useState();
	// setItemId(id);   //!!!!!!!!!!!!!!!!

	// useEffect(() => {
	// 	setItemId();
	// }, []);

	return (
		<div>
			<Container>
				{/* <Row styleClass="row">
					<Col sm={7}>
						<Carousel_Product itemId={itemId} />
					</Col>
					<Col sm={5}>
						<Row>
							<h1>Helena</h1>
							<h1>178€</h1>
							<Product_Info_Card itemId={itemId} />
						</Row>
					</Col>
				</Row> */}
			</Container>
		</div>
	);
};

export default Test_Page;
