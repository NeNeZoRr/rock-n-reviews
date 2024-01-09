import React from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Register() {

    const INIT_STATE = {
        name: '',
        userName: '',
    }

    const navigate = useNavigate()

    const [data, setData] = useState(INIT_STATE)
    const [errorMessage, setErrorMessage] = useState()


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const url = `${process.env.MONGO_URI}/user`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (response.status !== 201) {
            setErrorMessage('error creating user')
        } else {
            if (errorMessage) setErrorMessage('')
            navigate('/')
        }
    }

    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            <form onSubmit={handleSubmit}>
                <label>Your Name:</label>
                <input onChange={handleChange} name="name" required placeholder="Your Name" value={data.name} />
                <label>User Name:</label>
                <input onChange={handleChange} name="userName" required placeholder="User Name" value={data.userName} />
                <button type="submit">Register</button>
            </form>
            {/* <button onClick={() => props.onFormSwitch('login')}>Already have an account?</button> */}
        </div>
    )
}

export default Register