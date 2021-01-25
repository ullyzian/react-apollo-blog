import * as React from 'react';
import Navigation from '../components/Navigation/Navigation';
import { Button, Col, Container, NavLink, Row } from 'react-bootstrap';
import { ROUTES } from '../utils/constants';

export const Home: React.FC = () => {
    return (
        <div className="h-100">
            <Navigation />
            <Container className="mx-auto my-2 flex-grow-1" style={{ height: `calc(100% - 80px)` }}>
                <Row className="h-100">
                    <Col
                        xs={12}
                        md={{ offset: 2, span: 8 }}
                        lg={{ offset: 3, span: 6 }}
                        className="h-75 d-flex flex-column justify-content-center"
                    >
                        <h1
                            className="text-center mx-auto"
                            style={{ fontSize: 54, whiteSpace: 'pre-wrap', marginTop: 70 }}
                        >
                            Simple blog made with{'\n'}
                            modern technologies
                        </h1>
                        <p
                            className="text-center m-2 text-muted"
                            style={{ fontSize: 22, whiteSpace: 'pre-wrap', fontWeight: 300 }}
                        >
                            React + Apollo on Frontend and{'\n'}
                            FastAPI + Graphene on Backend as API
                        </p>
                        <NavLink className="mx-auto mt-5" href={ROUTES.blog}>
                            <Button variant="primary"> See blog</Button>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
