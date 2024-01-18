// Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useUser } from './User_Context';

function Navigation() {
    const {  userName, logout } = useUser();


    return (
        <Navbar className="bg-body-tertiary justify-content-start">
            <Container>
                <Navbar.Brand as={Link} to="/">Rock-n-Reviews</Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/Forum">Forum</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        {userName ? (
                            // User is logged in, render username and logout button
                            <>
                                
                                <span className="navbar-text mr-2">Welcome, {userName}</span>
                                <Nav.Link onClick={logout}>Logout</Nav.Link>
                            </>
                        ) : (
                            // User is not logged in, render login/register link
                            <Nav.Link as={Link} to="/Logreg">Login/Register</Nav.Link>
                        )}
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;
