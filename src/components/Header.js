import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Header = () => {
  return (
    <div>
      <Navbar className="myNav p-4" bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            src=""
            className="img-fluid"
            style={{ width: 250 }}
            alt="DigBizCards.in"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <a
                rel="noopener noreferrer"
                className="no-decor"
                href="https://digbizcards.in/login/"
                target="_blank"
              >
                Login
              </a>
            </Nav.Link>
            <Nav.Link>
              <a
                rel="noopener noreferrer"
                className="no-decor"
                href="https://digbizcards.in/register/"
                target="_blank"
              >
                Register
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
