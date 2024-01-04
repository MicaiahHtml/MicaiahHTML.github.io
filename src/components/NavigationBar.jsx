import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
//import { HashLink as Link } from 'react-router-hash-link';
//import { scroller } from "react-scroll";

export default function NavigationBar() {
    return (
      <Navbar className="fixed-top custom-nav-style" expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
        <Nav className="justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
    </Navbar>
    )
  }
  