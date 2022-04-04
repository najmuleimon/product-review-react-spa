import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='not-found'>
            <h1>404</h1>
            <h3>The page you are looking for is not found!!!</h3>
            <button onClick={() => navigate("/")}>back to home</button>
        </div>
    );
};

export default NotFound;