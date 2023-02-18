/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

function RecruiterDashboardLayout() {
    const activeClassName =
        'text-sm bg-info border-l-4 border-primary text-primary active:text-secondary';
    const inActiveClassName =
        'text-sm text-secondary active:bg-info active:text-secondary hover:bg-info';
    const sidebarItems = (
        <>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                    to="/recruiter-dashboard/recruiter"
                >
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                    to="/recruiter-dashboard/recruiter-profile"
                >
                    My Profile
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                    to="/recruiter-dashboard/company-profile"
                >
                    Company Profile
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                    to="/recruiter-dashboard/inbox"
                >
                    Inbox
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                    to="/recruiter-dashboard/manage-jobs"
                >
                    Manage Jobs
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                    to="/recruiter-dashboard/blog"
                >
                    Blog
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                    to="/recruiter-dashboard"
                >
                    Log Out
                </NavLink>
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
                        className="h-full w-full bg-gray-50 relative overflow-y-auto md:ml-56"
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
                                <div className="drawer-content bg-gray-50">
                                    <Outlet />
                                </div>
                                <div className="drawer-side">
                                    <label htmlFor="my-drawer" className="drawer-overlay" />
                                    <ul className="space-y-2 pb-2 menu bg-base-100 w-56">
                                        {sidebarItems}
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden md:block bg-gray-50">
                                <Outlet />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecruiterDashboardLayout;
