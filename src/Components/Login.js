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
            <label for="user">User Name:</label>
            <input value={user} onChange={(e) => setUser(e.target.value)} type="user Name" placeholder="User Name"/>
            <label for="pass">Password:</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********"/>
            <button type="submit">Log In</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')}> Need to register?</button>
        </>
    )
}
export default Login;