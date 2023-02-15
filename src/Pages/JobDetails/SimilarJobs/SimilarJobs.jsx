import React from 'react';
import SimilarJobsCard from './SimilarJobsCard';

function SimilarJobs() {
    return (
        <div className="border rounded-lg mt-8 p-8">
            <h3 className="text-xl text-secondary font-bold">Similar Jobs</h3>
            <SimilarJobsCard />
            <SimilarJobsCard />
            <SimilarJobsCard />
            <SimilarJobsCard />
            <SimilarJobsCard />
        </div>
    );
}

export default SimilarJobs;
