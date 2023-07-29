import React from 'react';

function FeaturedBlogSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 rounded-xl shadow-xl border">
            <div className="col-span-5">
                <div className="h-full rounded-l-lg bg-gray-300" />
            </div>
            <div className="md:col-span-7 px-8 md:p-8 my-3">
                <div className="pt-5 space-y-3">
                    <div className="w-full h-4 rounded bg-gray-300" />
                    <div className="w-3/4 h-4 rounded bg-gray-300" />
                </div>
                <div className="pt-5 space-y-3">
                    <div className="w-full h-2 rounded bg-gray-300" />
                    <div className="w-full h-2 rounded bg-gray-300" />
                    <div className="w-full h-2 rounded bg-gray-300" />
                    <div className="w-full h-2 rounded bg-gray-300" />
                    <div className="w-full h-2 rounded bg-gray-300" />
                    <div className="w-full h-2 rounded bg-gray-300" />
                    <div className="w-full h-2 rounded bg-gray-300" />
                    <div className="w-3/4 h-2 rounded bg-gray-300" />
                </div>
            </div>
        </div>
    );
}

export default FeaturedBlogSkeleton;
