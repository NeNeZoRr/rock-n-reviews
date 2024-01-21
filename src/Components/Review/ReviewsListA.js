import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../../App.css';

// ReviewsList component
function ReviewsList() {
    const [reviews, setReviews] = useState([]);

    // Fetch reviews from the backend
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/reviews/all`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error.message));
    }, []);

    const handleDelete = (reviewId) => {
        if (!reviewId) {
            console.error('Invalid reviewId');
            return;
        }

        const confirmDelete = window.confirm('Are you sure you want to delete this review?');
        if (!confirmDelete) return;

        fetch(`${process.env.REACT_APP_BACKEND_URL}/reviews/${reviewId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                setReviews(reviews.filter(review => review._id !== reviewId));
            })
            .catch(error => {
                console.error('Error deleting album review:', error.message);
                alert('Error deleting song review. Please try again.');
            });
    };

    const handleUpdate = (reviewId, updatedComments) => {
        if (!reviewId) {
            console.error('Invalid reviewId');
            return;
        }

        const confirmUpdate = window.confirm('Are you sure you want to update the comments?');
        if (!confirmUpdate) return;

        fetch(`${process.env.REACT_APP_BACKEND_URL}/reviews/${reviewId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comments: updatedComments }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                setReviews(reviews.map(review =>
                    review._id === reviewId ? { ...review, comments: updatedComments } : review
                ));
            })
            .catch(error => {
                console.error('Error updating review:', error.message);
                alert('Error updating review. Please try again.');
            });
    };;


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
                                <Card.Title style={{ color: 'white' }}>{review.artist}</Card.Title>
                                <Card.Text style={{ color: 'white' }}>Album: {review.albumTitle}</Card.Text>
                                <Card.Text style={{ color: 'white' }}>Rating: {review.rating}</Card.Text>
                                <Card.Text style={{ color: 'white' }}>Comments: {review.comments}</Card.Text>
                                <Button variant="danger" onClick={() => handleDelete(review._id)}>
                                    Delete
                                </Button>
                                <Button
                                    variant="info"
                                    onClick={() => {
                                        const updatedComments = prompt('Enter updated comments:');
                                        if (updatedComments !== null) {
                                            handleUpdate(review._id, updatedComments);
                                        }
                                    }}
                                >
                                    Update
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ReviewsList;
