import React from 'react';
import { ApolloError, ApolloQueryResult } from '@apollo/client';
import PostCard from './PostCard';

export interface IPost {
    id: number;
    title: string;
    body: string;
    authorId: number;
    refetch: () => Promise<ApolloQueryResult<any>>;
}

export interface PostsListProps {
    data: any;
    refetch: () => Promise<ApolloQueryResult<any>>;
    loading: boolean;
    error: ApolloError | undefined;
}

const PostsList: React.FC<PostsListProps> = ({ data, loading, error, refetch }) => {
    if (loading) {
        return <div>Loading</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    return data.listPosts
        .slice(0)
        .reverse()
        .map(({ body, title, id, authorId }: IPost) => {
            return <PostCard key={id} body={body} title={title} id={id} authorId={authorId} refetch={refetch} />;
        });
};

export default PostsList;
