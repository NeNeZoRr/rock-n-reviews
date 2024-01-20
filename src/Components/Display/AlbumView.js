// AlbumView.js
// Component for displaying details of an album and allowing reviews

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import ReviewForm from './ReviewFormA';

// AlbumView component
function AlbumView() {
    const [albumData, setAlbumData] = useState({ results: [] });
    const [commentData, setCommentData] = useState()
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://itunes.apple.com/lookup?id=${id}&entity=album&entity=song`;
                const response = await fetch(url);
                const data = await response.json();

                setAlbumData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    //pull comment data from backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `${process.env.REACT_APP_BACKEND_URL}/reviews/${id}`;
                const response = await fetch(url);
                const data = await response.json();

                setCommentData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [id]);

    console.log("album id", id)
    console.log("comment data", commentData)


    // Display each song as a Card in a Container
    const albumDisplay = albumData.results.map(song => (
        <div key={song.trackId}>
            <Container>
                <Row xs={1} md={4}>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <img src={song.artworkUrl60} alt="album cover" />
                                    <Card.Link href={`/song/${song.trackId}`}>{song.trackName}</Card.Link>
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{song.artistName}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    ));

    // State for toggling the display of the review form
    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            {/* Button to toggle the display of the review form */}
            <Button variant="secondary" size="sm" onClick={() => setShowForm(!showForm)}>
                Review this album
            </Button>
            <h1>texting{albumData.collectionId}</h1>
            {/* Display the review form if showForm is true */}
            {showForm && <ReviewForm albumData={albumData} />}
            {/* Display the album details */}
            {albumDisplay}
        </div>
    );
}

export default AlbumView;
