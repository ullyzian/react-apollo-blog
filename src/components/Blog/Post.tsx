import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface PostProps {
    body: string;
    title: string;
    key: number;
}

const Post: React.FC<PostProps> = ({ body, title }: PostProps) => {
    return (
        <Card className="text-left">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
                <Button variant="primary">View more</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Tags</Card.Footer>
        </Card>
    );
};

export default Post;
