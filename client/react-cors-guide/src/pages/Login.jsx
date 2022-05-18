import { Form, Button } from "react-bootstrap";

export default function Login() {
	return (
		<div className="mx-auto" style={{ maxWidth: "300px" }}>
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
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}
