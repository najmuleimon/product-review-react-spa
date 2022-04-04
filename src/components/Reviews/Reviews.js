import React from 'react';
import useReview from '../hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className="reviews">
            <div className="container">
                <div className='all-reviews'>
                    {
                        reviews.map(review => <Review key={review._id} review={review}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;