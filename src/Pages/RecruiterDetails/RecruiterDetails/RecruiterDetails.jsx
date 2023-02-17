import React from 'react';
import CompanyDetailsSidebar from '../../CompanyDetails/CompanyInfoSideBar/CompanyInfoSideBar';
import LatestCompanyJobs from '../../CompanyDetails/LatestCompanyJobs/LatestCompanyJobs';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import WeHiring from '../../Shared/WeHiring/WeHiring';
import RecruiterDetailsHeader from '../RecruiterDetailsHeader/RecruiterDetailsHeader';

function RecruiterDetails() {
    return (
        <div className="max-w-[1115px] mx-auto">
            <RecruiterDetailsHeader />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="col-span-8">
                    <LatestCompanyJobs />
                </div>
                <div className="col-span-4">
                    <CompanyDetailsSidebar />
                    <WeHiring />
                </div>
            </div>
            <SubscribeBox />
        </div>
    );
}

export default RecruiterDetails;
