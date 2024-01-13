import React from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'

function Navigation() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Rock-n-Reviews</Navbar.Brand>
        <Nav className="ms-auto" navbarScroll>
          <Nav.Link href="/forum">Forum</Nav.Link>
          <Nav.Link href="/reviews">Reviews</Nav.Link>
          <Nav.Link href="/logreg">Login/Register</Nav.Link>
        </Nav>
        <Form className="d-flex justify-content-end">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  )
}

export default Navigation
