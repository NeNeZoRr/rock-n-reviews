import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function SongView() {
    const { id } = useParams()
    const [songData, setSongData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'http://localhost:3000/song/${id}'
                const response = await fetch(url)
                const data = await response.json()

                setSongData(data)
            } catch (error) {
                console.error('Error Fetching song data', error)
            }
        }
        fetchData()
    }, [id])


    return (
        <div>
            <p>Song Data Goes Here!</p>
            <p>ID: {id}</p>
            <pre>{JSON.stringify(songData, null, 2)}</pre>
        </div>
    )
}

export default SongView