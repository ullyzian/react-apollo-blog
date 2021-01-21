import { gql } from '@apollo/client';

export const POSTS = gql`
    query {
        listPosts {
            id
            title
            body
        }
    }
`;
