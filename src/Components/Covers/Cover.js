import React from 'react'
import { Card } from 'react-bootstrap'

const Cover = ({ data }) => {
  return (
    <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'row', overflowX: 'auto' }}>
      {data.map((item) => (
        <Card key={item.trackId} style={{ width: '150px', margin: '10px' }}>
          <Card.Img variant="top" src={item.artworkUrl100} style={{ height: '150px', objectFit: 'cover' }} />
          <Card.Body>
            <Card.Title style={{ fontSize: '12px' }}>{item.trackName}</Card.Title>
            <Card.Text style={{ fontSize: '10px' }}>{item.collectionName}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default Cover
