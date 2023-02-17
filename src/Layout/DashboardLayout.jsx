/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay" />
                    <ul className="menu p-4 w-64 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/candidate-profile">My Profile</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/candidate-profile">Company Profile</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Post A New Jobs</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Manage Jobs</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">All Applicants</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Shortlisted Resumes</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Applied Jobs</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Shortlisted Jobs</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Inbox</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Skill Test</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Blog</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Packages</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Post a Blog</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Log Out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
