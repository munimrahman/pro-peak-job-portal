/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import jobDetailsImg from '../../../assets/job-details.png';
import useAuth from '../../../hooks/useAuth';

function JobDetailsHeader({ jobPost = {}, setModalCheck, modalCheck }) {
    const { title, jobType, createdAt, company: { coverPhoto } = {} } = jobPost;
    console.log(coverPhoto);
    const isLoggedIn = useAuth();
    const { user: { role } = {} } = useSelector((state) => state.auth);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(isLoggedIn, role);
    let applyButton = null;
    if (isLoggedIn && role === 'candidate') {
        applyButton = (
            <button onClick={() => setModalCheck(!modalCheck)} className="btn btn-primary">
                Apply Now
            </button>
        );
    } else if (isLoggedIn && (role === 'recruiter' || 'admin')) {
        applyButton = null;
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
        <div className="my-10">
            <div className="">
                <img src={coverPhoto || jobDetailsImg} alt="" className="rounded-2xl w-full h-72" />
            </div>

            <div className="flex justify-between items-start mt-5">
                <div>
                    <h1 className="text-secondary text-3xl font-bold">{title}</h1>
                    <div className="text-xs text-neutral  mt-3">
                        <span className="mr-3">
                            <i className="fas fa-briefcase mr-1" /> {jobType}
                        </span>
                        <span className="">
                            <i className="far fa-clock mr-1" /> {moment(createdAt).fromNow()}
                        </span>
                    </div>
                </div>
                {applyButton}
            </div>
            <div className="divider" />
        </div>
    );
}

export default JobDetailsHeader;
