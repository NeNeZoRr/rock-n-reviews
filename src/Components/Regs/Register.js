import React from "react";

export const Register = (props) => {

    return (
        <>
            <form action="/user" method="POST">
                <label htmlFor="name">Your Name:</label>
                <input type="name" name="name" id="name" required placeholder="Your Name" />
                <label htmlFor="userName">User Name:</label>
                <input type="userName" name="userName" id="userName" required placeholder="User Name" />
                <button type="submit">Register</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account?</button>
        </>
    )
}

export default Register;