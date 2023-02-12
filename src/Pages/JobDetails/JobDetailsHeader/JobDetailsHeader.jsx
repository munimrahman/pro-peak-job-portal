import React from 'react';
import jobDetailsImg from '../../../assets/job-details.png';
import ButtonPrimary from '../../../Components/ButtonPrimary/ButtonPrimary';

function JobDetailsHeader() {
    return (
        <div className="my-10">
            <img src={jobDetailsImg} alt="" className="rounded-2xl" />
            <div className="flex justify-between items-start mt-5">
                <div>
                    <h1 className="text-secondary text-3xl font-bold">
                        Senior Full Stack Engineer, Creator Success Full Time
                    </h1>
                    <div className="text-xs text-neutral  mt-3">
                        <span className="mr-3">
                            <i className="fas fa-briefcase mr-1" /> Fulltime
                        </span>
                        <span className="">
                            <i className="far fa-clock mr-1" />4 minutes ago
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
