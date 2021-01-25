import { useState } from 'react';
import { INotification } from '../components/Notification/NotificationsList';

export interface IMessage {
    messages: INotification[];
    addMessage: (message: string, status: string, color: string) => void;
    removeMessage: (id: number) => void;
}

const useMessage = (): IMessage => {
    const [messages, setMessages] = useState<INotification[]>([]);

    const addMessage = (message: string, status: string, color: string) => {
        setMessages([{ id: Math.floor(Math.random() * 101), message, status, color }]);
    };

    const removeMessage = (id: number) => {
        setMessages(messages.filter((msg) => msg.id !== id));
    };

    return {
        messages,
        addMessage,
        removeMessage,
    };
};

export default useMessage;
