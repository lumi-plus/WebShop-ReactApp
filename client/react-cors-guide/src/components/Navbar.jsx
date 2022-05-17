
import {Routes ,Route,BrowserRouter } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';



export default function Header() {
   
    return (
        <><div >
            <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark" >
                <Container>

                    <Navbar.Brand href="/home"><h2>ellö</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav>
                            <Nav.Link href="/man">Man</Nav.Link>
                            <Nav.Link href="/woman">Woman</Nav.Link>
                            <NavDropdown title="More" id="collasible-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1">First filter</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another filter</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/sale" className="font-weight-bold">Sale</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

            <BrowserRouter>
            <Routes>
                <Route path="/Man" element={<Man/>} />
                <Route path="/Woman" element={<Woman/>} />
                <Route path="/Sale" element={<Sale/>} />
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