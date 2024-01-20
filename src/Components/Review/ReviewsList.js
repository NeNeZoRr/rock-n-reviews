import React, { useState, useEffect } from 'react';

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

    return (
        <div>
            <h2>Review</h2>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <p>Artist: {review.artist}</p>
                        <p>Album Title: {review.albumTitle}</p>
                        <p>Rating: {review.rating}</p>
                        <p>Comments: {review.comments}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ReviewsList;

