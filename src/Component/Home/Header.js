import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">phone-Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="#pricing">my Order</Nav.Link>
                            <Nav.Link href="#deets">manage inventory</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/login">Log in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;