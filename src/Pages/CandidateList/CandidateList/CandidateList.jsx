/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import NewsBlogsJ from '../../JobList/NewsBlogs/NewsBlogsJL';
import HeaderBrowseSearch from '../../Shared/HeaderBrowseSearch/HeaderBrowseSearch';
import Pagination from '../../Shared/Pagination/Pagination';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import AdvFilterCandidate from '../AdvFilterCandidate/AdvFilterCandidate';
import CandidateCard from '../CandidateCard/CandidateCard';
import FilterModalCandidate from '../FilterModalCandidate/FilterModalCandidate';

function CandidateList() {
    return (
        <div className="max-w-[1115px] mx-auto">
            <HeaderBrowseSearch
                title="Browse Candidates"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?"
            />
            <div className="mt-8 md:grid md:grid-cols-12 md:gap-6">
                {/* Advance Filter Header */}
                <div className="hidden md:block col-span-3">
                    <div className="border-b border-[#b4c0e0] pb-2 flex items-end justify-between">
                        <h4 className="text-secondary text-xl font-bold">Advance Filter</h4>
                        <span className="text-neutral text-sm hover:text-primary hover:cursor-pointer">
                            Reset
                        </span>
                    </div>
                    <AdvFilterCandidate />
                </div>
                {/* Job List Header */}
                <div className="col-span-9">
                    <div className="border-b border-[#b4c0e0] flex items-center md:items-end justify-between">
                        <h4 className="text-accent text-base pb-2">
                            Showing <span className="font-bold">41-60</span> of{' '}
                            <span className="font-bold">944</span> Candidates
                        </h4>
                        <div className="hidden md:flex items-center pb-2">
                            <div className="border rounded px-1">
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
                            <div className="border rounded px-1 mx-1">
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
                            <div className="flex">
                                <p className="border rounded text-neutral hover:bg-primary hover:text-white px-2 mr-1 hover:cursor-pointer transition duration-300">
                                    <i className="fas fa-bars inline-block" />
                                </p>
                                <p className="border rounded text-neutral hover:bg-primary hover:text-white px-2 hover:cursor-pointer transition duration-300">
                                    <i className="fas fa-th-large" />
                                </p>
                            </div>
                        </div>
                        {/* The button to open modal */}
                        <label htmlFor="filter-modal" className="bg-info text-primary px-2 rounded">
                            Advance Filter
                        </label>
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-5">
                        <CandidateCard />
                        <CandidateCard />
                        <CandidateCard />
                        <CandidateCard />
                        <CandidateCard />
                    </div>

                    <div className="mt-10">
                        <Pagination />
                    </div>
                </div>
            </div>
            <NewsBlogsJ />
            <SubscribeBox />
            <FilterModalCandidate />
        </div>
    );
}

export default CandidateList;
