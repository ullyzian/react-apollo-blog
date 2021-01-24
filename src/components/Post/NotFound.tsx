import * as React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

export const NotFound: React.FC = () => {
    return (
        <Jumbotron fluid className="my-4 text-center">
            <Container>
                <h1>Not found</h1>
                <p>Please, try to access another post</p>
            </Container>
        </Jumbotron>
    );
};
