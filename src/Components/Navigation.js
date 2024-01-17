import { Navbar, Container, Nav } from 'react-bootstrap';
import '../App.css'


function Navigation() {
    return (
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className="font" href="/">Rock-n-Reviews</Navbar.Brand>
                    <Nav className="justify-content-end link" activeKey="/home" >
                        <Nav.Item>
                            <Nav.Link className="font" href="/Forum">Forum</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="font" href="/Reviews">Reviews</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="font" href="/Logreg">Login/Register</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
    )
}

export default Navigation;
