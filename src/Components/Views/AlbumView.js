import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

async function lookupContentById(contentId, entity = 'song', limit = 5) {
    try {
        const apiUrl = `https://itunes.apple.com/lookup?id=${contentId}&entity=${entity}&limit=${limit}`
        const response = await fetch(apiUrl)
        const data = await response.json()
        return data.results
    } catch (error) {
        console.error('Error looking up content by ID:', error)
        return []
    }
}

function AlbumView() {
    const [albumData, setAlbumData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const songs = await lookupContentById (id, 'album')
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
