import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import AuthContext from '../../contexts/AuthContext';
import { useMutation } from '@apollo/client';
import { DELETE_POST } from '../../apollo/mutations';
import { IPost } from './PostsList';
import MessagesContext from '../../contexts/MessagesContext';

const PostCard: React.FC<IPost> = ({ body, title, id, authorId, refetch }) => {
    const auth = useContext(AuthContext);
    const { addMessage } = useContext(MessagesContext);

    const [deletePost] = useMutation(DELETE_POST);

    const handleDelete = () => {
        deletePost({ variables: { id: id } })
            .then(() => {
                refetch().then(() => addMessage('Post successfully deleted', 'Success', 'lightgreen'));
            })
            .catch((e) => {
                addMessage('Unexpected error. Please visit site later.', 'Error', 'red');
                console.log(e);
            });
    };

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
                    </div>
                </Card.Text>
                <Link to={`${ROUTES.blog}/${id}`}>
                    <Button variant="primary">View more</Button>
                </Link>
                {Number(auth.user?.id) === authorId ? (
                    <Button onClick={handleDelete} className="ml-2" variant="danger">
                        Delete
                    </Button>
                ) : null}
            </Card.Body>
            <Card.Footer className="text-muted">Tags</Card.Footer>
        </Card>
    );
};

export default PostCard;
