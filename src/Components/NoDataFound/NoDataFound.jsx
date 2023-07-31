import React from 'react';
import { useDispatch } from 'react-redux';
import noData from '../../assets/no-data.png';
import { clearSearch, resetFilter } from '../../features/filter/filterSlice';

function NoJobsFound() {
    const dispatch = useDispatch('');
    const handleRefresh = () => {
        dispatch(resetFilter());
        dispatch(clearSearch());
    };
    return (
        <div className="text-center">
            <figure className="flex justify-center">
                <img src={noData} className="w-2/3 md:w-1/3" alt="no-data-found" />
            </figure>
            <h2 className="text-2xl text-secondary font-bold">Ups!... no results found</h2>
            <p className="text-secondary font-bold">Please try another search</p>
            <button
                onClick={handleRefresh}
                className="bg-primary text-white px-1 my-1 rounded-md text-sm"
            >
                Refresh Data
            </button>
        </div>
    );
}

export default NoJobsFound;
