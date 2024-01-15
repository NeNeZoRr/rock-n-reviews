import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Register = (props) => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Add client-side validation
            if (pass !== confirmPass) {
                console.error('Passwords do not match');
                return;
            }

            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}users/register`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    userName: userName,
                    pass: pass,
                }),
            });

            if (response.ok) {
                console.log('User registered successfully');
                navigate('/');
            } else {
                console.error('Error registering user');
            }
        } catch (error) {
            console.error('Error registering user', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="userName">User Name:</label>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    required
                    placeholder="User Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />

                <label htmlFor="pass">Password:</label>
                <input
                    type="password"
                    name="pass"
                    id="pass"
                    required
                    placeholder="********"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />

                <label htmlFor="confirmPass">Confirm Password:</label>
                <input
                    type="password"
                    name="confirmPass"
                    id="confirmPass"
                    required
                    placeholder="********"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                />

                <button type="submit">Register</button>
            </form>

            <button onClick={() => props.onFormSwitch('login')}>
                Already have an account?
            </button>
        </>
    );
}

export default Register;