import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

const header = () => {
  return (
    <div>
      <Navbar className="myNav p-4" bg="light" expand="lg">
        <Navbar.Brand href="/">Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              First
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default header
