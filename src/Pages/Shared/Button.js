import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ children }) => {
    return (
        <Link className="button btn-wrapping">{children}</Link>
    );
};

export default Button;