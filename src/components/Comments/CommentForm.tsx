// @flow
import * as React from 'react';
import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ApolloQueryResult, useMutation } from '@apollo/client';
import { CREATE_COMMENT } from '../../apollo/mutations';
import MessagesContext from '../../contexts/MessagesContext';

interface Props {
    postId: number;
    refetch: () => Promise<ApolloQueryResult<any>>;
}

export const CommentForm: React.FC<Props> = ({ postId, refetch }) => {
    const { addMessage } = useContext(MessagesContext);
    const [body, setBody] = useState('');
    const [createComment] = useMutation(CREATE_COMMENT);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createComment({ variables: { postId: postId, body: body } })
            .then(() => {
                refetch().then(() => addMessage('You successfully commented', 'Success', 'lightgreen'));
            })
            .catch((e) => {
                addMessage('Not authenticated to add comments', 'Error', 'red');
                console.log(e);
            });
    };

    return (
        <Form onSubmit={handleSubmit} className="my-2">
            <Form.Group controlId="exampleForm.ControlTextarea">
                <Form.Label>Write comment</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setBody(e.target.value)} />
                <Button variant="primary" type="submit" className="my-2">
                    Comment
                </Button>
            </Form.Group>
        </Form>
    );
};
