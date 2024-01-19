import React, { useState, useEffect } from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchRandomAlbumsAndSongs } from "./API/Api";

function Home() {
	const [albums, setAlbums] = useState([]);
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { albums: fetchedAlbums, songs: fetchedSongs } =
					await fetchRandomAlbumsAndSongs();
				setAlbums(fetchedAlbums);
				setSongs(fetchedSongs);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();

		const interval = setInterval(() => {
			fetchData();
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	const renderCard = (data, type) => (
		<Row className="justify-content-md-center mt-3">
			{data.map((item) => (
				<Col key={item.trackId} md={3}>
					<Card
						style={{
							width: "18rem",
							marginLeft: "90px",
							border: "4px solid black",
						}}>
						<Card.Img
							variant="top"
							src={item.artworkUrl100}
							alt={item.collectionName || item.trackName}
							style={{ height: "200px", objectFit: "cover" }}
						/>
						<Card.Body>
							<Card.Title>{item.collectionName || item.trackName}</Card.Title>
							<Card.Text>
								{type === "album"
									? "Artist: " + item.artistName
									: "Track: " + item.trackName}
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);

	return (
		<div style={{ border: "4px solid black", padding: "10px" }}>
			<section className="carousel-section">
				<Carousel>
					{albums.map((album, index) => (
						<Carousel.Item
							key={album.trackId}
							className={index === 0 ? "active" : ""}>
							<img
								className="d-block w-100"
								src={album.artworkUrl100}
								alt={album.collectionName}
								style={{
									height: "300px",
									objectFit: "cover",
									border: "4px solid black",
								}}
							/>
							<Carousel.Caption>
								<h3>{album.collectionName}</h3>
							</Carousel.Caption>
						</Carousel.Item>
					))}
				</Carousel>
			</section>

			<section className="album-cards-section">
				{renderCard(albums, "album")}
			</section>

			<section className="carousel-section" style={{ marginTop: "20px" }}>
				<Carousel>
					{songs.map((song, index) => (
						<Carousel.Item
							key={song.trackId}
							className={index === 0 ? "active" : ""}>
							<img
								className="d-block w-100"
								src={song.artworkUrl100}
								alt={song.trackName}
								style={{
									height: "300px",
									objectFit: "cover",
									border: "4px solid black",
								}}
							/>
							<Carousel.Caption>
								<h3>{song.trackName}</h3>
							</Carousel.Caption>
						</Carousel.Item>
					))}
				</Carousel>
			</section>

			<section className="song-cards-section">
				{renderCard(songs, "song")}
			</section>
		</div>
	);
}

export default Home;
