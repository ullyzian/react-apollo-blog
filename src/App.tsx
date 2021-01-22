import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlogList from './pages/BlogList';
import { ROUTES } from './utils/constants';
import BlogPost from './pages/BlogPost';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App(): JSX.Element {
    return (
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    );
}

export default App;
