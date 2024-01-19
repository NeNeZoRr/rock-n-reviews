import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function SongView() {
    const [songData, setSongData] = useState({ results: [] })
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            // fetch itunes with dynamic id
            const url = `https://itunes.apple.com/lookup?id=${id}&entity=song`
            const response = await fetch(url)
            const data = await response.json()

            setSongData(data)
            // console.log(data)
        }
        fetchData()
    }, [id])

    const songDisplay = songData.results.map(song => {
        return (
            < div key={song.trackId}>
                <Card style={{ width: '25vw', }} >
                    <Card.Img classname="cardImg" variant="top" src={song.artworkUrl100} alt="album cover" />
                    <Card.Body>
                        <Card.Title>{song.artistName}</Card.Title>
                        <Card.Text>Song Title:  {song.trackName}</Card.Text>
                        Album:<Card.Link href={`/album/${song.collectionId}`}> {song.collectionName} </Card.Link>
                        <Card.Text>Released on:  {song.releaseDate}</Card.Text>
                        <Button variant="primary"> Review this Song</Button>
                    </Card.Body>
                </Card>
            </div>

        )
    })

    return (
        <div>
            {songDisplay}
        </div>
    )
}


export default SongView