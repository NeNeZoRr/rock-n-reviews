import Card from 'react-bootstrap/Card'

const GalleryItem = ({ item }) =>{
    return (
        <>
            <Card style={{ width: '25vw', }} >
                <Card.Img classname="cardImg" variant="top" src={item.artworkUrl100} alt="album cover" />
                <Card.Body>
                    <Card.Title>{item.artistName}</Card.Title>
                    Album:<Card.Link href={`/album/${item.collectionId}`}> {item.collectionName} </Card.Link>
                    <Card.Text>Released on:  {item.releaseDate}</Card.Text>
                    <Card.Text>Songs: {item.trackCount}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )

}
export default GalleryItem