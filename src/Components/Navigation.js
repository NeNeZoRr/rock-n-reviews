// Components/Navigation.js
// Navigation component for the app

import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Function component for Navigation
function Navigation() {
    // Render the Navigation component with navigation links
    return (
        <Navbar className="bg-light-grey">
            <Container className='NavBar'>
                <h1>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-10rem' }}>
                        <Navbar.Brand style={{ fontSize: '1.5em' }} as={Link} to="/">
                            Rock-n-Reviews
                        </Navbar.Brand>
                    </div>
                </h1>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '-17rem' }}>
                    <h4>
                        <Nav className="ms-auto" navbarScroll>
                            <div style={{ width: '30px' }}></div>
                            <Nav.Link as={Link} to="/forum">
                                Forum
                            </Nav.Link>
                            <Nav.Link as={Link} to="/reviews">
                                Reviews
                            </Nav.Link>
                            <Nav.Link as={Link} to="/logreg">
                                Login/Register
                            </Nav.Link>
                        </Nav>
                    </h4>
                </div>
            </Container>
        </Navbar>
    );
}

export default Navigation;