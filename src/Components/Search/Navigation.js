import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Search from './Search'

// export const AuthContext = React.createContext();
// const initialState = {
//   isAuthenticated: false,
//   user: null,
//   token: null
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       localStorage.setItem("user", JSON.stringify(action.payload.user));
//       localStorage.serItem("token", JSON.stringify(action.payload.token));
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload.user,
//         token: action.payload.token
//       }
//     case "LOGOUT":
//       localStorage.clear();
//       return {
//         isAuthenticated: false,
//         user: null
//       };
//     default:
//       return state;
//   }
// }

const loggedIn = () => {

  return (
    // <AuthContext.Provider
    //   value={{
    //     state,
    //     dispatch
    //   }}
    // // >
    // {!state.isAuthenticated ?
    <Nav.Link as={Link} to="/logreg">
      Login/Register
    </Nav.Link>

    // : <Nav.Link as={Link} to="/logout">
    //   Login/Register
    // </Nav.Link>
    // }
    //     // </AuthContext.Provider>

    //   )
  )
}


function Navigation() {
  // const state, dispatch = React.useReducer(reducer, initialState);

  useEffect(() => {
    document.title = 'Rock-n-Reviews'
  }, [])



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
              {loggedIn}
            </Nav>
          </h4>
        </div>
      </Container>
    </Navbar>
  )
}

export default Navigation