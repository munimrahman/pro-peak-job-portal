/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/ProPeak.png';
import ButtonPrimary from '../../../Components/ButtonPrimary/ButtonPrimary';

function Navbar({ stickyNav }) {
    const activeClassName = 'text-sm bg-info text-primary active:text-secondary';
    const inActiveClassName =
        'text-sm text-secondary active:bg-info active:text-secondary hover:bg-info';
    const menuItems = (
        <>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                    to="/find-jobs"
                >
                    Find Jobs
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                    to="/company-list"
                >
                    Companies
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                    to="/candidate-list"
                >
                    Candidates
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                    to="/blogs"
                >
                    Blogs
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                    to="/blogs"
                >
                    Pricing
                </NavLink>
            </li>
        </>
    );
    return (
        <div className={`${stickyNav || 'sticky shadow-md top-0 bg-white'} z-40`}>
            <div className="navbar max-w-[1180px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
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
                    <NavLink to="/">
                        <img src={logo} className="w-56" alt="logo" />
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{menuItems}</ul>
                </div>
                <div className="navbar-end">
                    <NavLink className="mr-3 sm:hidden" to="/">
                        <ButtonPrimary className="btn-outline btn-md">Get Started</ButtonPrimary>
                    </NavLink>
                    <NavLink className="mr-3 hidden sm:block" to="/">
                        <ButtonPrimary className="btn-outline">Register</ButtonPrimary>
                    </NavLink>
                    <NavLink className="hidden sm:block" to="/">
                        <ButtonPrimary>LogIn</ButtonPrimary>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
