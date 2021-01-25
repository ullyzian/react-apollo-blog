import React, { useEffect } from 'react';
import AuthContext from './contexts/AuthContext';
import useAuth from './hooks/useAuth';
import { Routes } from './routes';
import useMessage from './hooks/useMessage';
import MessagesContext from './contexts/MessagesContext';
import { NotificationsList } from './components/Notification/NotificationsList';

const App: React.FC = () => {
    const auth = useAuth();
    const messages = useMessage();

    useEffect(() => {
        auth.authenticate();
    }, []);

    useEffect(() => {
        console.log('Update');
    }, [messages]);

    return (
        <MessagesContext.Provider value={messages}>
            <AuthContext.Provider value={auth}>
                <Routes />
                <NotificationsList />
            </AuthContext.Provider>
        </MessagesContext.Provider>
    );
};

export default App;
