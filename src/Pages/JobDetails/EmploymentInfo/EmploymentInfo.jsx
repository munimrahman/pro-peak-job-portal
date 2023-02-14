import React from 'react';
import deadline from '../../../assets/employment-info-icon/deadline.svg';
import experience from '../../../assets/employment-info-icon/experience.svg';
import industry from '../../../assets/employment-info-icon/industry.svg';
import jobLevel from '../../../assets/employment-info-icon/job-level.svg';
import jobType from '../../../assets/employment-info-icon/job-type.svg';
import location from '../../../assets/employment-info-icon/location.svg';
import salary from '../../../assets/employment-info-icon/salary.svg';
import updated from '../../../assets/employment-info-icon/updated.svg';

function EmploymentInfo() {
    return (
        <div className="border rounded-lg p-5">
            <h2 className="border-b text-xl font-bold text-secondary pb-2">
                Employment Information
            </h2>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
                <div>
                    <div className="grid grid-cols-12 my-8">
                        <div className="flex items-center col-span-4">
                            <img src={industry} alt="" className="mr-3" />
                            <span className="text-neutral">Industry</span>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">Mechanical</p>
                    </div>
                    <div className="grid grid-cols-12 my-8">
                        <div className="flex items-center col-span-4">
                            <img src={salary} alt="" className="mr-3" />
                            <span className="text-neutral">Salary</span>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">$800 - $1000</p>
                    </div>
                    <div className="grid grid-cols-12 my-8">
                        <div className="flex items-center col-span-4">
                            <img src={jobType} alt="" className="mr-3" />
                            <span className="text-neutral">Job Type</span>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">Permanent</p>
                    </div>
                    <div className="grid grid-cols-12 my-8">
                        <div className="flex items-center col-span-4">
                            <img src={updated} alt="" className="mr-3" />
                            <span className="text-neutral">Updated</span>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">01/05/2023</p>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-12 my-8">
                        <div className="flex items-center col-span-4">
                            <img src={jobLevel} alt="" className="mr-3" />
                            <span className="text-neutral">Job Level</span>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">Mid Level</p>
                    </div>
                    <div className="grid grid-cols-12 my-8">
                        <div className="flex items-center col-span-4">
                            <img src={experience} alt="" className="mr-3" />
                            <span className="text-neutral">Experience</span>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">1 - 2 Years</p>
                    </div>
                    <div className="grid grid-cols-12 my-8">
                        <div className="flex items-center col-span-4">
                            <img src={deadline} alt="" className="mr-3" />
                            <span className="text-neutral">Deadline</span>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">02/06/2023</p>
                    </div>
                    <div className="grid grid-cols-12 my-8">
                        <div className="flex items-center col-span-4">
                            <img src={location} alt="" className="mr-3" />
                            <span className="text-neutral">Location</span>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmploymentInfo;
