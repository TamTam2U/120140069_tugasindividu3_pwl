import React, { Component } from "react";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./Navbar.css"


export default class Navbarr extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto menumain">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
