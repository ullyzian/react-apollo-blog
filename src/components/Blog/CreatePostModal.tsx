import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../../apollo/mutations';

interface CreatePostModalProps {
    show: boolean;
    handleClose: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ show, handleClose }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [createPost] = useMutation(CREATE_POST);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createPost({ variables: { title: title, body: body } })
            .then(({ data }) => {
                console.log(data);
                handleClose();
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create new post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="exampleForm.ControlInputTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea">
                            <Form.Label>Body</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setBody(e.target.value)} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" type="submit" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Create
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default CreatePostModal;
