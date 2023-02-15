import React from 'react';
import JobCardThree from '../../Shared/JobCardThree/JobCardThree';
import Pagination from '../../Shared/Pagination/Pagination';

function LatestCompanyJobs() {
    return (
        <div>
            <h3 className="text-secondary text-xl font-bold mb-5">Latest Jobs</h3>
            <div className="grid gap-3">
                <JobCardThree />
                <JobCardThree />
                <JobCardThree />
            </div>
            <div className="mt-5">
                <Pagination />
            </div>
        </div>
    );
}

export default LatestCompanyJobs;
