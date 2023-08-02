import React from 'react';
import RecruiterSkeleton from '../../../Components/LoadingElements/RecruiterSkeleton';
import { useGetCompaniesQuery } from '../../../features/company/companyApi';
import CompanyCard from '../../Shared/TopRecruitersCard/TopRecruitersCard';

function TopRecruiters() {
    const {
        data: { data: { companies = [] } = {} } = {},
        isLoading,
        isError,
        isSuccess,
    } = useGetCompaniesQuery('limit=8');

    let listContent = null;

    if (isLoading) {
        listContent = (
            <div className="grid grid-cols-1 gap-3 lg:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
                <RecruiterSkeleton />
                <RecruiterSkeleton />
                <RecruiterSkeleton />
                <RecruiterSkeleton />
                <RecruiterSkeleton />
                <RecruiterSkeleton />
                <RecruiterSkeleton />
                <RecruiterSkeleton />
            </div>
        );
    } else if (isSuccess && !isError && companies.length > 0) {
        listContent = (
            <div className="grid grid-cols-1 gap-3 lg:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
                {companies.map((company) => (
                    <CompanyCard key={company._id} company={company} />
                ))}
            </div>
        );
    }

    return (
        <div className="mt-16">
            <h1 className="text-4xl text-secondary text-center font-bold">Top Recruiters</h1>
            <p className="text-lg text-neutral text-center my-2">
                Discover your next career move, freelance gig, or internship
            </p>
            {listContent}
        </div>
    );
}

export default TopRecruiters;
