import React from 'react';
import { Outlet } from 'react-router-dom';

function NestedLayout() {
    return (
        <div className="">
            <Outlet />
        </div>
    );
}

export default NestedLayout;
