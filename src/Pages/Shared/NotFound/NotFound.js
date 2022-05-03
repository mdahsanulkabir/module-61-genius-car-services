import React from 'react';
import sleeping from '../../../images/404.jpg';

const NotFound = () => {
    return (
        <div className='container'>
            <h1 className='text-primary text-center'>Mechanic is sleeping</h1>
            <img src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;