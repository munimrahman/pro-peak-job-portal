import React from 'react';
import EmploymentInfo from '../EmploymentInfo/EmploymentInfo';
import JobDetailsHeader from '../JobDetailsHeader/JobDetailsHeader';

function JobDetails() {
    return (
        <div className="max-w-[1115px] mx-auto">
            <JobDetailsHeader />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="col-span-8">
                    <EmploymentInfo />
                </div>
                <div className="col-span-4 border border-purple-400">
                    <h1>Company Information</h1>
                </div>
            </div>
        </div>
    );
}

export default JobDetails;
