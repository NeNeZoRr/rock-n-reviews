import React from "react";
import { useState } from "react";

export const Register = (props) => {
     const [user, setUser] = useState('');
     const [name, setName] = useState('');
     const [pass, setPass] = useState('');

     const handleSubmit = (e) => {
         e.preventDefault();
         console.log(user);
     }

    return (
        <>
            <form action="/user" method="POST">
                <label htmlFor="name">Your Name:</label>
                <input type="name" name="name" id="name" required placeholder="Your Name" />
                <label htmlFor="userName">User Name:</label>
                <input type="userName" name="userName" id="userName" required placeholder="User Name" />
                <label htmlFor="pass">Password:</label>
                <input type="pass" name="pass" id="pass" required placeholder="********" />
                <button type="submit">Register</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account?</button>
        </>
    )
}

export default Register;