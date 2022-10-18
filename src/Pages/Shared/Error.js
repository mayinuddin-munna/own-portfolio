import './Button.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md justify-self-center">
                    <h1 className="text-4xl font-bold uppercase mb-5">404!</h1>
                    <Link to='/' className="button btn-wrapping w-48">Go to home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;