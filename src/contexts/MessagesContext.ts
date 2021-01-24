import React from 'react';
import { IMessage } from '../hooks/useMessage';

const initialValues: IMessage = {
    messages: [],
    addMessage: () => undefined,
    removeMessage: () => undefined,
};

const MessagesContext = React.createContext(initialValues);

export default MessagesContext;
