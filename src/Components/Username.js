import { useState, useEffect } from 'react'
import {useParams } from "react-router-dom"

function Display() {

    const [data, setData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        async function getUser() {
            const url = `${process.env.REACT_APP_BACKEND_URL}/users/${id}`
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
        }
        getUser()
    }, [])


    const display = data && (
        <div>
            <h1>Name: {data.userName}</h1>
        </div>
    )
    return (
        <div>
            {display}
        </div>
    )
}

export default Display
