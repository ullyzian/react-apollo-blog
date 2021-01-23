import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { AUTH_SIGNUP } from '../../apollo/mutations';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

interface Error {
    error: string;
}

const SignUpForm: React.FC = () => {
    const [auth] = useMutation(AUTH_SIGNUP);
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errors, setErrors] = useState<Error[]>([]);
    const history = useHistory();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErrors([]);
        if (password !== passwordConfirm) {
            setErrors([{ error: "Passwords don't match" }]);
        } else {
            auth({ variables: { username: username, password: password, fullname: fullname } })
                .then(({ data }) => {
                    if (data.signUpUser.success) {
                        history.push(ROUTES.signIn);
                    } else {
                        setErrors(data.signUpUser.errors);
                        console.log(errors);
                    }
                })
                .catch((e) => {
                    console.log(e.networkError?.result);
                });
        }
    }

    return (
        <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Form.Text className="text-muted">We will never share your username with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicFullname">
                <Form.Label>Full name</Form.Label>
                <Form.Control type="text" placeholder="Enter full name" onChange={(e) => setFullname(e.target.value)} />
                <Form.Text className="text-muted">*Optional</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
            </Form.Group>
            <Form.Group controlId="formBasicPasswordConfirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    required
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    type="password"
                    placeholder="Confirm Password"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            {errors.map((error) => (
                <Alert key={error.error} variant="danger" className="my-4">
                    {error.error}
                </Alert>
            ))}
        </Form>
    );
};

export default SignUpForm;
