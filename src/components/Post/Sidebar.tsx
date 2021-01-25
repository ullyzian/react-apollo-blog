import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import CreatePostModal from '../Post/CreatePostModal';
import AuthContext from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import { ApolloQueryResult } from '@apollo/client';
import MessagesContext from '../../contexts/MessagesContext';

interface Props {
    refetch: () => Promise<ApolloQueryResult<any>>;
    editMode: boolean;
    setEditMode: Dispatch<SetStateAction<boolean>>;
    authorId: number;
}

const Sidebar: React.FC<Props> = ({ refetch, editMode, setEditMode, authorId }) => {
    const [show, setShow] = useState(false);
    const { addMessage } = useContext(MessagesContext);

    const { authenticate, user } = useContext(AuthContext);
    const history = useHistory();

    const handleClose = () => setShow(false);
    const handleShow = () => {
        authenticate()?.then((is_auth) => {
            if (is_auth) {
                setShow(!show);
            } else {
                addMessage('Not authenticated to create post', 'Error', 'red');
                history.push(ROUTES.signIn);
            }
        });
    };

    return (
        <ListGroup>
            <ListGroup.Item onClick={handleShow} action>
                Create new post
            </ListGroup.Item>
            <CreatePostModal show={show} handleClose={handleClose} refetch={refetch} />
            {Number(user?.id) === authorId ? (
                <>
                    <ListGroup.Item onClick={() => setEditMode(!editMode)} action>
                        Edit post
                    </ListGroup.Item>
                </>
            ) : null}
        </ListGroup>
    );
};

export default Sidebar;
