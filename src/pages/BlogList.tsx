import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import { Col, Container, Row } from 'react-bootstrap';
import PostsList from '../components/Blog/PostsList';
import Sidebar from '../components/Blog/Sidebar';

function BlogList(): JSX.Element {
    return (
        <>
            <Navigation />
            <Container className="mx-auto my-2">
                <Row>
                    <Col className="my-2" xs={12} md={9}>
                        <h1 className="text-left">Blog</h1>
                        <hr />
                        <PostsList />
                    </Col>
                    <Col className="my-5" xs={12} md={3}>
                        <Sidebar />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default BlogList;
