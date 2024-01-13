import { Navbar, Container, Nav } from 'react-bootstrap';


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
    )
}

export default Navigation;
