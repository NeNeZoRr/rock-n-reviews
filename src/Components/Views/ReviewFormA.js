// import { useState } from 'React'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ReviewForm({albumData})  {
    // console.log(albumData)
    return ( 
        <div>
       {/* toggle button for true/false if name be disabled for being anonymous? */}
       {/* add method POST and type,id, and name for matching schema */}
        <Form >
        {/* <Form.Check
            type="switch"
            id="custom-switch"
            label="Anonymous?" /> */}
        {/* // disabled fields for song/album data and userName */}
        <Form.Group className="mb-3">
            <Form.Label>Artist</Form.Label>
                <Form.Control  placeholder={albumData.results[0].artistName} disabled />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Album Title</Form.Label>
                <Form.Control  placeholder={albumData.results[0].collectionName} disabled />
        </Form.Group>

        {/* // dropdown option for rating */}
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

        {/* // floating section for comment/review */}
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
            as="textarea"
            placeholder="Tell us how you really feel"
            style={{ height: '100px' }}
            />
        </FloatingLabel>
         {/* discriptive text under fields of input */}
        <Form.Text id="passwordHelpBlock" muted>
            Leave a review for this artist's Album or Song and tell us how you really feel
        </Form.Text>
        {/* submission button to push data to MongoDb */}
        <Button variant="secondary" size="sm">
            Submit
        </Button>
        </Form>

        </div>
    );
}

export default ReviewForm;

// data and titles needed..
// song.trackId, song,artistName, song,trackName, song.collectionId, song.collectionName,song.arworkUrl100,display/username,rating(dropdown), comment/review