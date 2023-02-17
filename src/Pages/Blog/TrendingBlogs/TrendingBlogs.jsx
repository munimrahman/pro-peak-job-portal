import React from 'react';
import TrendingCard from './TrendingCard';

function TrendingBlogs() {
    return (
        <div className="border px-5 rounded-md mt-8">
            <h3 className="text-secondary text-xl font-bold mt-7">Trending Now</h3>
            <div className="divider mt-3" />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
        </div>
    );
}

export default TrendingBlogs;
