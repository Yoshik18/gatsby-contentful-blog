import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import logo from "../images/logo2.png"

const Header = () => {
  return (
    <div>
      <Navbar className="myNav p-4" bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="img-fluid"
            style={{ width: 250 }}
            alt="DigBizCards.in"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="no-decor" href="https://digbizcards.in/login/">
              Login
            </Nav.Link>
            <Nav.Link
              href="https://digbizcards.in/register/"
              className="no-decor"
            >
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
