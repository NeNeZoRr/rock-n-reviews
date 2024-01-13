import React, { useState } from 'react'
import CommentForm from './CommentForm'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Forum = () => {
    const [comments, setComments] = useState([])

    const handleCommentSubmit = (newComment) => {
        setComments((prevComments) => [...prevComments, newComment])
    }

    return (
        <div>
            <h1>Review</h1>
            <CommentForm onCommentSubmit={handleCommentSubmit} />
            {comments.map((comment, index) => (
                <Card key={index} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{`Review by ${comment.author}`}</Card.Title>
                        <Accordion>
                            <Accordion.Item eventKey={`accordion-${index}`}>
                                <Accordion.Header>Click to see review</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text>{comment.text}</Card.Text>
                                    <Button variant="primary">
                                        Go
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default Forum
