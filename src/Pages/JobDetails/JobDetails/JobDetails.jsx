import React from 'react';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import EmploymentInfo from '../EmploymentInfo/EmploymentInfo';
import JobDescription from '../JobDescription/JobDescription';
import JobDetailsHeader from '../JobDetailsHeader/JobDetailsHeader';

function JobDetails() {
    return (
        <div className="max-w-[1115px] mx-auto">
            <JobDetailsHeader />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="col-span-8">
                    <EmploymentInfo />
                    <JobDescription />
                </div>
                <div className="col-span-4">
                    <CompanyInfo />
                </div>
            </div>
        </div>
    );
}

export default JobDetails;
