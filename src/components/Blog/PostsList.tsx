import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../apollo/queries';
import Post from './Post';

interface IPost {
    id: number;
    title: string;
    body: string;
}

const PostsList: React.FC = () => {
    const { loading, error, data } = useQuery(GET_POSTS);
    if (loading) {
        return <div>Loading</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    return data.listPosts.map(({ body, title, id }: IPost) => {
        return <Post key={id} body={body} title={title} id={id} />;
    });
};

export default PostsList;
