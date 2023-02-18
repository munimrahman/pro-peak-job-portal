/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

function Dashboard() {
    return (
        <div>
            <Navbar />
            {/* <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay" />
                    <ul className="menu p-4 w-64 bg-base-100 text-base-content">
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
            </div> */}
            <div>
                <div className="flex overflow-hidden bg-white">
                    <aside
                        id="sidebar"
                        className="fixed hidden h-full top-20 left-0 md:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
                        aria-label="Sidebar"
                    >
                        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                            <div className="flex-1 flex flex-col py-2 overflow-y-auto">
                                <div className="flex-1 px-3 bg-white divide-y space-y-1">
                                    <ul className="space-y-2 pb-2 menu bg-base-100 w-56">
                                        <li className="bordered">
                                            <Link to="/dashboard">Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/candidate-profile">
                                                My Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/candidate-profile">
                                                Company Profile
                                            </Link>
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
                    </aside>
                    <div
                        id="main-content"
                        className="h-full w-full bg-gray-50 relative overflow-y-auto md:ml-64"
                    >
                        <main>
                            <label htmlFor="my-drawer" className="block md:hidden">
                                <div className="flex justify-end">
                                    <p className="bg-info text-primary px-2 py-1 my-2 rounded hover:cursor-pointer">
                                        Menu <i className="fas fa-arrow-circle-right" />
                                    </p>
                                </div>
                            </label>
                            <div className="drawer md:hidden">
                                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content ">
                                    <h1 className="p-10 text-center bg-red-400">Dashboard 1</h1>
                                    <h1 className="p-10 text-center bg-purple-400">Dashboard 2</h1>
                                    <h1 className="p-10 text-center bg-yellow-400">Dashboard 3</h1>
                                    <h1 className="p-10 text-center bg-indigo-400">Dashboard 4</h1>
                                    <h1 className="p-10 text-center bg-green-400">Dashboard 5</h1>
                                    <h1 className="p-10 text-center bg-orange-400">Dashboard 6</h1>
                                    <h1 className="p-10 text-center bg-sky-400">Dashboard 7</h1>
                                </div>
                                <div className="drawer-side">
                                    <label htmlFor="my-drawer" className="drawer-overlay" />
                                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                                        {/* <!-- Sidebar content here --> */}
                                        <li>Sidebar Item 1</li>
                                        <li>Sidebar Item 2</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <h1 className="p-10 text-center bg-red-400">Dashboard 1</h1>
                                <h1 className="p-10 text-center bg-purple-400">Dashboard 2</h1>
                                <h1 className="p-10 text-center bg-yellow-400">Dashboard 3</h1>
                                <h1 className="p-10 text-center bg-indigo-400">Dashboard 4</h1>
                                <h1 className="p-10 text-center bg-green-400">Dashboard 5</h1>
                                <h1 className="p-10 text-center bg-orange-400">Dashboard 6</h1>
                                <h1 className="p-10 text-center bg-sky-400">Dashboard 7</h1>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
