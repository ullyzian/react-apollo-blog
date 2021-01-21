import React from 'react';
import { useQuery } from '@apollo/client';
import { POSTS } from '../../apollo/queries';
import Post from './Post';

function PostsList(): JSX.Element {
    const { loading, error, data } = useQuery(POSTS);
    if (loading) {
        return <p>Loading</p>;
    }
    if (error) {
        return <p>Error</p>;
    }
    return data.listPosts.map(({ body, title, id }: { body: string; title: string; id: number }) => {
        return <Post key={id} body={body} title={title} />;
    });
}

export default PostsList;
