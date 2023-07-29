import React from 'react';

function JobCardSkeleton() {
    return (
        <div className="border rounded-xl p-2 bg-[#F8FAFF] shadow-md">
            <div className="flex flex-col animate-pulse h-full w-full">
                <div className="h-48 rounded-xl bg-gray-300" />
                <div className="pt-7 space-y-2">
                    <div className="w-full h-3 rounded bg-gray-300" />
                    <div className="w-5/6 h-3 rounded bg-gray-300" />
                    <div className="w-3/6 h-2 rounded bg-gray-300" />
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

export default JobCardSkeleton;
