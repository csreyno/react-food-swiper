import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post('/api/users/login', {
                username,
                password
            });
            console.log(resp);

            props.doLogin();
            setMessage('Logging in...');
        } catch (e) {
            setMessage('Invalid username or password');
        }
    };

    return (
    <div className="login-div">
        <div className="login-card">
            <h1>Login</h1>

            {message && <h2>{message}</h2>}

            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        value={username} 
                        placeholder="Enter Username" 
                        onChange={e => setUsername(e.target.value)}
                        />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password" 
                        value={password} 
                        placeholder="Password" 
                        onChange={e => setPassword(e.target.value)}
                        />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </div>
    </div>
    
    );
}

export default Login;