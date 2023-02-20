import React from 'react';
import { Link } from 'react-router-dom';

function JobsByLocationCard({ name, vacancy, companies, colSpan, img }) {
    return (
        <div className={`border rounded-xl p-3 shadow-sm ${colSpan}`}>
            <div className="relative">
                <img src={img} alt="" className="rounded-xl w-full h-60" />
                <div className="absolute top-0 m-2">
                    <span className="capitalize text-xs font-bold bg-info text-primary hover:cursor-pointer px-2 py-1 rounded">
                        Hot
                    </span>
                </div>
            </div>
            <Link to="/company-list">
                <h2 className="text-secondary hover:text-primary text-xl hover:cursor-pointer font-bold mt-4">
                    {name}
                </h2>
            </Link>
            <div className="mt-1 flex justify-between">
                <span className="text-sm text-neutral">{vacancy} Vacancy</span>
                <span className="text-sm text-neutral ml-2">{companies} companies</span>
            </div>
        </div>
    );
}

export default JobsByLocationCard;
