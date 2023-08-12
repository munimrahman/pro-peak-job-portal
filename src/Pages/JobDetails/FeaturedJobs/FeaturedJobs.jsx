import React from 'react';
import FetchError from '../../../Components/FetchError/FetchError';
import JobGridSkeleton from '../../../Components/LoadingElements/JobGridSkeleton';
import noData from '../../../assets/no-data.png';
import { useGetJobsQuery } from '../../../features/jobPosts/jobPostApi';
import JobCardTwo from '../../Shared/JobCardTwo/JobCardTwo';

function FeaturedJobs({ jobPost }) {
    const { _id, tags = [] } = jobPost || {};
    const relatedTags = tags.join(',');
    const query = `limit=4&tags=${relatedTags}`;
    console.log(query);
    const {
        data: { data: { jobs: resJobs = [] } = {} } = {},
        isLoading,
        isSuccess,
        isError,
    } = useGetJobsQuery(query);

    const jobs = resJobs.filter((job) => job._id !== _id);
    // job list content
    let content = null;
    if (isLoading) {
        content = (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <JobGridSkeleton />
                <JobGridSkeleton />
                <JobGridSkeleton />
                <JobGridSkeleton />
            </div>
        );
    } else if (isSuccess && !isError && jobs.length === 0) {
        content = (
            <div className="text-center">
                <figure className="flex justify-center">
                    <img src={noData} className="w-2/3 md:w-1/5" alt="no-data-found" />
                </figure>
                <h2 className="text-2xl text-secondary font-bold">No Similar Jobs Found!</h2>
            </div>
        );
    } else if (isSuccess && !isError && jobs.length > 0) {
        content = (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {jobs.map((job) => (
                    <JobCardTwo key={job._id} job={job} />
                ))}
            </div>
        );
    } else if (isError) {
        content = <FetchError />;
    }

    return (
        <div className="mt-8">
            <h1 className="text-3xl text-secondary font-bold">Similar Jobs</h1>
            <p className="text-lg text-neutral my-2">Similar Jobs That You Can Apply For</p>
            {content}
        </div>
    );
}

export default FeaturedJobs;
