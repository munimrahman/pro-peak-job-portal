import React from 'react';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import WeHiring from '../../Shared/WeHiring/WeHiring';
import CompanyDescription from '../CompanyDescription/CompanyDescription';
import CompanyDetailsHeader from '../CompanyDetailsHeader/CompanyDetailsHeader';
import LatestCompanyJobs from '../LatestCompanyJobs/LatestCompanyJobs';

function CompanyDetails() {
    return (
        <div className="max-w-[1115px] mx-auto">
            <CompanyDetailsHeader />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="col-span-8">
                    <CompanyDescription />
                    <LatestCompanyJobs />
                </div>
                <div className="col-span-4">
                    <WeHiring />
                </div>
            </div>
            <SubscribeBox />
        </div>
    );
}

export default CompanyDetails;
