import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import { Col, Container, Row } from 'react-bootstrap';
import PostsList from '../components/PostList/PostsList';
import Sidebar from '../components/PostList/Sidebar';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../apollo/queries';

const BlogList: React.FC = () => {
    const { loading, error, data, refetch } = useQuery(GET_POSTS);
    // comment

    return (
        <>
            <Navigation />
            <Container className="mx-auto my-2">
                <Row>
                    <Col className="my-2" xs={12} md={9}>
                        <h1 className="text-left">Blog</h1>
                        <hr />
                        <PostsList data={data} error={error} loading={loading} refetch={refetch} />
                    </Col>
                    <Col className="my-5" xs={12} md={3}>
                        <Sidebar refetch={refetch} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BlogList;
