import React, { useState, useEffect } from 'react'
import { Carousel, Card, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { fetchRandomAlbumsAndSongs, searchITunes } from './API/Api'
import AlbumCover from './Covers/AlbumCover'
import SongCover from './Covers/SongCover'
import Search from './Search/Search'

function Home() {
  const [albums, setAlbums] = useState([])
  const [songs, setSongs] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { albums: fetchedAlbums, songs: fetchedSongs } = await fetchRandomAlbumsAndSongs()
        setAlbums(fetchedAlbums)
        setSongs(fetchedSongs)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()

    const interval = setInterval(() => {
      fetchData()
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const renderCard = (data, type) => (
    <Row className="justify-content-md-center mt-3">
      {data.map((item) => (
        <Col key={item.trackId} md={3}>
          <Card style={{ width: '18rem', marginLeft: '90px' }}>
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
  
  const handleSearch = async (searchTerm) => {
    try {
      const results = await searchITunes(searchTerm, 'musicTrack')
      setSearchResults(results)
    } catch (error) {
      console.error('Error in search:', error)
    }
  }

  return (
    <div>
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
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>{song.trackName}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section className="song-cards-section">{renderCard(songs, 'song')}</section>

      <Search onSearch={handleSearch} />

      {searchResults.length > 0 && (
        <section className="search-results-section">
          <h2>Search Results</h2>
          {renderCard(searchResults, 'song')}
        </section>
      )}
    </div>
  )
}

export default Home