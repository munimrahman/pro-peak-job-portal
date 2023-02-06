/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/ProPeak.png';

function Navbar() {
    const [stickyNav, setStickyNav] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            setStickyNav(window.pageYOffset !== 0);
            // eslint-disable-next-line no-return-assign
            return () => (window.onscroll = null);
        };
    }, [setStickyNav]);
    const menuItems = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Find Jobs</Link>
            </li>
            <li>
                <Link to="/">Companies</Link>
            </li>
            <li>
                <Link to="/">Recruiters</Link>
            </li>
            <li>
                <Link to="/">Candidates</Link>
            </li>
            <li>
                <Link to="/">Blogs</Link>
            </li>
        </>
    );
    return (
        <div
            className={`navbar px-20 ${
                stickyNav
                    ? 'fixed shadow-md top-0 bg-white transition-all duration-1000 ease-in-out'
                    : 'py-10'
            }`}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItems}
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} className="w-56" alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{menuItems}</ul>
            </div>
            <div className="navbar-end">
                <Link to="/" className="btn">
                    Get started
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
