import React, { useState } from 'react'
import CommentForm from './CommentForm'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const CoverForum = () => {
    const [comments, setComments] = useState([])

    const handleCommentSubmit = (newComment) => {
        setComments((prevComments) => [...prevComments, newComment])
    }

    return (
        <div>
            <h1>Cover Forum</h1>
            <CommentForm onCommentSubmit={handleCommentSubmit} />
            <Accordion>
                {comments.map((comment, index) => (
                    <Accordion.Item key={index} eventKey={`accordion-${index}`}>
                        <Accordion.Header>{`Comment by ${comment.author}`}</Accordion.Header>
                        <Accordion.Body>
                            <Card.Text>{comment.text}</Card.Text>
                            <Button variant="primary">Go</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    )
}

export default CoverForum
