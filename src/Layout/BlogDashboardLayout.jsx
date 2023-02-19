import React from 'react';
import { Outlet } from 'react-router-dom';

function BlogDashboardLayout() {
    return (
        <div className="">
            <Outlet />
        </div>
    );
}

export default BlogDashboardLayout;
