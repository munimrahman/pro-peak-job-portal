import React from 'react';
import industry from '../../../assets/employment-info-icon/industry.svg';
// import salary from '../../../assets/employment-info-icon/salary.svg';
// import jobType from '../../../assets/employment-info-icon/job-type.svg';
// import updated from '../../../assets/employment-info-icon/updated.svg';
// import jobLevel from '../../../assets/employment-info-icon/job-level.svg';
// import experience from '../../../assets/employment-info-icon/experience.svg';
// import deadline from '../../../assets/employment-info-icon/deadline.svg';
// import location from '../../../assets/employment-info-icon/location.svg';

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
                            <p className="text-neutral">
                                {/* <i className="fas fa-industry text-xs w-2 mr-4" /> */}
                                Industry
                            </p>
                        </div>
                        <p className="ml-10 text-secondary col-span-8">
                            Mechanical / Auto / Civil / Construction
                        </p>
                    </div>
                    <div className="grid grid-cols-12 gap- my-8">
                        <p className="text-neutral col-span-4">
                            <i className="far fa-money-bill-alt text-xs w-2 mr-4" />
                            Salary
                        </p>
                        <p className="ml-10 text-secondary col-span-8">Mechanical</p>
                    </div>
                    <div className="grid grid-cols-12 gap- my-8">
                        <p className="text-neutral col-span-4">
                            <i className="fas fa-mug-hot text-xs w-2 mr-4" />
                            Job Type
                        </p>
                        <p className="ml-10 text-secondary col-span-8">Mechanical</p>
                    </div>
                    <div className="grid grid-cols-12 gap- my-8">
                        <p className="text-neutral col-span-4">
                            <i className="fas fa-vote-yea text-xs w-2 mr-4" />
                            Updated
                        </p>
                        <p className="ml-10 text-secondary col-span-8">Mechanical</p>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-12 gap- my-8">
                        <p className="text-neutral col-span-4">
                            <i className="fas fa-level-up-alt mr-2" />
                            Industry
                        </p>
                        <p className="ml-10 text-secondary col-span-8">
                            Mechanical / Auto / Civil / Construction
                        </p>
                    </div>
                    <div className="grid grid-cols-12 gap- my-8">
                        <p className="text-neutral col-span-4">
                            <i className="fas fa-user-tie mr-2" />
                            Salary
                        </p>
                        <p className="ml-10 text-secondary col-span-8">Mechanical</p>
                    </div>
                    <div className="grid grid-cols-12 gap- my-8">
                        <p className="text-neutral col-span-4">
                            <i className="fas fa-business-time text-sm mr-2" />
                            Job Type
                        </p>
                        <p className="ml-10 text-secondary col-span-8">Mechanical</p>
                    </div>
                    <div className="grid grid-cols-12 gap- my-8">
                        <p className="text-neutral col-span-4">
                            <i className="fas fa-map-marker-alt text-sm mr-2" />
                            Updated
                        </p>
                        <p className="ml-10 text-secondary col-span-8">Mechanical</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmploymentInfo;
