import React from 'react';
import { Outlet } from 'react-router-dom';

function CandidateProfileLayout() {
    return (
        <div className="">
            <Outlet />
        </div>
    );
}

export default CandidateProfileLayout;
