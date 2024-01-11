import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';


function Navigation() {
    return (
            <Navbar className="bg-body-tertiary">
                <Container>
                    <BrowserRouter>
                    <Navbar.Brand as={Link} to="/">Rock-n-Reviews</Navbar.Brand>
                    <Nav className="justify-content-end link" activeKey="/home" >
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Forum">Forum</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Reviews">Reviews</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Logreg">Login/Register</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </BrowserRouter>
                </Container>
            </Navbar>
    )
}

export default Navigation;
