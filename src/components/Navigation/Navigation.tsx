import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { ROUTES } from '../../utils/constants';
import AuthContext from '../../contexts/AuthContext';

const Navigation: React.FC = () => {
    const auth = useContext(AuthContext);

    const handleSignOut = () => {
        auth.signOut();
        auth.authenticate();
        window.location.reload(false);
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" className="px-5">
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
                            <Button className="ml-2 px-2" onClick={handleSignOut} size="sm">
                                Sign out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Nav.Link href={ROUTES.signIn}>
                                <Button size="sm" className="px-3">
                                    Sign In
                                </Button>
                            </Nav.Link>
                            <Nav.Link href={ROUTES.signUp}>
                                <Button size="sm" className="px-3">
                                    Sign Up
                                </Button>
                            </Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar>
        </>
    );
};

export default Navigation;
