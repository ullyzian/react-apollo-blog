import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { ROUTES } from '../../utils/constants';
import AuthContext from '../../contexts/AuthContext';

function Navigation(): JSX.Element {
    const auth = useContext(AuthContext);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href={ROUTES.home}>React + Apollo blog</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href={ROUTES.blog}>Blog</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    {auth.authenticated ? (
                        <>
                            <Nav.Item className="text-white my-auto">
                                <div style={{ fontSize: 14 }}>Hello, {auth.user?.fullname}</div>
                            </Nav.Item>
                            <Nav.Link href="#">
                                <Button
                                    onClick={() => {
                                        auth.signOut();
                                        auth.authenticate();
                                    }}
                                    size="sm"
                                >
                                    Sign out
                                </Button>
                            </Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link href={ROUTES.signIn}>
                                <Button size="sm">Sign In</Button>
                            </Nav.Link>
                            <Nav.Link href={ROUTES.signUp}>
                                <Button size="sm">Sign Up</Button>
                            </Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar>
        </>
    );
}

export default Navigation;
