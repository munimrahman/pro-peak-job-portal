import React from 'react';
import { ScrollRestoration, useParams } from 'react-router-dom';
import ButtonPrimary from '../../../Components/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../../../Components/ButtonSecondary/ButtonSecondary';
import { useGetSingleJobQuery } from '../../../features/jobPosts/jobPostApi';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import EmploymentInfo from '../EmploymentInfo/EmploymentInfo';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import JobDescription from '../JobDescription/JobDescription';
import JobDetailsHeader from '../JobDetailsHeader/JobDetailsHeader';
import MeetHiringTeam from '../MeetHiringTeam/MeetHiringTeam';

function JobDetails() {
    const { id } = useParams();
    const { data: { jobPost = {} } = {} } = useGetSingleJobQuery(id);

    return (
        <div className="max-w-[1115px] mx-auto">
            <JobDetailsHeader jobPost={jobPost} />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="col-span-8">
                    <EmploymentInfo jobPost={jobPost} />
                    <JobDescription jobPost={jobPost} />
                    <div>
                        <ButtonPrimary>Apply Now</ButtonPrimary>
                        <ButtonSecondary className="ml-5">Save Job</ButtonSecondary>
                    </div>
                </div>
                <div className="col-span-4">
                    <CompanyInfo jobPost={jobPost} />
                    <MeetHiringTeam jobPost={jobPost} />
                </div>
            </div>
            <FeaturedJobs jobPost={jobPost} />
            <SubscribeBox />
            <ScrollRestoration />
        </div>
    );
}

export default JobDetails;
