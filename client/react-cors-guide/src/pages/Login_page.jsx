import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function LoginPage({ customerFistName, changeName, name }) {
	const [contactInfo, setContactInfo] = useState({
		name: "",
	});

	const handleChange = (event) => {
		setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		changeName(contactInfo);
		setContactInfo({ name: "" });
	};

	return (
		<div className="mx-auto" style={{ maxWidth: "300px" }}>
			<h1>{`Hi ${name}`} </h1>
			<Form className>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>First name:</Form.Label>
					<Form.Control type="name" placeholder="Enter first name:" />
					<Form.Text className="text-muted">
						We'll never share your name with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Second name</Form.Label>
					<Form.Control type="name" placeholder="Enter second name" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="warning" type="submit">
					Submit
				</Button>
			</Form>
			<div className="form-container">
				<form onSubmit={handleSubmit}>
					<div>
						<h3>Contact Form</h3>
					</div>
					<div>
						<input
							type="text"
							name="name"
							placeholder="Name"
							value={contactInfo.name}
							onChange={handleChange}
						/>
					</div>

					<div>
						<button>Submit Contact</button>
					</div>
				</form>
			</div>
		</div>
	);
}
