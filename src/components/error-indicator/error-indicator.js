import React from 'react';
import './error-indicator.css';
import icon from './death-star.png'

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <figure className='error-icon'>
                <img src={icon} alt='error-icon'/>
            </figure>
            <p>
                Something wrong
            </p>
        </div>
    )
};
export default ErrorIndicator;