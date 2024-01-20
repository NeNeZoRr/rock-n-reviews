import React from 'react';
import ReviewsList from './ReviewsListA';
import SongReviewsList from './ReviewsS'

const Reviews = () => {
    return (  
        <>
            <h1 style={{color:'white'}}>Top 10 Highest Rated Albums</h1>
            <ReviewsList />
            <h1 style={{color:'white'}}>Top 10 highest Rated Songs</h1>
            <SongReviewsList />
        </>
    );
};

export default Reviews;
