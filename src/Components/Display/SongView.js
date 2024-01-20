// SongView.js
// Component for displaying details and reviews for a song

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import ReviewForm from './ReviewFormS';

// SongView component
function SongView() {
    const [showForm, setShowForm] = useState(false); // Move state declaration to the top
    const [songData, setSongData] = useState({ results: [] });
    const [commentData, setCommentData] = useState()
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

    //pull comment data from backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `${process.env.REACT_APP_BACKEND_URL}/song-reviews/${id}`;
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
                    {/* Button to toggle display of review form */}
                    <Button variant="secondary" size="sm" onClick={() => setShowForm(!showForm)}>
                        Review this song
                    </Button>
                    {/* Display review form if showForm is true */}
                    {showForm && <ReviewForm songData={songData} />}
                </Card.Body>
            </Card>
        </div>
    ));

    return (
        <div>
            {/* Display song details */}
            {songDisplay}
        </div>
    );
}

export default SongView;