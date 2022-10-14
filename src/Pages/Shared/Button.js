import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ children }) => {
    return (
        <div>
            <div className="">
                <Link class="button btn-wrapping">{children}</Link>
            </div>
        </div>
    );
};

export default Button;