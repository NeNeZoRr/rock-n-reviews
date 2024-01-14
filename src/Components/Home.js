import React, { useState, useEffect } from 'react'
import { Carousel, Card, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { fetchRandomAlbumsAndSongs } from './API/Api'
import AlbumCover from './Covers/AlbumCover'
import SongCover from './Covers/SongCover'

const CardItem = ({ item, type }) => (
  <Col key={item.trackId} md={3}>
    <Card style={{ width: '18rem', marginLeft: '90px' }}>
      {type === 'album' ? (
        <AlbumCover album={item} />
      ) : (
        <SongCover song={item} />
      )}
      <Card.Body>
        <Card.Title>{item.collectionName || item.trackName}</Card.Title>
        <Card.Text>
          {type === 'album' ? 'Artist: ' + item.artistName : 'Track: ' + item.trackName}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
)

const Home = () => {
  const [albums, setAlbums] = useState([])
  const [songs, setSongs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { albums: fetchedAlbums, songs: fetchedSongs } = await fetchRandomAlbumsAndSongs()

        const albumsArray = Array.isArray(fetchedAlbums) ? fetchedAlbums : [fetchedAlbums]
        const songsArray = Array.isArray(fetchedSongs) ? fetchedSongs : [fetchedSongs]

        setAlbums(albumsArray)
        setSongs(songsArray)
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
        <CardItem key={item.trackId} item={item} type={type} />
      ))}
    </Row>
  )

  return (
    <div>
      <section className="carousel-section">
        <Carousel>
          {albums.map((album) => (
            <Carousel.Item key={album.trackId} className={album.trackId === albums[0].trackId ? 'active' : ''}>
              <img
                className="d-block w-100"
                src={album.artworkUrl100}
                alt={album.collectionName}
                style={{ height: '300px', objectFit: 'cover' }}
                onError={(e) => console.log('Error loading image:', e.target.src)}
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
          {songs.map((song) => (
            <Carousel.Item key={song.trackId} className={song.trackId === songs[0].trackId ? 'active' : ''}>
              <img
                className="d-block w-100"
                src={song.artworkUrl100}
                alt={song.trackName}
                style={{ height: '300px', objectFit: 'cover' }}
                onError={(e) => console.log('Error loading image:', e.target.src)}
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
