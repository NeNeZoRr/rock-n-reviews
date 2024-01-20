import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReviewForm from "./ReviewFormS";

function SongView() {
	const [showForm, setShowForm] = useState(false);
	const [songData, setSongData] = useState({ results: [] });
	// const [value, setValue] = useState(1);
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			// fetch itunes with dynamic id
			const url = `https://itunes.apple.com/lookup?id=${id}&entity=song`;
			const response = await fetch(url);
			const data = await response.json();

			setSongData(data);
			// console.log(data);
		};
		fetchData();
	}, [id]);

	// useEffect(() => {
	// 	if (value % 2 === 0) play();
	// }, [value]);

	// function play() {
	// 	new Audio(songData.results.previewUrl).play();
	// }
	// console.log(songData.results.previewUrl);

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
						{/* <Button
							style={{}}
							id="play"
							onClick={() => setValue(value + 1)}
							variant="primary"
							size="sm">
							Play
						</Button> */}
					</Card.Body>
				</Card>
			</div>
		);
	});

	return <div>{songDisplay}</div>;
}

export default SongView;
