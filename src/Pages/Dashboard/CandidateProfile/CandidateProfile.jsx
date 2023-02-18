/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink } from 'react-router-dom';

function CandidateProfile() {
    return (
        <div className="p-8">
            <h2 className="text-secondary text-2xl">Hello! Welcome to Your Profile!</h2>
            <div className="tabs mt-5">
                <NavLink to="/" className="tab tab-bordered">
                    Tab 1
                </NavLink>
                <NavLink to="/" className="tab tab-bordered tab-active">
                    Tab 2
                </NavLink>
                <NavLink to="/" className="tab tab-bordered">
                    Tab 3
                </NavLink>
            </div>
        </div>
    );
}

export default CandidateProfile;
