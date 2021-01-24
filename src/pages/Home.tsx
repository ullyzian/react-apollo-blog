import * as React from 'react';
import Navigation from '../components/Navigation/Navigation';
import { Button, Col, Container, NavLink, Row } from 'react-bootstrap';
import { ROUTES } from '../utils/constants';

export const Home: React.FC = () => {
    return (
        <div className="h-100" style={{ backgroundColor: '#def7fe' }}>
            <Navigation />
            <Container className="mx-auto my-2 flex-grow-1" style={{ height: `calc(100% - 80px)` }}>
                <Row className="h-100">
                    <Col
                        xs={12}
                        md={{ offset: 2, span: 8 }}
                        lg={{ offset: 3, span: 6 }}
                        className="h-75 d-flex flex-column justify-content-center"
                    >
                        <h1 className="text-center">Simple blog made with modern technologies</h1>
                        <p className="text-center m-2" style={{ fontSize: 22, whiteSpace: 'pre-wrap' }}>
                            React + Apollo on Frontend and{'\n'}
                            FastAPI + Graphene on Backend as API
                        </p>
                        <NavLink className="mx-auto" href={ROUTES.blog}>
                            <Button variant="primary"> See blog</Button>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
