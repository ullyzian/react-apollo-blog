import React, { useEffect } from 'react';
import AuthContext from './contexts/AuthContext';
import useAuth from './hooks/useAuth';
import { Routes } from './routes';

const App: React.FC = () => {
    const auth = useAuth();
    useEffect(() => {
        auth.authenticate();
    }, []);

    return (
        <AuthContext.Provider value={auth}>
            <Routes />
        </AuthContext.Provider>
    );
};

export default App;
