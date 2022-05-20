import * as api from "../../API.js";
import { useState } from "react";
import { Container, Button } from "react-bootstrap";

export default function Cart() {
	const [itemQuantity, setQuantity] = useState(0);

	function updateQuanity(e) {
		setQuantity(e.target.value);
		console.log(itemQuantity);
	}

	async function showBasket() {
		const items = await api.getBasket(15);
		document.getElementById("data").innerHTML = JSON.stringify(items, null, 2);
	}
	async function addItemToBasket() {
		const items = await api.addItemToBasket(15, 1, Number(itemQuantity));
		document.getElementById("data").innerHTML = JSON.stringify(items, null, 2);
		showBasket();
	}
	async function deleteItemFromBasket() {
		const items = await api.deleteItemFromBasket(15, 1, 20);
		document.getElementById("data").innerHTML = JSON.stringify(items, null, 2);
		showBasket();
	}

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
					<input type="number" placeholder="9" onChange={updateQuanity} />
				</Container>
			</div>{" "}
		</>
	);
}
