import { gql } from '@apollo/client';

export const ADD_POST = gql`
    mutation {
        createPost(body: $body, title: $title) {
            post {
                id
                body
                title
            }
        }
    }
`;

export const AUTH_SIGNIN = gql`
    mutation AuthSignIn($username: String!, $password: String!) {
        signInUser(password: $password, username: $username) {
            token
            errors {
                error
            }
            success
        }
    }
`;

export const AUTH_SIGNUP = gql`
    mutation AuthSignUp($username: String!, $password: String!, $fullname: String) {
        signUpUser(password: $password, username: $username, fullname: $fullname) {
            user {
                id
            }
            errors {
                error
            }
            success
        }
    }
`;

export const AUTHENTICATE_USER = gql`
    mutation {
        authenticateUser {
            user {
                id
                username
                fullname
            }
            success
        }
    }
`;

export const CREATE_POST = gql`
    mutation CreatePost($title: String!, $body: String!) {
        createPost(title: $title, body: $body) {
            post {
                id
                title
                body
            }
        }
    }
`;
