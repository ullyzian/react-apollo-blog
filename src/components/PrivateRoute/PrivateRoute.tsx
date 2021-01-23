import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import { ROUTES } from '../../utils/constants';

interface PrivateRouteProps {
    children: React.ReactChildren;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {
    const auth = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.authenticated ? children : <Redirect to={{ pathname: ROUTES.signIn, state: { from: location } }} />
            }
        />
    );
};
