import React from 'react';
import JobCardThree from '../../Shared/JobCardThree/JobCardThree';

function WorkExperience() {
    return (
        <div>
            <h3 className="text-secondary text-xl font-bold mb-5">Latest Jobs</h3>
            <div className="grid gap-3">
                <JobCardThree />
                <JobCardThree />
                <JobCardThree />
            </div>
        </div>
    );
}

export default WorkExperience;
