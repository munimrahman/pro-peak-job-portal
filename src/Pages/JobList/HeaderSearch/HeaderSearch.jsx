import React from 'react';
import JobSearchBar from '../../../Components/JobSearchBar/JobSearchBar';
import './HeaderSearch.css';

function HeaderSearch({ totalCount }) {
    return (
        <div className="bg-[#f2f6fd] py-12 rounded-xl mt-8 flex flex-col items-center header-search-box">
            <h1 className="text-secondary text-3xl font-bold">
                <span className="text-primary">{totalCount || '0'} Jobs</span> Available Now
            </h1>
            <p className="md:w-6/12 text-center text-sm text-neutral mb-10 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni,
                atque delectus molestias quis?
            </p>
            <JobSearchBar />
        </div>
    );
}

export default HeaderSearch;
