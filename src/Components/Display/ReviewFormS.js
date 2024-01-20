import React, { useState } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';

// ReviewForm component
function ReviewForm({ songData }) {
    console.log(songData.results[0].trackId)
    // State to store form data
    const [formData, setFormData] = useState({
        artist: songData.results[0].artistName,
        albumTitle: songData.results[0].collectionName,
        trackName: songData.results[0].trackName,
        trackId: songData.results[0].trackId,
        rating: '',
        comments: '',
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

        // Send form data to your back end
        fetch(`${process.env.REACT_APP_BACKEND_URL}/song-reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

            .then(response => response.json())
            .then(data => {
                // Handle the response from the back end if needed
                console.log('Review submitted successfully:', data);
            })
            .catch(error => {
                console.error('Error submitting review:', error);
            });
    };

    return (
		<div>
			{/* toggle button for true/false if name be disabled for being anonymous? */}
			<Form onSubmit={handleSubmit}>
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
					<Form.Select aria-label="Floating label select example"
                    name="rating"
                    onChange={handleInputChange}
                    value={formData.rating}>
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
				<Form.Text style={{ color: "white" }} id="passwordHelpBlock" muted>
					Leave a review for this artist's Song
				</Form.Text>
				<Button
					style={{ marginLeft: "10rem", marginTop: "1rem" }}
					variant="primary"
					size="sm"
                    type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default ReviewForm;
