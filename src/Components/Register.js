import { useState } from "react";

export const Register = (props) => {
    const [user, setUser] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <label for="Name">Your Name:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="Name" placeholder="Your Name"/>
            <label for="user">User Name:</label>
            <input value={user} onChange={(e) => setUser(e.target.value)} type="user Name" placeholder="User Name"/>
            <button type="submit">Register</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>Already have an account?</button>
        </>
    )
}
export default Register;