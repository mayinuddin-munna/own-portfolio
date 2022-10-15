import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../presets/images/LOGO.png'

const Navbar = () => {
    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/service'>Service</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-200 lg:px-48 md:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content font-medium mt-3 p-2 shadow bg-base-200  w-52 uppercase">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl">
                    <img className='rounded-full w-12' src={LOGO} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 uppercase font-medium">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to=''><button className="btn btn-outline btn-accent">login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;