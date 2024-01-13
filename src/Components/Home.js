import React, { useState, useEffect } from 'react'
import { Carousel, Card, Row, Col, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

async function fetchAlbumsAndSongs() {
  try {
    const albumsApiUrl = 'https://itunes.apple.com/search?term=album&entity=album&limit=4'
    const songsApiUrl = 'https://itunes.apple.com/search?term=song&entity=song&limit=4'

    const [albumsResponse, songsResponse] = await Promise.all([
      fetch(albumsApiUrl),
      fetch(songsApiUrl),
    ])

    const [albumsData, songsData] = await Promise.all([
      albumsResponse.json(),
      songsResponse.json(),
    ])

    return { albums: albumsData.results, songs: songsData.results }
  } catch (error) {
    console.error('Error fetching albums and songs data:', error)
    return { albums: [], songs: [] }
  }
}

async function search(query, entity, limit) {
  try {
    const searchApiUrl = `https://itunes.apple.com/search?term=${query}&entity=${entity}&limit=${limit}`

    const response = await fetch(searchApiUrl)
    const searchData = await response.json()

    return searchData.results
  } catch (error) {
    console.error(`Error with searching ${entity}s:`, error)
    return []
  }
}

function Home() {
  const [albums, setAlbums] = useState([])
  const [songs, setSongs] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

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
        <Col key={item.trackId} md={3}>
          <Card style={{ width: '15rem' }}>
            <Card.Img
              variant="top"
              src={item.artworkUrl100}
              alt={item.collectionName || item.trackName}
              style={{ height: '200px', objectFit: 'cover' }}
            />
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
      <Navbar bg="light" expand="lg" className="justify-content-center">
        <Navbar.Brand href="/">Rock-n-Reviews</Navbar.Brand>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="outline-primary" onClick={handleSearch}>
            Search
          </Button>
        </Form>
      </Navbar>

      <section className="carousel-section">
        <Carousel>
          {albums.map((album, index) => (
            <Carousel.Item key={album.trackId} className={index === 0 ? 'active' : ''}>
              <img
                className="d-block w-100"
                src={album.artworkUrl100}
                alt={album.collectionName}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>{album.collectionName}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section className="album-cards-section">{renderCard(albums, 'album')}</section>

      <section className="carousel-section">
        <Carousel>
          {songs.map((song, index) => (
            <Carousel.Item key={song.trackId} className={index === 0 ? 'active' : ''}>
              <img
                className="d-block w-100"
                src={song.artworkUrl100}
                alt={song.trackName}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>{song.trackName}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section className="song-cards-section">{renderCard(songs, 'song')}</section>
    </div>
  )
}

export default Home
