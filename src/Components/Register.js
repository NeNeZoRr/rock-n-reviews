
import { useState } from "react";
import { useNavigate } from "react-router-dom"

function Register(props) {

    const init_state = {
        userName: '',
        pass: ''
    }

    const navigate = useNavigate()
    const [data, setData] = useState(init_state);
    const [errorMessage, setErrorMessage] = useState();

    // const [userName, setUserName] = useState('');
    // const [pass, setPass] = useState('');

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data)

        const url = `${process.env.REACT_APP_BACKEND_URL}/users/register`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }, console.log(url))
        if (response.status !== 201) {
            setErrorMessage('Error creating user')

        } else {
            if (errorMessage) setErrorMessage('')
            navigate('/', { replace: true })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="userName">User Name:</label>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    required
                    placeholder="User Name"
                    value={data.userName}
                    onChange={handleChange}
                />

                <label htmlFor="pass">Password:</label>
                <input
                    type="password"
                    name="pass"
                    id="pass"
                    required
                    placeholder="********"
                    value={data.pass}
                    onChange={handleChange}
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