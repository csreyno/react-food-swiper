import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Register(props){
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (passwordReg === confirmPass) {
            const resp = await axios.post('/api/users/new', {
                usernameReg,
                passwordReg
            });
            console.log(resp);

            setMessage('Creating User');
            props.doLogin();
    } else {
        setMessage("Passwords don't match")
    }
};

    return (
    <div className="reg-div">
        <section className="reg-card">
            <h1>Register</h1>

            {message && <h2>{message}</h2>}

            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        value={usernameReg} 
                        placeholder="Enter Username" 
                        onChange={e => setUsernameReg(e.target.value)}
                        />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password" 
                        value={passwordReg} 
                        placeholder="Password" 
                        onChange={e => setPasswordReg(e.target.value)}
                        />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control
                        type="password" 
                        placeholder="Password" 
                        value={confirmPass} 
                        onChange={e => setConfirmPass(e.target.value)}
                        />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                </Form>
        </section>
    </div>
    
    );
}

export default Register;