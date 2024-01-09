import React from "react";

export const Register = (props) => {
    // const [user, setUser] = useState('');
    // const [name, setName] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    // }

    return (
        <>
            <form action="/users" method="POST">
                <label htmlFor="name">Your Name:</label>
                <input name="name" id="name" required placeholder="Your Name" />
                <label htmlFor="userName">User Name:</label>
                <input name="userName" id="userName" required placeholder="User Name" />
                <button type="submit">Register</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account?</button>
        </>
    )
}