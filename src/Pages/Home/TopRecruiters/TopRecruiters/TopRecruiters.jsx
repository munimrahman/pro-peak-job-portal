import React from 'react';
import TopRecruitersCard from '../TopRecruitersCard/TopRecruitersCard';

function TopRecruiters() {
    return (
        <div className="mt-16">
            <h1 className="text-4xl text-secondary text-center font-bold">Top Recruiters</h1>
            <p className="text-lg text-neutral text-center my-2">
                Discover your next career move, freelance gig, or internship
            </p>
            <div className="grid grid-cols-1 gap-3 lg:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
                <TopRecruitersCard />
                <TopRecruitersCard />
                <TopRecruitersCard />
                <TopRecruitersCard />
                <TopRecruitersCard />
                <TopRecruitersCard />
                <TopRecruitersCard />
                <TopRecruitersCard />
            </div>
        </div>
    );
}

export default TopRecruiters;
