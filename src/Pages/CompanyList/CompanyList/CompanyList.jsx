/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollRestoration } from 'react-router-dom';
import FetchError from '../../../Components/FetchError/FetchError';
import RecruiterSkeleton from '../../../Components/LoadingElements/RecruiterSkeleton';
import NoDataFound from '../../../Components/NoDataFound/NoDataFound';
import { useGetCompaniesQuery } from '../../../features/company/companyApi';
import { resetFilter } from '../../../features/filter/filterSlice';
import useTitle from '../../../hooks/useTitle';
import NewsBlogsJL from '../../JobList/NewsBlogs/NewsBlogsJL';
import HeaderBrowseSearch from '../../Shared/HeaderBrowseSearch/HeaderBrowseSearch';
import Pagination from '../../Shared/Pagination/Pagination';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import CompanyCard from '../../Shared/TopRecruitersCard/TopRecruitersCard';
import AdvFilterCompany from '../AdvFilterCompany/AdvFilterCompany';
import FilterModalCompany from '../FilterModalCompany/FilterModalCompany';

function CompanyList() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const dispatch = useDispatch();
    useTitle('Company List | Pro Peak');

    const { industryFilter, companySizeFilter, workPlaceFilter, companySearch } = useSelector(
        (state) => state.filter.company
    );

    // setup query for fetch data from api
    let query = '';
    if (industryFilter.length > 0) {
        query += `industry=${industryFilter.join(',').trim()}`;
    }
    if (companySizeFilter.length > 0) {
        if (query.length > 0) query += '&';
        query += `companySize=${companySizeFilter.join(',').trim()}`;
    }
    if (workPlaceFilter.length > 0) {
        if (query.length > 0) query += '&';
        query += `workPlace=${workPlaceFilter.join(',').trim()}`;
    }
    if (companySearch.length > 0) {
        if (query.length > 0) query += '&';
        query += `searchQuery=${companySearch}`;
    }
    if (page) {
        if (query.length > 0) query += '&';
        query += `page=${page}`;
    }
    if (limit) {
        if (query.length > 0) query += '&';
        query += `limit=${limit}`;
    }

    const {
        data: { data: { totalCount, companies = [] } = {} } = {},
        isLoading,
        isSuccess,
        isError,
    } = useGetCompaniesQuery(query);

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
                <RecruiterSkeleton />
                <RecruiterSkeleton />
                <RecruiterSkeleton />
            </div>
        );
    } else if (isSuccess && !isError && companies.length === 0) {
        content = <NoDataFound />;
    } else if (isSuccess && !isError && companies.length > 0) {
        content = (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-5">
                {companies.map((company) => (
                    <CompanyCard key={company._id} company={company} />
                ))}
            </div>
        );
    } else if (isError) {
        content = <FetchError />;
    }

    return (
        <div className="max-w-[1115px] mx-auto">
            <HeaderBrowseSearch
                title="Browse Companies"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?"
            />
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
                    <AdvFilterCompany />
                </div>
                {/* Company List Header */}
                <div className="col-span-9">
                    <div className="border-b border-[#b4c0e0] flex items-center md:items-end justify-between">
                        {!isLoading && !isError ? (
                            <h4 className="text-accent text-base pb-2">
                                Showing{' '}
                                <span className="font-bold">
                                    {low} - {high}
                                </span>{' '}
                                of <span className="font-bold">{totalCount}</span> Companies
                            </h4>
                        ) : (
                            <div className="w-32 h-2 bg-gray-300 mb-2 rounded-lg animate-pulse" />
                        )}
                        <div className="hidden md:flex items-center pb-2">
                            <div className="border rounded px-1 mx-1">
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
                                    <option value="">Newest Post</option>
                                    <option value="">Rating</option>
                                    <option value="">Salary</option>
                                </select>
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
            <NewsBlogsJL />
            <SubscribeBox />
            <FilterModalCompany />
            <ScrollRestoration />
        </div>
    );
}

export default CompanyList;
