import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';

// ReviewForm component
function ReviewForm({ songData }) {
    return (
        <div>
            {/* Form for submitting reviews */}
            <Form>
                {/* Fields for artist, album title, song title, and username */}
                <Form.Group className="mb-3">
                    <Form.Label>Artist</Form.Label>
                    {songData.results.map((song, index) => (
                        <Form.Control key={index} placeholder={song.artistName} disabled />
                    ))}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Album Title</Form.Label>
                    {songData.results.map((song, index) => (
                        <Form.Control key={index} placeholder={song.collectionName} disabled />
                    ))}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Song Title</Form.Label>
                    {songData.results.map((song, index) => (
                        <Form.Control key={index} placeholder={song.trackName} disabled />
                    ))}
                </Form.Group>

                {/* Dropdown for rating */}
                <FloatingLabel controlId="floatingSelect" label="Rating">
                    <Form.Select aria-label="Floating label select example">
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
                    />
                </FloatingLabel>

                {/* Descriptive text under input fields */}
                <div style={{ justifyContent:'space-evenly' }}>
                <Form.Text id="passwordHelpBlock" muted>
                    Leave a review for this artist's Album or Song
                </Form.Text>
                <div style={{ width: '10px' }}>                </div>
                {/* Submission button to push data to MongoDB */}
                
                <Button variant="secondary" size="sm">
                    Submit
                </Button>
                </div>
            </Form>
        </div>
    );
}

export default ReviewForm;
