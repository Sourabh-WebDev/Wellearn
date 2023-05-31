import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle register logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Enter mobile number"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </Form.Group>

               
            </Form>

            <Button variant="primary" type="submit">
                    Register
                </Button>
        </Container>
    )
}

export default Register