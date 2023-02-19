import React from 'react';
import { NavLink } from 'react-router-dom';

function BlogDashboardHeader({ title }) {
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
                        to="/dashboard/blog/post-new-blog"
                        className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }
                    >
                        Post New Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/blog/update-blog"
                        className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }
                    >
                        Update Blog
                    </NavLink>
                </li>
            </ul>
            <div className="divider my-3" />
        </>
    );
}

export default BlogDashboardHeader;
