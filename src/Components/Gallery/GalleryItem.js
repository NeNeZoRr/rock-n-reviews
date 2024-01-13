import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const GalleryItem = ({ item }) =>{
    // console.log(items)
    return (
        <>

        <Row xs={1} md={4} style={{ margin:'1vw', justifyContent: 'center'}}>
                <Col>
                    <Card style={{ width: '15vw' }}>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{item.artistName}</Card.Subtitle>
                            <Card.Text>
                            </Card.Text>
                            <Card.Link href={`/album/${item.collectionId}`}> {item.collectionName} </Card.Link>
                            <Card.Link href={`/song/${item.trackId}`}> {item.trackName} </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
        </>
    )

}
export default GalleryItem