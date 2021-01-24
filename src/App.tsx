import React, { useEffect } from 'react';
import AuthContext from './contexts/AuthContext';
import useAuth from './hooks/useAuth';
import { Routes } from './routes';
import useMessage from './hooks/useMessage';
import MessagesContext from './contexts/MessagesContext';

const App: React.FC = () => {
    const auth = useAuth();
    const messages = useMessage();

    useEffect(() => {
        auth.authenticate();
    }, []);

    return (
        <MessagesContext.Provider value={messages}>
            <AuthContext.Provider value={auth}>
                <Routes />
            </AuthContext.Provider>
        </MessagesContext.Provider>
    );
};

export default App;
