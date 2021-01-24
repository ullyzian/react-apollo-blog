import React, { useState } from 'react';
import Navigation from '../components/Navigation/Navigation';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POST } from '../apollo/queries';
import { Post } from '../components/Post/Post';
import { NotFound } from '../components/Post/NotFound';
import { PostEditForm } from '../components/Post/PostEditForm';

const BlogPost: React.FC = () => {
    const { id }: { id: string } = useParams();
    const { loading, error, data, refetch } = useQuery(GET_POST, { variables: { id: Number(id) } });
    const [editMode, setEditMode] = useState(false);
    if (loading) return <div>Loading</div>;
    if (error) return <div>Error</div>;

    return (
        <>
            <Navigation />
            <Container className="mx-auto my-2">
                <Row>
                    <Col className="my-2" xs={12} md={9}>
                        {data.detailPost ? (
                            editMode ? (
                                <PostEditForm
                                    id={Number(id)}
                                    refetch={refetch}
                                    setEditMode={setEditMode}
                                    oldTitle={data.detailPost.title}
                                    oldBody={data.detailPost.body}
                                />
                            ) : (
                                <Post title={data.detailPost.title} body={data.detailPost.body} />
                            )
                        ) : (
                            <NotFound />
                        )}
                    </Col>
                    <Col className="my-5" xs={12} md={3}>
                        <Sidebar
                            authorId={data.detailPost.authorId}
                            refetch={refetch}
                            editMode={editMode}
                            canEdit={true}
                            setEditMode={setEditMode}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BlogPost;
