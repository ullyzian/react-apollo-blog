import React from 'react';
import { IUser } from '../hooks/useAuth';

const initial: {
    authenticated: boolean;
    user: IUser | null;
    signOut(): void;
    authenticate(): Promise<boolean> | undefined;
} = {
    authenticated: false,
    user: null,
    signOut: () => null,
    authenticate: () => undefined,
};

const AuthContext = React.createContext(initial);

export default AuthContext;
