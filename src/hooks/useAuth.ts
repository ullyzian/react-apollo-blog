import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { AUTHENTICATE_USER } from '../apollo/mutations';

export interface IUser {
    id: number;
    username: string;
    fullname: string;
}

export interface IAuth {
    user: IUser | null;
    authenticated: boolean;
    authenticate: () => Promise<boolean> | undefined;
    signOut: () => Promise<void> | undefined;
}

const useAuth = (): IAuth => {
    const [user, setUser] = useState<IUser | null>(null);
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [auth] = useMutation(AUTHENTICATE_USER);

    const authenticate = () => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            return;
        }
        return auth()
            .then(({ data }) => {
                if (data.authenticateUser?.success) {
                    setAuthenticated(true);
                    setUser(data.authenticateUser.user);
                }
                return true;
            })
            .catch((e) => {
                console.log(e);
                setAuthenticated(false);
                setUser(null);
                return false;
            });
    };

    const signOut = () => {
        localStorage.removeItem('access_token');
        return Promise.resolve();
    };

    return {
        user,
        authenticated,
        authenticate,
        signOut,
    };
};

export default useAuth;
