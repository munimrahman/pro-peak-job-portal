/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

function DashboardLayout() {
    const sidebarItems = (
        <>
            <li className="bordered">
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/dashboard/candidate-profile">My Profile</Link>
            </li>
            <li>
                <Link to="/dashboard/inbox">Inbox</Link>
            </li>
            <li>
                <Link to="/dashboard/applied-jobs">Applied Jobs</Link>
            </li>
            <li>
                <Link to="/dashboard/skill-test">Skill Test</Link>
            </li>
            <li>
                <Link to="/dashboard/blog">Blog</Link>
            </li>
            <li>
                <Link to="/dashboard">Log Out</Link>
            </li>
        </>
    );

    return (
        <div>
            <Navbar />
            <div>
                <div className="flex overflow-hidden bg-white">
                    <aside
                        id="sidebar"
                        className="fixed hidden h-full top-20 left-0 md:flex flex-shrink-0 flex-col w-56 transition-width duration-75"
                        aria-label="Sidebar"
                    >
                        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                            <div className="flex-1 flex flex-col py-2 overflow-y-auto">
                                <div className="flex-1 px-3 bg-white divide-y space-y-1">
                                    <ul className="space-y-2 pb-2 menu bg-base-100 w-56">
                                        {sidebarItems}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div
                        id="main-content"
                        className="h-full w-full relative overflow-y-auto md:ml-56"
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
                                    <Outlet />
                                </div>
                                <div className="drawer-side">
                                    <label htmlFor="my-drawer" className="drawer-overlay" />
                                    <ul className="space-y-2 pb-2 menu bg-base-100 w-56">
                                        {sidebarItems}
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <Outlet />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;
