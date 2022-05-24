import * as api from "../../API.js";
import { Container, Button } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { CustomerContext } from "../../App";

export default function Cart() {
	const [customerGlobal, setCustomerGlobal] = useContext(CustomerContext);
	// const [basket, setBasket] = useState([]);

	// useEffect(() => {
	// 	getBasket();
	// 	console.log(basket);
	// }, []);

	// async function getBasket() {
	// 	let items = await api.getBasket(customerGlobal.id);
	// 	// await setBasket(items);
	// }

	async function addItemToBasket(itemId) {
		const items = await api.addItemToBasket(customerGlobal.id, itemId, 1);
		// await getBasket();
		// const basket = await api.getBasket(customerGlobal.id);
		// setBasket(basket);
	}

	async function deleteItemFromBasket(itemId) {
		const items = await api.deleteItemFromBasket(customerGlobal.id, itemId, -1);
		// await getBasket();
		// const basket = await api.getBasket(customerGlobal.id);
		// setBasket(basket);
	}
	// useEffect(() => {
	// 	async function fetchData() {
	// 		try {
	// 			const res = api.getBasket(customerGlobal.id).then((p) => setBasket(p));
	// 			setBasket(res.data);
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	}
	// 	fetchData();
	// 	console.log(products);
	// }, []);s

	// const customerGlobalId = customerGlobal.id;
	// const getBasket = async (customerGlobalId) => {
	// 	try {
	// 		let items = await api.getBasket(customerGlobalId);
	// 		await setBasket(items);
	// 		console.log(basket);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// const [productInfo, setProductInfo] = useState([]);
	// useEffect(() => {
	// 	async function fetchData() {
	// 		try {
	// 			const res = api.getItem(itemId).then((p) => setProductInfo(p));
	// 			setProductInfo(res.data);
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	}
	// 	fetchData();
	// }, []);

	return (
		<>
			<div>
				<Container>
					<div id="data">React Cors Guideee</div>
					{/* <Button variant="outline-secondary" onClick={getBasket}>
						Show basket
					</Button> */}

					{/* {customerGlobal.basket?.map((item, i) => (
						<div key={i}>
							<span>
								itemID: {item.itemId} , ItemQuantity: {item.itemQuantity}&nbsp;
								&nbsp;
								<Button
									variant="outline-warning"
									onClick={addItemToBasket(item.itemId)}
								>
									Add item
								</Button>
								<Button
									variant="outline-danger"
									onClick={deleteItemFromBasket(item.itemId)}
								>
									Delete item
								</Button>
							</span>
						</div>
					))} */}
				</Container>
			</div>
		</>
	);
	// const addToBasket = async () => {
	// 	fetch(`http://localhost:4000/basket/${user.id}/product/${prodID}`, {
	// 		method: "PUT",
	// 	});
	// 	alert(`${product.name} has been added to basket`);
	// };
}
