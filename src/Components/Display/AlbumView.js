import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../App.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import ReviewForm from "./ReviewFormA";

function AlbumView() {
	const [showForm, setShowForm] = useState(false);
	const [albumData, setAlbumData] = useState({ results: [] });
	const [commentData, setCommentData] = useState();
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const url = `https://itunes.apple.com/lookup?id=${id}&entity=album&entity=song`;
			const response = await fetch(url);
			const data = await response.json();

			setAlbumData(data);
		};
		fetchData();
	}, [id]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = `${process.env.REACT_APP_BACKEND_URL}/reviews/${id}`;
				const response = await fetch(url);
				const data = await response.json();

				setCommentData(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, [id]);

	const albumDisplay = (
		<Container style={{ width: "100dvw", height: "100vh" }}>
			<Row xs={1} md={4}>
				{albumData.results.map((song) => (
					<Col key={song.trackId}>
						<Card>
							<Card.Title>
								<img src={song.artworkUrl100} alt="album cover" />
							</Card.Title>
							<Card.Subtitle style={{ color: "white" }}>
								{song.artistName}
							</Card.Subtitle>
							<Card.Link
								style={{ color: "white" }}
								href={`/song/${song.trackId}`}>
								{" "}
								{song.trackName}{" "}
							</Card.Link>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);

	return (
		<div>
			<Button
				style={{
					width: "25vw",
					position: "relative",
					left: "37vw",
					top: ".5rem",
				}}
				variant="secondary"
				size="sm"
				onClick={() => setShowForm(!showForm)}>
				Review this Album
			</Button>
			{showForm && <ReviewForm albumData={albumData} />}
			{albumDisplay}
		</div>
	);
}

export default AlbumView;
