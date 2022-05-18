import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
	Navbar,
	NavDropdown,
	Nav,
	Container,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";

import Basket from "../pages/Basket";
import Login from "../pages/Login";

export default function Header() {
	return (
		<>
			<div>
				{/* <Navbar
					collapseOnSelect
					fixed="top"
					expand="md"
					bg="dark"
					variant="dark"
				>
					<Container>
						<Navbar.Brand href="/home">
							<h2>ellö</h2>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav>
								<Nav.Link href="/man">Man</Nav.Link>
								<Nav.Link href="/woman">Woman</Nav.Link>
								<NavDropdown title="More" id="collasible-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">
										First filter
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">
										Another filter
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">
										Something
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">
										Separated link
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							<Nav>
								<Nav.Link href="/sale" className="font-weight-bold">
									Sale
								</Nav.Link>
							</Nav>
							<Nav>
								<Nav.Link href="/cart" className="font-weight-bold">
									Cart
								</Nav.Link>
							</Nav>

							<Form className="d-flex">
								<FormControl
									type="search"
									placeholder="Search"
									className="me-2"
									aria-label="Search"
								/>
								<Button variant="outline-success">Search</Button>
							</Form>
						</Navbar.Collapse>
					</Container>
				</Navbar> */}

				<Navbar bg="dark" expand="md" variant="dark">
					<Container fluid>
						<Navbar.Brand href="/home">ellö</Navbar.Brand>
						<Navbar.Toggle aria-controls="navbarScroll" />
						<Navbar.Collapse id="navbarScroll">
							<Nav
								className="me-auto my-2 my-lg-0"
								style={{ maxHeight: "300px" }}
								navbarScroll
							>
								<Nav.Link href="/man">Man</Nav.Link>
								<Nav.Link href="/woman">Woman</Nav.Link>
								<NavDropdown title="More" id="collasible-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">
										First filter
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">
										Another filter
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">
										Something
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">
										Separated link
									</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link href="/sale" className="text-warning">
									Sale
								</Nav.Link>
							</Nav>
							<Nav></Nav>
							<Nav>
								<Nav.Link href="/login" className="font-weight-bold">
									Login
								</Nav.Link>
							</Nav>
							<Nav>
								<Nav.Link href="/cart">
									<Button variant="outline-warning">Cart</Button>
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<BrowserRouter>
					<Routes>
						<Route path="/Man" element={<Man />} />
						<Route path="/Woman" element={<Woman />} />
						<Route path="/Sale" element={<Sale />} />
						<Route path="/login" element={<Login />} />
						<Route path="/Cart" element={<Basket />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);

	function Man() {
		return <h2>Man</h2>;
	}

	function Woman() {
		return <h2>Woman</h2>;
	}

	function Sale() {
		return <h2>Sale</h2>;
	}
}
