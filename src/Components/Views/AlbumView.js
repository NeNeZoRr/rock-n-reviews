import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AlbumView() {
    const [ albumData, setAlbumData ] = useState({ results: []})
    const { id } = useParams()

    useEffect (() => {
        const fetchData = async () => {
            const url = `https://itunes.apple.com/lookup?id=${id}&entity=album&entity=song`
            const response = await fetch(url)
            const data = await response.json()

            setAlbumData(data)
        }
        fetchData()
        console.log(albumData)
    }, [id])

    const songDisplay = albumData.results.map(song => {
        return (
            < div key={song.trackId}>
                <Container>
                <Row xs={1} md={4} className="g-4" style={{ margin:'1vw', justifyContent: 'center'}}>
                    <Col>
                        <Card style={{ width: '15vw' }}>
                            <Card.Body>
                                <Card.Title>
                                    <img src={song.artworkUrl60} alt="album cover"/>
                                <Card.Link href={`/song/${song.trackId}`}> {song.trackName} </Card.Link>
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{song.artistName}</Card.Subtitle>                  
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Container>
            </div>
            
        )
    })

    
    return (
        <div>
            {songDisplay}
        </div>
    )
}

export default AlbumView

// toggle display of review form to true false if clicked, take data from album/song view onto form and push into Db on submit
