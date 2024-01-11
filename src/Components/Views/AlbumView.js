import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AlbumView( handleHome ) {
    const [ albumData, setAlbumData ] = useState([])
    const { id } = useParams()

    useEffect (() => {
        const fetchData = async () => {
            const url = `http://localhost:3000/album/${id}`
            const response = await fetch(url)
            const data = await response.json()

            const songs = data.results.filter(item => item.wrapperType === 'track')
            setAlbumData(songs)
        }
        fetchData()
    }, [id])

    const songDisplay = albumData.map(song => {
            < div key={song.trackId}>
                <p>{song.trackName}</p>
            </div>
    })
    console.log(albumData)
    console.log(songDisplay)
    return (
        <div>
            <p>Album Data Goes Here!</p>
            <p>ID: {id}</p>
            {songDisplay}
        </div>
    )
}

export default AlbumView