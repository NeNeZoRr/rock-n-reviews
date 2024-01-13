import React, { useState, useEffect } from 'react'
import { Carousel, Card, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

async function fetchAlbumsAndSongs() {
  try {
    const albumsApiUrl = 'https://itunes.apple.com/search?term=album&entity=album&limit=5'
    const songsApiUrl = 'https://itunes.apple.com/search?term=song&entity=song&limit=5'

    const [albumsResponse, songsResponse] = await Promise.all([
      fetch(albumsApiUrl),
      fetch(songsApiUrl),
    ])

    const [albumsData, songsData] = await Promise.all([
      albumsResponse.json(),
      songsResponse.json(),
    ]);

    return { albums: albumsData.results, songs: songsData.results }
  } catch (error) {
    console.error('Error fetching albums and songs data:', error)
    return { albums: [], songs: [] }
  }
}

function Home() {
  const [albums, setAlbums] = useState([])
  const [songs, setSongs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { albums: fetchedAlbums, songs: fetchedSongs } = await fetchAlbumsAndSongs()
      setAlbums(fetchedAlbums)
      setSongs(fetchedSongs)
    }

    fetchData()
  }, [])

  const renderCard = (data, type) => (
    <Row className="justify-content-md-center mt-3">
      {data.map((item) => (
        <Col key={item.trackId} md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.artworkUrl100} alt={item.collectionName} />
            <Card.Body>
              <Card.Title>{item.collectionName || item.trackName}</Card.Title>
              <Card.Text>
                {type === 'album' ? 'Artist: ' + item.artistName : 'Track: ' + item.trackName}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )

  return (
    <div>

      <Carousel>
        {albums.map((album) => (
          <Carousel.Item key={album.trackId}>
            <img className="d-block w-100" src={album.artworkUrl100} alt={album.collectionName} />
            <Carousel.Caption>
              <h3>{album.collectionName}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {renderCard(albums, 'album')}

      <Carousel>
        {songs.map((song) => (
          <Carousel.Item key={song.trackId}>
            <img className="d-block w-100" src={song.artworkUrl100} alt={song.trackName} />
            <Carousel.Caption>
              <h3>{song.trackName}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {renderCard(songs, 'song')}
    </div>
  )
}

export default Home
