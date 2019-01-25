import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

export default () => (
    <nav>
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/posts">Posts</Link>
            <Link to="/create">Create Posts</Link>
        </div>
    </nav>
)