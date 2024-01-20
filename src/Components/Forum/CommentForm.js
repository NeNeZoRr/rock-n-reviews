// Components/Forum/CommentForm.js
// Form component for submitting comments
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const CommentForm = ({ onCommentSubmit }) => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCommentSubmit({ author, text });
        setAuthor('');
        setText('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formAuthor">
                <Form.Label>Comment Review</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your comment here"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formComment">
                <Form.Label>Review:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Leave your Comments here"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </Form.Group>
            <button type="submit" className="btn btn-primary">
                Submit Comment
            </button>
        </Form>
    );
};

export default CommentForm;
