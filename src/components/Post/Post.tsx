import * as React from 'react';

interface Props {
    title: string;
    body: string;
}

export const Post: React.FC<Props> = ({ title, body }) => {
    return (
        <>
            <h1 className="text-left">{title}</h1>
            <hr />
            <div>{body}</div>
        </>
    );
};
