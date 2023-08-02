import moment from 'moment';
import React from 'react';
import deadlineImg from '../../../assets/employment-info-icon/deadline.svg';
import experienceImg from '../../../assets/employment-info-icon/experience.svg';
import industryImg from '../../../assets/employment-info-icon/industry.svg';
import jobLevelImg from '../../../assets/employment-info-icon/job-level.svg';
import jobTypeImg from '../../../assets/employment-info-icon/job-type.svg';
import locationImg from '../../../assets/employment-info-icon/location.svg';
import salaryImg from '../../../assets/employment-info-icon/salary.svg';
import updatedImg from '../../../assets/employment-info-icon/updated.svg';

function EmploymentInfo({ jobPost }) {
    const { industry, salary, jobType, updatedAt, jobLevel, experience, deadline, location } =
        jobPost || {};
    return (
        <div className="border rounded-lg p-5">
            <h2 className="border-b text-xl font-bold text-secondary pb-2">
                Employment Information
            </h2>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
                <div>
                    <div className="grid grid-cols-12 my-8">
                        <div className="flex items-center col-span-4">
                            <img src={industryImg} alt="" className="mr-3" />
                            <span className="text-neutral">Industry</span>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">{industry}</p>
                    </div>
                    <div className="grid grid-cols-12 my-8">
                        <div className="flex items-center col-span-4">
                            <img src={salaryImg} alt="" className="mr-3" />
                            <span className="text-neutral">Salary</span>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">${salary}/Month</p>
                    </div>
                    <div className="grid grid-cols-12 my-8">
                        <div className="flex items-center col-span-4">
                            <img src={jobTypeImg} alt="" className="mr-3" />
                            <span className="text-neutral">Job Type</span>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">{jobType}</p>
                    </div>
                    <div className="grid grid-cols-12 my-8">
                        <div className="flex items-center col-span-4">
                            <img src={updatedImg} alt="" className="mr-3" />
                            <span className="text-neutral">Updated</span>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">
                            {moment(updatedAt).format('ll')}
                        </p>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-12 my-8">
                        <div className="flex items-center col-span-4">
                            <img src={jobLevelImg} alt="" className="mr-3" />
                            <span className="text-neutral">Job Level</span>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">{jobLevel}</p>
                    </div>
                    <div className="grid grid-cols-12 my-8">
                        <div className="flex items-center col-span-4">
                            <img src={experienceImg} alt="" className="mr-3" />
                            <span className="text-neutral">Experience</span>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">{experience}</p>
                    </div>
                    <div className="grid grid-cols-12 my-8">
                        <div className="flex items-center col-span-4">
                            <img src={deadlineImg} alt="" className="mr-3" />
                            <span className="text-neutral">Deadline</span>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">
                            {moment(deadline).format('ll')}
                        </p>
                    </div>
                    <div className="grid grid-cols-12 my-8">
                        <div className="flex items-center col-span-4">
                            <img src={locationImg} alt="" className="mr-3" />
                            <span className="text-neutral">Location</span>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmploymentInfo;
