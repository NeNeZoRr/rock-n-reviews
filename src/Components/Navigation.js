import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Navigation () {
  return (
    <Navbar className="bg-body-teriary">
      <Container>
        <Navbar.Brand href="/">Rock-n-Reviews</Navbar.Brand>
        <Nav className="justify-content-end link" activeKey="/home">
          <Nav.Link href="/forum">Forum</Nav.Link>
          <Nav.Link href="/reviews">Reviews</Nav.Link>
          <Nav.Link href="/logreg">Login/Register</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
