import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ReviewForm({ albumData }) {
	// console.log(albumData)
	return (
		<div>
			<Card style={{ width: "40vw", position: "relative", left: "28vw" }}>
				<Form>
					<Form.Group className="mb-3">
						<Form.Label>Artist</Form.Label>
						<Form.Control
							placeholder={albumData.results[0].artistName}
							disabled
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Album Title</Form.Label>
						<Form.Control
							placeholder={albumData.results[0].collectionName}
							disabled
						/>
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
						Leave a review for this artist's Album
					</Form.Text>
					{/* submission button to push data to MongoDb */}
					<Button
						style={{
							borderRadius: "12px",
							marginLeft: "28rem",
							marginTop: ".5rem",
						}}
						variant="secondary"
						size="sm">
						Submit
					</Button>
				</Form>
			</Card>
		</div>
	);
}

export default ReviewForm;

// data and titles needed..
// song.trackId, song,artistName, song,trackName, song.collectionId, song.collectionName,song.arworkUrl100,display/username,rating(dropdown), comment/review
