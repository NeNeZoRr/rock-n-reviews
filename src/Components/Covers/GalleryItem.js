import Card from 'react-bootstrap/Card';

const GalleryItem = ({ item }) =>{
    // console.log(item)
    return (
        <>
        <div className="body">
            <Card className="Cards" style={{ width: '25vw', margin: 'auto' }} >
                <Card.Img className="cardImg" variant="top" src={item.artworkUrl100} alt="album cover" />
                <Card.Body>
                    <Card.Title>{item.artistName}</Card.Title>
                    Album:<Card.Link href={`/album/${item.collectionId}`}> {item.collectionName} </Card.Link>
                    <Card.Text>Released on:  {item.releaseDate}</Card.Text>
                    <Card.Text>Songs: {item.trackCount}</Card.Text>
                </Card.Body>
            </Card>
        </div>
        </>
    )

}
export default GalleryItem