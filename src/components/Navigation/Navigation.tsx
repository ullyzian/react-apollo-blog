import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

function Navigation(): JSX.Element {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">React + Apollo blog</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="/signin" className="btn">
                        <Button size="sm">Sign In</Button>
                    </Nav.Link>
                    <Nav.Link href="/signup">
                        <Button size="sm">Sign Up</Button>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default Navigation;
