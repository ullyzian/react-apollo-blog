import { gql } from '@apollo/client';

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

export const DELETE_POST = gql`
    mutation DeletePost($id: Int!) {
        deletePost(id: $id) {
            post {
                id
                title
                body
            }
            errors
        }
    }
`;

export const UPDATE_POST = gql`
    mutation UpdatePost($id: Int!, $title: String, $body: String) {
        updatePost(id: $id, title: $title, body: $body) {
            post {
                id
                title
                body
            }
            errors
        }
    }
`;

export const CREATE_COMMENT = gql`
    mutation CreateComment($body: String!, $postId: Int!) {
        createComment(body: $body, postId: $postId) {
            id
            body
        }
    }
`;

export const DELETE_COMMENT = gql`
    mutation DELETEComment($id: Int!) {
        deleteComment(id: $id) {
            comment {
                id
                body
            }
        }
    }
`;

export const UPDATE_COMMENT = gql`
    mutation UpdateComment($id: Int!, $body: String!) {
        updateComment(id: $id, body: $body) {
            comment {
                id
                body
            }
        }
    }
`;
