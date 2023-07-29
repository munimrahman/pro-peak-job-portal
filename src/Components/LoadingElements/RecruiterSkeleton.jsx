import React from 'react';

function RecruiterSkeleton() {
    return (
        <div className="border rounded-lg bg-[#F8FAFF] text-center">
            <div className="rounded-lg animate-pulse">
                <div className="flex justify-center p-4 space-x-4 sm:px-8">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gray-300" />
                </div>
                <div className="p-4 space-y-4 sm:px-8">
                    <div className="w-full h-4 rounded bg-gray-300" />
                    <div className="w-full h-2 rounded bg-gray-300" />
                    <div className="w-full h-2 rounded bg-gray-300" />
                    <div className="w-full h-2 rounded bg-gray-300" />
                    <div className="w-3/4 h-2 rounded bg-gray-300" />
                </div>
            </div>
        </div>
    );
}

export default RecruiterSkeleton;
