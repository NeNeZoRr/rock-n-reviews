// SongView.js
// Component for displaying details and reviews for a song

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import ReviewForm from './ReviewFormS';

// SongView component
function SongView() {
    const [songData, setSongData] = useState({ results: [] });
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            // Fetch song details from iTunes with dynamic id
            const url = `https://itunes.apple.com/lookup?id=${id}&entity=song`;
            const response = await fetch(url);
            const data = await response.json();

            setSongData(data);
        };
        fetchData();
    }, [id]);

    // Map over song data and display details in Card component
    const songDisplay = songData.results.map((song) => (
        <div key={song.trackId}>
            <Card style={{ width: '25vw' }}>
                <Card.Img variant="top" src={song.artworkUrl100} alt="album cover" />
                <Card.Body>
                    <Card.Title>{song.artistName}</Card.Title>
                    <Card.Text>Song Title: {song.trackName}</Card.Text>
                    Album:
                    <Card.Link href={`/album/${song.collectionId}`}>{song.collectionName}</Card.Link>
                    <Card.Text>Released on: {song.releaseDate}</Card.Text>
                    <Button variant="primary">Review this Song</Button>
                </Card.Body>
            </Card>
        </div>
    ));

    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            {/* Button to toggle display of review form */}
            <Button variant="secondary" size="sm" onClick={() => setShowForm(!showForm)}>
                Review this song
            </Button>
            {/* Display review form if showForm is true */}
            {showForm && <ReviewForm songData={songData} />}
            {/* Display song details */}
            {songDisplay}
        </div>
    );
}

export default SongView;
