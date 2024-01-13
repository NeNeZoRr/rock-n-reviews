import React from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'

function Navigation() {
    React.useEffect(() => {
        document.title = "Rock-n-Reviews";
    }, [])

    return (
        <Navbar className="bg-body-tertiary">
      <Container>
        <h1>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-18rem' }}>
            <Navbar.Brand style={{ fontSize: '1.5em' }} href="/">
              Rock-n-Reviews
            </Navbar.Brand>
          </div>
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '-18rem' }}>
          <h4>
            <Nav className="ms-auto" navbarScroll>
              <Form className="d-flex justify-content-start">
                <FormControl
                  type="text"
                  placeholder=" Discover Your Sound "
                  className="mr-2"
                  aria-label="Search"
                  style={{ width: '350px' }}
                />
                <Button variant="primary">Search</Button>
              </Form>
              <div style={{ width: '30px' }}></div>
              <Nav.Link href="/forum">Forum</Nav.Link>
              <Nav.Link href="/reviews">Reviews</Nav.Link>
              <Nav.Link href="/logreg">Login/Register</Nav.Link>
              <Nav.Link href="/admin">Admin</Nav.Link>
            </Nav>
          </h4>
        </div>
      </Container>
    </Navbar>
  )
}

export default Navigation