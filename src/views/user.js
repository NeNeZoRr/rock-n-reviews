import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function User() {
    const [data, setData] = useState({})
    const { _id } = useParams()

    useEffect(() => {
        async function getUser() {
            const url = `${process.env.MONGO_URI}/users/${_id}`
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
        }
        getUser()
        console.log(data)
    }, [data, _id])
    const display = data && (
        <div>
            <h1>Hello {data.name}</h1>
        </div>
    )

    return (
        <div>
            {display}
        </div>
    )

};

export default User



