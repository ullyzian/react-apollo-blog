import * as React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ApolloQueryResult } from '@apollo/client';

interface Author {
    fullname: string;
}

export interface IComment {
    id?: number;
    body: string;
    author: Author;
}

export const Comment: React.FC<IComment> = ({ body, author }) => {
    return (
        <Card className="my-3">
            <Card.Header as="h6">
                {author.fullname} <span className="text-muted">commented</span>
            </Card.Header>
            <Card.Body>
                <Card.Text>{body}</Card.Text>
            </Card.Body>
        </Card>
    );
};
