
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const Register = (props) => {

    const INIT_STATE = {
        userName: '',
        password: ''
    }

    const navigate = useNavigate()

    const [data, setData] = useState(INIT_STATE)
    const [errorMessage, setErrorMessage] = useState()


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        data.age = Number(data.age)

        const url = `${process.env.BACKEND_URL}/user/register`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (response.status !== 201) {
            setErrorMessage('Error creating user')

        } else {
            if (errorMessage) setErrorMessage('')
            navigate('/', { replace: true })
        }

    }

    return (
        <>
            <form action="/user" method="POST">
                <label htmlFor="userName">User Name:</label>
                <input onChange={handleChange} required name='userName' placeholder='User Name' value={data.name} />
                <label htmlFor="pass">Password:</label>
                <input onChange={handleChange} required name="password" placeholder="********" value={data.password} />
                <button type="submit">Register</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account?</button>
        </>
    )
}
export default Register;