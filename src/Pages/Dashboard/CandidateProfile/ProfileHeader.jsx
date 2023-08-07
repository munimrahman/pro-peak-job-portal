import React from 'react';
import { NavLink } from 'react-router-dom';

function ProfileHeader({ title }) {
    const activeClassName =
        'mx-2 md:mx-0 md:mr-2 py-2 shadow bg-primary text-white px-3 text-sm rounded';
    const inActiveClassName =
        'mx-2 md:mx-0 md:mr-2 py-2 shadow bg-info text-primary px-3 text-sm rounded';
    return (
        <>
            <h2 className="text-secondary text-3xl">{title}</h2>
            <ul className="flex mt-3">
                <li>
                    <NavLink
                        to="/dashboard/candidate-profile/edit"
                        className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }
                    >
                        Edit Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/candidate-profile/add-experience"
                        className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }
                    >
                        Work Experience
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/candidate-profile/change-password"
                        className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }
                    >
                        Change Password
                    </NavLink>
                </li>
            </ul>
            <div className="divider my-3" />
        </>
    );
}

export default ProfileHeader;
