import { Container, Row, Col, Card } from "react-bootstrap";

function Gallery({ data }) {
	return (
		<Container style={{ width: "100dvw" }}>
			<Row xs={1} md={4}>
				{data.map((item) => (
					<Col key={item.trackId}>
						<Card
							className="Cards"
							style={{
								width: "14vw",
								margin: "2rem",
								height: "15vh",
								border: "4px solid #33006F",
								borderRadius: "15px",
							}}>
							<Card.Img
								style={{ objectFit: "cover", objectPosition: "center" }}
								className="cardImg"
								variant="top"
								src={item.artworkUrl100}
								alt="album cover"
							/>
							<Card.Body>
								<Card.Title style={{ color: "white" }}>
									{item.artistName}
								</Card.Title>
								<div style={{ color: "white" }}>
									{" "}
									Album:
									<Card.Link
										style={{ color: "white" }}
										href={`/album/${item.collectionId}`}>
										{" "}
										{item.collectionName}{" "}
									</Card.Link>
								</div>
								<Card.Text style={{ color: "white" }}>
									Released on: {item.releaseDate}
								</Card.Text>
								<Card.Text style={{ color: "white" }}>
									Songs: {item.trackCount}
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default Gallery;
