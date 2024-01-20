import React, { useState } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useUser } from '../Regs/User_Context';

// ReviewForm component
function ReviewForm({ albumData }) {
    // State to store form data
    const { userName } = useUser();
    const [formData, setFormData] = useState({
        artist: albumData.results[0].artistName,
        albumTitle: albumData.results[0].collectionName,
        albumId: albumData.results[0].collectionId,
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

        // Perform any additional validation if needed

        // Send form data to your back end
        fetch('http://localhost:8080/reviews', {
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
            {/* Form for submitting reviews */}
            <Form onSubmit={handleSubmit}>
                {/* Fields for artist, album title, and username */}
                <Form.Group className="mb-3">
                    <Form.Label>User</Form.Label>
                    <Form.Control placeholder={userName} disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Artist</Form.Label>
                    <Form.Control placeholder={albumData.results[0].artistName} disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Album Title</Form.Label>
                    <Form.Control placeholder={albumData.results[0].collectionName} disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control placeholder={albumData.results[0].collectionId} disabled/>
                </Form.Group>

                {/* Dropdown for rating */}
                <FloatingLabel controlId="floatingSelect" label="Rating">
                    <Form.Select
                        aria-label="Floating label select example"
                        name="rating"
                        onChange={handleInputChange}
                        value={formData.rating}
                    >
                        <option>Best out of 5</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                    </Form.Select>
                </FloatingLabel>

                {/* Textarea for comments/review */}
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        as="textarea"
                        placeholder="Tell us how you really feel"
                        style={{ height: '100px' }}
                        name="comments"
                        onChange={handleInputChange}
                        value={formData.comments}
                    />
                </FloatingLabel>

                {/* Descriptive text under input fields */}
                <Form.Text id="passwordHelpBlock" muted>
                    Leave a review for this artist's Album or Song and tell us how you really feel
                </Form.Text>

                {/* Submission button to push data to MongoDB */}
                <Button variant="secondary" size="sm" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ReviewForm;
