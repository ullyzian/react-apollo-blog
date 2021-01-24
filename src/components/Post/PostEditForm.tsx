import * as React from 'react';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ApolloQueryResult, useMutation } from '@apollo/client';
import { UPDATE_POST } from '../../apollo/mutations';
import MessagesContext from '../../contexts/MessagesContext';

interface Props {
    id: number;
    refetch: () => Promise<ApolloQueryResult<any>>;
    setEditMode: Dispatch<SetStateAction<boolean>>;
    oldTitle: string;
    oldBody: string;
}

export const PostEditForm: React.FC<Props> = ({ id, refetch, setEditMode, oldBody, oldTitle }) => {
    const { addMessage } = useContext(MessagesContext);
    const [title, setTitle] = useState(oldTitle);
    const [body, setBody] = useState(oldBody);
    const [updatePost] = useMutation(UPDATE_POST);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updatePost({ variables: { id: id, title: title, body: body } })
            .then(() => {
                setEditMode(false);
                refetch().then(() => addMessage('Post successfully edited', 'Success', 'lightgreen'));
            })
            .catch((e) => {
                addMessage('Error, while editing post', 'Error', 'red');
                console.log(e);
            });
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInputTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    value={title}
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea">
                <Form.Label>Body</Form.Label>
                <Form.Control value={body} as="textarea" rows={3} onChange={(e) => setBody(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Save changes
            </Button>
        </Form>
    );
};
