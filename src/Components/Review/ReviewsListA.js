import React, { useState, useEffect } from 'react';
import "../../App.css"
import { Container, Row, Col, Card } from 'react-bootstrap';

// ReviewsList component
function ReviewsList() {
    const [reviews, setReviews] = useState([]);

    // Fetch reviews from the backend
    useEffect(() => {
        fetch('http://localhost:8080/reviews/all')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error.message));
    }, []);

    // Get top 10 rated albums
    const top10Albums = reviews
        .sort((a, b) => b.rating - a.rating) 
        .slice(0, 10); 

    return (
        <Container>
            <Row xs={1} md={4}>
                {top10Albums.map((review, index) => (
                    <Col key={index}>
                        <Card
                            className="cards"
                            style={{ width: '17vw', margin: '3rem', height: '24vh' }}
                        >
                            <Card.Body>
                                <Card.Title style={{ color:'white'}}>{review.artist}</Card.Title>
                                <Card.Text style={{ color:'white'}}>Album: {review.albumTitle}</Card.Text>
                                <Card.Text style={{ color:'white'}}>Rating: {review.rating}</Card.Text>
                                <Card.Text style={{ color:'white'}}>Comments: {review.comments}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ReviewsList;



