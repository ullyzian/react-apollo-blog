import { gql } from '@apollo/client';

export const GET_POSTS = gql`
    query {
        listPosts {
            id
            title
            body
        }
    }
`;

export const GET_POST = gql`
    query GetPost($id: Int!) {
        detailPost(id: $id) {
            id
            title
            body
        }
    }
`;
