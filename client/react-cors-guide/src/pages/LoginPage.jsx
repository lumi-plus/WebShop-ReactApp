import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { CustomerContext } from "../App";
import * as api from "../API.js";

export default function LoginPage() {
	const [customerGlobal, setCustomerGlobal] = useContext(CustomerContext);
	const [customer, setCustomer] = useState({
		id: customerGlobal.id,
		firstName: "",
		lastName: "",
		email: "",
		loggedIn: customerGlobal.loggedIn,
		basket: customerGlobal.basket,
	});

	function handleChange(event) {
		setCustomer({
			...customer,
			[event.target.name]: event.target.value,
		});
		console.log(customer.firstName);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		customer.loggedIn = true;
		setCustomerGlobal(customer);
		await createCustomer(customer);
		console.log(customer);
	}

	async function createCustomer(customer) {
		await api.createCustomer(customer);
	}

	if (customerGlobal.loggedIn) {
		return (
			<h1 className="gtext">{`Hi ${customerGlobal.firstName}, End of the month?`}</h1>
		);
	}

	return (
		<div className="mx-auto" style={{ maxWidth: "300px" }}>
			<Form>
				<Form.Group className="mb-3" controlId="formFirstName">
					<Form.Label>First name:</Form.Label>
					<Form.Control
						type="text"
						name="firstName"
						placeholder="Enter first name:"
						value={customer.firstName.value}
						onChange={handleChange}
					/>
					<Form.Text className="text-muted">
						We'll never share your name with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formSecondName">
					<Form.Label>Second name</Form.Label>
					<Form.Control
						type="text"
						name="secondName"
						placeholder="Enter second name"
						value={customer.lastName.value}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter your email"
						value={customer.email.value}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
				<Button variant="warning" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</div>
	);
}
