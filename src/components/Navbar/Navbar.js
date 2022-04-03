import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navigation'>
            <div className="container">
                <ul className='nav-links'>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/reviews'>Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/dashboard'>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/blogs'>Blogs</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;