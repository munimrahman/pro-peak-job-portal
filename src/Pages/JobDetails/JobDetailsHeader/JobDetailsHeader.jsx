import moment from 'moment';
import React from 'react';
import ButtonPrimary from '../../../Components/ButtonPrimary/ButtonPrimary';
import jobDetailsImg from '../../../assets/job-details.png';

function JobDetailsHeader({ jobPost = {} }) {
    const { title, coverPhoto, jobType, createdAt } = jobPost;

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
                <ButtonPrimary>Apply Now</ButtonPrimary>
            </div>
            <div className="divider" />
        </div>
    );
}

export default JobDetailsHeader;
