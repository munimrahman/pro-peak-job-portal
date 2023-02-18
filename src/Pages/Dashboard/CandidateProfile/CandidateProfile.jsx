/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function CandidateProfile() {
    return (
        <div>
            <h1>Candidate Profile...</h1>
            <div>
                <label
                    htmlFor="dashboard-drawer"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Open drawer
                </label>
            </div>
        </div>
    );
}

export default CandidateProfile;
