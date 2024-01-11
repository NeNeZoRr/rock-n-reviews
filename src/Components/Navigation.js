import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { link } from 'react-router-dom';



function Navigation() {
    return (
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Rock-n-Reviews</Navbar.Brand>
                    <Nav className="justify-content-end link" activeKey="/home" >
                        <Nav.Item>
                            <Nav.Link  href="/Forum">Forum</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  href="/Reviews">Reviews</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Logreg">Login/Register</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
=======
        <Navbar className="bg-body-tertiary justify-content-start">
            <Container>
                <Navbar.Brand as={ link } to="/">Rock-n-Reviews</Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link as={ Link } to="/Forum">Forum</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Login_Register">Login/Register</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;
