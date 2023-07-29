import React from 'react';

function TrendingBlogSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-12 animate-pulse">
            <div className="col-span-4">
                <div className="h-full rounded-lg bg-gray-300" />
            </div>
            <div className="md:col-span-8 my-3">
                <div className="space-y-3">
                    <div className="w-full h-3 rounded bg-gray-300" />
                    <div className="w-3/4 h-2 rounded bg-gray-300" />
                </div>
            </div>
        </div>
    );
}

export default TrendingBlogSkeleton;
