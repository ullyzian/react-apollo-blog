import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ROUTES } from './utils/constants';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Home } from './pages/Home';

export const Routes: React.FC = () => {
    return (
        <Router>
            <Route path={ROUTES.home} exact>
                <Home />
            </Route>
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
    );
};
