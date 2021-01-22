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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const GET_POST = (id: number) => gql`
    query {
        detailPost(id: ${id}) {
            id
            title
            body
        }
    }
`;
