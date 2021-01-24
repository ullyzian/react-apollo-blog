import React, { useContext, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import CreatePostModal from '../Post/CreatePostModal';
import AuthContext from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import { ApolloQueryResult } from '@apollo/client';
import MessagesContext from '../../contexts/MessagesContext';

interface Props {
    refetch: () => Promise<ApolloQueryResult<any>>;
}

const Sidebar: React.FC<Props> = ({ refetch }) => {
    const [show, setShow] = useState(false);
    const { addMessage } = useContext(MessagesContext);

    const auth = useContext(AuthContext);
    const history = useHistory();

    const handleClose = () => setShow(false);
    const handleShow = () => {
        auth.authenticate()?.then((is_auth) => {
            if (is_auth) {
                setShow(!show);
            } else {
                addMessage('Not authenticated to create post', 'Error', 'red');
                setTimeout(() => {
                    history.push(ROUTES.signIn);
                }, 3000);
            }
        });
    };

    return (
        <ListGroup>
            <ListGroup.Item onClick={handleShow} action>
                Create new post
            </ListGroup.Item>
            <CreatePostModal show={show} handleClose={handleClose} refetch={refetch} />
        </ListGroup>
    );
};

export default Sidebar;
