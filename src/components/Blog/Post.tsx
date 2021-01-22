import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface PostProps {
    body: string;
    title: string;
    key: number;
    id: number;
}

const Post: React.FC<PostProps> = ({ body, title, id }: PostProps) => {
    return (
        <Card className="text-left">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <p
                        style={{
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: 'vertical',
                            display: '-webkit-box',
                        }}
                    >
                        {body}
                        sdljfhskdjfhksdfjhksjdfjhsdgfjhsdgfjhsdgfjhsdgfjsdhfgsdjhfgjshdgfhsdgfjhgsdjhfgsjdhgfjhsdgfjhgsdfjhgsdjhfgsjdhgfjhsdgfjhsgdjfhgsdjhfgjshdgfjhsdgjhfgsdjhgfjshdgfjhgsdfjhgsdjhfgjhsdgfjhsdgfjhsdgfjhsdgfjhgsdjfhgsdjh
                        gdjshfg sjdhfg jdhsg jfgsdjhfg sdhjgf
                    </p>
                </Card.Text>
                <Link to={`/blog/${id}`}>
                    <Button variant="primary">View more</Button>
                </Link>
            </Card.Body>
            <Card.Footer className="text-muted">Tags</Card.Footer>
        </Card>
    );
};

export default Post;
