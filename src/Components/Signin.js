import React from 'react';
import { Link } from 'react-router-dom';

function Signin() {
    return (
        <div>
            <Link to='/signup'>
                <p>No account?</p>
            </Link>
        </div>
    );
}

export default Signin;
