import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { userContext } from './userContext';

function Navigation() {
    return (
        <Navbar className="bg-body-tertiary justify-content-start">
            <Container>
                <Navbar.Brand as={Link} to="/">Rock-n-Reviews</Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/Forum">Forum</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/Logreg">Login/Register</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        {/* add logic to determine if a user is logged in or not, and if so render username and logout button, if not show login/reg */}
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;
