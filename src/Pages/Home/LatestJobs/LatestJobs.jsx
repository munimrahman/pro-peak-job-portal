import React from 'react';
import img from '../../../assets/human.svg';
import JobCardOne from '../../Shared/JobCardOne/JobCardOne';

function LatestJobs() {
    return (
        <div className="mt-16">
            <h1 className="text-4xl text-secondary text-center font-bold">Latest Jobs Post</h1>
            <p className="text-lg text-neutral text-center my-2 md:w-6/12 md:mx-auto">
                Explore the different types of available jobs to apply discover which is right for
                you.
            </p>

            <div className="flex flex-wrap md:justify-center mt-5">
                <div className="flex items-center border hover:border-primary rounded-lg py-2 px-3 mx-1 my-1 hover:cursor-pointer hover:text-primary hover:shadow">
                    <img src={img} alt="" className="w-5" />
                    <span className="ml-2 text-xs font-bold">Management</span>
                </div>
                <div className="flex items-center border hover:border-primary rounded-lg py-2 px-3 mx-1 my-1 hover:cursor-pointer hover:text-primary hover:shadow">
                    <img src={img} alt="" className="w-5" />
                    <span className="ml-2 text-xs font-bold">Marketing & Sales</span>
                </div>
                <div className="flex items-center border hover:border-primary rounded-lg py-2 px-3 mx-1 my-1 hover:cursor-pointer hover:text-primary hover:shadow">
                    <img src={img} alt="" className="w-5" />
                    <span className="ml-2 text-xs font-bold">Finance</span>
                </div>
                <div className="flex items-center border hover:border-primary rounded-lg py-2 px-3 mx-1 my-1 hover:cursor-pointer hover:text-primary hover:shadow">
                    <img src={img} alt="" className="w-5" />
                    <span className="ml-2 text-xs font-bold">Humane Resource</span>
                </div>
                <div className="flex items-center border hover:border-primary rounded-lg py-2 px-3 mx-1 my-1 hover:cursor-pointer hover:text-primary hover:shadow">
                    <img src={img} alt="" className="w-5" />
                    <span className="ml-2 text-xs font-bold">Retail & Products</span>
                </div>
                <div className="flex items-center border hover:border-primary rounded-lg py-2 px-3 mx-1 my-1 hover:cursor-pointer hover:text-primary hover:shadow">
                    <img src={img} alt="" className="w-5" />
                    <span className="ml-2 text-xs font-bold">Content Writer</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <JobCardOne />
                <JobCardOne />
                <JobCardOne />
                <JobCardOne />
                <JobCardOne />
                <JobCardOne />
            </div>
        </div>
    );
}

export default LatestJobs;
