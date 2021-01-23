import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import { ROUTES } from '../../utils/constants';

interface PrivateRouteProps {
    children: React.ReactChildren;
}

function PrivateRoute({ children, ...rest }: PrivateRouteProps) {
    const auth = useContext(AuthContext);
    console.log(auth);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.authenticated ? children : <Redirect to={{ pathname: ROUTES.signIn, state: { from: location } }} />
            }
        />
    );
}
