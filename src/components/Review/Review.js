import React from 'react';
import './Review.css';

const Review = ({review}) => {
    const {name, user_review, rating, img} = review;
    return (
        <div className='single-review'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{user_review}</p>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default Review;