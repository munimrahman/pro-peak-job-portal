import React from 'react';
import ButtonPrimary from '../../../Components/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../../../Components/ButtonSecondary/ButtonSecondary';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import EmploymentInfo from '../EmploymentInfo/EmploymentInfo';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import JobDescription from '../JobDescription/JobDescription';
import JobDetailsHeader from '../JobDetailsHeader/JobDetailsHeader';
import SimilarJobs from '../SimilarJobs/SimilarJobs';

function JobDetails() {
    return (
        <div className="max-w-[1115px] mx-auto">
            <JobDetailsHeader />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="col-span-8">
                    <EmploymentInfo />
                    <JobDescription />
                    <div>
                        <ButtonPrimary>Apply Now</ButtonPrimary>
                        <ButtonSecondary className="ml-5">Save Job</ButtonSecondary>
                    </div>
                </div>
                <div className="col-span-4">
                    <CompanyInfo />
                    <SimilarJobs />
                </div>
            </div>
            <FeaturedJobs />
            <SubscribeBox />
        </div>
    );
}

export default JobDetails;
