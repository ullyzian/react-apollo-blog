import React, { useContext, useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { AUTH_SIGNIN } from '../../apollo/mutations';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import AuthContext from '../../contexts/AuthContext';

const SignInForm: React.FC = () => {
    const [auth] = useMutation(AUTH_SIGNIN);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const authUser = useContext(AuthContext);

    const history = useHistory();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErrors([]);
        auth({ variables: { username: username, password: password } })
            .then(({ data }) => {
                if (data.signInUser.success) {
                    localStorage.setItem('access_token', data.signInUser.token);
                    authUser.authenticate();
                    history.push(ROUTES.blog);
                } else {
                    setErrors(data.signInUser.errors);
                    console.log(errors);
                }
            })
            .catch((e) => {
                console.log(e.networkError?.result?.errors);
            });
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            {errors.map((error) => (
                <Alert key={error['error']} variant="danger" className="my-4">
                    {error['error']}
                </Alert>
            ))}
        </Form>
    );
};

export default SignInForm;
