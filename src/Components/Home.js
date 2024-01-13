import React, { useState, useEffect } from 'react'
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap'

function Home() {
  cosnt [albums, setAlbums] = useState([])
  cosnt [songs, setSongs] = useState([])

  useEffect(() => {
    const fetchAlbumAndSongs = async () => {
      try {
        const albumResponse = await fetch('https://itunes.apple.com/search?term=album&entity=album&limit=5')
        const albumData = await albumResponse.json()
        setAlbums(albumsData.results)

        const songResponse = await fetch('https://itunes.apple.com/search?term=song&entity=song&limit=5')
        const songData = await songResponse.json()
        setSongs(songsData.results)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchAlbumAndSongs()
  }, [])

  const renderCarouselItems = (data) => {
    return data.map((item) => (
      <Carousel.Item key={item.trackId}>
        <img
          className="d-block w-100"
          src={item.artworkUrl100}
          alt={item.collectionName}
        />
        <Carousel.Caption>
          <h3>{item.collectionName}</h3>
          <p>{item.artistName}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))
  }

  const renderCardItems = (data) => {
    return data.map((item) => (
      <Col key={item.trackId} xs={12} md={4}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.artworkUrl100} alt={item.collectionName} />
          <Card.Body>
            <Card.Title>{item.collectionName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.artistName}</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    ))
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h2>Featured Albums</h2>
          <Carousel>
            {renderCarouselItems(albums)}
          </Carousel>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Featured Songs</h2>
          <Row>
            {renderCardItems(songs)}
          </Row>
        </Col>
      </Row>
    </Container>
    )
}

export default Home