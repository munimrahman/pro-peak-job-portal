/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import ButtonPrimary from '../../../Components/ButtonPrimary/ButtonPrimary';
import logo from '../../../assets/ProPeak.png';
import avatar from '../../../assets/avatar.png';
import { userLoggedOut } from '../../../features/auth/authSlice';
import useAuth from '../../../hooks/useAuth';

function Navbar({ stickyNav }) {
    const dispatch = useDispatch();
    const isLoggedIn = useAuth();
    const { user: { profilePhoto, role, name } = {} } = useSelector((state) => state.auth);
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
                    to="/skill-assessment"
                >
                    Skill Assessment
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
                    {/* show this if user not logged in */}
                    {!isLoggedIn && (
                        <>
                            <NavLink className="mr-3 sm:hidden" to="/log-in">
                                <ButtonPrimary className="btn-outline btn-md">
                                    Get Started
                                </ButtonPrimary>
                            </NavLink>
                            <NavLink className="mr-3 hidden sm:block" to="/sign-up">
                                <ButtonPrimary className="btn-outline">Register</ButtonPrimary>
                            </NavLink>
                            <NavLink className="hidden sm:block" to="/log-in">
                                <ButtonPrimary>LogIn</ButtonPrimary>
                            </NavLink>
                        </>
                    )}

                    {/* show this if user logged in */}

                    {isLoggedIn && (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-16 rounded-full">
                                    <img src={profilePhoto || avatar} alt="" />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt- p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <div className="text-center pt-3 pb-1">
                                    <p className="font-bold">{name}</p>
                                </div>
                                {role === 'candidate' && (
                                    <>
                                        <li>
                                            <Link
                                                to="/dashboard/candidate"
                                                className="justify-between"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/dashboard/candidate-profile/edit"
                                                className="justify-between"
                                            >
                                                Edit Profile
                                            </Link>
                                        </li>
                                    </>
                                )}
                                {(role === 'recruiter' || role === 'admin') && (
                                    <>
                                        <li>
                                            <Link to="/recruiter-dashboard/recruiter">
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/recruiter-dashboard/recruiter-profile/edit">
                                                Edit Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/recruiter-dashboard/company-profile/edit">
                                                Edit Company
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/recruiter-dashboard/manage-jobs/post-new-job">
                                                Post a Job
                                            </Link>
                                        </li>
                                    </>
                                )}
                                <li>
                                    <button onClick={() => dispatch(userLoggedOut())}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
