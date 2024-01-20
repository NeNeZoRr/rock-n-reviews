import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ReviewForm({ songData }) {
	// console.log(songData)
	return (
		<div>
			{/* toggle button for true/false if name be disabled for being anonymous? */}
			<Form>
				{/* <Form.Check
            type="switch"
            id="custom-switch"
            label="Anonymous?" /> */}
				{/* // disabled fields for song/album data and userName */}
				<Form.Group className="mb-3">
					<Form.Label>Artist</Form.Label>
					{songData.results.map((song, index) => (
						<Form.Control key={index} placeholder={song.artistName} disabled />
					))}
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Album Title</Form.Label>
					{songData.results.map((song, index) => (
						<Form.Control
							key={index}
							placeholder={song.collectionName}
							disabled
						/>
					))}
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Song title</Form.Label>
					{songData.results.map((song, index) => (
						<Form.Control key={index} placeholder={song.trackName} disabled />
					))}
				</Form.Group>

				{/* // dropdown option for rating */}
				<FloatingLabel
					style={{ marginBottom: "1rem" }}
					controlId="floatingSelect"
					label="Rating">
					<Form.Select aria-label="Floating label select example">
						<option>Best out of 5</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
						<option value="4">Four</option>
						<option value="5">Five</option>
					</Form.Select>
				</FloatingLabel>

				{/* // floating section for comment/review */}
				<FloatingLabel controlId="floatingTextarea2" label="Comments">
					<Form.Control
						as="textarea"
						placeholder="Tell us how you really feel"
						style={{ height: "100px" }}
					/>
				</FloatingLabel>
				{/* discriptive text under fields of input */}
				<Form.Text style={{ color: "white" }} id="passwordHelpBlock">
					Leave a review for this artist's Song
				</Form.Text>
				<Button
					style={{ marginLeft: "10rem", marginTop: "1rem" }}
					variant="primary"
					size="sm">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default ReviewForm;

// data and titles needed..
// song.trackId, song,artistName, song,trackName, song.collectionId, song.collectionName,song.arworkUrl100,display/username,rating(dropdown), comment/review
