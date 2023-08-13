/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ScrollRestoration, useLocation, useNavigate, useParams } from 'react-router-dom';
import ButtonSecondary from '../../../Components/ButtonSecondary/ButtonSecondary';
import LoadingSpinner from '../../../Components/LoadingElements/LoadingSpinner';
import { useGetSingleJobQuery } from '../../../features/jobPosts/jobPostApi';
import useAuth from '../../../hooks/useAuth';
import useTitle from '../../../hooks/useTitle';
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
    const { data: { jobPost = {} } = {}, isLoading, isSuccess } = useGetSingleJobQuery(id);

    const { company, title } = jobPost || {};
    useTitle(`${title || 'Job Details | Pro Peak'}`);
    const [modalCheck, setModalCheck] = useState(false);
    const isLoggedIn = useAuth();
    const { user: { role } = {} } = useSelector((state) => state.auth);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(isLoading, isSuccess);
    let applyButton = null;
    if (isLoggedIn && role === 'candidate') {
        applyButton = (
            <div>
                <button onClick={() => setModalCheck(!modalCheck)} className="btn btn-primary">
                    Apply Now
                </button>
                <ButtonSecondary className="ml-5">Save Job</ButtonSecondary>
            </div>
        );
    } else if (isLoggedIn && (role === 'recruiter' || role === 'admin')) {
        applyButton = (
            <span className="font-bold text-secondary">Log In As Candidate To Apply</span>
        );
    } else {
        const handleRedirect = () => {
            navigate('/log-in', { state: { from: location } });
        };
        applyButton = (
            <button onClick={handleRedirect} className="btn btn-primary">
                Log In To Apply
            </button>
        );
    }

    return (
        <>
            {isLoading ? (
                <div className="h-screen">
                    <LoadingSpinner />
                </div>
            ) : (
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
                            {applyButton}
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
            )}
        </>
    );
}

export default JobDetails;
