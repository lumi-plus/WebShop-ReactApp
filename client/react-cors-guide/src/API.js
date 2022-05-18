export async function getItems() {
	const response = await fetch(`http://localhost:8080/items`, {
		mode: "cors",
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	});
	return response.json();
}

export async function getBasket(customerId) {
	const response = await fetch(
		`http://localhost:8080/customers/${customerId}/basket/`,
		{
			mode: "cors",
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		}
	);
	return response.json();
}

export async function addItemToBasket(customerId, itemId, itemQuantity) {
	await fetch(`http://localhost:8080/customers/${customerId}/basket/`, {
		mode: "cors",
		method: "PUT",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify({ itemId, itemQuantity }),
	});
}
