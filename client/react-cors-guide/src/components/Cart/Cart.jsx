import * as api from "../../API.js";
import { Container, Button } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { CustomerContext } from "../../App";

export default function Cart() {
	async function showBasket() {
		const items = await api.getBasket(customerGlobal.id);
		document.getElementById("data").innerHTML = JSON.stringify(items, null, 2);
	}

	const [products, setBasket] = useState([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const res = api.getBasket(customerGlobal.id).then((p) => setBasket(p));
				setBasket(res.data);
			} catch (err) {
				console.log(err);
			}
		}
		fetchData();
	}, []);

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

	const [customerGlobal, setCustomerGlobal] = useContext(CustomerContext);
	return (
		<>
			<div>
				<Container>
					<div id="data">React Cors Guideee</div>
					<Button variant="outline-secondary" onClick={showBasket}>
						Show basket
					</Button>

					{products?.map((item, i) => (
						<div key={i}>
							<span>
								itemID: {item.itemId} , ItemQuantity: {item.itemQuantity}&nbsp;
								&nbsp;
								<Button variant="outline-warning" onClick={addItemToBasket}>
									Add item
								</Button>
								<Button variant="outline-danger" onClick={deleteItemFromBasket}>
									Delete item
								</Button>
							</span>
						</div>
					))}
				</Container>
			</div>
		</>
	);

	async function addItemToBasket() {
		const items = await api.addItemToBasket(customerGlobal.id, 22, 1);
		const basket = await api.getBasket(customerGlobal.id);
		setBasket(basket);
	}

	async function deleteItemFromBasket() {
		const items = await api.deleteItemFromBasket(customerGlobal.id, 22, -1);
		const basket = await api.getBasket(customerGlobal.id);
		setBasket(basket);
	}
}
