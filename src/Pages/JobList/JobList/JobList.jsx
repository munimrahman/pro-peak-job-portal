/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import JobCardThree from '../../Shared/JobCardThree/JobCardThree';
import JobCardTwo from '../../Shared/JobCardTwo/JobCardTwo';
import Pagination from '../../Shared/Pagination/Pagination';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import AdvFilter from '../AdvFilter/AdvFilter';
import HeaderSearch from '../HeaderSearch/HeaderSearch';

function JobList() {
    return (
        <div className="max-w-[1115px] mx-auto">
            <HeaderSearch />
            <div className="mt-8 md:grid md:grid-cols-12 md:gap-6">
                {/* Advance Filter Header */}
                <div className="col-span-3">
                    <div className="border-b border-[#b4c0e0] pb-2 flex items-end justify-between">
                        <h4 className="text-secondary text-xl font-bold">Advance Filter</h4>
                        <span className="text-neutral text-sm hover:text-primary hover:cursor-pointer">
                            Reset
                        </span>
                    </div>
                    <AdvFilter />
                </div>
                {/* Job List Header */}
                <div className="col-span-9">
                    <div className="border-b border-[#b4c0e0] pb- flex items-end justify-between">
                        <h4 className="text-accent text-base pb-1">
                            Showing <span className="font-bold">41-60</span> of{' '}
                            <span className="font-bold">944</span> Jobs
                        </h4>
                        {/* <div>
                            <div>
                                <select className="select select-bordered focus:outline-none w-full max-w-xs">
                                    <option disabled selected>
                                        Who shot first?
                                    </option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>

                                <select className="select select-bordered focus:outline-none w-full max-w-xs">
                                    <option disabled selected>
                                        Who shot first?
                                    </option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                            <ButtonInfo className="py-1">Filter</ButtonInfo>
                        </div> */}
                        <div className="pb-[6px] flex">
                            <div className="border rounded px-1 mb-1">
                                <span className="text-[#a0abb8] text-sm">Show:</span>
                                <select
                                    name=""
                                    id=""
                                    className="bg-white focus:outline-none text-sm hover:cursor-pointer"
                                >
                                    <option value="">5</option>
                                    <option value="">10</option>
                                    <option value="">15</option>
                                </select>
                            </div>
                            <div className="border rounded px-1 mb-1 ml-1">
                                <span className="text-[#a0abb8] text-sm">Sort By:</span>
                                <select
                                    name=""
                                    id=""
                                    className="bg-white focus:outline-none text-sm hover:cursor-pointer"
                                >
                                    <option value="">Newest Post</option>
                                    <option value="">Rating</option>
                                    <option value="">Salary</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Job List Column */}
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-5">
                        <JobCardTwo />
                        <JobCardTwo />
                        <JobCardTwo />
                    </div>
                    {/* Job List Row */}
                    <div className="mt-5 grid gap-3">
                        <JobCardThree />
                        <JobCardThree />
                        <JobCardThree />
                    </div>
                    <div className="mt-10">
                        <Pagination />
                    </div>
                </div>
            </div>
            <SubscribeBox />
        </div>
    );
}

export default JobList;
