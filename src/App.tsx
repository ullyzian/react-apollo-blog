import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlogList from './pages/BlogList';
import { ROUTES } from './utils/constants';
import BlogPost from './pages/BlogPost';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AuthContext from './contexts/AuthContext';
import useAuth from './hooks/useAuth';

function App(): JSX.Element {
    const auth = useAuth();
    useEffect(() => {
        auth.authenticate();
    }, []);

    return (
        <AuthContext.Provider value={auth}>
            <Router>
                <Route path={ROUTES.blog} exact>
                    <BlogList />
                </Route>
                <Route path={ROUTES.blogDetail} exact>
                    <BlogPost />
                </Route>
                <Route path={ROUTES.signIn} exact>
                    <SignIn />
                </Route>
                <Route path={ROUTES.signUp} exact>
                    <SignUp />
                </Route>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
