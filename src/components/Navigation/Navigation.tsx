import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { ROUTES } from '../../utils/constants';

function Navigation(): JSX.Element {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href={ROUTES.home}>React + Apollo blog</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href={ROUTES.blog}>Blog</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href={ROUTES.signIn}>
                        <Button size="sm">Sign In</Button>
                    </Nav.Link>
                    <Nav.Link href={ROUTES.signUp}>
                        <Button size="sm">Sign Up</Button>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default Navigation;
