import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [user, setUser] = useState('');
<<<<<<< HEAD

    const handleSubmit = (e) => {
=======
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
>>>>>>> 31c28feac1c70a290572c0ef9eefdac3214b1003
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:8080/users/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: user,
                    password: pass,
                }),
            });
    
            if (!response.ok) {
                console.error('Authentication failed:', response.status, response.statusText);
                // Handle authentication failure (display error message, etc.)
            } else {
                console.log('Login successful');
                // Redirect to the home page upon successful login
                navigate('/');
            }
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user">User Name:</label>
<<<<<<< HEAD
                <input value={user} onChange={(e) => setUser(e.target.value)} type="user Name" placeholder="User Name" />
=======
                <input value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="User Name" />
                <label htmlFor="pass">Password:</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" required placeholder="********" />
>>>>>>> 31c28feac1c70a290572c0ef9eefdac3214b1003
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}> Need to register?</button>
        </>
    );
}

export default Login;

