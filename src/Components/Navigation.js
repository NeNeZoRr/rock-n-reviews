import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUser } from '../Components/Regs/User_Context';

// Function component for Navigation
function Navigation() {
    const {  userName, logout } = useUser();
    return (
        <Navbar className="bg-light-grey">
            <Container>
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
                    </h4>
                </div>
            </Container>
        </Navbar>
    );
}

export default Navigation;
