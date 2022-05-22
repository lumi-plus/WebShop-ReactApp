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

export async function deleteItemFromBasket(customerId, itemId, itemQuantity) {
	await fetch(
		`http://localhost:8080/customers/${customerId}/basket/${itemId}`,
		{
			mode: "cors",
			method: "DELETE",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({ itemId, itemQuantity }),
		}
	);
}

export async function createCustomer(
	customerId,
	customerFistName,
	customerLastName,
	customerEmail
) {
	await fetch(`http://localhost:8080/customers`, {
		mode: "cors",
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify({
			customerId,
			customerFistName,
			customerLastName,
			customerEmail,
			customerBasket: [],
		}),
	});
}
