import React from 'react';
import SignUpForm from '../components/Auth/SignUpForm';
import Navigation from '../components/Navigation/Navigation';
import { Col, Container, Row } from 'react-bootstrap';

function SignUp(): JSX.Element {
    return (
        <>
            <Navigation />
            <Container className="mx-auto my-2">
                <Row>
                    <Col xs={12} md={{ offset: 2, span: 8 }} lg={{ offset: 3, span: 6 }}>
                        <h1>Sign up</h1>
                        <SignUpForm />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default SignUp;
