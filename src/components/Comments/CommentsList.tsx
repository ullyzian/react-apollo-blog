import * as React from 'react';
import { ApolloError, ApolloQueryResult } from '@apollo/client';
import { Comment, IComment } from './Comment';

export interface CommentsListProps {
    data: any;
    refetch: () => Promise<ApolloQueryResult<any>>;
    loading?: boolean;
    error?: ApolloError | undefined;
}

export const CommentsList: React.FC<CommentsListProps> = ({ data }) => {
    return data
        .slice(0)
        .reverse()
        .map(({ body, id, author }: IComment) => {
            return <Comment key={id} body={body} id={id} author={author} />;
        });
};
