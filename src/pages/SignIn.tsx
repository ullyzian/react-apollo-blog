import React from 'react';
import SignInForm from '../components/Auth/SignInForm';
import Navigation from '../components/Navigation/Navigation';
import { Col, Container, Row } from 'react-bootstrap';

function SignIn(): JSX.Element {
    return (
        <>
            <Navigation />
            <Container className="mx-auto my-2">
                <Row>
                    <Col xs={12} md={{ offset: 2, span: 8 }} lg={{ offset: 3, span: 6 }}>
                        <h1>Sign In</h1>
                        <SignInForm />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default SignIn;
