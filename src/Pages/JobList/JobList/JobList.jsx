/* eslint-disable radix */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FetchError from '../../../Components/FetchError/FetchError';
import JobGridSkeleton from '../../../Components/LoadingElements/JobGridSkeleton';
import JobRowSkeleton from '../../../Components/LoadingElements/JobRowSkeleton';
import NoDataFound from '../../../Components/NoDataFound/NoDataFound';
import { resetFilter } from '../../../features/filter/filterSlice';
import { useGetJobsQuery } from '../../../features/jobPosts/jobPostApi';
import JobCardThree from '../../Shared/JobCardThree/JobCardThree';
import JobCardTwo from '../../Shared/JobCardTwo/JobCardTwo';
import Pagination from '../../Shared/Pagination/Pagination';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import AdvFilter from '../AdvFilter/AdvFilter';
import FilterModal from '../FilterModal/FilterModal';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import NewsBlogsJL from '../NewsBlogs/NewsBlogsJL';

function JobList() {
    // const { search } = useLocation();
    const [listDesign, setListDesign] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const dispatch = useDispatch();
    const {
        industryFilter,
        salaryFilter,
        jobLevelFilter,
        workPlaceFilter,
        postDateFilter,
        jobTypeFilter,
    } = useSelector((state) => state.filter.jobs);

    // let location;
    // if (search === '?location=Dhaka,%20Bangladesh') {
    //     location = 'Dhaka, Bangladesh';
    // }

    let query = '';

    if (industryFilter.length > 0) {
        query += `industry=${industryFilter.join(',').trim()}`;
    }
    if (salaryFilter.length > 0) {
        if (query.length > 0) query += '&';
        query += `jobLevel=${salaryFilter.join(',').trim()}`;
    }
    if (jobLevelFilter.length > 0) {
        if (query.length > 0) query += '&';
        query += `jobLevel=${jobLevelFilter.join(',').trim()}`;
    }
    if (workPlaceFilter.length > 0) {
        if (query.length > 0) query += '&';
        query += `jobLevel=${jobLevelFilter.join(',').trim()}`;
    }
    if (postDateFilter.length > 0) {
        if (query.length > 0) query += '&';
        query += `jobLevel=${jobLevelFilter.join(',').trim()}`;
    }
    if (jobTypeFilter.length > 0) {
        if (query.length > 0) query += '&';
        query += `jobLevel=${jobLevelFilter.join(',').trim()}`;
    }

    const {
        data: { data: { totalCount, count, jobs = [] } = {} } = {},
        isLoading,
        isSuccess,
        isError,
    } = useGetJobsQuery(query);
    // console.log(page, limit);
    // pagination calculation
    let totalPage;
    if (!isLoading && !isError && totalCount) {
        totalPage = Math.ceil(totalCount / limit);
    }
    let low = page * limit - limit + 1;
    let high = page * limit;
    if (high > totalCount) high = totalCount;
    if (low > totalCount) {
        low = 0;
        high = 0;
    }

    // show as row or column
    const showAsGrid = useCallback(() => {
        setListDesign(false);
    }, []);

    const showAsRow = useCallback(() => {
        setListDesign(true);
    }, []);

    // job list content
    let content = null;
    if (isLoading) {
        content = (
            <>
                {listDesign ? (
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-5">
                        <JobGridSkeleton />
                    </div>
                ) : (
                    <div className="mt-5 grid gap-3">
                        <JobRowSkeleton />
                    </div>
                )}
            </>
        );
    } else if (isSuccess && !isError && jobs.length === 0) {
        content = <NoDataFound />;
    } else if (isSuccess && !isError && jobs.length > 0) {
        content = (
            <>
                {listDesign ? (
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-5">
                        {jobs.map((job) => (
                            <JobCardTwo key={job._id} job={job} />
                        ))}
                    </div>
                ) : (
                    <div className="mt-5 grid gap-3">
                        {jobs.map((job) => (
                            <JobCardThree key={job._id} job={job} />
                        ))}
                    </div>
                )}
            </>
        );
    } else if (isError) {
        content = <FetchError />;
    }

    return (
        <div className="max-w-[1115px] mx-auto">
            <HeaderSearch />
            <div className="mt-8 md:grid md:grid-cols-12 md:gap-6">
                {/* Advance Filter Header */}
                <div className="hidden md:block col-span-3">
                    <div className="border-b border-[#b4c0e0] pb-2 flex items-end justify-between">
                        <h4 className="text-secondary text-xl font-bold">Advance Filter</h4>
                        <button
                            onClick={() => dispatch(resetFilter())}
                            className="text-neutral text-sm hover:text-primary hover:cursor-pointer"
                        >
                            Reset
                        </button>
                    </div>
                    <AdvFilter />
                </div>
                <div className="col-span-9">
                    {/* Job List Header */}
                    <div className="border-b border-[#b4c0e0] flex items-center md:items-end justify-between">
                        {!isLoading && !isError ? (
                            <h4 className="text-accent text-base pb-2">
                                Showing <span className="font-bold">{count}</span> of{' '}
                                <span className="font-bold">{totalCount}</span> Jobs
                            </h4>
                        ) : (
                            <div className="w-32 h-2 bg-gray-300 mb-2 rounded-lg animate-pulse" />
                        )}
                        <div className="hidden md:flex items-center pb-2">
                            <div className="border rounded px-1">
                                <span className="text-[#a0abb8] text-sm">Show:</span>
                                <select
                                    name=""
                                    id=""
                                    className="bg-white focus:outline-none text-sm hover:cursor-pointer"
                                    onChange={(e) => setLimit(e.target.value)}
                                >
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
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
                                <p
                                    className={`border rounded hover:bg-primary hover:text-white px-2 mr-1 hover:cursor-pointer transition duration-300 ${
                                        !listDesign ? 'bg-primary text-white' : 'text-neutral'
                                    }`}
                                    onClick={showAsGrid}
                                >
                                    <i className="fas fa-bars inline-block" />
                                </p>
                                <p
                                    className={`border rounded hover:bg-primary hover:text-white px-2 mr-1 hover:cursor-pointer transition duration-300 ${
                                        listDesign ? 'bg-primary text-white' : 'text-neutral'
                                    }`}
                                    onClick={showAsRow}
                                >
                                    <i className="fas fa-th-large" />
                                </p>
                            </div>
                        </div>
                        {/* The button to open modal */}
                        <label
                            htmlFor="filter-modal"
                            className="bg-info text-primary px-2 rounded md:hidden"
                        >
                            Advance Filter
                        </label>
                    </div>
                    {/* job list */}
                    {content}
                    <div className="mt-10">
                        {[...Array(totalPage).keys()].map((p, i) => (
                            <button
                                key={i}
                                className="btn btn-primary"
                                onClick={() => setPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <Pagination />
                    </div>
                </div>
            </div>
            <NewsBlogsJL />
            <SubscribeBox />
            <FilterModal filter={AdvFilter} />
        </div>
    );
}

export default JobList;
