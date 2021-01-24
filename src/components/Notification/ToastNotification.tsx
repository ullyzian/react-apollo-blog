import * as React from 'react';
import { Toast } from 'react-bootstrap';
import { useContext } from 'react';
import MessagesContext from '../../contexts/MessagesContext';

interface Props {
    id: number;
    message: string;
    status: string;
    color: string;
}

export const ToastNotification: React.FC<Props> = ({ id, message, status, color }) => {
    const { removeMessage } = useContext(MessagesContext);

    return (
        <Toast className="w-100" onClose={() => removeMessage(id)} delay={4000} autohide>
            <Toast.Header>
                <div className="rounded mr-2" style={{ width: 40, height: 40, backgroundColor: color }} />
                <strong className="mr-auto">{status}</strong>
                <small>just now</small>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
};
