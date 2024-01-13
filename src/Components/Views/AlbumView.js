import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AlbumView() {
    const [albumData, setAlbumData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://itunes.apple.com/lookup?id=${id}&entity=album`
                const response = await fetch(url)
                const data = await response.json()

                const songs = data.results.filter(item => item.wrapperType === 'track')
                setAlbumData(songs)
            } catch (error) {
                console.error('Error fetching album data:', error)
            }
        }
        fetchData()
    }, [id])

    const songDisplay = albumData.map(song => (
        <div key={song.trackId}>
            <p>{song.trackName}</p>
        </div>
    ))

    return (
        <div>
            <h1>Album Data Goes Here!</h1>
            <p>ID: {id}</p>
            {songDisplay}
        </div>
    )
}

export default AlbumView
