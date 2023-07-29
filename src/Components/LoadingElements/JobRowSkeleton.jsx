import React from 'react';

function JobRowSkeleton() {
    return (
        <div className="py-4 border rounded-lg animate-pulse bg-[#F8FAFA]">
            <div className="flex p-4 space-x-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gray-300" />
                <div className="flex-1 py-2 space-y-4">
                    <div className="w-3/6 h-2 rounded bg-gray-300" />
                    <div className="w-1/6 h-2 rounded bg-gray-300" />
                </div>
            </div>
            <div className="p-4 space-y-4">
                <div className="w-full h-3 rounded bg-gray-300" />
                <div className="w-full h-2 rounded bg-gray-300" />
            </div>
            <div className="p-4 space-y-4">
                <div className="w-full h-2 rounded bg-gray-300" />
                <div className="w-3/4 h-2 rounded bg-gray-300" />
            </div>
        </div>
    );
}

export default JobRowSkeleton;
