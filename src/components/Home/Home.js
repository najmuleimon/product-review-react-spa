import React from 'react';
import './Home.css';
import watch from '../../images/watch.png';
import useReview from '../hooks/useReview';
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReview();
    const navigate = useNavigate();
    return (
        <div>
            <div className='banner'>
                <div className="container">
                    <div className="text-part">
                        <h1>Welcome to <span>Rewatch</span></h1>
                        <h2>Watch Review</h2>
                        <p>Introducing Rewatch Wild Approach To Watchmaking Is On Full Display At Watches & Wonders. Hundreds of fresh watches have arrived to Rewatch pre-owned. Get Reviews of this beautiful watches!</p>
                    </div>
                    <div className="image-part">
                        <img src={watch} alt="" />
                    </div>
                </div>
            </div>

            <div className="reviews">
                <div className="container">
                    <h2>Reviews</h2>
                    <div className="review-container">
                        {
                            reviews.slice(0,3).map(review => <Review key={review._id} review={review}/>)
                        }
                    </div>
                    <button onClick={() => navigate("/reviews")}>View all Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;