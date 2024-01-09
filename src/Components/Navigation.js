import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Rock-n-Reviews</Navbar.Brand>
                <Nav className="justify-content-end link" activeKey="/home" >
                    <Nav.Item>
                        <Nav.Link  eventKey="/Forum">Forum</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  eventKey="/Reviews">Forum</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/Login_Register">Login/Register</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;