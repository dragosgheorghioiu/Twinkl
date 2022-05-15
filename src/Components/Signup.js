import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div>
            <Link to='/signin'>
                <p>Have account?</p>
            </Link>
        </div>
    );
}

export default Signup;
