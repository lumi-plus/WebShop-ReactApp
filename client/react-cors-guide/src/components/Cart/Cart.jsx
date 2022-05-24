import * as api from "../../API.js";
import { Container, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { CustomerContext } from "../../App";

export default function Cart() {
	const customerContext = useContext(CustomerContext);
	return (
		<>
			{" "}
			<div>
				<Container>
					<div id="data">React Cors Guideee</div>
					<Button variant="outline-secondary" onClick={showBasket}>
						Show basket
					</Button>

					<Button variant="outline-warning" onClick={addItemToBasket}>
						Add item
					</Button>
					<Button variant="outline-danger" onClick={deleteItemFromBasket}>
						Delete item
					</Button>
				</Container>
			</div>{" "}
		</>
	);

	async function showBasket() {
		const items = await api.getBasket(customerContext.id);
		document.getElementById("data").innerHTML = JSON.stringify(items, null, 2);
	}
	async function addItemToBasket() {
		const items = await api.addItemToBasket(15, 1, 1);
		document.getElementById("data").innerHTML = JSON.stringify(items, null, 2);
		showBasket();
	}

	async function deleteItemFromBasket() {
		const items = await api.deleteItemFromBasket(15, 1, -1);
		document.getElementById("data").innerHTML = JSON.stringify(items, null, 2);
		showBasket();
	}
}
