import React, { useState } from 'react';
import axios from 'axios';

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
            setMessage('');
        } catch (e) {
            setMessage('Invalid username or password');
        }
    };

    return (
        <section>
            <h1>Login</h1>

            {message && <h2>{message}</h2>}

            <form onSubmit={onSubmit}>
                <label>
                    Username:
                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                Password:
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                </label>
                <br />
                <input type="submit" />
            </form>
        </section>
    );
}

export default Login;