import React from 'react';
import './Home.css';
import watch from '../../images/watch.png';

const Home = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className="text-part">
                    <h1>Welcome to <span>Rewatch</span></h1>
                    <h2>Watch Review</h2>
                    <p>Introducing Rewatch Wild Approach To Watchmaking Is On Full Display At Watches & Wonders. Hundreds of fresh watches have arrived to Rewatch pre-owned. Photo ReportMoonSwatch Madness!</p>
                </div>
                <div className="image-part">
                    <img src={watch} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;