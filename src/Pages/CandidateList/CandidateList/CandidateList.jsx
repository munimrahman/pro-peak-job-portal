/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollRestoration } from 'react-router-dom';
import FetchError from '../../../Components/FetchError/FetchError';
import JobGridSkeleton from '../../../Components/LoadingElements/JobGridSkeleton';
import NoDataFound from '../../../Components/NoDataFound/NoDataFound';
import { resetFilter } from '../../../features/filter/filterSlice';
import { useGetUsersQuery } from '../../../features/users/usersApi';
import useTitle from '../../../hooks/useTitle';
import NewsBlogsJ from '../../JobList/NewsBlogs/NewsBlogsJL';
import HeaderBrowseSearch from '../../Shared/HeaderBrowseSearch/HeaderBrowseSearch';
import Pagination from '../../Shared/Pagination/Pagination';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import AdvFilterCandidate from '../AdvFilterCandidate/AdvFilterCandidate';
import CandidateCard from '../CandidateCard/CandidateCard';
import FilterModalCandidate from '../FilterModalCandidate/FilterModalCandidate';

function CandidateList() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const dispatch = useDispatch();
    useTitle('Candidate List | Pro Peak');
    const { skillFilter, hourlyRateFilter, certificationFilter, candidateSearch } = useSelector(
        (state) => state.filter.candidate
    );

    // setup query for fetch data from api
    let query = 'role=candidate';
    if (skillFilter.length > 0) {
        query += `&skills=${skillFilter.join(',').trim()}`;
    }
    if (hourlyRateFilter.length > 0) {
        query += `&hourlyRate=${hourlyRateFilter.join(',').trim()}`;
    }
    if (certificationFilter.length > 0) {
        if (query.length > 0) query += '&';
        query += `&certification=${certificationFilter.join(',').trim()}`;
    }
    if (candidateSearch.length > 0) {
        if (query.length > 0) query += '&';
        query += `&searchQuery=${candidateSearch}`;
    }
    if (page) {
        if (query.length > 0) query += '&';
        query += `&page=${page}`;
    }
    if (limit) {
        if (query.length > 0) query += '&';
        query += `&limit=${limit}`;
    }

    const {
        data: { data: { totalCount, users } = {} } = {},
        isLoading,
        isSuccess,
        isError,
    } = useGetUsersQuery(query);

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

    // company list content
    let content = null;
    if (isLoading) {
        content = (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-5">
                <JobGridSkeleton />
                <JobGridSkeleton />
                <JobGridSkeleton />
            </div>
        );
    } else if (isSuccess && !isError && users.length === 0) {
        content = <NoDataFound />;
    } else if (isSuccess && !isError && users.length > 0) {
        content = (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-5">
                {users.map((user) => (
                    <CandidateCard key={user._id} user={user} />
                ))}
            </div>
        );
    } else if (isError) {
        content = <FetchError />;
    }

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
                        <button
                            className="text-neutral text-sm hover:text-primary hover:cursor-pointer"
                            onClick={() => dispatch(resetFilter())}
                        >
                            Reset
                        </button>
                    </div>
                    <AdvFilterCandidate />
                </div>
                {/* Job List Header */}
                <div className="col-span-9">
                    <div className="border-b border-[#b4c0e0] flex items-center md:items-end justify-between">
                        <h4 className="text-accent text-base pb-2">
                            Showing{' '}
                            <span className="font-bold">
                                {low} - {high}
                            </span>{' '}
                            of <span className="font-bold">{totalCount}</span> Candidates
                        </h4>
                        <div className="hidden md:flex items-center pb-2">
                            <div className="border rounded px-1">
                                <span className="text-[#a0abb8] text-sm">Show:</span>
                                <select
                                    name=""
                                    id=""
                                    className="bg-white focus:outline-none text-sm hover:cursor-pointer"
                                    onChange={(e) => setLimit(e.target.value)}
                                >
                                    <option value={6}>6</option>
                                    <option value={9}>9</option>
                                    <option value={12}>12</option>
                                    <option value={15}>15</option>
                                </select>
                            </div>
                            {/* <div className="border rounded px-1 mx-1">
                                <span className="text-[#a0abb8] text-sm">Sort By:</span>
                                <select
                                    name=""
                                    id=""
                                    className="bg-white focus:outline-none text-sm hover:cursor-pointer"
                                >
                                    <option disabled selected>
                                        Default
                                    </option>
                                    <option value="Experience">Experience</option>
                                    <option value="hourlyRate">Hourly Rate</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </div> */}
                            {/* <div className="flex">
                                <p className="border rounded text-neutral hover:bg-primary hover:text-white px-2 mr-1 hover:cursor-pointer transition duration-300">
                                    <i className="fas fa-bars inline-block" />
                                </p>
                                <p className="border rounded text-neutral hover:bg-primary hover:text-white px-2 hover:cursor-pointer transition duration-300">
                                    <i className="fas fa-th-large" />
                                </p>
                            </div> */}
                        </div>
                        {/* The button to open modal */}
                        <label
                            htmlFor="filter-modal"
                            className="bg-info text-primary px-2 rounded md:hidden"
                        >
                            Advance Filter
                        </label>
                    </div>
                    {content}

                    {totalPage > 1 && (
                        <div className="mt-10">
                            <Pagination
                                totalPage={totalPage}
                                currentPage={page}
                                setPage={setPage}
                            />
                        </div>
                    )}
                </div>
            </div>
            <NewsBlogsJ />
            <SubscribeBox />
            <FilterModalCandidate />
            <ScrollRestoration />
        </div>
    );
}

export default CandidateList;
