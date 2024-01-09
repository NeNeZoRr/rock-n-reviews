import React, { useState, useEffect } from 'react'
import CommentForm from './CommentForm'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Forum = () => {
    const [comments, setComments] = useState([])

    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await fetch ('ITUNEURL')
                const data = await response.json()
                const initialComments = data.map((item) => ({
                    author:'User',
                    link: item.url,
                    text: item.title,

                }))
                setComments(initialComments)
            } catch (error) {
                console.error('Error fetching data:', error)
        }
    }
    
    fetchData ()
}, [])

    const handleCommentSubmit = (newComment) => {
        setComments((prevComments) => [...prevComments, newComment])
    }

    return (
        <div>
            <h1>Review</h1>
            <CommentForm onCommentSubmit={handleCommentSubmit} />
                {comments.map((comment, index) => (
                    <Card Key={index} style= {{ width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>{`Review by ${comment.author}`}</Card.Title>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                <Accordion.Header>Click to see review</Accordion.Header>
                                <Accordion.Body>
                                    {comment.link && (
                                        <Card.Img variant="top" src={comment.link} alt="Album Image" />
                                    )}
                                    <Card.Text>{comment.text}</Card.Text>
                                    <Button variant="primary">Go </Button>
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
