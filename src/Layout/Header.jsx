import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Abdullah Ashik</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link className="text-decoration-none text-dark ms-3" to='/' >Home</Link>
                    <Link className="text-decoration-none text-dark ms-3" to='/about'>About</Link>
                    <Link className="text-decoration-none text-dark ms-3" to='/projects'>Projects</Link>
                    <Link className="text-decoration-none text-dark ms-3" to='/contact'>Contact</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;