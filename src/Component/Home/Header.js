import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">phone-Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link href="/myorder">my Order</Nav.Link>
                                </>
                            }
                            <Nav.Link href="/phones">Phones</Nav.Link>
                            <Nav.Link href="/inventory">My Item</Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            {

                                user ?
                                    <Nav.Link onClick={() => signOut(auth)} href="/login">
                                        log out
                                    </Nav.Link>
                                    :
                                    <Nav.Link href="/login">Log in</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;