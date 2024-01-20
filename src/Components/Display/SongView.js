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

	const songDisplay = songData.results.map((song) => {
		return (
			<div key={song.trackId}>
				<Card
					style={{
						minHeight: "50vh",
						width: "24vw",
						marginTop: "5dvh",
						marginLeft: "38vw",
					}}>
					<Card.Img
						style={{
							objectFit: "cover",
							objectPosition: "center",
							height: "40vh",
						}}
						variant="top"
						src={song.artworkUrl100}
						alt="album cover"
					/>
					<Card.Body>
						<Card.Title style={{ color: "white" }}>
							{song.artistName}
						</Card.Title>
						<Card.Text style={{ color: "white" }}>
							Song Title: {song.trackName}
						</Card.Text>
						<div style={{ color: "white" }}>
							Album:
							<Card.Link
								style={{ color: "white" }}
								href={`/album/${song.collectionId}`}>
								{" "}
								{song.collectionName}{" "}
							</Card.Link>
						</div>
						<Card.Text style={{ color: "white" }}>
							Released on: {song.releaseDate}
						</Card.Text>
						<Button
							variant="primary"
							size="sm"
							onClick={() => setShowForm(!showForm)}>
							Review this song
						</Button>
						{showForm && <ReviewForm songData={songData} />}
					</Card.Body>
				</Card>
			</div>
		);
	});

    return (
        <div>
            {/* Display song details */}
            {songDisplay}
        </div>
    );
}

export default SongView;
