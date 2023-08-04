import React from 'react';

function QuestionSkeleton() {
    return (
        <div className="bg-info px-5 py-9 rounded-lg shadow-lg animate-pulse">
            <div className="w-5/6 h-3 rounded bg-gray-400" />
            <div className="grid grid-cols-1 md:grid-cols-2 text-secondary">
                <div className="space-y-6 mt-5">
                    <div className="w-3/6 h-3 rounded bg-gray-400" />
                    <div className="w-3/6 h-3 rounded bg-gray-400" />
                </div>
                <div className="space-y-6 mt-5">
                    <div className="w-3/6 h-3 rounded bg-gray-400" />
                    <div className="w-3/6 h-3 rounded bg-gray-400" />
                </div>
            </div>
        </div>
    );
}

export default QuestionSkeleton;
