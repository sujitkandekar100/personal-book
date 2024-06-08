import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar">
        <Link to="/bookshelf" className="bookshelf-link">My Bookshelf</Link>
    </nav>
);

export default Navbar;
