import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>       
            <h1>Here is our Terms And Condetions</h1>
            <p>Go Back To <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;