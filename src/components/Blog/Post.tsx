import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

interface PostProps {
    body: string;
    title: string;
    key: number;
    id: number;
}

const Post: React.FC<PostProps> = ({ body, title, id }: PostProps) => {
    return (
        <Card className="text-left my-4">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <div
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
                    </div>
                </Card.Text>
                <Link to={`${ROUTES.blog}/${id}`}>
                    <Button variant="primary">View more</Button>
                </Link>
            </Card.Body>
            <Card.Footer className="text-muted">Tags</Card.Footer>
        </Card>
    );
};

export default Post;
