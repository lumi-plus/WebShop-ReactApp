import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { UserContext } from "../App";
import * as api from "../API.js";

export default function LoginPage({ setRootCustomer }) {
	const customerContext = useContext(UserContext);
	const [customer, setCustomer] = useState({
		id: customerContext.id,
		firstName: "",
		secondName: "",
		email: "",
		loggedIn: customerContext.loggedIn,
		basket: customerContext.basket,
	});

	function handleChange(event) {
		setCustomer({
			...customer,
			[event.target.name]: event.target.value,
		});
		console.log(customer.firstName);
	}

	function handleSubmit(event) {
		event.preventDefault();
		customer.loggedIn = true;
		setRootCustomer(customer);
		createCustomer({ customer });
		console.log(customer);
	}

	async function createCustomer({ customer }) {
		await api.createCustomer(
			customer.id,
			customer.firstName,
			customer.secondName,
			customer.email,
			customer.basket
		);
	}

	if (customerContext.loggedIn) {
		return (
			<h1 className="gtext">{`Hi ${customerContext.firstName}, End of the month?`}</h1>
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
						value={customer.secondName.value}
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
