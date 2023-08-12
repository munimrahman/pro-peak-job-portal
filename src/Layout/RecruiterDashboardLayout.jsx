/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { userLoggedOut } from '../features/auth/authSlice';

function RecruiterDashboardLayout() {
    const dispatch = useDispatch();
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
            {/* TODO: Implement Chat Feature */}
            {/* <li>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                    to="/recruiter-dashboard/inbox"
                >
                    Inbox
                </NavLink>
            </li> */}
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                    to="/recruiter-dashboard/manage-jobs"
                >
                    Manage Jobs
                </NavLink>
            </li>
            {/* TODO: Implement BLog Feature */}
            {/* <li>
                <NavLink
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                    to="/recruiter-dashboard/blog"
                >
                    Blog
                </NavLink>
            </li> */}
            <li>
                <span
                    onClick={() => dispatch(userLoggedOut())}
                    className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                >
                    Log Out
                </span>
            </li>
        </>
    );

    return (
        <div className="min-h-screen flex flex-col h-screen">
            <Navbar />
            {/* <!-- main container --> */}
            <div className="flex-1 flex flex-row overflow-y-hidden">
                <main className="flex-1 overflow-y-auto border-l">
                    <div className="md:hidden">
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
                    </div>
                    <div className="hidden md:block bg-gray-50">
                        <Outlet />
                    </div>
                </main>

                {/* <nav className="order-first sm:w-32 bg-purple-200 overflow-y-auto">Sidebar</nav> */}
                <aside id="sidebar" className="order-first hidden md:block">
                    <div className="relative flex-1 flex flex-col min-h-0 bg-white pt-0">
                        <div className="flex-1 flex flex-col py-2 overflow-y-auto">
                            <div className="flex-1 pl-3 bg-white divide-y space-y-1">
                                <ul className="space-y-2 pb-2 menu bg-base-100 w-56">
                                    {sidebarItems}
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            {/* <!-- end main container --> */}
        </div>
    );
}

export default RecruiterDashboardLayout;
