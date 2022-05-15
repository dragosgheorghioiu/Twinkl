import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Link to='/chart'>Twinkl</Link>
            <Link to='/signin'>
                <p>Sign in</p>
            </Link>
            <Link to='/aboutus'>
                <p>Sleep fact</p>
            </Link>
            <Link to='/signup'>
                <p>Get Started</p>
            </Link>
        </div>
    );
}

export default Home;
