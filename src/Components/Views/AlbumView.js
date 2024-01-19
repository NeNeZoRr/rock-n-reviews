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
	const [albumData, setAlbumData] = useState({ results: [] });
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const url = `https://itunes.apple.com/lookup?id=${id}&entity=album&entity=song`;
			const response = await fetch(url);
			const data = await response.json();

			setAlbumData(data);
		};
		fetchData();
		// console.log(albumData)
	}, [id]);

	const albumDisplay = (
		<Container>
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

	const [showForm, setShowForm] = useState(false);

	return (
		<div>
			{albumDisplay}
			<Button
				className="albumButton"
				variant="secondary"
				size="sm"
				onClick={() => setShowForm(!showForm)}>
				Review this album
			</Button>
			{showForm && <ReviewForm albumData={albumData} />}
		</div>
	);
}

export default AlbumView;

// toggle display of review form to true false if clicked, take data from album/song view onto form and push into Db on submit
