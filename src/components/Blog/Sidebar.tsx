import React, { useContext, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import CreatePostModal from './CreatePostModal';
import AuthContext from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

function Sidebar() {
    const [show, setShow] = useState(false);
    const auth = useContext(AuthContext);
    const history = useHistory();

    const handleClose = () => setShow(false);
    const handleShow = () => {
        auth.authenticate()?.then((is_auth) => console.log(is_auth));
        if (auth.authenticated) {
            setShow(!show);
        } else {
            history.push(ROUTES.signIn);
        }
    };

    return (
        <ListGroup>
            <ListGroup.Item onClick={handleShow} action>
                Create new post
            </ListGroup.Item>
            <CreatePostModal show={show} handleClose={handleClose} />
            <ListGroup.Item action>This one is a button</ListGroup.Item>
        </ListGroup>
    );
}

export default Sidebar;
