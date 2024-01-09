import { useState } from "react";

export const Login = (props) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user">User Name:</label>
                <input value={user} onChange={(e) => setUser(e.target.value)} type="user Name" placeholder="User Name" />
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}> Need to register?</button>
        </>
    )
}
export default Login;