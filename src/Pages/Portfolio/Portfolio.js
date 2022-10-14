import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex-col px-6">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-bold text-purple-500 mt-1">Welcome</h2>
                        <label htmlFor="my-drawer" className="btn btn-ghost md:hidden lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        <li><Link to="/portfolio">Design</Link></li>
                        <li><Link to="/portfolio/vanillaJs">VanillaJs</Link></li>
                        <li><Link to="/portfolio/apis">APIs</Link></li>
                        <li><Link to="/portfolio/reactJs">React</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;