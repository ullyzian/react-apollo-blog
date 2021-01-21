import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import { ROUTES } from './utils/constants';

function App(): JSX.Element {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Route path={ROUTES.blog}>
                    <Blog />
                </Route>
            </Router>
        </ApolloProvider>
    );
}

export default App;
