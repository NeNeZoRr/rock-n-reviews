import React, { useState } from "react";
import { FloatingLabel, Form, Button, Card } from "react-bootstrap";

// ReviewForm component
function ReviewForm({ albumData }) {
	// State to store form data
	const [formData, setFormData] = useState({
		artist: albumData.results[0].artistName,
		albumTitle: albumData.results[0].collectionName,
		albumId: albumData.results[0].collectionId,
		rating: "",
		comments: "",
	});

	// Handler for input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Handler for form submission
	const handleSubmit = (e) => {
		e.preventDefault();

		// Perform any additional validation if needed

		// Send form data to your back end
		fetch(`${process.env.REACT_APP_BACKEND_URL}/reviews`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				// Handle the response from the back end if needed
				console.log("Review submitted successfully:", data);
			})
			.catch((error) => {
				console.error("Error submitting review:", error);
			});
	};

	// console.log(albumData)
	return (
		<div>
			<Card
				style={{
					width: "40vw",
					position: "relative",
					left: "28vw",
				}}>
				<Form onSubmit={handleSubmit}>
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
						<Form.Select
							name="rating"
							onChange={handleInputChange}
							value={formData.rating}
							aria-label="Floating label select example">
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
							name="comments"
							onChange={handleInputChange}
							value={formData.comments}
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
