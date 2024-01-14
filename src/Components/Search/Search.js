import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const GalleryItem = ({ item }) => (
  <>
    <Card style={{ width: '25vw' }}>
      <Card.Img className="cardImg" variant="top" src={item.artworkUrl100} alt="album cover" />
      <Card.Body>
        <Card.Title>{item.artistName}</Card.Title>
        Album:<Card.Link href={`/album/${item.collectionId}`}> {item.collectionName} </Card.Link>
        <Card.Text>Released on: {item.releaseDate}</Card.Text>
        <Card.Text>Songs: {item.trackCount}</Card.Text>
      </Card.Body>
    </Card>
  </>
)

const Gallery = ({ data }) => (
  <div>
    {data.map((item) => (
      <GalleryItem key={item.trackId} item={item} />
    ))}
  </div>
)

const Search = ({ handleSearch, message, data }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const { id } = useParams()

  useEffect(() => {
    if (searchTerm) {
      const fetchData = async () => {
        const url = `https://itunes.apple.com/lookup?id=${id}&entity=album&entity=song`
        const response = await fetch(url)
        const searchData = await response.json()

        if (searchData.results.length > 0) {
          handleSearch(searchData.results, 'Here are your results')
        } else {
          handleSearch([], 'Not Found')
        }
      }

      fetchData()
    } else {
      handleSearch([], 'Search for music')
    }
  }, [searchTerm, id])

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(searchTerm)
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Welcome to Rock-n-Reviews Search</h1>
          <p>Search for your favorite music and explore the results.</p>
          <form style={{ width: '18vw', margin: '1em', minWidth: '200px' }} onSubmit={handleSubmit}>
            <p>{message}</p>
            <input
              style={{ width: '12vw', minWidth: '200px' }}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Artist, Album, or Song title"
            />
            <button type="submit">Search</button>
          </form>
          <Gallery data={data} />
        </Col>
      </Row>
    </Container>
  )
}

export default Search
