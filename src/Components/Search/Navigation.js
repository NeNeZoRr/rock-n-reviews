import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Search from './Search'

function Navigation() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Rock-n-Reviews'
  }, [])

  const setse = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/search/${searchTerm}`)
    }
  }

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
            <Search />
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
  )
}

export default Navigation