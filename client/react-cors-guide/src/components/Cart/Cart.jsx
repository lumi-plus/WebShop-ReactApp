import * as api from "../../API.js";
import { useState } from "react";
import { Container, Button } from "react-bootstrap";

export default function Cart() {
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
		const items = await api.getBasket(15);
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
