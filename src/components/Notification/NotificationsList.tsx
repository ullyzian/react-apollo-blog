import * as React from 'react';
import { ToastNotification } from './ToastNotification';
import { useContext } from 'react';
import MessagesContext from '../../contexts/MessagesContext';

export interface INotification {
    id: number;
    message: string;
    status: string;
    color: string;
}

export const NotificationsList: React.FC = () => {
    const { messages } = useContext(MessagesContext);

    return (
        <div
            style={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                minWidth: '300px',
            }}
        >
            {messages.map(({ message, status, color, id }) => {
                return <ToastNotification key={message} message={message} status={status} color={color} id={id} />;
            })}
        </div>
    );
};
