import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../components/Blog/Sidebar';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POST } from '../apollo/queries';

const BlogPost: React.FC = () => {
    const { id }: { id: string } = useParams();
    const { loading, error, data } = useQuery(GET_POST, { variables: { id: Number(id) } });
    if (loading) return <div>Loading</div>;
    if (error) return <div>Error</div>;

    return (
        <>
            <Navigation />
            <Container className="mx-auto my-2">
                <Row>
                    <Col className="my-2" xs={12} md={9}>
                        {data.detailPost ? (
                            <>
                                <h1 className="text-left">{data.detailPost.title}</h1>
                                <hr />
                                <div>{data.detailPost.body}</div>
                            </>
                        ) : (
                            <div>Not found</div>
                        )}
                    </Col>
                    <Col className="my-5" xs={12} md={3}>
                        <Sidebar />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BlogPost;
