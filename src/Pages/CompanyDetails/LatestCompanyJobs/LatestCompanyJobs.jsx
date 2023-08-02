import React, { useState } from 'react';
import FetchError from '../../../Components/FetchError/FetchError';
import JobRowSkeleton from '../../../Components/LoadingElements/JobRowSkeleton';
import NoDataFound from '../../../Components/NoDataFound/NoDataFound';
import { useGetJobsQuery } from '../../../features/jobPosts/jobPostApi';
import JobCardThree from '../../Shared/JobCardThree/JobCardThree';
import Pagination from '../../Shared/Pagination/Pagination';

function LatestCompanyJobs({ hiringManagerId, companyId }) {
    const [page, setPage] = useState(1);
    const limit = 3;
    // setup query for fetch data from api
    let query = `page=${page}&limit=${limit}`;
    if (hiringManagerId) query += `&hiringManagerId=${hiringManagerId}`;
    if (companyId) query += `&companyId=${companyId}`;

    const {
        data: { data: { totalCount, jobs = [] } = {} } = {},
        isLoading,
        isError,
        isSuccess,
    } = useGetJobsQuery(query);

    // pagination calculation
    let totalPage;
    if (!isLoading && !isError && totalCount) {
        totalPage = Math.ceil(totalCount / limit);
    }

    // job list content
    let content = null;
    if (isLoading) {
        content = (
            <div className="grid gap-3">
                <JobRowSkeleton />
                <JobRowSkeleton />
            </div>
        );
    } else if (isSuccess && !isError && jobs.length === 0) {
        content = <NoDataFound />;
    } else if (isSuccess && !isError && jobs.length > 0) {
        content = (
            <div className="grid gap-3">
                {jobs.map((job) => (
                    <JobCardThree key={job._id} job={job} />
                ))}
            </div>
        );
    } else if (isError) {
        content = <FetchError />;
    }

    return (
        <div>
            <h3 className="text-secondary text-xl font-bold mb-5">Latest Jobs</h3>
            {content}
            {totalPage > 1 && (
                <div className="mt-5">
                    <Pagination totalPage={totalPage} currentPage={page} setPage={setPage} />
                </div>
            )}
        </div>
    );
}

export default LatestCompanyJobs;
