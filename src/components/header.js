import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import logo from "../images/logo-2.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {
  return (
    <div>
      <Navbar className="myNav p-2" bg="light" expand="lg">
        <Navbar.Brand>
          <AniLink cover hex="#5c65ca" className="no-decor" to="/">
            <img
              target="_blank"
              src={logo}
              className="img-fluid"
              style={{ width: 250 }}
              alt="KayHosting"
            />
          </AniLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              target="_blank"
              className="no-decor"
              href="#"
              rel="noreferrer noopener"
            >
              Login
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="#"
              className="no-decor"
              rel="noreferrer noopener"
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
