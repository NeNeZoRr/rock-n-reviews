import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
        <Navbar className="bg-body-tertiary justify-content-start">
            <Container>
                <Navbar.Brand href="/">Rock-n-Reviews</Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/Forum">Forum</Nav.Link>
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
