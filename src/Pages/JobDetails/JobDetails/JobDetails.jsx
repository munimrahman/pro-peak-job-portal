/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { ScrollRestoration, useParams } from 'react-router-dom';
import ButtonSecondary from '../../../Components/ButtonSecondary/ButtonSecondary';
import { useGetSingleJobQuery } from '../../../features/jobPosts/jobPostApi';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import ApplyModal from '../ApplyModal/ApplyModal';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import EmploymentInfo from '../EmploymentInfo/EmploymentInfo';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import JobDescription from '../JobDescription/JobDescription';
import JobDetailsHeader from '../JobDetailsHeader/JobDetailsHeader';
import MeetHiringTeam from '../MeetHiringTeam/MeetHiringTeam';

function JobDetails() {
    const { id } = useParams();
    const { data: { jobPost = {} } = {} } = useGetSingleJobQuery(id);
    const { company } = jobPost || {};
    const [modalCheck, setModalCheck] = useState(false);

    return (
        <div className="max-w-[1115px] mx-auto">
            <JobDetailsHeader
                setModalCheck={setModalCheck}
                modalCheck={modalCheck}
                jobPost={jobPost}
            />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="col-span-8">
                    <EmploymentInfo jobPost={jobPost} />
                    <JobDescription jobPost={jobPost} />
                    <div>
                        <button
                            onClick={() => setModalCheck(!modalCheck)}
                            className="btn btn-primary"
                        >
                            Apply Now
                        </button>

                        <ButtonSecondary className="ml-5">Save Job</ButtonSecondary>
                    </div>
                </div>
                <div className="col-span-4">
                    <CompanyInfo company={company} />
                    <MeetHiringTeam jobPost={jobPost} />
                </div>
            </div>
            <FeaturedJobs jobPost={jobPost} />
            <SubscribeBox />
            <ApplyModal id={id} isChecked={modalCheck} setModalCheck={setModalCheck} />
            <ScrollRestoration />
        </div>
    );
}

export default JobDetails;
