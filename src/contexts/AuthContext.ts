import React from 'react';
import { IAuth } from '../hooks/useAuth';

const initialValues: IAuth = {
    authenticated: false,
    user: null,
    signOut: () => undefined,
    authenticate: () => undefined,
};

const AuthContext = React.createContext(initialValues);

export default AuthContext;
