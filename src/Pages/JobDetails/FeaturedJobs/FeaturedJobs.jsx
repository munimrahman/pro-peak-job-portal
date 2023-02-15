import React from 'react';
import JobCardTwo from '../../Shared/JobCardTwo/JobCardTwo';

function FeaturedJobs() {
    return (
        <div className="mt-16">
            <h1 className="text-3xl text-secondary font-bold">Featured Jobs</h1>
            <p className="text-lg text-neutral my-2">Featured Jobs That You Can Apply For</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                <JobCardTwo />
                <JobCardTwo />
                <JobCardTwo />
                <JobCardTwo />
            </div>
        </div>
    );
}

export default FeaturedJobs;
